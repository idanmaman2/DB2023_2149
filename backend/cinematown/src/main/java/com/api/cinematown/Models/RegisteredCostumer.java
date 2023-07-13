package com.api.cinematown.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "registered_costumers")
public class RegisteredCostumer {
    @Id
    public String id ;
    public String first_name ;
    public String last_name ;

    public String email ;
    public String password ; //md5 hashed
}
