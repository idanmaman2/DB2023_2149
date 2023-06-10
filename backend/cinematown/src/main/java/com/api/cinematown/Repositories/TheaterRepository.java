package com.api.cinematown.Repositories;

import com.api.cinematown.Models.Schedule;
import com.api.cinematown.Models.Seats;
import com.api.cinematown.Models.Theater;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.util.List;

@Repository
public interface TheaterRepository  extends JpaRepository<Theater,Long> {
    @Query(value = "SELECT DISTINCT theater.* from schedule JOIN theater_hall ON (schedule.theater_hall_id = theater_hall.id) JOIN theater ON theater_hall.Theater_id = theater.id WHERE DATE_FORMAT(schedule.time , \"%Y-%m-%e\") =DATE_FORMAT( ?1 , \"%Y-%m-%e\") and DATEDIFF( ?1 ,NOW()) >= 0;",nativeQuery = true)
    List<Theater> findByDate(String date);






}
