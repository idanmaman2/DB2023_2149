package com.api.cinematown.Models;

import jakarta.persistence.*;
import java.sql.Date;
import java.sql.Time;
import java.util.Set;

@Entity
@Table(name = "movie")
public class Movie  {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
     public Long id ;

    public String name ;
    public String rating ;

    public String description ;
    public Date reales_date ;


    private  String poster_images ;

    public String trailer ;

    public Time duration ;



    @ManyToMany
    @JoinTable(
            name = "movie_genre",
            joinColumns = @JoinColumn(name = "movie_id"),
            inverseJoinColumns = @JoinColumn(name = "genre_id"))
    Set<Genre> genres ;


    @OneToMany(mappedBy = "movie")
    Set<Schedule> schedules;



    //@JsonValue
    //public Map<String, Object> getTrailer() {
        //return JsonParserFactory.getJsonParser().parseMap(this.trailer);
    //}


    
   // @JsonValue
    //public Map<String, Object> getPoster_images() {
      //  return JsonParserFactory.getJsonParser().parseMap(this.poster_images);
    //}
}