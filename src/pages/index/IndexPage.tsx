import React from "react"
import Header from "./Header";
import Body from "./Body"
import "@/assets/css/index/index.less"

export interface Props {
    token?: string | number
}

export default function IndexPage(props: Props) {
    return (
        <div className="index-page">
            <div>
                <Header/>
            </div>
            <div>
                <Body/>
            </div>
        </div>
    )
}


