// ==========================================
// 1. PENGATURAN EMAIL (Wajib Diisi Guru)
// ==========================================
// Masukkan Link Formspree Bapak di antara tanda kutip di bawah ini
const FORMSPREE_URL = "MASUKKAN_LINK_FORMSPREE_DISINI"; 

// ==========================================
// 2. DATABASE 25 SOAL HOTS (BILANGAN BULAT CAMPURAN)
// ==========================================
const questions = [
    // --- LEVEL 1: KONSEP DASAR & TANDA NEGATIF ---
    {
        topic: "Operasi Tanda",
        question: "Hasil dari -12 + (-8) - (-5) adalah...",
        options: ["-25", "-15", "15", "-5"],
        correct: 1,
        explanation: "-12 - 8 + 5 = -20 + 5 = -15."
    },
    {
        topic: "Prioritas Hitung",
        question: "Hitunglah: 20 + (-5) x 4 =",
        options: ["60", "100", "0", "-60"],
        correct: 2,
        explanation: "Kali dulu: (-5) x 4 = -20. Lalu 20 + (-20) = 0."
    },
    {
        topic: "Pembagian Negatif",
        question: "Hasil dari -48 : (-6 + 2) adalah...",
        options: ["12", "-12", "8", "-8"],
        correct: 0,
        explanation: "Kurung dulu: (-6 + 2) = -4. Lalu -48 : (-4) = 12."
    },
    {
        topic: "Operasi Campuran",
        question: "(-20) + 8 x 5 - 18 : (-3) =",
        options: ["14", "26", "-6", "24"],
        correct: 1,
        explanation: "Kali: 8x5=40. Bagi: 18:(-3)=-6. Jadi: -20 + 40 - (-6) = 20 + 6 = 26."
    },
    {
        topic: "Distributif",
        question: "(15 x 32) - (15 x 28) = ...",
        options: ["150", "60", "45", "90"],
        correct: 1,
        explanation: "Pakai sifat distributif: 15 x (32 - 28) = 15 x 4 = 60."
    },

    // --- LEVEL 2: SOAL CERITA SUHU & KEDALAMAN ---
    {
        topic: "Suhu Kulkas",
        question: "Suhu daging -4°C. Saat dimasak, suhu naik 5°C setiap 2 menit. Berapa suhu daging setelah 10 menit?",
        options: ["20°C", "21°C", "25°C", "19°C"],
        correct: 1,
        explanation: "Naik 5x (10 menit : 2). Kenaikan = 5 x 5 = 25°C. Suhu akhir = -4 + 25 = 21°C."
    },
    {
        topic: "Suhu Kota",
        question: "Suhu Kota A -5°C, Kota B 20°C. Kota C lebih dingin 4°C dari Kota A. Selisih suhu Kota B dan C adalah...",
        options: ["29°C", "25°C", "15°C", "30°C"],
        correct: 0,
        explanation: "Suhu C = -5 - 4 = -9°C. Selisih B dan C = 20 - (-9) = 29°C."
    },
    {
        topic: "Menyelam",
        question: "Penyelam berada di kedalaman 15 meter. Ia turun lagi 4 meter, lalu naik 8 meter. Posisi penyelam sekarang di kedalaman...",
        options: ["11 meter", "19 meter", "3 meter", "7 meter"],
        correct: 0,
        explanation: "Awal -15. Turun (-4) jadi -19. Naik (+8) jadi -11. Kedalaman 11 meter."
    },
    {
        topic: "Perubahan Suhu",
        question: "Suhu segelas teh 45°C. Diberi es batu suhu turun 12°C. Dibiarkan lama suhu naik 3°C. Suhu sekarang?",
        options: ["30°C", "33°C", "36°C", "39°C"],
        correct: 2,
        explanation: "45 - 12 + 3 = 33 + 3 = 36°C."
    },
    {
        topic: "Elevator",
        question: "Lift dari lantai 8, turun 5 lantai, lalu naik 10 lantai. Sekarang lift ada di lantai...",
        options: ["12", "13", "10", "3"],
        correct: 1,
        explanation: "8 - 5 + 10 = 3 + 10 = 13."
    },

    // --- LEVEL 3: LOGIKA SKOR & KOMPETISI ---
    {
        topic: "Sistem Nilai",
        question: "Benar(+5), Salah(-2), Kosong(0). Dari 20 soal, Ali Benar 15 dan Salah 3. Sisanya kosong. Skor Ali?",
        options: ["75", "69", "71", "65"],
        correct: 1,
        explanation: "Benar: 15x5=75. Salah: 3x(-2)=-6. Kosong: 2x0=0. Total = 75 - 6 = 69."
    },
    {
        topic: "Liga Sepakbola",
        question: "Menang(+3), Kalah(-1), Seri(1). Tim Garuda main 5 kali: Menang 3x, Kalah 1x, Seri 1x. Poinnya?",
        options: ["9", "8", "7", "10"],
        correct: 0,
        explanation: "(3x3) + (1x-1) + (1x1) = 9 - 1 + 1 = 9."
    },
    {
        topic: "Lomba Matematika",
        question: "Skor awal 100. Benar dapat tambahan 10, Salah dikurangi 5. Budi menjawab 4 Benar dan 2 Salah. Skor akhir?",
        options: ["130", "140", "120", "150"],
        correct: 0,
        explanation: "Awal 100. Benar: 4x10=40. Salah: 2x(-5)=-10. Akhir = 100 + 40 - 10 = 130."
    },
    {
        topic: "Selisih Skor",
        question: "Skor Ani 125. Skor Budi -15. Berapa selisih skor mereka?",
        options: ["110", "130", "140", "100"],
        correct: 2,
        explanation: "Selisih = Nilai Besar - Nilai Kecil. 125 - (-15) = 125 + 15 = 140."
    },
    {
        topic: "Analisis Jawaban",
        question: "Total 50 soal. Skor total 100. Aturan: Benar(4), Salah(-2). Jika Budi menjawab Benar 30 soal, berapa soal yang dia jawab SALAH? (Tidak ada kosong)",
        options: ["10", "15", "20", "5"],
        correct: 0,
        explanation: "Poin Benar = 30x4 = 120. Skor akhir 100. Berarti poin berkurang 20. Karena Salah(-2), maka Salah = 20:2 = 10 soal."
    },

    // --- LEVEL 4: LOGIKA KEUANGAN & BILANGAN ---
    {
        topic: "Hutang Piutang",
        question: "Pak Budi punya hutang Rp500rb (-500). Ia bayar Rp200rb, lalu hutang lagi Rp100rb. Posisi uang Pak Budi?",
        options: ["-200", "-300", "-400", "-600"],
        correct: 2,
        explanation: "-500 + 200 - 100 = -300 - 100 = -400 (Hutang 400rb)."
    },
    {
        topic: "Tebak Angka",
        question: "Aku bilangan bulat. Jika dikali -4 lalu ditambah 8 hasilnya -12. Bilangan berapakah aku?",
        options: ["5", "-5", "4", "3"],
        correct: 0,
        explanation: "Mundur: (-12 - 8) : -4 = -20 : -4 = 5."
    },
    {
        topic: "Pedagang Jeruk",
        question: "Beli 5 keranjang jeruk @ Rp100rb. Dijual rugi Rp10rb per keranjang. Total uang yang didapat pedagang?",
        options: ["Rp450rb", "Rp400rb", "Rp550rb", "Rp500rb"],
        correct: 0,
        explanation: "Harga jual per keranjang = 100rb - 10rb = 90rb. Total = 5 x 90rb = 450rb."
    },
    {
        topic: "Suhu Ekstrem",
        question: "Suhu udara siang 30°C. Malam hari turun drastis menjadi -5°C. Besar perubahan suhu tersebut adalah...",
        options: ["25°C", "30°C", "35°C", "5°C"],
        correct: 2,
        explanation: "Perubahan = Jarak dari 30 ke -5. 30 - (-5) = 35°C."
    },
    {
        topic: "Permainan Kelereng",
        question: "Awal punya 50. Kalah 20 (-20), Menang 15 (+15), Kalah lagi 10 (-10). Sisa kelereng?",
        options: ["35", "45", "25", "55"],
        correct: 0,
        explanation: "50 - 20 + 15 - 10 = 30 + 15 - 10 = 45 - 10 = 35."
    },

    // --- LEVEL 5: OPERASI CAMPURAN KOMPLEKS (HOTS) ---
    {
        topic: "Operasi Kurung",
        question: "Hasil dari 100 : (-20 + 15) x (-4) adalah...",
        options: ["80", "-80", "20", "-20"],
        correct: 0,
        explanation: "Kurung: (-20+15) = -5. Bagi: 100 : -5 = -20. Kali: -20 x -4 = 80."
    },
    {
        topic: "Substitusi Aljabar",
        question: "Jika a = -3, b = 2, c = -5. Nilai dari (a x b) - c adalah...",
        options: ["-1", "-11", "1", "11"],
        correct: 0,
        explanation: "(-3 x 2) - (-5) = -6 + 5 = -1."
    },
    {
        topic: "Pola Bilangan",
        question: "Hitunglah: -1 + 2 - 3 + 4 - 5 + 6 ... - 19 + 20",
        options: ["10", "-10", "20", "0"],
        correct: 0,
        explanation: "Setiap pasang (-1+2)=1. Ada 20 angka berarti 10 pasang. 10 x 1 = 10."
    },
    {
        topic: "Kuadrat & Kubik",
        question: "Hasil dari (-4)³ + (-2)² adalah...",
        options: ["-60", "-68", "60", "68"],
        correct: 0,
        explanation: "(-4)³ = -64. (-2)² = 4. Jadi -64 + 4 = -60."
    },
    {
        topic: "Logika Tangga",
        question: "Anak tangga ke-5. Naik 3, Turun 6, Naik 2. Posisi sekarang di anak tangga ke...",
        options: ["3", "4", "5", "6"],
        correct: 1,
        explanation: "5 + 3 - 6 + 2 = 8 - 6 + 2 = 2 + 2 = 4."
    }
];

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
    formData.append("pesan", "Laporan Otomatis TKA Matematika (Bilangan Bulat)");

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
