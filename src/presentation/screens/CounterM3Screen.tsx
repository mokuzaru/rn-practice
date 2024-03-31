import { useState } from "react"
import { Text, View } from "react-native"
import { globalStyles } from "../theme/global.styles"


export const CounterScreen = () => {

    const [count, setcount] = useState(10)


    return (
        <View style= { globalStyles.container }>
            <Text style= { globalStyles.title }>{count}</Text>
          
            
        </View>
    )
}


