<?php 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    require_once('phpmailer/PHPMailerAutoload.php');
    $mail = new PHPMailer;
    $mail->CharSet = 'utf-8';

    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $text = $_POST['locate'];

    $mail->isSMTP();
    $mail->Host = 'smtp.mail.ru';
    $mail->SMTPAuth = true;
    $mail->Username = 'alex_fox1704@mail.ru';
    $mail->Password = 'Kc4s6mgcUg5gQVg2ismi'; 
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;

    $mail->setFrom('alex_fox1704@mail.ru');
    $mail->addAddress('alex_fox0402@mail.ru');
    $mail->isHTML(true);

    $mail->Subject = '' .$subject;
    $mail->Body    = 'Клиент хочет сделать заказ. Отправил '.$email.' .Место положение '.$text;
    $mail->AltBody = '*';

    if(!$mail->send()) {
        echo 'Error';
    } else {
        header('location: ../index.html');
    }
  }
?>
