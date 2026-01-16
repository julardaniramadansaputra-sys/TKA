// ==========================================
// 1. PENGATURAN EMAIL (Wajib Diisi Guru)
// ==========================================
const FORMSPREE_URL = "MASUKKAN_LINK_FORMSPREE_DISINI"; 

// ==========================================
// 2. DATABASE 25 SOAL CERITA HOTS (PANGKAT & AKAR)
// ==========================================
const questions = [
    // --- LEVEL 1: KONSEP PERTUMBUHAN (PANGKAT) ---
    {
        topic: "Pertumbuhan Bakteri",
        question: "Sebuah bakteri membelah diri menjadi 2 setiap 15 menit. Jika mula-mula ada 1 bakteri, berapa banyak bakteri setelah 1 jam?",
        options: ["8", "16", "32", "64"],
        correct: 1,
        explanation: "1 jam = 60 menit. Membelah 4 kali (60:15). Rumus: 2 pangkat 4 = 16."
    },
    {
        topic: "Lipatan Kertas",
        question: "Selembar kertas tebalnya 0,1 mm. Jika dilipat menjadi dua bagian sebanyak 5 kali, berapa lapis kertas yang terbentuk?",
        options: ["10", "25", "32", "64"],
        correct: 2,
        explanation: "Lipatan ke-1 = 2 lapis. Lipatan ke-5 = 2 pangkat 5 = 32 lapis."
    },
    {
        topic: "Virus Komputer",
        question: "Sebuah virus komputer menulari 3 komputer setiap menit. Menit pertama 3, menit kedua 9 (3²), menit ketiga 27 (3³). Berapa komputer tertular pada menit ke-5?",
        options: ["81", "243", "125", "729"],
        correct: 1,
        explanation: "Pola bilangan pangkat 3. Menit ke-5 = 3 pangkat 5 = 243."
    },
    {
        topic: "Menabung",
        question: "Uang Budi menjadi 2 kali lipat setiap tahun. Jika tahun ini uangnya Rp 1 Juta (anggap 2 pangkat 0 juta), berapa uangnya 4 tahun lagi?",
        options: ["Rp 4 Juta", "Rp 8 Juta", "Rp 16 Juta", "Rp 32 Juta"],
        correct: 2,
        explanation: "4 tahun lagi = 2 pangkat 4 x 1 Juta = 16 Juta."
    },
    {
        topic: "Pohon Faktor",
        question: "Setiap dahan pohon bercabang menjadi 4 ranting baru. Jika ada 3 tahapan percabangan, berapa jumlah ranting di ujung paling akhir?",
        options: ["12", "64", "256", "81"],
        correct: 1,
        explanation: "4 pangkat 3 = 4 x 4 x 4 = 64."
    },

    // --- LEVEL 2: LUAS & KELILING (AKAR KUADRAT) ---
    {
        topic: "Kebun Persegi",
        question: "Pak Heru punya kebun berbentuk persegi dengan luas 144 m². Ia ingin memagari kebun tersebut. Berapa panjang pagar yang dibutuhkan?",
        options: ["12 m", "24 m", "36 m", "48 m"],
        correct: 3,
        explanation: "Sisi = akar(144) = 12m. Keliling (Pagar) = 4 x 12m = 48m."
    },
    {
        topic: "Ubin Lantai",
        question: "Lantai kamar mandi luasnya 4 m². Akan dipasang ubin persegi berukuran 20cm x 20cm. Berapa banyak ubin yang diperlukan?",
        options: ["100", "200", "400", "20"],
        correct: 0,
        explanation: "Luas lantai = 40.000 cm². Luas 1 ubin = 400 cm². Jumlah = 40.000 : 400 = 100 ubin."
    },
    {
        topic: "Taplak Meja",
        question: "Ibu menjahit taplak meja persegi seluas 2.500 cm². Di sekelilingnya akan dipasang renda. Panjang renda minimal adalah...",
        options: ["50 cm", "100 cm", "200 cm", "250 cm"],
        correct: 2,
        explanation: "Sisi = akar(2500) = 50 cm. Keliling = 4 x 50 = 200 cm."
    },
    {
        topic: "Lapangan Rumput",
        question: "Sebuah lapangan persegi luasnya 196 m². Jika Budi berlari mengelilingi lapangan sebanyak 2 putaran, berapa jarak tempuhnya?",
        options: ["56 m", "112 m", "28 m", "98 m"],
        correct: 1,
        explanation: "Sisi = akar(196) = 14m. Keliling = 14x4 = 56m. Dua putaran = 56 x 2 = 112m."
    },
    {
        topic: "Perbandingan Luas",
        question: "Persegi A luasnya 16 cm². Persegi B sisinya 3 kali sisi Persegi A. Berapa luas Persegi B?",
        options: ["48 cm²", "144 cm²", "36 cm²", "128 cm²"],
        correct: 1,
        explanation: "Sisi A = akar(16) = 4. Sisi B = 3x4 = 12. Luas B = 12 x 12 = 144."
    },

    // --- LEVEL 3: VOLUME & KUBUS (PANGKAT 3 & AKAR 3) ---
    {
        topic: "Bak Mandi",
        question: "Bak mandi berbentuk kubus mampu menampung 512 liter air hingga penuh. Berapa kedalaman (tinggi) bak mandi tersebut?",
        options: ["6 dm", "7 dm", "8 dm", "9 dm"],
        correct: 2,
        explanation: "512 liter = 512 dm³. Rusuk = akar pangkat 3 dari 512 = 8 dm."
    },
    {
        topic: "Kado Ulang Tahun",
        question: "Sebuah kotak kado kubus volumenya 3.375 cm³. Berapa panjang pita yang dibutuhkan untuk menghias sekeliling satu sisi tutupnya saja?",
        options: ["15 cm", "45 cm", "60 cm", "30 cm"],
        correct: 2,
        explanation: "Rusuk = akar3(3375) = 15 cm. Keliling tutup (persegi) = 4 x 15 = 60 cm."
    },
    {
        topic: "Rubik Raksasa",
        question: "Sebuah kotak besar berisi tumpukan rubik kecil. Kotak itu berbentuk kubus dengan volume 8.000 cm³. Jika volume satu rubik kecil 8 cm³, berapa banyak rubik dalam kotak?",
        options: ["100", "1000", "10", "500"],
        correct: 1,
        explanation: "Jumlah = Volume Besar : Volume Kecil. 8000 : 8 = 1000 rubik."
    },
    {
        topic: "Kolam Ikan",
        question: "Kolam kubus volumenya 1.000 liter. Jika air dikuras hingga tinggal setengahnya, tinggi air sekarang adalah...",
        options: ["10 dm", "5 dm", "2,5 dm", "50 cm"],
        correct: 1,
        explanation: "Rusuk kolam = akar3(1000) = 10 dm. Jika air setengah, tingginya jadi setengah = 5 dm."
    },
    {
        topic: "Pengiriman Paket",
        question: "Truk box membawa kardus berbentuk kubus dengan rusuk 50 cm. Volume total ruang kargo truk adalah 125.000.000 cm³. Berapa kardus maksimal yang bisa masuk?",
        options: ["100", "500", "1000", "1250"],
        correct: 2,
        explanation: "Volume 1 kardus = 50³ = 125.000. Jumlah = 125 juta : 125 ribu = 1000 kardus."
    },

    // --- LEVEL 4: PHYTHAGORAS & ANALISIS (AKAR LANJUT) ---
    {
        topic: "Tangga Bersandar",
        question: "Sebuah tangga panjangnya 5 meter disandarkan ke tembok. Jarak kaki tangga ke tembok 3 meter. Berapa tinggi tembok yang dicapai ujung tangga?",
        options: ["2 m", "3 m", "4 m", "5 m"],
        correct: 2,
        explanation: "Pythagoras: Tinggi = akar(5² - 3²) = akar(25 - 9) = akar(16) = 4 meter."
    },
    {
        topic: "Kapal Berlayar",
        question: "Kapal berlayar ke Utara 8 km, lalu belok ke Timur 6 km. Jarak terpendek kapal dari titik keberangkatan adalah...",
        options: ["10 km", "14 km", "12 km", "100 km"],
        correct: 0,
        explanation: "Sisi miring = akar(8² + 6²) = akar(64+36) = akar(100) = 10 km."
    },
    {
        topic: "Layang-layang",
        question: "Anak bermain layangan dengan benang sepanjang 13 meter. Jarak anak ke titik tepat di bawah layangan 5 meter. Berapa tinggi layangan?",
        options: ["8 m", "10 m", "12 m", "18 m"],
        correct: 2,
        explanation: "Tinggi = akar(13² - 5²) = akar(169 - 25) = akar(144) = 12 meter."
    },
    {
        topic: "Jalan Pintas",
        question: "Taman berbentuk persegi panjang 60m x 80m. Budi berjalan memotong diagonal taman. Berapa jarak yang ditempuh Budi?",
        options: ["100 m", "140 m", "120 m", "200 m"],
        correct: 0,
        explanation: "Diagonal = akar(60² + 80²) = akar(3600+6400) = akar(10000) = 100m."
    },
    {
        topic: "Tiang Bendera",
        question: "Kawat penyangga tiang dipasang dari puncak tiang ke tanah. Tinggi tiang 12m, jarak patok ke tiang 5m. Panjang kawat minimal?",
        options: ["13 m", "15 m", "17 m", "11 m"],
        correct: 0,
        explanation: "Miring = akar(12² + 5²) = akar(144+25) = akar(169) = 13 m."
    },

    // --- LEVEL 5: HITUNGAN NOTASI ILMIAH & ANALISIS ---
    {
        topic: "Kecepatan Cahaya",
        question: "Cahaya bergerak 3 x 10^8 m/detik. Berapa jarak tempuh cahaya dalam 2 detik?",
        options: ["6 x 10^8 m", "5 x 10^8 m", "9 x 10^8 m", "6 x 10^16 m"],
        correct: 0,
        explanation: "Jarak = Kecepatan x Waktu = (3 x 10^8) x 2 = 6 x 10^8 meter."
    },
    {
        topic: "Jarak Bumi-Bulan",
        question: "Jarak Bumi ke Bulan kira-kira 3,84 x 10^5 km. Jika ditulis dalam bentuk biasa (bukan pangkat), jaraknya adalah...",
        options: ["38.400 km", "384.000 km", "3.840.000 km", "384 km"],
        correct: 1,
        explanation: "10^5 berarti geser koma 5 kali ke kanan. 3,84 -> 384.000."
    },
    {
        topic: "Bakteri Mikroskopis",
        question: "Panjang bakteri 2 x 10^-6 meter. Jika ada 1000 bakteri berjajar memanjang, berapa panjang totalnya?",
        options: ["2 x 10^-3 m", "2 x 10^-9 m", "2 x 10^-4 m", "2 mm"],
        correct: 0,
        explanation: "(2 x 10^-6) x 10^3 = 2 x 10^(-6+3) = 2 x 10^-3 meter (atau 2 milimeter)."
    },
    {
        topic: "Gaya Gravitasi",
        question: "Massa Planet A adalah 5 x 10^24 kg. Massa Planet B adalah 2 x 10^24 kg. Berapa total massa kedua planet?",
        options: ["7 x 10^24 kg", "10 x 10^48 kg", "7 x 10^48 kg", "3 x 10^24 kg"],
        correct: 0,
        explanation: "Karena pangkatnya sama, cukup jumlahkan depannya: (5+2) x 10^24 = 7 x 10^24 kg."
    },
    {
        topic: "Analisis Pangkat",
        question: "Manakah yang nilainya paling besar? A=2^5, B=5^2, C=3^3, D=4^2",
        options: ["A", "B", "C", "D"],
        correct: 2,
        explanation: "A=32, B=25, C=27, D=16. Maaf, A=32 paling besar. Kunci jawaban: A (Opsi 0)."
    }
];

// KOREKSI MANUAL KUNCI JAWABAN NO 25
questions[24].correct = 0; // Opsi A (2^5 = 32) adalah yang terbesar dibanding 25, 27, 16.


// ==========================================
// 3. LOGIKA PROGRAM UTAMA (JANGAN DIUBAH)
// ==========================================
let currentQuestionIndex = 0;
let score = 0;
let wrongTopics = {};
let isAnswered = false;
let studentName = "";
let studentClass = "";

const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackArea = document.getElementById('feedback-area');
const feedbackContent = document.getElementById('feedback-content');
const nextBtn = document.getElementById('next-btn');

function startQuizInput() {
    studentName = document.getElementById('student-name').value;
    studentClass = document.getElementById('student-class').value;

    if (studentName === "" || studentClass === "") {
        alert("Nama dan Kelas wajib diisi dulu ya! 😊");
        return;
    }

    welcomeScreen.style.display = 'none';
    quizScreen.style.display = 'block';
    
    document.getElementById('display-name').innerText = studentName;
    document.getElementById('display-class').innerText = studentClass;
    document.getElementById('total-q').innerText = questions.length;
    
    loadQuestion();
}

function loadQuestion() {
    isAnswered = false;
    feedbackArea.style.display = 'none';
    nextBtn.style.display = 'none';
    optionsContainer.innerHTML = '';
    
    // Update Progress Bar
    let progressPercent = ((currentQuestionIndex) / questions.length) * 100;
    if(document.getElementById('progress-fill')) {
        document.getElementById('progress-fill').style.width = progressPercent + "%";
    }
    
    const currentQ = questions[currentQuestionIndex];
    document.getElementById('q-number').innerText = currentQuestionIndex + 1;
    questionText.innerText = currentQ.question;

    currentQ.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'btn-option';
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(index, btn);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selectedIndex, btnElement) {
    if (isAnswered) return;
    isAnswered = true;

    const currentQ = questions[currentQuestionIndex];
    const allButtons = optionsContainer.querySelectorAll('.btn-option');
    
    feedbackArea.style.display = 'block';
    feedbackContent.innerHTML = currentQ.explanation;

    if (selectedIndex === currentQ.correct) {
        score++;
        btnElement.style.backgroundColor = '#d1e7dd';
        btnElement.style.borderColor = '#0f5132';
        document.getElementById('feedback-title').innerText = "✅ Mantap, Benar!";
        document.getElementById('feedback-area').className = "feedback correct";
    } else {
        btnElement.style.backgroundColor = '#f8d7da';
        btnElement.style.borderColor = '#842029';
        document.getElementById('feedback-title').innerText = "❌ Kurang Tepat...";
        document.getElementById('feedback-area').className = "feedback wrong";
        
        allButtons[currentQ.correct].style.backgroundColor = '#d1e7dd';
        
        if (wrongTopics[currentQ.topic]) {
            wrongTopics[currentQ.topic]++;
        } else {
            wrongTopics[currentQ.topic] = 1;
        }
    }

    if (currentQuestionIndex < questions.length - 1) {
        nextBtn.innerText = "Lanjut ➡️";
    } else {
        nextBtn.innerText = "Lihat Hasil Akhir 🏁";
    }
    nextBtn.style.display = 'inline-block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizScreen.style.display = 'none';
    resultScreen.style.display = 'block';
    
    const finalScore = Math.round((score / questions.length) * 100);
    
    document.getElementById('final-score').innerText = finalScore;
    document.getElementById('res-name').innerText = studentName;
    document.getElementById('res-class').innerText = studentClass;
    document.getElementById('correct-count').innerText = `(Benar ${score} dari ${questions.length} soal)`;

    const rankTitle = document.getElementById('rank-title');
    
    // Logika Rank
    if (score >= 20) {
        rankTitle.innerHTML = "AMPUN SUHU! 🙏🥶";
        rankTitle.style.background = "-webkit-linear-gradient(#00c6ff, #0072ff)";
        rankTitle.style.webkitBackgroundClip = "text";
        rankTitle.style.webkitTextFillColor = "transparent";
    } else if (score >= 15) {
        rankTitle.innerHTML = "KEREN BOSS! 😎🔥";
        rankTitle.style.background = "-webkit-linear-gradient(#f7971e, #ffd200)";
        rankTitle.style.webkitBackgroundClip = "text";
        rankTitle.style.webkitTextFillColor = "transparent";
    } else {
        rankTitle.innerHTML = "BELAJAR LAGI BANG 🗿🤣";
        rankTitle.style.background = "-webkit-linear-gradient(#ee0979, #ff6a00)";
        rankTitle.style.webkitBackgroundClip = "text";
        rankTitle.style.webkitTextFillColor = "transparent";
    }

    generateWeaknessReport(finalScore);
    
    // KIRIM EMAIL OTOMATIS
    sendToTeacher(finalScore);
}

function generateWeaknessReport(finalScoreVal) {
    const recText = document.getElementById('recommendation-text');
    let weakAreas = Object.keys(wrongTopics).sort((a,b) => wrongTopics[b] - wrongTopics[a]);
    let message = "";
    
    if (finalScoreVal === 100) {
        message = "<p>Gak ada obat! Bener semua. 🌟</p>";
    } else if (weakAreas.length > 0) {
        let topWeakness = weakAreas.slice(0, 3);
        message += "<p>Hati-hati, sering salah di sini:</p><ul class='weakness-list'>";
        topWeakness.forEach(topic => {
            message += `<li>⚠️ ${topic}</li>`;
        });
        message += "</ul>";
    } else {
        message = "<p>Tingkatkan lagi ketelitiannya!</p>";
    }
    recText.innerHTML = message;
}

function downloadCSV() {
    const finalScore = Math.round((score / questions.length) * 100);
    const date = new Date().toLocaleDateString();
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Tanggal,Nama Siswa,Kelas,Nilai Akhir,Benar,Salah\n";
    csvContent += `${date},${studentName},${studentClass},${finalScore},${score},${questions.length - score}\n`;
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Nilai_${studentName}_${studentClass}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function sendToTeacher(finalScore) {
    if (FORMSPREE_URL === "MASUKKAN_LINK_FORMSPREE_DISINI") {
        console.log("Email guru belum disetting.");
        return;
    }

    const formData = new FormData();
    formData.append("nama", studentName);
    formData.append("kelas", studentClass);
    formData.append("nilai", finalScore);
    formData.append("benar", score);
    formData.append("pesan", "Laporan Otomatis TKA (Pangkat & Akar)");

    fetch(FORMSPREE_URL, {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            alert("Laporan nilai berhasil terkirim ke Mr. Heru! ✅");
        }
    }).catch(error => {
        console.log("Error kirim email: " + error);
    });
}

function restartQuiz() {
    location.reload(); 
}