import React, { Component } from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Aboutus from '../screen/About/index';
import Main from '../screen/Home/index';
import Signin from '../screen/Signin/index';
import SignupData from '../screen/Data/signupdata';
import SigninData from '../screen/Data/signindata';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../screen/Data/style';

const Stack = createNativeStackNavigator();

class Router extends Component {
    render() {
        return (
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Main"
                options={{headerShown: false}}
                component={Main}
              />
              <Stack.Screen
                name="Signin"
                options={{headerShown: false}}
                component={Signin}
              />
              <Stack.Screen
                name="Aboutus"
                options={{title: 'About Us'}}
                component={Aboutus}
              />
              <Stack.Screen
                name="signupdata"
                options={({navigation, route}) => ({
                  title: 'Sign Up Data',
                  headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.push('Main')}>
                      <Icon style={styles.logo} name="angle-left" size={30} />
                    </TouchableOpacity>
                  ),
                })}
                component={SignupData}
              />
              <Stack.Screen
                name="signindata"
                options={({navigation, route}) => ({
                  title: 'Sign In Data',
                  headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.push('Signin')}>
                      <Icon style={styles.logo} name="angle-left" size={30} />
                    </TouchableOpacity>
                  ),
                })}
                component={SigninData}
              />
            </Stack.Navigator>
          </NavigationContainer>
        );
    }
}


export default Router;
