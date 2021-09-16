import './App.css';
import { Dashboard, Layout } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">

      <Router>
        <Switch>
          <Route path="/">
            <Layout>
              <Dashboard />
            </Layout>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
