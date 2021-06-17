
import './App.css';
import Navbar from './Navbar'
function App() {

  const name='Tanzim';
  const age=25;
  const link='https://www.facebook.com/';
  return (
    <div className="App">
             <Navbar />
           <p class="blue">Hello World-{name} and age is {age}</p>
           {/* Dynamic styling */}
           <button style={{
             backgroundColor:"green",
             color:"white",
             padding:"10px 40px"
           }}>Send</button>
           <p>{Math.random()*10}</p>
           <p>{['Apple','Mango','Jackfruit']}</p>
           <a href={link} >Facebook</a>
    </div>
  );
}

export default App;
