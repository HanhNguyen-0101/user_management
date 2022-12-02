import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DangerButton, PrimaryButton } from './styleComponents/components/Button'
import { Table, Tr, Th, Td, Thead, Tbody } from './styleComponents/components/Table'
import {getTypeNameById} from './../models/UserTypeModel'
import { deleteUserAction } from '../actions/ManageUsersAction';

class TableDanhSachNguoiDung extends Component {
  renderUsers = () => {
    const {handleClearErrors} = this.props;
    return (this.props.userList || []).map((user, index) => {
      const {id, account, fullName, password, email, phone, userType} = user;
      return <Tr key={index}>
        <Td>{index + 1}</Td>
        <Td>{account}</Td>
        <Td>{fullName}</Td>
        <Td>{password}</Td>
        <Td>{email}</Td>
        <Td>{phone}</Td>
        <Td>{getTypeNameById(userType)}</Td>
        <Td>
          <PrimaryButton type="button" onClick={(e) => handleClearErrors(e, user)} className="btn btn-primary mr-2">Edit</PrimaryButton>
          <DangerButton  type="button" onClick={() => this.props.dispatch(deleteUserAction(id))} className="btn btn-danger">Remove</DangerButton>
        </Td>
      </Tr>
    })
  }
  render() {
    return (
      <Table>
        <Thead>
          <Tr>
            <Th colSpan={8}>Account List</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr className='head'>
            <Td>ID</Td>
            <Td>Account</Td>
            <Td>Username</Td>
            <Td>Password</Td>
            <Td>Email</Td>
            <Td>Phone number</Td>
            <Td>User type</Td>
            <Td></Td>
          </Tr>
          {this.renderUsers()}
        </Tbody>
      </Table>
    )
  }
}
const mapStateToProps = state => ({
  userList: state.ManageUserReducer.userList
})
export default connect(mapStateToProps)(TableDanhSachNguoiDung)