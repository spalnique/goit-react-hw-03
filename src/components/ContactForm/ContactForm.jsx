import { useId } from 'react';
import clsx from 'clsx';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from '../ContactForm/ContactForm.module.css';

export default function ContactForm({ initialValues, onContactAdd }) {
  const FeedbackSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, 'Username is too short!')
      .max(50, 'Username is too long!')
      .required('Required'),
    phone: Yup.string()
      .min(3, 'Phone number is too short!')
      .max(50, 'Phone number is too long!')
      .required('Required'),
  });
  const usernameFieldId = useId();
  const phoneFieldId = useId();

  const handleSubmit = (values, actions) => {
    onContactAdd(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FeedbackSchema}
      onSubmit={handleSubmit}>
      {formikData => {
        return (
          <Form className={css.formContainer}>
            <div className={css.fieldContainer}>
              <label className={css.labelText} htmlFor={usernameFieldId}>
                Username
              </label>
              <Field
                type="text"
                name="username"
                id={usernameFieldId}
                className={clsx(
                  css.formInput,
                  formikData.touched.username &&
                    formikData.errors.username &&
                    css.formInputError
                )}
              />
              <ErrorMessage
                name="username"
                component="p"
                className={css.errorMessage}
              />
            </div>
            <div className={css.fieldContainer}>
              <label className={css.labelText} htmlFor={phoneFieldId}>
                Phone
              </label>
              <Field
                type="tel"
                name="phone"
                id={phoneFieldId}
                className={clsx(
                  css.formInput,
                  formikData.touched.phone &&
                    formikData.errors.phone &&
                    css.formInputError
                )}
              />
              <ErrorMessage
                name="phone"
                component="p"
                className={css.errorMessage}
              />
            </div>
            <button type="submit">Add contact</button>
          </Form>
        );
      }}
    </Formik>
  );
}
