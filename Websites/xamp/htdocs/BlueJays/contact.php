<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>GRD</title>
    <!-- Stylesheets -->
    <!-- bootstrap v3.3.6 css -->
    <link href="Contact/css/bootstrap.css" rel="stylesheet">
    <!-- font-awesome css -->
    <link href="Contact/css/font-awesome.css" rel="stylesheet">
    <!-- flaticon css -->
    <link href="Contact/css/flaticon.css" rel="stylesheet">
    <!-- animate css -->
    <link href="Contact/css/animate.css" rel="stylesheet">
    <!-- slick slide css -->
    <link href="Contact/css/slick.css" rel="stylesheet">
    <link href="Contact/css/slick-theme.css" rel="stylesheet">
    <!-- fancybox css -->
    <link href="Contact/css/jquery.fancybox.css" rel="stylesheet">
    <link href="Home/css/style.css" rel="stylesheet">
    <!-- revolution slider css -->
    <link rel="stylesheet" type="text/css" href="Contact/css/revolution/settings.css">
    <link rel="stylesheet" type="text/css" href="Contact/css/revolution/layers.css">
    <link rel="stylesheet" type="text/css" href="Contact/css/revolution/navigation.css">

    <!--Favicon-->
    <link rel="shortcut icon" href="Contact/images/favicon.ico" type="image/x-icon">
    <link rel="icon" href="Contact/images/favicon.ico" type="image/x-icon">
    <!-- Responsive -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="Contact/css/responsive.css" rel="stylesheet">
    <!--[if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script><![endif]-->
    <!--[if lt IE 9]><script src="Contact/js/respond.js"></script><![endif]-->
    <style>
        .page-header.parallax .featured-image {
        background: url(Imgs/header-blue.jpg) center center no-repeat;
        background-size: cover;
    }
    </style>
</head>

<body class="home header-sticky header-v1 hide-topbar-mobile">
    <div id="page" class="hfeed site">

        <!-- Preloader-->
        <div class="preloader"></div>

        <!-- masthead -->
        <?php include 'header.php'?> 
        <!-- masthead end -->

        <!--Page header-->
        <div class="page-header  parallax has-image">
            <div class="page-header-content">
                <div class="featured-image"></div>
                <div class="container">
                    <div class="header-box">
                        <div class="page-title">
                            <h1>Contact</h1>
                        </div>
                        <div class="header-breadcrumb">
                            <nav class="breadcrumbs"><a class="home" href="#"><span>Home</span></a> - Contact
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--Page header end-->

        <!--contact form-->
        <div class="contactpage">
            <div class="container">
                <div class="grd-section-title  grd_title-type-2 margbtm20">
                    <h3 class="title  fsize30">Hi, here you can reach out to us for any inquiry</h3>
                    <div class="desc">
                        <p>There are lots of ways to stay touch with us.</p>
                    </div>
                </div>
                <div class="grd-banner grd-banner-style-2">
                    <div class="image"><img class="" src="Contact/images/resources/Contact-img.jpg" alt="Contact-img"
                            width="1170" height="470"></div>
                    <div class="content">
                        <div class="icon-banner"><span class="svg-icon"><i class="flaticon-pin"></i></span></div>
                        <div class="descr">
                            <h3>Chicago</h3>
                            <p>United States of America</p>
                            <p>54 N. Lakewood Avenue, IL 60640</p>
                        </div>
                        <div class="button"><a href="#"><span class="svg-icon"><i class="flaticon-right"></i></span>Find
                                Us On Map</a></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-5">
                        <div class="contact-pagebox">
                            <div class="grd-contact-box">
                                <div class="grd-section-title  grd_title-type-2 margbtm20">
                                    <h3 class="title  fsize30">Quick contact</h3>
                                </div>
                                <ul>
                                    <li>
                                        <p class="name">Phone</p>
                                        <p class="value">+0 321-654-0987</p>
                                    </li>
                                    <li>
                                        <p class="name">Email</p>
                                        <p class="value">Landscapingservice@grd.com</p>
                                    </li>
                                    <li>
                                        <p class="name">Working Hours</p>
                                    </li>
                                    <li>
                                        <p class="seasons">Summer</p>
                                        <p class="value"><span class="text-green">(May to Nov): </span>Mon - Satday:
                                            9.00 to 18.00</p>
                                    </li>
                                    <li>
                                        <p class="seasons">Winter</p>
                                        <p class="value"><span class="text-green">(Dec to Apr): </span>Mon - Satday:
                                            9.00 to 17.00</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-7">
                        <form method="post" action="ajax/mail.php" class="wpcf7-form" id="contact-form"
                            novalidate="novalidate">
                            <div class="contactpage-form">
                                <p>Feel free to ask any landscaping or gardening questions over the phone, or get in
                                    touch via our contact form below.</p>
                                <div class="row">
                                    <div class="col-md-6 col-xs-12 col-sm-12">
                                        <p>
                                            <input name="name" value="" size="40" placeholder="Your Name*" type="text">
                                        </p>
                                    </div>
                                    <div class="col-md-6 col-xs-12 col-sm-12">
                                        <p>
                                            <input name="email" value="" size="40" placeholder="Email Address*"
                                                type="email">
                                        </p>
                                    </div>
                                    <div class="col-md-12 col-xs-12 col-sm-12">
                                        <p>
                                            <input name="phone" value="" size="40" placeholder="Phone Number"
                                                type="text">
                                        </p>
                                    </div>
                                    <div class="col-md-12 col-xs-12 col-sm-12 mf-textarea-field">
                                        <p>
                                            <textarea name="message" cols="40" rows="4"
                                                placeholder="Enter Your Message..."></textarea>
                                        </p>
                                    </div>
                                    <div class="text-center mf-submit col-md-12 col-xs-12 col-sm-12">
                                        <button type="submit" class="btn-style-two">Send Message Us</button>
                                    </div>
                                </div>
                            </div>
                            <div class="contact-form-message"></div>
                            <div id="loading" class="form-loader"><img src="Contact/images/ajax-loader.png" alt="loading"></div>
                        </form>
                    </div>
                </div>

            </div>

            <!--contact form end-->

            <div class="contact-branches">
                <div class="container">

                    <div class="branch-item heading">
                        <div class="grd-section-title  grd_title-type-2 margbtm20">
                            <h3 class="title  fsize30">Other Branches</h3>
                        </div>
                    </div>
                    <div class="branch-item">
                        <h3>Newyork</h3>
                        <p>54 N. Lakewood Avenue, IL 60640</p>
                        <p>+0 321-654-0987</p>
                        <p>Support@grdnewyok.com</p>
                    </div>
                    <div class="branch-item">
                        <h3>California</h3>
                        <p>2b Starclub Str, CA 92024</p>
                        <p>+0 123-456-7890</p>
                        <p>Support@grdcalifornia.com</p>
                    </div>
                    <div class="branch-item">
                        <h3>Los Angeles</h3>
                        <p>1419 Westwood Blvd</p>
                        <p> +0 321-654-0987</p>
                        <p>Support@grdlosangeles.com</p>
                    </div>

                </div>
            </div>
            <!--google map-->
            <div class="google-map-area">
                <div class="google-map" id="contact-google-map" data-map-lat="42.36365" data-map-lng="-87.882526"
                    data-icon-path="Contact/images/icon/marker-1.png" data-map-title="Chester" data-map-zoom="13" data-markers='{
							"marker-1": [42.36365, -87.882526, "<h4>GRD</h4><p>54 N. Lakewood Avenue, IL 60640</p>"]
						}'>
                </div>
            </div>
            <!--google map end-->
        </div>

        <!-- footer -->
        <?php include 'footer.php'?> 
        <!-- copyright end-->
    </div>
    <!--End pagewrapper-->

    <!--primary-mobile-nav-->
    <div class="primary-mobile-nav" id="primary-mobile-nav" role="navigation">
        <div class="mobile-nav-content">
            <a href="#" class="close-canvas-mobile-panel">×</a>
            <ul class="menu">
                <li class="current-menu-item menu-item-has-children"><a href="index.html"
                        class="dropdown-toggle">Home</a>
                    <ul class="sub-menu">
                        <li><a href="index.html">Home 1</a></li>
                        <li><a href="home-page-2.html">Home 2</a></li>
                        <li><a href="home-page-3.html">Home 3</a></li>
                        <li class="last-child"><a href="home-page-4.html">Home 4</a></li>
                    </ul>
                </li>
                <li class="menu-item-has-children"><a href="" class="dropdown-toggle">About Us</a>
                    <ul class="sub-menu">
                        <li><a href="about-us.html">About Our Company</a></li>
                        <li><a href="mission-values.html">Mission & Values</a></li>
                        <li><a href="why-choose-us.html">Why Choose Us</a></li>
                        <li><a href="meet-our-team.html">Meet Our Team</a></li>
                        <li><a href="faqs.html">FAQ’s</a></li>
                        <li class="last-child"><a href="pricing-plans.html">Pricing & Plans</a></li>
                    </ul>
                </li>
                <li class="menu-item-has-children"><a href="" class="dropdown-toggle">Services</a>
                    <ul class="sub-menu">
                        <li><a href="design-planting.html">Design & Planting</a></li>
                        <li><a href="lawn-garden-care.html">Lawn & Garden Care</a></li>
                        <li><a href="snow-cleaning.html">Snow Cleaning</a></li>
                        <li><a href="spring-cleanup.html">Spring Cleanup</a></li>
                        <li><a href="hardscaping.html">Hardscaping</a></li>
                        <li class="last-child"><a href="irrigation-system.html">Irrigation System</a></li>
                    </ul>
                </li>
                <li class="menu-item-has-children"><a href="projects.html" class="dropdown-toggle">Gallery</a>
                    <ul class="sub-menu">
                        <li><a href="gallery-classic.html">Gallery Classic</a></li>
                        <li><a href="gallery-full-width.html">Gallery Full Width</a></li>
                        <li><a href="gallery-modern.html">Gallery Modern</a></li>
                        <li class="last-child"><a href="single-gallery.html">Single Gallery</a></li>
                    </ul>
                </li>
                <li class="menu-item-has-children"><a href="#" class="dropdown-toggle">Blog</a>
                    <ul class="sub-menu">
                        <li><a href="blog-default.html">Blog Default</a></li>
                        <li><a href="blog-large-image.html">Blog Large Image</a></li>
                        <li class="last-child"><a href="blog-single.html">Single Post</a></li>
                    </ul>
                </li>
                <li class="menu-item-has-children"><a href="#" class="dropdown-toggle">Shop</a>
                    <ul class="sub-menu">
                        <li><a href="shop.html">Our Products</a></li>
                        <li><a href="single-product.html">Product Single</a></li>
                        <li><a href="cart.html">Shopping Cart</a></li>
                        <li><a href="checkout.html">Checkout</a></li>
                        <li class="last-child"><a href="my-account.html">My account</a></li>
                    </ul>
                </li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </div>
    </div>
    <div id="off-canvas-layer" class="off-canvas-layer"></div>
    <!--primary-mobile-nav end-->

    <!--Scroll to top-->
    <a id="scroll-top" class="backtotop" href="#page-top"><i class="fa fa-angle-up"></i></a>

    <!-- jquery Liabrary -->
    <script src="Contact/js/jquery-1.12.4.min.js"></script>
    <!-- bootstrap v3.3.6 js -->
    <script src="Contact/js/bootstrap.min.js"></script>
    <!-- fancybox js -->
    <script src="Contact/js/jquery.fancybox.pack.js"></script>
    <script src="Contact/js/jquery.fancybox-media.js"></script>
    <script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js"></script>
    <!-- Slick slide js -->
    <script src="Contact/js/slick.js"></script>
    <!-- counter js -->
    <script src="Contact/js/jquery.countTo.js"></script>
    <!-- validate js -->
    <script src="Contact/js/validate.js"></script>
    <!-- google map -->
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAHzPSV2jshbjI8fqnC_C4L08ffnj5EN3A"></script>
    <script src="Contact/js/gmap.js"></script>
    <script src="Contact/js/map-helper.js"></script>

    <!-- REVOLUTION JS FILES -->
    <script type="text/javascript" src="Contact/js/revolution/jquery.themepunch.tools.min.js"></script>
    <script type="text/javascript" src="Contact/js/revolution/jquery.themepunch.revolution.min.js"></script>
    <script type="text/javascript" src="Contact/js/revolution/extensions/revolution.extension.actions.min.js"></script>
    <script type="text/javascript" src="Contact/js/revolution/extensions/revolution.extension.carousel.min.js"></script>
    <script type="text/javascript" src="Contact/js/revolution/extensions/revolution.extension.kenburn.min.js"></script>
    <script type="text/javascript" src="Contact/js/revolution/extensions/revolution.extension.layeranimation.min.js"></script>
    <script type="text/javascript" src="Contact/js/revolution/extensions/revolution.extension.migration.min.js"></script>
    <script type="text/javascript" src="Contact/js/revolution/extensions/revolution.extension.navigation.min.js"></script>
    <script type="text/javascript" src="Contact/js/revolution/extensions/revolution.extension.parallax.min.js"></script>
    <script type="text/javascript" src="Contact/js/revolution/extensions/revolution.extension.slideanims.min.js"></script>
    <script type="text/javascript" src="Contact/js/revolution/extensions/revolution.extension.video.min.js"></script>

    <!-- script JS  -->
    <script src="Contact/js/scripts.min.js"></script>
    <script src="Contact/js/script.js"></script>
</body>

</html>