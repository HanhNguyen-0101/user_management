import swal from 'sweetalert';
import { UserModel } from '../models/UserModel';
import { UserTypeModel } from '../models/UserTypeModel';
import { CHANGE_THEME, DELETE_USER, EDIT_USER, REGISTE_USER, UPDATE_USER } from '../types/ManageUsersType';
import { ThemeList } from './../components/styleComponents/theme/ManageTheme';
export const userType = [
    new UserTypeModel(1, 'Khách hàng'),
    new UserTypeModel(2, 'Nhân viên')
]
const stateDefault = {
    theme: ThemeList[0],
    userList: [
        new UserModel(1, 'Nguyễn A', 'Nguyễn V A', '123456', '123@gmail.com', '01233445', 1),
        new UserModel(2, 'Nguyễn A1', 'Nguyễn V A1', '1234561', '123@gmail.com', '01233445', 2),
    ],
    userActive: new UserModel(-1, '', '', '', '', '', 1),
    disabled: false
}

export const ManageUserReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case CHANGE_THEME: {
            const index = (ThemeList || []).findIndex(i => i.id === action.themeID);
            if (index !== -1) {
                state.theme = ThemeList[index];
            }
            return {...state}
        }
        case DELETE_USER: {
            state.userList = (state.userList || []).filter(i => i.id !== action.userID);
            state.userList = [...state.userList];
            return {...state};
        }
        case REGISTE_USER: {
            const index = state.userList.findIndex(i => i.email === action.user.email);
            if (index !== -1) {
                swal({
                    title: "Warning!!! Email is registed",
                    icon: "warning",
                    dangerMode: true,
                  })
            } else {
                state.userList.push(action.user);
                state.userList = [...state.userList];
                state.userActive = stateDefault.userActive;
            }
            return {...state}
        }
        case EDIT_USER: {
            state.disabled = true;
            state.userActive = action.user;
            return {...state}
        }
        case UPDATE_USER: {
            state.disabled = false;
            const index = state.userList.findIndex(i => i.id === action.user.id);
            if (index !== -1) {
                state.userList[index] = action.user;
                state.userList = [...state.userList];
            }
            state.userActive = stateDefault.userActive;
            return {...state}
        }
        default: return {...state};
    }
    
}