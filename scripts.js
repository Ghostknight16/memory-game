const cards = document.querySelectorAll('.memory-card')

let hasFippedCard = false;
let firstCard, secondCard;
function flipCard() {
    this.classList.add('flip');
}
if (!hasFlippedCard) {
    hasFippedCard = true;
    firstCard = this;
}



cards.forEach(card => card.addEventListener('click', flipCard));

