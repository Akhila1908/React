
import './App.css';
import Akhila from './Akhila';
import Sample from './example/Sample'; 
import First from './First' 

const user={
  name:'sri',
  city:'bhimavarm',
  state:'ap'
}
function App() {   
  return (   
    <div className="App">   
      <Akhila /> 
      <First name="akhila" place="Guntur"/>  {/* here parent component passing the data to child*/}
      {/*or this can be written as*/}
   <First name={user.name} place={user.city}/> 
      <Sample /> 
    </div> 
  ); 
  
} 
export default App

