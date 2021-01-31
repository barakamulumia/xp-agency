import React, { useState, useEffect } from "react";
import { Navbar } from "../../components";
import UserService from "../../services/user.service";

export default function Driver() {
  const [content, setContent] = useState(undefined);
  useEffect(() => {
    UserService.getDriverBoard().then(
      (response) => {
        setContent(response.data.content);
      },
      (error) => {
        setContent(
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString()
        );
      }
    );
  }, []);
  return (
    <div>
      <Navbar />
      {content && <h1>{content}</h1>}
    </div>
  );
}
