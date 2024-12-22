
let ekranAdı = ""






function fotografYukle() {
            
    document.querySelector('.js-foto-div')
    .innerHTML = `<img src="images/myphoto.jpg" alt="Kendi fotoğrafım" width="90%" height="90%">`;
}

function videoYukle() {
        
    document.querySelector('.js-foto-div')
    .innerHTML = `  <div style="padding-left: 5px; padding-rigt:5px" class="thumbnail-row">
      <video width="400px" height="540px" controls>
      <source src="Multimedia-Collection/video/IMG_2922.mp4">
      `
      ;




}

function Hakkında(){
    document.querySelector(`.js-foto-div`).innerHTML = `

    Yeni adı Uluçayır Mahallenin adı, 1928 yılı kayıtlarında Arabo olup, 
    
    Kürtçede "erebo" sözcüğü "Arapköy" anlamına gelmektediR. 
    
    Uluçayır, Erzurum ilinin Hınıs ilçesine bağlı bir kırsal mahalledir.
    
    Mahalle, Erzurum il merkezine 169 km, Hınıs ilçe merkezine 19 km uzaklıktadır. 
    
    Mahalle, Hınıs'ın güneydoğusunda olup, 6,7 km.'lik bir köy yoluyla, 25.50 numaralı 
    
    il yoluna Halilçavuş Mahalle si'nde ulaşmaktadır`;
    
}

function Tarihçe(){
    document.querySelector(`.js-foto-div`).innerHTML = `

    Tarihçe

    Mahallenin eski adı, 1928 yılı kayıtlarında Arabo olup, 

    Kürtçede "erebo" sözcüğü "Arapköy" anlamına gelmektedir.

    [ 1993 yılında Büyükşehir olan Erzurum’da, 2012 yılında 6360

    Sayılı Yasa ile, tüm köylerin tüzel kişiliği kaldırılmıştır. 

    Bu köy de Hınıs Belediyesi’nin bir mahallesi olmuştur.

    Mikail GÜLLÜ.`;
    
}

function Konum() {
        
        document.querySelector('.js-foto-div')
        .innerHTML = `<img src="images/Konum.png" alt="Kendi fotoğrafım" width="90%" height="90%">`;
    }

function Duyurular(){
    document.querySelector(`.js-foto-div`).innerHTML = ` 
    Duyuru:

    Köyde gerçekleşen son etkinlikler ve haberler:

    15 Ağustos: Geleneksel Hasat Şenliği yapıldı.

    10 Temmuz: Köy meydanındaki çeşme restore edildi.

    25 Haziran: Gençler arasında futbol turnuvası düzenlendi..  `;
    
}

function İletişim(){
    document.querySelector(`.js-foto-div`).innerHTML = `
    
    Web Sayfası Tasarımı :Mikail Güllü

  Telefon: +90 533 378 94 48

  Email: mikailgullu22@gmail.com

  Adres: İzmir.`;
    
}

function Haberler(){
    document.querySelector(`.js-foto-div`).innerHTML = `

    lçeye bağlı Uluçayır Mahallesi'nde yaşayan Ö.Ç'nin (22) eve gelmemesi üzerine ailesi, 

    İlçe Jandarma Karakol Komutanlığına giderek yardım istedi.

    Müracaat üzerine harekete geçen İl Jandarma Komutanlığı Göçmen Kaçakçılığı ve İnsan Ticareti Şubesi, 
    
    Jandarma Arama Kurtarma Timi, İz Takip ve Arama Kurtarma Köpek Timi, Jandarma Asayiş Komando Timi, 
    
    Asayiş Timi, JASAT unsuru ve güvenlik korucuları olmak üzere 56 personel ve AFAD ekiplerinin katılımıyla çalışma başlatıldı.

    Yapılan arama-tarama çalışmaları sonucu Ö.Ç, evinden 21 kilometre uzaklıktaki arazide bulundu.

    Sağlık kontrolünden geçirilen genç ailesine teslim edildi.`;
            
}
