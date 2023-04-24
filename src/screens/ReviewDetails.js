import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global'


const ReviewDetails = ({route, navigation}) => {
  return (
    <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>{route.params.title}</Text>
        <Text style={globalStyles.titleText}>{route.params.body}</Text>
        <Text style={globalStyles.titleText}>{route.params.rating}</Text>

    </View>
  )
}

export default ReviewDetails

const styles = StyleSheet.create({})