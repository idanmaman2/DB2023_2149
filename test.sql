
CREATE OR REPLACE HALLS_TO_FIX AS 
(
    SELECT COUNT(*),maintenance_job.hall_id from 
    maintenance_job 
    WHERE DATEDIFF(NOW(),maintenance_job.maintance_schedule) <= 168
    GROUP BY maintenance_job.hall_id 
    ORDER BY `COUNT(*)` DESC LIMIT 10
);