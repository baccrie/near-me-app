import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import HostLocaleFooter from "../components/HostLocaleFooter";
import styles from "./HostLocalePhotos.module.css";
import { useNavigate } from "react-router-dom";
import useFooterNav from "../hooks/hostLocaleFooterNav";
import { BsCloudUpload } from "react-icons/bs";
import { useHostLocale } from "../context/hostLocaleContext";

export default function HostLocalePhotos() {
  const { updateState } = useHostLocale(); // Access updateState function from context
  const [isLoading, setIsLoading, navigate] = useFooterNav("photos");
  const [imagePreviews, setImagePreviews] = useState<(string | undefined)[]>(
    Array(5).fill(undefined)
  );
  const [imageFiles, setImageFiles] = useState<(File | undefined)[]>(
    Array(5).fill(undefined)
  );

  // Handle file drop and update both preview and file state
  const handleDrop = (index: number, acceptedFiles: File[]) => {
    const file = acceptedFiles[0];

    // Validate file type and size
    if (
      !file ||
      !["image/jpeg", "image/png", "image/gif"].includes(file.type)
    ) {
      alert("Invalid file type. Please upload JPEG, PNG, or GIF images.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert("File size must not exceed 5MB.");
      return;
    }

    // Update state with valid file
    const updatedPreviews = [...imagePreviews];
    const updatedFiles = [...imageFiles];

    updatedPreviews[index] = URL.createObjectURL(file);
    updatedFiles[index] = file;

    setImagePreviews(updatedPreviews);
    setImageFiles(updatedFiles);
  };

  // Generate dropzone props for each slot
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

  // Handle Next Button Click
  const handleNextClick = async () => {
    const formData = new FormData();

    // Filter and append valid files
    imageFiles.forEach((file, index) => {
      if (file) {
        formData.append(`image_${index + 1}`, file);
      }
    });

    // Ensure at least 5 images are selected
    if (imageFiles.filter(Boolean).length < 5) {
      alert("Please upload at least 5 images.");
      return;
    }

    try {
      // Upload images and collect paths
      const uploadedImagePaths: string[] = [];
      for (const file of imageFiles) {
        if (file) {
          const { path } = await uploadImage(file); // Assuming backend returns a path
          uploadedImagePaths.push(path); // Collect image paths from response
        }
      }

      // Update the gallery state with the uploaded paths
      if (uploadedImagePaths.length === 5) {
        updateState({
          gallery: {
            image1: uploadedImagePaths[0],
            image2: uploadedImagePaths[1],
            image3: uploadedImagePaths[2],
            image4: uploadedImagePaths[3],
            image5: uploadedImagePaths[4],
          },
        });
      }

      // Navigate to the next page
      navigate("/host-your-locale/about-host"); // Adjust route as needed
    } catch (error) {
      console.error("Error uploading images:", error);
      alert("Failed to upload images. Please try again.");
    }
  };

  return (
    <>
      <section className={styles.uploadPhotos}>
        <div className={styles.photos}>
          <h3>Choose at least 5 photos</h3>
          <div className={styles.photosDrag}>
            <span>Drag to reorder</span>
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

const uploadImage = async (file: string | Blob) => {
  if (!file) {
    alert("Please select a file!");
    return;
  }

  const formData = new FormData(); // Create FormData object
  formData.append("image", file); // Append the file to the form data

  try {
    const response = await fetch(
      "http://localhost:3000/api/v1/upload-locale-images",
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Bad Response");
    }

    const result = await response.json(); // Assuming the backend returns a JSON response
    return result;
  } catch (error) {
    console.error("Error uploading image:", error);
  }
};
