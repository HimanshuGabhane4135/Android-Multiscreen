import React, { Component } from 'react';
import {View, TextInput, Text} from 'react-native';
import style from './style';

class FloatingInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  

  render() {
    return (
      <View>
        <TextInput
          style={style.input}
          placeholder={this.props.title}
          placeholderTextColor="#ffffff"
          keyboardType={
            this.props.keyboardType ? this.props.keyboardType : 'default'
          }
          onChangeText={text =>
            this.props.handleChange(this.props.formKey, text)
          }
          {...this.props}
        />
        {this.props.error.length !== 0 ? <Text>{this.props.error}</Text> : <></> }
        
      </View>
    );
  }
}

export default FloatingInput;
