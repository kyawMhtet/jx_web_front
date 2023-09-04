<script>
import router from "../routes";
import { SimpleBar } from "simplebar-vue3";
import NavBar from "../components/nav-bar.vue";
import MenuComponents from "../components/menu.vue";
import RightBar from "../components/right-bar.vue";
import FooterComponents from "../components/footer.vue";
import logoSm from "../../images/logo-sm.png";
import logoDark from "../../images/logo-dark.png";
import logoLight from "../../images/logo-light.png";
sessionStorage.setItem('hoverd', false);

/**
 * Vertical layout
 */
export default {
  components: { 
    NavBar, 
    RightBar, FooterComponents, SimpleBar, MenuComponents },

  data() {
    return {
      logoSm,
      logoDark,
      logoLight,
      isMenuCondensed: false,
    };
  },
  created: () => {
    document.body.removeAttribute("data-layout", "horizontal");
    document.body.removeAttribute("data-topbar", "dark");
    document.body.removeAttribute("data-layout-size", "boxed");
  },
  methods: {
    initActiveMenu() {
      if (document.documentElement.getAttribute('data-sidebar-size') === 'sm-hover') {
        sessionStorage.setItem('hoverd', true);
        document.documentElement.setAttribute('data-sidebar-size', 'sm-hover-active');
      } else if (document.documentElement.getAttribute('data-sidebar-size') === 'sm-hover-active') {
        sessionStorage.setItem('hoverd', false);
        document.documentElement.setAttribute('data-sidebar-size', 'sm-hover');
      } else {
        document.documentElement.setAttribute('data-sidebar-size', 'sm-hover');
      }
    },
    toggleMenu() {
      document.body.classList.toggle("sidebar-enable");

      if (window.screen.width >= 992) {
        // eslint-disable-next-line no-unused-vars
        router.afterEach((routeTo, routeFrom) => {
          document.body.classList.remove("sidebar-enable");
          document.body.classList.remove("vertical-collpsed");
        });
        document.body.classList.toggle("vertical-collpsed");
      } else {
        // eslint-disable-next-line no-unused-vars
        router.afterEach((routeTo, routeFrom) => {
          document.body.classList.remove("sidebar-enable");
        });
        document.body.classList.remove("vertical-collpsed");
      }
      this.isMenuCondensed = !this.isMenuCondensed;
    },
    toggleRightSidebar() {
      document.body.classList.toggle("right-bar-enabled");
    },
    hideRightSidebar() {
      document.body.classList.remove("right-bar-enabled");
    },

  },
  mounted() {
    if (sessionStorage.getItem('hoverd') == 'true') {
      document.documentElement.setAttribute('data-sidebar-size', 'sm-hover-active');
    }

    document.getElementById('overlay').addEventListener('click', () => {
      document.body.classList.remove('vertical-sidebar-enable');
    });
  }
};
</script>
  
<template>
  <div id="layout-wrapper">
    <NavBar />
    <div>
      <!-- ========== Left Sidebar Start ========== -->
      <!-- ========== App Menu ========== -->
      <div class="app-menu navbar-menu">
        <!-- LOGO -->
        <div class="navbar-brand-box">
          <!-- Dark Logo-->
          <router-link to="/" class="logo logo-dark">
            <span class="logo-sm">
              <img :src="logoSm" alt="" height="22" />
            </span>
            <span class="logo-lg">
              <img :src="logoDark" alt="" height="22" />
            </span>
          </router-link>
          <!-- Light Logo-->
          <router-link to="/" class="logo logo-light">
            <span class="logo-sm">
              <img :src="logoSm" alt="" height="22" />
            </span>
            <span class="logo-lg">
              <img :src="logoLight" alt="" height="22" />
            </span>
          </router-link>
          <b-button type="button" size="sm" variant="white" class="p-0 fs-3xl header-item float-end btn-vertical-sm-hover" id="vertical-hover" @click="initActiveMenu">
            <i class="ri-record-circle-line"></i>
          </b-button>
        </div>

        <SimpleBar id="scrollbar" class="h-100" ref="scrollbar">
          <MenuComponents></MenuComponents>
        </SimpleBar>
        <div class="sidebar-background"></div>
      </div>
      <!-- Left Sidebar End -->
      <!-- Vertical Overlay-->
      <div class="vertical-overlay" id="overlay"></div>
    </div>
    <!-- ============================================================== -->
    <!-- Start Page Content here -->
    <!-- ============================================================== -->

    <div class="main-content">
      <div class="page-content">
        <!-- Start Content-->
        <b-container fluid>
          <slot />
        </b-container>
      </div>
      <FooterComponents />
    </div>
    <RightBar />
  </div>
</template>