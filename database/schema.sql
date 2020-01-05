CREATE TABLE players (
    player_id SERIAL PRIMARY KEY,
    player_name VARCHAR(20) UNIQUE
);

CREATE TABLE scores (
    game_id SERIAL PRIMARY KEY,
    player_id INT REFERENCES players(player_id),
    player_name VARCHAR(20) REFERENCES players(player_name),
    finish_time TIMESTAMP,
    save_time TIMESTAMP,
    score INT
);