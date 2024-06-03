// eslint-disable-next-line no-unused-vars
import React from "react";
import Article1 from "@/assets/article/article-1.jpg";
import Article2 from "@/assets/article/article-2.jpg";
import Article3 from "@/assets/article/article-3.jpg";

const generateUniqueId = () => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

export const articles = [
  {
    id: generateUniqueId(),
    title:
      "4 Tantangan Fresh Graduate dalam Menyusun Resume, Pakai Cara Ini Biar Cepat Dapat Kerja",
    body: "<div>Setiap orang punya pekerjaan atau karir impian. Namun, untuk bisa mendapatkannya, semua diawali dari membuat resume lalu mencari lowongan kerja (loker). Dua tahapan ini menjadi kesulitan tersendiri bagi sebagian orang, termasuk fresh graduate. Banyak orang hanya membuat resume sekenanya sehingga tidak heran apabila pekerjaan idaman tak kunjung bisa didapatkan.<br/><p>dfasf</p>",
    image: Article1,
  },
  {
    id: generateUniqueId(),
    title: "Latar Belakang Pendidikan Konsultan Marketing",
    body: "Latar belakang pendidikan yang ideal untuk menjadi Konsultan Marketing adalah pendidikan formal di bidang marketing atau bidang terkait. Beberapa pilihan jurusan yang relevan antara lain: S1 Marketing, S1 Manajemen Bisnis, S1 Ilmu Komunikasi, S1 Ekonomi.",
    image: Article2,
  },
  {
    id: generateUniqueId(),
    title: "Skill yang Harus Dimiliki Konsultan Marketing",
    body: "Keahlian yang diperlukan sebagai konsultan marketing mencakup: pengetahuan tentang marketing, kemampuan analitis, keterampilan komunikasi, kreativitas, kemampuan memecahkan masalah, kemampuan interpersonal.",
    image: Article3,
  },
  {
    id: generateUniqueId(),
    title: "Jenjang Karier Konsultan Marketing",
    body: "Konsultan Marketing merupakan profesi yang dinamis dan penuh peluang di era digital ini. Profesi ini menawarkan jenjang karir yang menarik bagi para profesional yang ingin berkembang dan memberikan kontribusi dalam dunia marketing.",
    image: Article2,
  },
  {
    id: generateUniqueId(),
    title: "Kisaran Gaji Konsultan Marketing",
    body: "Gaji Konsultan Marketing di Indonesia berkisar di Rp 4.000.000 – Rp 6.000.000 per bulan untuk level junior, sedangkan yang sudah berpengalaman bisa di angka Rp 10.000.000 – Rp 15.000.000 per bulan. Keahlian khusus seperti marketing digital, SEO, atau content marketing dapat meningkatkan gaji Anda.",
    image: Article1,
  },
  {
    id: generateUniqueId(),
    title: "Profesi yang Masih Relevan dengan Konsultan Marketing",
    body: "Profesi yang masih relevan dengan Konsultan Marketing antara lain: Digital Marketing Specialist, Content Marketing Specialist, Social Media Specialist, SEO Specialist, dan Public Relations (PR) Specialist.",
    image: Article3,
  },
  {
    id: generateUniqueId(),
    title: "Skill yang Harus Dimiliki Konsultan Marketing",
    body: "Keahlian yang diperlukan sebagai konsultan marketing mencakup: pengetahuan tentang marketing, kemampuan analitis, keterampilan komunikasi, kreativitas, kemampuan memecahkan masalah, kemampuan interpersonal.",
    image: Article3,
  },
  {
    id: generateUniqueId(),
    title: "Profesi yang Masih Relevan dengan Konsultan Marketing",
    body: "Profesi yang masih relevan dengan Konsultan Marketing antara lain: Digital Marketing Specialist, Content Marketing Specialist, Social Media Specialist, SEO Specialist, dan Public Relations (PR) Specialist.",
    image: Article3,
  },
  {
    id: generateUniqueId(),
    title: "Latar Belakang Pendidikan Konsultan Marketing",
    body: "Latar belakang pendidikan yang ideal untuk menjadi Konsultan Marketing adalah pendidikan formal di bidang marketing atau bidang terkait. Beberapa pilihan jurusan yang relevan antara lain: S1 Marketing, S1 Manajemen Bisnis, S1 Ilmu Komunikasi, S1 Ekonomi.",
    image: Article2,
  },
  {
    id: generateUniqueId(),
    title: "Profesi yang Masih Relevan dengan Konsultan Marketing",
    body: "Profesi yang masih relevan dengan Konsultan Marketing antara lain: Digital Marketing Specialist, Content Marketing Specialist, Social Media Specialist, SEO Specialist, dan Public Relations (PR) Specialist.",
    image: Article2,
  },
];
