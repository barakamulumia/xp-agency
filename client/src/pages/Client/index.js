import React, { useState, useEffect } from "react";
import UserService from "../../services/user.service";
import { Navbar } from "../../components";

export default function Client() {
  const [content, setContent] = useState(undefined);

  useEffect(() => {
    UserService.getClientBoard().then(
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
