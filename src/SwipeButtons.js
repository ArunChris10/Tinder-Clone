import React from 'react'
import './SwipeButtons.css'
import ReplayIcons from '@material-ui/icons/Replay'
import CloseIcons from '@material-ui/icons/Close'
import StarRateIcons from '@material-ui/icons/StarRate'
import FavoriteIcons from '@material-ui/icons/Favorite'
import FlashOnIcons from '@material-ui/icons/FlashOn'
import IconButton from '@material-ui/core/IconButton'

function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton>
                <ReplayIcons fontSize='large' className="swipeButtons__repeat"/>   
            </IconButton>  
            <IconButton>
                <CloseIcons fontSize='large' className="swipeButtons__left"/>   
            </IconButton>  
            <IconButton>
                <StarRateIcons fontSize='large' className="swipeButtons__star"/>   
            </IconButton>  
            <IconButton>
                <FavoriteIcons fontSize='large' className="swipeButtons__right"/>   
            </IconButton>  
            <IconButton>
                <FlashOnIcons fontSize='large' className="swipeButtons__lightning"/>   
            </IconButton>  
        </div>
    )
}

export default SwipeButtons
