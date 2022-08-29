import { useState, useEffect } from "react";
import InputBox from "./inputbox";
import VideoPlayer from "./videoPlayer";
import SumApi from './sumApi';

const Parent = () => {
  const [data, updateData] = useState([]);
  const [apiData, updateApiData] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/people/1/')
      .then(res => res.json())
      .then(data => updateApiData(data))
      .catch((error) => {
        return { error, results: [] }
      })
  }, []);

  const dataCallback = (str) => {
    let newData = [...data];
    newData.push(str);
    updateData(newData);
  };
  console.log(apiData, 'this');
  return (
    <>
      <InputBox dataFn={dataCallback} allData={data} />
      <VideoPlayer />
      <SumApi newdata={apiData} />
    </>
  )
}

export default Parent;
