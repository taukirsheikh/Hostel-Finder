import React, { useState } from "react";
import './ImageSlider.css'

const RadioButtonGallery = () => {
  const [selectedImage, setSelectedImage] = useState("1");

  const handleRadioChange = (e) => {
    setSelectedImage(e.target.value);
  };

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
        style={{ backgroundImage: "url('https://www.raiuniversity.edu/wp-content/uploads/Hostel-min.jpg')" }}
      />
      <input
        type="radio"
        name="s"
        className="picture-input"
        value="2"
        checked={selectedImage === "2"}
        onChange={handleRadioChange}
        title="Hostel Image 2"
        // style={{ backgroundImage: "url('https://picsum.photos/500/300?random=2')" }}
        style={{ backgroundImage: "url('https://webcp.enablesoft.in/WebsiteImages/27_1/EditorFiles/images/508B7341.JPG')" }}
      />
      <input
        type="radio"
        name="s"
        className="picture-input"
        value="3"
        checked={selectedImage === "3"}
        onChange={handleRadioChange}
        title="Hostel Image 3"
        style={{ backgroundImage: "url('https://www.nrtec.in/wp-content/uploads/2021/01/IMG-20210120-WA0058.jpg')" }}
      />
      {/* <input
        type="radio"
        name="s"
        className="picture-input"
        value="4"
        checked={selectedImage === "4"}
        onChange={handleRadioChange}
        title="Random Picture 4"
        style={{ backgroundImage: "url('https://picsum.photos/500/300?random=4')" }}
      />
      <input
        type="radio"
        name="s"
        className="picture-input"
        value="5"
        checked={selectedImage === "5"}
        onChange={handleRadioChange}
        title="Random Picture 5"
        style={{ backgroundImage: "url('https://picsum.photos/500/300?random=5')" }}
      /> */}
    </div>
  );
};

export default RadioButtonGallery;
