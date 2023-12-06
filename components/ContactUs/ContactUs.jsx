"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string, number, date, InferType } from "yup";

import css from "./ContactUs.module.css";

export default function ContactUs(props) {
  const validateSchema = object({
    name: string("give me you name").required("not be empty"),
    email: string().email("email required").required("not be empty"),
    phone: number("not a number").required("not be empty"),
    message: string(),
  });

  return (
    <>
      <div id="sectioncontactus" className={css.sectionContactUs}>
        <div className="container">
          <h2 className={`${css.titleContactUs} section-header`}>Contact us</h2>
          <div className={css.contactBox}>
            <div className={css.textContacts}>
              <ul>
                <li>
                  <p>Phone:</p>
                  <ul>
                    <li>38 (098) 12 34 567</li>
                    <li>38 (093) 12 34 567</li>
                  </ul>
                </li>
                <li>
                  <p>E-mail:</p>
                  <ul>
                    <li>office@ecosolution.com</li>
                  </ul>
                </li>
                <li>
                  <p>Address:</p>
                  <ul>
                    <li>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</li>
                  </ul>
                </li>
                <li>
                  <p>Social Media:</p>
                  <ul className={css.socialMedia}>
                    <li>
                      <a href="http://facebook.com">
                        <svg
                          className={css.facebookIco}
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                        >
                          <title>facebook</title>
                          <path d="M18.667 12.4v3.867h3.467c0.267 0 0.4 0.267 0.4 0.533l-0.533 2.533c0 0.133-0.267 0.267-0.4 0.267h-2.933v9.733h-4v-9.6h-2.267c-0.267 0-0.4-0.133-0.4-0.4v-2.533c0-0.267 0.133-0.4 0.4-0.4h2.267v-4.4c0-2.267 1.733-4 4-4h3.6c0.267 0 0.4 0.133 0.4 0.4v3.2c0 0.267-0.133 0.4-0.4 0.4h-3.2c-0.267 0-0.4 0.133-0.4 0.4z"></path>
                          <path d="M12 1.667c-3.467 0-6.113 0.696-7.875 2.458s-2.458 4.408-2.458 7.875v8c0 3.467 0.696 6.113 2.458 7.875s4.408 2.458 7.875 2.458h8c3.467 0 6.113-0.696 7.875-2.458s2.458-4.408 2.458-7.875v-8c0-3.467-0.696-6.113-2.458-7.875s-4.408-2.458-7.875-2.458zM12 3.667h8c3.2 0 5.22 0.637 6.458 1.875s1.875 3.258 1.875 6.458v8c0 3.2-0.637 5.22-1.875 6.458s-3.258 1.875-6.458 1.875h-8c-3.2 0-5.22-0.637-6.458-1.875s-1.875-3.258-1.875-6.458v-8c0-3.2 0.637-5.22 1.875-6.458s3.258-1.875 6.458-1.875z"></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com">
                        <svg
                          className={css.InstagramIco}
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                        >
                          <title>instagram</title>
                          <path d="M12 1.667c-3.467 0-6.113 0.696-7.875 2.458s-2.458 4.408-2.458 7.875v8c0 3.467 0.696 6.113 2.458 7.875s4.408 2.458 7.875 2.458h8c3.467 0 6.113-0.696 7.875-2.458s2.458-4.408 2.458-7.875v-8c0-3.467-0.696-6.113-2.458-7.875s-4.408-2.458-7.875-2.458zM12 3.667h8c3.2 0 5.22 0.637 6.458 1.875s1.875 3.258 1.875 6.458v8c0 3.2-0.637 5.22-1.875 6.458s-3.258 1.875-6.458 1.875h-8c-3.2 0-5.22-0.637-6.458-1.875s-1.875-3.258-1.875-6.458v-8c0-3.2 0.637-5.22 1.875-6.458s3.258-1.875 6.458-1.875z"></path>
                          <path d="M16 10.333c-3.118 0-5.667 2.549-5.667 5.667s2.549 5.667 5.667 5.667c3.118 0 5.667-2.549 5.667-5.667s-2.549-5.667-5.667-5.667zM16 12.333c2.037 0 3.667 1.63 3.667 3.667s-1.63 3.667-3.667 3.667c-2.037 0-3.667-1.63-3.667-3.667s1.63-3.667 3.667-3.667z"></path>
                          <path d="M23.516 8c-0.736 0-1.333 0.597-1.333 1.333v0c0 0.736 0.597 1.333 1.333 1.333v0h0.016c0.736 0 1.333-0.597 1.333-1.333v0c0-0.736-0.597-1.333-1.333-1.333v0z"></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className={css.contactForm}>
              <Formik
                initialValues={{ name: "", email: "", phone: "", message: "" }}
                validationSchema={validateSchema}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                <Form>
                  <label htmlFor="name">
                    <span>Full Name:</span>
                    <Field type="text" name="name" />
                    <ErrorMessage name="name" />
                  </label>
                  <label htmlFor="email">
                    <span>E-mail:</span>
                    <Field type="email" name="email" />
                    <ErrorMessage name="email" />
                  </label>
                  <label htmlFor="phone">
                    <span>Phone:</span>
                    <Field type="phone" name="phone" />
                    <ErrorMessage name="phone" />
                  </label>
                  <label htmlFor="message">
                    <span>Message:</span>
                    <Field type="textarea" name="message" />
                    <ErrorMessage name="message" component="div" />
                  </label>
                  <button type="submit">Submit</button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
