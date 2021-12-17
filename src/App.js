import React, { Fragment, useState, useEffect } from "react";
import "./App.css";
import gravatar from "./Img/gravatar.png";

function App() {
  // console.log('aqui estoy');
  const [data, setData] = useState([]);

  const getProduct = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((users) => users.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <Fragment>
      <div className="container-table">
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">Imagen</th>
              <th scope="col">Nombre</th>
              <th scope="col">Correo</th>
              <th scope="col">Ciudad</th>
              <th scope="col">Compañia</th>
            </tr>
          </thead>
          {data.map((user) => (
            <tbody key={user.id}>
              <tr>
                <th scope="row">
                  <img className="gravatar" src={gravatar} />
                </th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address.city}</td>
                <td>{user.company.name}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </Fragment>
  );
}

export default App;
