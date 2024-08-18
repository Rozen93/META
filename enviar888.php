<?php
if(isset($_POST['nombre']) && isset($_POST['apellido']) && isset($_POST['email']) && isset($_POST['mensaje'])) {
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];
    $telefono = $_POST['tel'];

    // Datos para el correo
    $destinatario = "info@rhinoaudiovisuales.com";
    $asunto = "MENSAJE";
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $email_text = "<html><head><title>RHINO AUDIOVISUALES</title></head><body><h2>RHINOLAND</h2>";
    $email_text .= "<p><strong>Email:</strong> $email</p>";
    $email_text .= "<p><strong>Nombres y Apellidos:</strong> $nombre $apellido</p>";
    $email_text .= "<p><strong>Mensaje:</strong> $mensaje</p>";
    $email_text .= "<p><strong>Teléfono:</strong> $telefono</p>";
    $email_text .= "</body></html>";

    // Enviando Mensaje
    if(mail($destinatario, $asunto, $email_text, $headers)) {
        header("Location: index.html"); // redirigir al usuario a index.html
        exit();
    } else {
        echo "Ha habido un error al enviar el mensaje.";
    }
}
?>


