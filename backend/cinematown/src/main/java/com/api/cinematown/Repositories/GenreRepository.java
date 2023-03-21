package com.api.cinematown.Repositories;

import com.api.cinematown.Models.Genre;
import com.api.cinematown.Models.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GenreRepository extends JpaRepository<Genre,Long> {

    @Query(value = "SELECT * FROM genre where genre.name in ?1",nativeQuery = true)
    List<Genre> findGenresByName(List<String> name);


}
