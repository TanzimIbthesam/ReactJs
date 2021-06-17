
import './App.css';

function App() {
  const name='Tanzim';
  const age=25;
  const link='https://www.facebook.com/';
  return (
    <div className="App">
           <p>Hello World-{name} and age is {age}</p>
           <p>{Math.random()*10}</p>
           <p>{['Apple','Mango','Jackfruit']}</p>
           <a href={link} target="_blank">Facebook</a>
    </div>
  );
}

export default App;
