import React from 'react';

const Country = ({country}) => {
    
    return (
        <div>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2>Name: {country.name.common}</h2>
            <h4>Population: {country.population.population}</h4>
        </div>
    );
};

export default Country;