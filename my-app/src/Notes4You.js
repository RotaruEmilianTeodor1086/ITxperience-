import './Notes4You.css';
import './components/Sidebar/Sidebar'
import Sidebar from './components/Sidebar/Sidebar';
import Notes from './components/Notes/Notes';
import Note from './components/Note/Note';
function Notes4You() {
  return (
    <div className="Notes4You">
      <Sidebar/>
      <Notes/>
      <Note/>
    </div>
  );
}

export default Notes4You;
