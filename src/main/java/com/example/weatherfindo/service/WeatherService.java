package com.example.weatherfindo.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class WeatherService {

    @Value("${weather.api.key}")
    private String apiKey;

    public String getWeather(String city) {

        String url =
                "http://api.weatherapi.com/v1/forecast.json?key="
                        + apiKey
                        + "&q="
                        + city
                        + "&days=5&aqi=yes";

        RestTemplate restTemplate = new RestTemplate();

        return restTemplate.getForObject(url, String.class);
    }
}