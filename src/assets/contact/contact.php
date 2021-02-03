<?
        header("Access-Control-Allow-Origin: *");

switch($_SERVER['REQUEST_METHOD']){
    case("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case("POST"): //Send the email;
        header("Access-Control-Allow-Origin: *");

        //$json = file_get_contents('php://input');

        //$params = json_decode($json);

        $email = 'shivajothi179@gmail.com'//$params->email;
        $name = 'Jothi'//$params->name;
        $message = 'Test mail'//$params->message;

        $recipient = 'twilightedward4466@gmail.com';
        $subject = 'new message';
        $headers = "From: $name <$email>";

        mail($recipient, $subject, $message, $headers);
        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
?>