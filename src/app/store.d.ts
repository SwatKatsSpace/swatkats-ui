interface UserState {
  loading: boolean;
  error: boolean;
  user: User;
}

interface ArticleState {
  loading: boolean;
  payment: Payment;
  listOfArticle: Array<Article>;
  selectedArticle: Article;
}

interface AppState {
  user: UserState;
  article: ArticleState;
}

interface Payment {
  value: number;
  error: string;
  isPaymentModalOpen: boolean;
}
