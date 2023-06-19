package com.api.cinematown.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "TOP5MOVIES")
public class TopMoviesView {
    @Id
    String name ;

    @OneToOne
    Movie mv_id ;


}
