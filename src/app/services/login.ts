export const loginService = async(user:User): Promise<string> => {
    let headers = new Headers({
        "Content-Type" : "application/json",
        Accept : "Application/json",
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Headers" : "*",
        "Access-Control-Allow-Request-Headers" : "*"
    });
    return fetch(`http://localhost:8080/swatkats/login`, {
        method : "POST",
        headers,
        body: JSON.stringify(user)
    }).then(response => response.json());
};