import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import CustomLink from './CustomLink';
import './Header.css'
const Header = () => {

    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        // localStorage.removeItem('accessToken');
    };


    const [background, setBackground] = useState(false)

    const changeBackground = () => {

        if (window.scrollY >= 80) {
            setBackground(true)

        } else {
            setBackground(false)

        }
    }

    window.addEventListener('scroll', changeBackground)

    const menuItems =
        <>
            <CustomLink class=" btn-ghost hover:rounded md:p-3 md:m-5" to='/'>Home</CustomLink>
            <CustomLink class="btn-ghost hover:rounded md:p-3 md:m-5" to='/calendar'>Calendar</CustomLink>

            <CustomLink class="btn-ghost hover:rounded md:p-3 md:m-5" to='/sign-up'>SignUP</CustomLink>
            <CustomLink class="btn-ghost hover:rounded md:p-3 md:m-5" to='/sign-in'>SignIn</CustomLink>
        </>


    return (
        <div>

            <div id='' className={background ?
                'nav bg-[white] bg-opacity-60  backdrop-filter backdrop-blur-sm   text-[white] shadow '
                :
                'nav text-[white] bg-opacity-60  backdrop-filter-none backdrop-blur-sm shadow'}>
                <div class="navbar w-[95%] mx-auto ">
                    <div class="navbar-start">
                        <div class="dropdown">
                            <label tabindex="0" class="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabindex="0" class="menu menu-compact bg-neutral bg-opacity-60 dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                                {menuItems}
                            </ul>
                        </div>
                        <Link to='/' class="btn btn-ghost normal-case text-xl y">Task App</Link>
                    </div>
                    <div class="navbar-center hidden lg:flex">
                        <ul class="menu menu-horizontal mt-[1%] ">
                            {menuItems}
                        </ul>
                    </div>



                    <div class="navbar-end">
                        <div class="flex items-center ">

                            <Link to='/courses' class="btn btn-sm border-none md:mx-20 bg-[brown] hidden normal-case text-[white]"> SUBSCRIBE </Link>

                            {
                                user &&
                                <div class="dropdown dropdown-end">
                                    <label tabindex="0" class="btn mr-1 md:mr-4 btn-ghost btn-circle">
                                        <div class="indicator">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                            <span class="badge bg-[brown] border-none text-[white] badge-sm indicator-item">3</span>
                                        </div>
                                    </label>
                                    <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-[black] bg-opacity-60 shadow">
                                        <div class="card-body text-[white] ">
                                            <p> <span class="font-bold">1 Items  </span>  <span class="text-info">Awesome</span>   </p>
                                            <p>  <span class="font-bold">2 Items  </span>  <span class="text-info">Outstanding</span>   </p>
                                            <p>  <span class="font-bold">3 Items  </span>  <span class="text-info">xciting</span>   </p>
                                        </div>
                                    </div>
                                </div>
                            }
                            {

                                user && <div class="dropdown dropdown-end ">
                                    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                                        <div class="w-9 border border-[brown] rounded-full" >
                                            <img className=''
                                                src="https://i.stack.imgur.com/frlIf.png" />
                                        </div>
                                    </label>
                                    <ul tabindex="0" class="space-y-4 divide divide-y mt-2  w-[450%] card card-compact  dropdown-content pl-4 pr-1 pt-4 pb-4 shadow-xl bg-[black] bg-opacity-60 rounded-box w-52">



                                        <div className='space-y-2'>
                                            <Link to="/profile">
                                                <li>
                                                    <img className='w-14 border border-[brown]  rounded-full'
                                                        src="https://i.stack.imgur.com/frlIf.png" />
                                                </li>
                                            </Link>
                                            <Link to="/profile">
                                                <li className='font-semibold text-[white]  text-lg hover:text-[brown]  word-break'>{user.displayName}</li>
                                            </Link>
                                            <li className='text-[white] text-sm  break-all'>{user.email}</li>
                                            <li>

                                                <Link to='/profile' class="  btn bg-[brown] border-none text-[white] btn-xs mx-auto">
                                                    View Profile
                                                </Link>
                                            </li>
                                        </div>



                                        <div className='space-y-2 pt-4'>

                                            <li><a className='btn btn-outline btn-xs text-[white]'>Settings</a></li>
                                            <li><button onClick={logout} className='btn btn-xs'>Logout</button></li>

                                        </div>


                                    </ul>
                                </div>

                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Header;