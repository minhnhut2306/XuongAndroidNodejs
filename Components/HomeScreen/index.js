import { View, Text,ScrollView, Image } from 'react-native'
import React from 'react'
import styles from './style'

const index = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
         {/* code tai đây */}
       
      </ScrollView>
      <Image style={styles.bottomBar}
          source={require('./../../Image/bottombar.png')}
          >
      </Image>
    </View>
  )
}

export default index 