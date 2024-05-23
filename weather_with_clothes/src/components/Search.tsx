import React, { useState } from 'react'
import { hangjungdong } from '../Utils/hangjungdong';
import { beobjungdong } from '../Utils/beobjungdong';
import { Ibeobjungdong } from '../Utils/dataType';
import { BsSearch } from 'react-icons/bs';

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
    const adstrd_cd = event.currentTarget.getAttribute('data-adstrd_cd');

    const test = hangjungdong.filter((ele) => ele["1단계"].includes(dataValue1)&& ele["2단계"].includes(dataValue2) && ele["3단계"].includes(adstrd_cd))

    console.log(test)
  }

  return (
    <div className='right-2 absolute'>
      <div className='flex'> 
        <BsSearch className='absolute left-1 text-black top-1'/>
        <input 
          type="text" 
          value={searchTerm} 
          onChange={handleSearch} 
          onKeyUp={getResult} 
          placeholder="우리 동네 찾기" 
          className='pl-6 left-5 text-black font-light leading-1 rounded-md'
        />
      </div>
      <ul className='mt-2 z-10 w-full max-h-40  scroll-my-2 overflow-y-auto'>
        {result.map((item:Ibeobjungdong, index) => (
          <div className='block max-h-20' onClick={convertToHangjungdong} 
            data-region_1tear={item.ctpv_nm} data-region_2tear={item.ctgg_nm} 
            data-region_3tear={item.adstrd_nm} data-code={item.adstrd_cd}
          key={item.admn_inst_cd}>
            <div className='rounded-md border-solid bg-slate-800 border-2 m-1'>
              <div>
                <li className='ml-2 font-extrabold' key={Math.random()}>{item.lgdng_nm}</li>
              </div>
              <div className='ml-5 flex'>
                <li className='mr-1' key={Math.random()}>{item.ctpv_nm}</li>
                <li className='mr-1' key={Math.random()}>{item.ctgg_nm}</li>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}