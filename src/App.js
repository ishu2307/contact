import React from 'react';
import Axios from 'axios';
import View from  './view' ;
import  './index.css';

function App(){
  const [input,setInput]=React.useState()
  const [input1,setInput1]=React.useState()
  const [input2,setInput2]=React.useState()
  const [list,setlist]=React.useState([])
  const getting=()=>{
    Axios.get("http://localhost:4000/value").then(res=>{
      setlist(res.data);
    });
  }
  React.useEffect(()=>{
    getting()
  },[]);
  
  const getName=(event)=>
  {
    setInput(event.target.value)
  }
const getEmail=(event1)=>
{
  setInput1(event1.target.value)
}
const getPhone=(event2)=>
{
  setInput2(event2.target.value)
}
const getValue=(input,input1,input2)=>
{
  Axios.post("http://localhost:4000/add",{Name:input,Email:input1,Phone:input2})
  .then(success=>{
    setlist([...list,success.data])
   getting();

    setInput("");
    setInput1("");
    setInput2("");
  })
}
return(<div class="App">

  <h2>CONTACT MANAGER</h2>
  {"ENTER YOUR NAME"}&nbsp;&nbsp;&nbsp;<input type="text" onChange={getName} value={input}></input><br></br><br></br>
  {"ENTER YOUR E-MAIL"}&nbsp;&nbsp;<input type="text" onChange={getEmail} value={input1}></input><br></br><br></br>
  {"ENTER YOUR NUMBER"}&nbsp;<input type="text" onChange={getPhone} value={input2}></input><br></br><br></br>

  <button onClick={()=>{
    getValue(input,input1,input2);
  }}>contact</button>
  

  <View List={list} setList={setlist} getting={getting} />
 </div>)
}
export default App;