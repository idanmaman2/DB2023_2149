package com.api.cinematown.Repositories;

import com.api.cinematown.Models.Movie;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovieRepository extends JpaRepository<Movie,Long> {

    @Query("select u from Movies u where u.rating = ?#{[0]}")
    List<Movie> findMoviesByRating(String rating);




}
