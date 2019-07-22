import React from 'react'

const RaidContext = React.createContext({ health: 100 })

export { RaidContext }

export default function RaidStore(props: any) {

    const [statehook] = React.useState({ health: 100 })

    return (
        <RaidContext.Provider value={statehook}>
            {props.children}
        </RaidContext.Provider>
    )
}