package com.api.cinematown.Repositories;

import com.api.cinematown.Models.Seats;
import com.api.cinematown.Models.Theater;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TheaterRepository  extends JpaRepository<Theater,Long> {
}
