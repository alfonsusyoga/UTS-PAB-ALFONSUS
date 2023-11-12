import { Heading, Image, Text, FlatList, Form, Item, Input, Stack, Button, ScrollView, Box, FormControl, View } from "native-base";
import { Header } from "../components";

const Video = () => {
  return (
    <>
      <Header title={"Yoga"} />
      <ScrollView>
        <Heading fontSize={"20"} mx={"auto"} pb={"4"} pt={"7"}>Form Pendaftaran</Heading>
        <FormControl>
          <Box bg={"white"} w={"330"} h={"565"} mx={"auto"} boxShadow={"10"} shadow={"6"} borderRadius={"20"} mb={"6"} >
            <Heading mt={"5"} ml={"5"} fontSize={"18"}>Nama</Heading>
            <Box w="90%" mx={"auto"} pt={"3"}>
              <Input mx="auto" placeholder="Masukkan Nama" borderRadius={"10"} w="100%" />
            </Box>
            <Heading mt={"5"} ml={"5"} fontSize={"18"}>NIM</Heading>
            <Box w="90%" mx={"auto"} pt={"3"}>
              <Input mx="auto" placeholder="Masukkan NIM" borderRadius={"10"} w="100%" />
            </Box>
            <Heading mt={"5"} ml={"5"} fontSize={"18"}>Email</Heading>
            <Box w="90%" mx={"auto"} pt={"3"}>
              <Input mx="auto" placeholder="Masukkan Alamat Email" borderRadius={"10"} w="100%" />
            </Box>
            <Heading mt={"5"} ml={"5"} fontSize={"18"}>No. Telp</Heading>
            <Box w="90%" mx={"auto"} pt={"3"}>
              <Input mx="auto" placeholder="Masukkan No. Telp" borderRadius={"10"} w="100%" />
            </Box>
            <Heading mt={"5"} ml={"5"} fontSize={"18"}>Input CV</Heading>
              <Button w={"90%"} mt={"3"} mx={"auto"} bg={"#FF003D"} borderRadius={"10"} p={"2"}>Input CV</Button>
              <Button w={"20%"} mt={"3"} mx={"auto"} bg={"#32CD32"} borderRadius={"10"} p={"2"}>Kirim</Button>
          </Box>
        </FormControl>
      </ScrollView>
    </>
  );
};

export default Video;