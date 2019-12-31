<template>
  <div>
    <!-- Header -->

    <header class="header trans_300">
      <!-- Top Navigation -->

      <div class="top_nav">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="top_nav_left">free shipping on all u.s orders over $50</div>
            </div>
            <div class="col-md-6 text-right">
              <div class="top_nav_right">
                <ul class="top_nav_menu">
                  <!-- My Account -->

                  <li class="account">
                    <a href="#">
                      My Account
                      <i class="fa fa-angle-down"></i>
                    </a>
                    <ul class="account_selection">
                      <li>
                        <a href="#">
                          <i class="fa fa-sign-in" aria-hidden="true"></i>Login
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-user-plus" aria-hidden="true"></i>Register
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Navigation -->

      <div class="main_nav_container">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-right">
              <div class="logo_container">
                <img src="../../assets/logo.png" alt="IOCMart" width="60" class="img-fluid" />
                <a href="#">
                  IOC
                  <span>Mart</span>
                </a>
              </div>
              <nav class="navbar">
                <ul class="navbar_menu">
                  <li class="nav-item">
                    <router-link to="/" class="nav-link">Home</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/" class="nav-link">Stores</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/" class="nav-link">Services</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/" class="nav-link">Contact Us</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/" class="nav-link">FAQ</router-link>
                  </li>
                </ul>
                <ul class="navbar_user">
                  <li>
                    <a href="#">
                      <i class="fa fa-search" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-user" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li class="checkout">
                    <a href="#">
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                      <span id="checkout_items" class="checkout_items">2</span>
                    </a>
                  </li>
                </ul>
                <div class="hamburger_container">
                  <i class="fa fa-bars" aria-hidden="true"></i>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="fs_menu_overlay"></div>
    <div class="hamburger_menu">
      <div class="hamburger_close">
        <i class="fa fa-times" aria-hidden="true"></i>
      </div>
      <div class="hamburger_menu_content text-right">
        <ul class="menu_top_nav">
          <li class="menu_item has-children">
            <a href="#">
              My Account
              <i class="fa fa-angle-down"></i>
            </a>
            <ul class="menu_selection">
              <li>
                <a href="#">
                  <i class="fa fa-sign-in" aria-hidden="true"></i>Login
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-user-plus" aria-hidden="true"></i>Register
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link">Stores</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link">Services</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link">Contact Us</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link">FAQ</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
