function toggleAccordion(id) {
    var item = document.getElementById(id);
    var content = item.querySelector('.accordion-content');
    var header = item.querySelector('.accordion-header');
    var symbol = item.querySelector('.toggle-symbol');

    if (content.classList.contains('show')) {
        content.classList.remove('show');
        item.classList.remove('active');
        symbol.textContent = '+';
    } else {
        content.classList.add('show');
        item.classList.add('active');
        symbol.textContent = '-';
    }
}


