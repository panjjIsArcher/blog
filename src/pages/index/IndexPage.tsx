import React from "react"
import Header from "./Header";
import Body from "./Body"
import Me from "../author/Author"
import Front from "../front/front";
import Behind from "../behind/behind";
import "@/assets/css/index/index.less"

const {
    Switch,
    Route,
    BrowserRouter
} = require("react-router-dom")

export interface Props {
    token?: string | number
}

export default function IndexPage(props: Props) {
    return (
        <div className="index-page">
            <BrowserRouter>
                <div>
                    <Header/>
                </div>
                <div>
                    {/*主页面*/}
                    <Switch>
                        <Route exact path='/'>
                            <Body/>
                        </Route>
                    </Switch>
                    {/*about me*/}
                    <Switch>
                        <Route path='/me'>
                            <Me/>
                        </Route>
                    </Switch>
                    {/*前端*/}
                    <Switch>
                        <Route path="/front">
                            <Front/>
                        </Route>
                    </Switch>
                    {/*后端*/}
                    <Switch>
                        <Route path="/behind">
                            <Behind/>
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
}


