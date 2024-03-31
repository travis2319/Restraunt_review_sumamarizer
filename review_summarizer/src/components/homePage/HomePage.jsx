import { React } from "react";
import { useLocation } from "react-router-dom";
// import { BarChart } from "@mui/x-charts/BarChart";

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
      {/* <BarChart
        xAxis={[{ scaleType: "band", data: ["group A", "group B", "group C"] }]}
        series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
        width={500}
        height={300}
      /> */}
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
