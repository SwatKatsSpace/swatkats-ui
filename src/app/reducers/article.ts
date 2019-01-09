import { SwatkatsAction, SwatkatsActionType } from "../actions/types";

const Article_DEFAULT_STATE: ArticleState = {
  loading: false,
  listOfArticle: []
};

export const article = (
  state = Article_DEFAULT_STATE,
  action: SwatkatsAction
): ArticleState => {
  switch (action.type) {
    case SwatkatsActionType.setListOfArticle:
      return { ...state, listOfArticle: action.payload.listOfArticle };
  }

  return state;
};
