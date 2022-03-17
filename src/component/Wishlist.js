import React, { useState,useEffect } from "react"
import { toast } from "react-toastify";


function WishList(props){

    const[data,setData] = useState([]);

    useEffect(() => {
        if(localStorage.getItem("wishList")) {
            let data = JSON.parse(localStorage.getItem("wishList"));
            console.log(`data =`, data);
            setData(data)
           
        }
    }, [])
    
    const deleteWhish = (deleteW) => {
        
       console.log(`id =`, deleteW);
       data.splice(deleteW,1);
       localStorage.setItem("wishList", JSON.stringify(data));
       window.location.href = "/wishlist";
       window.alert('Removed Successfuly')
      
    }

    return(
        <div>
            <h6>
                {
                    data.map((item,key) =>{
                        return(
                           <div className="container col-6 text-center" key={key}>
                               <div className="row">
                                   <div className="">
                                       <div className="card">
                                           <div className="card-body">
                                               <h5>{item}</h5>
                                           </div>
                                           <div className="card-footer">
                                               <button className="btn btn-danger" onClick={() => deleteWhish(key)}>Remove</button>
                                           </div>
                                       </div> 
                                   </div>
                               </div>
                           </div>
                        )
                    })
                }
            </h6>
        </div>
    )
}

export default WishList;