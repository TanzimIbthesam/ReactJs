const User=(props)=>{
    const data={name:"Tanzim",age:25,profession:"Business"}
    return(
        <div>
           <button onClick={()=>props.showName(data)}>Click</button>
        </div>
    )

}

export default User;