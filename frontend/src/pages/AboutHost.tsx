import { useState } from "react";
import styles from "./AboutHost.module.css";
import HostLocaleFooter from "../components/HostLocaleFooter";
import Spinner from "../components/Spinner";
import useFooterNav from "../hooks/hostLocaleFooterNav";
import { useHostLocale } from "../context/hostLocaleContext";

export default function AboutHost() {
  const [isLoading, setIsLoading, navigate] = useFooterNav("");
  const { state, updateState } = useHostLocale();
  const [hostImagePreview, setHostImagePreview] = useState<string | null>(null);
  const [hostImageFile, setHostImageFile] = useState<File | null>(null);

  // Handle form field changes and update context
  const handleInputChange = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "hostImage") {
      // For image input, update preview and context state
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        setHostImagePreview(URL.createObjectURL(file));
        setHostImageFile(file);
      }
    } else {
      // Update other text fields in the context state
      updateState({ host: { ...state.host, [name]: value } });
    }
  };

  // Handle image upload and update state
  const handleImageUpload = async () => {
    if (hostImageFile) {
      const formData = new FormData();
      formData.append("image", hostImageFile);

      try {
        // Upload the image to the backend
        const response = await fetch(
          "http://localhost:3000/api/v1/upload-locale-images",
          {
            method: "POST",
            body: formData,
          }
        );

        // if (!response.ok) {
        //   throw new Error("Failed to upload image");
        // }

        const result = await response.json();
        console.log(result);
        const imagePath = result.path; // Assuming the backend returns the image path in 'path'

        // Update context with the image path
        updateState({
          host: { ...state.host, image: imagePath },
        });
      } catch (error) {
        console.error("Error uploading image:", error);
        alert("Failed to upload image. Please try again.");
      }
    }
  };

  const handleNextClick = async () => {
    setIsLoading(true);

    // If an image is provided, handle the upload before moving to the next page
    if (hostImageFile) {
      await handleImageUpload();
    }

    // Navigate to the next page
    navigate("/");
    setIsLoading(false);
  };

  return (
    <>
      <section className={styles.section}>
        <div className={styles.formContainer}>
          <h3>About Host</h3>
          <form className={styles.form}>
            <input
              type="text"
              name="name"
              className={styles.hostName}
              placeholder="Host name"
              value={state.host.name}
              onChange={handleInputChange}
            />
            <textarea
              name="about"
              className={styles.aboutHost}
              placeholder="About the host"
              value={state.host.about}
              onChange={handleInputChange}
            ></textarea>
            <div className={styles.fileInputContainer}>
              <input
                type="file"
                name="hostImage"
                className={styles.fileInput}
                onChange={handleInputChange}
              />
              {hostImagePreview && (
                <img
                  src={hostImagePreview}
                  alt="Host Preview"
                  className={styles.imagePreview}
                />
              )}
            </div>
          </form>
        </div>
      </section>
      <HostLocaleFooter>
        <div className={styles.btnContainer}>
          <button onClick={() => navigate(-1)} className={styles.back}>
            Back
          </button>
          <button
            className={`${styles.next} ${isLoading ? styles.loading : ""}`}
            disabled={isLoading}
            onClick={handleNextClick}
          >
            {isLoading ? <Spinner /> : "Next"}
          </button>
        </div>
      </HostLocaleFooter>
    </>
  );
}
