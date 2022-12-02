import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import FormDangKy from './components/FormDangKy';
import TableDanhSachNguoiDung from './components/TableDanhSachNguoiDung';
import { Container } from './components/styleComponents/components/Container';
import { Dropdown } from './components/styleComponents/components/Dropdown';
import { changeThemeAction, editUserAction, registerUserAction, updateUserAction } from './actions/ManageUsersAction';
import { ThemeList } from './components/styleComponents/theme/ManageTheme';
import { UserModel } from './models/UserModel';

class BaiTapQuanLyNguoiDung extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        account: "",
        fullName: "",
        password: "",
        email: "",
        phone: "",
        userType: 1,
      },
      errors: {
        account: "",
        fullName: "",
        password: "",
        email: "",
        phone: "",
        userType: "",
      },
    };
  }
  changeValue = (e) => {
    const { name, value, type } = e.target;
    const values = { ...this.state.values, [name]: value };
    const errors = { ...this.state.errors };
    if (value === "") {
      errors[name] = "The field is required";
    } else {
      errors[name] = "";
    }
    if (type === "email") {
      let emailRegex =
        // eslint-disable-next-line no-useless-escape
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!emailRegex.test(value)) {
        errors[name] = "Email is invalid";
      } else {
        errors[name] = "";
      }
    }
    if (type === "phone") {
      let phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(value)) {
        errors[name] = "Phone number is invalid";
      } else {
        errors[name] = "";
      }
    }
    if (type === "password") {
      let passwordRegex =
        // eslint-disable-next-line no-useless-escape
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
      if (!passwordRegex.test(value)) {
        errors[name] = "Password is invalid";
      } else {
        errors[name] = "";
      }
    }
    this.setState({
      values,
      errors,
    });
  };
  handleClearErrors = (e, user) => {
    e.preventDefault();
    const { values, errors } = this.state;
    const newErrors = { ...errors };
    for (let key in values) {
      if (errors[key] !== "") {
        newErrors[key] = "";
      }
    }
    this.setState({
        errors: newErrors,
      },
      () => {
        this.props.dispatch(editUserAction(user));
      }
    );
  };
  handleSubmit = (e, status) => {
    e.preventDefault();
    const { values, errors } = this.state;
    let valid = true;
    const newErrors = { ...errors };
    for (let key in values) {
      if (values[key] === "") {
        newErrors[key] = "The field is required";
        valid = false;
      }
    }
    for (let key in errors) {
      if (errors[key] !== "") {
        valid = false;
      }
    }
    this.setState(
      {
        errors: newErrors,
      },
      () => {
        if (valid) {
          const { account, fullName, password, email, phone, userType } =
            this.state.values;
            if (status) { // True: register ; False: update
              this.props.dispatch(registerUserAction(new UserModel(Date.now(), account, fullName, password, email, phone, userType)));
            } else {
              const {userActive} = this.props;
              this.props.dispatch(updateUserAction(new UserModel(userActive.id, account, fullName, password, email, phone, userType)));
            }
        }
      }
    );
  };

  renderTheme = () => {
    return (ThemeList || []).map((theme, index) => {
      return (
        <option key={index} value={theme.id}>
          {theme.name}
        </option>
      );
    });
  };
  render() {
    const { theme } = this.props;
    const {values, errors} = this.state;
    return (
      <ThemeProvider theme={theme.theme}>
        <Container style={{ maxWidth: "calc(100% - 80px)" }}>
          <h4>User Management</h4>
          <Dropdown
            onChange={(e) =>
              this.props.dispatch(changeThemeAction(e.target.value))
            }
            className="m-1 float-right"
          >
            {this.renderTheme()}
          </Dropdown>
          <FormDangKy values={values} errors={errors} handleSubmit={this.handleSubmit} changeValue={this.changeValue}/>
          <TableDanhSachNguoiDung  handleClearErrors={this.handleClearErrors}/>
        </Container>
      </ThemeProvider>
    );
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.userActive.id !== this.props.userActive.id){
      const {id, account, fullName, password, email, phone, userType} = this.props.userActive;
      this.setState({
        values: new UserModel(id, account, fullName, password, email, phone, userType)
      })
    }
  }
}
const mapStateToProps = state => ({
  userActive: state.ManageUserReducer.userActive,
  theme: state.ManageUserReducer.theme,
})
export default connect(mapStateToProps)(BaiTapQuanLyNguoiDung)