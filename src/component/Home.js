import React,{useState,useEffect} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {addWishList} from '../action/Action'



function Home(props){

    const wishHandler = (name) => {
        props.addToWishList(name);
    }
    
    return(
        <div className='container col-9'>
            <div className="display-4 text-center text-success">University Names</div>
            <h5>
                {
                    props.data.map((item,key) => {
                        const{country,name,web_pages,domains,alpha_two_code} = item;
                        return(
                            <div className="col-md-12 mt-2 mb-2" key={key}>
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="text-primary">{name}</h4>
                                </div>
                                <div className="list-group ">
                                    <div className='list-group-item'>
                                       <span className='h4'>Country</span>
                                       <p className=" float-end">{country}</p>
                                    </div>
                                   
                                 <div className="list-group-item">
                                     <span className='h4'>Domain</span>
                                     <span className='float-end'>{domains}</span>
                                 </div>
                                 <div className="list-group-item">
                                     <span className='h4'>Code</span>
                                     <span className='float-end'>{alpha_two_code}</span>
                                 </div>
                                 <div className="list-group-item">
                                     <span className='h4'>Web Page</span>
                                     <span className='float-end'>{web_pages}</span>
                                 </div>
                                
                                </div>
                               <div className="footer text-center">
                                   <button onClick={()=> wishHandler(name,country) } className="btn btn-success ">Save to Wishlist</button>
                               </div>
                            </div>
                        </div>
                        )
                    })
                } 
            </h5>
        </div>
    )
}


// carry the state from store
const mapStateToProps = (state) => {
    return {
        data: state
    }
}


// action const from dispatcher 
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addToWishList:addWishList
    }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)