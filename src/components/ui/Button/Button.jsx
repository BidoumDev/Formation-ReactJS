import React, { useEffect, useState } from "react";
import style from './Button.module.css'
import PropTypes from 'prop-types'

const Button = (props) => {
    //let isClicked = false;
    //console.log(isClicked, props);
    const [isClicked, setIsClicked] = useState(-1)

    useEffect(() => {
        console.log('dans l effet', isClicked);
      return () => {
        //effect
      };
    }, [isClicked])     // Ce qui déclenche

    useEffect(() => { 
        // Mount          
        setIsClicked(0);
      return () => {
        // Unmount
      };
    }, [])              // Se déclenche comme un constructeur ou onReady

    useEffect(() => {
        console.log("");
      return () => {
      };
    })                  // Se déclenche à chaque changement

    return (
        <>
        <div>isClicked:{isClicked? 'Oui': 'Non'}</div>
        <div 
            style={{...props.style,backgroundColor: props.bgColor}} 
            className={`${style.Button}${isClicked?' '+style.clicked:''}`}
            data-testid="Button"
            onClick={(evt)=>{
                setIsClicked(true);
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