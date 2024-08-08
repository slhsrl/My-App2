// import React, { useState, useEffect } from 'react';        
// import Content from './Components/Content';
// import Navbar from './Components/Navbar';
// import SearcBar from './Components/SearcBar';
// import './App.css';

// function App() {
//   const [data, setData] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("-1");
//   const [inputtext, setinputtext] = useState("");

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//   };
//   const handleInputChange = (input) => {
//     setinputtext(input);
//   };
//   useEffect(() => {
//     fetch('/data.json')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then(data => setData(data.content))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);


//   const suggestionsName = [
//     { id: '1', text: 'Slider' },
//     { id: '2', text: 'Tutorial' },
//     { id: '3', text: 'HTML 5' },
//     { id: '4', text: 'CSS 3' },
//     { id: '5', text: 'Prototyping' }
//   ];
//   let filteredData = data
//   //useMemo
//   if (selectedCategory === ("-1") && inputtext === "") {
//     filteredData = data
//   }
//   else if (selectedCategory === ("-1") && inputtext !== "") {
//     filteredData = data.filter(item => item.h3.toLowerCase().includes(inputtext.toLowerCase()));
//   }
//   else if (selectedCategory !== ("") && inputtext !== "") {
//     filteredData = data.filter(item => item.category.toLowerCase().includes(selectedCategory.toLowerCase()));
//     filteredData = filteredData.filter(item => item.h3.toLowerCase().includes(inputtext.toLowerCase()));
//   }
//   else if (selectedCategory !== ("") && inputtext === "") {
//     filteredData = data.filter(item => item.category.toLowerCase().includes(selectedCategory.toLowerCase()));
//   }
//   return (
//     <div className='app'>
//       <div className='navbar'>
//         <Navbar />
//       </div>
//       <hr></hr>
//       <div className='Searc-Bar'>
//       <SearcBar suggestionsName={suggestionsName} onCategoryChange={handleCategoryChange} onInputChange={handleInputChange} />
//       </div>
//       <Content data={filteredData} />
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect,useMemo, useCallback } from 'react';
import Content from './Components/Content';
import Navbar from './Components/Navbar';
import SearcBar from './Components/SearcBar';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("-1");
  const [inputtext, setinputtext] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  const handleInputChange =  (input) => {
    setinputtext(input);
  };
  useEffect(() => {
    fetch('/data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setData(data.content))
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  const suggestionsName = [
    { id: '1', text: 'Slider' },
    { id: '2', text: 'Tutorial' },
    { id: '3', text: 'HTML 5' },
    { id: '4', text: 'CSS 3' },
    { id: '5', text: 'Prototyping' }
  ];
  // let [filteredData, setFilteredData] = useState([data]);
  let filteredData=data
  //useMemo
   filteredData = useMemo(() => {
    return data.filter(item => {
      const filterCategory = selectedCategory === "-1" || item.category.toLowerCase().includes(selectedCategory.toLowerCase());
      const filterText = inputtext === "" || item.h3.toLowerCase().includes(inputtext.toLowerCase());
  
      return filterCategory && filterText;
    });
  }, [data, selectedCategory, inputtext]);
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <hr></hr>
      <div className='Searc-Bar'>
      <SearcBar suggestionsName={suggestionsName} onCategoryChange={handleCategoryChange} onInputChange={handleInputChange} />
      </div>
          <Content data={filteredData} />    
    </div>
  );
}

export default App;