-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 31-Out-2019 às 20:54
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

-- --------------------------------------------------------

--
-- Estrutura da tabela `aula`
--

CREATE TABLE `aula` (
  `idAula` int(11) NOT NULL,
  `codTurma` int(11) NOT NULL,
  `data` date NOT NULL,
  `hora` varchar(5) NOT NULL,
  `local` varchar(255) NOT NULL,
  `topico` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `aula`
--

INSERT INTO `aula` (`idAula`, `codTurma`, `data`, `hora`, `local`, `topico`) VALUES
(1, 1, '2019-10-01', '13:30', 'Compasso porto alegre', ''),
(2, 2, '2019-10-05', '16:00', 'Uniftec Caxias do sul', 'Rotas estáticas'),
(3, 3, '2019-10-19', '09:00', 'Compasso porto alegre', ''),
(4, 4, '2019-10-26', '08:00', 'Compasso alegrete', ''),
(5, 5, '2019-10-31', '13:30', 'USP São paulo', ''),
(13, 4, '2019-10-02', '13:30', 'adsds', 'adsdasad'),
(14, 4, '2019-10-03', '16:00', 'aasd', 'dsadas'),
(24, 26, '2019-10-01', '22:00', 'caxias do sul', 'Inicio das aulas'),
(25, 26, '2019-10-08', '22:00', 'Caxias do sul', 'Terminando no final');

-- --------------------------------------------------------

--
-- Estrutura da tabela `curso`
--

CREATE TABLE `curso` (
  `idCurso` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `codProfessor` int(11) NOT NULL,
  `codTecnologia` int(11) NOT NULL,
  `descricao` text NOT NULL,
  `preRequisito` text DEFAULT NULL,
  `maxAlunos` int(11) NOT NULL,
  `minAlunos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `curso`
--

INSERT INTO `curso` (`idCurso`, `nome`, `codProfessor`, `codTecnologia`, `descricao`, `preRequisito`, `maxAlunos`, `minAlunos`) VALUES
(1, 'Javascript para iniciantes', 1, 1, 'Comece já a programar com a linguagem mais utilizada da Internet, o JavaScript. Boas práticas, truques e últimas novidades.', 'HTML e CSS', 20, 5),
(2, 'Construa programas de rede escaláveis com Node.js!', 2, 2, 'Com a Carreira Node.js, você aprenderá a construir programas de rede escaláveis!\r\n\r\nPrimeiro, vamos conhecer o HTTP, HTML5, CSS3 e JavaScript, para termos uma boa base de como é programar para web. Depois você juntará o seu conhecimento destas linguagens para entrar no mundo Node.js, aprendendo a desenvolver uma aplicação web completa com JavaScript e Node.js.\r\n\r\nO próximo desafio será desenvolver uma API e entender o estilo arquitetónico REST. Você aprenderá a escalar o seu app Node.js utilizando a API de Cluster. Para finalizar, você conhecerá uma alternativa aos bancos relacionais: o MongoDB que é NoSQL, orientado a documentos e um dos mais utilizados no momento.\r\n\r\nAo final da Formação, você estará pronto(a) para construir programas de redes escaláveis!', 'Javascript avançado e HTTP ', 30, 10),
(3, 'Crie aplicações web modernas com React!', 3, 3, 'O React é uma das formas mais modernas de se criar aplicações web!\r\n\r\nCom a Formação React, você vai construir duas aplicações. A primeira é um cadastro de livro e autores, para introduzir a tecnologia e te dar uma visão geral do que pode ser feito. Você também vai reproduzir uma famosa rede social de fotos e vídeos e, enquanto escreve as funcionalidades, vai ter a oportunidade de conhecer muito mais detalhes da biblioteca.\r\n\r\nAlém do React, você será apresentado(a) ao Redux e à forma que ele implementa o pattern Flux, criado pelo Facebook. Você também conhecerá o Create-React-App, ferramenta do Facebook que acelera o setup inicial de um novo projeto React, te poupando de várias tarefas manuais de infraestrutura.\r\n\r\nQuer criar aplicações mais legais e com menos esforço? Comece a estudar a Formação React!', 'Javascript avançado', 40, 15),
(4, 'Python para Web', 4, 4, 'A linguagem Python está entre as 5 linguagens mais populares no mundo, segundo a pesquisa da RedMonk. Essa popularidade se dá principalmente por sua característica de exigir poucas linhas de código e permitir uma leitura fácil do código, além de ter várias bibliotecas do mundo de Data Science.\r\n\r\nNa Formação Desenvolvedor Python Web, você vai aprender Python na versão 3 na prática, aplicando Orientação a Objetos em seu código e boas práticas de programação.\r\n\r\nDepois disso, você partirá para os fundamentos de HTML e CSS e, no final, ligará a linguagem Python com o que aprendeu sobre a programação Web: o resultado será uma aplicação web feita com o framework Flask.\r\n\r\nAo finalizar seus estudos na Formação, você terá a sua primeira webapp Python e toda a prática e o conhecimento necessário para avançar cada vez mais na área Python Web!', 'Lógica de programação', 15, 5),
(5, 'React Native: Criando apps nativas com JavaScript e React', 5, 5, 'Crie aplicativos móveis para as principais plataformas, smartphones ? e tablets. Aprenda Android e iOS nativo ou frameworks multiplataforma como React Native.', 'React, javascript avançado', 10, 5),
(42, 'React aprendendo rotas', 18, 3, 'Um curso para você aprender a fazer roteamentos ', 'javascript avançado', 20, 5);

-- --------------------------------------------------------

--
-- Estrutura da tabela `demanda`
--

CREATE TABLE `demanda` (
  `idDemanda` int(11) NOT NULL,
  `codTecnologia` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `descricao` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `demanda`
--

INSERT INTO `demanda` (`idDemanda`, `codTecnologia`, `titulo`, `descricao`) VALUES
(1, 1, 'Javascript básico', 'Gostaria de um curso básico de javascript para que está comecando'),
(2, 2, 'Rotas e validação ', 'Gostaria de um curso focado em rotas sobre o module express e validação '),
(3, 4, 'Orientação a objetos', 'Gostaria de um curso focado em OO'),
(4, 5, 'Do básico ao avançado', 'Gostaria de um curso que vá do básico ao avançado sobre o react native'),
(5, 3, 'Components ', 'Gostaria de um curso focado em boas praticas de componentização ');

-- --------------------------------------------------------

--
-- Estrutura da tabela `login`
--

CREATE TABLE `login` (
  `idLogin` int(11) NOT NULL,
  `login` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `adiministrador` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `login`
--

INSERT INTO `login` (`idLogin`, `login`, `senha`, `adiministrador`) VALUES
(1, 'elaineluciadamata__elaineluciadamata@bassanpeixoto.adv.br', 'SbwwajY2bn', 0),
(2, 'llarissaayladias@agltda.com.br', 'B0Io9Unzhq', 0),
(3, 'kkevincauebryanbarbosa@zoomfoccus.com.br', 'omycpbapJh', 0),
(4, 'caioedsondavidacosta_@portalpublicidade.com.br', 'rnbk7losF8', 0),
(5, 'isadoraraquelramos..isadoraraquelramos@onset.com.br', 'zEI5Yxfo8j', 0),
(18, 'ruan@compasso.com', '123456', 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `materia`
--

CREATE TABLE `materia` (
  `idMateria` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `dificuldade` varchar(50) NOT NULL,
  `preRequisito` varchar(255) NOT NULL,
  `codCurso` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `materia`
--

INSERT INTO `materia` (`idMateria`, `titulo`, `dificuldade`, `preRequisito`, `codCurso`) VALUES
(1, 'Variaveis e operadores', 'Básico', 'nenhum', 1),
(2, 'Rotas com express', 'Básico', 'nenhum', 2),
(3, 'React router', 'Intermediário', 'Criação e configuração do projeto', 3),
(4, 'Arrays, Loop e Estilos', 'Básico', 'nenhum', 4),
(5, 'Isolando componentes', 'Intermediário', 'Aulas anteriores', 5);

-- --------------------------------------------------------

--
-- Estrutura da tabela `matricula`
--

CREATE TABLE `matricula` (
  `idMatricula` int(11) NOT NULL,
  `codAluno` int(11) NOT NULL,
  `codTurma` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `matricula`
--

INSERT INTO `matricula` (`idMatricula`, `codAluno`, `codTurma`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 2, 3),
(5, 2, 4),
(6, 2, 5),
(7, 3, 1),
(8, 3, 2),
(9, 3, 3),
(10, 4, 4),
(11, 4, 5),
(12, 4, 1),
(13, 5, 2),
(14, 5, 3),
(15, 5, 4);

-- --------------------------------------------------------

--
-- Estrutura da tabela `pessoa`
--

CREATE TABLE `pessoa` (
  `idPessoa` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `dataNascimento` date NOT NULL,
  `genero` varchar(9) NOT NULL,
  `codLogin` int(11) NOT NULL,
  `telefone` varchar(30) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `foto` varchar(255) DEFAULT NULL,
  `cidade` varchar(255) DEFAULT NULL,
  `tipo` varchar(30) NOT NULL DEFAULT 'Aluno'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `pessoa`
--

INSERT INTO `pessoa` (`idPessoa`, `nome`, `dataNascimento`, `genero`, `codLogin`, `telefone`, `email`, `foto`, `cidade`, `tipo`) VALUES
(6, 'Elaine Lucia da Mata', '1958-03-17', 'Feminino', 1, ' (69) 98443-0711', 'elaineluciadamata__elaineluciadamata@bassanpeixoto.adv.br', NULL, 'Caxias do sul', 'Professor'),
(7, 'Larissa dias', '1983-12-25', 'Feminino', 2, '(51) 98965-7381', '', NULL, 'Porto Alegre', 'Aluno'),
(8, 'Kevin Caue Barbosa', '1960-02-16', 'Masculino', 3, '(55) 3818-3810', 'kkevincauebryanbarbosa@zoomfoccus.com.br', NULL, 'Alegrete', 'Aluno'),
(9, 'Caio Edson David Costa', '1941-05-15', 'Masculino', 4, '(51) 3856-6713', 'caioedsondavidacosta_@portalpublicidade.com.br', NULL, 'Novo Hamburgo', 'Professor'),
(10, 'Isadora Raquel Ramos', '1975-02-13', 'Feminino', 5, '(55) 3859-6462', 'isadoraraquelramos..isadoraraquelramos@onset.com.br', NULL, 'Alegrete', 'Aluno'),
(11, 'Ruan de Matos Ferreira', '1996-02-05', 'Masculino', 18, '54991243479', 'ruanmatos96@gmail.com', NULL, 'Caxias do Sul', 'Professor');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tecnologia`
--

CREATE TABLE `tecnologia` (
  `idTecnologia` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `descricao` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `tecnologia`
--

INSERT INTO `tecnologia` (`idTecnologia`, `titulo`, `descricao`) VALUES
(1, 'Javascript', 'JavaScript, frequentemente abreviado como JS, é uma linguagem de programação interpretada de alto nível, caracterizada também, como dinâmica, fracamente tipificada, prototype-based e multi-paradigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.'),
(2, 'NodeJS', 'Node.js é um interpretador de JavaScript assíncrono com código aberto orientado a eventos, criado por Ryan Dahl em 2009, focado em migrar a programação do Javascript do cliente para os servidores'),
(3, 'React', 'O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros.'),
(4, 'Python', 'Python é uma linguagem de programação de alto nível, interpretada, de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte. Foi lançada por Guido van Rossum em 1991.'),
(5, 'React Native', 'React Native é uma biblioteca Javascript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e IOS de forma nativa.');

-- --------------------------------------------------------

--
-- Estrutura da tabela `turma`
--

CREATE TABLE `turma` (
  `idTurma` int(11) NOT NULL,
  `codCurso` int(11) NOT NULL,
  `statusTurma` varchar(30) DEFAULT 'pendente'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `turma`
--

INSERT INTO `turma` (`idTurma`, `codCurso`, `statusTurma`) VALUES
(1, 1, 'pendente'),
(2, 2, 'pendente'),
(3, 3, 'pendente'),
(4, 4, 'pendente'),
(5, 5, 'pendente'),
(26, 42, 'pendente');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `aula`
--
ALTER TABLE `aula`
  ADD PRIMARY KEY (`idAula`),
  ADD KEY `TurmaFKAula` (`codTurma`);

--
-- Índices para tabela `curso`
--
ALTER TABLE `curso`
  ADD PRIMARY KEY (`idCurso`),
  ADD KEY `TecnologiaFK` (`codTecnologia`),
  ADD KEY `ProfessorFK` (`codProfessor`);

--
-- Índices para tabela `demanda`
--
ALTER TABLE `demanda`
  ADD PRIMARY KEY (`idDemanda`),
  ADD KEY `TecnologiaFKDemanda` (`codTecnologia`);

--
-- Índices para tabela `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`idLogin`);

--
-- Índices para tabela `materia`
--
ALTER TABLE `materia`
  ADD PRIMARY KEY (`idMateria`),
  ADD KEY `CursoFKMateria` (`codCurso`);

--
-- Índices para tabela `matricula`
--
ALTER TABLE `matricula`
  ADD PRIMARY KEY (`idMatricula`),
  ADD KEY `TurmaFKMatricula` (`codTurma`),
  ADD KEY `AlunoFKMatricula` (`codAluno`);

--
-- Índices para tabela `pessoa`
--
ALTER TABLE `pessoa`
  ADD PRIMARY KEY (`idPessoa`),
  ADD KEY `LoginFKProfessor` (`codLogin`);

--
-- Índices para tabela `tecnologia`
--
ALTER TABLE `tecnologia`
  ADD PRIMARY KEY (`idTecnologia`);

--
-- Índices para tabela `turma`
--
ALTER TABLE `turma`
  ADD PRIMARY KEY (`idTurma`),
  ADD KEY `CursoFKTurma` (`codCurso`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `aula`
--
ALTER TABLE `aula`
  MODIFY `idAula` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de tabela `curso`
--
ALTER TABLE `curso`
  MODIFY `idCurso` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT de tabela `demanda`
--
ALTER TABLE `demanda`
  MODIFY `idDemanda` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `login`
--
ALTER TABLE `login`
  MODIFY `idLogin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de tabela `materia`
--
ALTER TABLE `materia`
  MODIFY `idMateria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `matricula`
--
ALTER TABLE `matricula`
  MODIFY `idMatricula` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de tabela `pessoa`
--
ALTER TABLE `pessoa`
  MODIFY `idPessoa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de tabela `tecnologia`
--
ALTER TABLE `tecnologia`
  MODIFY `idTecnologia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `turma`
--
ALTER TABLE `turma`
  MODIFY `idTurma` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `aula`
--
ALTER TABLE `aula`
  ADD CONSTRAINT `TurmaFKAula` FOREIGN KEY (`codTurma`) REFERENCES `turma` (`idTurma`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `curso`
--
ALTER TABLE `curso`
  ADD CONSTRAINT `ProfessorFK` FOREIGN KEY (`codProfessor`) REFERENCES `login` (`idLogin`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `TecnologiaFK` FOREIGN KEY (`codTecnologia`) REFERENCES `tecnologia` (`idTecnologia`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `demanda`
--
ALTER TABLE `demanda`
  ADD CONSTRAINT `TecnologiaFKDemanda` FOREIGN KEY (`codTecnologia`) REFERENCES `tecnologia` (`idTecnologia`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `materia`
--
ALTER TABLE `materia`
  ADD CONSTRAINT `CursoFKMateria` FOREIGN KEY (`codCurso`) REFERENCES `curso` (`idCurso`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `matricula`
--
ALTER TABLE `matricula`
  ADD CONSTRAINT `AlunoFKMatricula` FOREIGN KEY (`codAluno`) REFERENCES `login` (`idLogin`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `TurmaFKMatricula` FOREIGN KEY (`codTurma`) REFERENCES `turma` (`idTurma`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `pessoa`
--
ALTER TABLE `pessoa`
  ADD CONSTRAINT `LoginFKProfessor` FOREIGN KEY (`codLogin`) REFERENCES `login` (`idLogin`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `turma`
--
ALTER TABLE `turma`
  ADD CONSTRAINT `CursoFKTurma` FOREIGN KEY (`codCurso`) REFERENCES `curso` (`idCurso`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
