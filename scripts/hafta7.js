const themeBtn = document.getElementById('themeBtn');
const body = document.getElementById('mainBody');

themeBtn.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        themeBtn.textContent = 'Açık Temaya Geç';
        themeBtn.classList.replace('btn-outline-secondary', 'btn-outline-light');
    } else {
        themeBtn.textContent = 'Koyu Temaya Geç';
        themeBtn.classList.replace('btn-outline-light', 'btn-outline-secondary');
    }
});

const regForm = document.getElementById('registrationForm');
const resultArea = document.getElementById('resultArea');

regForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const dept = document.getElementById('department').value.trim();
    const grade = document.getElementById('grade').value;
    const session = document.getElementById('session').value;
    const mode = document.getElementById('mode').value;
    const msg = document.getElementById('message').value;

    if(!name || !email || !dept) {
        resultArea.style.display = 'block';
        resultArea.innerHTML = `
            <div class="alert alert-danger border-2 animate-fade-in shadow-sm">
                <h5 class="fw-bold">⚠️ Eksik Bilgi!</h5>
                <p class="mb-0">Lütfen Ad Soyad, E-posta ve Bölüm alanlarını boş bırakmayınız.</p>
            </div>
        `;
        resultArea.scrollIntoView({ behavior: 'smooth' });
        return;
    }

    resultArea.style.display = 'block';
    resultArea.innerHTML = `
        <div class="card bg-success bg-opacity-10 border-success border-2 rounded-4 animate-fade-in">
            <div class="card-body p-4">
                <h4 class="fw-bold text-success mb-3">✓ Başvuru Özeti Oluşturuldu</h4>
                <div class="row g-3">
                    <div class="col-sm-6"><p class="mb-1 fw-semibold">Katılımcı:</p><p class="opacity-75">${name}</p></div>
                    <div class="col-sm-6"><p class="mb-1 fw-semibold">E-posta:</p><p class="opacity-75">${email}</p></div>
                    <div class="col-sm-6"><p class="mb-1 fw-semibold">Bölüm / Sınıf:</p><p class="opacity-75">${dept} - ${grade}</p></div>
                    <div class="col-sm-6"><p class="mb-1 fw-semibold">Oturum / Tür:</p><p class="opacity-75">${session} (${mode})</p></div>
                    <div class="col-12"><p class="mb-1 fw-semibold">Mesajınız:</p><p class="opacity-75 italic">"${msg || 'Mesaj girilmedi.'}"</p></div>
                </div>
            </div>
        </div>
    `;

    resultArea.scrollIntoView({ behavior: 'smooth' });
});