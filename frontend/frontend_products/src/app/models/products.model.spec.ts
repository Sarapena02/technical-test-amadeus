import { Products } from './products.model';

describe('Products', () => {
  it('should create an instance', () => {
    const product: Products = {
      name: 'Test',
      description: 'This is a sample product',
      price: 100,
      category: 'Sample Category',
      isActive: true,
      stock: 50,
      brand: 'Sample Brand',
      sku: 'SKU12345'
    };

    expect(product).toBeTruthy();
  });
});
