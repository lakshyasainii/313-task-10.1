import React from 'react'
import './Header.css'

function Header ()
{
    return (
        <div className="header">
            <h4>
            <p><b>DEV@Deakin  </b>
            <input name="search" type="text" placeholder="Search" className='m-1' />
            <p><a>Post</a></p>
            <p><a>Login</a></p>
            </p>
            </h4>
            <img src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg" alt="image" />
            
            </div>
    );
}

export default Header