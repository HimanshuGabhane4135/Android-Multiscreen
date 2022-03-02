import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer} from '@react-navigation/native';

class Aboutus extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon
          // style={styles.logo}
          // name="angle-left"
          // size={30}
          onPress={() => {
            this.props.navigation.goBack();
          }}
        />
        <Text style={styles.aboutText}>
          These Terms make up the entire agreement between you and Facebook,
          Inc. regarding your use of our Services and this Website. They
          supersede any prior agreements. If any portion of these Terms is found
          to be unenforceable, the remaining portion will remain in full force
          and effect. If we fail to enforce any of these Terms, it will not be
          considered a waiver.
        </Text>
        <Text style={styles.aboutText}>
          Any amendment to or waiver of these Terms must be made in writing and
          signed by us. You will not transfer any of your rights or obligations
          under these Terms to anyone else without our consent. You agree that
          no joint venture, partnership, employment, or agency relationship
          exists between you and us as a result of these Terms or your access to
          and use of the Website or Services.
        </Text>
        <Text style={styles.aboutText}>
          These Terms do not confer any third-party beneficiary rights. All of
          our rights and obligations under these Terms are freely assignable by
          us in connection with a merger, acquisition, or sale of assets, or by
          operation of law or otherwise. We reserve all rights not expressly
          granted to you.
        </Text>
      </View>
    );
  }
}

export default Aboutus;
