import React from 'react';

import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import TopHeader from './LoginHeader'

import db from "../../firebase"
import { collection, query, getDocs } from "firebase/firestore";
import { Navigate } from 'react-router-dom';


import LoginMsgToast from './LoginMsgToast'


class Login extends React.Component {

  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      authenticated: false,
      failed: false,
    };
  }

  componentDidMount() {
    const loggedIn = localStorage.getItem("authenticated");

    if (loggedIn === true) {
      this.setState({
        authenticated: true
      });
    }
  }


  loginUser = async () => {
    const first = query(
      collection(db, "users"),
    );
    const snapshot = await getDocs(first);
    var users = snapshot.docs.map(doc => doc.data());

    users.forEach(user => {

      if (this.state.email === user.email) {
        if (this.state.password === user.password) {

          localStorage.setItem("authenticated", true)

          this.setState({
            authenticated: true
          });

          return
        }
      }

      this.setState({
        password: "",
        failed: true
      });

    });
  }

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {

    if (this.state.authenticated) {
      return <Navigate to={'/'} />;
    }

    return (
      <div>
        <TopHeader />
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='green' textAlign='center'>
              Log in
            </Header>
            <Form size='large'>
              <Segment>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' onChange={this.updateInput} value={this.state.email} name="email" />
                <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' onChange={this.updateInput} value={this.state.password} name="password"
                />
                <Button color='green' fluid size='large' onClick={this.loginUser}>
                  Login
                </Button>
                <div style={{marginTop: '8px'}}>
                  Don't have a account yet? <a href='/signup'>Sign Up</a>
                </div>
              </Segment>
              {this.state.failed && <LoginMsgToast />}
            </Form>
          </Grid.Column>
        </Grid>
      </div>

    )
  }
}
export default Login