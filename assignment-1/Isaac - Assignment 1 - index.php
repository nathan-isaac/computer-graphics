<?php

function x($x)
{
    return 0.5 * exp(3 * $x/4) + 8 * sin(9 * $x) - 9 * cos(7 * $x) + 21;
}

function spaces($number)
{
    $spaces = "";
    for($number; $number > 0; $number--)
    {
        $spaces .= " ";
    }
    return $spaces;
}

for($i = 5; $i > 0; $i = $i - 0.1)
{
    echo spaces(x($i))."*\n";
}

