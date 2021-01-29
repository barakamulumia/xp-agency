import React, { Fragment } from "react";
import { SignIn } from "../../components";

const SignInPage = ({ route }) => {
  return (
    <Fragment>
      <SignIn route={route} />
    </Fragment>
  );
};

export default SignInPage;
