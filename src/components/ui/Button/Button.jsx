import React from "react";
import style from './Button.module.css'
import PropTypes from 'prop-types'

const Button = (props) => {
    console.log(props);
    return (
        <div style={{...props.style,backgroundColor: props.bgColor}} className={style.Button} data-testid="Button">
            {props.children}
        </div>
    );
}
Button.propTypes={
    bgColor: PropTypes.string.isRequired,
    color: PropTypes.oneOf(['white','black']),
    style: PropTypes.exact({
        textDecoration: PropTypes.oneOf(['underline', 'none']),
        fontWeight: PropTypes.oneOf([100, 500, 900])
    })
    
}
export default Button;