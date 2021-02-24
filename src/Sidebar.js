import React from 'react'
import './Sidebar.css'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import SidebarOption from './SidebarOption';
import StarIcon from '@material-ui/icons/Star';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import SendIcon from '@material-ui/icons/Send';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';
import DuoIcon from '@material-ui/icons/Duo';
import { IconButton } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {openSendMessage} from "./features/mailSlice"





function Sidebar() {
 const dispath = useDispatch ()

    return (
        <div className="sidebar">
            <div >
            <Button onClick={ () => dispath( openSendMessage( ))} startIcon={<AddIcon  fontSize='large'/>} className="sidebar__compose">Compose</Button>
            </div>
           
             <SidebarOption  Icon={InboxIcon } title="Inbox" number={25} selected={true} />
             <SidebarOption  Icon={StarIcon } title="Starred" number={31} selected={true} />
             <SidebarOption  Icon={WatchLaterIcon } title="Snoozed" number={20} selected={true} />   
             <SidebarOption  Icon={LabelImportantIcon } title="Important" number={17} selected={true} />   
             <SidebarOption  Icon={SendIcon } title="Sent" number={9} selected={true} />
             <SidebarOption  Icon={NoteIcon } title="Drafts" number={9} selected={true} />   

             <SidebarOption  Icon={ExpandMoreIcon } title="More" number={9} selected={true} />  
             <div className="sidebar__footer">
                 <div className="siderbar__footerIcons">
                     <IconButton><PersonIcon /></IconButton>
                     <IconButton><DuoIcon /></IconButton>
                     <IconButton><PhoneIcon /></IconButton>







                 </div>
                 
             </div> 

   
        </div>
    )
}

export default Sidebar
