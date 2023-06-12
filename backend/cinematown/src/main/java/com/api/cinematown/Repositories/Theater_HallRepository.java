package com.api.cinematown.Repositories;

import com.api.cinematown.Models.Seats;
import com.api.cinematown.Models.Theater_Hall;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface Theater_HallRepository  extends JpaRepository<Theater_Hall,Long> {


}
