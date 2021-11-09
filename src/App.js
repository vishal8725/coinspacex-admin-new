import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DashBoard from './pages/DashBoard/DashBoard';

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/dashboard' exact component={DashBoard} />

        {/* PUTT OTHER COMPONENTS HERE */}
      </Switch>
    </Router>
  );
}

export default App;
