/*


  _____ _____ __  __ ____  _        _  _____ _____   _   _ ___ 
 |_   _| ____|  \/  |  _ \| |      / \|_   _| ____| | | | |_ _|
   | | |  _| | |\/| | |_) | |     / _ \ | | |  _|   | | | || | 
   | | | |___| |  | |  __/| |___ / ___ \| | | |___  | |_| || | 
   |_| |_____|_|  |_|_|   |_____/_/   \_\_| |_____|  \___/|___|
                                                               


*/
import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavBar.module.css';

const NavBar = (props) => {     // Arrow function
  return (
    <div className={styles.NavBar} data-testid="NavBar">
      {props.children}
    </div>
  );
};

NavBar.propTypes = {
  children: PropTypes.any.isRequired
};

NavBar.defaultProps = {
  children: 'Template component'
};

export default NavBar;
