import React from "react";
import ReactJson from 'react-json-view'


const GetCityDataView = (props) => {
  return (
    <React.Fragment>
      {Object.keys(props.data).length ?
        <ReactJson src={
          JSON.parse(props.data)
        } enableClipboard={false} />
        :
        <div style={{ textAlign: "center" }}>{"NO DATA AVAILABLE"}</div>}
    </React.Fragment>
  )
}

export default GetCityDataView;