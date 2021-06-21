import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import Home from './Home'
import Create from './Create'
 import Navbar from './Navbar'
 import BlogDetails from './BlogDetails'
import NotFound from './NotFound'
const AllRouter=()=>{
    return(
        <Router>
        <div className="App">
           <Navbar /> 
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
              <Route path="/blogdetails/:id">
                <BlogDetails />
              </Route>
              <Route path="*">
                   <NotFound />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
                  
    )
    
}
 export default AllRouter;