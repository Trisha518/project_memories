import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import Login from "./components/Login";

const UserAuth = ({ children }) => {

  const navigate = useHistory();

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("currentUser"))
  );

  if (currentUser !== null) {
    return children;
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You need to login first!",
    });
    return <Login />
  }
};

export default UserAuth;