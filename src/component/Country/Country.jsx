import React from 'react';

const Country = ({country}) => {
    
    return (
        <div className='border-[2px] border-[#141414] rounded-[8px] px-[12px] py-[12px] bg-[#fff]'>
            <img className='w-full border rounded-[4px]' src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2 className='text-[28px] font-[700] text[#141414] pt-[20px] pl-3'>Name: {country.name.common}</h2>
            <h4 className='text-[22px] font-[600] text[#141414] py-[7px] pl-3'>Population: {country.population.population}</h4>
            <h4 className='text-[22px] font-[600] text[#141414] pl-3'>Area: {country.area.area} <span className='text-[18px] text-[#FF0000]'>{country.area.area > 300000 ? "(Big Country)" : "(Small Country)"}</span></h4>
            <button className='ml-3 mt-5 px-[20px] py-[10px] rounded-[4px] bg-[#3FBE53] text-[#fff] font-[700] cursor-pointer'>Visit Now</button>
        </div>
    );
};

export default Country;