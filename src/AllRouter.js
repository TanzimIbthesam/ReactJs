import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import Home from './Home'
const AllRouter=()=>{
    return(
        <Router>
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
      </Router>

    )
    
}
 export default AllRouter;