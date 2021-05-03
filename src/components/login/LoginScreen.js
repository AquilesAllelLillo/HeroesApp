import React, { useContext } from "react";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    // console.log('click')
    // history.push("/");
    // history.replace("/");

    const lastPath = localStorage.getItem("lastPath") || "/";

    dispatch({
      type: types.login,
      payload: {
        name: "Terricola",
      },
    });

    history.replace(lastPath);
  };

  return (
    <div className="container mt4">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleLogin}>
        Loguear
      </button>
    </div>
  );
};
