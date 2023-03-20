package com.api.cinematown.Models;

import com.fasterxml.jackson.annotation.JsonValue;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import org.springframework.boot.json.JsonParserFactory;

import java.sql.Date;
import java.sql.Time;
import java.util.Map;

@Entity
public class Movie  {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
     public Long id ;

    public String name ;
    public String rating ;

    public String description ;
    public Date reales_date ;


    private  String poster_images ;

    public String trailer ;

    public Time duration ;

    @JsonValue
    public Map<String, Object> getPoster_images() {
        return JsonParserFactory.getJsonParser().parseMap(this.poster_images);
    }
}