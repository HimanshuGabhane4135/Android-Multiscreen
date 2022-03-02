import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

class SigninData extends Component {
  render() {
    const {email} = this.props.route.params;
    return (
      <View style={styles.container}>
        <Icon
          // style={styles.logo}
          // name="angle-left"
          // size={30}
          onPress={() => {
            this.props.navigation.push('Signin');
          }}
        />
        <Text style={styles.aboutText}>email: {email}</Text>
      </View>
    );
  }
}

export default SigninData;
