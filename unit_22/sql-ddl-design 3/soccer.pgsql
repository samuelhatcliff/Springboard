Teams



Goals: 
player(id) 
game(id)

Players: 
name
team (id)


Game:
team1(id)
team2(id--cant be duplicate)
season
reff


Refz:
name
Game(id)



Teams:
Name
ranking




Season:
start_date
end_date


CREATE TABLE game
(
    id SERIAL PRIMARY KEY, 
    team1 INTEGER UNIQUE REFERENCES teams (id),
    team2 INTEGER UNIQUE REFERENCES teams (id),
    season INTEGER REFERENCES seasons (id),
    ref1 INTEGER UNIQUE REFERENCES refs (id),
    ref2 INTEGER UNIQUE REFERENCES refs (id),
    ref3 INTEGER UNIQUE REFERENCES refs (id),
)