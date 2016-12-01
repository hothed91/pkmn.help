const React = require("react")
const ReactRedux = require("react-redux")
const Offense = require("./offense")
const Defense = require("./defense")
const TabContainer = require("./tab-container")

const $ = React.createElement

function App(props) {
  return $(TabContainer, {
    changeTab: props.changeTab,
    current: props.tab,
    items: [
      {title: "Offense", element: Offense(props)},
      {title: "Defense", element: Defense(props)},
    ],
  })
}

function mapDispatchToProps(dispatch) {
  return {
    changeTab(tab) {
      dispatch({
        type: "ChangeTab",
        value: tab
      })
    },
    updateType0(type) {
      dispatch({
        type: "UpdateType0",
        value: type
      })
    },
    updateType1(type) {
      dispatch({
        type: "UpdateType1",
        value: type
      })
    },
    updateType2(type) {
      dispatch({
        type: "UpdateType2",
        value: type
      })
    }
  }
}

function mapStateToProps(state) {
  return {
    tab: state.tab,
    type0: state.type0,
    type1: state.type1,
    type2: state.type2
  }
}

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(App)
