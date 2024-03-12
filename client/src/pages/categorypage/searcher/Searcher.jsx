import React from "react";
import "./searcher.css";
import { useLocation } from "react-router-dom";
import Navbar from "../../../components/homepage/Navbar/navbar";
import Footer from "../../../components/homepage/footer/footer";

function Searcher() {
  const location = useLocation();
  const results = location.state.results;
  // console.log(results)
  // Group results by city
  const resultsByCity = {};
  if (Array.isArray(results)) {
    results.forEach((result) => {
      const key = `${result.city}, ${result.state}`;
      if (!resultsByCity[key]) {
        resultsByCity[key] = [];
      }
      resultsByCity[key].push(result);
    });
  }
  // console.log('Results by city:', resultsByCity);
  return (
    <>
      <Navbar />
      <div className="main">
        <div className="doubleCard">
          {/* Render cards for each city */}
          {Object.entries(resultsByCity).map(([location, results]) => (
            <div className="construction" key={location}>
              <div className="mm">
                <div className="mm2"></div>
                <span className="upper">Construction</span>
              </div>
              {results.map((result, index) => (
                <div className="cont10" key={index}>
                  <div className="photo">
                    <img className="img10" src={result.image} alt="" />
                  </div>
                  <div className="right">
                    <h4>{result.name}</h4>
                    <p className="sme">
                      {result.name} Co. for your next Construction project
                    </p>
                    <div className="t30">$100 to $200 per square foot</div>
                    <div className="loca0">
                      <span>
                        <i className="fa-solid fa-location-dot"></i>
                        {result.city}, {result.state}
                      </span>
                    </div>
                    <div className="uright10">
                      <button type="submit" className="numbtn">
                        {" "}
                        Send Enquiry
                      </button>
                      <button type="submit" className="numbtn0">
                        View Details
                      </button>
                      <i className="fa-regular fa-heart"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Searcher;
