const usersUrl = 'http://localhost:8080/users'

export const postNewUser = (payload) => {

    return fetch(usersUrl, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}

export const postAddGameToUserList = (payload, id, targetList) => {

    const addGametoUserURL = usersUrl+"/"+id+"?targetList="+targetList;
    console.log(addGametoUserURL);
    console.log(payload);
    return fetch(addGametoUserURL, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}