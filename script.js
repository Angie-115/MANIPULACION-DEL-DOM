
// Inicializar total del carrito
let total = 0;

// Función para agregar producto al carrito
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const price = parseInt(this.getAttribute('data-price'));
        const productName = this.parentElement.querySelector('h2').textContent;

        // Actualizar total del carrito
        total += price;
        document.getElementById('cart-total').textContent = total;

        // Agregar el producto a la lista del carrito en el DOM
        const cartItems = document.getElementById('cart-items');
        const productItem = document.createElement('p');
        productItem.textContent = `${productName} - $${price}`;
        cartItems.appendChild(productItem);
    });
});

// Aplicar descuento usando el valor del input
document.getElementById('apply-discount').addEventListener('click', function() {
    const discountCode = document.getElementById('discount-code').value;
    const loyaltyPoints = parseInt(document.getElementById('loyalty-points').value);

    // Validar si el código de descuento es correcto (ejemplo: "DESC10" = 10% de descuento)
    if (discountCode === 'DESC10') {
        total = total * 0.9;  // Aplica 10% de descuento
    }

    // Aplicar puntos de lealtad (ejemplo: cada punto resta $1 del total)
    total = total - loyaltyPoints;

    // Asegurarse de que el total no sea negativo
    if (total < 0) total = 0;

    // Actualizar el total en el DOM
    document.getElementById('cart-total').textContent = total.toFixed(2);
});
