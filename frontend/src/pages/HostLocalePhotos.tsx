import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import HostLocaleFooter from "../components/HostLocaleFooter";
import styles from "./HostLocalePhotos.module.css";
import { BsCloudUpload } from "react-icons/bs";
import axios from "axios";

export default function HostLocalePhotos() {
  const [imagePreviews, setImagePreviews] = useState<(string | undefined)[]>([
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ]);
  const [imageFiles, setImageFiles] = useState<(File | undefined)[]>([
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ]);

  // Handle file drop and update both preview and file state
  const handleDrop = (index: number, acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    const updatedPreviews = [...imagePreviews];
    const updatedFiles = [...imageFiles];

    updatedPreviews[index] = URL.createObjectURL(file); // for preview
    updatedFiles[index] = file; // for upload
    setImagePreviews(updatedPreviews);
    setImageFiles(updatedFiles);
  };

  const dropzoneProps = imagePreviews.map((_, index) =>
    useDropzone({
      accept: "image/*",
      multiple: false,
      onDrop: (acceptedFiles) => handleDrop(index, acceptedFiles),
    })
  );

  const renderDropzone = (index: number) => {
    const { getRootProps, getInputProps, isDragActive } = dropzoneProps[index];

    return (
      <div
        {...getRootProps()}
        className={`${styles.dropzone} ${
          isDragActive ? styles.activeDropzone : ""
        }`}
      >
        <input {...getInputProps()} />
        <div className={styles.dropContent}>
          <BsCloudUpload className={styles.cloudIcon} />
          <p>Drag & Drop an image, or</p>
          <button className={styles.browseButton}>Browse Files</button>
        </div>
      </div>
    );
  };

  // Handle the "Next" button click event to upload images
  const handleNextClick = async () => {
    const formData = new FormData();

    // Append each file to the FormData
    imageFiles.forEach((file, index) => {
      if (file) {
        formData.append(`image_${index + 1}`, file);
      }
    });

    try {
      // Send the FormData to your backend API
      const response = await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        console.log("Images uploaded successfully");
        // Navigate to the next page
      }
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  };

  return (
    <>
      <section className={styles.uploadPhotos}>
        <div className={styles.photos}>
          <h3>Choose at least 5 photos</h3>
          <div className={styles.photosDrag}>
            <span>Drag to reorder</span>
            <span className={styles.drag}>+</span>
          </div>

          <div className={styles.photoContainer}>
            <div className={styles.photoMain}>
              {imagePreviews[0] ? (
                <img
                  src={imagePreviews[0]}
                  alt="Preview"
                  style={{ width: "100%", height: "100%" }}
                />
              ) : (
                renderDropzone(0)
              )}
            </div>

            <div className={styles.otherPhotos}>
              {Array.from({ length: 4 }, (_, i) => (
                <div key={i} className={styles[`photo${i + 1}`]}>
                  {imagePreviews[i + 1] ? (
                    <img
                      src={imagePreviews[i + 1]}
                      alt="Preview"
                      style={{ width: "100%", height: "100%" }}
                    />
                  ) : (
                    renderDropzone(i + 1)
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <HostLocaleFooter>
        <div className={styles.btnContainer}>
          <button onClick={() => navigate(-1)} className={styles.back}>
            Back
          </button>
          <button className={styles.next} onClick={handleNextClick}>
            Next
          </button>
        </div>
      </HostLocaleFooter>
    </>
  );
}
