import { SwatkatsAction, SwatkatsActionType } from "../actions/types";

const Article_DEFAULT_STATE: ArticleState = {
  loading: false,
  listOfArticle: [],
  payment: {
    value: 100,
    error: "",
    isPaymentModalOpen: false
  },
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
    case SwatkatsActionType.setIsPaymentModalOpen:
      return {
        ...state,
        payment: {
          ...state.payment,
          isPaymentModalOpen: !state.payment.isPaymentModalOpen
        }
      };
    case SwatkatsActionType.setPaymentValue:
      if (isNaN(action.payload.value)) {
        return {
          ...state,
          payment: {
            ...state.payment,
            error: "Only numbers allowed"
          }
        };
      }
      if (action.payload.value < 100) {
        return {
          ...state,
          payment: {
            ...state.payment,
            error: "Amount should be more than ₹99"
          }
        };
      }
      return {
        ...state,
        payment: {
          ...state.payment,
          value: action.payload.value,
          error: ""
        }
      };
    case SwatkatsActionType.setPaymentError:
      return {
        ...state,
        payment: {
          ...state.payment,
          error: action.payload.value
        }
      };
    case SwatkatsActionType.setArticle:
      return { ...state, selectedArticle: action.payload.article };
    case SwatkatsActionType.setArticleFirstName:
      return {
        ...state,
        selectedArticle: {
          ...state.selectedArticle,
          firstName: action.payload.firstName
        }
      };
    case SwatkatsActionType.setArticleLastName:
      return {
        ...state,
        selectedArticle: {
          ...state.selectedArticle,
          lastName: action.payload.lastName
        }
      };
    case SwatkatsActionType.setArticleEmail:
      return {
        ...state,
        selectedArticle: {
          ...state.selectedArticle,
          email: action.payload.email
        }
      };
    case SwatkatsActionType.setArticlePhone:
      return {
        ...state,
        selectedArticle: {
          ...state.selectedArticle,
          phone: action.payload.phone
        }
      };
    case SwatkatsActionType.setArticleAadharId:
      return {
        ...state,
        selectedArticle: {
          ...state.selectedArticle,
          aadharId: action.payload.aadharId
        }
      };
    case SwatkatsActionType.setArticlePanId:
      return {
        ...state,
        selectedArticle: {
          ...state.selectedArticle,
          panId: action.payload.panId
        }
      };
    case SwatkatsActionType.setArticleImage:
      return {
        ...state,
        selectedArticle: {
          ...state.selectedArticle,
          image: action.payload.image
        }
      };
    case SwatkatsActionType.setArticleRelation:
      return {
        ...state,
        selectedArticle: {
          ...state.selectedArticle,
          relation: action.payload.relation
        }
      };
    case SwatkatsActionType.setArticleDescription:
      return {
        ...state,
        selectedArticle: {
          ...state.selectedArticle,
          description: action.payload.description
        }
      };
    case SwatkatsActionType.setArticleLikes:
      return {
        ...state,
        selectedArticle: {
          ...state.selectedArticle,
          likes: action.payload.likes
        }
      };
  }

  return state;
};
