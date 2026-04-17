window.onload = function() {
    document.getElementById('ogrenciAd').value = "";
    document.getElementById('vizeNot').value = "";
    document.getElementById('finalNot').value = "";
    document.getElementById('sonucAlani').style.display = "none";
};

function hesaplaNot() {
    const adInput = document.getElementById('ogrenciAd');
    const vizeInput = document.getElementById('vizeNot');
    const finalInput = document.getElementById('finalNot');
    const sonucDiv = document.getElementById('sonucAlani');

    const ad = adInput.value.trim();
    const vize = parseFloat(vizeInput.value);
    const final = parseFloat(finalInput.value);

    if (ad === "" || isNaN(vize) || isNaN(final)) {
        alert("Lütfen tüm alanları (Ad Soyad, Vize, Final) eksiksiz giriniz!");
        return;
    }

    if (vize < 0 || vize > 100 || final < 0 || final > 100) {
        alert("Notlar 0 ile 100 arasında olmalıdır!");
        return;
    }

    const ortalama = (vize * 0.4) + (final * 0.6);

    let harf = "";
    if (ortalama >= 90) harf = "AA";
    else if (ortalama >= 80) harf = "BA";
    else if (ortalama >= 70) harf = "BB";
    else if (ortalama >= 60) harf = "CB"; 
    else if (ortalama >= 50) harf = "CC";
    else if (ortalama >= 45) harf = "DC";
    else if (ortalama >= 40) harf = "DD";
    else harf = "FF";

    const durum = ortalama >= 50 ? "Geçti" : "Kaldı";
    const durumRenk = ortalama >= 50 ? "#2ecc71" : "#e74c3c";

    document.getElementById('resAd').innerText = ad;
    document.getElementById('resOrtalama').innerText = "Ortalama: " + ortalama.toFixed(2);
    document.getElementById('resHarf').innerText = "Harf Notu: " + harf;
    document.getElementById('resDurum').innerText = "Durum: " + durum;
    document.getElementById('resDurum').style.color = durumRenk;

    sonucDiv.style.display = "block";
}