function headerSelection(headerChoice){
   
    if(headerChoice === 'hakkında'){
        
      const paragrafElement = document.querySelector(`.text-screen`);
      paragrafElement.innerHTML = ` Yeni adı Uluçayır Mahallenin adı, 1928 yılı kayıtlarında Arabo olup, Kürtçede "erebo" sözcüğü "Arapköy" anlamına gelmektediR. Uluçayır, Erzurum ilinin Hınıs ilçesine bağlı bir kırsal mahalledir Mahalle, Erzurum il merkezine 169 km, Hınıs ilçe merkezine 19 km uzaklıktadır. Mahalle, Hınıs'ın güneydoğusunda olup, 6,7 km.'lik bir köy yoluyla, 25.50 numaralı il yoluna Halilçavuş Mahalle si'nde ulaşmaktadır.`;
      

    } else if (headerChoice = 'tarihce') {

      const paragrafElement = document.querySelector(`.text-screen`);
      paragrafElement.innerHTML = `Tarihçe
      Mahallenin eski adı, 1928 yılı kayıtlarında Arabo olup, Kürtçede "erebo" sözcüğü "Arapköy" anlamına gelmektedir.[4] 1993 yılında Büyükşehir olan Erzurum’da, 2012 yılında 6360 Sayılı Yasa ile, tüm köylerin tüzel kişiliği kaldırılmıştır. Bu köy de Hınıs Belediyesi’nin bir mahallesi olmuştur.[5]

      .`;

    }
  }