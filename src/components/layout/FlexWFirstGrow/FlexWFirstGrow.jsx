import React from 'react';
import PropTypes from 'prop-types';
import styles from './FlexWFirstGrow.module.css';

const FlexWFirstGrow = (props) => {     // Arrow function
  return (
    <div className={styles.FlexWFirstGrow} data-testid="FlexWFirstGrow">
      {props.children}
    </div>
  );
};

FlexWFirstGrow.propTypes = {
  children: PropTypes.any.isRequired
};

FlexWFirstGrow.defaultProps = {
  children: 'Template component'
};

export default FlexWFirstGrow;
