import { userType } from "../reducers/ManageUserReducer";

export class UserTypeModel {
    constructor(id, type) {
      this.id = id;
      this.type = type;
    }
  }
export const getTypeNameById = (id) => {
  // eslint-disable-next-line eqeqeq
  const index = (userType || []).findIndex(i => i.id == id);
  return index !== -1 ? userType[index].type : '';
}