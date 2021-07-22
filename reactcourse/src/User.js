const User=(props)=>{

    return(
        <div>
            Sl-{props.index+1}
           User Student-{props.student.name}
            Age  Age-{props.student.age}
            Standard-{props.student.standard}
             {
                 props.student.address.map((stu)=>
                 <div>
                 <div>{stu.city}</div>
                 <div>{stu.house}</div>
                 <div>{stu.area}</div>
                 </div>
                 )
             }
        </div>
    )

}

export default User;