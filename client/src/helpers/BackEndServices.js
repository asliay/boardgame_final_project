const usersUrl = 'http://localhost:8080/users'

export const postNewUser = (payload) => {

    return fetch(usersUrl, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}