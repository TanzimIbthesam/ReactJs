import React,{useState,useEffect,useRef} from 'react'
import SingleImage from './singleimage';

export default function Images() {
    const [images, setImage] = useState([
          "https://images.unsplash.com/photo-1605447302541-bd14aa1417ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          "https://images.unsplash.com/photo-1605580556856-db8fae94b658?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          "https://images.unsplash.com/photo-1605555649847-b19b05bd048f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          " https://images.unsplash.com/photo-1605536350737-421082456b80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      
        

    ]);
    

  

 const [showImageUrl, setImageUrl] = useState("");

 const inputRef= useRef(true);
 const varRef=useRef(images.length);
 const [updateCount, setupdateCount] = useState(0)
    
  function removeImage(index) {

   

   
       setImage([
            ...images.slice(0,index),
            ...images.slice(index+1,images.length)
          
           
       ])
   

}
function ShowImage(){
 return   images.map((img,index) => <SingleImage image={img} removeImage={removeImage} index={index} />)
}
function inputChange(e) {
    setImageUrl(e.target.value);
    
}
function addToImage(){
 if(showImageUrl !== ""){
            setImage([showImageUrl, ...images]);
         setImageUrl("");

 }
     
 
    

   
}
    useEffect(() => {

  inputRef.current.focus();
  console.log(varRef);
  
    }, [])
    useEffect(() => {

varRef.current=varRef.current+1;
  
    },)
    return (
        
        <div className="w-full ">
            <h1 className="text-2xl text-center pb-8">Images update count is-{varRef.current}</h1>
                 <div className="flex flex-wrap  justify-around">
    
            <ShowImage />
             
             </div>
            <div className="flex justify-center mt-4">
                <input 
                id="inputBox"
                type="text" 
                className="px-4 py-1 border ml-2" 
                value={showImageUrl}
                onChange={inputChange}
                ref={inputRef}
                 
                
                />
                <button 
               
            
                 disabled={showImageUrl=== ""}
            className={`px-4 py-1 text-white ml-2 ${
             showImageUrl !== "" ? "bg-indigo-600" : "bg-indigo-300"
            }`}
                 onClick={addToImage} 
                >
                    Enter Link</button>
               </div>
              
        </div>
     
        

       
        )}