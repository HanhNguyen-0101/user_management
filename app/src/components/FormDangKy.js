import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "./styleComponents/components/Table";
import { Form } from "./styleComponents/components/Form";
import {
  SuccessButton,
  PrimaryButton,
} from "./styleComponents/components/Button";
import { userType } from "../reducers/ManageUserReducer";

class FormDangKy extends Component {
  renderUserType = () => {
    return (userType || []).map((userType, index) => {
      return (
        <option key={index} value={userType.id}>
          {userType.type}
        </option>
      );
    });
  };
  render() {
    const { errors, values, handleSubmit, changeValue } = this.props;
    const { account, fullName, password, email, phone, userType } = values;
    return (
      <Table className="w-100">
        <Thead>
          <Tr>
            <Th>Register Form</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <Form>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputAccount">Account</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAccount"
                      name="account"
                      value={account}
                      onChange={(e) => changeValue(e)}
                    />
                    <span className="text-danger" style={{ fontSize: 13 }}>
                      {errors.account}
                    </span>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputFullName">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputFullName"
                      name="fullName"
                      value={fullName}
                      onChange={(e) => changeValue(e)}
                    />
                    <span className="text-danger" style={{ fontSize: 13 }}>
                      {errors.fullName}
                    </span>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword4"
                      name="password"
                      value={password}
                      onChange={(e) => changeValue(e)}
                    />
                    <span className="text-danger" style={{ fontSize: 13 }}>
                      {errors.password}
                    </span>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputPhoneNumber">Phone number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputPhoneNumber"
                      name="phone"
                      value={phone}
                      onChange={(e) => changeValue(e)}
                    />
                    <span className="text-danger" style={{ fontSize: 13 }}>
                      {errors.phone}
                    </span>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      name="email"
                      value={email}
                      onChange={(e) => changeValue(e)}
                    />
                    <span className="text-danger" style={{ fontSize: 13 }}>
                      {errors.email}
                    </span>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputUserType">User type</label>
                    <select
                      id="inputUserType"
                      value={userType}
                      className="form-control"
                      name="userType"
                      onChange={(e) => changeValue(e)}
                    >
                      {this.renderUserType()}
                    </select>
                  </div>
                </div>
                <SuccessButton
                  disabled={this.props.disabled}
                  type="button"
                  onClick={(e) => handleSubmit(e, true)}
                  className="btn btn-success mr-2"
                >
                  Register
                </SuccessButton>
                <PrimaryButton
                  disabled={!this.props.disabled}
                  type="button"
                  onClick={(e) => handleSubmit(e, false)}
                  className="btn btn-primary"
                >
                  Update
                </PrimaryButton>
              </Form>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    );
  }
}
const mapStateToProps = (state) => ({
  disabled: state.ManageUserReducer.disabled,
});
export default connect(mapStateToProps)(FormDangKy);
