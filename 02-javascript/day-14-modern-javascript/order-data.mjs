export const order = {
  customer: {
    firstName: 'Asha',
    lastName: 'Patel',
  },
  items: [
    { name: 'Notebook', price: 8 },
    { name: 'Pen set', price: 5 },
  ],
};

export function addItem(currentOrder, item) {
  return {
    ...currentOrder,
    items: [...currentOrder.items, item],
  };
}
