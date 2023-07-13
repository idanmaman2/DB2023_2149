package com.api.cinematown.Repositories;

import com.api.cinematown.Models.Movie;
import com.api.cinematown.Models.RegisteredCostumer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegisteredCostumerRepository extends JpaRepository<RegisteredCostumer,Long> {
}
