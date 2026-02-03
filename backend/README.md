# Products API – Backend

This project is a RESTful API developed with .NET Core.
It provides CRUD operations for managing products and exposes endpoints consumed by the Angular frontend.

---

## 🚀 Technologies

- .NET Core
- Entity Framework Core
- SQL Server
- Swagger (OpenAPI)
- xUnit
- EF Core InMemory (for unit testing)

---

## 📦 Features

- Create, read, update and delete products
- RESTful API design
- Swagger documentation
- Unit tests for controller logic
- Database persistence using Entity Framework Core

---

## ▶️ Running the API

1. Navigate to the backend folder:
   ```bash
   cd backend/AmadeusApi
   ```
2. Restore Dependencies
```bash
   dotnet restore
```
3. Run the API
   ```bash
   dotnet run
   ```
4. Open Swagger in Browser
```bash
   https://localhost:<port>/swagger
```
Usually the port is 5049

## 🧪 Running Unit Tests
The project includes a unit test project using xUnit and an InMemory database provider.

To execute tests:
```bash
   cd backend/AmadeusApi.Tests
   dotnet test
```

## 🗄️ Database

- SQL Server is used as the relational database.
- The database runs inside a Docker container using the official SQL Server image.
- Entity Framework Core is used for data access and persistence.
- The database schema includes all product-related fields required by the frontend.

Running the database in Docker ensures an isolated and reproducible development environment.


