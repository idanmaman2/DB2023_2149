package com.api.cinematown.Models;

import jakarta.persistence.*;

@Entity
@Table(name = "transactions")
public class Transactions {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;
    public String paying_method;
    public Long total_price ;

    @ManyToOne(optional = false , fetch = FetchType.EAGER,cascade = CascadeType.ALL )
    @JoinColumn(table ="transactions" , referencedColumnName ="id" ,columnDefinition="bigint UNSIGNED NOT NULL", name = "sched_id",nullable = false )
    public Schedule sched;

    @ManyToOne(optional = false ,fetch = FetchType.EAGER,cascade = CascadeType.ALL )
    @JoinColumn(table ="transactions" ,referencedColumnName ="id" ,columnDefinition="bigint UNSIGNED NOT NULL",name = "seat_id",nullable = false)
    public Seats seat;

    @ManyToOne(optional = false ,fetch = FetchType.EAGER,cascade = CascadeType.ALL )
    @JoinColumn(table ="transactions" ,referencedColumnName ="id" ,columnDefinition="varchar(9) NOT NULL",name = "costumer_id",nullable = false)
    public RegisteredCostumer costumer;


}
