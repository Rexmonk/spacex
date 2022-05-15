import Card from "./Card";
//import { useSearchParams } from "react-router-dom";
import { useRouter } from "next/router";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setSearchItem, setIsLoading } from "../../Redux/Slices/SearchReducer";
import { useState } from "react";
import { useEffect } from "react";

const SideBarFilter = ({ className: classes }) => {
  const apiUrl = process.env.NEXT_PUBLIC_SPACEX_API;
  //let [searchParams, setSearchParams] = useSearchParams();
  const router = useRouter();
  let [activeYear, setActiveYear] = useState("");
  let [activeLaunch, setActiveLaunch] = useState("");
  let [activeLanding, setActiveLanding] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    searchApi();
  }, []);

  const setUrlParams = (type, value) => {
    dispatch(setIsLoading(true));
    switch (type) {
      case "year":
        value = value == activeYear ? "" : value;

        router.query = { ...router.query, launch_year: value };
        router.push(router);
        //searchParams.set("launch_year", value);
        //setSearchParams(searchParams);
        setActiveYear(value);
        break;
      case "launch":
        value = value == activeLaunch ? "" : value;
        //searchParams.set("launch_success", value);
        //setSearchParams(searchParams);
        router.query = { ...router.query, launch_success: value };
        router.push(router);
        setActiveLaunch(value);
        break;
      case "landing":
        value = value == activeLanding ? "" : value;
        //searchParams.set("land_success", value);
        //setSearchParams(searchParams);
        router.query = { ...router.query, land_success: value };
        router.push(router);
        setActiveLanding(value);
        break;
    }

    searchApi();
  };

  const searchApi = () => {
    console.log("api called");
    axios
      .get(apiUrl, {
        params: {
          launch_year: router.query.launch_year || "",
          launch_success: router.query.launch_success || "",
          land_success: router.query.land_success || "",
        },
      })
      .then(function (response) {
        dispatch(setIsLoading(false));
        dispatch(setSearchItem(response.data));
      })
      .catch(function (error) {
        console.log(error);
        dispatch(setIsLoading(false));
      });
  };

  const years = [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
  ];
  return (
    <aside id="sidebar" className={classes}>
      <Card>
        <h3>Filters</h3>
        <div className="filter-title">Launch Year</div>
        <div className="row">
          {years.map((item) => {
            return (
              <div key={item} className="col-xs-6">
                <div
                  className={`filter-badge ${
                    activeYear == item ? "active" : ""
                  }`}
                  onClick={() => setUrlParams("year", item)}
                >
                  {item}
                </div>
              </div>
            );
          })}
        </div>
        <div className="filter-title">Successful Launch</div>
        <div className="row">
          <div className="col-xs-6">
            <div
              className={`filter-badge ${
                activeLaunch == "true" ? "active" : ""
              }`}
              onClick={() => setUrlParams("launch", "true")}
            >
              True
            </div>
          </div>
          <div className="col-xs-6">
            <div
              className={`filter-badge ${
                activeLaunch == "false" ? "active" : ""
              }`}
              onClick={() => setUrlParams("launch", "false")}
            >
              False
            </div>
          </div>
        </div>
        <div className="filter-title">Successful Landing</div>
        <div className="row">
          <div className="col-xs-6">
            <div
              className={`filter-badge ${
                activeLanding == "true" ? "active" : ""
              }`}
              onClick={() => setUrlParams("landing", "true")}
            >
              True
            </div>
          </div>
          <div className="col-xs-6">
            <div
              className={`filter-badge ${
                activeLanding == "false" ? "active" : ""
              }`}
              onClick={() => setUrlParams("landing", "false")}
            >
              False
            </div>
          </div>
        </div>
      </Card>
    </aside>
  );
};
export default SideBarFilter;
