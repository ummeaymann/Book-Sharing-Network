
Overview

Book Sharing Network is a comprehensive full-stack application designed to help users manage their personal book collections while engaging with other book lovers. It features a wide range of functionalities, including user registration, secure email validation, book management (creation, updating, sharing, and archiving), borrowing books with availability checks, and handling book returns. Additionally, the system ensures data security with JWT tokens and adheres to REST API best practices. The backend is powered by Spring Boot 3 and Spring Security 6, while the frontend utilizes Angular and Bootstrap for the user interface.

Features

User Registration: Users can create new accounts.

Email Validation: Account activation is handled via a secure email validation code.

User Authentication: Registered users can log in securely.

Book Management: Users can add, edit, share, and archive books in their collection.

Book Borrowing: The app checks the availability of books for borrowing.
Book Returning: Borrowed books can be returned by users.

Book Return Approval: A mechanism to approve returned books.

Class Diagram
![image](https://github.com/user-attachments/assets/92ae8491-0600-465b-bdb4-29c5da6adb4e)



Technologies Used
Backend

Spring Boot 3: Framework for building the backend services.

Spring Security 6: Provides authentication and authorization.

JWT Token Authentication: Used for secure user authentication.

Spring Data JPA: For database interactions with JPA repositories.

OpenAPI and Swagger UI: API documentation tools.

Docker: Containerization for deploying services.


Frontend
Angular: Framework for building the user interface.

Component-Based Architecture: Used for creating reusable UI components.

Lazy Loading: For optimizing the loading time of the application.

Authentication Guard: Protects routes requiring authentication.

OpenAPI Generator for Angular: Automatically generates Angular services based on the OpenAPI spec.

Bootstrap: CSS framework for responsive and modern design.

Learning Objectives
By following this project, participants will learn to:

Design class diagrams based on business requirements.

Implement a mono repo architecture for managing both frontend and backend.

Secure applications using JWT tokens with Spring Security.

Handle user registration and email validation.

Use inheritance and polymorphism in Spring Data JPA.

Develop the service layer and handle exceptions.

Manage pagination and RESTful API best practices.

Use Spring Profiles to manage different environments.

Document APIs with OpenAPI and Swagger UI.

Implement business logic and handle exceptions effectively.



