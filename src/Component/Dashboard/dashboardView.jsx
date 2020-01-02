import React from "react";
import "./dashboardView.css"
import GetCitiesListView from "../GetCitiesList/getCitiesListView";
import GetCityDataView from "../GetCityData/getCityDataView";
import HeaderView from "../Header/headerView";

const DashboardView = (props) => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div
              className="card w-75"
            >
              <div className="header">
                <HeaderView
                  image={true}
                  text="choose location" />
              </div>
              <div
                className="body"
                style={{
                  marginTop: "8%",
                  marginLeft: "10%"
                }}
              >
                <GetCitiesListView
                  cities={props.cities}
                  onSelect={props.onSelect}
                  selected={props.selected}
                />
                <button
                  className="btn btn-primary"
                  style={{
                    marginLeft: "59%",
                    marginTop: "3%",
                    marginBottom: "4%"
                  }}
                  disabled={props.selected !== null ? false : true}
                  onClick={props.getCityData}
                >Report</button>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <HeaderView
              text="Location Information"
              image={false}
            />
            <div className="card" style={{ width: "100%", height: "25%", overflow: "auto" }}>
              <div className="card-body">
                <GetCityDataView
                  data={props.data}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default DashboardView

