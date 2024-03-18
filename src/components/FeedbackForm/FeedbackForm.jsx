import { useId } from 'react';
import { Formik, Form, Field } from 'formik';

const initialValues = {
  username: '',
  email: '',
  message: '',
  level: 'good',
};

export default function FeedbackForm() {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const msgFieldId = useId();
  const levelFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor={nameFieldId}>Username</label>
        <Field type="text" name="username" id={nameFieldId} />

        <label htmlFor={emailFieldId}>Email</label>
        <Field type="email" name="email" id={emailFieldId} />

        <label htmlFor={msgFieldId}>Message</label>
        <Field as="textarea" name="message" id={msgFieldId} rows="5" />

        <label htmlFor={levelFieldId}>Service satisfaction level</label>
        <Field as="select" name="level" id={levelFieldId}>
          <option value="good">Good</option>
          <option value="neutral">Neutral</option>
          <option value="bad">Bad</option>
        </Field>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
