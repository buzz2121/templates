Add-Type -AssemblyName System.Drawing

$img = [System.Drawing.Image]::FromFile("c:\Users\Office\Desktop\astro3\astro_temp\assets\zodiac_sprite.png")
$bmp = New-Object System.Drawing.Bitmap($img)

$output = ""
for ($y = 0; $y -lt 10; $y++) {
    $c = $bmp.GetPixel(0, $y)
    $output += "Y=$y : $($c.R), $($c.G), $($c.B)`n"
}

Write-Output $output

$bmp.Dispose()
$img.Dispose()
