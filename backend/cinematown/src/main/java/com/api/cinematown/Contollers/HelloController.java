package com.api.cinematown.Contollers;

import com.api.cinematown.Models.Movie;
import com.api.cinematown.Repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.SchemaMapping;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Controller
public class HelloController {
    @Autowired
    private MovieRepository movieRepository;


    @SchemaMapping(typeName ="Query" , value = "findAllMovies")
    public List<Movie> findAllMovies() {
        return movieRepository.findAll();
    }
    @SchemaMapping(typeName = "Query" , value = "findMoviesByRating")
    public List<Movie> findMoviesByRating(@Argument List<String> ratings) {
        return ratings.stream().map((x)-> movieRepository.findMoviesByRating(x)).flatMap(list -> list.stream()).toList();
    }

    @SchemaMapping(typeName = "Query" , value = "findMovieById")
    public Movie findMovieById(@Argument int id) {
        Optional<Movie> mv =  movieRepository.findById((long)id);
        return mv.get() ;


    }



}