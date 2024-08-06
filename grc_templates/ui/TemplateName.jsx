/*


  _____ _____ __  __ ____  _        _  _____ _____   _   _ ___ 
 |_   _| ____|  \/  |  _ \| |      / \|_   _| ____| | | | |_ _|
   | | |  _| | |\/| | |_) | |     / _ \ | | |  _|   | | | || | 
   | | | |___| |  | |  __/| |___ / ___ \| | | |___  | |_| || | 
   |_| |_____|_|  |_|_|   |_____/_/   \_\_| |_____|  \___/|___|
                                                               


*/
import React from 'react';
import PropTypes from 'prop-types';
import styles from './TemplateName.module.css';

const TemplateName = (props) => {     // Arrow function
  return (
    <div className={styles.TemplateName} data-testid="TemplateName">
      {props.children}
    </div>
  );
};

TemplateName.propTypes = {
  children: PropTypes.any.isRequired
};

TemplateName.defaultProps = {
  children: 'Template component'
};

export default TemplateName;
