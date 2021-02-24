import React, {useState, useEffect} from 'react'

const ChangeTitleOnClick = () => {
    const [state, setstate] = useState(0)

    useEffect(()=>{
        document.title=`You clicked me ${state} times`
    })

    // const changeState = () => {
    //     setstate(state+1)
    // }

    return <button onClick={() => setstate(state+1)}> Click me {state} </button>

}

export default ChangeTitleOnClick