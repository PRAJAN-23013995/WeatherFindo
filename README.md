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
# Interface :
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/03db72ec-6145-48c0-b151-df7adfacd2f5" />

# Weather Prediction:
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/643e1e05-3d7b-48d1-a836-fe204e256c24" />

# Future Forecasting :
<img width="1231" height="334" alt="image" src="https://github.com/user-attachments/assets/db1d5d93-dcaa-4485-a842-3befddd3c4af" />

# Current location Fetching:
<img width="144" height="96" alt="image" src="https://github.com/user-attachments/assets/2c2f206b-7028-4d58-8e13-aac5a9a50b23" />

<img width="1299" height="969" alt="image" src="https://github.com/user-attachments/assets/1caf85e5-4f57-4ddc-80b9-e2d22b4e55fb" />

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
