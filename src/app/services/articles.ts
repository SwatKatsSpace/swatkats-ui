export const apiFetchListOfArticle = async (): Promise<Array<Article>> => {
  let headers = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*"
  });
  return fetch(`http://localhost:8080/swatkats/articles`, {
    method: "GET",
    headers
  }).then(response => {
    return response.json();
  });
};

export const apiFetchArticle = async ({
  articleUuid
}: {
  articleUuid: string;
}): Promise<Article> => {
  let headers = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*"
  });
  return fetch(`http://localhost:8080/swatkats/articles/${articleUuid}`, {
    method: "GET",
    headers
  }).then(response => {
    return response.json();
  });
};
