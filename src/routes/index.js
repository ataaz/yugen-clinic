import {
    Switch,
    Route,
  } from "react-router-dom";
  import {
       Home,
      About,
  } from 'pages'
  
  const Routes = () => {
     return(
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About} />
      </Switch>
     )
  }
  
  export default Routes;