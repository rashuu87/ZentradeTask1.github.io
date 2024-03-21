document.addEventListener("DOMContentLoaded", function() {
    fetchProducts();
});

async function fetchProducts() {
    const response = await fetch('https://s3.amazonaws.com/open-to-cors/assignment.json');
    const data = await response.json();
    const products = Object.values(data.products).sort((a, b) => b.popularity - a.popularity);
    displayProducts(products);
}

function displayProducts(products) {
    const container = document.getElementById('product-container');
    container.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        const title = document.createElement('div');
        title.className = 'product-title';
        title.textContent = product.title;

        const price = document.createElement('div');
        price.className = 'product-price';
        price.textContent = `Price: ${product.price}`;

        productCard.appendChild(title);
        productCard.appendChild(price);
        container.appendChild(productCard);
    });
}
