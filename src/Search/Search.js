import React, { useEffect,useState, useContext } from 'react';
import config from "../config/index";
import './Search.scss';
import SearchResult from './SearchResult/SearchResult';
import { UserContext } from '../user-context';


function Search() {
    const {user} = useContext(UserContext);
    const [query, setQuery] = useState('');
    const [users,setUsers] = useState([]);

    useEffect(() => {
        async function searchUsers() {
            try {
                const res = await fetch(config.apiUrl +'/users?username='+ query, {
					credentials: 'include'
                });
                const fetchedUsers = await res.json();
                setUsers(fetchedUsers);
            } catch(err) {
                console.log(err);
            }
        }
        searchUsers();
    }, [query]);

    return(
        <div className="search  ">
            <div className="col-lg-4">
                <input className="form-control" 
                    placeholder="search.." 
                    value={query}
                    onChange={e => setQuery(e.target.value)} />

            </div>
            <hr className="mx-3" />
             
             <div className="search-result d-flex flex-wrap"> 
                 {users.map(user => {
                    return <SearchResult  user={user} key={user._id}/>
                })}
             </div>
        </div>
        
        
 
    );
}

export default Search;