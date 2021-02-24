const usersUrl  = 'http://localhost:8080/users/'
const bgamesURL = 'http://localhost:8080/board-games/'

/*
---- Boardgame Services -----
*/

// GET - All boardgames.
export const getBaseBoardGames = () => {
    console.log("getting data from backend");
    return fetch(bgamesURL)
        .then(res => res.json())
}

// GET - Boardgames given a query string.
export const getQueryBoardGames = (query) => {
    console.log("getting data from backend");
    return fetch(`${bgamesURL}${query}`)
        .then(res => res.json())
}

/*
---- User Services -----
*/

// GET - User by ID.

export const getUser = (id) => {
    // console.log('doing a thing')
    return fetch(`${usersUrl}${id}`)
        .then(res => res.json())
}

// GET User by LogIn

export const logInUser = (payload) => {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    
}

// POST - User

export const postNewUser = (payload) => {
    return fetch(usersUrl, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}

// POST - Add boardgame to users 

export const postAddGameToUserList = (payload, id, targetList) => {

    const addGametoUserURL = usersUrl+id+"?targetList="+targetList;
    return fetch(addGametoUserURL, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    
}



