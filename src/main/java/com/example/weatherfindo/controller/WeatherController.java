package com.example.weatherfindo.controller;

import com.example.weatherfindo.service.WeatherService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
public class WeatherController {

    private final WeatherService weatherService;

    public WeatherController(WeatherService weatherService) {
        this.weatherService = weatherService;
    }

    @GetMapping("/weather")
    public String getWeather(@RequestParam String city) {

        return weatherService.getWeather(city);
    }
}