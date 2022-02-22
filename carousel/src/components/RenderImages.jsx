import React from 'react';
import './RenderImage.css';

const RenderImagesData = ({ imageData }) => {
  console.log(imageData, "this is data");
  return (
    <>
      <img className="image" src={imageData.image} alt={imageData.name} />
      <p>name: {imageData.name} </p>
      <p>modal: {imageData.modal} </p>
    </>
  );
};

export default RenderImagesData;
