function Hitung(operator) {
    let form = document.getElementById('calcForm'),
    a1 = parseFloat(form.angka1.value),
    a2 = parseFloat(form.angka2.value),
    Hasil = form.hasil,
    total;

    if (isNaN(a1) || isNaN(a2)) {
        alert("inputan wajib angka!");
        return;

    }
    switch (operator) {
        case '+': total = a1 + a2; break;
        case '-': total = a1 - a2; break;
        case '*': total = a1 * a2; break;
        case '/': total = a1 / a2; break;
        case '^': total = Math.pow(a1, a2); break;
        default:
            break;
    }
    Hasil.value = total;
}