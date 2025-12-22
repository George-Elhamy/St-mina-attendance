// Initial data from CSV
const initialData = {
    students: [
        "اندرو جرجس",
        "باتريك اشرف",
        "باتريك مايكل",
        "باتريك يوسف",
        "بافلي يوسف",
        "بيشوي عماد",
        "جورج ميلاد",
        "دانيال ايمن",
        "دانيال مينا",
        "زاخر موريح",
        "ستيفن زخاري",
        "ستيفن مينا",
        "كيرلس هاني",
        "ماثيو جون",
        "مارك باسم",
        "مايكل ماجد",
        "ميخائيل",
        "مينا مدحت",
        "يوساب امجد",
        "يوسف حشمت"
    ],
    attendance: {
        "2025-09-25": {
            "اندرو جرجس": true,
            "باتريك اشرف": true,
            "باتريك مايكل": false,
            "باتريك يوسف": true,
            "بافلي يوسف": false,
            "بيشوي عماد": false,
            "جورج ميلاد": true,
            "دانيال ايمن": true,
            "دانيال مينا": true,
            "زاخر موريح": true,
            "ستيفن زخاري": true,
            "ستيفن مينا": false,
            "كيرلس هاني": true,
            "ماثيو جون": true,
            "مارك باسم": true,
            "مايكل ماجد": true,
            "ميخائيل": true,
            "مينا مدحت": true,
            "يوساب امجد": true,
            "يوسف حشمت": true
        },
        "2025-10-02": {
            "اندرو جرجس": false,
            "باتريك اشرف": true,
            "باتريك مايكل": true,
            "باتريك يوسف": false,
            "بافلي يوسف": true,
            "بيشوي عماد": false,
            "جورج ميلاد": true,
            "دانيال ايمن": true,
            "دانيال مينا": true,
            "زاخر موريح": true,
            "ستيفن زخاري": false,
            "ستيفن مينا": false,
            "كيرلس هاني": false,
            "ماثيو جون": false,
            "مارك باسم": true,
            "مايكل ماجد": true,
            "ميخائيل": false,
            "مينا مدحت": true,
            "يوساب امجد": false,
            "يوسف حشمت": true
        },
        "2025-10-09": {
            "اندرو جرجس": false,
            "باتريك اشرف": true,
            "باتريك مايكل": false,
            "باتريك يوسف": false,
            "بافلي يوسف": false,
            "بيشوي عماد": true,
            "جورج ميلاد": true,
            "دانيال ايمن": true,
            "دانيال مينا": true,
            "زاخر موريح": false,
            "ستيفن زخاري": false,
            "ستيفن مينا": false,
            "كيرلس هاني": false,
            "ماثيو جون": true,
            "مارك باسم": true,
            "مايكل ماجد": true,
            "ميخائيل": false,
            "مينا مدحت": false,
            "يوساب امجد": false,
            "يوسف حشمت": true
        },
        "2025-10-16": {
            "اندرو جرجس": true,
            "باتريك اشرف": true,
            "باتريك مايكل": false,
            "باتريك يوسف": true,
            "بافلي يوسف": true,
            "بيشوي عماد": true,
            "جورج ميلاد": true,
            "دانيال ايمن": false,
            "دانيال مينا": true,
            "زاخر موريح": false,
            "ستيفن زخاري": true,
            "ستيفن مينا": false,
            "كيرلس هاني": true,
            "ماثيو جون": true,
            "مارك باسم": true,
            "مايكل ماجد": true,
            "ميخائيل": true,
            "مينا مدحت": false,
            "يوساب امجد": true,
            "يوسف حشمت": true
        },
        "2025-11-06": {
            "اندرو جرجس": true,
            "باتريك اشرف": true,
            "باتريك مايكل": true,
            "باتريك يوسف": false,
            "بافلي يوسف": true,
            "بيشوي عماد": false,
            "جورج ميلاد": true,
            "دانيال ايمن": false,
            "دانيال مينا": false,
            "زاخر موريح": false,
            "ستيفن زخاري": false,
            "ستيفن مينا": true,
            "كيرلس هاني": true,
            "ماثيو جون": true,
            "مارك باسم": true,
            "مايكل ماجد": false,
            "ميخائيل": false,
            "مينا مدحت": true,
            "يوساب امجد": false,
            "يوسف حشمت": true
        }
    }
};

// Firebase Data Management
let cachedData = null;

// Initialize data in Firestore if not exists
async function initializeData() {
    try {
        const docRef = db.collection('attendance').doc('data');
        const doc = await docRef.get();
        
        if (!doc.exists) {
            // First time setup - save initial data to Firestore
            await docRef.set(initialData);
            console.log('Initial data saved to Firebase');
        }
    } catch (error) {
        console.error('Error initializing data:', error);
        // Fallback to localStorage if Firebase fails
        if (!localStorage.getItem('attendanceData')) {
            localStorage.setItem('attendanceData', JSON.stringify(initialData));
        }
    }
}

// Get data from Firestore
async function getData() {
    try {
        const docRef = db.collection('attendance').doc('data');
        const doc = await docRef.get();
        
        if (doc.exists) {
            cachedData = doc.data();
            return cachedData;
        } else {
            return initialData;
        }
    } catch (error) {
        console.error('Error getting data:', error);
        // Fallback to localStorage
        const data = localStorage.getItem('attendanceData');
        return data ? JSON.parse(data) : initialData;
    }
}

// Save data to Firestore
async function saveData(data) {
    try {
        const docRef = db.collection('attendance').doc('data');
        await docRef.set(data);
        cachedData = data;
        console.log('Data saved to Firebase successfully');
        
        // Also save to localStorage as backup
        localStorage.setItem('attendanceData', JSON.stringify(data));
    } catch (error) {
        console.error('Error saving data:', error);
        // Fallback to localStorage
        localStorage.setItem('attendanceData', JSON.stringify(data));
        alert('تحذير: تم الحفظ محلياً فقط. تحقق من اتصال الإنترنت.');
    }
}

// Format date for display (Arabic)
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

// Show/Hide pages
function showPage(pageName) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Remove active class from all buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(pageName).classList.add('active');
    
    // Add active class to clicked button
    event.target.classList.add('active');
    
    // Load page content
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

// Render Full History Table
async function renderFullHistory() {
    const data = await getData();
    const dates = Object.keys(data.attendance).sort();
    
    let html = '<table><thead><tr>';
    html += '<th>الاسم</th>';
    
    // Add date columns (reversed for RTL)
    dates.forEach(date => {
        html += `<th>${formatDate(date)}</th>`;
    });
    
    html += '</tr></thead><tbody>';
    
    // Add student rows
    data.students.forEach(student => {
        html += '<tr>';
        html += `<td class="name-column">${student}</td>`;
        
        dates.forEach(date => {
            const attended = data.attendance[date][student];
            const icon = attended ? '<span class="present">✓</span>' : '<span class="absent">✕</span>';
            html += `<td>${icon}</td>`;
        });
        
        html += '</tr>';
    });
    
    html += '</tbody></table>';
    
    document.getElementById('historyTable').innerHTML = html;
}

// Render Monthly Summary
async function renderMonthlySummary(selectedMonth = null, selectedYear = null) {
    const data = await getData();
    const dates = Object.keys(data.attendance).sort();
    
    // Get unique months
    const months = {};
    dates.forEach(date => {
        const d = new Date(date);
        const monthYear = `${d.getFullYear()}-${d.getMonth()}`;
        if (!months[monthYear]) {
            months[monthYear] = {
                year: d.getFullYear(),
                month: d.getMonth(),
                label: `${getMonthName(d.getMonth())} ${d.getFullYear()}`
            };
        }
    });
    
    // Create filter buttons
    let filterHtml = '<button class="filter-btn ' + (selectedMonth === null ? 'active' : '') + '" onclick="renderMonthlySummary(null, null)">الكل</button>';
    Object.values(months).forEach(m => {
        const isActive = (selectedMonth === m.month && selectedYear === m.year);
        filterHtml += `<button class="filter-btn ${isActive ? 'active' : ''}" onclick="renderMonthlySummary(${m.month}, ${m.year})">${m.label}</button>`;
    });
    document.getElementById('monthFilters').innerHTML = filterHtml;
    
    // Calculate attendance counts
    const counts = {};
    data.students.forEach(student => {
        counts[student] = 0;
    });
    
    dates.forEach(date => {
        const d = new Date(date);
        // Filter by month if selected
        if (selectedMonth !== null && (d.getMonth() !== selectedMonth || d.getFullYear() !== selectedYear)) {
            return;
        }
        
        data.students.forEach(student => {
            if (data.attendance[date][student]) {
                counts[student]++;
            }
        });
    });
    
    // Sort by count (descending)
    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    
    // Render list
    let html = '';
    let displayRank = 1;
    let previousCount = null;
    
    sorted.forEach(([student, count], index) => {
        // Update rank only if count is different from previous
        if (previousCount !== null && count < previousCount) {
            displayRank++;
        }
        previousCount = count;
        
        const rankClass = displayRank === 1 ? 'gold' : displayRank === 2 ? 'silver' : displayRank === 3 ? 'bronze' : '';
        const countText = count === 1 ? 'مرة' : 'مرات';
        html += `
            <div class="rank-item">
                <div class="rank-number ${rankClass}">#${displayRank}</div>
                <div class="rank-name">${student}</div>
                <div class="rank-count">${count} ${countText}</div>
            </div>
        `;
    });
    
    document.getElementById('monthlySummary').innerHTML = html;
}

// Render Ranking Page
async function renderRanking() {
    const data = await getData();
    const dates = Object.keys(data.attendance).sort();
    
    // Set default date range (all dates)
    if (dates.length > 0) {
        document.getElementById('startDate').value = dates[0];
        document.getElementById('endDate').value = dates[dates.length - 1];
    }
    
    updateRanking();
}

// Update Ranking based on date range
async function updateRanking() {
    const data = await getData();
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    
    // Calculate attendance counts
    const counts = {};
    data.students.forEach(student => {
        counts[student] = 0;
    });
    
    Object.keys(data.attendance).forEach(date => {
        if (date >= startDate && date <= endDate) {
            data.students.forEach(student => {
                if (data.attendance[date][student]) {
                    counts[student]++;
                }
            });
        }
    });
    
    // Sort by count (descending)
    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    
    // Render list
    let html = '';
    let displayRank = 1;
    let previousCount = null;
    
    sorted.forEach(([student, count], index) => {
        // Update rank only if count is different from previous
        if (previousCount !== null && count < previousCount) {
            displayRank++;
        }
        previousCount = count;
        
        const rankClass = displayRank === 1 ? 'gold' : displayRank === 2 ? 'silver' : displayRank === 3 ? 'bronze' : '';
        const countText = count === 1 ? 'مرة' : 'مرات';
        html += `
            <div class="rank-item">
                <div class="rank-number ${rankClass}">#${displayRank}</div>
                <div class="rank-name">${student}</div>
                <div class="rank-count">${count} ${countText}</div>
            </div>
        `;
    });
    
    document.getElementById('rankingList').innerHTML = html;
}

// Render Add Attendance Page
async function renderAddAttendance() {
    const data = await getData();
    
    // Set today's date as default (or next Thursday)
    const today = new Date();
    document.getElementById('newAttendanceDate').value = today.toISOString().split('T')[0];
    
    // Render student checkboxes
    let html = '';
    data.students.forEach(student => {
        html += `
            <div class="student-item">
                <label>
                    <input type="checkbox" name="student" value="${student}">
                    <span>${student}</span>
                </label>
            </div>
        `;
    });
    
    document.getElementById('studentCheckboxes').innerHTML = html;
}

// Submit new attendance
async function submitAttendance() {
    const date = document.getElementById('newAttendanceDate').value;
    
    if (!date) {
        alert('الرجاء اختيار التاريخ');
        return;
    }
    
    const data = await getData();
    
    // Create new attendance record
    const newAttendance = {};
    data.students.forEach(student => {
        newAttendance[student] = false;
    });
    
    // Update with checked students
    const checkboxes = document.querySelectorAll('input[name="student"]:checked');
    checkboxes.forEach(checkbox => {
        newAttendance[checkbox.value] = true;
    });
    
    // Save to data
    data.attendance[date] = newAttendance;
    await saveData(data);
    
    // Show success message
    const successMsg = document.getElementById('successMessage');
    successMsg.classList.add('show');
    setTimeout(() => {
        successMsg.classList.remove('show');
    }, 3000);
    
    // Reset form
    renderAddAttendance();
}

// Initialize app
initializeData();
renderFullHistory();
