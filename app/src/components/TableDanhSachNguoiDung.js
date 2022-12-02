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
          <PrimaryButton type="button" onClick={(e) => handleClearErrors(e, user)} className="btn btn-primary mr-2">Chỉnh sửa</PrimaryButton>
          <DangerButton  type="button" onClick={() => this.props.dispatch(deleteUserAction(id))} className="btn btn-danger">Xóa</DangerButton>
        </Td>
      </Tr>
    })
  }
  render() {
    return (
      <Table>
        <Thead>
          <Tr>
            <Th colSpan={8}>Danh sách người dùng</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr className='head'>
            <Td>STT</Td>
            <Td>Tài khoản</Td>
            <Td>Họ tên</Td>
            <Td>Mật khẩu</Td>
            <Td>Email</Td>
            <Td>Số điện thoại</Td>
            <Td>Loại người dùng</Td>
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