import React from "react";

export default function Listele({ kul, sil }) {
  //const num = [3, 4, 5, 6, 7];

  return (
    <div className="w-50">
      <br />

      <table
        className="table table-stripe table-bordered "
        style={{ backgroundColor: "white" }}
      >
        <thead className="table-success">
          <tr>
            <th scope="col">[ ID ]</th>
            <th scope="col">Person Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {kul.map((person, i) => (
            <tr key={i}>
              <th scope="row">{person.id}</th>
              <td>{person.ad}</td>
              <td>{person.mail}</td>
              <td>
                <button
                  onClick={(event) => sil(person)}
                  className="btn btn-warning btn-sm"
                >
                  <i className="bi bi-trash-fill"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
