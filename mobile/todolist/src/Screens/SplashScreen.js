import { useNavigation } from "@react-navigation/native";
import { Dimensions, View } from "react-native";
import LottieView from "lottie-react-native";
import Styles from "../Styles/Styles";
const { width, height } = Dimensions.get("screen");
const SplashScreen = () => {
  const navigation = useNavigation();
  const animacacao = () => {
    navigation.navigate("LoginScreen");
  };
  return (
    <View style={Styles.containerS}>
      <LottieView
        source={require("../../assets/splash.json")}
        style={{ width: width * 1.2, height: height * 1.4 }}
        autoPlay
        loop={false}
        onAnimationFinish={animacacao}
      />
    </View>
  );
};
export default SplashScreen;