
export const Pagination = ({gotoNextPage, gotoPrevPage}) => {

console.log(gotoNextPage, gotoPrevPage)

  return (
    <div>
      {gotoPrevPage && <button onClick={() => gotoPrevPage}>Previous</button>}
      {gotoNextPage && <button onClick={() => gotoNextPage}>Next</button>}
    </div>
  )
}
