'use client'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import css from './ContactUs.module.css';

export default function ContactUs (props) {

    return (<>
        <div id="sectioncontactus" className={css.sectionContactUs}>
            <div className="container">
                <h2 className={`${css.titleContactUs} section-header`}>Contact us</h2>
                <div className={css.contactBox}>
                    <div className={css.textContacts}>
                        <ul>
                            <li>
                                <p>Phone:</p>
                                <ul>
                                    <li>23234234</li>
                                    <li>23234234</li>
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
                        initialValues={{name: "",
                                        email: "",
                                        phone: "",
                                        message: ""
                                    }}
                        validate={""}
                        onSubmit={(values)=>{
                            console.log(values);
                        }}
                        
                        >
                        <Form>
                            <label htmlFor='name'>
                                <span>Full Name:</span>
                                <Field type='text' name='name' />
                                <ErrorMessage name='name' component="div" />
                            </label>
                            <label htmlFor='email'>
                                <span>E-mail:</span>  
                                <Field type='email' name='email' />
                                <ErrorMessage name='email' component="div" />
                            </label>
                            <label htmlFor='phone'>
                                <span>Phone:</span>
                                <Field type='phone' name='phone' />
                                <ErrorMessage name='phone' component="div" />
                            </label>
                            <label htmlFor='message'>
                                <span>Message:</span>
                                <Field type='textarea' name='message' />
                                <ErrorMessage name='texarea' component="div" />
                            </label>
                            <button type='submit'>Submit</button>
                        </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    </>);
}