import React from 'react';
import PropTypes from 'prop-types';
import styles from './FlexHThirdGrow.module.css';

const FlexHThirdGrow = (props) => {     // Arrow function
  return (
    <div className={styles.FlexHThirdGrow} data-testid="FlexHThirdGrow">
      {props.children}
    </div>
  );
};

FlexHThirdGrow.propTypes = {
  children: PropTypes.any.isRequired
};

FlexHThirdGrow.defaultProps = {
  children: 'Template component'
};

export default FlexHThirdGrow;
