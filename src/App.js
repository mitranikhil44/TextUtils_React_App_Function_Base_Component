import "./App.css";
import React, { useState } from 'react'
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#6c757d";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark mode"
    }else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light mode"
    }
  }
  return (
    <>    
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <TextForm showAlert={showAlert} heading="Write your text here" mode={mode}/>
    <About mode={mode}/>
    </>

  );
}

export default App;
