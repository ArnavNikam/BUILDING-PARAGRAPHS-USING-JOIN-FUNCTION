var input = [];

function get_paragraph_1() {
    for (var i = 1 ; i <= 6 ; i++) {
        input.push(document.getElementById("input_Box_" + i).value);
    }
    console.log(input);

    document.getElementById("P_1").innerHTML = input.join (". ") 
}


function get_paragraph_2() {
    for (var i = 7 ; i <= 12 ; i++) {
        input.push(document.getElementById("input_Box_" + i).value);
    }
    console.log(input);

    document.getElementById("P_2").innerHTML = input.join (". ") 
}

