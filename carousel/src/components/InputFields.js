import React, { useState } from 'react';

const defaultState = {
  name: '',
  modal: '',
  image: '',
}

const InputFieldssss = ({ callbackCarsData }) => {

  const [inputdata, updateInputData] = useState(defaultState)

  const updateName = (inputname) => {
    let newData = { ...inputdata }
    newData['name'] = inputname;
    updateInputData(newData);
  };

  const updateModal = (modal) => {
    let newData = { ...inputdata }
    newData['modal'] = modal;
    updateInputData(newData);
  };

  const updateImage = (imageUrl) => {
    let newData = { ...inputdata }
    newData['image'] = imageUrl;
    updateInputData(newData);
  };

  return (
    <>
      <div>
        <input type="text" placeholder="name" onChange={(e) => updateName(e.target.value)} />
      </div>
      <div>
        <input type="text" placeholder="modal" onChange={(e) => updateModal(e.target.value)} />
      </div>
      <div>
        <input type="text" placeholder="image" onChange={(e) => updateImage(e.target.value)} />
      </div>
      <div>
        <button onClick={() => callbackCarsData(inputdata)}>submit</button>
      </div>
    </>
  )
};

export default InputFieldssss;
