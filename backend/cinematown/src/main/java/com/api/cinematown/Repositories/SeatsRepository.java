package com.api.cinematown.Repositories;

import com.api.cinematown.Models.Movie;
import com.api.cinematown.Models.Seats;
import com.api.cinematown.Models.Theater;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SeatsRepository extends JpaRepository<Seats,Long> {
    @Query(value = "SELECT DISTINCT seats.* from SCHEDULE JOIN seats ON (seats.theated_hall_id = SCHEDULE.theater_hall_id) WHERE schedule.id = ?1 ;",nativeQuery = true)
    List<Seats> getAllSeatsBySchedule(Long schedId );

    @Query(value = "SELECT DISTINCT seats.* from SCHEDULE JOIN seats ON (seats.theated_hall_id = SCHEDULE.theater_hall_id) WHERE schedule.id = ?1 and seats.id NOT IN (select transactions.seat_id from schedule JOIN transactions ON (transactions.sched_id = schedule.id) WHERE schedule.id = ?1 ) ;",nativeQuery = true)
    List<Seats> getAllFreeSeatsBySchedule(Long schedId );


    @Query(value = "SELECT seats.* from broken_seats JOIN seats ON (broken_seats.seat_id = seats.id) JOIN theater_hall ON (theater_hall.id = seats.theated_hall_id) WHERE theater_hall.id = ?1 ;",nativeQuery = true)
    List<Seats> getAllBrokenSeatsByTheaterHall(Long theaterID );
}
