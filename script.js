document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item');

    items.forEach(function(item) {
        const addButton = item.querySelector('.add');
        const removeButton = item.querySelector('.remove');
        const quantityElement = item.querySelector('.quantity');
        
        let quantity = 0;

        addButton.addEventListener('click', function() {
            quantity++;
            quantityElement.textContent = quantity;
            updateTotal();
        });

        removeButton.addEventListener('click', function() {
            if (quantity > 0) {
                quantity--;
                quantityElement.textContent = quantity;
                updateTotal();
            }
        });
    });

    function updateTotal() {
        const quantities = document.querySelectorAll('.quantity');
        let total = 0;

        quantities.forEach(function(quantity) {
            total += parseInt(quantity.textContent);
        });

        document.getElementById('total').textContent = 'Total: ' + total;
    }
});