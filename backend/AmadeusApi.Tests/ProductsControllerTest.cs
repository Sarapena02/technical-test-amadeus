using Xunit;
using AmadeusApi.Controller;
using AmadeusApi.Data;
using AmadeusApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;

namespace AmadeusApi.Tests
{
    public class ProductsControllerTest
    {
        private ProductDbContext GetDbContext()
        {
            var options = new DbContextOptionsBuilder<ProductDbContext>()
                .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString()) // DB aislada
                .Options;

            return new ProductDbContext(options);
        }

        [Fact]
        public void GetAll_ReturnsOkResult()
        {
            // Arrange
            var context = GetDbContext();
            context.Products.Add(new Product
            {
                Name = "Laptop",
                Price = 1000,
                Stock = 5,
                Category = "Tech",
                Brand = "Asus",
                SKU = "ABC123",
                IsActive = true,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            });
            context.SaveChanges();

            var controller = new ProductsController(context);

            // Act
            var result = controller.GetAll();

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result);
            var products = Assert.IsAssignableFrom<IEnumerable<Product>>(okResult.Value);
            Assert.Single(products);
        }

        [Fact]
        public void GetById_ReturnsNotFound_WhenProductDoesNotExist()
        {
            // Arrange
            var context = GetDbContext();
            var controller = new ProductsController(context);

            // Act
            var result = controller.GetById(999);

            // Assert
            Assert.IsType<NotFoundResult>(result);
        }
    }
}
