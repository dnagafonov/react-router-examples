import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

export default function URLparameters() {
    return(
        <Router>
            <div>
                <h2>Accounts:</h2>
                <ul>
                    <li>
                        <Link to="/netflix">Netflix</Link>
                    </li>
                    <li>
                        <Link to="yahoo">yahoo</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/:some_path" component = {Child}/>
                </Switch>
            </div>
        </Router>
    );
};

const Child = () => {
    let {some_path} = useParams();
    return(
        <div>
            <h2>ID: {some_path}</h2>
        </div>
    )
}