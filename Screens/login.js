import React, {Component} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {
  Container,
  Header,
  Text,
  Button,
  Input,
  Form,
  Label,
  Item,
  Footer,
  Content,
} from 'native-base';
class login extends Component {
  constructor(props) {
    super(props);
    // this.delay = this.delay.bind(this)
    this.state = {
      username: '',
      password: '',
      shouldDisplayUsername: false
    };
  }
  _login = () => {
    alert(this.state.username + ' ' + this.state.password);
  };

  delay(that){
  setTimeout(function() {
    that.setState({ shouldDisplayUsername: true })
  }, 1000);
  }
  render() {
    var { username, password, shouldDisplayUsername } = this.state;
    var shouldDisplayUsername = username && shouldDisplayUsername || false,
        shouldDisplayPassword = username && password || false
    return (
      <Container>
        <Header>
          <Text>Login</Text>
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input
                onChangeText={username => {
                  this.setState({username: username})
                  this.delay(this)
                  }
                }
              />
            </Item>
            {/* {this.delay()} */}
            {shouldDisplayUsername ? (
              <Item floatingLabel>
                <Label>Password</Label>
                <Input
                  onChangeText={password => this.setState({password: password})}
                />
              </Item>
            ) : null}
            {shouldDisplayPassword ? (
              <Button block onPress={() => this._login()}>
                <Text>Login</Text>
              </Button>
            ) : null}
          </Form>
        </Content>

        <Footer />
      </Container>
    );
  }
}

export default login;
