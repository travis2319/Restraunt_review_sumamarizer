import { useEffect, useState } from "react";
import Papa from "papaparse";
import Data from "./assets/Final_Dataset.csv";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  // const handleFileUpload = (e) => {
  //   const file = e.target.files[0];
  //   Papa.parse(file, {
  //     header: true,
  //     complete: (results) => {
  //       setData(results.data);
  //     },
  //   });
  // };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(Data);
  //     const csvData = await response.text();
  //     const parsedData = Papa.parse(csvData, {
  //       header: true,
  //       skipEmptyLines: false,
  //     }).data;
  //     setData(parsedData);
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    Papa.parse("data", {
      download: true,
      complete: function (results) {
        console.log(results);
      },
    });
  });

  return (
    <div>
      {/* <input type="file" accept=".csv" onChange={handleFileUpload} /> */}
      {data.length ? (
        <table className="table">
          <thead>
            <tr>
              <th>Restaurant</th>
              <th>Result</th>
              <th>Summary</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.Restaurant}</td>
                <td>{row.Result}</td>
                <td>{row.Summary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  );
}

export default App;
