import React from 'react' 
import { Link } from 'react-router-dom' 

function Menu() {
    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-info">
            <div className="container">
                <Link to={`/`} className="navbar-brand text-dark badge bg-light shadow">REDUX</Link>

                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div className="collapse navbar-collapse " id="menu">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item ">
                            <Link to={`/home`} className="nav-link text-white">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/wishlist`} className="nav-link text-white">WishList</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Menu;