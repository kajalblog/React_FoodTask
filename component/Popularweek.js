import React from 'react'
import {useState,useEffect} from 'react';
import api from '../api/Connection';
// import img1 from  '../Images/1.jpeg';

function Popularweek() {
 
 const[popular,setPopular]=useState([]);
 const[chef,setChef]=useState([]);

 const retrivepopular=async()=>{
     const response=await api.get('/popularweek');
     return response;

 }
 const retrivechef=async()=>{
     const response1=await api.get('/chefweek');
     return response1;

 }
 useEffect(()=>{
     const result=async()=>{
         const getdata=await retrivepopular();
         console.log(getdata);
         setPopular(getdata.data);

     }
     result();

     const result1=async()=>{
         const getchif=await retrivechef();
         console.log(getchif);
         setChef(getchif.data)
     }
     result1();


 },[])

  return (
      <div className='conatiner-fluid bg-white '>
          
              
          <div className='container br-light py-4 mt-4'>
          <button className='btn btn-outline-success btn-sm ' style={{borderRadius:"25px"}}>prev</button>&nbsp;
              <button className='btn btn-outline-success btn-sm ' style={{borderRadius:"25px"}}>Next</button>
        
          <div className='row '>
                      <h1>Popular Weekly Food</h1>
    {
        popular.map((e)=> { 
            return(
                // <div className="container  float-left justify-content-center">
            
                <div className='col-lg-4'>
                     
                <div class="card-group mt-4">
                {/* <div className='col-12 col-md-6 col-lg-3 mx-0 mb-4 ' > */}
                <div className="card p-0 mb-4 shadow " key={e.id} style={ {width:"r18em"}} >
                    {/* {(()=>{
                        // for(i=0;i<3;i<e.chefprofile.length;i++)
                        
                    })()} */}
                <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={e.chefprofile} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={e.chefprofile} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={e.chefprofile} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            {/* <img src={e.chefprofile} className="card-img-top img-fluid" /> */}
            <div className="card-body text-center">
              <span>{}</span>
                {chef.map((event)=>{
                  return(
                    <div>
                    <img src={event.chefprofile} style={{height:"50px",width:"50px",borderRadius:"25px"}}></img>
                    <h6 className="text-muted">chefname:{event.chefname}</h6>
                    </div>
                  )
                })}
              <div className='d-flex justify-content-between'>  
             
              <a href="#" class="btn btn-danger btn-sm float-left" style={{width:"60px" }}>4.5<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg></a><span>(10 reviews)</span>
              <a href='#' className="btn btn-outline-success btn-sm ">View Details</a>
              </div>
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

export default Popularweek