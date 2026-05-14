import {View, StyleSheet, Text, TouchableOpacity} from "react-native"
const Botao = ({cor, texto, acao, tamFonte})=>{
    return(
        <TouchableOpacity onPress={acao} style={[meuCss.botao, {backgroundColor:cor}]}>
        <Text style={{fontSize:tamFonte}}>{texto}</Text>
        </TouchableOpacity>
    )
}
const meuCss = StyleSheet.create({
    botao:{
        padding:20,
        width:170,
        alignItems:"center",
        borderRadius:20
    }
})

export{Botao}