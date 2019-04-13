interface Window {
  __REDUX_DEVTOOLS_EXTENSION__?: Function;
}

interface User {
  name: string;
  email: string;
  phone: string;
  aadharId: string;
  panId: string;
  password: string;
}

interface Article {
  uuid: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  aadharId: string;
  panId: string;
  image: string;
  relation: string;
  description: string;
  likes: string;
}

interface TokenWrapper {
  user: User;
  token: string;
}

declare var Razorpay: any;
