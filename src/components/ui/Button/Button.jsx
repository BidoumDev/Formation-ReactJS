import React, { useEffect, useState } from "react";
import style from './Button.module.css'
import PropTypes from 'prop-types'

const Button = (props) => {
    //let isClicked = false;
    //console.log(isClicked, props);
    const [isClicked, setIsClicked] = useState(false);  // Valeur étatique

    useEffect(() => {
        console.log('dans l effet', isClicked);
      setTimeout(function(){
        setIsClicked(false);
      }, 300);
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
        <button 
            type={props.type}
            style={{...props.style,backgroundColor: props.bgColor}} 
            className={`${style.Button}${isClicked?' '+style.clicked:''}`}
            data-testid="Button"
            onClick={(evt)=>{
              setIsClicked(true);
              if(undefined!=props.onButtonClick){
                props.onButtonClick();
              }
            }}
        >
            {props.children}
        </button>
        </>
    );
}

Button.propTypes={
    bgColor: PropTypes.string,
    color: PropTypes.oneOf(['white','black']),
    style: PropTypes.exact({
        textDecoration: PropTypes.oneOf(['underline', 'none']),
        fontWeight: PropTypes.oneOf([100, 500, 900])
    }),
    type: PropTypes.oneOf(['button','submit','reset'])
}

Button.defaultProps = {
    bgColor: "yellow",
    type: 'button'
}

export default Button;