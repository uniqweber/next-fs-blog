# Next FS Blog

Next-FS Blog is a full-stack blogging platform that allows users to register, log in, create blog posts, and format content with styling options.

## 🛠 Technologies Used

- **Next.js** - For frontend and backend development
- **Tailwind CSS** - For styling
- **Framer Motion** - For animations
- **MongoDB** - For database management
- **Prisma** - For ORM (Object-Relational Mapping)

## 🔥 Features

### 🔑 Authentication
- Users can **register and log in**.
- **JWT authentication** is implemented for security.

### 📝 Blog System
- Users can **create blog posts**.
- **Image uploads** are supported in blog posts.
- **Title and content** can be added to blog posts.
- **Rich text formatting (Bold, Italic, etc.)** is available.

### 🎨 UI/UX
- **Fully responsive design**
- **Smooth animations** with Framer Motion

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
 git clone https://github.com/yourusername/next-fs-blog.git
 cd next-fs-blog
```

### 2️⃣ Install Dependencies
```bash
 npm install
 # or
 yarn install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file and add the following details:
```env
DATABASE_URL=mongodb+srv://your-mongodb-url
JWT_SECRET=your-secret-key
```

### 4️⃣ Set Up Database
```bash
 npx prisma migrate dev
```

### 5️⃣ Run the Server
```bash
 npm run dev
```

The application will be available at **http://localhost:3000**. 🎉

## 📌 Contribution Guidelines
Contributions are welcome! Feel free to submit a pull request if you would like to add new features or fix issues. 😊

## 📜 License
This project is licensed under the **MIT License**.
