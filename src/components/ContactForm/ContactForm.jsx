import { useId } from 'react';
import { Formik, Form, Field } from 'formik';

// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// const FeedbackSchema = Yup.object().shape({
//   username: Yup.string()
//     .min(2, 'Username is too short!')
//     .max(50, 'Username is too long!')
//     .required('Required'),
//   email: Yup.string().email('Must be a valid email!').required('Required'),
//   message: Yup.string()
//     .min(3, 'Message is too short!')
//     .max(256, 'Message is too long!')
//     .required('Required'),
//   level: Yup.string()
//     .oneOf(Object.values(possibleFeedbacks))
//     .required('Required'),
// });

export default function ContactForm({ initialValues, onSubmit }) {
  const usernameFieldId = useId();
  const phoneFieldId = useId();

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <div>
          <label htmlFor={usernameFieldId}>Username</label>
          <Field type="text" name="username" id={usernameFieldId} />
          {/* <ErrorMessage name="username" as="span" /> */}
        </div>
        <div>
          <label htmlFor={phoneFieldId}>Phone</label>
          <Field
            type="tel"
            name="phone"
            id={phoneFieldId}
            required
          />
          {/* <ErrorMessage name="phone" as="span" /> */}
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
