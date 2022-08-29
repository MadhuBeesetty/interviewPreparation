import { useState, useEffect } from "react";

const InputBox = ({ dataFn, allData }) => {
  const [textInput, updateTextInput] = useState('');

  useEffect(() => {
    console.log(allData, 'all data');
  }, [dataFn, allData]);

  return (
    <div>
      <input type="text" value={textInput} onChange={(e) => { updateTextInput(e.target.value) }} />
      <p>{textInput}</p>
      <button onClick={() => dataFn(textInput)}>sendData</button>
      <>
        {allData.map((e) => <p>{e}</p>)}</>
    </div>
  );
}

export default InputBox;
