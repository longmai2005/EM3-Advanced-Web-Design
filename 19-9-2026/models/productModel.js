let products = [
  { id: 1, name: 'Laptop', price: 1500, image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500' },
  { id: 2, name: 'Mouse', price: 50, image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500' },
  { id: 3, name: 'Keyboard', price: 100, image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500' }
];

module.exports = {
  getAll() {
    return products;
  },

  getById(id) {
    return products.find(product => product.id === Number(id));
  },

  add(product) {
    const newId = products.length
      ? Math.max(...products.map(product => product.id)) + 1
      : 1;

    products.push({
      id: newId,
      ...product
    });
  }
};