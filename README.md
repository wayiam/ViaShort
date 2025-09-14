

---

# ViaShort – Smart URL Shortener 🚀

**ViaShort** is a modern and efficient **URL shortening service** built with **Node.js & Express**.
It lets users shorten long links, track visits, and view detailed analytics in real-time.

---

## ✨ Features

* 🔗 Shorten any valid URL into a clean, branded short link.
* 🚀 Instant redirection to the original URL.
* 📊 Analytics: track total visits and clicks per short link.
* ⚡ RESTful API for easy developer integration.

---

## 📂 Project Structure

```
src/
 ├── controllers/   # API request handling
 ├── models/        # Database schema
 ├── routes/        # Route definitions
 ├── services/      # Business logic
 ├── utils/         # Helpers
 ├── app.js         # Express app setup
 └── server.js      # Server entry
```

---

## 📡 API Endpoints

* **POST /url** → Generate a new short URL
* **GET /\:id** → Redirect to the original URL
* **GET /url/analytics/\:id** → Get click statistics

---

## ⚙️ Tech Stack

* **Backend**: Node.js, Express
* **Database**: MongoDB (or PostgreSQL)
* **Others**: Nanoid/UUID for short IDs

---

## 🚀 Getting Started

1. Clone the repo

   ```bash
   git clone https://github.com/yourusername/via-short.git
   cd via-short
   ```
2. Install dependencies

   ```bash
   npm install
   ```
3. Create a `.env` file with DB + PORT configs.
4. Start the server

   ```bash
   npm start
   ```

---

## 📊 Example Request/Response

```json
POST /url
{
  "originalUrl": "https://www.example.com/long/link"
}
Response:
{
  "shortUrl": "http://localhost:3000/xyz123"
}
```

---

## 🛠 Future Roadmap

* 🔒 Authentication + user accounts
* ✨ Custom short links (vanity URLs)
* ⏳ Link expiration dates
* 📱 QR code generation
* 📈 Advanced analytics (device, geo, referrer tracking)

---

## 📜 License

MIT License – free to use and modify.

---