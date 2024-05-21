import React, { useState } from 'react'
import { hangjungdong } from '../Utils/hangjungdong';
import { beobjungdong } from '../Utils/beobjungdong';
import { Ibeobjungdong } from '../Utils/dataType';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [result, setResult] = useState<any>([]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const getResult = () => {
    if(searchTerm.length > 1) {
      setResult(beobjungdong.filter((ele) => ele.ctgg_nm !== ele.lgdng_nm).filter((ele:any) => ele.lgdng_nm.includes(searchTerm)));
      console.log(result);
    } else if (searchTerm.length <= 1){
      setResult([]);
    }
  };

  const convertToHangjungdong = (event) => {

    const dataValue1 = event.currentTarget.getAttribute('data-region_1tear');
    const dataValue2 = event.currentTarget.getAttribute('data-region_2tear');
    const dataValue3 = event.currentTarget.getAttribute('data-region_3tear');

    const test = hangjungdong.filter((ele) => ele["1단계"] === dataValue1 && ele["2단계"] === dataValue2 && ele["3단계"] === dataValue3)

    console.log(test)
  }

  return (
    <div>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={handleSearch} 
        onKeyUp={getResult} 
        placeholder="Search..." 
        className='bg-black'
      />
      <ul>
        {result.map((item:Ibeobjungdong, index) => (
          <div className='flex' onClick={convertToHangjungdong} 
            data-region_1tear={item.ctpv_nm} data-region_2tear={item.ctgg_nm} data-region_3tear={item.adstrd_nm} 
          key={item.admn_inst_cd}>
            <li className='mr-1' key={Math.random()}>{item.ctpv_nm}</li>
            <li className='mr-1' key={Math.random()}>{item.ctgg_nm}</li>
            <li className='mr-1' key={Math.random()}>{item.lgdng_nm}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}