import { useState } from "react"


const Form=()=>{
    const [name,setName]=useState({firstName:'',lastName:''})
    return (
        <div>
            <form>
                {/* <input type="text" onChange={e=>setName({firstName:e.target.value})} /> <br />
                <input type="text" onChange={e=>setName({lastName:e.target.value})} /> */}
                <input type="text" onChange={e=>setName({...name,firstName:e.target.value})} /> <br />
                <input type="text" onChange={e=>setName({...name,lastName:e.target.value})} />
                 Your firstname is {name.firstName}
                 your lastname is {name.lastName}
                {/* <h1>{JSON.stringify(name)}</h1> */}
            </form>
        </div>
    )
}
 export default Form;