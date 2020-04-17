-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema looders
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Table `privilegio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `privilegio` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `cargo` TINYINT(1) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `usuario` (
  `id` INT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `email` VARCHAR(200) NOT NULL,
  `senha` VARCHAR(250) NOT NULL,
  `foto` VARCHAR(500) NULL,
  `descricao` VARCHAR(500) NULL,
  `cidade` VARCHAR(200) NULL,
  `estado` VARCHAR(2) NULL,
  `dataDeNascimento` DATE NULL,
  `tipoAp` TINYINT(1) NULL,
  `apelido` VARCHAR(100) NULL,
  `genero` TINYINT(1) NULL DEFAULT N,
  `privilegio_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  INDEX `fk_usuario_privilegio1_idx` (`privilegio_id` ASC) VISIBLE,
  CONSTRAINT `fk_usuario_privilegio1`
    FOREIGN KEY (`privilegio_id`)
    REFERENCES `privilegio` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tema`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tema` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(200) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dominio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dominio` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(80) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mecanica`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mecanica` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(80) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `jogo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jogo` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `ano` YEAR(4) NULL,
  `descricao` VARCHAR(450) NOT NULL,
  `faixaEtaria` TINYINT(2) NOT NULL,
  `duracao` TINYINT(3) NULL,
  `downtime` TINYINT(1) NULL,
  `tutorial` VARCHAR(450) NULL,
  `peso` TINYINT(2) NULL,
  `regras` VARCHAR(450) NULL,
  `qntMax` TINYINT(2) NULL,
  `qntMin` TINYINT(2) NULL,
  `notaJogo` TINYINT(2) NULL,
  `tema_id` INT NOT NULL,
  `dominio_id` INT NOT NULL,
  `mecanica_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_jogo_tema_idx` (`tema_id` ASC) VISIBLE,
  INDEX `fk_jogo_dominio1_idx` (`dominio_id` ASC) VISIBLE,
  INDEX `fk_jogo_mecanica1_idx` (`mecanica_id` ASC) VISIBLE,
  CONSTRAINT `fk_jogo_tema`
    FOREIGN KEY (`tema_id`)
    REFERENCES `tema` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_jogo_dominio1`
    FOREIGN KEY (`dominio_id`)
    REFERENCES `dominio` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_jogo_mecanica1`
    FOREIGN KEY (`mecanica_id`)
    REFERENCES `mecanica` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `usuarioJogo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `usuarioJogo` (
  `usuario_id` INT NOT NULL,
  `jogo_id` INT NOT NULL,
  PRIMARY KEY (`usuario_id`, `jogo_id`),
  INDEX `fk_usuario_has_jogo_jogo1_idx` (`jogo_id` ASC) VISIBLE,
  INDEX `fk_usuario_has_jogo_usuario1_idx` (`usuario_id` ASC) VISIBLE,
  CONSTRAINT `fk_usuario_has_jogo_usuario1`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuario_has_jogo_jogo1`
    FOREIGN KEY (`jogo_id`)
    REFERENCES `jogo` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `avaliacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `avaliacao` (
  `usuario_id` INT NOT NULL,
  `jogo_id` INT NOT NULL,
  `avaliacao` FLOAT NULL DEFAULT 0,
  PRIMARY KEY (`usuario_id`, `jogo_id`),
  INDEX `fk_usuario_has_jogo_jogo2_idx` (`jogo_id` ASC) VISIBLE,
  INDEX `fk_usuario_has_jogo_usuario2_idx` (`usuario_id` ASC) VISIBLE,
  CONSTRAINT `fk_usuario_has_jogo_usuario2`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuario_has_jogo_jogo2`
    FOREIGN KEY (`jogo_id`)
    REFERENCES `jogo` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `favorito`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `favorito` (
  `usuario_id` INT NOT NULL,
  `jogo_id` INT NOT NULL,
  `favorito` TINYINT(1) NULL DEFAULT 0,
  PRIMARY KEY (`usuario_id`, `jogo_id`),
  INDEX `fk_usuario_has_jogo_jogo2_idx` (`jogo_id` ASC) VISIBLE,
  INDEX `fk_usuario_has_jogo_usuario2_idx` (`usuario_id` ASC) VISIBLE,
  CONSTRAINT `fk_usuario_has_jogo_usuario20`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuario_has_jogo_jogo20`
    FOREIGN KEY (`jogo_id`)
    REFERENCES `jogo` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `joguei`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `joguei` (
  `usuario_id` INT NOT NULL,
  `jogo_id` INT NOT NULL,
  `joguei` TINYINT(1) NULL DEFAULT 0,
  PRIMARY KEY (`usuario_id`, `jogo_id`),
  INDEX `fk_usuario_has_jogo_jogo1_idx` (`jogo_id` ASC) VISIBLE,
  INDEX `fk_usuario_has_jogo_usuario1_idx` (`usuario_id` ASC) VISIBLE,
  CONSTRAINT `fk_usuario_has_jogo_usuario10`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuario_has_jogo_jogo10`
    FOREIGN KEY (`jogo_id`)
    REFERENCES `jogo` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;