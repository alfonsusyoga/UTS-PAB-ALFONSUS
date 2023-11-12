import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { Box, HStack, Image, Heading, Text, Button } from "native-base";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Header = ({ title, withBack = false }) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <StatusBar barStyle="light" />
      <Box p={"4"}>
        <HStack justifyContent="space-between" alignItems="center">
        <>
          <Text fontSize={"lg"} fontWeight={"bold"} color={"black"}>Hallo {title}!</Text>
        </>
          <HStack alignItems="center">
            {!withBack ? (
              <>
                <Box mr={"3"}>
                  <Ionicons name="notifications-outline" size={20} color="black" />
                </Box>
                <Box mr={"3"}>
                  <Button onPress={() =>
                    navigation.navigate("Save")
                    } bg={"transparent"}>
                  <Ionicons name="bookmark-outline" size={20} color="black" />
                  </Button>
                </Box>

                <Image
                  source={require("../assets/super.jpeg")}
                  w="12"
                  h="12"
                  alt="Profil Logo"
                  mr={"3"}
                  borderRadius={"full"}
                />
              </>
            ) : (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.goBack()}
              >
                <Box mr={"3"} bg={"muted.600"} borderRadius={"lg"}>
                  <Ionicons name="chevron-back-outline" size={32} color="white" />
                </Box>
              </TouchableOpacity>
            )}
          </HStack>
        </HStack>
      </Box>
    </SafeAreaView>
  );
};

export default Header;
