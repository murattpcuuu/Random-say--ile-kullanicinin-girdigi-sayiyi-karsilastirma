// const brandom = document.getElementById("brandom");  // Bilgisayarın sayısının yazılaçağı yer
// const ktahmin = document.getElementById("ktahmin"); // Kullanıcı sayısının yazılacağı yer
// const input = document.getElementById("input");   // kullanıcının sayı girişi yapacağı yer 
// const id = document.getElementById("id"); // tekrar deneyiniz veya tebrikler yazacak yer

const button = document.getElementById("gönder"); // butona tıkladındığında sayıları karılaştıracak yer 


// let bilSayı = Math.floor(Math.random() * 10) + 1;
// let kSayı = 0;



button.addEventListener("click", () =>{

    
    let bilSayı,kSayı;

    bilSayı = Math.floor(Math.random() * 100) + 1;

    kSayı = Number(document.getElementById("input").value);

    // console.log(kSayı , bilSayı)

    if(kSayı === ""){
        document.getElementById("id").innerHTML = "Lütfen bir Sayı giriniz..."
    }
    else if(bilSayı > kSayı){

        document.getElementById("id").innerHTML = "Tebrikler";

    } else if(bilSayı === kSayı) {
    

        document.getElementById("id").innerHTML = "Sayılar birbirine eşittir."

    }else{
        document.getElementById("id").innerHTML = `${kSayı} sayısı bilgisayardan gelen ${bilSayı} sayısından daha büyüktür.` 
    }

    document.getElementById("ktahmin").innerHTML = kSayı;
    document.getElementById("brandom").innerHTML = bilSayı;

})

