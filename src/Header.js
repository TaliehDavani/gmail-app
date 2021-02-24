import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Avatar from '@material-ui/core/Avatar';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import {selectUser, logout } from './features/userSlice'
import {auth} from "./firebase"



function Header() {
   const dispatch =  useDispatch()
    const user = useSelector(selectUser)
    const signOut = ()=>{
        auth.signOut().then( ()=>{
            dispatch (logout())

        })

        
    }
    return (
        <div className='header'>
            <div className="header__left">
                <IconButton><MenuIcon /></IconButton>
                <img src="https://preview.redd.it/s0jqt1kdhou51.jpg?auto=webp&s=39a45360ddb015e360d2adb7a93ff51922359b4f" alt=""/>

            </div>
            <div className="header__middle">
                <IconButton>
                <SearchIcon />
                </IconButton>
                <input type="text" placeholder="Search mail"/>
                <IconButton>
                <ArrowDropDownIcon />
                </IconButton>

            </div>
            <div className="header__right">
               <IconButton><AppsIcon /></IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <IconButton>
                    <Avatar src={user?.photoUrl} onClick={signOut} />
                </IconButton>
            </div>
        </div>
    )
}

export default Header
