function display(num) {
    document.getElementById('result').value += num;
}

function clearLastCharacter() {
    const result = document.getElementById('result');
    result.value = result.value.slice(0, -1);
}

function all_clear() {
    document.getElementById('result').value = '';
}

function calc() {
    const result = document.getElementById('result');
    try {
        result.value = math.evaluate(result.value);
    } catch {
        result.value = 'Erreur';
    }
}