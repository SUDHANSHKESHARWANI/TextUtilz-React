// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  // const [radioColor, setRadioColor] = useState('blue');
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    }
    )
    setTimeout(
      () => {
        setAlert(null);
      }, 1500
    );
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");

    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      {/* <Router>
        <Navbar title="TextUtilz" about="About us" toggleMode={toggleMode} mode={mode} />
        <Alert showAlert={showAlert} alert={alert} />     
        <Routes>
          <Route path="/about" element={<About />}>
          </Route>          
          <Route exact path="/" element={<div className='container'>
            <TextForm toggleMode={toggleMode} mode={mode} showAlert={showAlert}></TextForm>
          </div>}>
            
          </Route>
        </Routes>
          
        </Router>  */}
        <Navbar title="TextUtilz" about="About us" toggleMode={toggleMode} mode={mode} />
        <Alert showAlert={showAlert} alert={alert} />   
        <div className='container'>
            <TextForm toggleMode={toggleMode} mode={mode} showAlert={showAlert}></TextForm>
          </div>  
    </>
  );
}

export default App;
