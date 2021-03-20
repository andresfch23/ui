export const RESULTS_PER_PAGE = 10;

export const DROPDOWN_DEFAULT_VALUE = 'Select a developer';

export const DEVELOPERS_ROUTE = '/developers';
export const PROFILE_ROUTE = '/profile';

export const FIRST_NAME = 'firstName';
export const LAST_NAME = 'lastName';
export const EMAIL = 'email';
export const MESSAGE = 'message';
export const CAPTCHA = 'captcha';


export const INITIAL_FORM_VALUES = {
    [FIRST_NAME]: '',
    [LAST_NAME]: '',
    [EMAIL]: '',
    [MESSAGE]: '',
    [CAPTCHA]: ''
};

export const INITIAL_ERROR_FORM_VALUES = {
    [FIRST_NAME]: false,
    [LAST_NAME]: false,
    [EMAIL]: false,
    [MESSAGE]: false,
    [CAPTCHA]: false
}

export const BUTTON_TYPES = {
    sign: {
        text: 'Sign Up'
    },
    login: {
        text: 'Login',
        icon: 'login'
    }
};