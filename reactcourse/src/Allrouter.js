
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import About from "./About";
import Blog from "./Blog";
import BlogDetails from "./BlogDetails";
import Home from './Home';
import Nav from './Nav';
import PageNotFound from "./PagenotFound";

const Allrouter=()=>{
    return(
        <div>
             <Router>
         <Nav />
         <Switch>
         <Route exact path="/">
                 <Home />
            </Route>
         <Route  path="/about">
                 <About />
            </Route>
         <Route path="/new">
             <h1>New route</h1>
         </Route>
         <Route path="/blog">
             <Blog />
         </Route>
         {/* <Route path="/blog/:id">
              <BlogDetails />
            </Route> */}
         <Route path="*">
             <PageNotFound />
         </Route>
         
         </Switch>
         <Route path="/blog/:id" ><BlogDetails /></Route>
        
           </Router>
        </div>
    )
}  

export default Allrouter;