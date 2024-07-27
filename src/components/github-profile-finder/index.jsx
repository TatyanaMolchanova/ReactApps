import { useEffect, useState } from "react";
import User from "./user";
import "./styles.css"

export default function GithubProfileFinder() {

    const [userName, setUsername] = useState('TatyanaMolchanova')
    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(false)

    const fetchGithubUserData = async () => {
        setLoading(true)
        const response = await fetch(`https://api.github.com/users/${userName}`);
        const result = await response.json();

        if (result) {
            setUserData(result);
            setLoading(false);
            setUsername('');
        }
        console.log('result', result)
    }

    const handleSubmit = () => {
        fetchGithubUserData();
    }

    useEffect( () => {
        fetchGithubUserData();
    }, [])

    if (loading) {
        return <h1>Loading data, please, wait</h1>
    }

    return (
        <div className="github-profile-container">
            <div className="input-wrapper">
                <input
                    name="search-by-username"
                    type="text"
                    placeholder="Search Github UserName..."
                    value={userName}
                    onChange={(event) => setUsername(event.target.value)}
                />
                <button onClick={handleSubmit}>Search</button>
            </div>

            {
                userData !== null ? <User user={userData} /> : null
            }
        </div>
    )


}