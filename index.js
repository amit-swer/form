
function SendMail() {
    var params = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_aghckcn", "template_p7a8soo", params).then(function(res){
        alert("Success" + res.status);
    })
}

