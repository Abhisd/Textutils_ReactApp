import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
function App() {

  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type
    })

    setTimeout(()=>{
      setAlert(null)
    },1500);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#262626';
      showAlert("Dark mode enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode enabled","success");
    }
  }
  return (
    <>
      <Router>
      <Navbar title="TextUtils" about="About " home=" Home" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>      
      <Routes>
          <Route exact path='/about' element={<About mode={mode} showAlert={showAlert}/>}>  
          </Route>
          <Route exact path='/' element={<TextForm heading="Enter the text to analyse" mode={mode} showAlert={showAlert}/>}>          
          </Route>
      </Routes>
      </Router>    
    </>
  );
}

export default App;
