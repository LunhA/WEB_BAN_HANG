const AppHeader = {
  data: function () {
    return {
      counts: 0,
    };
  },
  template: `<div class="header-container">
    <div class="header-content">
        <div class="left"><a href="">Ikus Audio</a></div>
        <div class="middle">
            <div class="header-menu"><a class="header-menu-title" href="">SẢN PHẨM</a>
                <div class="header-menu-selection">
                    <div class="selection-container">
                        <div class="selection-type">
                            <div class="selection-type-option"><a href=""><img
                                        src="assets/images/icons/icon-headphone.svg"> HEADPHONE</a>
                                <!-- <div class="option-data">
                                    div.
                                </div> -->
                            </div>
                            <div class="selection-type-option"><a href=""><img
                                        src="assets/images/icons/icon-dac.svg"> DAC/AMP</a></div>
                        </div>
                        <div class="selection-feature">
                            <div class="selection-headphone">
                                <div class="headphone-type">
                                    <div class="selection-title">HEADPHONE TYPE</div>
                                    <ul style="padding-left: 0;">
                                        <li class="type-list"><a href="">Full sized</a></li>
                                        <li class="type-list"><a href="">Inear</a></li>
                                        <li class="type-list"><a href="">Earbud</a></li>
                                        <li class="type-list"><a href="">True wireless</a></li>
                                    </ul>
                                </div>
                                <div class="dacamp-type">
                                    <div class="selection-title">DAC/AMP TYPE</div>
                                    <ul style="padding-left: 0;">
                                        <li class="type-list"><a href="">Desktop DAC</a></li>
                                        <li class="type-list"><a href="">Portable DAC/Amp</a></li>
                                        <li class="type-list"><a href="">Portable Amp</a></li>
                                        <li class="type-list"><a href="">PreAmp</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header-menu"><a class="header-menu-title" href="">THƯƠNG HIỆU</a></div>
            <div class="header-menu"><a class="header-menu-title" href="">TIN TỨC</a></div>
            <div class="header-menu"><a class="header-menu-title" href="">KHUYẾN MÃI</a></div>
            <div class="header-menu"><a class="header-menu-title" href="">LIÊN HỆ</a></div>
        </div>
        <div class="right">

         

            <div class="navbar-btn login-icon"><a class="navbar-link" href=""><img class="navbar-icon"
                        src="assets/images/icons/account.png"></a></div>
            <div class="navbar-btn cart"><a class="navbar-link" href=""><img class="navbar-icon"
                        src="assets/images/icons/shopping-cart.png"></a></div>
        </div>
    </div>
</div>`,
};

const AppFooter = {
    data: function () {
        return {
          counts: 0,
        };
    },
    template: ` <div class="footer-container">
    <!-- Footer -->
    <footer class="bg-dark text-center text-white">
        <!-- Grid container -->
        <div class="social-contact">
            <div class="facebook"><a class="social-icons" href=""><img src="assets/images/icons/facebook.png"
                        alt="facebook_icon"></a></div>
            <div class="twitter"><a class="social-icons" href=""><img src="assets/images/icons/twitter.png"
                        alt="twitter_icon"></a></div>
            <div class="instagram"><a class="social-icons" href=""><img src="assets/images/icons/instagram.png"
                        alt="instagram_icon"></a></div>
            <div class="youtube"><a class="social-icons" href=""><img src="assets/images/icons/youtube.png"
                        alt="youtube_icon"></a></div>
        </div>
        <div class="container p-4">
            <!-- Section: Form -->
            <section class="">
                <form action="">
                    <!--Grid row-->
                    <div class="row d-flex justify-content-center">
                        <!--Grid column-->
                        <div class="col-auto">
                            <p class="pt-2">
                                <strong>Sign up for our newsletter</strong>
                            </p>
                        </div>
                        <!--Grid column-->

                        <!--Grid column-->
                        <div class="col-md-5 col-12">
                            <!-- Email input -->
                            <div class="form-outline form-white mb-4">
                                <input type="email" id="form5Example21" class="form-control" />
                                <label class="form-label" for="form5Example21"></label>
                            </div>
                        </div>
                        <!--Grid column-->

                        <!--Grid column-->
                        <div class="col-auto">
                            <!-- Submit button -->
                            <button type="submit" class="btn btn-outline-light mb-4">
                                Subscribe
                            </button>
                        </div>
                        <!--Grid column-->
                    </div>
                    <!--Grid row-->
                </form>
            </section>
            <!-- Section: Form -->

            <!-- Section: Text -->
            <section class="mb-4">
                <p>
                    Proud to be Ikus Audio. Born under the pressure of time, within 6 short days, we have launched
                    the largest system of selling headphones and audio equipment in Vietnam.
                </p>
            </section>
            <!-- Section: Text -->

            <!-- Section: Links -->
            <section class="">
                <!--Grid row-->
                <div class="row">
                    <!--Grid column-->
                    <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 class="text-uppercase"><a href="">IKUS <br> AUDIO</a></h5>


                    </div>
                    <!--Grid column-->

                    <!--Grid column-->
                    <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 class="text-uppercase">giới thiệu</h5>

                        <ul class="list-unstyled mb-0">
                            <li>
                                <a href="#!" class="text-white">Link 1</a>
                            </li>
                            <li>
                                <a href="#!" class="text-white">Link 2</a>
                            </li>
                            <li>
                                <a href="#!" class="text-white">Link 3</a>
                            </li>
                            <li>
                                <a href="#!" class="text-white">Link 4</a>
                            </li>
                        </ul>
                    </div>
                    <!--Grid column-->

                    <!--Grid column-->
                    <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 class="text-uppercase">chính sách</h5>

                        <ul class="list-unstyled mb-0">
                            <li>
                                <a href="#!" class="text-white">Link 1</a>
                            </li>
                            <li>
                                <a href="#!" class="text-white">Link 2</a>
                            </li>
                            <li>
                                <a href="#!" class="text-white">Link 3</a>
                            </li>
                            <li>
                                <a href="#!" class="text-white">Link 4</a>
                            </li>
                            <li>
                                <a href="#!" class="text-white">Link 5</a>
                            </li>
                        </ul>
                    </div>
                    <!--Grid column-->

                    <!--Grid column-->
                    <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 class="text-uppercase">liên hệ</h5>

                        <ul class="list-unstyled mb-0">
                            <li>
                                <a href="#!" class="text-white">Link 1</a>
                            </li>
                            <li>
                                <a href="#!" class="text-white">Link 2</a>
                            </li>
                        </ul>
                    </div>
                    <!--Grid column-->
                </div>
                <!--Grid row-->
            </section>
            <!-- Section: Links -->
        </div>
        <!-- Grid container -->

        <!-- Copyright -->
        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
            © 2021 Copyright:
            <a class="text-white" href="">IkusAudio</a>
        </div>
        <!-- Copyright -->
    </footer>
    <!-- Footer -->
</div>`,
}