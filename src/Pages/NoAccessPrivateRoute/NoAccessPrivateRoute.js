import React from 'react';
import './NoAccessPrivateRoute.css';
import {useHistory} from "react-router-dom";

function NoAccessPrivateRoute() {
    const history = useHistory();
    return (
        <section className="outer-container-private">
            <article className="inner-container-private">
                <div className="white-background">
                    <div className="blue-background">
                        <h1> Sorry...</h1>
                    </div>
                    <h4>Average people don't have access to the cool stuff, please verify:</h4>
                    <span>
                        <button
                            className="button-private"
                            onClick={() => history.push("/average-people")}
                        >
                        Average
                    </button>
                    <button
                        className="button-private"
                        onClick={() => history.push("/login")}>
                        Fellow 'geek'
                    </button>
                    </span>
                </div>
            </article>
        </section>
    );
}

export default NoAccessPrivateRoute;