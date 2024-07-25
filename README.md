# SimplyFI_Softech

# Node.js Backend Assignment

This project is a Node.js backend application to manage articles, users, likes, views, and notifications using MongoDB. It follows the MVC (Model-View-Controller) architecture to ensure a clear separation of concerns, making the codebase easier to manage and scale.

## Features

1. **Article Management**: Create and manage articles with fields like title, author, body, likes, and views.
2. **User Management**: Create and manage users.
3. **Article Interaction**: Track which users have liked and viewed articles.
4. **Caching**: Keep track of views and likes for the most popular articles in memory.
5. **Notifications**: Notify users when their articles are liked, and keep track of these notifications.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## Project Structure

```project/
├── models/
│   ├── article.js
│   ├── user.js
│   ├── articleLiked.js
│   ├── articleViewed.js
│   └── notification.js
├── controllers/
│   ├── articleController.js
│   └── userController.js
├── routes/
│   ├── articleRoutes.js
│   └── userRoutes.js
├── services/
│   ├── notificationService.js
│   ├── cacheService.js
│   └── articleService.js
├── app.js
└── server.js
```

## API Endpoints

#### create an new User
- **URL:** `/users/create`
- **Method:** `POST`
- **Body:**
    ```json
    {
     "name": "John Doe"
    }
    ```
## ScreenShot

![image](https://github.com/user-attachments/assets/c1832f56-425e-4708-842c-0c6b129b5617)

### Articles

#### Create a new article
- **URL:** ` /articles/create`
- **Method:** `POST`
- **Body:**
    ```json
    {
      "title": "My First Article",
      "author": "Author Name",
      "body": "This is the body of the article."
    }
    ```
## ScreenShot

![image](https://github.com/user-attachments/assets/01e23f5f-215e-4e46-ac85-8b34b49fa31b)

#### Like an article
- **URL:** `/articles/like`
- **Method:** `POST`
- **Body:**
    ```json
    {
      "articleId": "60d5f9d6c5e5a3b6a9f3f1b5",
      "userId": "60d5f9d6c5e5a3b6a9f3f1b6"
    }
    ```
## ScreenShot

![image](https://github.com/user-attachments/assets/8aacaa94-b00d-42cc-a125-bbc39e42db60)


#### View an article
- **URL:** `/articles/view`
- **Method:** `POST`
- **Body:**
    ```json
    {
      "articleId": "60d5f9d6c5e5a3b6a9f3f1b5",
      "userId": "60d5f9d6c5e5a3b6a9f3f1b6"
    }
    ```
## ScreenShot

![image](https://github.com/user-attachments/assets/dc488f2c-9779-47be-ad70-dcdcde3aae0c)

### Notifications

#### Get notifications
- **URL:** `/notifications`
- **Method:** `GET`



## Example Usage

### Create a new article
```bash
curl -X POST  http://localhost:3000/articles/create -H "Content-Type: application/json" -d '{"title": "My First Article", "author": "Author Name", "body": "This is the body of the article."}'
