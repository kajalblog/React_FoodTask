import React from 'react'
import {useState,useEffect} from 'react';
import api from '../api/Connection'
import Popularweek from './Popularweek';
import Chefweek from './Chefweek';
// import img1 from  '../Images/1.jpeg';

function Fetch() {
 const[email,setEmail]=useState("");
 const[first_name,setFname]=useState("");
 const[last_name,setLname] =useState("");
 const[avatar,setAvtar]=useState("");
 const[users,setUser]=useState([]);

 const retrivedata=async()=>{
     const response=await api.get('/cusinielist');
     return response;

 }
 useEffect(()=>{
     const result=async()=>{
         const getdata=await retrivedata();
         console.log(getdata);
         setUser(getdata.data);

     }
     result();


 },[])

  return (
      <div >
          {/* <img src={img1}></img> */}
    <nav class="navbar navbar-white bg-white shadow ">
    <div class="container-fluid  p-20 justify-content-evenly ">
      <a class="navbar-brand ">Food Order.</a>
      <div class="float-right">
        <button className='btn btn-outline-danger btn-sm' style={{borderRadius:"50px"}}>Become a Chefe</button>&nbsp;&nbsp;
        <button class="btn btn-danger btn-sm " style={{borderRadius:"50px"}} type="submit">Login</button>
      </div>
    </div>
  </nav>
    <div className='d-flex justify-content-center bg-light'> 
    {
        users.map((e)=> { 
            return(
            
            <div className='centerdiv  d-inline-block justify-content-center aline-item-center me-4 mt-5'>
              
               <span class=""><img src={e.imageUrl} style={{height:"50px",width:"50px",borderRadius:"25px"}}></img></span>
                <h6 class="">{e.name}</h6>
           
          
          </div>
         
            )
        })

    }
    </div>
        <Popularweek></Popularweek>
        <Chefweek></Chefweek>

    </div>
    

    // by using map method fetch the data

  )
}

export default Fetch