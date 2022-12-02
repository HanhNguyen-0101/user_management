import { CHANGE_THEME, DELETE_USER, EDIT_USER, REGISTE_USER, UPDATE_USER } from './../types/ManageUsersType';

export const registerUserAction = (user) => ({
    type: REGISTE_USER,
    user
});

export const editUserAction = (user) => ({
    type: EDIT_USER,
    user
});

export const deleteUserAction = (userID) => ({
    type: DELETE_USER,
    userID
});

export const updateUserAction = (user) => ({
    type: UPDATE_USER,
    user
});

export const changeThemeAction = (themeID) => ({
    type: CHANGE_THEME,
    themeID
})