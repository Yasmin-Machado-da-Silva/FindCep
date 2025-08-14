import { View, StyleSheet, Text, ScrollView } from "react-native";


export const Card = () => {
    return (
        <View style={styles.card} showsVerticalScrollIndicator={false}>
      
            <View>
                <Text style={styles.tituloValor}>CEP</Text>
                <Text style={styles.valor}>Dado5</Text>
            </View>
            <View>
                <Text style={styles.tituloValor}>Logradouro:</Text>
                <Text style={styles.valor}>Dado5</Text>
            </View>
            <View>
                <Text style={styles.tituloValor}>Bairro:</Text>
                <Text style={styles.valor}>Dado5</Text>
            </View>
            <View>
                <Text style={styles.tituloValor}>UF:</Text>
                <Text style={styles.valor}>Dado5</Text>
            </View>
            <View>
                <Text style={styles.tituloValor}>Estado:</Text>
                <Text style={styles.valor}>Dado5</Text>
            </View>
            <View>
                <Text style={styles.tituloValor}>Regiao:</Text>
                <Text style={styles.valor}>Dado5</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '70%',
        minHeight: '60%',
        // height: '60%',
        padding: 20,
        //     height:300,
        //    shadowColor: '#000015'
        //    shadowOffset: {width: 0, height: 2},
        //    shadowOpacity: 0.5,
        //    shadowRadius: 2,
        //    elevation: 2,
        //    backgroundColor: 'red'
        boxShadow: " rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        borderRadius: 7,
        gap: 20,
    },
    tituloValor: {
        fontWeight: 600
    }

})