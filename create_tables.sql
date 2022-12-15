CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS categories(
	"id" BIGSERIAL PRIMARY KEY,
	"name" VARCHAR(200) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS products(
	"id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
	"name" VARCHAR(200) NOT NULL,
	"price" decimal(8,2) NOT NULL,
	"category_id" INTEGER NOT NULL,
	FOREIGN KEY (category_id)
	REFERENCES categories(id)
);
