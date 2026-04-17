function donustur() {
    const deger = parseFloat(document.getElementById('birimDeger').value);
    const tip = document.getElementById('donusumTipi').value;
    let sonuc = 0;
    let birim = "";

    if(isNaN(deger)) {
        alert("Lütfen geçerli bir sayı giriniz!");
        return;
    }

    switch(tip) {
        case "c2f": 
            sonuc = (deger * 9/5) + 32; 
            birim = "°F"; 
            break;
        case "f2c": 
            sonuc = (deger - 32) * 5/9; 
            birim = "°C"; 
            break;
        case "m2k": 
            sonuc = deger / 1000; 
            birim = "km"; 
            break;
        case "k2g": 
            sonuc = deger * 1000; 
            birim = "g"; 
            break;
        default:
            alert("Hatalı seçim!");
            return;
    }

    const sonucGosterge = document.getElementById('resSonucText');
    sonucGosterge.innerText = "Sonuç: " + sonuc.toLocaleString() + " " + birim;
    
    document.getElementById('birimSonuc').style.display = "block";
}