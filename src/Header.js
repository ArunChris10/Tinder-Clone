import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerRoundedIcon from '@material-ui/icons/QuestionAnswerRounded';
import IconButton from '@material-ui/core/IconButton'

function Header() {
    return (
        <div className="header">
              
            <IconButton>
                <PersonIcon fontSize='large' className="header_icon"/>   
            </IconButton>   
            
            <img className='header_logo'
            src='https://upload.wikimedia.org/wikipedia/commons/7/74/TinderLogo-2017.svg'>
            </img>

            
            <IconButton>
                <QuestionAnswerRoundedIcon fontSize='large' className="header_icon"/>   
            </IconButton>  
        </div>
    )
}

export default Header
