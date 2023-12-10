var cevaplar = [
  { cevap: "Abicim bugün pazar ya! Biraz insaf! Git yat!" },
  { cevap: "Bu saatte mi bunu öğrenmek istiyorsun yani?" },
  { cevap: "Sen de Google'layacaksın bende abicim. Hadi yorma beni, kendin arat." },
];

var cevaplarNasilsin = [
  { cevap: "İyiyim çok şükür sen nasılsın?" },
];

var cevapMerhaba = [
  { cevap: "Sana da merhaba abicim." },
];

function sorgula() {
  var sorgu = document.getElementById("sorguIcerigi").value.trim();

  console.log(sorgu);

  var sorguSayisi = Math.floor(Math.random() * 10);

  console.log(sorguSayisi);

  if (sorgu == "merhaba" || sorgu == "Merhaba" || sorgu == "MERHABA" || sorgu == "selam" || sorgu == "SELAM") {
      document.getElementById("sorguYazilacakAlan").value = sorgu;
      document.getElementById("cevapYazilacakAlan").value = cevapMerhaba[0].cevap;
  } else if (sorgu == "nasılsın" || sorgu == "nasılsın?" || sorgu == "naber" || sorgu == "naber?" || sorgu == "napıyon" || sorgu == "napıyon?") {
      document.getElementById("sorguYazilacakAlan").value = sorgu;
      document.getElementById("cevapYazilacakAlan").value = cevaplarNasilsin[0].cevap;
  } else {
      if (sorgu !== "") {
    if (sorguSayisi >= 1 && sorguSayisi <= 3) {
      document.getElementById("sorguYazilacakAlan").value = sorgu;
      document.getElementById("cevapYazilacakAlan").value = cevaplar[0].cevap;
    } else if (sorguSayisi >= 4 && sorguSayisi <= 6) {
      document.getElementById("sorguYazilacakAlan").value = sorgu;
      document.getElementById("cevapYazilacakAlan").value = cevaplar[1].cevap;
    } else {
      document.getElementById("sorguYazilacakAlan").value = sorgu;
      document.getElementById("cevapYazilacakAlan").value = cevaplar[2].cevap;
    }
  } else {
    alert("Bir şey yazmadan nasıl cevap vermemi bekleyebiliyorsun ki? Hayret bir şey ya! Bir şeyler yaz şuraya!");
  }
  }

}
