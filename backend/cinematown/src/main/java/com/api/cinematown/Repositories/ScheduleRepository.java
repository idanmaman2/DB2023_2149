package com.api.cinematown.Repositories;

import com.api.cinematown.Models.Genre;
import com.api.cinematown.Models.Movie;
import com.api.cinematown.Models.Schedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ScheduleRepository extends JpaRepository<Schedule,Long> {

    @Query(value = "SELECT * FROM `schedule` ORDER BY `schedule`.`time` ASC",nativeQuery = true)
    List<Schedule> findAllSched();

    @Query(value = "SELECT DISTINCT SCHEDULE.* from movie JOIN schedule ON (schedule.mv_id = movie.id) JOIN theater_hall ON (schedule.theater_hall_id= theater_hall.id) JOIN theater ON (theater.id = theater_hall.Theater_id ) WHERE movie.id = ?1  and theater.id = ?2 and DATE_FORMAT(schedule.time , \"%Y-%m-%e\") =DATE_FORMAT( ?3 , \"%Y-%m-%e\");",nativeQuery = true)
    List<Schedule> findAllAvailableScheduleBYMoviesAndTheaterAndDate( Long movieID, Long theaterID , String date );



}
