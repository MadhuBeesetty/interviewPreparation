import{useState} from 'react';

export const SearchBox = ({inputCallback}) =>{

  const [inputText, updateInputText] = useState('');

return(<div>
  <p>this is searchbox</p>
  <input onChange={((e) => updateInputText(e.target.value))}/>
  <button onClick={(() => {inputCallback(inputText)})}>submit</button>
</div>)
}
