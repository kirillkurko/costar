import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

class CompatibilityItem extends Component {

  render() {
    const { title, you, partner } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.content}>
          <View style={styles.contentLeft}> 
            <View style={styles.contentTxt}>
              <Text style={styles.subtitle}>You</Text>
              <View style={styles.numbers}>
                <Text style={styles.number}>{you}</Text>
                <Text style={styles.percent}>%</Text>
              </View>
            </View>
            <View style={styles.level}>
              <View style={{...styles.levelIndicator, height: 70 / 100 * you}}></View>
            </View>
          </View>
          <View style={styles.contentRight}>
            <View style={styles.contentTxt}>
              <Text style={styles.subtitle}>Partner</Text>
              <View style={styles.numbers}>
                <Text style={styles.number}>{partner}</Text>
                <Text style={styles.percent}>%</Text>
              </View>
            </View>
            <View style={styles.level}>
              <View style={{...styles.levelIndicator, height: 70 / 100 * partner}}></View>
            </View>
          </View>

        </View>
      </View>
    );
  }
}

export default CompatibilityItem;
