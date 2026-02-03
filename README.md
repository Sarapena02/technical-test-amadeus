# Technical Test – Products Management Application

This repository contains the implementation of a technical test for a full-stack web application.
The goal of the project is to demonstrate the integration between an Angular frontend, a .NET Core REST API, and a relational database.

The application allows users to manage products through a simple CRUD interface, following good development practices, clean architecture, and clear separation of responsibilities.

---

## 🧩 Project Structure
/backend
└─ AmadeusApi → .NET Core REST API
└─ AmadeusApi.Tests → Unit tests (xUnit + InMemory DB)

/frontend
└─ products-app → Angular application

## 🚀 Technologies Used

### Backend
- .NET Core
- Entity Framework Core
- SQL Server
- Swagger (OpenAPI)
- xUnit + EF Core InMemory (unit testing)

### Frontend
- Angular (standalone components)
- TypeScript
- HTML / CSS
- Angular Forms

---

## ▶️ How to Run the Project

Each part of the project contains its own README with detailed setup instructions:

- 📘 Backend setup: `/backend/README.md`
- 🎨 Frontend setup: `/frontend/README.md`

---

## 📝 Notes

This project was developed as a technical assessment.
The focus is on clarity, maintainability, and correct architectural decisions rather than production-level complexity.
