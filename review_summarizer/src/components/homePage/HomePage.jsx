import { React } from "react";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();
  const data = location.state;
  const mappedData = data.map((item, index) => ({
    key: index,
    label: item.Restaurant,
    value: item.Summary,
  }));

  return (
    <div>
      <h1>Review Summarizer</h1>

      <ul>
        {mappedData.length ? (
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
        ) : null}
      </ul>
    </div>
  );
};

export default HomePage;
