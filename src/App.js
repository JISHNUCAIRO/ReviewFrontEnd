import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListStudentComponent from './components/ListStudentComponent';
import CreateStudentComponent from './components/CreateStudentComponent';
import ViewStudentComponent from './components/ViewStudentComponent';
import UpdateStudentComponent from './components/UpdateStudentComponent';

function App() {
  return (
    <div>
        <Router>
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListStudentComponent}></Route>
                          <Route path = "/Students" component = {ListStudentComponent}></Route>
                          <Route path = "/add/:id" component = {CreateStudentComponent}></Route>
                          <Route path = "/edit/:id" component = {UpdateStudentComponent}></Route>
                          <Route path = "/view/:id" component = {ViewStudentComponent}></Route>
                    </Switch>
                </div>
        </Router>
    </div>
    
  );
}

export default App;
