
import './App.css';
import CounterOne from './CounterOne';
// import ComponentC from './ComponentC';
// import React,{createContext} from 'react';

// export const UserContext = createContext();
// export const ChannelContext = createContext()


function App() {
  return (
    <div className="App">
    {/* <UserContext.Provider value={'Tanzim101'}>
    <ChannelContext.Provider value={'Codevolution'}>
					<ComponentC />
				</ChannelContext.Provider>
    </UserContext.Provider> */}
     
   <CounterOne />
    </div>
  );
}

export default App;
