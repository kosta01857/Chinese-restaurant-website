function fillOrders() {
  let storage = getStorage();
  if (!("cart" in storage)) {
    return;
  }
  let orders = JSON.parse(storage["cart"]);
  for (let i = 0; i < orders.length; i++) {
    let order = orders[i];
    let name = order["name"];
    let cnt = order["quantity"];
    let price = order["type"];
    price = parseInt(price);
    cnt = parseInt(cnt);
    price = price * cnt;

    // Generate unique IDs for each row and button
    let rowId = `row_${i}`;
    let buttonId = `button_${i}`;

    let html = `<tr id="${rowId}">
      <td>${name}</td>
      <td>$${price}</td>
      <td>${cnt}</td>
      <td><button id="${buttonId}" class="remove-button">&#128465;</button></td>
    </tr>`;
    $("tbody").append(html);

    // Attach event listener using closure
    $(`#${buttonId}`).on("click", (function(rowIndex) {
      return function() {
        $(`#row_${rowIndex}`).remove();
      };
    })(i));
  }
}
