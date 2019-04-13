export const apiLoginUsingEmail = async ({
  email,
  password
}: {
  email: string;
  password: string;
}): Promise<TokenWrapper> => {
  let headers = new Headers({
    "Content-Type": "application/json",
    Accept: "Application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Request-Headers": "*"
  });
  return fetch(`http://localhost:8080/swatkats/login`, {
    method: "POST",
    headers,
    body: JSON.stringify({ email: email, password: password })
  }).then(response => response.json());
};

export const apiLoginUsingPhone = async ({
  email,
  password
}: {
  email: string;
  password: string;
}): Promise<TokenWrapper> => {
  let headers = new Headers({
    "Content-Type": "application/json",
    Accept: "Application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Request-Headers": "*"
  });
  return fetch(`http://localhost:8080/swatkats/login`, {
    method: "POST",
    headers,
    body: JSON.stringify({ phone: email, password: password })
  }).then(response => response.json());
};
