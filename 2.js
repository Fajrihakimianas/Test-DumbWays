function filterArr() {
    var a = [
        "apa",
        "saya",
        "anda",
        "kamu",
        "halo"
    ];

    var b = [
        "apa yang anda lakukan?", 
        "apa selamat pagi", 
        "kamu ternyata cantik juga ya", 
        "yukk belajar javascript", 
        "kamu itu adalah kebanggaan saya",
        "music hari ini yang akan di putar oleh gabut FM apa ya?"
    ];

    var huruf = "i";
    
    let jumlah = 0
    let arrOutput = []
    
    for(let i=0; i < a.length; i++){

        for(let y=0; y < b.length; y++){

            let arrB = b[y].split(' ') // ['apa', 'yang', 'anda', 'lakukan']

            for(let j = 0; j < arrB.length; j++){

                if(a[i] == arrB[j]){
                    jumlah++
                }
            }

            // if(arrB.includes(a[i])){
            //     jumlah++
            // }

            let kata = a[i].toString()

            if(y == b.length-1){
                arrOutput.push({kata, jumlah})
                jumlah = 0
            }
        }
    }
    
    console.log(arrOutput)
};

filterArr()