--SELECT * FROM owners FULL JOIN vehicles ON vehicles.owner_id = owners.id;--
--SELECT first_name, last_name, COUNT(*) FROM owners JOIN vehicles ON vehicles.owner_id = owners.id GROUP BY owners.first_name, owners.last_name ORDER BY count;--
----SELECT first_name, last_name, AVG(price), COUNT(owner_id) FROM owners JOIN vehicles ON owners.id = owner_id GROUP BY owners.first_name, owners.last_name HAVING COUNT(owner_id) > 1 AND ROUND(AVG(price)) > 10000 ORDER BY first_name DESC;

