
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';


function App() {
  return (
 
<> 
<Navbar title="TextUtils" />
<div className="container my-5">
  <About/>

  {/* <Textform heading="enter the text to Analyize "/> */}
</div>
</>



    
  );
}

export default App;
