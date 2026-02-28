E-Commerce Full Stack Application

A production-ready, full-featured e-commerce platform built with Java Spring Boot(backend) and React(frontend). Features secure JWT authentication, role-based access, Stripe payment integration, order management, and user profile handling.

Features
 Authentication & User Management
- User registration and login via AuthController with JWT token generation
- Token Validator Filter — validates JWT on every request before reaching controllers
- User Profile management — view and update profile (ProfileRequest / ProfileResponse DTOs)
- Structured user data handling via UserDTO

Address Management
- Users can save and manage delivery addresses via AddressDTO

Shopping
- Browse product catalog with search and filter
- Add to cart, update quantities, remove items (Cart.jsx)
- Persistent cart state managed via Auth Context (auth-context.jsx)

Payment (Stripe)
-  PaymentController  exposes secure payment endpoints
-  PaymentIntentRequestDTO  handles payment request data
-  IPaymentService / PaymentServiceImpl  — service layer for Stripe operations
-  StripeConfig  — centralized Stripe API key configuration via `application.properties`
- On successful payment, users are redirected to  OrderSuccess.jsx 

Order Management
-  OrderController  handles order placement and retrieval
-  Order.java / OrderItem.java  — JPA entities mapping orders and their line items
- Full service layer:  IOrderService / OrderServiceImpl  with supporting  OrderDTO 
-  schema.sql  — `order_items` table DDL for database initialization

  API Integration
-  api-client  — centralized Axios/fetch configuration for all frontend-backend communication

Security
- JWT-based stateless authentication
-  TokenValidatorFilter  intercepts and validates every request
- Role-based access control (USER / ADMIN) via Spring Security
-  ApplicationConstants  — centralized constants for JWT secrets, roles, and config keys
- Global exception handling via custom  Exception classes 

Admin Panel
- Add, update, delete products
- View and manage all orders and users

Tech Stack
| Layer | Technology |

| Backend | Java 17, Spring Boot 3.x, Spring Security, Spring Data JPA |
| Frontend | React (JSX, Hooks, Context API), HTML5, CSS3, JavaScript |
| Database | MySQL, Hibernate ORM |
| Authentication | JWT (JSON Web Tokens), Token Validator Filter |
| Payment | Stripe Payment Gateway (PaymentIntent API) |
| Cloud | AWS EC2 (hosting), AWS RDS (MySQL), AWS S3 (static assets) |
| Tools | Maven, Postman, Git, IntelliJ IDEA |



 Project Structure
```
E-commerce-apl-/
├── Backend/
│   └── src/main/java/com/ecommerce/
│       ├── controller/
│       │   ├── AuthController.java         # Registration, login, JWT generation
│       │   ├── PaymentController.java      # Stripe payment endpoints
│       │   └── OrderController.java        # Order placement and retrieval
│       ├── service/
│       │   ├── IPaymentService.java
│       │   ├── PaymentServiceImpl.java
│       │   ├── IOrderService.java
│       │   ├── OrderServiceImpl.java
│       │   └── ProfileServiceImpl.java
│       ├── dto/
│       │   ├── ProfileRequest.java
│       │   ├── ProfileResponse.java
│       │   ├── UserDTO.java
│       │   ├── AddressDTO.java
│       │   ├── PaymentIntentRequestDTO.java
│       │   └── OrderDTO.java
│       ├── model/
│       │   ├── Order.java
│       │   └── OrderItem.java
│       ├── security/
│       │   └── TokenValidatorFilter.java   # JWT validation on every request
│       ├── config/
│       │   ├── StripeConfig.java           # Stripe API configuration
│       │   └── ApplicationConstants.java  # App-wide constants
│       ├── exception/                      # Global exception handlers
│       └── resources/
│           ├── application.properties
│           └── schema.sql                  # order_items DDL
│
└── Frontend/
    └── src/
        ├── components/
        │   └── Cart.jsx
        ├── pages/
        │   ├── Profile.jsx
        │   └── OrderSuccess.jsx
        ├── context/
        │   └── auth-context.jsx            # Global auth state management
        ├── api/
        │   └── api-client.js               # Centralized API configuration
        └── main.jsx
```
 API Endpoints

 Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login and receive JWT token |

 Profile
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/profile` | Get logged-in user profile |
| PUT | `/api/profile` | Update profile and address |

Payment
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/payment/create-intent` | Create Stripe PaymentIntent |

Orders
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/orders` | Place a new order |
| GET | `/api/orders/my` | Get current user's orders |
| GET | `/api/admin/orders` | Get all orders (Admin only) |


 Database Schema (Key Tables)

- `users` — user credentials, roles, profile info
- `addresses` — delivery addresses linked to users
- `products` — product catalog
- `orders` — order records linked to users
- `order_items` — individual line items per order (defined in `schema.sql`)
- `cart` — active cart items per user

Getting Started

Prerequisites
- Java 17+
- Node.js 18+
- MySQL 8+
- Maven
- Stripe account (for API keys)

Backend Setup
bash
Clone the repository
git clone https://github.com/Nikicoder23/E-commerce-apl-.git
cd E-commerce-apl-/Backend

# Configure application.properties
spring.datasource.url=jdbc:mysql://localhost:3306/ecommerce_db
spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD

stripe.secret.key=YOUR_STRIPE_SECRET_KEY
jwt.secret=YOUR_JWT_SECRET

Run the application
mvn spring-boot:run


Frontend Setup
bash
cd ../Frontend

# Install dependencies
npm install

# Start the development server
npm start

App runs at `http://localhost:5183`

Key Environment Variables

properties
# Database
spring.datasource.url=jdbc:mysql://localhost:3306/ecommerce_db
spring.datasource.username=root
spring.datasource.password=yourpassword

# JWT
jwt.secret=your_jwt_secret_key
jwt.expiration=86400000

# Stripe
stripe.secret.key=sk_test_xxxx


Author

Nikitha R   
Associate Software Engineer | Java Backend & Full Stack Developer  
📧 nikithar2319@gmail.com  
🔗 [LinkedIn](https://linkedin.com/in/nikitha) | [GitHub](https://github.com/Nikicoder23)
