const container = document.querySelector('.container');
async function getCard() {
  const endpoint = "https://fakestoreapi.com/products";
  const res = await fetch(endpoint);
  const data = await res.json();

  data.forEach(element => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${element.image}" alt="">
      <p class="title">${element.title}</p>
      <p class="description">${element.description.length > 20 ? element.description.slice(0, 20) + '...' : element.description}</p>
      <p class="price">${element.price}</p>
      <button>Click to buy</button>
    `;
    container.appendChild(card);
  });
}

window.onload = () => getCard();
