// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Home from './components/Home';
import Features from './components/features';
import Clients from './components/Clients';
import Services from './components/Services';
import Footer from './components/Footer';
import Vedio from './components/Vedio';
import FormPage from './components/FormPage';
// import ContactUsPage from './components/contactUsPage';



function App() {
  const [mode , setMode] = useState ('dark')
  const [alertMessage, setAlert] = useState('');

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
 
  const    toggleMode =() =>{
    if(mode === 'dark'){
       setMode('light');
       document.body.style.backgroundColor = 'white';
       showAlert('Switched to light Mode');
    }else{
     setMode('dark');
     document.body.style.backgroundColor = 'black';
     showAlert('Switched to dark Mode');
 }
}

  return (
    <>
     <Navbar  mode = {mode} toggleMode = {toggleMode}/>
     <Alert alert = {alertMessage} />
     <Home/>
     <Features/>
     <Services/>
       <Vedio/>
       <Clients/>
       {/* <ContactUsPage/> */}
       <FormPage/>
   <Footer/>
    </>
  
  );
}
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
export default App;
