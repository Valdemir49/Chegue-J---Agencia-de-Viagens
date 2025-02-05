create database agencia_de_viagenis;
use agencia_de_viagenis;

CREATE TABLE Clientes 
( 
 id_cliente INT primary key auto_increment,  
 Nome VARCHAR(100),  
 Email VARCHAR(100),  
 Telefone VARCHAR(50),  
 Endereço VARCHAR(500),  
 CPF INT,  
 RG INT,  
 Data_de_Nascimento DATE,  
 Sexo VARCHAR(20),  
 Passaporte INT  
); 

CREATE TABLE Pagamentos 
( 
 id_pagamento INT primary key auto_increment,  
 formaDePagamento VARCHAR(30),  
 Valor FLOAT 
); 

CREATE TABLE Viagens 
( 
 id_viagem INT primary key auto_increment,  
 Destino VARCHAR(30),  
 Descrição VARCHAR(200),  
 id_cliente INT,  
 id_pagamento INT, 
 foreign key(id_cliente) references clientes(id_cliente),
 foreign key(id_pagamento) references Pagamentos(id_pagamento)
); 

CREATE TABLE Categoria 
( 
 id_categoria INT primary key auto_increment,  
 Nome VARCHAR(100),  
 id_viagem INT, 
 foreign key(id_viagem) references Viagens(id_viagem)
); 