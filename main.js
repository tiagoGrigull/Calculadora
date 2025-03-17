function botao (value) {
    document.getElementById('display').value += value;
}

function LimparTela() {
    document.getElementById('display').value = '';
}

function Resultado() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (e) {
        alert('Expressão inválida');
        limparTela();
    }
}