import { useEffect, useState } from "react";
import Papa from "papaparse";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        setData(results.data);
      },
    });
  };
  console.log(data);
  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      {/* {data.length ? (
          <table className="table">
            <thead>
              <tr>
                <th>Restaurant</th>
                <th>Result</th>
                <th>Summary</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td>{row.Restaurant}</td>
                  <td>{row.Result}</td>
                  <td>{row.Summary}</td>
                  <td>{row.Rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null} */}
    </div>
  );
}

export default App;
