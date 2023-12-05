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

                    </div>
                    <div className={css.contactForm}>
                        <Formik 
                        initialValues={{name: "name",
                                        email: "email",
                                        phone: "phone"

                                    }}
                        validate={""}
                        onSubmit={(values)=>{
                            console.log(values);
                        }}
                        
                        >
                        <Form>
                            <label htmlFor='name'>Full Name:</label>
                            <Field type='text' name='name' />
                               
                            <ErrorMessage name='name' component="div" />
                            <Field type='email' name='email' />
                            <ErrorMessage name='email' component="div" />
                            <Field type='phone' name='phone' />
                            <ErrorMessage name='phone' component="div" />
                            <Field type='textarea' name='message' />
                            <ErrorMessage name='texarea' component="div" />
                            <button type='submit'>Submit</button>
                        </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    </>);
}