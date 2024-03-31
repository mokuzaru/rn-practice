import { useState } from "react"
import { Platform, StyleSheet, Text, View } from "react-native"
import { globalStyles } from "../theme/global.styles"
import { FAB } from "react-native-paper"

import Icon from 'react-native-vector-icons/Ionicons'

export const CounterM3Screen = () => {

    const [count, setcount] = useState(10)


    return (
        <View style= { globalStyles.centerContainer }>
            <Text style= { globalStyles.title }>{count}</Text>
          
            <Icon name="game-controller-outline" size={25}/>
            <FAB                 
                onPress={() => setcount(count+1)}
                onLongPress={(() => setcount(0))}
                style= {styles.fab}
                //icon={() => <Icon name="add-outline" size={25} />}
                icon="add"
            />
        </View>
    )
}

const styles = StyleSheet.create ({ 
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: Platform.OS === 'android' ? 15 : 0,
    }
})


