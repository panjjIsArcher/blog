import React from "react"

export interface Props {
    token?: string | number
}

export default function Index(props: Props) {
    const header: string = '头部'
    const body: string = '身体'
    return (
        <div>
            <div>
                {header}
            </div>
            <div>
                {body}
            </div>
        </div>
    )
}


