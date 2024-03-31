import { SafeAreaView } from "react-native"
import { HelloworldScreen } from "./src/presentation/screens/HelloworldScreen"
import { CounterScreen } from "./src/presentation/screens/CounterScreen"
import { PaperProvider } from "react-native-paper"


export const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={{flex:1}}>
        <CounterScreen/>
      </SafeAreaView>
    </PaperProvider>
    
  )
}
