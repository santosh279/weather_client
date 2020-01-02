import React from "react";
import DashboardView from "./dashboardView";
import { connect } from 'react-redux'
import USA_CITIES from "../../Constants/usa_states";
import * as Actions from "../../Actions";


class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: null,
      cities: [],
      data: {}
    }
  }

  componentDidMount() {
    this.setState({
      cities: USA_CITIES
    })
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.data !== prevState.data) {
      return {
        data: Object.keys(nextProps.getCityData.data).length
          ? nextProps.getCityData.data.data : {}
      }
    } else {
      return null
    }
  }

  getCityData = () => {
    const { selected } = this.state;
    const { dispatch } = this.props
    if (selected !== null) {
      dispatch(Actions.getCityData(selected))
    }
  }

  onSelect = (city) => {
    this.setState({
      selected: city
    })
  }

  render() {
    const { selected, cities, data } = this.state;
    const { onSelect, getCityData } = this;
    return (
      <DashboardView
        cities      = {cities}
        selected    = {selected}
        onSelect    = {onSelect}
        data        = {data}
        getCityData = {getCityData}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    getCityData: state.weatherDetails
  }
}

export default connect(mapStateToProps)(Dashboard);