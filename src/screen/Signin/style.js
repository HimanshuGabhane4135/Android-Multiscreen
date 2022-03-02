import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 20,
    backgroundColor: '#68b7f7',
  },

  header: {
    flex: 0.3,
    // backgroundColor: 'black',
    justifyContent: 'flex-end',
  },
  nav: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'SourceSerifPro-BlackItalic',
  },

  navigation: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 15,
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  head: {
    textAlign: 'center',
    justifyContent: 'flex-end',
    color: '#ffffff',
    fontSize: 30,
    // fontWeight: 'bold',
    fontFamily: 'SourceSerifPro-Black',
  },
  table: {
    flex: 0.6,
    // backgroundColor: 'blue',
  },
  loginbtn: {
    flexDirection: 'column',
  },
  forpass: {
    textAlign: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    fontFamily: 'SourceSerifPro-Regular',
    marginVertical: 15,
  },
  about: {
    justifyContent: 'center',
    textAlign: 'center',
    marginVertical: 10,
    color: '#ffffff',
    backgroundColor: '#68b7f7',
    padding: 10,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 20,
  },
  touch: {
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'SourceSerifPro-Regular',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default style;
