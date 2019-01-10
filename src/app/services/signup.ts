export const fetchUserInfo = async (): Promise<User> => {
  let headers = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Request-Headers": "*"
  });
  return fetch(`http://localhost:8080/swatkats/users`, {
    method: "GET",
    headers
  }).then(response => {
    return response.json();
  });
};

export const saveUserDetails = async (user: User): Promise<string> => {
  let headers = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*"
  });
  return fetch(`http://localhost:8080/swatkats/users`, {
    method: "POST",
    headers,
    body: JSON.stringify(user)
  }).then(response => response.json());
};

// export const post = async <R = any>(
//   path: string,
//   { body, query }: PostParams
// ): Promise<R> => {
//   return fetch(toURL(path, query), {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json; charset=utf-8"
//     },
//     body: JSON.stringify(body)
//   }).then(res => res.json());
// };
