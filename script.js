// ==========================================
// 1. DATABASE 25 SOAL HOTS (LENGKAP)
// ==========================================
const questions = [
    // --- BILANGAN BULAT ---
    {
        topic: "Logika Suhu",
        question: "Suhu di dalam kulkas -4°C. Saat mati lampu, suhu naik 3°C setiap 10 menit. Jika mati lampu berlangsung selama 30 menit, berapa suhu kulkas sekarang?",
        options: ["1°C", "5°C", "9°C", "-1°C"],
        correct: 1,
        explanation: "Analisis: Naik 3x (30 menit / 10). Total naik 9°C. Akhir = -4 + 9 = 5°C."
    },
    {
        topic: "Sistem Skor",
        question: "Ujian: Benar(+4), Salah(-2), Kosong(-1). Budi jawab 40 soal (30 Benar, 10 Salah) dari total 50 soal. Berapa skornya?",
        options: ["100", "110", "90", "95"],
        correct: 2,
        explanation: "Benar: 30x4=120. Salah: 10x(-2)=-20. Kosong: 10x(-1)=-10. Total = 90."
    },
    {
        topic: "Logika Posisi",
        question: "Lumba-lumba di kedalaman 8m (-8). Melompat setinggi 12m. Berapa ketinggiannya di atas air?",
        options: ["4 meter", "20 meter", "8 meter", "12 meter"],
        correct: 0,
        explanation: "Posisi awal -8. Naik +12. Posisi akhir = -8 + 12 = 4 meter."
    },
    {
        topic: "Operasi Campuran",
        question: "Hasil dari ( -24 + 56 ) : (-4) - (-12) adalah...",
        options: ["-20", "4", "20", "-4"],
        correct: 1,
        explanation: "32 : (-4) = -8. Lalu -8 - (-12) = -8 + 12 = 4."
    },
    {
        topic: "Tebak Bilangan",
        question: "Aku dikalikan -3, lalu dikurangi 5, hasilnya 10. Siapakah aku?",
        options: ["-5", "5", "-15", "-2"],
        correct: 0,
        explanation: "Mundur: (10 + 5) : -3 = 15 : -3 = -5."
    },
    // --- PECAHAN ---
    {
        topic: "Pecahan Sisa",
        question: "Ibu punya kue. 1/3 kasih Andi. 1/4 DARI SISANYA kasih Budi. Sisa kue Ibu berapa?",
        options: ["5/12", "1/2", "1/4", "3/4"],
        correct: 1,
        explanation: "Sisa awal 2/3. Budi dapat 1/4 x 2/3 = 2/12 = 1/6. Sisa akhir = 2/3 - 1/6 = 3/6 = 1/2."
    },
    {
        topic: "Analisis Harta",
        question: "20% sedekah. Setengah dari sisa ditabung (Rp 2 Juta). Berapa Gaji total?",
        options: ["Rp 4 Juta", "Rp 5 Juta", "Rp 8 Juta", "Rp 10 Juta"],
        correct: 1,
        explanation: "Sisa sedekah 80%. Tabungan = 1/2 x 80% = 40%. Jika 40%=2jt, maka 100%=5jt."
    },
    {
        topic: "Urutan Pecahan",
        question: "Urutan turun: 0,75 ; 2/3 ; 60% ; 0,8",
        options: ["0,8 ; 0,75 ; 2/3 ; 60%", "0,8 ; 2/3 ; 0,75 ; 60%", "2/3 ; 0,8 ; 0,75 ; 60%", "0,75 ; 0,8 ; 60% ; 2/3"],
        correct: 0,
        explanation: "0,8 > 0,75 > 0,66 (2/3) > 0,60."
    },
    {
        topic: "Operasi Pecahan",
        question: "Hasil 2 ½ : 0,5 + 0,75 x 4 =",
        options: ["5", "6", "8", "7"],
        correct: 2,
        explanation: "2,5 : 0,5 = 5. 0,75 x 4 = 3. Total 5+3=8."
    },
    {
        topic: "Logika Volume",
        question: "Drum isi 1/4. Tambah 6 liter jadi 1/2. Kapasitas drum?",
        options: ["12 liter", "18 liter", "24 liter", "30 liter"],
        correct: 2,
        explanation: "Beda 1/2 dan 1/4 adalah 1/4 bagian. 1/4 bagian = 6 liter. Penuh = 24 liter."
    },
    // --- ANALISIS CERITA ---
    {
        topic: "Diskon Bertingkat",
        question: "Baju 100rb diskon 40% + 10%. Bayar berapa?",
        options: ["50rb", "54rb", "60rb", "46rb"],
        correct: 1,
        explanation: "Diskon I: jadi 60rb. Diskon II: 10% dr 60rb = 6rb. Bayar 54rb."
    },
    {
        topic: "Pecahan Warisan",
        question: "Warisan 120jt. Sulung 1/3, Kedua 1/4, Sisa Bungsu. Selisih Sulung & Bungsu?",
        options: ["10 Juta", "20 Juta", "30 Juta", "0 (Sama)"],
        correct: 0,
        explanation: "Sulung 40jt. Kedua 30jt. Sisa Bungsu 50jt. Selisih 50-40 = 10jt."
    },
    {
        topic: "Logika Suhu",
        question: "Es krim -5°C. Naik 2°C tiap 3 menit. Setelah 15 menit?",
        options: ["10°C", "5°C", "-3°C", "0°C"],
        correct: 1,
        explanation: "Naik 5 kali (15:3). Total naik 10°C. Akhir = -5+10=5."
    },
    {
        topic: "Pecahan Cerita",
        question: "Baca buku: Hari 1 (1/4), Hari 2 (1/3). Sisa 50 hal. Total halaman?",
        options: ["100", "120", "150", "200"],
        correct: 1,
        explanation: "Sudah baca 7/12. Sisa 5/12. Jika 5/12=50, maka 1/12=10. Total 120."
    },
    {
        topic: "Perbandingan Uang",
        question: "Ani : Budi = 3 : 5. Selisih 40rb. Jumlah keduanya?",
        options: ["120rb", "160rb", "200rb", "80rb"],
        correct: 1,
        explanation: "Selisih 2 bagian = 40rb -> 1 bagian = 20rb. Jumlah 8 bagian = 160rb."
    },
    // --- LOGIKA ALGORITMA ---
    {
        topic: "Aljabar",
        question: "(12 + 8) x (n - 6) = 100. Nilai n?",
        options: ["10", "11", "5", "12"],
        correct: 1,
        explanation: "20 x (n-6) = 100 -> n-6=5 -> n=11."
    },
    {
        topic: "Logika Lift",
        question: "Lantai 5. Turun 3, Naik 7. Lantai berapa?",
        options: ["7", "8", "9", "10"],
        correct: 2,
        explanation: "5 - 3 + 7 = 9."
    },
    {
        topic: "Desimal",
        question: "3/4 + 0,6 - 25% =",
        options: ["1,1", "1,2", "1,15", "0,9"],
        correct: 0,
        explanation: "0,75 + 0,60 - 0,25 = 1,1."
    },
    {
        topic: "Umur",
        question: "Adik 2/3 Kakak. Jumlah umur 30. Umur Adik?",
        options: ["10", "12", "15", "18"],
        correct: 1,
        explanation: "Rasio 2:3. Jumlah 5 bagian = 30. 1 bagian = 6. Adik (2 bagian) = 12."
    },
    {
        topic: "Hutang",
        question: "Hutang 500rb. Pinjam lagi 200rb. Bayar 450rb. Sisa?",
        options: ["Hutang 250rb", "Lunas", "Hutang 150rb", "Hutang 50rb"],
        correct: 0,
        explanation: "-500 - 200 + 450 = -250."
    },
    // --- LOGIKA LANJUT ---
    {
        topic: "Analisis Kerja",
        question: "Andi 3 jam, Budi 6 jam. Kalau bareng?",
        options: ["1 jam", "2 jam", "4,5 jam", "9 jam"],
        correct: 1,
        explanation: "1/t = 1/3 + 1/6 = 3/6 = 1/2. t = 2 jam."
    },
    {
        topic: "Pola Bilangan",
        question: "1 - 2 + 3 - 4 + ... + 19 - 20 =",
        options: ["-10", "-20", "10", "0"],
        correct: 0,
        explanation: "Ada 10 pasang angka -1. Hasil -10."
    },
    {
        topic: "Pecahan Terapan",
        question: "5 ½ liter dibagi ke gelas 1/4 liter. Butuh berapa gelas?",
        options: ["20", "21", "22", "24"],
        correct: 2,
        explanation: "5,5 : 0,25 = 22."
    },
    {
        topic: "Sifat Bilangan",
        question: "(25 x 13) - (25 x 9) =",
        options: ["50", "75", "100", "125"],
        correct: 2,
        explanation: "25 x (13-9) = 25 x 4 = 100."
    },
    {
        topic: "Sisa Bagi",
        question: "Bilangan dibagi 5 sisa 3, dibagi 7 sisa 5. Terkecil?",
        options: ["33", "38", "43", "53"],
        correct: 0,
        explanation: "33 bagi 5 sisa 3. 33 bagi 7 sisa 5. Benar."
    }
];

// ==========================================
// 2. LOGIKA PROGRAM (RANK & EMOTICON)
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
        alert("Waduh, Nama sama Kelas jangan kosong dong Boss! 😅");
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
        document.getElementById('feedback-title').innerText = "❌ Yah Salah...";
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
        nextBtn.innerText = "Lihat Vonis Akhir 😱";
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
    
    if (score >= 15) {
        rankTitle.innerHTML = "AMPUN SUHU! 🙏🥶";
        rankTitle.style.background = "-webkit-linear-gradient(#00c6ff, #0072ff)";
        rankTitle.style.webkitBackgroundClip = "text";
        rankTitle.style.webkitTextFillColor = "transparent";
    } else if (score >= 10) {
        rankTitle.innerHTML = "KEREN BOSS! 😎🔥";
        rankTitle.style.background = "-webkit-linear-gradient(#f7971e, #ffd200)";
        rankTitle.style.webkitBackgroundClip = "text";
        rankTitle.style.webkitTextFillColor = "transparent";
    } else {
        rankTitle.innerHTML = "WADUH, SKILL ISSUE? 🗿🤣";
        rankTitle.style.background = "-webkit-linear-gradient(#ee0979, #ff6a00)";
        rankTitle.style.webkitBackgroundClip = "text";
        rankTitle.style.webkitTextFillColor = "transparent";
    }

    generateWeaknessReport(score);
}

function generateWeaknessReport(finalScoreVal) {
    const recText = document.getElementById('recommendation-text');
    
    let weakAreas = Object.keys(wrongTopics).sort((a,b) => wrongTopics[b] - wrongTopics[a]);
    let message = "";
    
    if (finalScoreVal === questions.length) {
        message = "<p>Gak ada obat! Bener semua. Kamu valid jadi asisten Mr. Heru. 🌟</p>";
    } else if (weakAreas.length > 0) {
        let topWeakness = weakAreas.slice(0, 3);
        message += "<p>Hati-hati, kamu sering 'kepeleset' di materi ini nih:</p>";
        message += "<ul class='weakness-list'>";
        topWeakness.forEach(topic => {
            message += `<li>⚠️ ${topic} (Salah ${wrongTopics[topic]} kali)</li>`;
        });
        message += "</ul>";
        message += "<p>Coba pelajari lagi konsep di atas ya!</p>";
    } else {
        message = "<p>Hasil kamu lumayan, tingkatkan lagi ketelitiannya!</p>";
    }

    if (finalScoreVal < 10) {
        message += "<p style='margin-top:10px; font-style:italic;'><strong>Note:</strong> Jangan login doang bang, belajar lagi gih! 🤣</p>";
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

function restartQuiz() {
    location.reload(); 
}