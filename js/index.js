for (let i = 0; i < 5; i++) {
    const h1 = document.createElement('h1');
    document.body.appendChild(h1);
    h1.innerText = i+1;
    const hue = 100 + i*20;
    h1.style.backgroundColor = `hsl(${hue}, 50%, 80%)`
    h1.style.color = 'lightblue';
    h1.style.textAlign = 'center';
    h1.style.fontSize = `calc(16px + ${i * 10}%)`;
}

const container = document.createElement('div');
document.body.appendChild(container);
container.style.border = '1px solid';
container.style.height = '200px';
container.style.display = 'flex';
container.style.justifyContent = 'space-around';
container.style.alignItems = 'center';

for (let i = 1; i <= 3; i++) {
    const innerDiv = document.createElement('div');
    innerDiv.classList.add('innerDiv');
    innerDiv.innerText = `Child ${i}`

    container.appendChild(innerDiv);

    innerDiv.style.backgroundColor = 'purple';
}

//const first = [0, 1, 2, 3..]
//const second = [9, 8, 7..]
//const third = ['ett', 'två',...]
