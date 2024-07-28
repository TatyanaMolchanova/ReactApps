import {useEffect, useState} from "react";
import Suggestions from "./suggestions";


export default function SearchAutocomplete() {

    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)
    const [searchParam, setSearchParam] = useState('')
    const [showDropdown, setShowDropdown] = useState(false)
    const [filteredUsers, setFilteredUsers] = useState([])

    const handleChange = (event) => {
        const query = event.target.value.toLowerCase()
        setSearchParam(query)

        if (query.length > 1) {
            const filteredData = users && users.length ?
                users.filter(item => item.toLowerCase().indexOf(query) > -1)
                : [];

            setFilteredUsers(filteredData)
            setShowDropdown(true)
        } else {
            setShowDropdown(false)
        }
    }

    const handleClick = (event) => {
        setShowDropdown(false)
        setSearchParam(event.target.innerText)
        setFilteredUsers([])
    }

    const fetchListOfUsers = async() => {
        try {
            setLoading(true)
            const response = await fetch('https://dummyjson.com/users');
            const data = await response.json();

            if (data && data.users && data.users.length) {
                setUsers(data.users.map((user) => user.firstName));
                setLoading(false);
                setError(null);
            }
        } catch(error) {
            setLoading(false)
            console.error(error)
            setError(error)
        }
    }

    useEffect(() => {
        fetchListOfUsers()
    }, []);

    console.log('users', users, filteredUsers)

    return (
        <div className="search-autocomplete-container">
            {
                loading ? (<h1>Loading data, please, wait</h1> )
                    : (
                    <input
                        value={searchParam}
                        onChange={handleChange}
                        name="search-users"
                        placeholder="Search Users here..."
                    />
                )
            }

            {showDropdown && <Suggestions handleClick={handleClick} data={filteredUsers} />}
        </div>
    )
}