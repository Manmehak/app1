// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React , {useState} from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";



function App() {

  const [mode, setMode] = useState('light');
  const [text, setText] = useState('Enable Blue Dark Mode');
  const[alert,setAlert] = useState(null);


  const showAlert =(message, type)=>{
    setAlert({
      msg : message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }



  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      setText("Disable Blue Dark Mode");
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      showAlert("Dark Mode has been Enabled", "success");
      document.title = "TextUtils- Blue Dark Mode";
    }
    else{
      setMode('light');
      setText("Enable Blue Dark Mode");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode has been Enabled", "success");
      document.title = "TextUtils- Light Mode";
    }
  }


  // Red Color
  const [textRed, setTextRed] = useState('Enable Red Dark Mode');
  const toggleMode1 = ()=>{
    if(mode==='light'){
      setMode('dark');
      setTextRed("Disable Red Dark Mode");
      document.body.style.backgroundColor = '#7f0b0bde';
      document.body.style.color = 'white';
      showAlert("Dark Mode has been Enabled", "success");
      document.title = "TextUtils- Red Dark Mode";
    }
    else{
      setMode('light');
      setTextRed("Enable Red Dark Mode");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode has been Enabled", "success");
      document.title = "TextUtils- Light Mode";
    }
  }

  // Green Color 
  const [textGreen, setTextGreen] = useState("Enable Green Dark Mode");
  const toggleMode2 = ()=>{
    if(mode==='light'){
      setMode('dark');
      setTextGreen("Disable Green Dark Mode");
      document.body.style.backgroundColor = '#013c01f0';
      document.body.style.color = 'white';
      showAlert("Dark Mode has been Enabled", "success");
      document.title = "TextUtils- Green Dark Mode";
    }
    else{
      setMode('light');
      setTextGreen("Enable Dark Green Mode");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode has been Enabled" , "success");
      document.title = "TextUtils- Light Mode";
    }
  }


  return (
    <>
    {/* <Router> */}

      <Navbar title="TextUtils" home ="Home" about="About" mode={mode} toggleMode={toggleMode} text={text}  toggleMode1 = {toggleMode1} textRed= {textRed} toggleMode2= {toggleMode2} textGreen = {textGreen} />
      <Alert alert={alert}/>
      {/* <Routes> */}
          {/* <Route exact path="/about" element={<About/>} /> */}
          {/* <Route exact path="/" element =  */}
            {<TextForm showAlert={showAlert}  heading="Enter the text to analyze" button1='Convert To UpperCase' button2='Convert to Lowercase' button3='Clear Text' button4='Alternate Casing Lower' button5='Alternate Casing Upper'/>} 
            {/* /> */}
        {/* </Routes> */}

    {/* </Router> */}
    </>
  );
}

export default App;
