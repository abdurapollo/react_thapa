import React from 'react'
import { useParams } from 'react-router-dom'

// const User = ({ match }) => {
// return <h1>user { match.params.fname } page</h1>
// }

const User = () => {
    const { fname } = useParams()
    return <h1>user { fname } page</h1>
    }

export default User