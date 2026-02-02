using Microsoft.AspNetCore.Mvc;
using AmadeusApi.Models;

namespace AmadeusApi.Controller
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private static readonly List<Product> Products = new();

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(Products);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(string id)
        {
            var product = Products.FirstOrDefault(p => p.Id == id);
            if (product == null)
            {
                return NotFound();
            }
            return Ok(product);
        }

        [HttpPost]
        public IActionResult Create(Product newProduct)
        {
            newProduct.Id = Guid.NewGuid().ToString();
            newProduct.CreatedAt = DateTime.UtcNow;
            newProduct.UpdatedAt = DateTime.UtcNow;
            Products.Add(newProduct);

            return CreatedAtAction(nameof(GetById), new { id = newProduct.Id }, newProduct);
        }

        [HttpPut("{id}")]
        public IActionResult Update(string id, Product updateProduct)
        {
            var product = Products.FirstOrDefault(p => p.Id == id);
            if (product == null)
            {
                return NotFound();
            }

            product.Name = updateProduct.Name;
            product.Description = updateProduct.Description;
            product.Price = updateProduct.Price;
            product.Category = updateProduct.Category;
            product.IsActive = updateProduct.IsActive;
            product.Stock = updateProduct.Stock;
            product.UpdatedAt = DateTime.UtcNow;

            return Ok(product);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            var product = Products.FirstOrDefault(p => p.Id == id);
            if (product == null)
            {
                return NotFound();
            }

            Products.Remove(product);
            return NoContent();
        }


    }
}