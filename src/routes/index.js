import {
    Switch,
    Route,
  } from "react-router-dom";
  import Home from '../pages/Home';
  import About from '../pages/About';
  import Services from '../pages/Services';
  import YugenFace from '../pages/Yugenface';
  
  const Routes = () => {
     return(
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/services" component={Services}/>
          <Route exact path="/services/yugen-face" component={YugenFace}/>
      </Switch>
     )
  }
  
  export default Routes;