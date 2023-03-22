package com.api.cinematown.Contollers;

import com.api.cinematown.Models.Genre;
import com.api.cinematown.Models.Movie;
import com.api.cinematown.Repositories.GenreRepository;
import com.api.cinematown.Repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.SchemaMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.client.HttpStatusCodeException;

import java.net.http.HttpResponse;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@CrossOrigin
@Controller
public class GenreController {
    @Autowired
    private GenreRepository genreRepository;


    @SchemaMapping(typeName ="Query" , value = "findGenreById")
    public Genre GenrefindAllMovies(@Argument long id ) {
        return genreRepository.findById(id).get();




    }

    @SchemaMapping(typeName ="Query" , value = "findMoviesByGenresOR")
    public List<Movie> findMoviesByGenresOR(@Argument List<String> genres ) {
        return genreRepository.findGenresByName(genres).stream().flatMap((x)->x.movies.stream()).collect(Collectors.toList());
    }


    @SchemaMapping(typeName ="Query" , value = "findMoviesByGenresAND")
    public List<Movie> findMoviesByGenresAND(@Argument List<String> genres ) {
        Set<Movie> moviesResult = new HashSet<>();
        List<Genre> generesResult = genreRepository.findGenresByName(genres) ;
        if(generesResult.isEmpty()){
             return null ;
        }
        moviesResult.addAll(generesResult.get(0).movies);
        for(var g : generesResult.subList(1,generesResult.size())){
            moviesResult.retainAll(g.movies);
        }

        return moviesResult.stream().toList();
    }




}


