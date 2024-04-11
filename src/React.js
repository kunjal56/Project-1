import Recat from "react";
import { useState, useEffect } from "react";
// import "../App.css";

function FetachApi() {
  // useState
  const [Data, setData] = useState("");

  // useEffect
  useEffect(() => {
    async function Api() {
      const response = await fetch(
        "https://fakestoreapi.com/products"
      );
      const jsonData = await response.json();
      console.log(jsonData);
      setData(jsonData);
    }
    Api();
  }, []);

  return (
    <>
    <h1 style={{color:"blue"}}>Fetch Api</h1><br/>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>IMAGE</th>
            <th>TITLE</th>
            <th>PRICE</th>
            <th>RATE</th>
          </tr>
        </thead>
        <tbody>
          {Data && Data.map((e, key) => (
              <tr key={key}>
                <td>{e.id}</td>
                <td>
                  <img
                    src={e.image}
                    class="card-img-top"
                    alt="..."
                    style={{ width: "50px", height: "50px" }}
                  />
                </td>
                <td>{e.title}</td>
                <td>{e.price}</td>
                <td>{e.rating.rate}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default FetachApi;