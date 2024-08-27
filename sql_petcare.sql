CREATE TABLE pet (
    raca VARCHAR,
    nome VARCHAR,
    id_pet serial PRIMARY KEY,
    idade int,
    tiposangue VARCHAR,
    especie VARCHAR,
    vacina VARCHAR,
    enfermidade VARCHAR,
    id_cliente int
);

CREATE TABLE cliente (
    id_cliente serial PRIMARY KEY,
    nome VARCHAR,
    CPF VARCHAR,
    email VARCHAR,
    senha VARCHAR
);

CREATE TABLE endereco (
    estado VARCHAR,
    cidade VARCHAR,
    bairro VARCHAR,
    numero int,
    rua VARCHAR,
    CEP VARCHAR,
    complemento VARCHAR,
    id_clinica int
);

CREATE TABLE profissional (
    id_profissional serial PRIMARY KEY,
    nome VARCHAR,
    CRV VARCHAR,
    id_clinica int
);

CREATE TABLE clinica (
    id_clinica serial PRIMARY KEY,
    cnpj VARCHAR,
    nomefantasia VARCHAR,
    nome VARCHAR,
    unidade VARCHAR
);

CREATE TABLE agendamento (
    id_profissional int,
    id_pet int,
    id_agenda serial PRIMARY KEY,
    data date,
    horario timestamp,
    tipo VARCHAR,
    unidade VARCHAR,
    detalhes VARCHAR
);

ALTER TABLE pet ADD CONSTRAINT FK_pet_2
    FOREIGN KEY (id_cliente)
    REFERENCES cliente (id_cliente)
    ON DELETE RESTRICT;

ALTER TABLE endereco ADD CONSTRAINT FK_endereco_1
    FOREIGN KEY (id_clinica)
    REFERENCES clinica (id_clinica)
    ON DELETE CASCADE;

ALTER TABLE profissional ADD CONSTRAINT FK_profissional_2
    FOREIGN KEY (id_clinica)
    REFERENCES clinica (id_clinica)
    ON DELETE CASCADE;

ALTER TABLE agendamento ADD CONSTRAINT FK_agendamento_2
    FOREIGN KEY (id_profissional)
    REFERENCES profissional (id_profissional)
    ON DELETE RESTRICT;

ALTER TABLE agendamento ADD CONSTRAINT FK_agendamento_3
    FOREIGN KEY (id_pet)
    REFERENCES pet (id_pet)
    ON DELETE SET NULL;

INSERT INTO cliente (nome, cpf, email, senha) VALUES
('Ana Silva', '123.456.789-01', 'ana.silva@email.com', 'senha123'),
('Bruno Costa', '987.654.321-00', 'bruno.costa@email.com', 'senha456'),
('Carlos Pereira', '123.789.456-01', 'carlos.pereira@email.com', 'senha789'),
('Daniela Santos', '987.123.654-00', 'daniela.santos@email.com', 'senha101'),
('Juliana Rocha', '753.159.486-00', 'juliana.rocha@email.com', 'senha707');

INSERT INTO clinica (cnpj, nomefantasia, nome, unidade) VALUES
('12345678000199', 'Pet Care', 'Pet Care Clínica', '001'),
('23456789000188', 'Pet Saúde', 'Pet Saúde Veterinária', '002'),
('34567890000177', 'Vida Animal', 'Vida Animal Clinic', '003'),
('45678901000166', 'Pet Amigos', 'Pet Amigos Clinic', '004'),
('56789012000155', 'Bicho Feliz', 'Bicho Feliz Vet', '005');

INSERT INTO pet (nome, raca, especie, idade, tiposangue, vacina, enfermidade, id_cliente) VALUES
('Rex', 'Labrador', 'Cachorro', 5, 'A+', 'Vacina Antirrábica', 'Nenhuma', 1),
('Mia', 'Siamês', 'Gato', 3, 'B-', 'Vacina Polivalente', 'Nenhuma', 2),
('Bolt', 'Poodle', 'Cachorro', 2, 'AB+', 'Vacina Antirrábica', 'Nenhuma', 3),
('Luna', 'Persa', 'Gato', 4, 'O-', 'Vacina Polivalente', 'Nenhuma', 4),
('Buddy', 'Golden Retriever', 'Cachorro', 7, 'A-', 'Vacina Antirrábica', 'Nenhuma', 5);

INSERT INTO profissional (nome, crv, id_clinica) VALUES
('Dr. Lucas Mendes', 'CRV-12345', 1),
('Dra. Juliana Reis', 'CRV-23456', 2),
('Dr. Rafael Costa', 'CRV-34567', 3),
('Dra. Mariana Silva', 'CRV-45678', 4),
('Dra. Beatriz Martins', 'CRV-01234', 5);

INSERT INTO agendamento (data, horario, tipo, unidade, detalhes, id_pet, id_profissional) VALUES
('2024-08-10', '2024-08-10 09:00', 'consulta', '001', 'Consulta de rotina', 1, 1),
('2024-08-11', '2024-08-11 10:00', 'exame', '002', 'Exame de sangue', 2, 2),
('2024-08-12', '2024-08-12 11:00', 'exame', '003', 'Raio X', 3, 3),
('2024-08-13', '2024-08-13 14:00', 'cirurgia media', '004', 'Cirurgia ortopédica', 4, 4),
('2024-08-14', '2024-08-14 15:00', 'cirurgia grave', '005', 'Cirurgia de emergência', 5, 5);

INSERT INTO endereco (cep, rua, numero, bairro, cidade, estado, complemento, id_clinica) VALUES
('29060-000', 'Avenida Paulista', 123, 'Centro', 'Vitória', 'ES', 'Apto 101', 1),
('29055-000', 'Rua da Praia', 456, 'Praia do Canto', 'Vitória', 'ES', 'Casa 2', 2),
('29075-000', 'Rua do Porto', 789, 'Centro', 'Vitória', 'ES', 'Sede principal', 3),
('29100-000', 'Avenida Beira Mar', 101, 'Jardim da Penha', 'Vitória', 'ES', 'Bloco A', 4),
('29080-000', 'Avenida do Contorno', 707, 'Horto', 'Vitória', 'ES', 'Edifício Verde', 5);