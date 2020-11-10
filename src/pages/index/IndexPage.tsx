import React from "react"
import Header from "./Header";
import Body from "./Body"
import Me from "../author/Author"
import "@/assets/css/index/index.less"
import {
    Switch,
    Route,
    BrowserRouter as Router
} from "react-router-dom"

export interface Props {
    token?: string | number
}

export default function IndexPage(props: Props) {
    return (
        <div className="index-page">
            <Router>
                <div>
                    <Header/>
                </div>
                <div>
                    <Switch>
                        <Route exact path='/'>
                            <Body/>
                        </Route>
                    </Switch>
                    <Switch>
                        <Route path='/me'>
                            <Me/>
                        </Route>
                    </Switch>

                </div>
            </Router>
        </div>
    )
}


