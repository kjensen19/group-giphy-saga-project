--db giphy_search_favorites

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');


CREATE TABLE "favorite" (
	"id" serial PRIMARY KEY,
	"url" VARCHAR (1000) NOT NULL
);

INSERT INTO "favorite" ("url")
  VALUES ('https://media.giphy.com/media/dB0lH3k3AE96259Exh/giphy.gif'),
  		 ('https://media.giphy.com/media/10LH5J2YEmUS6k/giphy.gif'),
  		 ('https://media.giphy.com/media/S9oNGC1E42VT2JRysv/giphy.gif');
