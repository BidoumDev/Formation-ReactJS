/*


  _____ _____ __  __ ____  _        _  _____ _____   _   _ ___ 
 |_   _| ____|  \/  |  _ \| |      / \|_   _| ____| | | | |_ _|
   | | |  _| | |\/| | |_) | |     / _ \ | | |  _|   | | | || | 
   | | | |___| |  | |  __/| |___ / ___ \| | | |___  | |_| || | 
   |_| |_____|_|  |_|_|   |_____/_/   \_\_| |_____|  \___/|___|
                                                               


*/
import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeSvgViewer.module.css';

const MemeSvgViewer = (props) => {     // Arrow function
  return (
    <div className={styles.MemeSvgViewer} data-testid="MemeSvgViewer">
      {props.children}
    </div>
  );
};

MemeSvgViewer.propTypes = {
  children: PropTypes.any.isRequired
};

MemeSvgViewer.defaultProps = {
  children: 'Template component'
};

export default MemeSvgViewer;
