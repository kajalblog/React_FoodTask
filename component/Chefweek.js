import React from 'react'
import {useState,useEffect} from 'react';
import api from '../api/Connection'

function Chefweek() {
 const[email,setEmail]=useState("");
 const[first_name,setFname]=useState("");
 const[last_name,setLname] =useState("");
 const[avatar,setAvtar]=useState("");
 const[users,setUser]=useState([]);

 const retrivedata=async()=>{
     const response=await api.get('/chefweek');
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
      <div className='conatiner-fluid bg-white py-4 my-5'>
         
          <div className='container br-light py-4 mt-5'>
          <div className='row'>

            <h1>Chefweek</h1>
    {
        users.map((e)=> { 
            return(
                // <div className="container  float-left justify-content-center">
            
                <div className='col-lg-3'>
                     
                <div class="card-group">
                {/* <div className='col-12 col-md-6 col-lg-3 mx-0 mb-4 ' > */}
                <div className="card p-0 mb-4 shadow " key={e.chefid} style={ {width:"r18em"}} >
            <img src={e.chefprofile} className="card-img-top img-fluid" />
            <div className="card-body text-center">
                <h4 className='text-red'>ChefID -: {e.chefid}</h4>
              <h5 className="card-title">Chefname: {e.chefname}</h5>
              {/* <p>{e.aboutChef}</p> */}
              
            </div>
        
          </div>
          {/* </div> */}
          </div>
          </div>
        //   </div>
         
            )
        })

    }
    </div>
    </div>

    </div>
    

    // by using map method fetch the data

  )
}

export default Chefweek