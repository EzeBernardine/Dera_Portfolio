import React from "react";
import { Flex } from "../Box";
import { ContactStyle } from "./styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const Contact = () => {
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .max(16)
      .required(),
    email: yup
      .string()
      .email()
      .required(),
  });

  return (
    <ContactStyle>
      <Flex className="contact-container" width="55%">
        <div className="contact-sub-container drops">
          <h3 className="lightText">Contact me</h3>

          <p className="lightText">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste,
            aliquid vitae quis modi esse illo! Expedita velit iste culpa quo
            doloremque dicta modi illum, facere dolorem aliquam illo neque
            tempore.
          </p>

          <div className="form-container">
            <Formik
              initialValues={{ email: "", name: "" }}
              validationSchema={validationSchema}
              onSubmit={async () => {}}
            >
              {({ handleSubmit, handlechange }) => (
                <Form className="form_class" onSubmit={handleSubmit}>
                  <Flex className="formSub" justifyContent="space-between">
                    <div className="inputMain">
                      <label htmlFor="email" className="lightText">
                        Name
                      </label>
                      <Field
                        type="text"
                        name="name"
                        className="lightText"
                        placeholder="Name"
                        handlechange={handlechange}
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="error"
                      />
                    </div>

                    <div className="inputMain">
                      <label htmlFor="email" className="lightText">
                        Email Address
                      </label>
                      <Field
                        type="text"
                        name="phoneNumber"
                        className="lightText"
                        placeholder="Phone Number"
                        handlechange={handlechange}
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="error"
                      />
                    </div>

                    <div className="textAreaMain">
                      <label htmlFor="email" className="lightText">
                        Message
                      </label>
                      <Field
                        component="textarea"
                        className="lightText"
                        name="message"
                        placeholder="Message"
                        handlechange={handlechange}
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="error"
                      />
                    </div>

                    <Flex className="btn" justifyContent="flex-end">
                      <button className="lightText">SUBMIT</button>
                    </Flex>
                  </Flex>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </Flex>
    </ContactStyle>
  );
};
export default Contact;
