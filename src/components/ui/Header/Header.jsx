/*


  _____ _____ __  __ ____  _        _  _____ _____   _   _ ___ 
 |_   _| ____|  \/  |  _ \| |      / \|_   _| ____| | | | |_ _|
   | | |  _| | |\/| | |_) | |     / _ \ | | |  _|   | | | || | 
   | | | |___| |  | |  __/| |___ / ___ \| | | |___  | |_| || | 
   |_| |_____|_|  |_|_|   |_____/_/   \_\_| |_____|  \___/|___|
                                                               


*/
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

const Header = (props) => {     // Arrow function
  return (
    <div className={styles.Header} data-testid="Header">
      {props.children}
    </div>
  );
};

Header.propTypes = {
  children: PropTypes.any.isRequired
};

Header.defaultProps = {
  children: 'Template component'
};

export default Header;
