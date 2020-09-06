import React from "react";

// core components
import Modal from "components/Modal/Modal.js"
import CustomInput from 'components/CustomInput/CustomInput.js';

export const handleChange = (setEventTitle, evt) => {
    setEventTitle(evt.target.value)
    evt.preventDefault();
   
}
export const input = (labelText, placeholder, error, handleChange, value)  => {

return (
      <CustomInput
          labelText={labelText}
          id="regular"
          inputProps={{
          placeholder: placeholder
          }}
          error={error}
          onChange={handleChange}
          value={value}
          formControlProps={{
          fullWidth: true
          }}
      />
    )
}

export const  modal = (title,input, onSubmit, open, onClose, error ) => 
    <Modal
        title={title}
        input={input}
        onSubmit={onSubmit}
        open={open}
        onClose={onClose}
        error={error}
    />


