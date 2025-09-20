import React, { use, useState } from 'react';
import Country from '../Country/Country';

const Countries = ({countriesPromise}) => {

    const [visitedCountries, setVisitedCountries] = useState([]);
    
    const handleVisitedCountries = (country) => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    };

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    return (
        <div>
            <h1 className='pt-12 text-[40px] font-[700] text[#141414]'>Countries: {countries.length}</h1>
            <h1 className='pb-5 pt-3 text-[38px] font-[700] text[#141414]'>Total Country Visited: {visitedCountries.length}</h1>
            <div className='flex flex-wrap gap-[15px] mb-10'>
                {
                    visitedCountries.map(country => <div className='border border-[#141414] rounded-[4px] p-[5px] pt-[8px]' key={country.cca3.cca3}>
                        <img className='max-w-[120px]' src={country.flags.flags.png} alt={country.flags.flags.alt} />
                        <h2 className='text-[18px] font-[600] text[#141414] pt-[6px] pl-1'>{country.name.common}</h2>
                        <h2 className='text-[18px] font-[500] text[#141414] pl-1'>{country.capital.capital}</h2>
                    </div>)
                }
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-[15px]'>
                {
                    countries.map(country => <Country key={country.cca3.cca3} country = {country} handleVisitedCountries= {handleVisitedCountries}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;
