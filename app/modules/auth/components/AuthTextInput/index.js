import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Input } from 'react-native-elements'
import { isEmpty } from '../../utils/validate'
import styles from "./styles"

class AuthTextInput extends Component {
  render() {
    const { placeholder, autoFocus, onChangeText, secureTextEntry, placeholderTextColor, keyboardType } = this.props;

    return (
      <Input
        autoCapitalize='none'
        clearButtonMode='while-editing'
        underlineColorAndroid={"#fff"}
        placeholder={placeholder}
        autoFocus={autoFocus}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        containerStyle={styles.containerStyle}
        inputStyle={styles.inputContainer}
        placeholderTextColor={placeholderTextColor}
        keyboardType={keyboardType}
        value={this.props.value}
        leftIcon={
          <Icon
            name='email'
            size={20}
            color='#024854'
          />
        }
      />
    );
  }
}

AuthTextInput.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  placeholder: PropTypes.string,
  autoFocus: PropTypes.bool,
  onChangeText: PropTypes.func.isRequired,
  secureTextEntry: PropTypes.bool,
  value: PropTypes.string,
  error: PropTypes.string,
}

AuthTextInput.defaultProps = {
  autoFocus: false,
  secureTextEntry: false,
  placeholderTextColor: "grey",
  keyboardType: "default"
}

export default AuthTextInput;