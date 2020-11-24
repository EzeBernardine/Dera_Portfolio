import React from "react";
import { Flex } from "../Box";
import { NewsLetterStyle } from "./styles";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

const newsLetter = () => {
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email()
      .required(),
  });

  return (
    <NewsLetterStyle>
      <Flex className="newsLetter-container" width="55%">
        <div className="newsLetter-sub-container">
          <h3 className="lightText">Join my Newsletter</h3>

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
                  <Flex className="formSub" alignItems="stretch">
                    <div className="inputMain">
                      <Field
                        type="text"
                        name="email"
                        className="lightText"
                        placeholder="Your email address"
                        handlechange={handlechange}
                      />
                    </div>
                    <div className="btn" justifyContent="flex-end">
                      <button className="lightText">SUBSCRIBE</button>
                    </div>
                  </Flex>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </Flex>
    </NewsLetterStyle>
  );
};
export default newsLetter;
