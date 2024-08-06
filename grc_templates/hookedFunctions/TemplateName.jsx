/*
████████╗███████╗███╗   ███╗██████╗ ██╗      █████╗ ████████╗███████╗    ██╗  ██╗ ██████╗  ██████╗ ██╗  ██╗
╚══██╔══╝██╔════╝████╗ ████║██╔══██╗██║     ██╔══██╗╚══██╔══╝██╔════╝    ██║  ██║██╔═══██╗██╔═══██╗██║ ██╔╝
   ██║   █████╗  ██╔████╔██║██████╔╝██║     ███████║   ██║   █████╗      ███████║██║   ██║██║   ██║█████╔╝ 
   ██║   ██╔══╝  ██║╚██╔╝██║██╔═══╝ ██║     ██╔══██║   ██║   ██╔══╝      ██╔══██║██║   ██║██║   ██║██╔═██╗ 
   ██║   ███████╗██║ ╚═╝ ██║██║     ███████╗██║  ██║   ██║   ███████╗    ██║  ██║╚██████╔╝╚██████╔╝██║  ██╗
   ╚═╝   ╚══════╝╚═╝     ╚═╝╚═╝     ╚══════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝    ╚═╝  ╚═╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝
*/
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TemplateName.module.css';
const templateNameInitialState=false;

const TemplateName = (props) => {     // Arrow function
  const [state, setstate] = useState(templateNameInitialState);

  useEffect(() => {
    // Mount && unmlount
  }, [state]);

  useEffect(() => {
    // mount
    return () => {
      // unmount
    };
  });

  return (
    <div className={styles.TemplateName} data-testid="TemplateName">
      TemplateName Component<br />{JSON.stringify(state)}
    </div>
  );
};

TemplateName.propTypes = {};

TemplateName.defaultProps = {};

export default TemplateName;
