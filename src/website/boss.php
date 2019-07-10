<body class="boss1">
    <div class="boss-area">
        <div class="boss b1">
            <div class="current_life"></div>
        </div>
    </div>
    <div class="raid-area">
        <div class="raid">
<?php
            // generate raid frames
            for($raider_counter = 1; $raider_counter <= $total_raiders; $raider_counter++)
            {
                echo '<div id="r'.$raider_counter.'" class="raider ';
                // tank
                if($raider_counter <= $total_tanks)
                {
                    echo 'tank">';
                    echo '<img src="../img/tank.png">';
                }
                // healer
                elseif($raider_counter > $total_tanks + $total_dps)
                {
                    echo 'healer">';
                    echo '<img src="../img/healer.png">';
                }
                // dps
                else
                {
                    echo 'dps">';
                    echo '<img src="../img/dps.png">';
                }
?>
                    <div class="current_life_text_wrapper">
                        <div class="current_life_text">100%</div>
                        <!-- death display -->
                        <div class="dead">
                            <div class="dead_text"><i>DEAD</i></div>
                            <img src="../img/skull.png">
                        </div>
                    </div>
                    <div class="current_life_bar"></div>
                    <div class="incoming_heal"></div>
                </div>
<?php
            }
?>
            <div class="clearer"></div>
        </div>
    </div>
    <div class="manabar_area">
        <div class="manabar"></div>
    </div>
    <div class="castbar_area">
        <div class="castbar"></div>
    </div>
    <div class="cd_area"></div>
</body>
</html>