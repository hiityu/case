import React, { useState, useEffect } from "react";
import CloseButton from "react-bootstrap/CloseButton";

import { csv } from "d3";
import BarChart from "./BarChart";
import Dropdown from "./Dropdown";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

const SideBar = () => {
  const [data, setData] = useState([]);
  const label = [
    "First",
    "Last",
    "Game",
    "Country",
    "Date Created",
    "Date Updated",
    "Rating",
    "Total",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const label2 = [
    "Rating",
    "Last",
    "Game",
    "Country",
    "Date Created",
    "Date Updated",
    "First",
    "Total",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const charttype =['Bar','Line','Pie'];

  useEffect(() => {
    csv("GenericData.csv").then(setData);
  }, []);
  const [xaxis, setXAxis] = useState("First");
  const [yaxis, setYAxis] = useState("Rating");
  const [chartType, setChartType] = useState("Bar");
  const [isOpen, setIsopen] = useState(false);

  const SideBar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };
  return (
    <>
      <div className=" ">
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-md">
          <div className="container-fluid p-2">
            <h3 className="navbar-brand text-primary mr-0">CaseStudy Inc.</h3>
            <div className="form-inline ml-auto">
            {/* <Button variant="secondary">Export to pdf</Button> */}
              <div className="btn btn-primary" onClick={SideBar}>
                Options
              </div>
            </div>
          </div>
        </nav>
        <div>
          <div className={`sidebar ${isOpen === true ? "active" : ""}`}>
            <div className="sd-header">
              <h4 className="mb-0">Options</h4>
              
              <CloseButton onClick={SideBar} />
            </div>
            <div className="sd-body">
              <Dropdown
                class={"displaygrid"}
                arr={charttype}
                label={"Chart Type"}
                onChange={(event) => {
                    setChartType(event.target.value);
                }}
              />
              <Dropdown
                class={"displaygrid"}
                arr={label2}
                label={"Y-axis"}
                onChange={(event) => {
                    if(xaxis !== event.target.value){ setYAxis(event.target.value);}
                }}
              />
                            <Dropdown
                class={"displaygrid"}
                arr={label}
                label={"X-axis"}
                onChange={(event) => {
                    if(yaxis !== event.target.value){
                  setXAxis(event.target.value);
                    }
                }}
              />
            </div>
          </div>
          {chartType === 'Bar' && <BarChart
            data={data}
            xaxis={xaxis}
            yaxis={yaxis}
            open={isOpen === true ? 200 : 100}
          />}
          {chartType === 'Line' &&<LineChart data={data} xaxis={xaxis} yaxis={yaxis} open={isOpen === true ? 225:100}/>}
        {chartType === 'Pie' && <PieChart data={data} xaxis={xaxis} yaxis={yaxis}/> }
        </div>
        <div
          className={`sidebar-overlay ${isOpen === true ? "active" : ""}`}
          onClick={SideBar}
        ></div>
      </div>
    </>
  );
};

export default SideBar;
