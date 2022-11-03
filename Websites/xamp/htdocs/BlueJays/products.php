<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>GRD</title>
    <!-- Stylesheets -->
    <!-- bootstrap v3.3.6 css -->
    <link href="Product/css/bootstrap.css" rel="stylesheet">
    <!-- font-awesome css -->
    <link href="Product/css/font-awesome.css" rel="stylesheet">
    <!-- flaticon css -->
    <link href="Product/css/flaticon.css" rel="stylesheet">
    <!-- animate css -->
    <link href="Product/css/animate.css" rel="stylesheet">
    <!-- slick slide css -->
    <link href="Product/css/slick.css" rel="stylesheet">
    <link href="Product/css/slick-theme.css" rel="stylesheet">
    <!-- fancybox css -->
    <link href="Product/css/jquery.fancybox.css" rel="stylesheet">
    <link href="Home/css/style.css" rel="stylesheet">
    <!-- revolution slider css -->
    <link rel="stylesheet" type="text/css" href="Product/css/revolution/settings.css">
    <link rel="stylesheet" type="text/css" href="Product/css/revolution/layers.css">
    <link rel="stylesheet" type="text/css" href="Product/css/revolution/navigation.css">

    <!--Favicon-->
    <link rel="shortcut icon" href="Product/images/favicon.ico" type="image/x-icon">
    <link rel="icon" href="Product/images/favicon.ico" type="image/x-icon">
    <!-- Responsive -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="Product/css/responsive.css" rel="stylesheet">
    <!--[if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script><![endif]-->
    <!--[if lt IE 9]><script src="Product/js/respond.js"></script><![endif]-->
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
                            <h1>Shop</h1>
                        </div>
                        <div class="header-breadcrumb">
                            <nav class="breadcrumbs"><a class="home" href="#"><span>Home</span></a> - Shop
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--Page header end-->

        <!--all team-->
        <div class="shopepage pagepadding woocommerce">
            <div class="container">
                <div class="shop-filter clearfix">
                    <p class="result-count col-sm-6"> Showing 1–9 of 17 results</p>
                    <form class="result-ordering col-sm-6">
                        <select class="orderby">
                            <option value="menu_order" selected="selected">Default sorting</option>
                            <option value="popularity">Sort by popularity</option>
                            <option value="rating">Sort by average rating</option>
                            <option value="date">Sort by newness</option>
                        </select>
                    </form>
                </div>
                <ul class="products row">
                    <li class="product col-sm-6 col-md-4">
                        <div class="box-shadow">
                            <div class="box-images">
                                <img src="Product/images/product/p-1.jpg" alt="">
                                <a href="#" class="button"></a>
                            </div>
                            <div class="box-content">
                                <h4><a href="#">Accusata accommodare</a></h4>
                                <span class="price">
                                    <del><span>£</span>20.00</del>
                                    <ins><span>£</span>18.00</ins>
                                </span>
                            </div>
                        </div>
                    </li>
                    <li class="product col-sm-6 col-md-4">
                        <div class="box-shadow">
                            <div class="box-images">
                                <img src="Product/images/product/p-7.jpg" alt="">
                                <a href="#" class="button"></a>
                            </div>
                            <div class="box-content">
                                <h4><a href="#">Alenit electramutmea</a></h4>
                                <span class="price">
                                    <span>£</span>18.00
                                </span>
                            </div>
                        </div>
                    </li>
                    <li class="product col-sm-6 col-md-4">
                        <div class="box-shadow">
                            <div class="box-images">
                                <img src="Product/images/product/p-8.jpg" alt="">
                                <a href="#" class="button"></a>
                            </div>
                            <div class="box-content">
                                <h4><a href="#">Alia expetendisat</a></h4>
                                <span class="price">
                                    <span>£</span>45.00
                                </span>
                            </div>
                        </div>
                    </li>
                    <li class="product col-sm-6 col-md-4">
                        <div class="box-shadow">
                            <div class="box-images">
                                <img src="Product/images/product/p-1.jpg" alt="">
                                <a href="#" class="button"></a>
                            </div>
                            <div class="box-content">
                                <h4><a href="#">Aliquam tincidunt</a></h4>
                                <span class="price">
                                    <del><span>£</span>65.00</del>
                                    <ins><span>£</span>55.00</ins>
                                </span>
                            </div>
                        </div>
                    </li>
                    <li class="product col-sm-6 col-md-4">
                        <div class="box-shadow">
                            <div class="box-images">
                                <img src="Product/images/product/p-2.jpg" alt="">
                                <a href="#" class="button"></a>
                            </div>
                            <div class="box-content">
                                <h4><a href="#">Anti Burst Ball</a></h4>
                                <span class="price">
                                    <del><span>£</span>20.00</del>
                                    <ins><span>£</span>18.00</ins>
                                </span>
                            </div>
                        </div>
                    </li>
                    <li class="product col-sm-6 col-md-4">
                        <div class="box-shadow">
                            <div class="box-images">
                                <img src="Product/images/product/p-3.jpg" alt="">
                                <a href="#" class="button"></a>
                            </div>
                            <div class="box-content">
                                <h4><a href="#">Cuquot forensibus</a></h4>
                                <span class="price">
                                    <del><span>£</span>42.00</del>
                                    <ins><span>£</span>45.00</ins>
                                </span>
                            </div>
                        </div>
                    </li>
                    <li class="product col-sm-6 col-md-4">
                        <div class="box-shadow">
                            <div class="box-images">
                                <img src="Product/images/product/p-4.jpg" alt="">
                                <a href="#" class="button"></a>
                            </div>
                            <div class="box-content">
                                <h4><a href="#">Delicata Liberavisse</a></h4>
                                <span class="price">
                                    <del><span>£</span>18.00</del>
                                    <ins><span>£</span>16.00</ins>
                                </span>
                            </div>
                        </div>
                    </li>
                    <li class="product col-sm-6 col-md-4">
                        <div class="box-shadow">
                            <div class="box-images">
                                <img src="Product/images/product/p-5.jpg" alt="">
                                <a href="#" class="button"></a>
                            </div>
                            <div class="box-content">
                                <h4><a href="#">Ealacerat rationibus</a></h4>
                                <span class="price">
                                    <del><span>£</span>15.00</del>
                                    <ins><span>£</span>20.00</ins>
                                </span>
                            </div>
                        </div>
                    </li>
                    <li class="product col-sm-6 col-md-4">
                        <div class="box-shadow">
                            <div class="box-images">
                                <img src="Product/images/product/p-6.jpg" alt="">
                                <a href="#" class="button"></a>
                            </div>
                            <div class="box-content">
                                <h4><a href="#">Nutrive Herbal Tea</a></h4>
                                <span class="price">
                                    <span>£</span>11.00
                                </span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!--all team end-->

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
    <script src="Product/js/jquery-1.12.4.min.js"></script>
    <!-- bootstrap v3.3.6 js -->
    <script src="Product/js/bootstrap.min.js"></script>
    <!-- fancybox js -->
    <script src="Product/js/jquery.fancybox.pack.js"></script>
    <script src="Product/js/jquery.fancybox-media.js"></script>
    <script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js"></script>
    <!-- Slick slide js -->
    <script src="Product/js/slick.js"></script>
    <!-- counter js -->
    <script src="Product/js/jquery.countTo.js"></script>
    <!-- validate js -->
    <script src="Product/js/validate.js"></script>

    <!-- REVOLUTION JS FILES -->
    <script type="text/javascript" src="Product/js/revolution/jquery.themepunch.tools.min.js"></script>
    <script type="text/javascript" src="Product/js/revolution/jquery.themepunch.revolution.min.js"></script>
    <script type="text/javascript" src="Product/js/revolution/extensions/revolution.extension.actions.min.js"></script>
    <script type="text/javascript" src="Product/js/revolution/extensions/revolution.extension.carousel.min.js"></script>
    <script type="text/javascript" src="Product/js/revolution/extensions/revolution.extension.kenburn.min.js"></script>
    <script type="text/javascript" src="Product/js/revolution/extensions/revolution.extension.layeranimation.min.js"></script>
    <script type="text/javascript" src="Product/js/revolution/extensions/revolution.extension.migration.min.js"></script>
    <script type="text/javascript" src="Product/js/revolution/extensions/revolution.extension.navigation.min.js"></script>
    <script type="text/javascript" src="Product/js/revolution/extensions/revolution.extension.parallax.min.js"></script>
    <script type="text/javascript" src="Product/js/revolution/extensions/revolution.extension.slideanims.min.js"></script>
    <script type="text/javascript" src="Product/js/revolution/extensions/revolution.extension.video.min.js"></script>

    <!-- script JS  -->
    <script src="Product/js/scripts.min.js"></script>
    <script src="Product/js/script.js"></script>
</body>

</html>