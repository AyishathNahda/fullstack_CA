import { useState } from 'react'
import React from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ServiceCard from './components/ServiceCard';

const App=()=>{
  const services=[
    {
      title: "Coffee Serving Service",
      description: "A service for coffee lovers!"
    },
    {
      title: "Laundry Service",
      description: "Turn your dirty clothes into brand new ones!"
      
    }
  ];
  return(
    <div className='service-card-list'>
      {services.map((service,index)=>(
        <ServiceCard key={index}{...service}/>

      ))}
    </div>
  );
};


export default App;
