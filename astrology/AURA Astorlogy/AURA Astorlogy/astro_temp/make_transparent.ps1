Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("c:\Users\Office\Desktop\astro3\astro_temp\assets\zodiac_sprite.png")
$width = $img.Width / 12

for ($i = 0; $i -lt 12; $i++) {
    $startY = 3
    $cropHeight = 45
    $bmpCropped = New-Object System.Drawing.Bitmap([int]$width, [int]$cropHeight)
    $gCropped = [System.Drawing.Graphics]::FromImage($bmpCropped)
    
    $srcRect = New-Object System.Drawing.Rectangle([int]($i * $width), [int]$startY, [int]$width, [int]$cropHeight)
    $destRect = New-Object System.Drawing.Rectangle(0, 0, [int]$width, [int]$cropHeight)
    
    $gCropped.DrawImage($img, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
    
    # Process pixels for transparency
    for ($x = 0; $x -lt $bmpCropped.Width; $x++) {
        for ($y = 0; $y -lt $bmpCropped.Height; $y++) {
            $p = $bmpCropped.GetPixel($x, $y)
            # If the pixel is close to cream/white, make it transparent
            if ($p.R -gt 210 -and $p.G -gt 210 -and $p.B -gt 210) {
                $bmpCropped.SetPixel($x, $y, [System.Drawing.Color]::Transparent)
            }
        }
    }
    
    $names = @("aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces")
    $bmpCropped.Save("c:\Users\Office\Desktop\astro3\astro_temp\assets\icon_$($names[$i]).png", [System.Drawing.Imaging.ImageFormat]::Png)
    
    $gCropped.Dispose()
    $bmpCropped.Dispose()
}

$img.Dispose()
Write-Output "Done creating transparent icons."
