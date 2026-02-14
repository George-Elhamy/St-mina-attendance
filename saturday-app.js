// Student list from CSV
const initialData = {
    students: [
        "أكمل فارس",
        "أمانى كامل عزيز",
        "أندرو عزيز",
        "أندرو عماد سليم حبيب",
        "أنطونيوس نادي",
        "إنجي صابر فوزي",
        "ابرام امين فؤاد",
        "ابرام روبيرت",
        "اسامه الشاروني",
        "اشرف فهيم نعيم",
        "افروسينا باهر",
        "امال منصور سوريال",
        "امير ملاك عزيز",
        "اندرو امير الفريد",
        "اندرو باسم",
        "انطونيوس البير ابراهيم",
        "ايرينى اسحق يوسف",
        "ايرينى شنودة كامل",
        "ايفلين ميشيل فوزي",
        "ايفون عبد الشهيد عزيز",
        "ايلاريا جورج",
        "ايمن فوكيه شكرالله",
        "ايهاب مختار",
        "بارثينيا بولس إسكندر",
        "باسم سنادة قلادة بخيت",
        "بسنت روماني",
        "بنيامين ايمن نصحي",
        "بولا باسم نبيه اسكندر",
        "بولا نادي صبحي",
        "بولا يونان يعقوب",
        "بولس ايوب اسكندر بولس",
        "بيتر حسني نقولا",
        "بيتر زكريا صبري ابراهيم",
        "بيتر مهني نجيب",
        "بيشوى سعد معوض",
        "بيشوى ممدوح",
        "تريز اسحق يوسف",
        "تريز اميل",
        "تريزا وصفي",
        "ثناء كمال غبريال",
        "ثناء ملاك ملك",
        "جاكلين جرجس رشدي",
        "جانيت عماد",
        "جمال مجدى جورج",
        "جورج سمير شلبى",
        "جورج عماد فاروق أبادير",
        "جورج ميخائيل عوض",
        "جورج هاني",
        "جورج هاني فهمي",
        "جوفاني جوزيف زكريا",
        "جولي جوزيف",
        "جوليا مارك انطون",
        "جويس ريمون إبراهيم",
        "جيسي روبرت",
        "جيسيكا بولس ايوب اسكندر",
        "جيهان عزمي كمال",
        "حنا خلف",
        "حنان حنا جورجي",
        "دافيد سامح حليم",
        "دينا زين",
        "رامى سمير شفيق",
        "رامي انور وديع بسطا",
        "راندا زكريا مريد",
        "رانيا جورج البير",
        "رانيا حبيب",
        "روجيه عماد",
        "رولا راني",
        "رومانى وليم حكيم",
        "سامح تادرس عزيز",
        "سامح ماهر توفيق",
        "سامى نبيه ساويرس",
        "سامي رشيد منسي ارمانيوس",
        "ساميه نجيب",
        "ساندرا راني",
        "ساندرا رفيق فاروق فتح الله",
        "ساندى البير",
        "ستيفين جورج غالي",
        "سلوى فؤاد حلمى",
        "سليمان حفظي عبدالنور",
        "سميحة نعيم",
        "سمير سامح سمير",
        "سهام كرم",
        "سهير سعد بطرس عطاالله",
        "سيزر رشيد فايز",
        "سيسيل سمير مراد",
        "سيلفانا سامح",
        "شكري صابر شكري تاوضروس",
        "شيرى حليم",
        "شيري إبراهيم دانيال حنا",
        "شيري عزيز فايز",
        "شيري فيليب غطاس",
        "شيرين عزت زكي",
        "صموئيل حلمي حنا",
        "طارق توفيق عبده",
        "عادل إبراهيم مسعد إبراهيم",
        "عادل جمعه",
        "عبدالله جورج",
        "عهدي",
        "عواطف ابراهيم",
        "فادى لطفى شفيق",
        "فادي هاني",
        "فايزه عبد المسيح",
        "فكري فؤاد شنودة",
        "فيرونا نور",
        "فيرونيا ماجد ملك",
        "فيوليت",
        "كارول عادل وديع",
        "كارول نادر كريم",
        "كارين ماجد",
        "كرستين بطرس ابراهيم",
        "كرستين فايق مهنى عطية",
        "كريستين فكرى موسى",
        "كريستين كميل فوزى",
        "كريستين نجيب عجيب",
        "كريم حسني عازر",
        "كيرلس فتحي شوقي",
        "كيرلس مجدي ممدوح اقلاديوس",
        "لوجين هاني ويصا",
        "لورين تيماثاوس ملاحظ",
        "ليديا صفوت",
        "ليليان ميشيل يوسف ملك",
        "ماثيو مينا يوسف عزيز",
        "ماجد موريس سيدهم",
        "ماجدة رزق سيدهم",
        "مارتن جرجس لويس",
        "مارسيل منير معوض",
        "مارسيل ميلاد ونيس",
        "مارفل ماجد ملك",
        "ماري سمير",
        "ماريا باسم",
        "ماريا رضا عدلى",
        "ماريا فيكتور كامل",
        "ماريا ماجد مجدي فرنسيس",
        "ماريا نبيل يونان",
        "ماريان حمدي ايليا",
        "ماريان سمير",
        "ماريان سمير عدلي",
        "ماريان عزت شحاتة",
        "ماريان كرم جرجس",
        "ماريان ميخائيل",
        "ماريان نمر عجيب",
        "ماريانا عادل نوار",
        "ماريز ايهاب",
        "ماريز سامح كامل",
        "مارينا جرجس كامل",
        "مارينا رضا نصر",
        "مارينا عادل شحاته",
        "مارينا فيكتور",
        "مارينا محي نجيب",
        "مارينا مرقس",
        "مارينا ممدوح مكين",
        "ماريهام عادل فوزي",
        "ماريو مجدى منير فرج",
        "مارييل حاتم كريم يوسف",
        "ماهر حشمت",
        "ماهيناز ممدوح عزيز",
        "مايفل عادل",
        "مايكل إبراهيم",
        "مايكل امجد باخوم",
        "مايكل رمزي عزيز",
        "مايكل عبده مجاهد",
        "مايكل ماجد",
        "مايكل مجدى",
        "مايكل وهيب عطالله راغب",
        "مايڤن چورچ",
        "مجدي نجيب اسكندر ملاك",
        "مدحت مينا",
        "مرفت انيس عزمى",
        "مرقص ناجي تامر",
        "مريم الشايب",
        "مريم امجد",
        "مريم اميل",
        "مريم انور بسل",
        "مريم سامى",
        "مريم عادل سمير",
        "مريم عيد عجايبى",
        "مريم هانى موريس",
        "مريم وديع وهيب",
        "مريم يعقوب خليفه",
        "مريم يوسف فوزي",
        "مكارى نادى شحاتة",
        "ملك خليل",
        "منى ظريف",
        "مني صليب موسي",
        "مها مجدى ميخائيل",
        "مورين روماني",
        "مورين صفوت",
        "مونيكا محي نجيب",
        "مونيكا ناصر لمعى",
        "ميريام اشرف عياد",
        "ميرڤت ميلاد عبد المسيح",
        "مينا",
        "مينا رضا",
        "مينا سمير كامل",
        "مينا عادل شاكر",
        "مينا فلمون شوقي جلبي",
        "مينا وحيد انطون",
        "مينا يوسف جورج",
        "مينا يوسف شفيق",
        "ميورا ماهر",
        "ناتالي ماجد",
        "نادره عادل فهمي",
        "نادية صابر شاكر",
        "ناردين ناجي نبيل",
        "ناريمان حسني يوسف",
        "نانسى كرم",
        "نانسي مجدي حنا",
        "نانسي نبيل معوض",
        "نبيله وصفي ميخائيل",
        "نجاة فؤاد",
        "نرمين صادق خليل",
        "نرمين ناجح يوسف",
        "نهي رأفت سامي تكلا",
        "نورا مينا جرجس",
        "نيفين صابر فهمي",
        "نيفين صدقي ملك",
        "نيفين نصرالله",
        "نيفين وليم فهمي",
        "نيفين وليم كامل",
        "نيللي خليل",
        "هانى ابراهيم عدلى",
        "هاني إسكندر",
        "هايدي زكريا شاذلي",
        "هايدي عاطف",
        "هبة سامي منسي",
        "وسيم غطاس جرجس",
        "يوأنا طارق",
        "يوأنا طارق عدلى",
        "يوحنا منتياس",
        "يوستينا أسامة لحظي",
        "يوستينا روبرت",
        "يوستينا عيد",
        "يوستينا مجدي رفعت",
        "يوسف اشرف صبحي",
        "يوسف رأفت نجيب منصور",
        "يوسف شريف صبري",
        "يوسف طارق عزيز",
        "يوسف مكرم ميلاد",
        "ڤيرينا فادي عزت عدلي",
        "Ferlanda kamel samaan",
        "Mary Kamel Samaan"
    ].sort(),
    attendance: {}
};

// Current attendance being edited
let currentAttendance = {};
let cachedData = null;

// Initialize Firebase and data
async function initializeData() {
    try {
        const docRef = db.collection('attendance-saturday').doc('data');
        const doc = await docRef.get();
        
        if (!doc.exists) {
            await docRef.set(initialData);
            console.log('Initial Saturday data saved to Firebase');
        }
    } catch (error) {
        console.error('Error initializing data:', error);
        if (!localStorage.getItem('saturdayAttendanceData')) {
            localStorage.setItem('saturdayAttendanceData', JSON.stringify(initialData));
        }
    }
}

// Get data from Firestore
async function getData() {
    try {
        const docRef = db.collection('attendance-saturday').doc('data');
        const doc = await docRef.get();
        
        if (doc.exists) {
            cachedData = doc.data();
            return cachedData;
        } else {
            return initialData;
        }
    } catch (error) {
        console.error('Error getting data:', error);
        const data = localStorage.getItem('saturdayAttendanceData');
        return data ? JSON.parse(data) : initialData;
    }
}

// Save data to Firestore
async function saveData(data) {
    try {
        const docRef = db.collection('attendance-saturday').doc('data');
        await docRef.set(data);
        cachedData = data;
        console.log('Saturday data saved to Firebase successfully');
        localStorage.setItem('saturdayAttendanceData', JSON.stringify(data));
    } catch (error) {
        console.error('Error saving data:', error);
        localStorage.setItem('saturdayAttendanceData', JSON.stringify(data));
        showMessage('تحذير: تم الحفظ محلياً فقط. تحقق من اتصال الإنترنت.', 'warning');
    }
}

// Format date for display
function formatDate(dateStr) {
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

// Get month name in Arabic
function getMonthName(monthNum) {
    const months = [
        "يناير", "فبراير", "مارس", "إبريل", "مايو", "يونيو",
        "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
    ];
    return months[monthNum];
}

// Show message
function showMessage(message, type = 'success') {
    const existingMessage = document.querySelector('.success-message, .warning-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    const messageDiv = document.createElement('div');
    messageDiv.className = type === 'success' ? 'success-message' : 'warning-message';
    messageDiv.textContent = message;
    
    const contentCard = document.querySelector('.content-card');
    contentCard.insertBefore(messageDiv, contentCard.firstChild);
    
    setTimeout(() => messageDiv.remove(), 3000);
}

// Show/Hide pages
function showPage(pageName) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    document.getElementById(pageName).classList.add('active');
    event.target.classList.add('active');
    
    switch(pageName) {
        case 'history':
            renderFullHistory();
            break;
        case 'monthly':
            renderMonthlySummary();
            break;
        case 'ranking':
            renderRanking();
            break;
        case 'add':
            renderAddAttendance();
            break;
    }
}

// Search students in add attendance page
function searchStudents(query) {
    const searchQuery = query.trim().toLowerCase();
    const cards = document.querySelectorAll('#studentsGrid .student-card');
    let visibleCount = 0;
    
    cards.forEach(card => {
        const name = card.querySelector('.student-name').textContent.toLowerCase();
        if (name.includes(searchQuery)) {
            card.classList.remove('hidden');
            visibleCount++;
        } else {
            card.classList.add('hidden');
        }
    });
    
    const resultsDiv = document.getElementById('searchResults');
    if (searchQuery) {
        resultsDiv.style.display = 'block';
        resultsDiv.textContent = `عثر على ${visibleCount} من ${cards.length} طالب`;
    } else {
        resultsDiv.style.display = 'none';
    }
}

// Search in history table
function searchHistory(query) {
    const searchQuery = query.trim().toLowerCase();
    const rows = document.querySelectorAll('#historyTable tbody tr');
    
    rows.forEach(row => {
        const name = row.querySelector('.name-column')?.textContent.toLowerCase();
        if (!name || name.includes(searchQuery)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Search in ranking table
function searchRanking(query) {
    const searchQuery = query.trim().toLowerCase();
    const rows = document.querySelectorAll('#rankingContent tbody tr');
    
    rows.forEach(row => {
        const name = row.querySelector('.name-column')?.textContent.toLowerCase();
        if (!name || name.includes(searchQuery)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Render Add Attendance Page
async function renderAddAttendance() {
    const data = await getData();
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('attendanceDate').value = today;
    
    // Get existing attendance for today if any
    currentAttendance = data.attendance[today] || {};
    
    const studentsGrid = document.getElementById('studentsGrid');
    studentsGrid.innerHTML = '';
    
    // Clear search
    const searchInput = document.getElementById('studentSearch');
    if (searchInput) searchInput.value = '';
    const searchResults = document.getElementById('searchResults');
    if (searchResults) searchResults.style.display = 'none';
    
    data.students.forEach(student => {
        const card = document.createElement('div');
        card.className = 'student-card';
        
        if (currentAttendance[student] === true) {
            card.classList.add('present');
        } else if (currentAttendance[student] === false) {
            card.classList.add('absent');
        }
        
        card.onclick = () => toggleStudentStatus(student, card);
        
        card.innerHTML = `
            <div class="student-name">${student}</div>
            <div class="student-status">${getStatusIcon(currentAttendance[student])}</div>
        `;
        
        studentsGrid.appendChild(card);
    });
}

// Get status icon
function getStatusIcon(status) {
    if (status === true) return '✓';
    if (status === false) return '✕';
    return '—';
}

// Toggle student status
function toggleStudentStatus(student, card) {
    const currentStatus = currentAttendance[student];
    
    if (currentStatus === undefined) {
        currentAttendance[student] = true;
    } else if (currentStatus === true) {
        currentAttendance[student] = false;
    } else {
        delete currentAttendance[student];
    }
    
    card.className = 'student-card';
    if (currentAttendance[student] === true) {
        card.classList.add('present');
    } else if (currentAttendance[student] === false) {
        card.classList.add('absent');
    }
    
    card.querySelector('.student-status').textContent = getStatusIcon(currentAttendance[student]);
}

// Save attendance
async function saveAttendance() {
    const date = document.getElementById('attendanceDate').value;
    if (!date) {
        alert('من فضلك اختر التاريخ');
        return;
    }
    
    const data = await getData();
    data.attendance[date] = currentAttendance;
    
    await saveData(data);
    showMessage('تم حفظ الحضور بنجاح! ✓');
}

// Render Full History
async function renderFullHistory() {
    const data = await getData();
    const dates = Object.keys(data.attendance).sort().reverse();
    
    // Clear search
    const searchInput = document.getElementById('historySearch');
    if (searchInput) searchInput.value = '';
    
    if (dates.length === 0) {
        document.getElementById('historyTable').innerHTML = '<p style="text-align: center; color: var(--text-secondary);">لا توجد بيانات حضور بعد</p>';
        return;
    }
    
    let html = '<table><thead><tr>';
    html += '<th>الاسم</th>';
    
    dates.forEach(date => {
        html += `<th>${formatDate(date)}</th>`;
    });
    
    html += '</tr></thead><tbody>';
    
    data.students.forEach(student => {
        html += '<tr>';
        html += `<td class="name-column">${student}</td>`;
        
        dates.forEach(date => {
            const attended = data.attendance[date]?.[student];
            const icon = attended === true ? '<span class="status-icon present">✓</span>' : 
                        attended === false ? '<span class="status-icon absent">✕</span>' : 
                        '<span style="color: var(--text-tertiary)">—</span>';
            html += `<td>${icon}</td>`;
        });
        
        html += '</tr>';
    });
    
    html += '</tbody></table>';
    document.getElementById('historyTable').innerHTML = html;
}

// Render Monthly Summary
async function renderMonthlySummary() {
    const data = await getData();
    const dates = Object.keys(data.attendance).sort();
    
    if (dates.length === 0) {
        document.getElementById('monthlyContent').innerHTML = '<p style="text-align: center; color: var(--text-secondary);">لا توجد بيانات حضور بعد</p>';
        return;
    }
    
    const months = {};
    dates.forEach(date => {
        const d = new Date(date);
        const monthYear = `${d.getFullYear()}-${d.getMonth()}`;
        if (!months[monthYear]) {
            months[monthYear] = {
                year: d.getFullYear(),
                month: d.getMonth(),
                dates: []
            };
        }
        months[monthYear].dates.push(date);
    });
    
    let html = '';
    Object.values(months).reverse().forEach(monthData => {
        html += `<div style="margin-bottom: 40px;">`;
        html += `<h3 style="color: var(--primary-color); margin-bottom: 16px;">${getMonthName(monthData.month)} ${monthData.year}</h3>`;
        
        const stats = calculateMonthStats(data, monthData.dates);
        
        html += '<div class="stats-grid">';
        html += `<div class="stat-card"><div class="stat-value">${stats.sessions}</div><div class="stat-label">جلسات</div></div>`;
        html += `<div class="stat-card"><div class="stat-value">${stats.avgAttendance}%</div><div class="stat-label">متوسط الحضور</div></div>`;
        html += `<div class="stat-card"><div class="stat-value">${stats.totalPresent}</div><div class="stat-label">إجمالي الحضور</div></div>`;
        html += '</div>';
        
        html += '<div class="table-container"><table><thead><tr>';
        html += '<th>الاسم</th><th>الحضور</th><th>الغياب</th><th>النسبة</th>';
        html += '</tr></thead><tbody>';
        
        data.students.forEach(student => {
            const studentStats = calculateStudentStats(data, student, monthData.dates);
            html += '<tr>';
            html += `<td class="name-column">${student}</td>`;
            html += `<td><span class="status-icon present">${studentStats.present}</span></td>`;
            html += `<td><span class="status-icon absent">${studentStats.absent}</span></td>`;
            html += `<td><strong>${studentStats.percentage}%</strong></td>`;
            html += '</tr>';
        });
        
        html += '</tbody></table></div></div>';
    });
    
    document.getElementById('monthlyContent').innerHTML = html;
}

// Calculate month statistics
function calculateMonthStats(data, dates) {
    let totalPresent = 0;
    let totalRecorded = 0;
    
    dates.forEach(date => {
        Object.values(data.attendance[date] || {}).forEach(status => {
            if (status === true) totalPresent++;
            if (status !== undefined) totalRecorded++;
        });
    });
    
    return {
        sessions: dates.length,
        totalPresent: totalPresent,
        avgAttendance: totalRecorded > 0 ? Math.round((totalPresent / totalRecorded) * 100) : 0
    };
}

// Calculate student statistics
function calculateStudentStats(data, student, dates) {
    let present = 0;
    let absent = 0;
    
    dates.forEach(date => {
        const status = data.attendance[date]?.[student];
        if (status === true) present++;
        if (status === false) absent++;
    });
    
    const total = present + absent;
    const percentage = total > 0 ? Math.round((present / total) * 100) : 0;
    
    return { present, absent, percentage };
}

// Render Ranking
async function renderRanking() {
    const data = await getData();
    const dates = Object.keys(data.attendance);
    
    // Clear search
    const searchInput = document.getElementById('rankingSearch');
    if (searchInput) searchInput.value = '';
    
    if (dates.length === 0) {
        document.getElementById('rankingContent').innerHTML = '<p style="text-align: center; color: var(--text-secondary);">لا توجد بيانات حضور بعد</p>';
        return;
    }
    
    const rankings = data.students.map(student => {
        const stats = calculateStudentStats(data, student, dates);
        return {
            name: student,
            ...stats,
            total: stats.present + stats.absent
        };
    }).filter(s => s.total > 0).sort((a, b) => b.percentage - a.percentage);
    
    let html = '<div class="table-container"><table><thead><tr>';
    html += '<th>الترتيب</th><th>الاسم</th><th>الحضور</th><th>الغياب</th><th>النسبة</th>';
    html += '</tr></thead><tbody>';
    
    rankings.forEach((student, index) => {
        html += '<tr>';
        html += `<td><strong>${index + 1}</strong></td>`;
        html += `<td class="name-column">${student.name}</td>`;
        html += `<td><span class="status-icon present">${student.present}</span></td>`;
        html += `<td><span class="status-icon absent">${student.absent}</span></td>`;
        html += `<td><strong style="color: var(--primary-color)">${student.percentage}%</strong></td>`;
        html += '</tr>';
    });
    
    html += '</tbody></table></div>';
    document.getElementById('rankingContent').innerHTML = html;
}

// Initialize on page load
window.addEventListener('load', async () => {
    await initializeData();
    await renderAddAttendance();
});
