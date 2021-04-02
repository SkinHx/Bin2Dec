function converter() {
    var bin = document.getElementById("bin_input").value;
    let dec = 0;
    
    bin.split('').map((char) => {
        if(char !== '0' && char !== '1')  {
            return alert("Please, enter a binary number!");
        }
    });
    
    if(bin == '') {
        alert("Please, enter a binary number!");
    } else {
        for (var i = bin.length - 1; i >= 0; i--) {
            dec += parseInt(bin[i]) * Math.pow(2, bin.length - 1 - i);
        }
        document.getElementById("dec_input").value = dec;
        return true;
    }
}

// binary.split('').map((char) => {
//     if (char !== '0' && char !== '1') return alert('Please, enter a binary number');
// });