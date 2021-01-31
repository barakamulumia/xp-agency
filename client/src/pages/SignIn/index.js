import React, { Fragment } from "react";
import { SignIn } from "../../components";

export default function SignInPage({ route }) {
  return (
    <Fragment>
      <SignIn route={route} />
    </Fragment>
  );
}
