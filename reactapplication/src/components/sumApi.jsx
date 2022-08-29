
const SumApi = ({ newdata }) => {

  console.log(newdata, 'this is data in parent');
  return (
    <>
      <p>{newdata.name}</p>
    </>
  )
}

export default SumApi;
