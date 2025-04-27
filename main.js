function generuj(event) {
    event.preventDefault();

    const x = parseInt(document.getElementById('x').value);
    const y = parseInt(document.getElementById('y').value);
    const container = document.getElementById('checkboxContainer');

    container.innerHTML = '';

    const ekran = document.createElement('div');
    ekran.classList.add('ekran');
    ekran.textContent = 'EKRAN';
    container.appendChild(ekran);

    for (let row = 0; row < y; row++) {
        const rzad = document.createElement('div');
        rzad.classList.add('rzad');
        if (row % 2 === 1) {
            rzad.classList.add('przesuniety');
        }

        const rowLabel = document.createElement('span');
        rowLabel.textContent = `Rzad ${row + 1}: `;
        rowLabel.classList.add('row-label');
        rzad.appendChild(rowLabel);

        for (let col = 0; col < x; col++) {
            const label = document.createElement('label');
            label.classList.add('miejsce-label');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.dataset.seat = `${row + 1}/${col + 1}`;

            const seatNumber = document.createElement('span');
            seatNumber.textContent = `${row + 1}/${col + 1}`;

            label.appendChild(checkbox);
            label.appendChild(seatNumber);

            rzad.appendChild(label);
        }

        container.appendChild(rzad);
    }
}

function policzZaznaczone() {
    const checkboxes = document.querySelectorAll('#checkboxContainer input[type="checkbox"]');
    const biletyContainer = document.getElementById('biletyContainer');
    biletyContainer.innerHTML = '';

    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            const label = document.createElement('label');
            label.textContent = `Miejsce ${checkbox.dataset.seat}: `;

            const select = document.createElement('select');
            select.innerHTML = `
                <option value="normalny">Normalny (30zł)</option>
                <option value="ulgowy">Ulgowy (25zł)</option>
            `;
            select.dataset.seat = checkbox.dataset.seat;

            biletyContainer.appendChild(label);
            biletyContainer.appendChild(select);
            biletyContainer.appendChild(document.createElement('br'));
        }
    });
}

function obliczCene() {
    const bilety = document.querySelectorAll('#biletyContainer select');
    let suma = 0;

    bilety.forEach(function(select) {
        if (select.value === 'normalny') {
            suma += 30;
        } else if (select.value === 'ulgowy') {
            suma += 25;
        }
    });

    document.getElementById('wynik').textContent = `Łączna kwota do zapłaty: ${suma} zł`;
}