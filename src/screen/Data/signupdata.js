import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

class SignupData extends Component {
  render() {
    const {name, email, phone} = this.props.route.params;
    return (
      <View style={styles.container}>
        <Icon
          // style={styles.logo}
          // name="angle-left"
          // size={30}
          onPress={() => {
            this.props.navigation.push('Main');
          }}
        />
        <Text style={styles.aboutText}>
          name: {name}
          {'\n\n'}
          email: {email}
          {'\n\n'}
          phone: {phone}
        </Text>
      </View>
    );
  }
}

export default SignupData;
