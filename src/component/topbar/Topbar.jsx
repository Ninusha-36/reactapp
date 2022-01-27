import React from 'react'
import './topbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import SettingsIcon from '@mui/icons-material/Settings';


export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topbar-left">
                    <div className="logo-sec">
                       <img src="/images/logo.jpg" />
                    </div>
                </div>
                <div className="topbar-right">
               
                <div className="topbarIcon">
                <NotificationsNoneIcon/>
                <span className="topbarIconBadge">2</span>
                    </div>

                    <div className="topbarIcon">
                <VpnLockIcon/>
                <span className="topbarIconBadge">4</span>
                    </div>  
                    <div className="topbarIcon">
                <SettingsIcon/>
                
                    </div> 
                    <img src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"  className="topAvator"  />      
               
                    
                </div>
            </div>
        </div>
    )
}
