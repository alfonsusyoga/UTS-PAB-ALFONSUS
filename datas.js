const content =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida, orci nec feugiat commodo, ipsum orci consequat nulla, non sodales sem lorem et ante. Etiam dignissim tempor elit, nec feugiat ante suscipit eget. Sed imperdiet diam at ultrices viverra. Duis malesuada mattis tortor, ac ultrices elit euismod.";

const datas = [
  {
    id: 1,
    date: "10 Oktober 2023",
    title:
      "Perusahaan 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    judul:
      "Posisi yang Tersedia",
    image:
      "https://i.pinimg.com/564x/e9/2d/10/e92d10628b620920e7297ca0ada8bbf4.jpg",
    content: content,
    posisi: "1. Manajer Umum = Bertanggung jawab atas operasi keseluruhan perusahaan. Memimpin tim manajerial, mengambil keputusan strategis, dan memastikan pencapaian tujuan perusahaan.\n2. Manajer Keuangan = Merencanakan, mengelola, dan mengawasi aspek keuangan perusahaan. Melibatkan pengelolaan anggaran, pelaporan keuangan, analisis keuangan, dan perencanaan keuangan jangka panjang.\n3. Spesialis Sumber Daya Manusia = Bertanggung jawab atas rekrutmen, seleksi, pelatihan, pengembangan, manajemen kinerja, dan kebijakan sumber daya manusia.\n4. Pengembang Perangkat Lunak = Membuat, menguji, dan memelihara perangkat lunak aplikasi dan sistem komputer. Terlibat dalam pemrograman dan pengembangan teknologi." ,
  },
  {
    id: 2,
    date: "10 Oktober 2023",
    title: "Perusahaan 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    judul:
      "Posisi yang Tersedia",
    image:
      "https://i.pinimg.com/564x/ae/f0/2c/aef02c606653e89a74126e2e62713ff1.jpg",
    content: content,
  },
  {
    id: 3,
    date: "10 Oktober 2023",
    title:
      "Perusahaan 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    judul:
      "Posisi yang Tersedia",
    image:
      "https://i.pinimg.com/564x/40/30/85/40308503cb8f39eb6375a683145849d7.jpg",
    content: content,
  },
  {
    id: 4,
    date: "10 Oktober 2023",
    title: "Perusahaan 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    judul:
      "Posisi yang Tersedia",
    image:
      "https://i.pinimg.com/564x/fa/65/24/fa6524650b4faa658121e2544e8eab7a.jpg",
    content: content,
  },
  {
    id: 5,
    date: "10 Oktober 2023",
    title:
      "Perusahaan 5 Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    judul:
      "Posisi yang Tersedia",
    image:
      "https://i.pinimg.com/564x/0e/ee/b7/0eeeb7616f45cb67ed49692761711b67.jpg",
    content: content,
  },
  {
    id: 6,
    date: "10 Oktober 2023",
    title:
      "Perusahaan 6 Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    judul:
      "Posisi yang Tersedia",
    image:
      "https://i.pinimg.com/564x/15/e1/8f/15e18fcf222ae2c3aa8153bdabe702b6.jpg",
    content: content,
  },
  {
    id: 7,
    date: "10 Oktober 2023",
    title: "Perusahaan 7 Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    judul:
      "Posisi yang Tersedia",
    image:
      "https://i.pinimg.com/564x/4d/18/97/4d1897aa98248a9429adc0cfb5c0a222.jpg",
    content: content,
  },
  {
    id: 8,
    date: "10 Oktober 2023",
    title:
      "Perusahaan 8 Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    judul:
      "Posisi yang Tersedia",
    image:
      "https://i.pinimg.com/564x/32/dd/08/32dd081c27ddb82bb3ead0c92dcf3bd1.jpg",
    content: content,
  },
  {
    id: 9,
    date: "10 Oktober 2023",
    title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
    judul:
      "Posisi yang Tersedia",
    image:
      "https://i.pinimg.com/564x/e9/2d/10/e92d10628b620920e7297ca0ada8bbf4.jpg",
    content: content,
  },
  {
    id: 10,
    date: "10 Oktober 2023",
    title:
      "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
    judul:
      "Posisi yang Tersedia",
    image:
      "https://i.pinimg.com/564x/ae/f0/2c/aef02c606653e89a74126e2e62713ff1.jpg",
    content: content,
  },
  {
    id: 11,
    date: "10 Oktober 2023",
    title:
      "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
    judul:
      "Posisi yang Tersedia",
    image:
      "https://i.pinimg.com/564x/40/30/85/40308503cb8f39eb6375a683145849d7.jpg",
    content: content,
  },
  {
    id: 12,
    date: "10 Oktober 2023",
    title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
    judul:
      "Posisi yang Tersedia",
    image:
      "https://i.pinimg.com/564x/0e/ee/b7/0eeeb7616f45cb67ed49692761711b67.jpg",
    content: content,
  },
  {
    id: 13,
    date: "10 Oktober 2023",
    title:
      "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
    judul:
      "Posisi yang Tersedia",
    image:
      "https://i.pinimg.com/564x/15/e1/8f/15e18fcf222ae2c3aa8153bdabe702b6.jpg",
    content: content,
  },
  {
    id: 14,
    date: "10 Oktober 2023",
    title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
    judul:
      "Posisi yang Tersedia",
    image:
      "https://i.pinimg.com/736x/0b/b9/5f/0bb95f784d86cf8fd6eb11ca90c481bf.jpg",
    content: content,
  },
  {
    id: 15,
    date: "10 Oktober 2023",
    title:
      "Izumi Ganteng",
    judul:
      "Posisi yang Tersedia",
    image:
      "https://i.pinimg.com/564x/71/e1/38/71e138d3cff350f128937614d7f61acd.jpg",
    content: content,
  },
  {
    id: 16,
    date: "10 Oktober 2023",
    title:
      "Juna Ganteng",
    judul:
      "Posisi yang Tersedia",
    image:
      "https://i.pinimg.com/564x/59/de/19/59de1968d0204aca5784849249510e9b.jpg",
    content: content,
  },
  {
    id: 17,
    date: "10 Oktober 2023",
    title: "Perusahaan 3",
    judul:
      "Posisi yang Tersedia",
    image:
      "https://i.pinimg.com/564x/8f/99/79/8f99797b1b61eec67ee2a47e38911863.jpg",
    content: content,
  },
];

export default datas;
