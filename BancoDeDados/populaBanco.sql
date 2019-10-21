-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 21-Out-2019 às 22:19
-- Versão do servidor: 10.4.6-MariaDB
-- versão do PHP: 7.1.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `compasso_tec`
--

--
-- Extraindo dados da tabela `aluno`
--

INSERT INTO `aluno` (`idAluno`, `Nome`, `dataNascimento`, `genero`, `codLogin`) VALUES(1, 'Elaine Lúcia da Mata', '0000-00-00', 'Feminino', 1);
INSERT INTO `aluno` (`idAluno`, `Nome`, `dataNascimento`, `genero`, `codLogin`) VALUES(2, 'Larissa Ayla Dias', '0000-00-00', 'Feminino', 2);
INSERT INTO `aluno` (`idAluno`, `Nome`, `dataNascimento`, `genero`, `codLogin`) VALUES(3, 'Kevin Cauê Bryan Barbosa', '0000-00-00', 'Masculino', 3);
INSERT INTO `aluno` (`idAluno`, `Nome`, `dataNascimento`, `genero`, `codLogin`) VALUES(4, 'Caio Edson Davi da Costa', '0000-00-00', 'Masculino', 4);
INSERT INTO `aluno` (`idAluno`, `Nome`, `dataNascimento`, `genero`, `codLogin`) VALUES(5, 'Isadora Raquel Ramos', '0000-00-00', 'Feminino', 5);

--
-- Extraindo dados da tabela `aula`
--

INSERT INTO `aula` (`idAula`, `codTurma`, `data`, `hora`, `local`) VALUES(1, 1, '2019-10-01', '13:30', 'Compasso porto alegre');
INSERT INTO `aula` (`idAula`, `codTurma`, `data`, `hora`, `local`) VALUES(2, 2, '2019-10-05', '16:00', 'Uniftec Caxias do sul');
INSERT INTO `aula` (`idAula`, `codTurma`, `data`, `hora`, `local`) VALUES(3, 3, '2019-10-19', '09:00', 'Compasso porto alegre');
INSERT INTO `aula` (`idAula`, `codTurma`, `data`, `hora`, `local`) VALUES(4, 4, '2019-10-26', '08:00', 'Compasso alegrete');
INSERT INTO `aula` (`idAula`, `codTurma`, `data`, `hora`, `local`) VALUES(5, 5, '2019-10-31', '13:30', 'USP São paulo');

--
-- Extraindo dados da tabela `curso`
--

INSERT INTO `curso` (`idCurso`, `nome`, `codProfessor`, `codTecnologia`, `descricao`, `preRequisito`, `maxAlunos`, `minAlunos`) VALUES(1, 'Javascript para iniciantes', 1, 1, 'Comece já a programar com a linguagem mais utilizada da Internet, o JavaScript. Boas práticas, truques e últimas novidades.', 'HTML e CSS', 20, 5);
INSERT INTO `curso` (`idCurso`, `nome`, `codProfessor`, `codTecnologia`, `descricao`, `preRequisito`, `maxAlunos`, `minAlunos`) VALUES(2, 'Construa programas de rede escaláveis com Node.js!', 2, 2, 'Com a Carreira Node.js, você aprenderá a construir programas de rede escaláveis!\r\n\r\nPrimeiro, vamos conhecer o HTTP, HTML5, CSS3 e JavaScript, para termos uma boa base de como é programar para web. Depois você juntará o seu conhecimento destas linguagens para entrar no mundo Node.js, aprendendo a desenvolver uma aplicação web completa com JavaScript e Node.js.\r\n\r\nO próximo desafio será desenvolver uma API e entender o estilo arquitetónico REST. Você aprenderá a escalar o seu app Node.js utilizando a API de Cluster. Para finalizar, você conhecerá uma alternativa aos bancos relacionais: o MongoDB que é NoSQL, orientado a documentos e um dos mais utilizados no momento.\r\n\r\nAo final da Formação, você estará pronto(a) para construir programas de redes escaláveis!', 'Javascript avançado e HTTP ', 30, 10);
INSERT INTO `curso` (`idCurso`, `nome`, `codProfessor`, `codTecnologia`, `descricao`, `preRequisito`, `maxAlunos`, `minAlunos`) VALUES(3, 'Crie aplicações web modernas com React!', 3, 3, 'O React é uma das formas mais modernas de se criar aplicações web!\r\n\r\nCom a Formação React, você vai construir duas aplicações. A primeira é um cadastro de livro e autores, para introduzir a tecnologia e te dar uma visão geral do que pode ser feito. Você também vai reproduzir uma famosa rede social de fotos e vídeos e, enquanto escreve as funcionalidades, vai ter a oportunidade de conhecer muito mais detalhes da biblioteca.\r\n\r\nAlém do React, você será apresentado(a) ao Redux e à forma que ele implementa o pattern Flux, criado pelo Facebook. Você também conhecerá o Create-React-App, ferramenta do Facebook que acelera o setup inicial de um novo projeto React, te poupando de várias tarefas manuais de infraestrutura.\r\n\r\nQuer criar aplicações mais legais e com menos esforço? Comece a estudar a Formação React!', 'Javascript avançado', 40, 15);
INSERT INTO `curso` (`idCurso`, `nome`, `codProfessor`, `codTecnologia`, `descricao`, `preRequisito`, `maxAlunos`, `minAlunos`) VALUES(4, 'Python para Web', 4, 4, 'A linguagem Python está entre as 5 linguagens mais populares no mundo, segundo a pesquisa da RedMonk. Essa popularidade se dá principalmente por sua característica de exigir poucas linhas de código e permitir uma leitura fácil do código, além de ter várias bibliotecas do mundo de Data Science.\r\n\r\nNa Formação Desenvolvedor Python Web, você vai aprender Python na versão 3 na prática, aplicando Orientação a Objetos em seu código e boas práticas de programação.\r\n\r\nDepois disso, você partirá para os fundamentos de HTML e CSS e, no final, ligará a linguagem Python com o que aprendeu sobre a programação Web: o resultado será uma aplicação web feita com o framework Flask.\r\n\r\nAo finalizar seus estudos na Formação, você terá a sua primeira webapp Python e toda a prática e o conhecimento necessário para avançar cada vez mais na área Python Web!', 'Lógica de programação', 15, 5);
INSERT INTO `curso` (`idCurso`, `nome`, `codProfessor`, `codTecnologia`, `descricao`, `preRequisito`, `maxAlunos`, `minAlunos`) VALUES(5, 'React Native: Criando apps nativas com JavaScript e React', 5, 5, 'Crie aplicativos móveis para as principais plataformas, smartphones ? e tablets. Aprenda Android e iOS nativo ou frameworks multiplataforma como React Native.', 'React, javascript avançado', 10, 5);

--
-- Extraindo dados da tabela `demanda`
--

INSERT INTO `demanda` (`idDemanda`, `codTecnologia`, `titulo`, `descricao`) VALUES(1, 1, 'Javascript básico', 'Gostaria de um curso básico de javascript para que está comecando');
INSERT INTO `demanda` (`idDemanda`, `codTecnologia`, `titulo`, `descricao`) VALUES(2, 2, 'Rotas e validação ', 'Gostaria de um curso focado em rotas sobre o module express e validação ');
INSERT INTO `demanda` (`idDemanda`, `codTecnologia`, `titulo`, `descricao`) VALUES(3, 4, 'Orientação a objetos', 'Gostaria de um curso focado em OO');
INSERT INTO `demanda` (`idDemanda`, `codTecnologia`, `titulo`, `descricao`) VALUES(4, 5, 'Do básico ao avançado', 'Gostaria de um curso que vá do básico ao avançado sobre o react native');
INSERT INTO `demanda` (`idDemanda`, `codTecnologia`, `titulo`, `descricao`) VALUES(5, 3, 'Components ', 'Gostaria de um curso focado em boas praticas de componentização ');

--
-- Extraindo dados da tabela `login`
--

INSERT INTO `login` (`idLogin`, `login`, `senha`, `adiministrador`) VALUES(1, 'elaineluciadamata__elaineluciadamata@bassanpeixoto.adv.br', 'SbwwajY2bn', 0);
INSERT INTO `login` (`idLogin`, `login`, `senha`, `adiministrador`) VALUES(2, 'llarissaayladias@agltda.com.br', 'B0Io9Unzhq', 0);
INSERT INTO `login` (`idLogin`, `login`, `senha`, `adiministrador`) VALUES(3, 'kkevincauebryanbarbosa@zoomfoccus.com.br', 'omycpbapJh', 0);
INSERT INTO `login` (`idLogin`, `login`, `senha`, `adiministrador`) VALUES(4, 'caioedsondavidacosta_@portalpublicidade.com.br', 'rnbk7losF8', 0);
INSERT INTO `login` (`idLogin`, `login`, `senha`, `adiministrador`) VALUES(5, 'isadoraraquelramos..isadoraraquelramos@onset.com.br', 'zEI5Yxfo8j', 0);
INSERT INTO `login` (`idLogin`, `login`, `senha`, `adiministrador`) VALUES(6, 'carolinavalentinaisabellecosta-70@shimu.com.br', 'ACaSxZr28x', 0);
INSERT INTO `login` (`idLogin`, `login`, `senha`, `adiministrador`) VALUES(7, 'alinevitoriaelisaporto_@opusvp.com.br', 'CbMgCTtGK7', 0);
INSERT INTO `login` (`idLogin`, `login`, `senha`, `adiministrador`) VALUES(8, 'ceciliaesterisabellycosta_@dc4.com.br', 'RdP0SONPoQ', 0);
INSERT INTO `login` (`idLogin`, `login`, `senha`, `adiministrador`) VALUES(9, 'claudialouiserocha-83@aulicinobastos.com.br', '25cqDNTbQE', 0);
INSERT INTO `login` (`idLogin`, `login`, `senha`, `adiministrador`) VALUES(10, 'pedroandreryansouza_@dpi.ig.br', 'U7DCyihnLw', 0);
INSERT INTO `login` (`idLogin`, `login`, `senha`, `adiministrador`) VALUES(11, 'ruan@compasso.com', '123456', 0);
INSERT INTO `login` (`idLogin`, `login`, `senha`, `adiministrador`) VALUES(12, 'marcio@compasso.com', '123456', 1);
INSERT INTO `login` (`idLogin`, `login`, `senha`, `adiministrador`) VALUES(13, 'lucas@compasso.com', '123456', 0);
INSERT INTO `login` (`idLogin`, `login`, `senha`, `adiministrador`) VALUES(14, 'a@a.com', '123456', 0);

--
-- Extraindo dados da tabela `materia`
--

INSERT INTO `materia` (`idMateria`, `titulo`, `dificuldade`, `preRequisito`, `codCurso`) VALUES(1, 'Variaveis e operadores', 'Básico', 'nenhum', 1);
INSERT INTO `materia` (`idMateria`, `titulo`, `dificuldade`, `preRequisito`, `codCurso`) VALUES(2, 'Rotas com express', 'Básico', 'nenhum', 2);
INSERT INTO `materia` (`idMateria`, `titulo`, `dificuldade`, `preRequisito`, `codCurso`) VALUES(3, 'React router', 'Intermediário', 'Criação e configuração do projeto', 3);
INSERT INTO `materia` (`idMateria`, `titulo`, `dificuldade`, `preRequisito`, `codCurso`) VALUES(4, 'Arrays, Loop e Estilos', 'Básico', 'nenhum', 4);
INSERT INTO `materia` (`idMateria`, `titulo`, `dificuldade`, `preRequisito`, `codCurso`) VALUES(5, 'Isolando componentes', 'Intermediário', 'Aulas anteriores', 5);

--
-- Extraindo dados da tabela `matricula`
--

INSERT INTO `matricula` (`idMatricula`, `codAluno`, `codTurma`) VALUES(1, 1, 1);
INSERT INTO `matricula` (`idMatricula`, `codAluno`, `codTurma`) VALUES(2, 1, 2);
INSERT INTO `matricula` (`idMatricula`, `codAluno`, `codTurma`) VALUES(3, 1, 3);
INSERT INTO `matricula` (`idMatricula`, `codAluno`, `codTurma`) VALUES(4, 2, 3);
INSERT INTO `matricula` (`idMatricula`, `codAluno`, `codTurma`) VALUES(5, 2, 4);
INSERT INTO `matricula` (`idMatricula`, `codAluno`, `codTurma`) VALUES(6, 2, 5);
INSERT INTO `matricula` (`idMatricula`, `codAluno`, `codTurma`) VALUES(7, 3, 1);
INSERT INTO `matricula` (`idMatricula`, `codAluno`, `codTurma`) VALUES(8, 3, 2);
INSERT INTO `matricula` (`idMatricula`, `codAluno`, `codTurma`) VALUES(9, 3, 3);
INSERT INTO `matricula` (`idMatricula`, `codAluno`, `codTurma`) VALUES(10, 4, 4);
INSERT INTO `matricula` (`idMatricula`, `codAluno`, `codTurma`) VALUES(11, 4, 5);
INSERT INTO `matricula` (`idMatricula`, `codAluno`, `codTurma`) VALUES(12, 4, 1);
INSERT INTO `matricula` (`idMatricula`, `codAluno`, `codTurma`) VALUES(13, 5, 2);
INSERT INTO `matricula` (`idMatricula`, `codAluno`, `codTurma`) VALUES(14, 5, 3);
INSERT INTO `matricula` (`idMatricula`, `codAluno`, `codTurma`) VALUES(15, 5, 4);

--
-- Extraindo dados da tabela `professor`
--

INSERT INTO `professor` (`idProfessor`, `nome`, `dataNascimento`, `genero`, `codLogin`) VALUES(1, 'Carolina Valentina Isabelle Costa', '1984-05-14', 'Feminino', 6);
INSERT INTO `professor` (`idProfessor`, `nome`, `dataNascimento`, `genero`, `codLogin`) VALUES(2, 'Aline Vitória Elisa Porto', '1972-06-12', 'Feminino', 7);
INSERT INTO `professor` (`idProfessor`, `nome`, `dataNascimento`, `genero`, `codLogin`) VALUES(3, 'Cecília Ester Isabelly Costa', '1984-02-22', 'Feminino', 8);
INSERT INTO `professor` (`idProfessor`, `nome`, `dataNascimento`, `genero`, `codLogin`) VALUES(4, 'Cláudia Louise Rocha', '1943-08-02', 'Feminino', 9);
INSERT INTO `professor` (`idProfessor`, `nome`, `dataNascimento`, `genero`, `codLogin`) VALUES(5, 'Pedro André Ryan Souza', '1991-10-21', 'Masculino', 10);

--
-- Extraindo dados da tabela `tecnologia`
--

INSERT INTO `tecnologia` (`idTecnologia`, `titulo`, `descricao`) VALUES(1, 'Javascript', 'JavaScript, frequentemente abreviado como JS, é uma linguagem de programação interpretada de alto nível, caracterizada também, como dinâmica, fracamente tipificada, prototype-based e multi-paradigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.');
INSERT INTO `tecnologia` (`idTecnologia`, `titulo`, `descricao`) VALUES(2, 'NodeJS', 'Node.js é um interpretador de JavaScript assíncrono com código aberto orientado a eventos, criado por Ryan Dahl em 2009, focado em migrar a programação do Javascript do cliente para os servidores');
INSERT INTO `tecnologia` (`idTecnologia`, `titulo`, `descricao`) VALUES(3, 'React', 'O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros.');
INSERT INTO `tecnologia` (`idTecnologia`, `titulo`, `descricao`) VALUES(4, 'Python', 'Python é uma linguagem de programação de alto nível, interpretada, de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte. Foi lançada por Guido van Rossum em 1991.');
INSERT INTO `tecnologia` (`idTecnologia`, `titulo`, `descricao`) VALUES(5, 'React Native', 'React Native é uma biblioteca Javascript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e IOS de forma nativa.');

--
-- Extraindo dados da tabela `turma`
--

INSERT INTO `turma` (`idTurma`, `codCurso`, `statusTurma`) VALUES(1, 1, 'pendente');
INSERT INTO `turma` (`idTurma`, `codCurso`, `statusTurma`) VALUES(2, 2, 'pendente');
INSERT INTO `turma` (`idTurma`, `codCurso`, `statusTurma`) VALUES(3, 3, 'pendente');
INSERT INTO `turma` (`idTurma`, `codCurso`, `statusTurma`) VALUES(4, 4, 'pendente');
INSERT INTO `turma` (`idTurma`, `codCurso`, `statusTurma`) VALUES(5, 5, 'pendente');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
