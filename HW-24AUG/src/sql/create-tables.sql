
-- DROP TABLE IF EXISTS public.authors  CASCADE;
-- DROP TABLE IF EXISTS public.blogs  CASCADE;

CREATE TABLE 
	IF NOT EXISTS
		products(
			product_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
			name VARCHAR(255) NOT NULL,
			description VARCHAR (1000) NOT NULL,
			brand VARCHAR (50) NOT NULL,
			image_url TEXT NOT NULL,
			price VARCHAR (50) NOT NULL,
			category VARCHAR (50) NOT NULL,
			created_at TIMESTAMPTZ DEFAULT NOW(),
			updated_at TIMESTAMPTZ DEFAULT NOW()
	);



	 CREATE TABLE 
	IF NOT EXISTS
		review(
			review_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
			comment VARCHAR(500) NOT NULL,
			rate INTEGER CHECK (rate < 6) NOT NULL,
			product_id INTEGER NOT NULL,
			created_at TIMESTAMPTZ DEFAULT NOW(),
			updated_at TIMESTAMPTZ DEFAULT NOW()
	);
