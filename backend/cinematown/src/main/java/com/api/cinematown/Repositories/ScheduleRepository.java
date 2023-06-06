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



}
