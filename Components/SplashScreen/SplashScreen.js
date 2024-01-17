import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style'

const index = () => {
  return (
    <View style={styles.container}>
     <Image
        style={styles.Logo}
        source={require('./../../Image/Logo.png')}
      />
    </View>
  )
}

export default index