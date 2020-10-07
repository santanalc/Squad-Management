DROP SCHEMA IF EXISTS `squad-management`;

CREATE SCHEMA IF NOT EXISTS `squad-management`;

USE `squad-management`;

CREATE TABLE IF NOT EXISTS `squad-management`.`Team` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(200) NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  `formation` VARCHAR(45) NOT NULL,
  `site` VARCHAR(45) NOT NULL,
  `type` TINYINT(1) NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `squad-management`.`Player` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(200) NOT NULL,
  `age` INT NOT NULL,
  `position` INT NOT NULL,
  `id_team` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Player_Team_idx` (`id_team` ASC) VISIBLE,
  CONSTRAINT `fk_Player_Team` FOREIGN KEY (`id_team`) REFERENCES `squad-management`.`Team` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;