import { addItem, order } from './order-data.mjs';

const {
  customer: { firstName, lastName },
  items,
} = order;
const [firstItem, ...remainingItems] = items;
const itemNames = items.map(({ name }) => name).join(', ');
const total = items.reduce((sum, { price }) => sum + price, 0);

function formatSummary(customerName, itemCount, names, amount, ...notes) {
  const noteText = notes.length > 0 ? `\nNotes: ${notes.join(', ')}` : '';
  return `Customer: ${customerName}
Items (${itemCount}): ${names}
Total: $${amount}${noteText}`;
}

console.log(
  formatSummary(
    `${firstName} ${lastName}`,
    items.length,
    itemNames,
    total,
    `First item: ${firstItem.name}`,
    `Remaining items: ${remainingItems.length}`,
  ),
);

const updatedOrder = addItem(order, { name: 'Highlighter', price: 3 });
console.log('\nUpdated order:');
console.log(
  formatSummary(
    `${firstName} ${lastName}`,
    updatedOrder.items.length,
    updatedOrder.items.map(({ name }) => name).join(', '),
    updatedOrder.items.reduce((sum, { price }) => sum + price, 0),
  ),
);
