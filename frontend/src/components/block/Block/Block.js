import React, { useState, useCallback } from 'react';
import styles from './Block.scss';
import classNames from 'classnames/bind';
import TagList from 'components/block/TagList';

const cx = classNames.bind(styles);

const Block = ({data}) => {
    const [ emoticon, setEmoticon ] = useState(data.text);

    const onCopy = useCallback(() => {
        const el = document.createElement('textarea');  
        el.value = emoticon;                            
        el.setAttribute('readonly', '');                
        el.style.position = 'absolute';                 
        el.style.left = '-9999px';                      
        document.body.appendChild(el);                  
        const selected =            
          document.getSelection().rangeCount > 0        
            ? document.getSelection().getRangeAt(0)     
            : false;                                    
        el.select();                                    
        document.execCommand('copy');                   
        document.body.removeChild(el);                 
        if (selected) {                               
          document.getSelection().removeAllRanges(); 
          document.getSelection().addRange(selected); 
        }
    }, []);

    return(
        <article 
            className = {cx('Block')}
            onClick = { onCopy }>
            <header className = {cx('emoticon')}>
                <span>{data.text}</span>
            </header>
            <TagList
                tagList = { data.tag }/>
        </article>
    )
}

export default React.memo(Block);