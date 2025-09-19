import { Suspense } from 'react';
import './App.css'
import Countries from './component/Countries/Countries'

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json());


function App() {

  return (
    <>
      <Suspense fallback={<h2>Countries are Loading.....</h2>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
