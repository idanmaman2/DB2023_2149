package com.api.cinematown.Repositories;

import com.api.cinematown.Models.Movie;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovieRepository extends JpaRepository<Movie,Long> {

    @Query(value = "SELECT * FROM movie WHERE movie.rating in  ?1 ",nativeQuery = true)
    List<Movie> findMoviesByRating(List<String> rating);




}
