const getHole = (index => {
    return document.getElementById(`hole${index}`);
})

const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

for (let i = 1; i < 10; i++) {
    let hole = getHole(i);
    hole.onclick = () => {
        if (hole.classList.contains('hole_has-mole')) dead.textContent = Number(dead.textContent) + 1
        else lost.textContent = Number(lost.textContent) + 1;

        if (Number(dead.textContent) === 10) {
            alert('ПОБЕДА !!!');
            window.location.reload(true);
        }
        if (Number(lost.textContent) === 5) {
            alert('Вы проиграли :( !!!');
            window.location.reload(true);
        }
        
    }
}
