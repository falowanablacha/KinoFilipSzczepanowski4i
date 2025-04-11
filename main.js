
function generuj(event) {
    event.preventDefault();

    const x = parseInt(document.getElementById('x').value);
    const y = parseInt(document.getElementById('y').value);
    const container = document.getElementById('checkboxContainer');

    container.innerHTML = '';

    for (let row = 0; row < y; row++) {
        for (let col = 0; col < x; col++) {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            container.appendChild(checkbox);
        }
        container.appendChild(document.createElement('br'));
    }
}



function policzZaznaczone() {
    const checkboxes = document.querySelectorAll('#checkboxContainer input[type="checkbox"]');
    let zaznaczone = 0;
    let ulgowy = 15;
    let normalny = 20;
    const pytanie = document.createElement('input')
    pytanie.type = "text"

    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            zaznaczone++;
        }
    });

    document.getElementById('wynik').textContent = 'Wybrano ' + zaznaczone + ' biletów';
}

