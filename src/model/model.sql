CREATE DATABASE crm;

CREATE TABLE courses(
    course_id serial PRIMARY KEY,
    course_name varchar(32) not null,
    course_price varchar(64) not null,
    course_ref_id int REFERENCES courses(course_id)
);

CREATE TABLE teachers(
    teacher_id serial PRIMARY KEY,
    teacher_name varchar(32) not null
);

CREATE TABLE teacher_course (
    teacher_course_id bigserial not null PRIMARY KEY,
    teacher_id int REFERENCES teachers(teacher_id),
    course_id int REFERENCES courses(course_id)
);

CREATE TABLE groups(
    group_id serial PRIMARY KEY,
    group_name varchar(32) not null,
    course_id int REFERENCES courses(course_id) not null,
    teacher_id int REFERENCES teachers(teacher_id) not null,
    created_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO groups(group_name, course_id, teacher_id) VALUES('n3', 1, 2);
INSERT INTO groups(group_name, course_id, teacher_id) VALUES('n8', 2, 2);
INSERT INTO groups(group_name, course_id, teacher_id) VALUES('n9', 1, 2);
INSERT INTO groups(group_name, course_id, teacher_id) VALUES('n10', 5, 2);


-- CREATE TABLE students(
--     id serial PRIMARY KEY,
--     students_name varchar(32),
--     group_id int REFERENCES groups(id),
--     payment int
-- );

-- CREATE OR REPLACE FUNCTION salary_calc()
-- RETURNS TRIGGER
-- LANGUAGE plpgsql
-- AS 
-- $$

-- BEGIN
--     UPDATE teachers SET salary = salary::int + (NEW.payment::int / 100 * 40) WHERE id = (SELECT teacher_id FROM groups WHERE id = NEW.group_id);
--     RETURN NEW;
-- END
-- $$;

-- CREATE TRIGGER convertor
-- BEFORE INSERT
-- ON students
-- FOR EACH ROW
-- EXECUTE PROCEDURE salary_calc();

INSERT INTO clinics(clinic_name) VALUES('Hayot');
INSERT INTO courses(course_name, course_price) VALUES('Node.js', '1 500 000');
INSERT INTO courses(course_name, course_price, course_ref_id) VALUES('Jquery', '100 000', 1);
INSERT INTO courses(course_name, course_price, course_ref_id) VALUES('Express.js', '1 100 000', 2);



-- INSERT INTO teachers(teacher_name, course_id) VALUES('Akbar', 1);
-- INSERT INTO teachers(teacher_name, course_id) VALUES('Baxodir', 1);
-- INSERT INTO teachers(teacher_name, course_id) VALUES('Hojakbar', 1);
-- INSERT INTO teachers(teacher_name, course_id) VALUES('Aziza', 2);
-- INSERT INTO teachers(teacher_name, course_id) VALUES('Olimjon', 2);
-- INSERT INTO teachers(teacher_name, course_id) VALUES('Behruz', 3);
-- INSERT INTO teachers(teacher_name, course_id) VALUES('Ulugbek', 4);
-- INSERT INTO teachers(teacher_name, course_id) VALUES('Abror', 5);
-- INSERT INTO teachers(teacher_name, course_id) VALUES('Abror', 6);
-- INSERT INTO teachers(teacher_name, course_id) VALUES('Abror', 7);
-- INSERT INTO teachers(teacher_name, course_id) VALUES('Said', 7);
-- INSERT INTO teachers(teacher_name, course_id) VALUES('Said', 8);


-- INSERT INTO groups(group_name, teacher_id) VALUES('01', 1);
-- INSERT INTO groups(group_name, teacher_id) VALUES('02', 1);
-- INSERT INTO groups(group_name, teacher_id) VALUES('03', 2);
-- INSERT INTO groups(group_name, teacher_id) VALUES('04', 3);
-- INSERT INTO groups(group_name, teacher_id) VALUES('05', 4);
-- INSERT INTO groups(group_name, teacher_id) VALUES('06', 5);
-- INSERT INTO groups(group_name, teacher_id) VALUES('07', 6);
-- INSERT INTO groups(group_name, teacher_id) VALUES('08', 7);
-- INSERT INTO groups(group_name, teacher_id) VALUES('09', 7);
-- INSERT INTO groups(group_name, teacher_id) VALUES('10', 8);
-- INSERT INTO groups(group_name, teacher_id) VALUES('11', 9);
-- INSERT INTO groups(group_name, teacher_id) VALUES('12', 10);
-- INSERT INTO groups(group_name, teacher_id) VALUES('13', 11);
-- INSERT INTO groups(group_name, teacher_id) VALUES('14', 12);



-- INSERT INTO students(students_name, group_id, payment) VALUES('Islom', 1, 700000);
-- INSERT INTO students(students_name, group_id, payment) VALUES('Akbar', 1, 700000);
-- INSERT INTO students(students_name, group_id, payment) VALUES('Ismoil', 1, 700000);
-- INSERT INTO students(students_name, group_id, payment) VALUES('Javohir', 1, 700000);

-- INSERT INTO students(students_name, group_id, payment) VALUES('Abror', 2, 600000);
-- INSERT INTO students(students_name, group_id, payment) VALUES('Abdulaziz', 2, 600000);
-- INSERT INTO students(students_name, group_id, payment) VALUES('Kamron', 2, 600000);
-- INSERT INTO students(students_name, group_id, payment) VALUES('Begzod', 2, 600000);

-- INSERT INTO students(students_name, group_id, payment) VALUES('Ahror', 3, 650000);
-- INSERT INTO students(students_name, group_id, payment) VALUES('Zokir', 3, 650000);
-- INSERT INTO students(students_name, group_id, payment) VALUES('Karim', 3, 650000);

-- INSERT INTO students(students_name, group_id, payment) VALUES('Gulzoda', 4, 450000);
-- INSERT INTO students(students_name, group_id, payment) VALUES('Alisher', 4, 450000);

-- INSERT INTO students(students_name, group_id, payment) VALUES('Gulchapchap', 5, 750000);
-- INSERT INTO students(students_name, group_id, payment) VALUES('Teshavoy', 5, 750000);
-- INSERT INTO students(students_name, group_id, payment) VALUES('Qozivoy', 5, 750000);

-- INSERT INTO students(students_name, group_id, payment) VALUES('Anora', 6, 800000);
-- INSERT INTO students(students_name, group_id, payment) VALUES('Humoyun', 6, 800000);

-- INSERT INTO students(students_name, group_id, payment) VALUES('Zilola', 7, 800000);
-- INSERT INTO students(students_name, group_id, payment) VALUES('Xasan', 7, 800000);
-- INSERT INTO students(students_name, group_id, payment) VALUES('Xusan', 7, 800000);

-- INSERT INTO students(students_name, group_id, payment) VALUES('Asadbek', 8, 700000);
-- INSERT INTO students(students_name, group_id, payment) VALUES('Abdulla', 8, 700000);

-- INSERT INTO students(students_name, group_id, payment) VALUES('Jasur', 9, 700000);
-- INSERT INTO students(students_name, group_id, payment) VALUES('Jamila', 9, 700000);
-- INSERT INTO students(students_name, group_id, payment) VALUES('Sayyora', 9, 700000);
-- INSERT INTO students(students_name, group_id, payment) VALUES('Saida', 9, 700000);

-- INSERT INTO students(students_name, group_id, payment) VALUES('Aziz', 10, 700000);
-- INSERT INTO students(students_name, group_id, payment) VALUES('Ezoza', 10, 700000);
-- INSERT INTO students(students_name, group_id, payment) VALUES('Olim', 10, 700000);
-- INSERT INTO students(students_name, group_id, payment) VALUES('Kamola', 10, 700000);

-- INSERT INTO students(students_name, group_id, payment) VALUES('Komila', 11, 700000);
-- INSERT INTO students(students_name, group_id, payment) VALUES('Kamol', 11, 700000);
-- INSERT INTO students(students_name, group_id, payment) VALUES('Asqar', 11, 700000);
-- INSERT INTO students(students_name, group_id, payment) VALUES('Bekmirza', 11, 700000);

-- INSERT INTO students(students_name, group_id, payment) VALUES('Sarvar', 12, 700000);
-- INSERT INTO students(students_name, group_id, payment) VALUES('Laylo', 12, 700000);
-- INSERT INTO students(students_name, group_id, payment) VALUES('Yunus', 12, 700000);

-- INSERT INTO students(students_name, group_id, payment) VALUES('Usmon', 13, 700000);
-- INSERT INTO students(students_name, group_id, payment) VALUES('Ibrohim', 13, 700000);
-- INSERT INTO students(students_name, group_id, payment) VALUES('Jahongir', 13, 700000);
-- INSERT INTO students(students_name, group_id, payment) VALUES('Madiyor', 13, 700000);

-- INSERT INTO students(students_name, group_id, payment) VALUES('Madina', 14, 700000);
-- INSERT INTO students(students_name, group_id, payment) VALUES('Sevinch', 14, 700000);
-- INSERT INTO students(students_name, group_id, payment) VALUES('Soliha', 14, 700000);
-- INSERT INTO students(students_name, group_id, payment) VALUES('Nazroz', 14, 700000);











CREATE DATABASE clinic_queue;

CREATE TABLE users(
    user_id serial not null PRIMARY KEY,
    user_name varchar(64) not null,
    user_email varchar(64) not null,
    user_password varchar(64) not null,
    isAdmin boolean default false
);

CREATE TABLE clinics(
    clinic_id serial PRIMARY KEY,
    clinic_name varchar(32) not null,
    clinic_ref_id int REFERENCES clinics(clinic_id)
);

CREATE TABLE doctors(
    doctor_id serial PRIMARY KEY,
    doctor_name varchar(64) not null
);

CREATE TABLE clinic_doctors (
    clinic_doctor_id serial not null PRIMARY KEY,
    doctor_id int,
    clinic_id int,
    FOREIGN KEY(doctor_id)
        REFERENCES doctors(doctor_id)
        ON DELETE CASCADE,
    FOREIGN KEY(clinic_id)
        REFERENCES clinics(clinic_id)
        ON DELETE CASCADE
);

CREATE TABLE queues(
    queue_id serial not null PRIMARY KEY,
    queue_time timestamptz default current_timestamp,
    client_number bigint not null,
    patient_id int REFERENCES users(user_id), 
    clinic_id int REFERENCES clinics(clinic_id),
    doctor_id int REFERENCES doctors(doctor_id),
    isApproved boolean default false,
    isDeleted boolean default false
);
