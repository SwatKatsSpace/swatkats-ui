interface SignUpState {
  name: string;
  email: string;
  phone: string;
  aadharId: string;
}

interface ArticleState {
  loading: boolean;
  listOfArticle: Array<Article>;
  selectedArticle: Article;
}

interface AppState {
  user: SignUpState;
  article: ArticleState;
}
