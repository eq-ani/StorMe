--select * from storme.host_db

ALTER TABLE storme.host_db
ADD school VARCHAR(255),
ADD active BOOLEAN
ADD temp_control BOOLEAN,
ADD allergen_free BOOLEAN,
ADD big_access BOOLEAN,
ADD accessibility INTEGER,
add image_url VARCHAR(1024);
