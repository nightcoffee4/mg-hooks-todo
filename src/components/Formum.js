import React, { useState } from "react";

function Formum({ kul, setKul }) {
  const [user, setUser] = useState({
    id: "",
    username: "",
    email: "",
  });

  const onChangeUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    const yeniID = Math.floor(Math.random() * 100000);
    const newPerson = {
      id: yeniID,
      ad: user.username,
      mail: user.email,
    };

    setKul((kul) => [...kul, newPerson]);

    e.preventDefault();
    console.log(kul);
  };

  return (
    <div className="card border-success w-25">
      <h4 className="card-header bg-success">Add New User</h4>
      <div className="card-body">
        <form
          onSubmit={onSubmit}
          className="row g-3 needs-validation"
          noValidate
        >
          <div className="form-floating mb-3">
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={onChangeUser}
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            ></input>
            <label htmlFor="floatingInput">Person Name</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              name="email"
              value={user.email}
              onChange={onChangeUser}
              className="form-control"
              id="floatingEmail"
              placeholder="Email"
            ></input>
            <label htmlFor="floatingEmail">Email</label>
          </div>
          <div className="form-floating" style={{ color: "red" }}>
            <div className="d-grid gap-2">
              <button className="btn btn-outline-success" type="submit">
                Add
              </button>
            </div>
          </div>
        </form>
        <div>
          {/*
          <h6>usrname: {user.username}</h6>
          <br />
        <h6>email: {user.email}</h6>*/}
        </div>
      </div>
    </div>
  );
}

export default Formum;
