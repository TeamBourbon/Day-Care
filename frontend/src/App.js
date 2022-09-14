import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import { ApplicationViews } from './components/ApplicationViews';
import { Navigation } from './components/nav/Navbar';

function App() {
  return (
  //   <ApplicationViews />
  // )
    <Route>
      <Navigation />
      <ApplicationViews />

    </Route>
   
   
     
    
    
  );
}

export default App;
