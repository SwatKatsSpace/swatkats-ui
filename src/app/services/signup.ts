export const fetchUserInfo = async (): Promise<UserResponse> => {
  let headers = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*"
  });
  return fetch(`http://localhost:8080/swatkats/user`, { headers }).then(
    response => response.json()
  );
};
