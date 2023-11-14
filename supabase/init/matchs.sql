CREATE TABLE matchs (
    id SERIAL PRIMARY KEY,
    league VARCHAR(40),
    date TIMESTAMP,
    venue VARCHAR(40),
    city varchar(40),
    team_a varchar(40),
    team_b varchar(40),
    api_id integer,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
