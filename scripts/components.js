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

            <div class="search-bar"> <input id="search-input" type="search" name="s" placeholder="Gõ để tìm kiếm"
                    style="border: none; border-bottom: 1px solid #fff; background: none; color: #fff; outline: none; width: 100%;">
            </div>
            <div class="navbar-btn search-icon">
                <img class="navbar-icon" src="assets/images/icons/search-icon.png">
            </div>

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
    template: `
    `
}