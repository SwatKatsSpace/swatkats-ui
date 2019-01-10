interface UserState {
  loading: boolean;
  error: boolean;
  user: User;
}

interface ArticleState {
  loading: boolean;
  listOfArticle: Array<Article>;
  selectedArticle: Article;
}

interface AppState {
  user: UserState;
  article: ArticleState;
}
