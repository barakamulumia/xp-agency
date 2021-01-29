import React, { Fragment } from "react";
import { SignUp } from "../../components";

const SignUpPage = ({ route }) => {
  return (
    <Fragment>
      <SignUp route={route} />
    </Fragment>
  );
};

export default SignUpPage;
