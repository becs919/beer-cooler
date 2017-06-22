import React from 'react';
import './Form.css';

const Form = ({ onClick }) => {
  return (
    <form className='beer-form'>
      <p className='form-title'>Don't see your favorite beer? Add it to the list!</p>
      <label>
        Name:
        <input type='text' id='beer-name' />
      </label>
      <label>
        Likes:
        <input type='number' placeholder='0' id='beer-likes-value' />
      </label>
      <input type='submit' value='Save' className='submit-button' onClick={ (e) => onClick(e) }/>
      <p className='error-msg'></p>
    </form>
  )
};

export default Form;
