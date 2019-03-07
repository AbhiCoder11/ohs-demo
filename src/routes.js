import React from 'react';
import {BrowserRouter,Route,Router} from 'react-router-dom';
import history from './history';

import App from './App';
import Dashboard from './company/DashBoard';


class Routes extends React.Component{
    
    render(){
        return(
                   <Router history={history}> 
                   <div>    
                    <Route exact path="/" component={App}/>  
                    <Route exact path="/company" component={Dashboard}/> 
                    {/* <Route path="/surveys/new" component={SurveyNew}/> */}
                    </div>
                    </Router>
        )
    }
}

export default Routes
