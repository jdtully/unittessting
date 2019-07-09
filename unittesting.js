if (
  orderTotal({
    items: [
      { name: "dragon food", price: 8 },
      { name: "dragon cage (small)", price: 800 }
    ]
  }) != 808
) {
  throw new Error("check fail: happy1");
}
if (
  orderTotal({
    items: [
      { name: "dragon food", price: 20 },
      { name: "dragon cage (small)", price: 40 }
    ]
  }) !== 60
) {
  throw new Error("error2");
}

function orderTotal(order) {
  return order.items.reduce((prev, cur) => cur.price + prev, 0);
}
