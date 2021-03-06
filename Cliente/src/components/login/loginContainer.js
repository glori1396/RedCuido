import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { Form, Icon, Input, Button, Row, Layout  } from 'antd';

import * as Mensajes from '../../assets/mensajes'
import logo from '../../images/logo.png'
import '../../style/login.css'
import * as exampleActions from './loginActions'

const FormItem = Form.Item;

class loginContainer extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Layout  className="formContainer">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem className="logo">
            <img alt="logo" src={logo} />
            <span>Red de Cuido C.R.</span>
          </FormItem>
          <FormItem>
            {getFieldDecorator('Usuario', {
              rules: [{ required: true, message: Mensajes.requerido }],
            })(
              <Input prefix={<Icon type="user" style={{ color: '#007A3B' }} />} placeholder="Usuario" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('Contraseña', {
              rules: [{ required: true, message: Mensajes.requerido }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: '#007A3B' }} />} type="password" placeholder="Contraseña" />
            )}
          </FormItem>
          <Row>
            <Button type="primary"  htmlType="submit" className="login-form-button">
                Ingresar
            </Button>
          </Row>
            
        </Form>
      </Layout >
    );
  }
}

loginContainer.propTypes = {
  ExampleFunction: PropTypes.func
}

loginContainer.defaultProps = {
  ExampleFunction: () => {}
}

function mapStateToProps(state) {
  return {
    ExapleofData: state.loginReducer.exampleReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    ExampleFunction: ()  => dispatch(exampleActions.ExampleFunction())
  }
}

const WrappedloginContainer = Form.create()(loginContainer);
export default connect(mapStateToProps,mapDispatchToProps)(WrappedloginContainer)