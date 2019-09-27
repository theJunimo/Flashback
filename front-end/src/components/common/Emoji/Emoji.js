import React from 'react';

const Emoji = ({emoji}) => {
    return(
        <span aria-labelledby = 'jsx-a11y/accessible-emoji' role = 'img'>
            {emoji}
        </span>
    )
}

export default Emoji;