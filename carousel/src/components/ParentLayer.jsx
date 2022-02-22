import React, { useState } from 'react';
import InputFieldssss from './InputFields';
import RenderImagesData from './RenderImages';

const ParentComponent = () => {

  const [carsData, updateCarsData] = useState([])

  const [carosalNumbers, updateCarosalNumbers] = ([0, 1, 2])

  const updateCarosal = (limit) => {
    if (limit === "left") {
      if (carosalNumbers[0] === 0) return;
      let newcarosal = [...carosalNumbers];
      newcarosal.unshift(newcarosal[0] - 1);
      newcarosal.pop();
      updateCarosalNumbers(newcarosal);
    }
    if (limit === "right") {
      if (carosalNumbers[(carosalNumbers.length - 1)] === 6) return;
      let newcarosal = [...carosalNumbers];
      newcarosal.push(carosalNumbers[2] + 1);
      newcarosal.shift();
      updateCarosalNumbers(newcarosal);
    }
  }

  let renderData = [];

  renderData = (carosalNumbers.map((num) => renderData.push(carsData[num])));

  const callbackCarsData = (incomingData) => {
    let newData = [...carsData];
    newData.push(incomingData);
    updateCarsData(newData)
  };

  console.log(renderData, 'this is render data');

  return (
    <>
      <p>Cars input form</p>
      <InputFieldssss callbackCarsData={callbackCarsData} />
      <button onClick={(() => { updateCarosal('left') })}>left</button>
      {(renderData.map((data) => <RenderImagesData imageData={data} />))}
      <button>right</button>
    </>
  )
};

export default ParentComponent;
