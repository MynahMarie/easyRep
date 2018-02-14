import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import CategoryForm from "./containers/CategoryForm";
import SymptomsForm from "./containers/SymptomsForm";
import ThankYou from './components/ThankYou';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Route exact path="/categories" component={CategoryForm} />
        <Route exact path="/symptoms" component={SymptomsForm} />
        <Route exact path="/thankyou" component={ThankYou} />
      </div>
    </BrowserRouter>
  );
};

export default App;
