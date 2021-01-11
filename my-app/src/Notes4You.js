import './Notes4You.css';
import './components/Sidebar/Sidebar'
import Sidebar from './components/Sidebar/Sidebar';
import Notes from './components/Notes/Notes';
import Note from './components/Note/Note';
import{
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
function Notes4You() {
  return (
    <Router>
    <div className="Notes4You">
      <Sidebar/>
      <Switch>
        <Route path = "/all-notes">
          <Notes title="Toate notitele"/>
          <Route path="/all-notes/:id">
          </Route>
          <Note/>
        </Route>

        <Route path = "/trash">
          <Notes title="Cos de gunoi"/>
          <Route path="/trash/:id">
          </Route>
          <Note/>
        </Route>
      </Switch>
      
    </div>
    </Router>
  );
}

export default Notes4You;
