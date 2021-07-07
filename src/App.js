
import './App.css';
// import CounterOne from './CounterOne';
import CounterTwo from './CounterTwo';
// import ComponentC from './ComponentC';
// import React,{createContext} from 'react';

// export const UserContext = createContext();
// export const ChannelContext = createContext()

// CounterTwo
function App() {
  return (
    <div className="App">
    {/* <UserContext.Provider value={'Tanzim101'}>
    <ChannelContext.Provider value={'Codevolution'}>
					<ComponentC />
				</ChannelContext.Provider>
    </UserContext.Provider> */}
     
   <CounterTwo />
    </div>
  );
}

export default App;
