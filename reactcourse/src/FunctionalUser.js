const FunctionalUser=({name,updateName})=>{

    return(
        <div>
            <h1>Functional component</h1>
            <p>Name  user is-{name}</p>
             <button onClick={updateName}>Update Name</button>
        </div>
    )

}

export default FunctionalUser;