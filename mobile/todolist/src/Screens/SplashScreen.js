import React from "react";
import { View, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";

const { width, height } = Dimensions.get("screen");

export default function SplashScreen() {
    const navigation = useNavigation();

    function finalizarAnimacao() {
        navigation.replace("HomeScreen");
    }

    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ffffff"
        }}>
            <LottieView
                source={require("../../assets/Animacao.json")}
                style={{
                    width: width * 0.8,
                    height: height * 0.5
                }}
                autoPlay
                loop={false}
                onAnimationFinish={finalizarAnimacao}
            />
        </View>
    );
}