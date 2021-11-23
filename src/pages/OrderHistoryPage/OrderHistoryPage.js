import React from 'react' 
import { checkToken } from '../../utilities/users-service'
import moment from 'moment'

export default function OrderHistoryPage() {
    async function handleCheckToken() {
        const exp = await checkToken()
        alert(`Your token expires ${moment(exp).format('LLLL')}`)
    }

    return (
        <>
            <h1>OrderHistoryPage</h1>
            <button onClick={handleCheckToken}>Tokenize</button>
        </>
    )
}