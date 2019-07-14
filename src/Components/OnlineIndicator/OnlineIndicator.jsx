import React from 'react';
import PropTypes from 'prop-types';
import { FormRadio } from "shards-react";


const OnlineIndicator = (props) => (
  <div style={{ width: "100px" }} style={ props.isOnline ? onlineStyle : offLineStyle}>
     <FormRadio
          name="isOnline"
          checked={props.isOnline}
        >
         { props.isOnline ? 'Online' : 'Offline' } 
    </FormRadio>
  </div> 
);

const onlineStyle = {
  width: "100px",
  color: "#007bff",
  fontWeight: '500'
}

const offLineStyle = {
  width: "100px",
  color: "#c4183c",
  fontWeight: '500'
}

OnlineIndicator.propTypes = {
  isOnline: PropTypes.bool,
};

OnlineIndicator.defaultProps = {
  isOnline: false,
};

export default OnlineIndicator;
