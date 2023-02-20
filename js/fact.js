var listFact = [
    "Слово курут происходит от тюркского прилагательного кыры, коро, или куру, что означает «сухой», так же, как катык происходит от прилагательного каты, у башкир слово катык происходит от глагола катыу (ҡатыу — заправлять, добавлять что-то в жидкую массу",
    "Курут был изобретён кочевыми народами Центральной Азии. Обычно представляет собой белые шарики (иногда приплюснутые) диаметром 2-5 см, иногда делаются в виде цилиндров",
    "Один шарик курта диаметром два сантиметра заменяет двухсотграммовый стакан молока",
    "Помимо кальция в курте много витамина А, который улучшает зрение, способствует росту человека, укреплению иммунитета"
]

const new_fact = document.getElementById("new_fact");
const fact = document.getElementById("fact");

var count = 0;

new_fact.addEventListener("pointerdown", function(){
    if (count != 4) {
        fact.textContent = listFact[count];
    } else {
        count = 0;
        fact.textContent = listFact[count];
    }
    count++;
})

if (count != 4) {
    fact.textContent = listFact[count];
} else {
    count = 0;
    fact.textContent = listFact[count];
}
count++;