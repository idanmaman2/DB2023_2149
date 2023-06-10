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

    @Query(value = "SELECT DISTINCT movie.* from movie JOIN schedule ON (schedule.mv_id = movie.id) JOIN theater_hall ON (schedule.theater_hall_id= theater_hall.id) JOIN theater ON (theater.id = theater_hall.Theater_id ) WHERE DATE_FORMAT(schedule.time , \"%Y-%m-%e\") =DATE_FORMAT( ?2 , \"%Y-%m-%e\") and theater.id = ?1 ;",nativeQuery = true)
    List<Movie> findAllAvailableMoviesByTheaterAndDate(Long theaterID , String date);




}
