<?php
/* meta config */
$raid_name = "ini-1";
$boss_name = "boss-1";

/* boss config */
$total_tanks = 2;
$total_dps = 6;
$total_healers = 2;

/* automatic config */
$total_raiders = $total_tanks + $total_dps + $total_healers;

/* content */
include("../head.php");
include("../boss.php");
?>