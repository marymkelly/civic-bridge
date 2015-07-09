<?php
 
if(isset($_POST['email'])) {
 
//Email and subject line for form
   // $email_to = "matt@choosesds.com";
    $email_to = "mk-km@live.com";
    $email_subject = "CivicBridge Interest";
 

//Information between dashed lines is error messages
//Will not be accessed unless ajax redirect fails
//--------------------------------------------------------

    function died($error) {
 
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }
 
    // validation expected data exists
 
    if(!isset($_POST['name']) ||
        !isset($_POST['email']) ||
        !isset($_POST['phone']) ){
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
    }
 
    $name = $_POST['name'];
    $email_from = $_POST['email']; 
    $phone = $_POST['phone']; 
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }
    $string_exp = "/^[A-Za-z .'-]+$/";
  if(!preg_match($string_exp,$name)) {
    $error_message .= 'The Name you entered does not appear to be valid.<br />';
  }

 
  if(strlen($error_message) > 0) { 
    died($error_message);
  }
 
//--------------------------------------------------------

//Form Information  
    $email_message = "CivicBridge Form details below:\n\n"; 
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }

    $email_message .= "Name: ".clean_string($name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Phone: ".clean_string($phone)."\n"; 
 
// create email headers
 
$headers = 'From: '.$email_from."\r\n".
 'Reply-To: '.$email_from."\r\n" .
 'X-Mailer: PHP/' . phpversion();
 @mail($email_to, $email_subject, $email_message, $headers);  
 
?>
 
<!-- HTML if ajax function to prevent redirect wasn't written -->

<h1 style="color:white">Thank you for contacting us.</h1>

<?php
 
}
 
?>
