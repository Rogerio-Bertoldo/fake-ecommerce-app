import * as React from 'react'
import { View, StyleSheet } from 'react-native'

export const Header = () => {

    return <View style={styles.container}></View>
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        width: '100%',
        backgroundColor: 'purple'
    }
})