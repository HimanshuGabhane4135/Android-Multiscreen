import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import FloatingInput from '../../Components/TextInput';
import validate from '../../utils/validation';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: {value: '', error: ''},
        email: {value: '', error: ''},
        phone: {value: '', error: ''},
        password: {value: '', error: ''},
        confirmPassword: {value: '', error: ''},
      },
    };
  }

  handleChange = (key, value) => {
    this.setState({
      formData: {...this.state.formData, [key]: {value, error: ''}},
    });
  };

  handleSubmit = () => {
    const {name, email, phone, password, confirmPassword} = this.state.formData;
    if (name.value.length === 0) {
      this.setState({
        formData: {
          ...this.state.formData,
          name: {value: name.value, error: 'Please enter a name'},
        },
      });
    } else if (email.value.length === 0) {
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
    } else if (phone.value.length === 0) {
      this.setState({
        formData: {
          ...this.state.formData,
          phone: {value: phone.value, error: 'Please enter a phone number'},
        },
      });
    } else if (phone.value.length !== 10) {
      this.setState({
        formData: {
          ...this.state.formData,
          phone: {
            value: phone.value,
            error: 'Phone number must contains 10 digits Only',
          },
        },
      });
    } else if (password.value.length === 0) {
      this.setState({
        formData: {
          ...this.state.formData,
          password: {value: password.value, error: 'Please enter a password'},
        },
      });
    } else if (confirmPassword.value.length === 0) {
      this.setState({
        formData: {
          ...this.state.formData,
          confirmPassword: {
            value: confirmPassword.value,
            error: 'Please enter a confirm password',
          },
        },
      });
    } else if (password.value !== confirmPassword.value) {
      this.setState({
        formData: {
          ...this.state.formData,
          confirmPassword: {
            value: confirmPassword.value,
            error: 'password and confirm password do not match',
          },
        },
      });
    } else {
      this.props.navigation.navigate('signupdata', {
        name: name.value,
        email: email.value,
        phone: phone.value,
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
            title="Name"
            iconName="person"
            value={this.state.formData.name.value}
            formKey="name"
            handleChange={this.handleChange}
            error={this.state.formData.name.error}
          />
          <FloatingInput
            title="Email"
            value={this.state.formData.email.value}
            formKey="email"
            handleChange={this.handleChange}
            error={this.state.formData.email.error}
          />
          <FloatingInput
            title="Phone Number"
            keyboardType="numeric"
            value={this.state.formData.phone.value}
            formKey="phone"
            handleChange={this.handleChange}
            error={this.state.formData.phone.error}
          />
          <FloatingInput
            title="Password"
            secureTextEntry={true}
            value={this.state.formData.password.value}
            formKey="password"
            handleChange={this.handleChange}
            error={this.state.formData.password.error}
          />
          <FloatingInput
            title="Confirm Password"
            secureTextEntry={true}
            value={this.state.formData.confirmPassword.value}
            formKey="confirmPassword"
            handleChange={this.handleChange}
            error={this.state.formData.confirmPassword.error}
          />
          <View style={styles.btn}>
            <TouchableOpacity
              style={styles.about}
              onPress={() => this.props.navigation.navigate('Aboutus')}>
              <Text style={styles.touch}>About Us</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.about}
              onPress={() => this.handleSubmit()}>
              <Text style={styles.touch}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Main;
