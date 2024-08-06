import React, { useEffect, useState } from "react";
import style from './Button.module.css'
import PropTypes from 'prop-types'

const Button = (props) => {
    //let isClicked = false;
    //console.log(isClicked, props);
    const [isClicked, setIsClicked] = useState(false)

    useEffect(() => {
        console.log('dans l effet', isClicked);
      return () => {
        //effect
      };
    }, [isClicked])     // Ce qui déclenche
    return (
        <>
        <div>isClicked:{isClicked? 'Oui': 'Non'}</div>
        <div 
            style={{...props.style,backgroundColor: props.bgColor}} 
            className={style.Button} 
            data-testid="Button"
            onClick={(evt)=>{
                setIsClicked(isClicked++);
                //isClicked != isClicked;
                console.log("isClicked", isClicked, evt);
            }}
        >
            {props.children}
        </div>
        </>
    );
}

Button.propTypes={
    bgColor: PropTypes.string,
    color: PropTypes.oneOf(['white','black']),
    style: PropTypes.exact({
        textDecoration: PropTypes.oneOf(['underline', 'none']),
        fontWeight: PropTypes.oneOf([100, 500, 900])
    })    
}

Button.defaultProps = {
    bgColor: "yellow"
}

export default Button;