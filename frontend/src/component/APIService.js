export default class APIService {
  static UpdateArticle(article_id, body) {
    return fetch(`http://127.0.0.1:8000/articles/${article_id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token e2bdc24215b1db777eb49518228727154cdd6808",
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }
}
