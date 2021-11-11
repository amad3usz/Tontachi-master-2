import React from 'react';


const Navbar = () => {
  return(
<nav>  
<ul class="menu">
        <li class="logo"><a href="/Home">Home</a></li>
        <li class="item"><a href="/Market">Marketplace</a></li>
        <li class="item"><a href="#">NFT Game Import</a></li>
        <li class="item"><a href="#">FAQ</a></li>
        <li class="toggle"><a href="#"><i class="fa fa-bars" id="bars"></i></a></li>
      </ul>
</nav>
  )
}

export default Navbar;