import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import FloatingInput from '../../Components/TextInput';
import validate from '../../utils/validation'

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        email: {value: '', error: ''},
        password: {value: '', error: ''},
      },
    };
  }

  handleChange = (key, value) => {
    this.setState({
      formData: {...this.state.formData, [key]: {value, error: ''}},
    });
  };

  handleSubmit = () => {
    const {email, password} = this.state.formData;
    if (email.value.length === 0) {
      this.setState({
        formData: {
          ...this.state.formData,
          email: {value: email.value, error: 'Please enter a email'},
        },
      });
    } else if (!validate(email.value)) {
      this.setState({
        formData: {
          ...this.state.formData,
          email: {value: email.value, error: 'Invalid Email'},
        },
      });
    } else if (password.value.length === 0) {
      this.setState({
        formData: {
          ...this.state.formData,
          password: {value: password.value, error: 'Please enter a password'},
        },
      });
    } else {
      this.props.navigation.navigate('signindata', {
        email: email.value,
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <Icon style={styles.logo} name="angle-left" size={30} /> */}
        <View style={styles.header}>
          <Text style={styles.head}>H I M A N S H U</Text>
        </View>
        <View style={styles.navigation}>
          <Text
            style={styles.nav}
            onPress={() => this.props.navigation.navigate('Signin')}>
            Log In
          </Text>
          <Text
            style={styles.nav}
            onPress={() => this.props.navigation.navigate('Main')}>
            Sign Up
          </Text>
        </View>
        <View style={styles.table}>
          <FloatingInput
            title="Email"
            value={this.state.formData.email.value}
            formKey="email"
            handleChange={this.handleChange}
            error={this.state.formData.email.error}
          />
          <FloatingInput
            title="Password"
            secureTextEntry={true}
            value={this.state.formData.password.value}
            formKey="password"
            handleChange={this.handleChange}
            error={this.state.formData.password.error}
            iconName="eye"
          />
          <View style={styles.loginbtn}>
            <Text style={styles.forpass}>Forgot your password ?</Text>
            <TouchableOpacity style={styles.about} onPress={() => this.handleSubmit()}>
              <Text style={styles.touch}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Signin;
