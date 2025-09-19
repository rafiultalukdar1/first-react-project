import React, { use } from 'react';
import Country from '../Country/Country';

const Countries = ({countriesPromise}) => {

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    return (
        <div>
            <h1 className='py-12 text-[40px] font-[700] text[#141414]'>Countries: {countries.length}</h1>
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-[15px]'>
                {
                    countries.map(country => <Country key={country.cca3.cca3} country = {country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;
