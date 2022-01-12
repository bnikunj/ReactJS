import './App.css';
import React, {useState} from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/alert';

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setmode("dark");
      document.body.style.backgroundColor = "#2c1458";
      showAlert("dark mode has been enabled","success");
    }else{
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled","success");
    }
  }

  return (
    <>
      <Navbar title="portfolio" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className='container my-3'>
        <TextForm heading="Enter The Text To Analyze Below" showAlert={showAlert} mode={mode}/>
      </div>
    </>
  );
}

export default App;
