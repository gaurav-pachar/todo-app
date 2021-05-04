import React from 'react';
import classes from './input.module.css'

const Input = (props) => {
      return (
          <div className={classes.input}>
              <form>
              <input type="text" placeholder="add your todo here"  onChange={props.change} value={props.Value}></input>
              </form>
          </div>
      )
};

export default Input;