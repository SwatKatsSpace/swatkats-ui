const regexes = {
  phone: /^[+]?(\d{1,2})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
  email: /^\S+@\S+$/
};

export const validatePhoneNumber = (phoneNumber: string): boolean =>
  !regexes.phone.test(phoneNumber.trim()) ? false : true;

export const validateEmail = (email: string): boolean =>
  !regexes.email.test(email.trim()) ? false : true;
