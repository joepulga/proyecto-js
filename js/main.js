$(document).ready(()=>{
    // Slider
    $('.galeria').bxSlider({
        mode: 'fade',
        captions: false,
        slideWidth: 1200,
        responsive:true 
    });

    //Posts
    let posts = [
        {
            title: 'Prueba de titulo 1',
            date: 'Publicado el dia ' + moment().day() +  ' de ' +moment().format("MMMM") + " del "+ moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Debitis, culpa ? Saepe illo repellendus veniam quaerat officiisinventore exercitationem eligendi deserunt quidem et, velit tempore consectetur amet nobis qui ?Animi, placeat!Lorem ipsum dolor sit amet consectetur adipisicing elit.Porro incidunt delenitinulla corporis, harum nemo cupiditate, pariatur numquam in quod qui corrupti esse ea nesciunt animiperferendis impedit assumenda.Enim!'
        },
        {
            title: 'Prueba de titulo 2',
            date: 'Publicado el dia ' + moment().day() + ' de ' + moment().format("MMMM") + " del " + moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Debitis, culpa ? Saepe illo repellendus veniam quaerat officiisinventore exercitationem eligendi deserunt quidem et, velit tempore consectetur amet nobis qui ?Animi, placeat!Lorem ipsum dolor sit amet consectetur adipisicing elit.Porro incidunt delenitinulla corporis, harum nemo cupiditate, pariatur numquam in quod qui corrupti esse ea nesciunt animiperferendis impedit assumenda.Enim!'
        },
        {
            title: 'Prueba de titulo 3',
            date: 'Publicado el dia ' + moment().day() + ' de ' + moment().format("MMMM") + " del " + moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Debitis, culpa ? Saepe illo repellendus veniam quaerat officiisinventore exercitationem eligendi deserunt quidem et, velit tempore consectetur amet nobis qui ?Animi, placeat!Lorem ipsum dolor sit amet consectetur adipisicing elit.Porro incidunt delenitinulla corporis, harum nemo cupiditate, pariatur numquam in quod qui corrupti esse ea nesciunt animiperferendis impedit assumenda.Enim!'
        },
        {
            title: 'Prueba de titulo 4',
            date: 'Publicado el dia ' + moment().day() + ' de ' + moment().format("MMMM") + " del " + moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Debitis, culpa ? Saepe illo repellendus veniam quaerat officiisinventore exercitationem eligendi deserunt quidem et, velit tempore consectetur amet nobis qui ?Animi, placeat!Lorem ipsum dolor sit amet consectetur adipisicing elit.Porro incidunt delenitinulla corporis, harum nemo cupiditate, pariatur numquam in quod qui corrupti esse ea nesciunt animiperferendis impedit assumenda.Enim!'
        },
        {
            title: 'Prueba de titulo 5',
            date: 'Publicado el dia ' + moment().day() + ' de ' + moment().format("MMMM") + " del " + moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Debitis, culpa ? Saepe illo repellendus veniam quaerat officiisinventore exercitationem eligendi deserunt quidem et, velit tempore consectetur amet nobis qui ?Animi, placeat!Lorem ipsum dolor sit amet consectetur adipisicing elit.Porro incidunt delenitinulla corporis, harum nemo cupiditate, pariatur numquam in quod qui corrupti esse ea nesciunt animiperferendis impedit assumenda.Enim!'
        },
    ];
    posts.forEach((item,index) =>{
        let post = `
                <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>
                        ${item.content}
                    </p>
                    <a href="#" class="button-more">Leer más</a>
                </article>
                `;
        $("#posts").append(post);
    });

    // selector de tema
    let theme = $("#theme");
     
    $("#to-green").click(function(){
        theme.attr("href","css/green.css");
        
    });
     $("#to-blue").click(function () {
         theme.attr("href", "css/blue.css");
    });
    $("#to-red").click(function () {
         theme.attr("href", "css/red.css");
        
    });
   
    // Scroll arriba de la web  
    $('.up').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop:0
        },500);
        return false
    });

    //Login falso

    $("#login form").submit(function(){
       let form_name =  $("#form_name").val();

       localStorage.setItem("form_name",form_name);
    }); 
    let form_name = localStorage.getItem("form_name");

    if(form_name != null && form_name != "undefined"){
        let about_parrafo = $("#about p");

        about_parrafo.html("<br><strong>Bienvenido," +form_name+ "</strong>");
        about_parrafo.append(" <a href='#' id='logout'>Cerrar Sesión</a>")

        $("#login").hide();

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });
    }
    
});