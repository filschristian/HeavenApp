import { StyleSheet } from 'react-native';

import { theme } from "../../index"
const { windowWidth, fontSize, fontFamily, normalize, color } = theme;

const styles = StyleSheet.create({
  containerStyle: {
    marginBottom: 20,
    marginTop: 20,
  },

  inputContainer: {
    width: windowWidth - 40,
    height: normalize(30),
    fontSize: fontSize.small,
    fontFamily: fontFamily.regular,
    color: color.primary
  }
});

export default styles;