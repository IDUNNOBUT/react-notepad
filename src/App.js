import './App.css';
import Header from "./Components/Header/Header";
import {connect} from "react-redux";
import Notes from "./Components/Notes/Notes";

const mapStateToProps = (state)=>{ return {theme: state.theme.theme}};

function App(props) {
  return (<div className={['App-wrapper',props.theme].join(' ')}>
    <Header/>
    <Notes/>
  </div>);
}

export default connect(mapStateToProps, {})(App);
