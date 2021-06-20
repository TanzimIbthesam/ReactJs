
import Blogs from './Blogs'

import useFetch from './useFetch';

const Home=()=>{
 
const { data:blogs, loading, error }=useFetch('http://localhost:8000/blogs');

  
 
        return (
            <div className="">
                     {error && <div>{error}</div>}
                   {loading && <div>Loading</div>}
                   {blogs &&  <Blogs blogs={blogs} title="All blogs" /> }
                  
                   
            </div>
         
          );

        
 
}




export default Home;