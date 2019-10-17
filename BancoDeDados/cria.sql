-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 17-Out-2019 às 22:27
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
CREATE DATABASE IF NOT EXISTS `compasso_tec` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `compasso_tec`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `aluno`
--

CREATE TABLE `aluno` (
  `idAluno` int(11) NOT NULL,
  `Nome` varchar(255) NOT NULL,
  `dataNascimento` date NOT NULL,
  `genero` varchar(9) NOT NULL,
  `codLogin` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
  `preRequisito` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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

-- --------------------------------------------------------

--
-- Estrutura da tabela `login`
--

CREATE TABLE `login` (
  `idLogin` int(11) NOT NULL,
  `login` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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

-- --------------------------------------------------------

--
-- Estrutura da tabela `matricula`
--

CREATE TABLE `matricula` (
  `idMatricula` int(11) NOT NULL,
  `codAluno` int(11) NOT NULL,
  `codTurma` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `professor`
--

CREATE TABLE `professor` (
  `idProfessor` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `dataNascimento` date NOT NULL,
  `genero` varchar(9) NOT NULL,
  `codLogin` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tecnologia`
--

CREATE TABLE `tecnologia` (
  `idTecnologia` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `descricao` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `turma`
--

CREATE TABLE `turma` (
  `idTurma` int(11) NOT NULL,
  `codCurso` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `aluno`
--
ALTER TABLE `aluno`
  ADD PRIMARY KEY (`idAluno`),
  ADD KEY `LoginFK` (`codLogin`);

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
  ADD KEY `AlunoFKMatricula` (`codAluno`),
  ADD KEY `TurmaFKMatricula` (`codTurma`);

--
-- Índices para tabela `professor`
--
ALTER TABLE `professor`
  ADD PRIMARY KEY (`idProfessor`),
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
-- AUTO_INCREMENT de tabela `aluno`
--
ALTER TABLE `aluno`
  MODIFY `idAluno` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `curso`
--
ALTER TABLE `curso`
  MODIFY `idCurso` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `demanda`
--
ALTER TABLE `demanda`
  MODIFY `idDemanda` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `login`
--
ALTER TABLE `login`
  MODIFY `idLogin` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `materia`
--
ALTER TABLE `materia`
  MODIFY `idMateria` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `matricula`
--
ALTER TABLE `matricula`
  MODIFY `idMatricula` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `professor`
--
ALTER TABLE `professor`
  MODIFY `idProfessor` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tecnologia`
--
ALTER TABLE `tecnologia`
  MODIFY `idTecnologia` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `turma`
--
ALTER TABLE `turma`
  MODIFY `idTurma` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `aluno`
--
ALTER TABLE `aluno`
  ADD CONSTRAINT `LoginFK` FOREIGN KEY (`codLogin`) REFERENCES `login` (`idLogin`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `curso`
--
ALTER TABLE `curso`
  ADD CONSTRAINT `ProfessorFK` FOREIGN KEY (`codProfessor`) REFERENCES `professor` (`idProfessor`) ON DELETE CASCADE ON UPDATE CASCADE,
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
  ADD CONSTRAINT `AlunoFKMatricula` FOREIGN KEY (`codAluno`) REFERENCES `aluno` (`idAluno`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `TurmaFKMatricula` FOREIGN KEY (`codTurma`) REFERENCES `turma` (`idTurma`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `professor`
--
ALTER TABLE `professor`
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
