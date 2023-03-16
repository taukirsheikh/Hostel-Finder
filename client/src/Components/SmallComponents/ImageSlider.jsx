import React, { useState } from "react";
import './ImageSlider.css'

const RadioButtonGallery = (props) => {
  const {image_1, image_2, image_3} = props;
  const [selectedImage, setSelectedImage] = useState("1");

  const handleRadioChange = (e) => {
    setSelectedImage(e.target.value);
  };

  const getImageUrl = (image) => {
    return image ? `url(${image})` : `url("https://media.istockphoto.com/id/1166153578/de/vektor/vektor-cartoon-studenten-schlafsaal-raum-innen.jpg?s=612x612&w=0&k=20&c=hUVYv9cvL40_ywb89_ms__HBatti4JmbRsKKlSy8bPY=")`;
  }

  return (
    <div className="picture-container">
      <input
        type="radio"
        name="s"
        className="picture-input"
        value="1"
        checked={selectedImage === "1"}
        onChange={handleRadioChange}
        title="Hostel Image 1"
        style={{ backgroundImage: getImageUrl(image_1) }}
      />
      <input
        type="radio"
        name="s"
        className="picture-input"
        value="2"
        checked={selectedImage === "2"}
        onChange={handleRadioChange}
        title="Hostel Image 2"
        style={{ backgroundImage: getImageUrl(image_2) }}
      />
      <input
        type="radio"
        name="s"
        className="picture-input"
        value="3"
        checked={selectedImage === "3"}
        onChange={handleRadioChange}
        title="Hostel Image 3"
        style={{ backgroundImage: getImageUrl(image_3) }}
      />
    </div>
  );
};

export default RadioButtonGallery;
