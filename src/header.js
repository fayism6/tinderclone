import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import IconButton from '@material-ui/core/IconButton';




function header() {
    return (
        <div className="header">
            <IconButton>
            <PersonIcon className="header-icon"/>
            </IconButton>

            <img className="headerlogo"
             src="https://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Flame-Logo.wine.svg"
             alt="tinderlogo"></img>
           
             <IconButton>
                <QuestionAnswerIcon className="header-icon"/>
             </IconButton>


        </div>
    )
}

export default header
