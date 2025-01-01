import React from 'react';
import PropTypes from 'prop-types';

import CustomButton from './CustomButton';

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea 
        placeholder="Ask AI..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="aipicker-textarea"
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton 
            type="outline"
            title="Asking AI..."
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButton 
              type="outline"
              title="AI Logo"
              handleClick={() => handleSubmit('logo')}
              customStyles="text-xs"
            />

            <CustomButton 
              type="filled"
              title="AI Full"
              handleClick={() => handleSubmit('full')}
              customStyles="text-xs"
            />
          </>
        )}
      </div>
    </div>
  )
}

// Define prop types
AIPicker.propTypes = {
  prompt: PropTypes.string.isRequired,  // prompt should be a string
  setPrompt: PropTypes.func.isRequired,  // setPrompt should be a function
  generatingImg: PropTypes.bool.isRequired,  // generatingImg should be a boolean
  handleSubmit: PropTypes.func.isRequired,  // handleSubmit should be a function
};

export default AIPicker;
