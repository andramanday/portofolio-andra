import React from 'react';
import './app.scss';
import './components/styles/additional.scss';
import './components/styles/home.scss';

import { Switch, Route, useLocation } from "react-router-dom";
import { Menu, Footer, Home, Experience, Project, Profile } from './components/index';

const App = () => {
    let location = useLocation().pathname;

    let locationSplit = location.split("/");
    let locationParent = locationSplit[1];
    let WithoutRouter = ["auth", "error", "utilities"];

    return(
        <div className="container">
            <Menu />
            <div className="content">
                <React.Suspense fallback={<h1>Still Loading…</h1>}>
                    <Switch history={history}>
                        <Route path="/" exact component={Home} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/experiences" component={Experience} />
                        <Route path="/projects" component={Project} />
                        <Route path="/contact" component={ContainerProject} />
                    </Switch>
                </React.Suspense>
            </div>
            <Footer/>
        </div>
    )
}

const ContainerPersonal = () =>{
    return(
        <div>
            <p>Personal</p>
        </div>
    )
}

const ContainerExperience = () =>{
    return(
        <div>
            <p>Experince</p>
        </div>
    )
}

const ContainerProject = () =>{
    return(
        <div>
            <p>Project</p>
        </div>
    )
}

export default App;