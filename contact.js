function Send(){
   var name = document.getElementById("Name").value;
   var name = document.getElementById("Email").value;
   var name = document.getElementById("Phone").value;
   var name = document.getElementById("Subject").value;
   var name = document.getElementById("Message").value;

   var body = "Name: " + name + "<br/> Email:" + email + "<br/> Phone Number:" + phone + "<br/> Message:" + mess;
    
   console.log(body);
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "insectisite02@gmail.com",
        Password : "3466CC2BCF628C4CFA834501503D09A4DB3E",
        To : 'insectisite02@gmail.com',
        From : "insectisite02@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}