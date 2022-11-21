CREATE TABLE IF NOT EXISTS bookings(
    booking_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    pick_up_location VARCHAR(255) NOT NULL,
    drop_off_location VARCHAR(255) NOT NULL,
    full_name VARCHAR(50) NOT NULL,
    email VARCHAR(30) NOT NULL,
    date_booking VARCHAR(30) NOT NULL,
    hour VARCHAR(20) NOT NULL,
    flight_id  VARCHAR(20) NOT NULL,
    payment_method VARCHAR(20) NOT NULL,
    passengers INTEGER NOT NULL,
    observations VARCHAR(255),
    referrals VARCHAR(10),
    type_of_service  VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS ratings(
    rating_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    comments VARCHAR(70) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);