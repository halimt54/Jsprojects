function geridonus() {
    location.href = 'index.html';
}

var formGiris = document.forms["girisFormu"];  // form seçimi
var eposta = formGiris.eposta;   // eposta alanı seçimi
var sifre = formGiris["sifre"];  // sifre alanı seçimi

formGiris.onsubmit = function () {
    if (eposta.value != "" && sifre.value != "") {
        alert(eposta.value);  // eposta alanı value özelliği
        alert(sifre.value);   // sifre alanı value özelliği
    } else {
        alert("Tüm alanları doldurun !");
        return false;  // form gönderimini iptal et
    }
}

formGiris.onsubmit = function () {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(eposta.value)) {
        alert("Eposta Adresiniz : " + eposta.value);
    }
    else {
        alert("E Posta Adresiniz Yanlış ")
    return (false)
    }
    if (/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$/.test(sifre.value)) {
        alert("Şifreniz : " + sifre.value);  // sifre alanı value özelliği
    } else {
        alert("Şifreniz rakam harf ve özel karakter içermeli ");
        return false;  // form gönderimini iptal et
    }
    
}



