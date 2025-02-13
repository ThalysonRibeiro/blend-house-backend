# Restaurant Management API

A robust backend API built with Node.js, Express, and Prisma for managing restaurant operations including users, categories, products, and orders.

## 🚀 Features

- User authentication and authorization
- Category management
- Product catalog with category organization
- Comprehensive order management system
- File upload support with Cloudinary integration
- Built with TypeScript for type safety
- Prisma ORM for database operations
- JWT-based authentication

## 🛠️ Technologies

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [JWT](https://jwt.io/)
- [Cloudinary](https://cloudinary.com/)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)

## 📋 Prerequisites

- Node.js (version 14 or higher)
- PostgreSQL database
- Cloudinary account for image uploads

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/ThalysonRibeiro/blend-house-backend
```

2. Install dependencies:
```bash
yarn install
```

3. Set up environment variables:
Create a `.env` file in the root directory with the following variables:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
JWT_SECRET=your-secret-key
PORT=3333
CLOUDINARY_NAME=your-cloudinary-name
CLOUDINARY_KEY=your-cloudinary-key
CLOUDINARY_SECRETE=your-cloudinary-secret
```

4. Run database migrations:
```bash
yarn prisma migrate dev
```

5. Start the development server:
```bash
yarn dev
```

## 📚 API Routes

### User Routes
- `POST /users` - Create a new user
- `POST /session` - User authentication
- `GET /me` - Get authenticated user details

### Category Routes
- `POST /category` - Create a new category
- `GET /category` - List all categories

### Product Routes
- `POST /product` - Create a new product
- `GET /category/product` - List products by category

### Order Routes
- `POST /order` - Create a new order
- `DELETE /order` - Remove an order
- `POST /order/add` - Add item to order
- `DELETE /order/remove` - Remove item from order
- `PUT /order/send` - Send order to kitchen
- `GET /orders` - List all orders
- `GET /order/detail` - Get order details
- `PUT /order/finish` - Mark order as finished

All routes except `/users` and `/session` require authentication.

## 📦 Available Scripts

- `yarn dev` - Run development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn vercel-build` - Build for Vercel deployment
- `yarn prisma:generate` - Generate Prisma client

## 🔧 Environment Variables

| Variable | Description |
|----------|-------------|
| DATABASE_URL | PostgreSQL database connection URL |
| JWT_SECRET | Secret key for JWT token generation |
| PORT | Server port number |
| CLOUDINARY_NAME | Cloudinary cloud name |
| CLOUDINARY_KEY | Cloudinary API key |
| CLOUDINARY_SECRETE | Cloudinary API secret |


## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🎯 Version

Current version: 1.0.0
