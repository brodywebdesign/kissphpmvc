CREATE TABLE `Machines` (
  `id` SERIAL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` tinytext,
  `location` tinytext,
  `bins` int(10) NOT NULL /* Product Bins */
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `Status` (
  `id` SERIAL AUTO_INCREMENT,
  `machine_id` bigint(20) unsigned NOT NULL,
  `last_boot` datetime NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY `machine_id` (`machine_id`),
  CONSTRAINT `machine_x_status_ibfk_1` FOREIGN KEY (`machine_id`) REFERENCES `Machines` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `Stock` (
  `id` SERIAL AUTO_INCREMENT,
  `machine_id` bigint(20) unsigned NOT NULL,
  `item_id` varchar(255) NOT NULL,
  `bin` int(10) NOT NULL,
  `bin_capacity` int(10) NOT NULL,
  `despensed` int(10) NOT NULL default 0,
  `updated` datetime NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY `machine_id` (`machine_id`),
  CONSTRAINT `machine_x_stock_ibfk_1` FOREIGN KEY (`machine_id`) REFERENCES `Machines` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `machine_x_billCollectorReport`(
  `id` SERIAL AUTO_INCREMENT,
  `machine_id` bigint(20) unsigned NOT NULL,
  `status` ENUM('81H','82H','83H','84H','85H','86H','87H','88H','89H','88H','89H','8AH','8BH','8CH','8DH'),
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY `machine_id` (`machine_id`),
  CONSTRAINT `machine_x_billCollectorReport_ibfk_1` FOREIGN KEY (`machine_id`) REFERENCES `Machines` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `machine_x_buttonPressReport` (
  `id` SERIAL AUTO_INCREMENT,
  `machine_id` bigint(20) unsigned NOT NULL,
  `button` int(1) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY `machine_id` (`machine_id`),
  CONSTRAINT `machine_x_buttonPressReport_ibfk_1` FOREIGN KEY (`machine_id`) REFERENCES `Machines` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `machine_x_sensorTriggerReport` (
  `id` SERIAL AUTO_INCREMENT,
  `machine_id` bigint(20) unsigned NOT NULL,
  `sensor` int(1) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY `machine_id` (`machine_id`),
  CONSTRAINT `machine_x_sensorTriggerReport_ibfk_1` FOREIGN KEY (`machine_id`) REFERENCES `Machines` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

