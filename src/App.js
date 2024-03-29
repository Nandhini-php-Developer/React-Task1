import React from 'react';
// import './App.css';
import './css/style.css';
import Header from './Components/Header';
import Footer from './Components/Footer';


const Name = () => {
  return (
    <b>Nandhini</b>
  )
}

const Mobile = () => {
  return (
    <b>9382393983</b>
  )
}

const Email = () => {
  return (
    <b>naganandhini3012@gmail.com</b>
  )
}

const Content = () => {
  return(
  <div className='ln_content'>
      <p>I am {<Name />}</p>
      <p>Mobile Number :{ <Mobile />}</p>
      <p>Email :{ <Email />}</p>
  </div>
  )
}
function App() {
 return (
    <div className="App">
      {/* <h2>Hello World</h2> */}
      <Header />
      <Content/>
      <Footer />
    </div>
 );
}

export default App;
