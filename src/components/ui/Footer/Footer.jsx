/*


  _____ _____ __  __ ____  _        _  _____ _____   _   _ ___ 
 |_   _| ____|  \/  |  _ \| |      / \|_   _| ____| | | | |_ _|
   | | |  _| | |\/| | |_) | |     / _ \ | | |  _|   | | | || | 
   | | | |___| |  | |  __/| |___ / ___ \| | | |___  | |_| || | 
   |_| |_____|_|  |_|_|   |_____/_/   \_\_| |_____|  \___/|___|
                                                               


*/
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';

const Footer = (props) => {     // Arrow function
  return (
    <div className={styles.Footer} data-testid="Footer">
      {props.children}
    </div>
  );
};

Footer.propTypes = {
  children: PropTypes.any.isRequired
};

Footer.defaultProps = {
  children: 'Template Footer'
};

export default Footer;
