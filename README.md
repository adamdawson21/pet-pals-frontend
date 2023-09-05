# 🐕 PetPals 🐈

## 🌟 Table of Contents

- 📖 [Introduction](#introduction)
- ✨ [Features](#features)
- 🎨 [Front-end Technologies Used](#front-end-technologies-used)
- 🖥️ [Back-end Technologies Used](#back-end-technologies-used)
- 🚀 [Getting Started](#getting-started)
- 🛠️ [Usage](#usage)
- 🤝 [Contributing](#contributing)
- 📜 [License](#license)

## 📖 Introduction

Welcome to PetPals! Our platform is designed to help you explore a wide variety of cats 🐱 and dogs 🐶 that are looking for their forever homes. Whether you're a prospective pet parent 🏡 or simply an animal enthusiast 🐾, this website provides a user-friendly interface to discover, favorite, and add personal comments for each pet available for adoption.

## ✨ Features

### 🧐 Explore Pets

- 🌐 Browse through an extensive catalog of cats 🐱 and dogs 🐶 available for adoption.
- 🔍 Filter pets by gender and age to find your perfect match.

### ❤️ Favorite Pets

- 📌 Create a list of your favorite pets to easily keep track of the ones you are interested in.
- 📘 Access your favorites list anytime to view and manage your selections.

### 💬 Add Personal Comments

- 📝 Inside a pet's profile, click the "Add Comment" button to leave personal notes.
- 🖊️ Your comments will be saved and displayed on the pet's profile for your reference.

### 🙋‍♂️ User Profiles

- 🖼️ Create and edit your user profile from the user dashboard.
- 📸 Upload a profile picture and share information about your pets.

## 🎨 Front-end Technologies Used

The front-end of the Pet Adoption Website was developed using the following technologies and libraries:

- ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

## 🖥️ Back-end Technologies Used

The back-end of the Pet Adoption Website was developed using the following technologies and frameworks:

- ![Django](https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white)
- ![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
- ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
- ![DjangoREST](https://img.shields.io/badge/DJANGO-REST-ff1709?style=for-the-badge&logo=django&logoColor=white&color=ff1709&labelColor=gray)

## 🚀 Getting Started

To get started with the Pet Adoption Website, follow these paw-steps🐾:

1. 📂 Clone the Repository:

```bash
   git clone https://github.com/adamdawson21/pet-pals-frontend
```

2. 📦 Install Dependencies:

```bash
   cd pet-adoption-website
   npm install
```

3. 🗄️ Configure the Database:

- Set up a database using your preferred database management system (e.g., MySQL, PostgreSQL).
- Update the database configuration in `config/database.js`.

4.  🔐 Environment Variables:

- Create a `.env` file based on the provided `.env.example` and configure the necessary environment variables.

5.  🌐 Start the Application:

```bash
   npm start
```

## Models

We have 3 models for Posts and 1 model for Users.

### Posts

```
class Post(models.Model):
    name = models.CharField()
    image = models.CharField()
    age = models.IntegerField()
    animal_type = models.CharField()
    breed = models.CharField()
    description = models.CharField()
    gender = models.CharField()
    owner_id = models.ForeignKey(
        User, on_delete=models.CASCADE)
    created_at = models.DateField(default=datetime.date.today)

    def __str__(self):
        return self.name + ' ' + str(self.owner_id)
```

```
class Comment(models.Model):
    text = models.TextField()
    user = models.ForeignKey(
        User,related_name='comments', on_delete=models.CASCADE)
    post = models.ForeignKey(
        Post, related_name='comments', on_delete=models.CASCADE)
    updated_at = models.DateField(default=datetime.date.today)
    created_at = models.DateField(default=datetime.date.today)

    def __str__(self):
        return self.text + ' ' + str(self.user) + ' ' + str(self.post)
```

```
class Like(models.Model):
    user = models.ForeignKey(
        User,related_name='likes', on_delete=models.CASCADE)
    post = models.ForeignKey(
        Post,related_name='likes', on_delete=models.CASCADE)

    def __str__(self):
        return 'Likes: ' + str(self.user) + ' ' + str(self.post)
```

### Users

```
class ModelUser(models.Model):
    username = models.CharField()
    first_name = models.CharField()
    last_name = models.CharField()
    email = models.CharField()
    password = models.CharField()
    comments = models.ForeignKey(
        Comment, on_delete=models.CASCADE, related_name='comments')
    like = models.ForeignKey(
        Like, on_delete=models.CASCADE, related_name='like')
    user = models.OneToOneField(User, on_delete=models.CASCADE)
```

---

| Frontend Endpoints | Description       |
| ------------------ | ----------------- |
| `/`                | Home page         |
| `/about`           | About page        |
| `/alldogs`         | Get all dogs      |
| `/allcats`         | Get all cats      |
| `/signin`          | Signin            |
| `/singup`          | Singup            |
| `/profile`         | Profile           |
| `/alldogs/:id`     | Get one dog by ID |
| `/allcats/:id`     | Get one cat by ID |

### Backend Endpoints (Posts)

| Endpoint          | Description                           |
| ----------------- | ------------------------------------- |
| `/post/`          | Create, update, delete posts          |
| `/comment/`       | Retrieve all comments for all posts   |
| `/like/`          | Add to favorites                      |
| `/dogs-cats/`     | Get all dogs or cats based on request |
| `/dogs-cats/dogs` | Get all dogs                          |
| `/dogs-cats/cats` | Get all cats                          |

### Backend Endpoints (Users)

| Endpoint     | Description    |
| ------------ | -------------- |
| `/signup`    | User sign up   |
| `/login`     | User login     |
| `/get_token` | Get user token |
| `/get_users` | Get all users  |

---

## 🤝 Contributing

We warmly welcome contributions from the community to enhance and improve this pet adoption platform 🐾. To lend a helping paw 🐾:

1. Fork the repository and create a new branch for your feature or bug fix.
2. Make your changes, ensuring code quality and adherence to coding standards.
3. Create a pull request with a clear description of your changes.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

We hope you enjoy PetPals! 🐱🐶🏠🐾
