export const fetchUserInfo = async (): Promise<UserResponse> => {
  return fetch(`http://localhost:8080/swatkats/user`).then(response =>
    response.json()
  );
};
