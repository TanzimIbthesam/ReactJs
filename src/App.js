
import './App.css';

function App() {
     const handleClick=()=>{
        console.log("Clicked");
     }
  const name='Tanzim';
  const changeName=(name)=>{
    console.log(`The changed name is ${name}`)

  }
  const target=(e)=>{
    console.log(e.target);
  }
  const age=25;
  const link='https://www.facebook.com/';
  return (
    <div className="App">
            <button onClick={handleClick}>Handle Click</button>
            {/* Wrong way it fires or renders directly from the start */}
           <button onClick={()=>{changeName("Tanzim Ibthesam")}}>Change Name</button>
           <button onClick={target}>Targettted</button>
    </div>
  );
}

export default App;
