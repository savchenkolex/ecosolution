"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string, number, date, InferType } from 'yup';

import css from "./ContactUs.module.css";

export default function ContactUs(props) {

    const validateSchema = object({
        name: string("give me you name").required("not be empty"),
        email: string().email("email required").required("not be empty"),
        phone: number("not a number").required("not be empty"),
        message: string()
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
                    <ErrorMessage name="email"  />
                  </label>
                  <label htmlFor="phone">
                    <span>Phone:</span>
                    <Field type="phone" name="phone" />
                    <ErrorMessage name="phone"  />
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
