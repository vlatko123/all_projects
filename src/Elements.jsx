import React, { Component } from "react";
import Axios from "axios";
import Cell from "./Cell";
import Group1 from "./images/grup_01.svg";
import Group2 from "./images/grup_02.svg";
import Group3 from "./images/grup_03.svg";
import Group4 from "./images/grup_04.svg";
import Group5 from "./images/grup_05.svg";
import Group6 from "./images/grup_06.svg";
import Group7 from "./images/grup_07.svg";
import Group8 from "./images/grup_08.svg";
import Group9 from "./images/grup_09.svg";
import Group10 from "./images/grup_10.svg";
import Group11 from "./images/grup_11.svg";
import Group12 from "./images/grup_12.svg";
import Group13 from "./images/grup_13.svg";
import Group14 from "./images/grup_14.svg";
import Group15 from "./images/grup_15.svg";
import Group16 from "./images/grup_16.svg";
import Group17 from "./images/grup_17.svg";
import Group18 from "./images/grup_18.svg";
import Subgroup from "./images/subgroup_legend_1.svg";
import Subgroup2 from "./images/subgroup_legend_2.svg";
import Title from "./images/periodic_title.svg";
import Search from "./Search";

import "./App.css";

class Elements extends Component {
  state = {
    elements: []
  };

  componentDidMount() {
    Axios.get(
      "https://raw.githubusercontent.com/andrejewski/periodic-table/master/data.json"
    ).then(res => {
      console.log(res);
      this.setState({ elements: res.data });
    });
  }

  render() {
    return (
      <div className="container">
      <Search />
        <div className="row">
          {/* <div className="col-md-2 height"></div> */}

          <div className="col-md-8 col-md-offset-2">
            <div className="tableTitle">
              <img src={Group1} className="img1 img" alt="group" />
              <img src={Title} className="title" alt="title" />
              <img src={Group18} className="img18 img" alt="group" />
            </div>
            <div id="periodicTable">
              {this.state.elements.map((element, i) => {
                return (
                  <Cell
                    key={i}
                    name={element.name}
                    number={element.atomicNumber}
                    symbol={element.symbol}
                    standardState={
                      element.standardState ? element.standardState : "?"
                    }
                    groupBlock={element.groupBlock}
                    atomicMass={element.atomicMass}
                    yearDiscovered={element.yearDiscovered}
                  />
                );
              })}

              <img src={Group2} className="img2 img" alt="group" />
              <img src={Group3} className="img3 img" alt="group" />
              <img src={Group4} className="img4 img" alt="group" />
              <img src={Group5} className="img5 img" alt="group" />
              <img src={Group6} className="img6 img" alt="group" />
              <img src={Group7} className="img7 img" alt="group" />
              <img src={Group8} className="img8 img" alt="group" />
              <img src={Group9} className="img9 img" alt="group" />
              <img src={Group10} className="img10 img" alt="group" />
              <img src={Group11} className="img11 img" alt="group" />
              <img src={Group12} className="img12 img" alt="group" />
              <img src={Group13} className="img13 img" alt="group" />
              <img src={Group14} className="img14 img" alt="group" />
              <img src={Group15} className="img15 img" alt="group" />
              <img src={Group16} className="img16 img" alt="group" />
              <img src={Group17} className="img17 img" alt="group" />
              <img src={Subgroup} className="sub1" alt="group" />
              <img src={Subgroup2} className="sub2" alt="group" />
            </div>
          </div>

          {/* <div className="col-md-2 height search"></div> */}
        </div>
      </div>
    );
  }
}

export default Elements;
