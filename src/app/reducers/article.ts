import { SwatkatsAction, SwatkatsActionType } from "../actions/types";

const Article_DEFAULT_STATE: ArticleState = {
  loading: false,
  listOfArticle: [],
  selectedArticle: {
    uuid: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    aadharId: "",
    panId: "",
    image: "",
    relation: "",
    description: "",
    likes: ""
  }
};

export const article = (
  state = Article_DEFAULT_STATE,
  action: SwatkatsAction
): ArticleState => {
  switch (action.type) {
    case SwatkatsActionType.setListOfArticle:
      return { ...state, listOfArticle: action.payload.listOfArticle };
    case SwatkatsActionType.setArticle:
      return { ...state, selectedArticle: action.payload.article };
  }

  return state;
};
