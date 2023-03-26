import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import styles from "../styles/apoint.module.css";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const onSubmit = (values) => {
  console.log(values);

  emailjs
    .send("service_462bpfm", "template_xacyc27", values, "aZ3xELNZDTX8ORkzg")
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
};

const validationSchema = yup.object({
  name: yup.string().required("Required!"),
  email: yup.string().email("Invalid").required("Required!"),
  phone: yup.string().required("Required"),
});

const Apointment = ({ show, closeModal }) => {
  if (!show) return null;
  return (
    <div className={styles.appcontainer}>
      <div className={styles.appincont}>
        <h3 onClick={closeModal}>X</h3>
        <h2>Appointmnet</h2>
        <div className={styles.contentt}>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            <Form>
              <div className={styles.formcon}>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Full-Name"
                  className={styles.formcss}
                />
                <ErrorMessage name="name">
                  {(ErrorMessage) => (
                    <div className="error">{ErrorMessage}</div>
                  )}
                </ErrorMessage>
              </div>
              <div className={styles.formcon}>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className={styles.formcss}
                />
                <ErrorMessage name="email">
                  {(ErrorMessage) => (
                    <div className="error">{ErrorMessage}</div>
                  )}
                </ErrorMessage>
              </div>
              <div className={styles.formcon}>
                <Field
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  className={styles.formcss}
                />
                <ErrorMessage name="phone">
                  {(ErrorMessage) => (
                    <div className="error">{ErrorMessage}</div>
                  )}
                </ErrorMessage>
              </div>
              <div className={styles.formcon}>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  placeholder="Your text ..."
                  className={styles.formcss}
                />
              </div>
              <button type="submit" className={styles.sbtn}>
                Submit
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Apointment;
