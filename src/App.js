import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';


import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

function App() {
  return (<>
   <Router>
        <Navbar title="TextaLyzer"/>
    <Alert alert="Your time is limited, so don't waste it living someone else's life. -Raushan Raj" />
    <div className="container my-3">
  <Switch>
         <Route exact path="/about">

           <About />
     </Route>

          <Route exact path=""> 

          <Textform heading="Enter text to Analyze"/>
          </Route>
        </Switch>
</div>

 </Router> 

<Navbar/>
       <Textform heading="Enter text to Analyze"/>
      </>


  );
}

export default App;
