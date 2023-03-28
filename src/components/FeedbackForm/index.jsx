import { useState } from 'react';

import { Form, Button, SpecialTextArea, Textarea } from './styles';
import styles from './styles.module.css'

const FeedbackForm = (props) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your feedback "${value}" was added succesfully!`);
    setValue("");
  }
  return (
          <>
            <form className={styles.form} onSubmit={e => handleSubmit(e)}>
              <Textarea
                value={value}
                onChange={e => handleChange(e)}
                placeholder="Enter your feedback!"
                required/>
                <SpecialTextArea
                  placeholder="Inheritence test"/>
              <button className={styles.button} type="submit">Send</button>
            </form>
          </>

  );
}

export default FeedbackForm;