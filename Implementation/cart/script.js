const removeButtons = document.querySelectorAll(".remove");
const quantityInputs = document.querySelectorAll('input[type="number"]');

// Remove item from cart
removeButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const row = this.parentNode.parentNode;
    row.parentNode.removeChild(row);
    updateCartTotal();
  });
});

// Update cart total when quantity is changed
quantityInputs.forEach(function (input) {
  input.addEventListener("change", function () {
    updateCartTotal();
  });
});

// Update cart total
function updateCartTotal() {
  const cartRows = document.querySelectorAll("tbody tr");
  let total = 0;
  cartRows.forEach(function (row) {
    const price = row.querySelector("td:nth-child(2)").textContent;
    const quantity = row.querySelector('input[type="number"]').value;
    const rowTotal = parseFloat(price) * quantity;
    row.querySelector("td:nth-child(4)").textContent =
      "$" + rowTotal.toFixed(2);
    total += rowTotal;
  });
  document.querySelector("tfoot td:last-child").textContent =
    "$" + total.toFixed(2);
}
