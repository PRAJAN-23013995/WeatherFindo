# WeatherFindo 🌦️

A full-stack weather dashboard built using Java Spring Boot, HTML, CSS, and JavaScript.

This application provides real-time weather information, AQI, 5-day forecasts, sunrise/sunset details, and current location weather using WeatherAPI.

---

# Features

- Real-time weather data
- 5-day weather forecast
- Air Quality Index (AQI)
- Current location weather
- Sunrise and sunset timings
- Dynamic weather backgrounds
- Responsive modern UI
- Loading animations
- Error handling

---

# Tech Stack

## Backend
- Java
- Spring Boot
- Maven

## Frontend
- HTML
- CSS
- JavaScript

## API
- WeatherAPI

---

# Project Structure

```text
WeatherFindo
│
├── frontend
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── src
│   └── main
│       ├── java
│       └── resources
│
├── pom.xml
└── README.md
```

---

# How To Run

## 1. Clone Repository

```bash
git clone https://github.com/PRAJAN-23013995/WeatherFindo.git
```

---

## 2. Open Project

Open the project in VS Code.

---

## 3. Configure API Key

Create:

```text
src/main/resources/application.properties
```

Add:

```properties
weather.api.key=YOUR_API_KEY
```

Get your API key from:

https://www.weatherapi.com/

---

## 4. Run Backend

Open terminal and run:

```bash
mvn spring-boot:run
```

Backend runs on:

```text
localhost:8080
```

---

## 5. Run Frontend

Right click:

```text
frontend/index.html
```

Click:

```text
Open with Live Server
```

Frontend runs on:

```text
127.0.0.1:5500
```

---

# Screenshots

(Add screenshots here later)

---

# Future Improvements

- User authentication
- Search history
- Weather maps
- Charts and analytics
- React frontend
- Docker support
- Deployment

---

# Author

Prajan P