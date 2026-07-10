import Navbar from './Navbar';
import BlogDetails from './BlogDetails';
import Create from './create';
import Home from './home';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import NotFound from './NotFound';


function App() {

  return (
    <>
    <Router>
      <div className="app">
        <Navbar></Navbar>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
      </Router>
    </>
  )
}

export default App;
