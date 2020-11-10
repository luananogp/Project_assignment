import React, {useState, useEffect}  from 'react'
import axios from 'axios';
import Button from './components/main/Button';


function DataFetching (){
    const [users, setUser] = useState ({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    useEffect(() => {
        axios
            .get (`https://jsonplaceholder.typicode.com/users/${idFromButtonClick}`)
            .then (res => {
                console.log (res)
                setUser (res.data)
            })
            .catch (err => {
                console.log (err)
            })
   
        }, [idFromButtonClick])

        return (
            <div className="card">
               <input type ="text" value={id} onChange={e => setId(e.target.value)}/>
            <div className="container">
                <h4 data-letters="P"><b>{users.name}</b></h4>
                <p>@{users.username}</p>
                <p className="siteUser">http://{users.website}</p>
            </div>
    
            <div className="button">
                <button type="button" onClick={handleClick}>MORE DETAILS</button>

            </div>
            </div>
                  
        )




}

export default DataFetching

