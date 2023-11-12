import { Text, Heading, Box, ScrollView} from "native-base";
import { Header } from "../components/";

const Faq = () => {
    return (
        <>
            <Header title={"Yoga"} />
            <ScrollView>
            <Heading fontSize={"20"} mx={"auto"} pb={"4"}>FAQ</Heading>
            <Box bg={"white"} w={"330"} h={"740"} mx={"auto"} boxShadow={"10"} shadow={"6"} borderRadius={"20"} mb={"9"} >
                <Heading mt={"5"} ml={"5"} fontSize={"18"} pb={"3"}>1. Bagaimana cara saya memulai mencari pekerjaan di aplikasi ini?</Heading>
                <Box bg={"aliceblue"} w="85%" mx={"auto"} pt={"3"} borderRadius={"20"} borderColor={"black"} borderWidth={"2"} h={"160"} p={"5"}>
                    <Text textAlign={"justify"}>Langkah pertama adalah membuat akun dengan mengisi informasi pribadi dan profesional Anda. Setelah itu, jelajahi berbagai lowongan pekerjaan yang sesuai dengan kualifikasi dan minat Anda.</Text>
                </Box>
                <Heading mt={"5"} ml={"5"} fontSize={"18"} pb={"3"}>2. Bagaimana cara melengkapi profil saya dengan baik?</Heading>
                <Box bg={"aliceblue"} w="85%" mx={"auto"} pt={"3"} borderRadius={"20"} borderColor={"black"} borderWidth={"2"} h={"160"} p={"5"}>
                    <Text textAlign={"justify"}>Pastikan untuk mengisi semua bagian yang diperlukan, termasuk riwayat pendidikan, pengalaman kerja, dan keterampilan. Unggah resume terbaru dan tambahkan detail yang relevan untuk membuat profil Anda menonjol.</Text>
                </Box>
                <Heading mt={"5"} ml={"5"} fontSize={"18"} pb={"3"}>3. Bagaimana cara mencari pekerjaan yang sesuai?</Heading>
                <Box bg={"aliceblue"} w="85%" mx={"auto"} pt={"3"} borderRadius={"20"} borderColor={"black"} borderWidth={"2"} h={"160"} p={"5"}>
                    <Text textAlign={"justify"}>Gunakan fitur pencarian dengan kata kunci yang relevan untuk pekerjaan yang Anda inginkan. Filter hasil pencarian berdasarkan lokasi, tingkat pendidikan, atau jenis industri untuk menyempurnakan hasilnya.</Text>
                </Box>
          </Box>
          </ScrollView>
        </>
    );
};

export default Faq