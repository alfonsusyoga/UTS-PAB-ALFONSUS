import { Heading, Center, Text, Image, ScrollView, Box, Button } from "native-base";
import { Header } from "../components";
import Ionicons from "@expo/vector-icons/Ionicons";

const Save = () => {
  return (
      <>
          <Header title={"Yoga"} />
          <ScrollView>
          <Heading fontSize={"20"} mx={"auto"} pb={"4"}>Disimpan</Heading>
          <Box bg={"white"} w={"330"} h={"250"} mx={"auto"} boxShadow={"10"} shadow={"6"} borderRadius={"20"} mb={"2"} >
              <Heading mt={"5"} ml={"5"} fontSize={"18"} pb={"3"}>Perusahaan 1</Heading>
              <Box w="85%" mx={"auto"} pt={"3"} borderRadius={"20"} borderColor={"black"} borderWidth={"2"} h={"160"} p={"5"}>
              <Image source={require("../assets/unilever.jpg")} alt="photo" w={"300"} h={'130'} mx={"auto"} px={"16"} py={"4"} borderRadius={"20"}/>
              </Box>
          </Box>
          <Box bg={"white"} w={"330"} h={"250"} mx={"auto"} boxShadow={"10"} shadow={"6"} borderRadius={"20"} mb={"2"} >
              <Heading mt={"5"} ml={"5"} fontSize={"18"} pb={"3"}>Perusahaan 2</Heading>
              <Box w="85%" mx={"auto"} pt={"3"} borderRadius={"20"} borderColor={"black"} borderWidth={"2"} h={"160"} p={"5"}>
              <Image source={require("../assets/ikea.jpg")} alt="photo" w={"300"} h={'130'} mx={"auto"} px={"16"} py={"4"} borderRadius={"20"}/>
              </Box>
          </Box>
          <Box bg={"white"} w={"330"} h={"250"} mx={"auto"} boxShadow={"10"} shadow={"6"} borderRadius={"20"} mb={"9"} >
              <Heading mt={"5"} ml={"5"} fontSize={"18"} pb={"3"}>Perusahaan 3</Heading>
              <Box w="85%" mx={"auto"} pt={"3"} borderRadius={"20"} borderColor={"black"} borderWidth={"2"} h={"160"} p={"5"}>
              <Image source={require("../assets/perta.jpg")} alt="photo" w={"300"} h={'130'} mx={"auto"} px={"16"} py={"4"} borderRadius={"20"}/>
              </Box>
          </Box>
          </ScrollView>
      </>
  );
};


export default Save;