<?php
$swatchId = $args->swatchId; // Get the swatch ID from your database
$filename = "ant03"; // Example filename
$command = ".\\blender\\blender -b _swatches.blend -o $filename -F JPEG -x 1 -f 1";
$result = system($command);
echo json_encode(array("Command" => $command));
?>