using Microsoft.AspNetCore.Mvc;
using AmadeusApi.Models;
using AmadeusApi.Data;

namespace AmadeusApi.Controller
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly ProductDbContext _context;

      
        public ProductsController(ProductDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var products = _context.Products.ToList();
            return Ok(products); 
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var product = _context.Products.FirstOrDefault(p => p.Id == id);
            if (product == null)
            {
                return NotFound();
            }
            return Ok(product);
        }

        [HttpPost]
        public IActionResult Create(Product newProduct)
        {
            newProduct.CreatedAt = DateTime.UtcNow;
            newProduct.UpdatedAt = DateTime.UtcNow;

            _context.Products.Add(newProduct);
            _context.SaveChanges();

            return CreatedAtAction(
                nameof(GetById),
                new { id = newProduct.Id },
                newProduct
            );
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, Product updateProduct)
        {
            var product = _context.Products.FirstOrDefault(p => p.Id == id);
            if (product == null)
            {
                return NotFound();
            }

            product.Name = updateProduct.Name;
            product.Description = updateProduct.Description;
            product.Category = updateProduct.Category;
            product.Brand = updateProduct.Brand;
            product.Price = updateProduct.Price;
            product.IsActive = updateProduct.IsActive;
            product.Stock = updateProduct.Stock;
            product.SKU = updateProduct.SKU;
            product.UpdatedAt = DateTime.UtcNow;

            _context.SaveChanges();
            return Ok(product);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var product = _context.Products.FirstOrDefault(p => p.Id == id);
            if (product == null)
            {
                return NotFound();
            }

            _context.Products.Remove(product);
            _context.SaveChanges();

            return NoContent();
        }
    }
}
