import { useState } from 'react';
import { Form, Button, Textarea } from './styles';

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
            <Form onSubmit={e => handleSubmit(e)}>
              <Textarea
                value={value}
                onChange={e => handleChange(e)}
                placeholder="Enter your feedback!"
                required/>
              <Button type="submit" value="Send" />
            </Form>
  );
}

export default FeedbackForm;