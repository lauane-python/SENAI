import React from "react";
import { View, Text, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
export default function SplashScreen() {
    const navigation = useNavigation();
    function finalizarAnimacao() {
        navigation.replace("HomeScreen");
    }
    return (
        <View
            style={{
                flex:1,
                justifyContent:"center",
                alignItems:"center",
                backgroundColor:"#804256"
            }}
        >
            <StatusBar
                backgroundColor="#804256"
                barStyle="light-content"
            />
            <LottieView
                source={require("../../assets/Animacao.json")}
                autoPlay
                loop={false}
                onAnimationFinish={finalizarAnimacao}
                style={{
                    width:280,
                    height:280
                }}
            />
            <Text
                style={{
                    fontSize:46,
                    color:"#f2e9e1",
                    fontFamily:"JosefinSans_700Bold",
                    letterSpacing:4,
                    marginTop:-25
                }}>
                TODOLIST
            </Text>
            <Text
                style={{
                    color:"#db9a8f",
                    fontSize:18,
                    marginTop:12,
                    fontFamily:"JosefinSans_400Regular"
                }}>
                organize sua rotina
            </Text>
        </View>
    );
}