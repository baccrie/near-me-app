import React, { useState } from "react";
import styles from "./Test.module.css";

const LocaleForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    coordinates: {
      latitude: "",
      longitude: "",
    },
    reviews: "",
    host: {
      name: "",
      about: "",
      image: "",
    },
    gallery: {
      image1: "",
      image2: "",
      image3: "",
      image4: "",
    },
    coverImage: "",
    amenities: "",
    status: [
      { day: "Monday", openTime: "08:00", closeTime: "18:00", isOpen: true },
      { day: "Tuesday", openTime: "08:00", closeTime: "18:00", isOpen: true },
      { day: "Wednesday", openTime: "08:00", closeTime: "18:00", isOpen: true },
      { day: "Thursday", openTime: "08:00", closeTime: "18:00", isOpen: true },
      { day: "Friday", openTime: "08:00", closeTime: "18:00", isOpen: true },
      { day: "Saturday", openTime: "10:00", closeTime: "14:00", isOpen: true },
      { day: "Sunday", openTime: "Closed", closeTime: "Closed", isOpen: false },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNestedChange = (e, field) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [field]: {
        ...prev[field],
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Add Locale Information</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </label>

        <label className={styles.label}>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={styles.textarea}
            required
          />
        </label>

        <label className={styles.label}>
          Latitude:
          <input
            type="number"
            name="latitude"
            value={formData.coordinates.latitude}
            onChange={(e) => handleNestedChange(e, "coordinates")}
            className={styles.input}
            required
          />
        </label>

        <label className={styles.label}>
          Longitude:
          <input
            type="number"
            name="longitude"
            value={formData.coordinates.longitude}
            onChange={(e) => handleNestedChange(e, "coordinates")}
            className={styles.input}
            required
          />
        </label>

        <fieldset className={styles.fieldset}>
          <legend>Host Information</legend>
          <label className={styles.label}>
            Host Name:
            <input
              type="text"
              name="name"
              value={formData.host.name}
              onChange={(e) => handleNestedChange(e, "host")}
              className={styles.input}
              required
            />
          </label>

          <label className={styles.label}>
            About Host:
            <textarea
              name="about"
              value={formData.host.about}
              onChange={(e) => handleNestedChange(e, "host")}
              className={styles.textarea}
            />
          </label>

          <label className={styles.label}>
            Host Image URL:
            <input
              type="url"
              name="image"
              value={formData.host.image}
              onChange={(e) => handleNestedChange(e, "host")}
              className={styles.input}
            />
          </label>
        </fieldset>

        <fieldset className={styles.fieldset}>
          <legend>Gallery Images</legend>
          <label className={styles.label}>
            Image 1:
            <input
              type="url"
              name="image1"
              value={formData.gallery.image1}
              onChange={(e) => handleNestedChange(e, "gallery")}
              className={styles.input}
            />
          </label>
          <label className={styles.label}>
            Image 2:
            <input
              type="url"
              name="image2"
              value={formData.gallery.image2}
              onChange={(e) => handleNestedChange(e, "gallery")}
              className={styles.input}
            />
          </label>
          <label className={styles.label}>
            Image 3:
            <input
              type="url"
              name="image3"
              value={formData.gallery.image3}
              onChange={(e) => handleNestedChange(e, "gallery")}
              className={styles.input}
            />
          </label>
          <label className={styles.label}>
            Image 4:
            <input
              type="url"
              name="image4"
              value={formData.gallery.image4}
              onChange={(e) => handleNestedChange(e, "gallery")}
              className={styles.input}
            />
          </label>
        </fieldset>

        <label className={styles.label}>
          Cover Image URL:
          <input
            type="url"
            name="coverImage"
            value={formData.coverImage}
            onChange={handleChange}
            className={styles.input}
          />
        </label>

        <label className={styles.label}>
          Amenities (Comma-separated IDs):
          <input
            type="text"
            name="amenities"
            value={formData.amenities}
            onChange={handleChange}
            className={styles.input}
          />
        </label>

        <fieldset className={styles.fieldset}>
          <legend>Status</legend>
          {formData.status.map((dayStatus, index) => (
            <div key={index} className={styles.statusRow}>
              <span className={styles.day}>{dayStatus.day}:</span>
              <input
                type="time"
                name="openTime"
                value={dayStatus.openTime}
                onChange={(e) => {
                  const updatedStatus = [...formData.status];
                  updatedStatus[index].openTime = e.target.value;
                  setFormData((prev) => ({ ...prev, status: updatedStatus }));
                }}
                className={styles.inputSmall}
                required
              />
              -
              <input
                type="time"
                name="closeTime"
                value={dayStatus.closeTime}
                onChange={(e) => {
                  const updatedStatus = [...formData.status];
                  updatedStatus[index].closeTime = e.target.value;
                  setFormData((prev) => ({ ...prev, status: updatedStatus }));
                }}
                className={styles.inputSmall}
                required
              />
              <input
                type="checkbox"
                name="isOpen"
                checked={dayStatus.isOpen}
                onChange={(e) => {
                  const updatedStatus = [...formData.status];
                  updatedStatus[index].isOpen = e.target.checked;
                  setFormData((prev) => ({ ...prev, status: updatedStatus }));
                }}
                className={styles.checkbox}
              />{" "}
              Open
            </div>
          ))}
        </fieldset>

        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default LocaleForm;
