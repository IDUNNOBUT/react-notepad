const CHANGE_THEME = 'CHANGE_THEME';

let initialState = {
    theme: localStorage.getItem('preferedTheme') || 'light',
};

export const changeThemeAC = (theme) => ({type: CHANGE_THEME, theme});

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_THEME: {
            state.theme = action.theme;
            localStorage.setItem('preferedTheme', action.theme);
            return {...state};
        }
        default : {
            return state;
        }
    }
}

export default themeReducer;