import React, { useState } from 'react'
import { hangjungdong } from '../Utils/hangjungdong';
import { beobjungdong } from '../Utils/beobjungdong'

export default function Search() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // console.log(hangjungdong.filter((ele) => console.log(ele["1단계"])))
  console.log(beobjungdong)



  return (
    <div>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={handleSearch} 
        placeholder="Search..." 
      />
      <ul>
        {/* {Object.values(filteredData).map((item, index) => (
          <li key={index}>{item}</li>
        ))} */}
      </ul>
    </div>
  );
}