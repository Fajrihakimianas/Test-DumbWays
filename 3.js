function hollow(rows){
    for(var i = 1; i <= rows; i++){
        for (var j = 1; j <= rows - i; j++){
            process.stdout.write(" ");
        }
        if(i == 1 || i == rows){
            for (j = 1; j <= rows; j++){
                process.stdout.write("*");
            }
        }
        else{
            for(j = 1; j <= rows; j++){
                if(j == 1 || j == rows) {
                    process.stdout.write("*")
                }
                else {
                    process.stdout.write(" ")
                }
            }
        }
        console.log()
    }
    
    for(var k = 1; k <= rows; k++){
        for(var z = 1; z < k; z++){
            process.stdout.write(" ")
        }
        if(k == 1 || k == rows) {
            for(z = 1; z <= rows; z++){
                process.stdout.write("*")
            }
        }
        else {
            process.stdout.write("*");

            for(z = 1; z <= 4; z++){
                process.stdout.write(" ")
            }

            process.stdout.write("*");
        }
        console.log()
    }
}

hollow(6);
console.log(hollow)