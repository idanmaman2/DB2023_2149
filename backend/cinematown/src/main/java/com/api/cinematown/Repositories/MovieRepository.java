package com.api.cinematown.Repositories;

import com.api.cinematown.Models.Movie;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovieRepository extends JpaRepository<Movie,Long> {

    @Query(value = "SELECT * FROM (SELECT MAX(schedule.time),movie.* FROM `schedule` JOIN movie ON schedule.mv_id = movie.id WHERE DATEDIFF(time,NOW()) > 0 GROUP BY schedule.mv_id) filter ORDER BY filter.reales_date DESC ",nativeQuery = true)
    List<Movie> findByreales_dateDesc();

    @Query(value = "SELECT * FROM  movie ORDER BY movie.reales_date DESC ",nativeQuery = true)

    List<Movie> getAllMoviesSortedByDateOld();

    @Query(value = "SELECT * FROM movie WHERE movie.rating in  ?1 ORDER",nativeQuery = true)
    List<Movie> findMoviesByRating(List<String> rating);




}
