
import React, { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar.js';
import Textform from './components/Textform';
import Alert from './components/Alert';
//import React, { useState } from 'react';



function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert =(message,type)=>
  {
    setAlert({
      msg:message,
      type:type

    })
    setTimeout(()=>
    {
      setAlert(null)

    },3000)
  }

 const toggleMode=()=>
 {
  if(mode==='light')
  {
    setMode('dark');
    document.body.style.backgroundColor="#091657";
    showAlert("DarkMode has been enabled",'success');
    document.title="TextUtils- Dark mode";
    {/*setInterval(()=>
    {
      document.title="TextUtils is amazing Dark mode";
    },2000);

    setInterval(()=>
    {
      document.title="Install TextUtils now";
    },4000);*/}
  }

  
  else
  {
    setMode('light');
    document.body.style.backgroundColor="white";
    showAlert("Light Mode has been enabled",'success');
    document.title="TextUtils- Light mode";
  }
    
 }
  return (
  <>

{/*<Navbar title="textUtils" aboutText="About TextUtils"/>*/}
<Navbar title="textUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>

<div className="container my-3">
<Textform  showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>


</div>

{/*<Navbar/>*/}
{/*<About/>*/}

  </>
  );
}

export default App;
