import React, { Fragment } from "react";
import { SignUp } from "../../components";

export default function SignUpPage({ route }) {
  return (
    <Fragment>
      <SignUp route={route} />
    </Fragment>
  );
}
