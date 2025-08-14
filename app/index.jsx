import axios from "axios";
import { useState } from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import { Botao } from '../components/botao/botao';
import { Card } from '../components/card/card';
import { Input } from '../components/input/input';

export default function Index() {

  const [cep, setCep] = useState("");
  const [jsonCep, setJsonCep] = useState({});

  const [visiTabela, setVisiTabela] = useState (false);

  async function consultarCep() {
    try {
      if (cep !== "" && cep.length === 8) {
        const resposta = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

        console.log(resposta.data);
        setVisiTabela(true)

        setJsonCep(resposta.data)

      }else{
        alert("O cep está incorreto digite com 8 digitos")
      }
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <>
      {/* 1. Logo + imagem de fundo */}
      <ImageBackground
        source={require("../assets/images/ImgFundo.png")}
        style={styles.imgFundo}>
        <Image source={require('../assets/images/LogoFindCEP.png')} style={styles.logo}></Image>

        {/* Aqui você pode colocar o conteúdo por cima da imagem */}
      </ImageBackground>

      {/* 2. Campo de consulta */}
      <ScrollView style={styles.containerScroll}>
        <View style={styles.container}>
          {/* 2.1. Titulo */}
          <Text style={styles.titulo}>Consulte seu CEP</Text>
          {/*  */}

          {/* 2.2 Input */}
          <Input
            valorCep={cep}
            onChangeValorCep={e => {setCep(e); console.log(e)}} />
          {/* 2.3 Botão */}
          <Botao tituloBotao='Consultar' onPress={consultarCep} />
          {/* 2.4 Card de informação */}

          {visiTabela && (

            <Card 
            cep ={jsonCep.cep} 
            logradouro ={jsonCep.logradouro} 
            bairro ={jsonCep.bairro} 
            uf ={jsonCep.uf} 
            estado ={jsonCep.estado} 
            regiao ={jsonCep.regiao} 
            />


          )}

        </View>
      </ScrollView>
    </>
  );
}

// Estilos dos meus componentes
const styles = StyleSheet.create({
  imgFundo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  logo: {
    width: 100,
    height: 120,
  },
  container: {
    gap: 40,
    width: "100%",
    minHeight: "100%",
    alignItems: 'center',
  },
  containerScroll: {
    flex: 1.5,
    paddingTop: 50,
    height: '100%',
    paddingBottom: 80,
  },

  titulo: {
    fontSize: 25,
    fontFamily: "Poppins-Bold",
    color: '#000000'
  }
});
