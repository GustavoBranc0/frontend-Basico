<?php

$type = match ($_REQUEST['type'] ?? 'text') {
    'text' => 'text',
    'password' => 'password',
    'date' => 'date',
    default => 'text'
};

// $type = $_REQUEST['type'] ?? 'text';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input type="<?php echo $type ?>" value="123">
</body>
</html>
