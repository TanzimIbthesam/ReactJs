import {useState} from 'react'


export default function useDebounce() {
const [typetimeout,setTypeTimeout] = useState("");

function debounce(func,wait=1000) {
        clearTimeout(typetimeout);
  const timeout=setTimeout(() =>func(),wait) ;
     setTypeTimeout(timeout);
    
}
  return debounce;
}
