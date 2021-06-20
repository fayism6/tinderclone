import React from 'react'
import './Footer.css';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import { IconButton } from '@material-ui/core';

function Footer() {
    return (
        <div>
        <div className="swipe-buttons">
            <IconButton>
                <ReplayIcon />
            </IconButton>
            <IconButton>
                <CloseIcon></CloseIcon>
            </IconButton>
            <IconButton>
                <StarIcon className="large"/>
             </IconButton>   
            <IconButton>
                <FavoriteIcon className="large"/>
             </IconButton>   
            <IconButton>
                <OfflineBoltIcon/>
             </IconButton>   
        </div>
        </div>
    )
}

export default Footer
