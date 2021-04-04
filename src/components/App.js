import React, { Component } from "react";
import "../App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import ProductList from "./ProductList";
import Menu from "./Menu";

import routes from "./routes";
import ProductListPage from "./ProductListPage";


class App extends Component {
  
  render() {
    return (
      <div>
        <Router>
          <Menu />
            {/* <ProductList /> */}

            <Switch>
              {this.showPage(routes)}
            </Switch>
        </Router>
      </div>
    );
  }
  showPage = (routes) => {
    var result = null;
    if(routes.length > 0) {
      result = routes.map((value,index)=> {
        return (<Route index={index} path={value.path} exact={value.exact} component={value.main}/>)
      })
    }
    return result;
  }
 
}

export default App;
