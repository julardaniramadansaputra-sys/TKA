// ==========================================
// 1. PENGATURAN EMAIL (Wajib Diisi Guru)
// ==========================================
const FORMSPREE_URL = "MASUKKAN_LINK_FORMSPREE_DISINI"; 

// ==========================================
// 2. DATABASE 25 SOAL (CAMPURAN PECAHAN, DESIMAL, PERSEN)
// ==========================================
const questions = [
    // --- LEVEL 1: PECAHAN & DESIMAL DASAR ---
    {
        topic: "Pecahan ke Desimal",
        question: "0,75 + 1/2 - 0,25 = ...",
        options: ["1,0", "0,5", "1,5", "0,75"],
        correct: 0,
        explanation: "1/2 = 0,5. Jadi: 0,75 + 0,5 - 0,25 = 1,25 - 0,25 = 1,0."
    },
    {
        topic: "Persen & Pecahan",
        question: "50% - 1/4 + 0,1 = ...",
        options: ["0,35", "0,25", "0,45", "0,15"],
        correct: 0,
        explanation: "50% = 0,5. 1/4 = 0,25. Jadi: 0,5 - 0,25 + 0,1 = 0,25 + 0,1 = 0,35."
    },
    {
        topic: "Perkalian Campuran",
        question: "2/5 x 0,5 = ...",
        options: ["0,2", "0,5", "0,1", "1,0"],
        correct: 0,
        explanation: "2/5 = 0,4. Jadi 0,4 x 0,5 = 0,20 atau 0,2."
    },
    {
        topic: "Pembagian Desimal",
        question: "1,2 : 1/2 = ...",
        options: ["0,6", "2,4", "1,4", "2,2"],
        correct: 1,
        explanation: "Membagi dengan 1/2 sama dengan dikali 2. 1,2 x 2 = 2,4."
    },
    {
        topic: "Operasi Tanda Negatif",
        question: "-0,5 + 3/4 = ...",
        options: ["-0,25", "0,25", "0,5", "-0,5"],
        correct: 1,
        explanation: "-0,5 + 0,75 = 0,25."
    },

    // --- LEVEL 2: OPERASI CAMPURAN (KABATAKU) ---
    {
        topic: "Prioritas Perkalian",
        question: "0,5 + 2 x 1/4 = ...",
        options: ["0,625", "1,0", "1,5", "2,0"],
        correct: 1,
        explanation: "Kali dulu: 2 x 0,25 = 0,5. Lalu 0,5 + 0,5 = 1,0."
    },
    {
        topic: "Persen Perkalian",
        question: "25% x 80 - 0,5 = ...",
        options: ["15,5", "19,5", "20,5", "20"],
        correct: 1,
        explanation: "25% x 80 = 20. Lalu 20 - 0,5 = 19,5."
    },
    {
        topic: "Pecahan Campuran",
        question: "1 ½ + 0,5 x 4 = ...",
        options: ["8", "3,5", "4,5", "6"],
        correct: 1,
        explanation: "Kali dulu: 0,5 x 4 = 2. Lalu 1,5 + 2 = 3,5."
    },
    {
        topic: "Pembagian & Persen",
        question: "40% : 0,1 + 2 = ...",
        options: ["6", "4,2", "60", "2,4"],
        correct: 0,
        explanation: "0,4 : 0,1 = 4. Lalu 4 + 2 = 6."
    },
    {
        topic: "Kombinasi Tanda",
        question: "-1/2 + 0,2 x (-5) = ...",
        options: ["-1,5", "-0,5", "-1,0", "0,5"],
        correct: 0,
        explanation: "Kali dulu: 0,2 x -5 = -1. Lalu -0,5 + (-1) = -1,5."
    },

    // --- LEVEL 3: PECAHAN DESIMAL KOMPLEKS ---
    {
        topic: "Tiga Bilangan",
        question: "3/4 + 0,6 - 25% = ...",
        options: ["1,1", "1,2", "0,9", "1,15"],
        correct: 0,
        explanation: "0,75 + 0,6 - 0,25 = 1,35 - 0,25 = 1,1."
    },
    {
        topic: "Operasi Kurung",
        question: "(1 - 0,2) : 1/5 = ...",
        options: ["4", "0,16", "5", "0,8"],
        correct: 0,
        explanation: "Kurung: 0,8. Lalu 0,8 : 0,2 = 4."
    },
    {
        topic: "Pecahan Campuran Kali",
        question: "2 ¼ x 0,8 = ...",
        options: ["1,6", "1,8", "2,0", "1,2"],
        correct: 1,
        explanation: "2,25 x 0,8 = 1,8."
    },
    {
        topic: "Pengurangan Persen",
        question: "2 - 150% + 0,5 = ...",
        options: ["0", "1,0", "1,5", "-0,5"],
        correct: 1,
        explanation: "150% = 1,5. Jadi 2 - 1,5 + 0,5 = 0,5 + 0,5 = 1,0."
    },
    {
        topic: "Kombinasi Bagi",
        question: "0,75 : 3/4 + 0,5 = ...",
        options: ["1,0", "1,25", "1,5", "0,75"],
        correct: 2,
        explanation: "0,75 : 0,75 = 1. Lalu 1 + 0,5 = 1,5."
    },

    // --- LEVEL 4: LOGIKA & HITUNGAN CEPAT ---
    {
        topic: "Hitung Cepat",
        question: "12,5% x 800 + 1/2 = ...",
        options: ["100,5", "100", "50,5", "101"],
        correct: 0,
        explanation: "12,5% x 800 = 100. Lalu 100 + 0,5 = 100,5."
    },
    {
        topic: "Pecahan Negatif",
        question: "-2,5 - 1 ½ x 2 = ...",
        options: ["-5,5", "-4,5", "-8", "-3"],
        correct: 0,
        explanation: "Kali dulu: 1,5 x 2 = 3. Jadi -2,5 - 3 = -5,5."
    },
    {
        topic: "Rantai Desimal",
        question: "0,1 x 0,1 + 0,99 = ...",
        options: ["1,0", "0,1", "1,1", "1,01"],
        correct: 0,
        explanation: "0,01 + 0,99 = 1,0."
    },
    {
        topic: "Pembagian Pecahan",
        question: "5 : 1/3 - 10 = ...",
        options: ["5", "-5", "15", "-8,3"],
        correct: 0,
        explanation: "5 : 1/3 = 15. Lalu 15 - 10 = 5."
    },
    {
        topic: "Kombinasi Persen",
        question: "(50% + 0,5) x 10 = ...",
        options: ["10", "5,5", "1", "100"],
        correct: 0,
        explanation: "(0,5 + 0,5) x 10 = 1 x 10 = 10."
    },

    // --- LEVEL 5: CHALLENGE (HOTS NUMERIK) ---
    {
        topic: "Challenge 1",
        question: "1 - 1/2 - 1/4 - 1/8 = ...",
        options: ["0", "1/8", "1/16", "1/4"],
        correct: 1,
        explanation: "Samakan penyebut 8. 8/8 - 4/8 - 2/8 - 1/8 = 1/8."
    },
    {
        topic: "Challenge 2",
        question: "(-4)² x 0,5 - 10 = ...",
        options: ["-2", "2", "6", "-6"],
        correct: 0,
        explanation: "16 x 0,5 = 8. Lalu 8 - 10 = -2."
    },
    {
        topic: "Challenge 3",
        question: "10 : 0,25 + (-30) = ...",
        options: ["10", "70", "0", "-10"],
        correct: 0,
        explanation: "10 : 1/4 = 40. Lalu 40 - 30 = 10."
    },
    {
        topic: "Challenge 4",
        question: "3/5 + 60% x 2 - 1 = ...",
        options: ["0,8", "1,2", "0,2", "1,6"],
        correct: 0,
        explanation: "0,6 + (0,6 x 2) - 1 = 0,6 + 1,2 - 1 = 1,8 - 1 = 0,8."
    },
    {
        topic: "Challenge 5",
        question: "Hasil dari (0,2)³ + 0,002 = ...",
        options: ["0,01", "0,082", "0,008", "0,006"],
        correct: 0,
        explanation: "0,008 + 0,002 = 0,010 atau 0,01."
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
    formData.append("pesan", "Laporan Otomatis TKA Matematika (Mixed Numbers)");

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
