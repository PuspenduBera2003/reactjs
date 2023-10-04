import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [theme, setTheme] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.body.style.backgroundColor = '#2c2c2c';
      document.body.style.color = '#fff';
      showAlert("success", "Dark Mode Has Been Enabled");
    }
    else {
      setTheme('light');
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = 'black';
      showAlert("success", "Light Mode Has Been Enabled");
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="Home" about="About" theme={theme} toggleTheme={toggleTheme} />
          <Routes>
            <Route exact path='/' element={< TextForm heading="Enter your text below to analyze it" theme={theme} showAlert={showAlert}/>}></Route>
            <Route exact path='/about' element={< About theme={theme}/>}></Route>
          </Routes>
        <Alert alert={alert} />
      </BrowserRouter>
      {/* <TextForm  /> */}
      {/* <About  /> */}
    </>
  );
}

export default App;
