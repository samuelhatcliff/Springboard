-- from the terminal run:
-- psql < air_traffic.sql

DROP DATABASE IF EXISTS air_traffic;

CREATE DATABASE air_traffic;

\c air_traffic




CREATE TABLE customer (
  id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  birthday DATE,
  frequent_flyer BOOLEAN
)

CREATE TABLE airline (
  id SERIAL PRIMARY KEY,
  airline_name TEXT UNIQUE NOT NULL
)

CREATE TABLE plane_row (
  id SERIAL PRIMARY KEY,
  plane_row INTEGER 
)

CREATE TABLE plane_column (
  id SERIAL PRIMARY KEY,
  plane_column TEXT UNIQUE
)

CREATE table seats (
  id SERIAL PRIMARY KEY,
  plane_row INTEGER REFERENCES plane_row (id),
  plane_column INTEGER REFERENCES plane_column (id)
)

CREATE TABLE airports 
(
  id SERIAL PRIMARY KEY,
  city_name TEXT NOT NULL
  state_region TEXT
  zip_code INT
  country TEXT NOT NULL
)

CREATE TABLE to_ 
(
  id SERIAL PRIMARY KEY,
  to_city TEXT NOT NULL  REFERENCES airports (id),
  to_country TEXT NOT NULL REFERENCES airports (country),
  arrival TIMESTAMP NOT NULL
)

CREATE from_
(
  id SERIAL PRIMARY KEY,
  from_city TEXT NOT NULL REFERENCES airports (id),
  from_country TEXT NOT NULL REFERENCES airports (country),
  departure TIMESTAMP NOT NULL
)

CREATE TABLE flights (
  id SERIAL PRIMARY KEY,
  airline INT NOT NULL REFERENCES airline (id),
  from_ INT NOT NULL REFERENCES from_ (id),
  to_ INT NOT NULL REFERENCES to_ (id),
  seat INT NOT NULL REFERENCES seats (id)
)


CREATE TABLE tickets (
  id SERIAL PRIMARY KEY,
  customer INT NOT NULL REFERENCES customer (id)
  flights INT NOT NULL REFERENCES flights (id)
)


-- INSERT INTO tickets
--   (first_name, last_name, seat, departure, arrival, airline, from_city, from_country, to_city, to_country)
-- VALUES
--   ('Jennifer', 'Finch', '33B', '2018-04-08 09:00:00', '2018-04-08 12:00:00', 'United', 'Washington DC', 'United States', 'Seattle', 'United States'),
--   ('Thadeus', 'Gathercoal', '8A', '2018-12-19 12:45:00', '2018-12-19 16:15:00', 'British Airways', 'Tokyo', 'Japan', 'London', 'United Kingdom'),
--   ('Sonja', 'Pauley', '12F', '2018-01-02 07:00:00', '2018-01-02 08:03:00', 'Delta', 'Los Angeles', 'United States', 'Las Vegas', 'United States'),
--   ('Jennifer', 'Finch', '20A', '2018-04-15 16:50:00', '2018-04-15 21:00:00', 'Delta', 'Seattle', 'United States', 'Mexico City', 'Mexico'),
--   ('Waneta', 'Skeleton', '23D', '2018-08-01 18:30:00', '2018-08-01 21:50:00', 'TUI Fly Belgium', 'Paris', 'France', 'Casablanca', 'Morocco'),
--   ('Thadeus', 'Gathercoal', '18C', '2018-10-31 01:15:00', '2018-10-31 12:55:00', 'Air China', 'Dubai', 'UAE', 'Beijing', 'China'),
--   ('Berkie', 'Wycliff', '9E', '2019-02-06 06:00:00', '2019-02-06 07:47:00', 'United', 'New York', 'United States', 'Charlotte', 'United States'),
--   ('Alvin', 'Leathes', '1A', '2018-12-22 14:42:00', '2018-12-22 15:56:00', 'American Airlines', 'Cedar Rapids', 'United States', 'Chicago', 'United States'),
--   ('Berkie', 'Wycliff', '32B', '2019-02-06 16:28:00', '2019-02-06 19:18:00', 'American Airlines', 'Charlotte', 'United States', 'New Orleans', 'United States'),
--   ('Cory', 'Squibbes', '10D', '2019-01-20 19:30:00', '2019-01-20 22:45:00', 'Avianca Brasil', 'Sao Paolo', 'Brazil', 'Santiago', 'Chile');