import React from 'react'
import Axios from 'axios';
const View=({List,setList,getting})=>
{
    const deleteVal=(e)=>{
      Axios.delete("http://localhost:4000/deleteValue/"+e,).then(success=>{
            alert("Deleted")     
            setList(List.filter(i=>i._id!==e));   
          }) 
    }
    const updateVal=(e)=>{
        var updateName=prompt("Enter your Name");
        var updateEmail=prompt("Enter your Email");
        var updatePhone=prompt("Enter your Phone");
        Axios.put("http://localhost:4000/updateValue/"+e,{Name:updateName,Email:updateEmail,Phone:updatePhone}).then(success=>
        {
            setList(List.map(i=>i._id===e?[...List,success.data]:List))
            getting();
            alert("Update")

        })
    }
    
    return(
        <div>
            {
            List.map((i)=>{
                return (<div >
                    <ul key={i._id}>
            <li>{"Name:"} {i.Name}</li>
            <li>{"Email:"} {i.Email}</li>
            <li>{"Phone:"} {i.Phone}</li>
            <button onClick={deleteVal.bind(this,i._id)}>delete</button> &nbsp;
            <button onClick={updateVal.bind(this,i._id)}>edit</button></ul>
            </div>
                )
            })}
        </div>
    )
}
export default View;