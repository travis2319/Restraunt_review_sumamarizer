import { React, useState } from "react";
import { useLocation } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";

const HomePage = () => {
  const location = useLocation();
  const data = location.state;

  const [val, setVal] = useState("");
  const [restaurants, setRestaurants] = useState([]);

  function Restaurant(params) {
    const capitalizedWords = params
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");

    setVal(capitalizedWords);
    {
      val != ""
        ? setRestaurants(
            data
              .filter((row) => row.Restaurant == val)
              .map((row, index) => ({
                key: index,
                restaurant: row.Restaurant,
                summary: row.Summary,
                rating: row.Rating,
                result: row.Result,
                neg_reveiws: row.Negative_Reviews,
              }))
          )
        : null;
    }
  }

  return (
    <div className="heading">
      <h1>Review Summarizer</h1>
      <SearchBar Restaurant={Restaurant} />

      <ul>
        {restaurants.length > 0 ? (
          <div>
            Restraunt:
            {restaurants[0].restaurant}
            <br />
            <br />
            summary:
            {restaurants[0].summary}
            <br />
            Result:
            {restaurants[0].result}
            <br />
            <br />
            summary:
            {restaurants[1].summary}
            <br />
            Result:
            {restaurants[1].result}
          </div>
        ) : // <table className="table">
        //   <thead>
        //     <tr>
        //       <th>Restaurant</th>
        //       <th>summary</th>
        //       <th>rating</th>
        //       {/* <th>neg_reveiws</th> */}
        //       <th>summary</th>
        //       <th>rating</th>
        //     </tr>
        //   </thead>
        //   <tbody>
        //     <tr>
        //       <td>{restaurants[0].restaurant}</td>
        //       <td>{restaurants[0].summary}</td>
        //       <td>{restaurants[0].rating}</td>
        //       {/* <td>{restaurants[0].neg_reveiws}</td> */}
        //       <td>{restaurants[1].summary}</td>
        //       <td>{restaurants[1].Rating}</td>
        //     </tr>
        //   </tbody>
        // </table>
        null}
      </ul>
    </div>
  );
};

export default HomePage;
