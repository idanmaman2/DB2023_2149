package com.api.cinematown.Repositories;

import com.api.cinematown.Models.Theater;
import com.api.cinematown.Models.Transactions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface TransactionsRepository extends JpaRepository<Transactions,Long> {
    @Query(value = "INSERT INTO `transactions`(`paying_method`, `costumer_id`, `seat_id`, `total_price`, `sched_id`) VALUES ( ?1 , ?2 ,  ?3 , ?4 , ?5 )",nativeQuery = true)
    void insertNewTrans(String paying_method ,String costumer_id ,Long seat_id ,Long  sched_id ,Long price);


}
