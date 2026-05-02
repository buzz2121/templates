Add-Type -AssemblyName System.Drawing

$img = [System.Drawing.Image]::FromFile("c:\Users\Office\Desktop\astro3\astro_temp\assets\zodiac_sprite.png")
$bmp = New-Object System.Drawing.Bitmap($img)

$output = "Top left pixel: " + $bmp.GetPixel(0,0).ToString() + "`n"
$output += "Pixel at (0, 10): " + $bmp.GetPixel(0,10).ToString() + "`n"
$output += "Pixel at (0, 20): " + $bmp.GetPixel(0,20).ToString() + "`n"
$output += "Pixel at (42, 35): " + $bmp.GetPixel(42,35).ToString() + " (center of first icon)`n"

Write-Output $output

$bmp.Dispose()
$img.Dispose()
