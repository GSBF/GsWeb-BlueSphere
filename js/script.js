const botaoMenu = document.getElementById('btn-default');



$(document).ready(function() {
    $('#nav_list a, #mobile_nav_list a').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
});


$(document).ready(function(){
    // Redirect to index.html when clicking the submit button
    $('#login_form').on('submit', function(event) {
      event.preventDefault(); // Prevents default form submission
      window.location.href = "index.html"; // Redirects to index.html after submit
    });
  });
  

  // Add an event listener for the "click" event
botaoMenu.addEventListener('click', function redirectToContato() {
    // Redirect the user to "contato.html" using window.location.href
    window.location.href = 'contato.html';
  });


  $(document).ready(function(){
    // Redirecionar para index.html quando clicar no botão de enviar
    $('#login_form').on('submit', function(event) {
      event.preventDefault(); // Impede o envio padrão do formulário
      window.location.href = "index.html"; // Redireciona para index.html após enviar
    });
});
