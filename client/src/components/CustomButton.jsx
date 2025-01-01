import React from 'react';
import PropTypes from 'prop-types';
import { useSnapshot } from 'valtio';

import state from '../store';
import { getContrastingColor } from '../config/helpers';

const CustomButton = ({ type, title, customStyles, handleClick }) => {
  const snap = useSnapshot(state);

  const generateStyle = (type) => {
    if(type === 'filled') {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color)
      }
    } else if(type === "outline") {
      return {
        borderWidth: '1px',
        borderColor: snap.color,
        color: snap.color
      }
    }
  }

  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}

// Define prop types
CustomButton.propTypes = {
  type: PropTypes.oneOf(['filled', 'outline']).isRequired,  // Type should be 'filled' or 'outline'
  title: PropTypes.string.isRequired,  // Title should be a string
  customStyles: PropTypes.string,  // customStyles is optional and should be a string
  handleClick: PropTypes.func.isRequired,  // handleClick should be a function
};

export default CustomButton;
