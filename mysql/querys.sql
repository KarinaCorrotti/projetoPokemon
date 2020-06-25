-------------------Deletar DATABASES--------------
DROP DATABASE nome_da_tabela;

-------------------Criar DATABASES----------------
CREATE DATABASE pokedex;

-------------------Selecionar DATABASES-----------
USE pokedex;

-------------------Criar TABELAS------------------
CREATE TABLE nome_da_tabela(
    Id INT NOT NULL AUTO_INCREMENT,
    Name char(20) NOT NULL,
    idade INT NOT NULL,
    altura decimal NOT NULL,
    PRIMARY KEY (Id)
);

-------------------Mostrar TABELAS----------------
SHOW TABLES;

-------------------Select TABELAS-----------------
SELECT * FROM users;

-------------------Iserir na TABELA---------------
INSERT INTO nome_da_tabela()
VALUES ();

-------------------Criar TABELA USERS-------------
CREATE TABLE users(
    userId INT NOT NULL AUTO_INCREMENT,
    userName char(20) NOT NULL,
    userPassword char(20) NOT NULL,
    userPokemon INT NOT NULL,
    PRIMARY KEY (userId)
);

-------------------Iserir na TABELA usuarios admin-
INSERT INTO users(userName, userPassword, userPokemon)
VALUES ('kakinha', '12345', 3);


ALTER TABLE users
MODIFY COLUMN userPassword char(20) NOT NULL;