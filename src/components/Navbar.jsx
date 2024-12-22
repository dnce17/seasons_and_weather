import React from 'react';
import { NavLink } from 'react-router-dom';
import SeasonsLogo from '../assets/imgs/seasons_logo.png'
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  return (
    <div className='bg-yellow-200'>
      <div className='flex justify-center items-center bg-green-200'>
        <GiHamburgerMenu className='absolute left-4' size={ 25 }/>
        <a href='/'>
            <img src={ SeasonsLogo } className='w-56' alt='all four seasons' />
        </a>
      </div>
      <nav className='flex justify-center'>
          <ul>
            <li><a href='#'>Seasons</a></li>
            <li><a href='#'>Weather</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar

{/* <div class='ctnr navbar'>
    <div class='navbar__items'>
        <div class='nav__toggle'>
            <img src='/static/img/hamburger-icon.png' class='nav__toggle-icon' alt='hamburger icon toggle button'>
        </div>
        <a href='/' class='logo'>
            <img src='/static/img/logo.png' class='logo__img' alt='ball of yarn with crochet stick'>
        </a>
    </div>
    <nav class='nav d-none'>
        <ul class='nav__list nav__list--left'>
            <li class='nav__item'><a href='/' class='nav__link'>Home</a></li>
            <li class='nav__item'><a href='/shop' class='nav__link'>Shop</a></li>
        </ul>
        <ul class='nav__list nav__list--right'>
            <li class='nav__item'><a href='/login' class='nav__link'>Login</a></li>
            <li class='nav__item'><a href='/register' class='nav__link'>Sign Up</a></li>
            <li class='nav__item'><a href='/request' class='nav__link'>Request Order</a></li>
            <li class='nav__item'><a href='/order' class='nav__link'>Check Orders</a></li>
            <li class='nav__item'><a href='/cart' class='nav__link'>Cart(<span class='cart-amt'>0</span>)</a></li>
        </ul>
    </nav>
</div> */}