import { View, Text, StatusBar, Image } from 'react-native'
import React from 'react'
import styles from './styles'
const Cart = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="rgba(255, 255, 255, 0)"
        translucent={true}
      />
      <View style={styles.header}>
        <Text style={styles.textCart}>My Cart</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.Line}>

        </View>
        <View style={styles.item}>
          <Image
            style={styles.imageItem}
            source={require('../../../../assets/Image/cachua.png')} />
            <Text style={styles.nameItem}>Bell Pepper Red</Text>
            <Text style={styles.amoutItem}>1kg, Pice</Text>
            <Image
            style={styles.deleteItem}
            source={require('../../../../assets/Image/delete.png')} />
        </View>
        <View style={styles.item}>
          <Image
            style={styles.imageItem}
            source={require('../../../../assets/Image/cachua.png')} />
        </View>
      </View>
    </View>
  )
}

export default Cart