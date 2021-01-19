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

});