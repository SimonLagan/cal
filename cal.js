function valor(x) {
    document.getElementById('display').value += x;
    
}

function borrardisplay(y) {
    document.getElementById('display').value = y;
    
}

function cal_res() {
    var resul = eval(document.getElementById('display').value);
    document.getElementById('display').value = resul;
    
}