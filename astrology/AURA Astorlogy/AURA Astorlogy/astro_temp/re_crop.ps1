Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("c:\Users\Office\Desktop\astro3\astro_temp\assets\zodiac_sprite.png")
$width = $img.Width / 12
$height = $img.Height

for ($i = 0; $i -lt 12; $i++) {
    $bmp = New-Object System.Drawing.Bitmap([int]$width, [int]$height)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    
    # Start from Y=3 to skip the dark top border.
    # We want a height of 45 pixels to safely include the icon and exclude the text.
    $startY = 3
    $cropHeight = 45
    $bmpCropped = New-Object System.Drawing.Bitmap([int]$width, [int]$cropHeight)
    $gCropped = [System.Drawing.Graphics]::FromImage($bmpCropped)
    
    $srcRect = New-Object System.Drawing.Rectangle([int]($i * $width), [int]$startY, [int]$width, [int]$cropHeight)
    $destRect = New-Object System.Drawing.Rectangle(0, 0, [int]$width, [int]$cropHeight)
    
    $gCropped.DrawImage($img, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
    
    $names = @("aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces")
    $bmpCropped.Save("c:\Users\Office\Desktop\astro3\astro_temp\assets\icon_$($names[$i]).png", [System.Drawing.Imaging.ImageFormat]::Png)
    
    $gCropped.Dispose()
    $bmpCropped.Dispose()
    $g.Dispose()
    $bmp.Dispose()
}

$img.Dispose()
Write-Output "Done splitting and cropping images."
