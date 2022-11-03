/* Change Color Preset */
jQuery(function($) {
    if ($('.home').length > 0) {
        a = $(".sp-megamenu-parent > li.active > a").css("color");
        document.documentElement.style.setProperty('--background-color', a)
        document.documentElement.style.setProperty('--text-color', a)
    } else {
        a = $(".sp-page-title").css("backgroundColor");
        document.documentElement.style.setProperty('--background-color', a)
        document.documentElement.style.setProperty('--text-color', a)
    }
});

/* Counter */
jQuery(function($) {
    $(".about .cont").each(function() {

        $(this).find(".progress-bar").animate({

            width: $(this).attr("data-percent")

        }, 6000);

        $(this).find("span").animate({

            left: $(this).attr("data-percent")

        }, 6000);

    });

})

/* Skill */
jQuery(function($) {

    $('.counter .count').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

});



/*** Go back home if not home page ***/
jQuery(function($) {
    const urls = document.querySelector('.logo').querySelector('a').getAttribute('href');
    const firsturl = window.location.port;
    var fullurl = firsturl + urls;
    const allMenu = document.querySelectorAll('.sp-menu-item');
    $('a[href^="#"]').on('click', function(event) {
        var target = $($(this).attr('href'));
        if (target.length == 0)

            Array.from(allMenu).map((item) => (item.children[0].href = fullurl + $(this).attr('href')))

        else {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 0);
        }
    });
});


/*** Custom Onepage ***/
jQuery(document).ready(function(jQuery) {

    if ($("body.home")[0]) {
        var topMenu = jQuery("nav ul"),
            offset = 40,
            topMenuHeight = $("#sp-header").outerHeight(),
            // All list items
            menuItems = topMenu.find('a[href*="#"]'),
            // Anchors corresponding to menu items
            scrollItems = menuItems.map(function() {
                var href = jQuery(this).attr("href"),
                    id = href.substring(href.indexOf('#')),
                    item = jQuery(id);
                //console.log(item)
                if (item.length) {
                    return item;
                }
            });

        // so we can get a fancy scroll animation
        menuItems.click(function(e) {
            var href = jQuery(this).attr("href"),
                id = href.substring(href.indexOf('#'));
            offsetTop = href === "#" ? 0 : jQuery(id).offset().top - topMenuHeight + 1;
            jQuery('html, body').stop().animate({
                scrollTop: offsetTop
            }, 300);
            e.preventDefault();
            $("nav > ul > li").removeClass("active");
        });

        // Bind to scroll
        jQuery(window).scroll(function() {
            // Get container scroll position
            var fromTop = jQuery(this).scrollTop() + topMenuHeight;

            // Get id of current scroll item
            var cur = scrollItems.map(function() {
                if (jQuery(this).offset().top < fromTop)
                    return this;
            });

            // Get the id of the current element
            cur = cur[cur.length - 1];
            var id = cur && cur.length ? cur[0].id : "";

            menuItems.parent().removeClass("active");
            if (id) {
                menuItems.parent().end().filter("[href*='#" + id + "']").parent().addClass("active");

            }

        })
    };
})