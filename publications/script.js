$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }
    });
});

// Website Title Change
document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Tushar Nayan";
            $("#favicon").attr("href", "assets/images/favicon.png");
        }
        else {
            document.title = "Tushar Nayan Portfolio";
            $("#favicon").attr("href", "assets/images/favicon.png");
        }
    });


// fetch projects start
function getProjects() {
    return fetch("publication.json")
        .then(response => response.json())
        .then(data => {
            return data
        });
}


function showProjects(publication) {
    let publicationContainer = document.querySelector(".publications .box-container");
    let publicationHTML = "";
    publication.forEach(publication => {
        publicationHTML += `
        <div class="box">
        <div class="content">
        <h3> ${publication.title} </h3>
        <h4>${publication.conference}<span class="presentedby"> - ${publication.authors} </span> </h4>
        <div class="btns-box">
            <div class="btns">
            <a href="${publication.links.paper}"" class="btn" target="_blank"><i class="fas fa-eye"></i> Paper</a>
            <a href="${publication.links.code}"" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
          </div>
        </div>

      </div>
    </div>`
    });
    publicationContainer.innerHTML = publicationHTML;

    // vanilla tilt.js
    // VanillaTilt.init(document.querySelectorAll(".tilt"), {
    //     max: 20,
    // });
    // // vanilla tilt.js  

    // /* ===== SCROLL REVEAL ANIMATION ===== */
    // const srtop = ScrollReveal({
    //     origin: 'bottom',
    //     distance: '80px',
    //     duration: 1000,
    //     reset: true
    // });

    // /* SCROLL PROJECTS */
    // srtop.reveal('.work .box', { interval: 200 });

    // isotope filter products
    var $grid = $('.box-container').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
        masonry: {
            columnWidth: 200
        }
    });

    // filter items on button click
    $('.button-group').on('click', 'button', function () {
        $('.button-group').find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
}

getProjects().then(data => {
    showProjects(data);
})
// fetch projects end

// Start of Tawk.to Live Chat
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/66686b67981b6c56477bfa1a/1i03u741l';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
// End of Tawk.to Live Chat


