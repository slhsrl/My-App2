import React from 'react';
import './SearcBar.css';

function SearcBar({ suggestionsName, onCategoryChange, onInputChange }) {


  const handleChange = (event) => {
    onCategoryChange(event.target.value);
  };
  const inputhandleChange = (event) => {
    onInputChange(event.target.value);
  };

  if (!Array.isArray(suggestionsName)) {
    return <p>Error: suggestionsName is not an array</p>;
  }

  const handleClick = (text) => {
    alert(`Button clicked: ${text}`);
  };
  console.log('searc rendered')
  return (
    <div className='button-container'>
      <h1>Hello, May I help you ?</h1>
      <div className='Search-Field'>
        <select onChange={handleChange} name='category-select'>
          <option value="-1">All Categorys</option>
          <option value="0">Selected Category</option>
          <option value="1">Selected Category2</option>
        </select>
        <input id='searc-input' onChange={inputhandleChange} type="text" placeholder="Type your questions..." />
      </div >
      

      <div className='Suggestions'>
        <p>Suggestions :</p>
        {suggestionsName.map(suggestion => (
          <button
            key={suggestion.id}
            onClick={() => handleClick(suggestion.text)}
          >
            {suggestion.text}
          </button>
          
        ))}
      </div>
    </div>
  );

}

export default SearcBar;