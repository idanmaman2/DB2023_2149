package com.api.cinematown.Repositories;

import com.api.cinematown.Models.Movie;
import com.api.cinematown.Models.Seats;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface SeatsRepository extends JpaRepository<Seats,Long> {
}
