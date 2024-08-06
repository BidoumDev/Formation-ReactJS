import React from "react";
import style from './Button.module.css'
import PropTypes from 'prop-types'

const Button = (props) => {
    let isClicked = false;
    console.log(isClicked, props);
    return (
        <>
        <div>isClicked:{isClicked}</div>
        <div 
            style={{...props.style,backgroundColor: props.bgColor}} 
            className={style.Button} 
            data-testid="Button"
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