<script>
import { SimpleBar } from "simplebar-vue3";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import i18n from "../i18n";
import us from '../../images/flags/us.svg';
import spain from '../../images/flags/spain.svg';
import germany from '../../images/flags/germany.svg';
import italy from '../../images/flags/italy.svg';
import russia from '../../images/flags/russia.svg';
import china from '../../images/flags/china.svg';
import french from '../../images/flags/french.svg';
import ae from '../../images/flags/ae.svg';

import logoSm from '../../images/logo-sm.png';
import logoDark from '../../images/logo-dark.png';
import logoLight from '../../images/logo-light.png';

import avatar1 from '../../images/users/32/avatar-1.jpg';
import avatar2 from '../../images/users/32/avatar-2.jpg';
import avatar3 from '../../images/users/32/avatar-3.jpg';
import avatar5 from '../../images/users/32/avatar-5.jpg';
import avatar8 from '../../images/users/32/avatar-8.jpg';

import product1 from '../../images/products/32/img-1.png';
import product5 from '../../images/products/32/img-5.png';
import product8 from '../../images/products/32/img-8.png';
import product10 from '../../images/products/32/img-10.png';
import product11 from '../../images/products/32/img-11.png';

import github from '../../images/brands/github.png';
import bitbucket from '../../images/brands/bitbucket.png';
import dribbble from '../../images/brands/dribbble.png';
import dropbox from '../../images/brands/dropbox.png';
import mail_chimp from '../../images/brands/mail_chimp.png';
import slack from '../../images/brands/slack.png';

/**
 * Nav-bar Component
 */
export default {
  data() {
    return {
      us, logoSm, logoDark, logoLight, avatar1, avatar2, avatar3, avatar5, avatar8, product1, product5, product8, product10, product11, github, bitbucket, dribbble, dropbox, mail_chimp, slack,
      languages: [{
        flag: us,
        language: "en",
        title: "English",
      },
      {
        flag: spain,
        language: "sp",
        title: "Española",
      },
      {
        flag: germany,
        language: "gr",
        title: "Deutsche",
      },
      {
        flag: italy,
        language: "it",
        title: "italiana",
      },
      {
        flag: russia,
        language: "ru",
        title: "русский",
      },
      {
        flag: china,
        language: "ch",
        title: "中國人",
      },
      {
        flag: french,
        language: "fr",
        title: "français",
      },
      {
        flag: ae,
        language: "ar",
        title: "عربي",
      },
      ],
      lan: i18n.locale,
      text: null,
      flag: null,
      value: null,
      myVar: 1,
      removeCartModal: false,
      removeNotificationModal: false,
    };
  },
  components: {
    SimpleBar
  },

  methods: {
    logout() {
      toast.success('User logged out!', {
        autoClose: 3000,
      });
      setTimeout(() => {
        sessionStorage.clear();
        this.$router.push({ name: 'login' });
      }, 1500);
    },
    isCustomDropdown() {
      //Search bar
      var searchOptions = document.getElementById("search-close-options");
      var dropdown = document.getElementById("search-dropdown");
      var searchInput = document.getElementById("search-options");

      searchInput.addEventListener("focus", () => {
        var inputLength = searchInput.value.length;
        if (inputLength > 0) {
          dropdown.classList.add("show");
          searchOptions.classList.remove("d-none");
        } else {
          dropdown.classList.remove("show");
          searchOptions.classList.add("d-none");
        }
      });

      searchInput.addEventListener("keyup", () => {
        var inputLength = searchInput.value.length;
        if (inputLength > 0) {
          dropdown.classList.add("show");
          searchOptions.classList.remove("d-none");
        } else {
          dropdown.classList.remove("show");
          searchOptions.classList.add("d-none");
        }
      });

      searchOptions.addEventListener("click", () => {
        searchInput.value = "";
        dropdown.classList.remove("show");
        searchOptions.classList.add("d-none");
      });

      document.body.addEventListener("click", (e) => {
        if (e.target.getAttribute("id") !== "search-options") {
          dropdown.classList.remove("show");
          searchOptions.classList.add("d-none");
        }
      });
    },
    toggleHamburgerMenu() {
      document.documentElement.setAttribute("data-sidebar-visibility", "show");

      var windowSize = document.documentElement.clientWidth;
      let layoutType = document.documentElement.getAttribute("data-layout");
      let visiblilityType = document.documentElement.getAttribute("data-sidebar-visibility");

      if (windowSize > 767)
        document.querySelector(".hamburger-icon").classList.toggle("open");

      //For collapse horizontal menu
      if (document.documentElement.getAttribute("data-layout") === "horizontal") {
        document.body.classList.contains("menu") ? document.body.classList.remove("menu") : document.body.classList.add("menu");
      }

      //For collapse vertical menu
      if (visiblilityType === "show" && (layoutType === "vertical")) {
        if (windowSize < 1025 && windowSize > 767) {
          document.body.classList.remove("vertical-sidebar-enable");
          document.documentElement.getAttribute("data-sidebar-size") == "sm" ?
            document.documentElement.setAttribute("data-sidebar-size", "") :
            document.documentElement.setAttribute("data-sidebar-size", "sm");
        } else if (windowSize > 1025) {
          document.body.classList.remove("vertical-sidebar-enable");
          document.documentElement.getAttribute("data-sidebar-size") == "lg" ?
            document.documentElement.setAttribute("data-sidebar-size", "sm") :
            document.documentElement.setAttribute("data-sidebar-size", "lg");
        } else if (windowSize <= 767) {
          document.body.classList.add("vertical-sidebar-enable");
          document.documentElement.setAttribute("data-sidebar-size", "lg");
        }
      }

      //Two column menu
      if (document.documentElement.getAttribute("data-layout") == "twocolumn") {
        document.body.classList.contains("twocolumn-panel") ? document.body.classList.remove("twocolumn-panel") : document.body.classList.add("twocolumn-panel");
      }
    },
    toggleMenu() {
      this.$parent.toggleMenu();
    },
    toggleRightSidebar() {
      this.$parent.toggleRightSidebar();
    },
    initFullScreen() {
      // document.body.classList.toggle("fullscreen-enable");
      if (
        !document.fullscreenElement &&
        /* alternative standard method */
        !document.mozFullScreenElement &&
        !document.webkitFullscreenElement
      ) {
        // current working methods
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(
            Element.ALLOW_KEYBOARD_INPUT
          );
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    },
    setLanguage(locale, country, flag) {
      this.lan = locale;
      this.text = country;
      this.flag = flag;
      if (document.getElementById("header-lang-img")) {
        document.getElementById("header-lang-img").setAttribute("src", flag);
      }
      i18n.global.locale = locale;
    },
    initTopbarComponents() {
      var cartList = document.querySelectorAll(".product").length;

      document.querySelectorAll(".cartitem-badge").forEach(function (item) {
        item.innerHTML = cartList
      })
      var This = this;
      document.querySelectorAll(".product-list").forEach(function (elem) {
        elem.querySelectorAll(".product-count").forEach(function (subelem) {
          subelem.innerHTML = elem.querySelectorAll(".product").length
        })
        This.recalculateCart(elem);
      }, This)

    },
    recalculateCart(elm) {
      var taxRate = 0.125;
      var shippingRate = 65.00;
      var discountRate = 0.15;

      var currencySign = "$";
      var subtotal = 0;

      Array.from(elm.getElementsByClassName("product")).forEach(function (item) {
        Array.from(item.getElementsByClassName('product-line-price')).forEach(function (e) {
          subtotal += parseFloat(e.innerHTML);
        });
      });

      /* Calculate totals */
      var tax = subtotal * taxRate;
      var discount = subtotal * discountRate;

      var shipping = (subtotal > 0 ? shippingRate : 0);
      var total = subtotal + tax + shipping - discount;

      elm.querySelector(".cart-subtotal").innerHTML = currencySign + subtotal.toFixed(2);
      elm.querySelector(".cart-tax").innerHTML = currencySign + tax.toFixed(2);
      elm.querySelector(".cart-shipping").innerHTML = currencySign + shipping.toFixed(2);
      elm.querySelector(".cart-total").innerHTML = currencySign + total.toFixed(2);
      elm.querySelector(".cart-discount").innerHTML = "-" + currencySign + discount.toFixed(2);
    },

    removeProduct(element) {
      this.removeCartModal = true;
      document.getElementById('remove-cartproduct').addEventListener('click', function () {
        if (element.target.parentElement.parentElement.closest(".product")) {
          element.target.parentElement.parentElement.closest(".product").remove();

          document.querySelector("#removeCartModal .btn-close").click()

          Array.from(document.querySelectorAll(".cartitem-badge")).forEach((badge) => {
            badge.innerHTML = document.querySelectorAll(".product").length;
          })
          if (document.querySelectorAll(".product").length === 0) {
            if (document.getElementById("empty-cart")) {
              document.getElementById("empty-cart").style.display = "block";
            }
            if (document.getElementById("checkout-elem") || document.getElementById('count-table')) {
              document.getElementById("checkout-elem").style.display = "none";
              document.getElementById("count-table").style.display = "none";
            }
          }
        }
      })
    },
    deleteNotification() {
      this.removeNotificationModal = true;
      document.getElementById("delete-notification").addEventListener("click", function () {
        Array.from(document.querySelectorAll(".notification-item")).forEach(function (element) {
          if (element.classList.contains("active")) {
            element.remove();
          }
          Array.from(document.querySelectorAll(".notification-badge")).forEach(function (item) {
            item.innerHTML = document.querySelectorAll('.notification-check input').length;
          })
          Array.from(document.querySelectorAll(".notification-unread")).forEach(function (item) {
            item.innerHTML = document.querySelectorAll('.notification-item.unread-message').length;
          })
        });
        document.querySelector("#removeNotificationModal .btn-close").click()

        if (document.querySelectorAll(".notification-item").length === 0) {
          document.querySelectorAll(".notification-title").forEach(function (item) {
            item.style.display = "none";
          });

          var emptyNotificationElem = document.querySelector("#notificationItemsTabContent .empty-notification-elem")
          if (!emptyNotificationElem && document.getElementById("notificationItemsTabContent")) {
            document.getElementById("notificationItemsTabContent").innerHTML += '<div class="empty-notification-elem text-center px-4">\
						<div class="mt-3 avatar-md mx-auto">\
							<div class="avatar-title bg-info-subtle text-info fs-24 rounded-circle">\
							<i class="bi bi-bell "></i>\
							</div>\
						</div>\
						<div class="pb-3 mt-2">\
							<h6 class="fs-lg fw-semibold lh-base">Hey! You have no any notifications </h6>\
						</div>\
					</div>'
          }
        }

      })

    },
    // light-dark mode
    changeMode(mode) {
      this.$parent.changeMode(mode);
      if (mode == "dark") {
        return this.$parent.changeLayout({ mode: mode, topbar: "dark" });
      } else if (mode == "light") { 
        return this.$parent.changeLayout({ mode: mode, topbar: "light" });
      } else {
        return this.$parent.changeLayout({ mode: mode, topbar: "light" });
      }
    },
    windowResizeHover() {
      var windowSize = document.documentElement.clientWidth;
      if (windowSize < 1025 && windowSize > 767) {
        if (document.querySelector(".hamburger-icon")) {
          document.querySelector(".hamburger-icon").classList.add("open");
        }
      } else if (windowSize >= 1025) {
        if (document.querySelector(".hamburger-icon")) {
          document.querySelector(".hamburger-icon").classList.remove("open");
        }
      } else if (windowSize <= 767) {
        if (document.querySelector(".hamburger-icon")) {
          document.querySelector(".hamburger-icon").classList.add("open");
        }
      }
    }
  },
  computed: {},
  mounted() {
    this.flag = this.$i18n.locale;
    this.languages.forEach((item) => {
      if (item.language == this.flag) {
        document.getElementById("header-lang-img") ? document.getElementById("header-lang-img").setAttribute("src", item.flag) : '';
      }
    });

    document.addEventListener("scroll", function () {
      var pageTopbar = document.getElementById("page-topbar");
      if (pageTopbar) {
        document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50 ? pageTopbar.classList.add(
          "topbar-shadow") : pageTopbar.classList.remove("topbar-shadow");
      }
    });

    // hide empty cart
    if (document.getElementById("topnav-hamburger-icon"))
      document.getElementById("topnav-hamburger-icon").addEventListener("click", this.toggleHamburgerMenu);

    if (document.getElementById("empty-cart")) {
      document.getElementById("empty-cart").style.display = "none";
    }
    if (document.getElementById("checkout-elem") || document.getElementById('count-table')) {
      document.getElementById("checkout-elem").style.display = "block";
      document.getElementById("count-table").style.display = "block";
    }

    // count notifications 
    Array.from(document.querySelectorAll(".notification-check input")).forEach(function (element) {
      element.addEventListener("change", function (el) {
        el.target.closest(".notification-item").classList.toggle("active");

        var checkedCount = document.querySelectorAll('.notification-check input:checked').length;

        if (el.target.closest(".notification-item").classList.contains("active")) {
          (checkedCount > 0) ? document.getElementById("notification-actions").style.display = 'block' : document.getElementById("notification-actions").style.display = 'none';
        } else {
          (checkedCount > 0) ? document.getElementById("notification-actions").style.display = 'block' : document.getElementById("notification-actions").style.display = 'none';
        }
        document.getElementById("select-content").innerHTML = checkedCount
      });

      var notificationDropdown = document.getElementById('notificationDropdown')
      if (notificationDropdown) {
        notificationDropdown.addEventListener('hide.bs.dropdown', function () {
          element.checked = false;
          document.querySelectorAll('.notification-item').forEach(function (item) {
            item.classList.remove("active");
          })
          document.getElementById('notification-actions').style.display = '';
        });
      }

    });

    // show no notifications
    if (document.querySelectorAll(".notification-item").length > 0) {
      document.querySelectorAll(".notification-title").forEach(function (item) {
        item.style.display = "block";
      });
    }

    // product quantity plus
    var This = this;
    Array.from(document.querySelectorAll(".product-list .plus")).forEach((e) => {
      e.addEventListener('click', function () {
        var productRow = e.closest('.product');
        var productList = e.closest('.product-list');
        var price;
        if (productRow || productRow.getElementsByClassName('product-price'))
          Array.from(productRow.getElementsByClassName('product-price')).forEach(function (e) {
            price = parseFloat(e.innerHTML);
          });

        if (e.previousElementSibling && e.previousElementSibling.classList.contains("product-quantity")) {
          var value = e.previousElementSibling.value
          e.previousElementSibling.value = parseInt(value) + 1;
          value = parseInt(value) + 1
          var linePrice = price * value;
          productRow.getElementsByClassName('product-line-price')[0].innerText = linePrice.toFixed(2);
          This.recalculateCart(productList);
        }
      });
    }, This)

    // product quantity minus
    Array.from(document.querySelectorAll(".product-list .minus")).forEach((e) => {
      e.addEventListener('click', function () {
        var productRow = e.closest('.product');
        var productList = e.closest('.product-list');
        var price;
        if (productRow || productRow.getElementsByClassName('product-price'))
          Array.from(productRow.getElementsByClassName('product-price')).forEach(function (e) {
            price = parseFloat(e.innerHTML);
          });

        if (e.nextElementSibling && e.nextElementSibling.classList.contains("product-quantity")) {
          var value = e.nextElementSibling.value
          if (value > 0) {
            e.nextElementSibling.value = parseInt(value) - 1;
            value = parseInt(value) - 1
            var linePrice = price * value;
            productRow.getElementsByClassName('product-line-price')[0].innerText = linePrice.toFixed(2);
            This.recalculateCart(productList);
          }
        }
      });
    }, This)

    window.addEventListener("resize", this.windowResizeHover);
    this.windowResizeHover();

    this.isCustomDropdown();
    this.initTopbarComponents();

    window.addEventListener('fullscreenchange', function () {
      document.body.classList.toggle("fullscreen-enable");
    });
  },
};
</script>

<template>
  <header id="page-topbar">
    <div class="layout-width">
      <div class="navbar-header">
        <div class="d-flex">
          <div class="navbar-brand-box horizontal-logo">
            <router-link to="/" class="logo logo-dark">
              <span class="logo-sm">
                <img :src="logoSm" alt="" height="22" />
              </span>
              <span class="logo-lg">
                <img :src="logoDark" alt="" height="22" />
              </span>
            </router-link>

            <router-link to="/" class="logo logo-light">
              <span class="logo-sm">
                <img :src="logoSm" alt="" height="22" />
              </span>
              <span class="logo-lg">
                <img :src="logoLight" alt="" height="22" />
              </span>
            </router-link>
          </div>

          <b-button type="button" size="sm" variant="white"
            class="px-3 fs-16 header-item vertical-menu-btn topnav-hamburger shadow-none" id="topnav-hamburger-icon">
            <span class="hamburger-icon">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </b-button>

          <form class="app-search d-none d-md-inline-flex">
            <div class="position-relative">
              <input type="text" class="form-control" placeholder="Search..." autocomplete="off" id="search-options"
                value="">
              <span class="mdi mdi-magnify search-widget-icon"></span>
              <span class="mdi mdi-close-circle search-widget-icon search-widget-icon-close d-none"
                id="search-close-options"></span>
            </div>
            <div class="dropdown-menu dropdown-menu-lg" id="search-dropdown">
              <SimpleBar style="max-height: 320px">
                <div class="dropdown-header">
                  <h6 class="text-overflow text-muted mb-0 text-uppercase">
                    Recent Searches
                  </h6>
                </div>

                <div class="dropdown-item bg-transparent text-wrap">
                  <router-link to="/" class="btn btn-subtle-secondary btn-sm btn-rounded me-1">how to setup <i
                      class="mdi mdi-magnify ms-1"></i></router-link>
                  <router-link to="/" class="btn btn-subtle-secondary btn-sm btn-rounded">buttons <i
                      class="mdi mdi-magnify ms-1"></i></router-link>
                </div>
                <div class="dropdown-header mt-2">
                  <h6 class="text-overflow text-muted mb-1 text-uppercase">
                    Pages
                  </h6>
                </div>

                <b-link href="javascript:void(0);" class="dropdown-item notify-item">
                  <i class=" ri-bubble-chart-line align-middle fs-18 text-muted me-2"></i>
                  <span>Analytics Dashboard</span>
                </b-link>

                <b-link href="javascript:void(0);" class="dropdown-item notify-item">
                  <i class="ri-lifebuoy-line align-middle fs-18 text-muted me-2"></i>
                  <span>Help Center</span>
                </b-link>

                <b-link href="javascript:void(0);" class="dropdown-item notify-item">
                  <i class=" ri-user-settings-line align-middle fs-18 text-muted me-2"></i>
                  <span>My account settings</span>
                </b-link>

                <div class="dropdown-header mt-2">
                  <h6 class="text-overflow text-muted mb-2 text-uppercase">
                    Members
                  </h6>
                </div>

                <div class="notification-list">
                  <b-link href="javascript:void(0);" class="d-flex dropdown-item notify-item py-2">
                    <b-img :src="avatar2" rounded="circle" class="me-3 avatar-xs" alt="user-pic"></b-img>
                    <div class="flex-1">
                      <h6 class="m-0">Angela Bernier</h6>
                      <span class="fs-11 mb-0 text-muted">Manager</span>
                    </div>
                  </b-link>
                  <b-link href="javascript:void(0);" class="d-flex dropdown-item notify-item py-2">
                    <b-img :src="avatar3" rounded="circle" class="me-3 avatar-xs" alt="user-pic"></b-img>
                    <div class="flex-1">
                      <h6 class="m-0">David Grasso</h6>
                      <span class="fs-11 mb-0 text-muted">Web Designer</span>
                    </div>
                  </b-link>
                  <b-link href="javascript:void(0);" class="d-flex dropdown-item notify-item py-2">
                    <b-img :src="avatar5" rounded="circle" class="me-3 avatar-xs" alt="user-pic"></b-img>
                    <div class="flex-1">
                      <h6 class="m-0">Mike Bunch</h6>
                      <span class="fs-11 mb-0 text-muted">React Developer</span>
                    </div>
                  </b-link>
                </div>
              </SimpleBar>

              <div class="text-center pt-3 pb-1">
                <router-link to="#" class="btn btn-primary btn-sm">View All Results <i
                    class="ri-arrow-right-line ms-1"></i></router-link>
              </div>
            </div>
          </form>
        </div>

        <div class="d-flex align-items-center">
          <div class="dropdown topbar-head-dropdown ms-1 header-item">
            <b-button type="button" variant="ghost-dark" class="btn-icon btn-topbar rounded-circle"
              data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="bi bi-grid fs-2xl"></i>
            </b-button>
            <div class="dropdown-menu dropdown-menu-lg p-0 dropdown-menu-end" style="">
              <div class="p-3 border-top-0 border-start-0 border-end-0 border-dashed border">
                <b-row class="align-items-center">
                  <b-col>
                    <h6 class="m-0 fw-semibold fs-base"> Browse by Apps </h6>
                  </b-col>
                  <b-col cols="auto">
                    <b-link href="#!" class="btn btn-sm btn-subtle-info"> View All Apps
                      <i class="ri-arrow-right-s-line align-middle"></i>
                    </b-link>
                  </b-col>
                </b-row>
              </div>

              <div class="p-2">
                <b-row class="g-0">
                  <b-col>
                    <b-link class="dropdown-icon-item" href="#!">
                      <img :src="github" alt="Github" />
                      <span>GitHub</span>
                    </b-link>
                  </b-col>
                  <b-col>
                    <b-link class="dropdown-icon-item" href="#!">
                      <img :src="bitbucket" alt="bitbucket" />
                      <span>Bitbucket</span>
                    </b-link>
                  </b-col>
                  <b-col>
                    <b-link class="dropdown-icon-item" href="#!">
                      <img :src="dribbble" alt="dribbble" />
                      <span>Dribbble</span>
                    </b-link>
                  </b-col>
                </b-row>

                <b-row class="g-0">
                  <b-col>
                    <b-link class="dropdown-icon-item" href="#!">
                      <img :src="dropbox" alt="dropbox" />
                      <span>Dropbox</span>
                    </b-link>
                  </b-col>
                  <b-col>
                    <b-link class="dropdown-icon-item" href="#!">
                      <img :src="mail_chimp" alt="mail_chimp" />
                      <span>Mail Chimp</span>
                    </b-link>
                  </b-col>
                  <b-col>
                    <b-link class="dropdown-icon-item" href="#!">
                      <img :src="slack" alt="slack" />
                      <span>Slack</span>
                    </b-link>
                  </b-col>
                </b-row>
              </div>
            </div>
          </div>

          <div class="dropdown ms-1 topbar-head-dropdown header-item">
            <b-button type="button" variant="ghost-secondary" class="btn-icon btn-topbar rounded-circle"
              data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img id="header-lang-img" :src="us" alt="Header Language" height="20" class="rounded">
            </b-button>
            <div class="dropdown-menu dropdown-menu-end">
              <b-link href="#" v-for="(entry, i) in languages" :key="`Lang${i}`" :value="entry"
                @click="setLanguage(entry.language, entry.title, entry.flag)" :class="{ active: lan === entry.language }"
                class="dropdown-item notify-item language py-2" data-lang="en" title="English">
                <img :src="entry.flag" alt="user-image" class="me-2 rounded" height="18" />
                <span class="align-middle">{{ entry.title }}</span>
              </b-link>
            </div>
          </div>

          <div class="dropdown topbar-head-dropdown ms-1 header-item">
            <b-button type="button" variant="ghost-dark" class="btn-icon btn-topbar rounded-circle"
              id="page-header-cart-dropdown" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true"
              aria-expanded="false">
              <i class='bi bi-bag fs-2xl'></i>
              <span
                class="position-absolute topbar-badge cartitem-badge fs-3xs translate-middle badge rounded-pill bg-info">5</span>
            </b-button>
            <div class="dropdown-menu dropdown-menu-xl dropdown-menu-end p-0 product-list"
              aria-labelledby="page-header-cart-dropdown">
              <div class="p-3 border-bottom">
                <b-row class="align-items-center">
                  <b-col>
                    <h6 class="m-0 fs-lg fw-semibold"> My Cart <span
                        class="badge bg-secondary fs-sm cartitem-badge ms-1">7</span></h6>
                  </b-col>
                  <b-col cols="auto">
                    <b-link href="#!">View All</b-link>
                  </b-col>
                </b-row>
              </div>
              <SimpleBar style="max-height: 300px;">
                <div class="p-3">
                  <div class="text-center empty-cart" id="empty-cart">
                    <div class="avatar-md mx-auto my-3">
                      <div class="avatar-title bg-info-subtle text-info fs-2 rounded-circle">
                        <i class='bx bx-cart'></i>
                      </div>
                    </div>
                    <h5 class="mb-3">Your Cart is Empty!</h5>
                    <b-link href="#!" class="btn btn-success w-md mb-3">Shop Now</b-link>
                  </div>

                  <div class="d-block dropdown-item product text-wrap p-2">
                    <div class="d-flex">
                      <div class="avatar-sm me-3 flex-shrink-0">
                        <div class="avatar-title bg-light rounded">
                          <img :src="product1" class="avatar-xs" alt="user-pic" />
                        </div>
                      </div>
                      <div class="flex-grow-1">
                        <p class="mb-1 fs-sm text-muted">Fashion</p>
                        <h6 class="mt-0 mb-3 fs-md">
                          <b-link href="#!" class="text-reset">Blive Printed Men Round
                            Neck</b-link>
                        </h6>
                        <div class="text-muted fw-medium d-none">$<span class="product-price">327.49</span></div>
                        <div class="input-step">
                          <b-button type="button" variant="white" class="minus">–</b-button>
                          <input type="number" class="product-quantity" value="2" min="0" max="100" readonly>
                          <b-button type="button" variant="white" class="plus">+</b-button>
                        </div>
                      </div>
                      <div class="ps-2 d-flex flex-column justify-content-between align-items-end">
                        <b-button type="button" variant="ghost-primary" size="sm" class="btn-icon remove-cart-btn"
                          @click="removeProduct"><i class="ri-close-fill fs-lg"></i></b-button>
                        <h5 class="mb-0">$ <span class="product-line-price">654.98</span></h5>
                      </div>
                    </div>
                  </div>

                  <div class="d-block dropdown-item product text-wrap p-2">
                    <div class="d-flex">
                      <div class="avatar-sm me-3 flex-shrink-0">
                        <div class="avatar-title bg-light rounded">
                          <img :src="product5" class="avatar-xs" alt="user-pic" />
                        </div>
                      </div>
                      <div class="flex-grow-1">
                        <p class="mb-1 fs-sm text-muted">Sportwear</p>
                        <h6 class="mt-0 mb-3 fs-md">
                          <b-link href="#!" class="text-reset">Willage Volleyball Ball</b-link>
                        </h6>
                        <div class="text-muted fw-medium d-none">$<span class="product-price">49.06</span></div>
                        <div class="input-step">
                          <b-button variant="white" type="button" class="minus">–</b-button>
                          <input type="number" class="product-quantity" value="3" min="0" max="100" readonly>
                          <b-button variant="white" type="button" class="plus">+</b-button>
                        </div>
                      </div>
                      <div class="ps-2 d-flex flex-column justify-content-between align-items-end">
                        <b-button type="button" size="sm" variant="ghost-primary" class="btn-icon remove-cart-btn"
                          @click="removeProduct"><i class="ri-close-fill fs-lg"></i></b-button>
                        <h5 class="mb-0">$ <span class="product-line-price">147.18</span></h5>
                      </div>
                    </div>
                  </div>

                  <div class="d-block dropdown-item product text-wrap p-2">
                    <div class="d-flex">
                      <div class="avatar-sm me-3 flex-shrink-0">
                        <div class="avatar-title bg-light rounded">
                          <img :src="product10" class="avatar-xs" alt="user-pic" />
                        </div>
                      </div>
                      <div class="flex-grow-1">
                        <p class="mb-1 fs-sm text-muted">Fashion</p>
                        <h6 class="mt-0 mb-3 fs-md">
                          <b-link href="#!" class="text-reset">Cotton collar tshirts for
                            men</b-link>
                        </h6>
                        <div class="text-muted fw-medium d-none">$<span class="product-price">53.33</span></div>
                        <div class="input-step">
                          <b-button variant="white" type="button" class="minus">–</b-button>
                          <input type="number" class="product-quantity" value="3" min="0" max="100" readonly>
                          <b-button variant="white" type="button" class="plus">+</b-button>
                        </div>
                      </div>
                      <div class="ps-2 d-flex flex-column justify-content-between align-items-end">
                        <b-button type="button" size="sm" variant="ghost-primary" class="btn-icon remove-cart-btn"
                          @click="removeProduct"><i class="ri-close-fill fs-lg"></i></b-button>
                        <h5 class="mb-0">$ <span class="product-line-price">159.99</span></h5>
                      </div>
                    </div>
                  </div>

                  <div class="d-block dropdown-item product text-wrap p-2">
                    <div class="d-flex">
                      <div class="avatar-sm me-3 flex-shrink-0">
                        <div class="avatar-title bg-light rounded">
                          <img :src="product11" class="avatar-xs" alt="user-pic" />
                        </div>
                      </div>
                      <div class="flex-grow-1">
                        <p class="mb-1 fs-sm text-muted">Fashion</p>
                        <h6 class="mt-0 mb-3 fs-md">
                          <b-link href="#!" class="text-reset">Jeans blue men boxer</b-link>
                        </h6>
                        <div class="text-muted fw-medium d-none">$<span class="product-price">164.37</span></div>
                        <div class="input-step">
                          <b-button variant="white" type="button" class="minus">–</b-button>
                          <input type="number" class="product-quantity" value="1" min="0" max="100" readonly>
                          <b-button variant="white" type="button" class="plus">+</b-button>
                        </div>
                      </div>
                      <div class="ps-2 d-flex flex-column justify-content-between align-items-end">
                        <b-button type="button" variant="ghost-primary" size="sm" class="btn-icon remove-cart-btn"
                          @click="removeProduct"><i class="ri-close-fill fs-lg"></i></b-button>
                        <h5 class="mb-0">$ <span class="product-line-price">164.37</span></h5>
                      </div>
                    </div>
                  </div>

                  <div class="d-block dropdown-item product text-wrap p-2">
                    <div class="d-flex">
                      <div class="avatar-sm me-3 flex-shrink-0">
                        <div class="avatar-title bg-light rounded">
                          <img :src="product8" class="avatar-xs" alt="user-pic" />
                        </div>
                      </div>
                      <div class="flex-grow-1">
                        <p class="mb-1 fs-sm text-muted">Fashion</p>
                        <h6 class="mt-0 mb-3 fs-md">
                          <b-link href="#!" class="text-reset">Full Sleeve Solid Men
                            Sweatshirt</b-link>
                        </h6>
                        <div class="text-muted fw-medium d-none">$<span class="product-price">180.00</span></div>
                        <div class="input-step">
                          <b-button variant="white" type="button" class="minus">–</b-button>
                          <input type="number" class="product-quantity" value="1" min="0" max="100" readonly>
                          <b-button variant="white" type="button" class="plus">+</b-button>
                        </div>
                      </div>
                      <div class="ps-2 d-flex flex-column justify-content-between align-items-end">
                        <b-button type="button" variant="ghost-primary" size="sm" class="btn-icon remove-cart-btn"
                          @click="removeProduct"><i class="ri-close-fill fs-lg"></i></b-button>
                        <h5 class="mb-0">$ <span class="product-line-price">180.00</span></h5>
                      </div>
                    </div>
                  </div>

                  <div id="count-table">
                    <table class="table table-borderless mb-0  fw-semibold">
                      <tbody>
                        <tr>
                          <td>Sub Total :</td>
                          <td class="text-end cart-subtotal">$1306.52</td>
                        </tr>
                        <tr>
                          <td>Discount <span class="text-muted">(Steex15)</span>:</td>
                          <td class="text-end cart-discount">- $195.98</td>
                        </tr>
                        <tr>
                          <td>Shipping Charge :</td>
                          <td class="text-end cart-shipping">$65.00</td>
                        </tr>
                        <tr>
                          <td>Estimated Tax (12.5%) : </td>
                          <td class="text-end cart-tax">$163.31</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                </div>
              </SimpleBar>
              <div class="p-3 border-bottom-0 border-start-0 border-end-0 border-dashed border" id="checkout-elem">
                <div class="d-flex justify-content-between align-items-center pb-3">
                  <h5 class="m-0 text-muted">Total:</h5>
                  <div class="px-2">
                    <h5 class="m-0 cart-total">$1338.86</h5>
                  </div>
                </div>

                <router-link to="/ecommerce/checkout" class="btn btn-info text-center w-100">
                  Checkout
                </router-link>
              </div>
            </div>
          </div>

          <div class="ms-1 header-item d-none d-sm-flex">
            <b-button type="button" variant="ghost-dark" class="btn-icon btn-topbar rounded-circle"
              data-toggle="fullscreen" @click="initFullScreen">
              <i class="bi bi-arrows-fullscreen fs-lg"></i>
            </b-button>
          </div>

          <div class="dropdown topbar-head-dropdown ms-1 header-item">
            <b-button type="button" variant="ghost-dark" class="btn-icon btn-topbar rounded-circle mode-layout"
              data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="bi bi-sun align-middle fs-3xl"></i>
            </b-button>
            <div class="dropdown-menu p-2 dropdown-menu-end" id="light-dark-mode">
              <b-link href="#!" class="dropdown-item" @click="changeMode('light')" data-mode="light"><i
                  class="bi bi-sun align-middle me-2"></i> Defualt (light mode)</b-link>
              <b-link href="#!" class="dropdown-item" @click="changeMode('dark')" data-mode="dark"><i
                  class="bi bi-moon align-middle me-2"></i> Dark</b-link>
              <b-link href="#!" class="dropdown-item" @click="changeMode('auto')" data-mode="auto"><i
                  class="bi bi-moon-stars align-middle me-2"></i> Auto (system defualt)</b-link>
            </div>
          </div>

          <div class="dropdown topbar-head-dropdown ms-1 header-item" id="notificationDropdown">
            <b-button type="button" variant="ghost-dark" class="btn-icon btn-topbar rounded-circle"
              id="page-header-notifications-dropdown" data-bs-toggle="dropdown" data-bs-auto-close="outside"
              aria-haspopup="true" aria-expanded="false">
              <i class="bi bi-bell fs-2xl"></i>
              <span class="position-absolute topbar-badge fs-3xs translate-middle badge rounded-pill bg-danger"><span
                  class="notification-badge">4</span><span class="visually-hidden">unread
                  messages</span></span>
            </b-button>
            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
              aria-labelledby="page-header-notifications-dropdown">

              <div class="dropdown-head rounded-top">
                <div class="p-3 border-bottom border-bottom-dashed">
                  <b-row class="align-items-center">
                    <b-col>
                      <h6 class="mb-0 fs-lg fw-semibold"> Notifications <span
                          class="badge bg-danger-subtle text-danger fs-sm notification-badge">
                          4</span></h6>
                      <p class="fs-md text-muted mt-1 mb-0">You have <span
                          class="fw-semibold notification-unread">3</span> unread messages</p>
                    </b-col>

                    <b-col cols="auto" class="dropdown">
                      <b-link href="#" data-bs-toggle="dropdown" class="link-secondary fs-md"><i
                          class="bi bi-three-dots-vertical"></i></b-link>
                      <ul class="dropdown-menu">
                        <li><b-link class="dropdown-item" href="#">All Clear</b-link></li>
                        <li><b-link class="dropdown-item" href="#">Mark all as read</b-link></li>
                        <li><b-link class="dropdown-item" href="#">Archive All</b-link></li>
                      </ul>
                    </b-col>
                  </b-row>
                </div>
              </div>
              <div class="py-2 ps-2" id="notificationItemsTabContent">
                <SimpleBar style="max-height: 300px;" class="pe-2">
                  <h6 class="text-overflow text-muted fs-sm my-2 text-uppercase notification-title">New
                  </h6>
                  <div class="text-reset notification-item d-block dropdown-item position-relative unread-message">
                    <div class="d-flex">
                      <div class="avatar-xs me-3 flex-shrink-0">
                        <span class="avatar-title bg-info-subtle text-info rounded-circle fs-lg">
                          <i class="bx bx-badge-check"></i>
                        </span>
                      </div>
                      <div class="flex-grow-1">
                        <b-link href="#!" class="stretched-link">
                          <h6 class="mt-0 fs-md mb-2 lh-base">Your <b>Elite</b> author Graphic
                            Optimization <span class="text-secondary">reward</span> is ready!
                          </h6>
                        </b-link>
                        <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                          <span><i class="mdi mdi-clock-outline"></i> Just 30 sec ago</span>
                        </p>
                      </div>
                      <div class="px-2 fs-base">
                        <div class="form-check notification-check">
                          <input class="form-check-input" type="checkbox" value="" id="all-notification-check01">
                          <label class="form-check-label" for="all-notification-check01"></label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="text-reset notification-item d-block dropdown-item position-relative unread-message">
                    <div class="d-flex">
                      <div class="position-relative me-3 flex-shrink-0">
                        <img :src="avatar2" class="rounded-circle avatar-xs" alt="user-pic" />
                        <span
                          class="active-badge position-absolute start-100 translate-middle p-1 bg-success rounded-circle">
                          <span class="visually-hidden">New alerts</span>
                        </span>
                      </div>
                      <div class="flex-grow-1">
                        <b-link href="#!" class="stretched-link">
                          <h6 class="mt-0 mb-1 fs-md fw-semibold">Angela Bernier</h6>
                        </b-link>
                        <div class="fs-sm text-muted">
                          <p class="mb-1">Answered to your comment on the cash flow forecast's
                            graph 🔔.</p>
                        </div>
                        <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                          <span><i class="mdi mdi-clock-outline"></i> 48 min ago</span>
                        </p>
                      </div>
                      <div class="px-2 fs-base">
                        <div class="form-check notification-check">
                          <input class="form-check-input" type="checkbox" value="" id="all-notification-check02">
                          <label class="form-check-label" for="all-notification-check02"></label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="text-reset notification-item d-block dropdown-item position-relative unread-message">
                    <div class="d-flex">
                      <div class="avatar-xs me-3 flex-shrink-0">
                        <span class="avatar-title bg-danger-subtle text-danger rounded-circle fs-lg">
                          <i class='bx bx-message-square-dots'></i>
                        </span>
                      </div>
                      <div class="flex-grow-1">
                        <b-link href="#!" class="stretched-link">
                          <h6 class="mt-0 mb-2 fs-md lh-base">You have received <b class="text-success">20</b> new
                            messages in the conversation
                          </h6>
                        </b-link>
                        <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                          <span><i class="mdi mdi-clock-outline"></i> 2 hrs ago</span>
                        </p>
                      </div>
                      <div class="px-2 fs-base">
                        <div class="form-check notification-check">
                          <input class="form-check-input" type="checkbox" value="" id="all-notification-check03">
                          <label class="form-check-label" for="all-notification-check03"></label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h6 class="text-overflow text-muted fs-sm my-2 text-uppercase notification-title">Read
                    Before</h6>

                  <div class="text-reset notification-item d-block dropdown-item position-relative">
                    <div class="d-flex">

                      <div class="position-relative me-3 flex-shrink-0">
                        <img :src="avatar8" class="rounded-circle avatar-xs" alt="user-pic" />
                        <span
                          class="active-badge position-absolute start-100 translate-middle p-1 bg-warning rounded-circle">
                          <span class="visually-hidden">New alerts</span>
                        </span>
                      </div>

                      <div class="flex-grow-1">
                        <b-link href="#!" class="stretched-link">
                          <h6 class="mt-0 mb-1 fs-md fw-semibold">Maureen Gibson</h6>
                        </b-link>
                        <div class="fs-sm text-muted">
                          <p class="mb-1">We talked about a project on linkedin.</p>
                        </div>
                        <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                          <span><i class="mdi mdi-clock-outline"></i> 4 hrs ago</span>
                        </p>
                      </div>
                      <div class="px-2 fs-base">
                        <div class="form-check notification-check">
                          <input class="form-check-input" type="checkbox" value="" id="all-notification-check04">
                          <label class="form-check-label" for="all-notification-check04"></label>
                        </div>
                      </div>
                    </div>
                  </div>
                </SimpleBar>
                <div class="notification-actions" id="notification-actions">
                  <div class="d-flex text-muted justify-content-center align-items-center">
                    Select <div id="select-content" class="text-body fw-semibold px-1">0</div> Result
                    <b-button type="button" variant="link" class="link-danger p-0 ms-2"
                      @click="deleteNotification">Remove</b-button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="dropdown ms-sm-3 header-item topbar-user">
            <b-button type="button" variant="white" class="shadow-none" id="page-header-user-dropdown"
              data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span class="d-flex align-items-center">
                <img class="rounded-circle header-profile-user" :src="avatar1" alt="Header Avatar">
                <span class="text-start ms-xl-2">
                  <span class="d-none d-xl-inline-block ms-1 fw-medium user-name-text">Richard
                    Marshall</span>
                  <span class="d-none d-xl-block ms-1 fs-sm user-name-sub-text">Founder</span>
                </span>
              </span>
            </b-button>
            <div class="dropdown-menu dropdown-menu-end">

              <h6 class="dropdown-header">Welcome Richard!</h6>
              <router-link class="dropdown-item" to="/pages/profile"><i
                  class="mdi mdi-account-circle text-muted fs-lg align-middle me-1"></i> <span
                  class="align-middle">Profile</span></router-link>
              <router-link class="dropdown-item" to="/chat"><i
                  class="mdi mdi-message-text-outline text-muted fs-lg align-middle me-1"></i> <span
                  class="align-middle">Messages</span></router-link>
              <router-link class="dropdown-item" to="/tickets/overview"><i
                  class="mdi mdi-calendar-check-outline text-muted fs-lg align-middle me-1"></i> <span
                  class="align-middle">Taskboard</span></router-link>
              <router-link class="dropdown-item" to="/pages/faqs"><i
                  class="mdi mdi-lifebuoy text-muted fs-lg align-middle me-1"></i> <span
                  class="align-middle">Help</span></router-link>
              <div class="dropdown-divider"></div>
              <router-link class="dropdown-item" to="/pages/profile"><i
                  class="mdi mdi-wallet text-muted fs-lg align-middle me-1"></i> <span class="align-middle">Balance :
                  <b>$8451.36</b></span></router-link>
              <router-link class="dropdown-item" to="/pages/profile-settings"><span
                  class="badge bg-success-subtle text-success mt-1 float-end">New</span><i
                  class="mdi mdi-cog-outline text-muted fs-lg align-middle me-1"></i> <span
                  class="align-middle">Settings</span></router-link>
              <router-link class="dropdown-item" to="/auth/lockscreen"><i
                  class="mdi mdi-lock text-muted fs-lg align-middle me-1"></i> <span class="align-middle">Lock
                  screen</span></router-link>
              <b-link class="dropdown-item" @click="logout"><i
                  class="mdi mdi-logout text-muted fs-lg align-middle me-1"></i> <span class="align-middle"
                  data-key="t-logout">Logout</span></b-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <b-modal v-model="removeCartModal" hide-footer centered class="zoomIn" body-class="p-md-5" id="removeCartModal">
    <div class="text-center">
      <div class="text-danger">
        <i class="bi bi-trash display-5"></i>
      </div>
      <div class="mt-4">
        <h4>Are you sure ?</h4>
        <p class="text-muted mx-4 mb-0">Are you sure you want to remove this product ?</p>
      </div>
    </div>
    <div class="d-flex gap-2 justify-content-center mt-4 mb-2">
      <b-button type="button" variant="light" class="w-sm" @click="removeCartModal = false">Close</b-button>
      <b-button type="button" variant="danger" class="w-sm" id="remove-cartproduct">Yes, Delete It!</b-button>
    </div>
  </b-modal>

  <!-- removeNotificationModal -->
  <b-modal v-model="removeNotificationModal" id="removeNotificationModal" body-class="p-md-5" hide-footer centered
    class="fade zoomIn" tabindex="-1" aria-hidden="true">
    <div class="text-center">
      <div class="text-danger">
        <i class="bi bi-trash display-4"></i>
      </div>
      <div class="mt-4 fs-base">
        <h4 class="mb-1">Are you sure ?</h4>
        <p class="text-muted mx-4 mb-0">Are you sure you want to remove this Notification ?</p>
      </div>
    </div>
    <div class="d-flex gap-2 justify-content-center mt-4 mb-2">
      <button type="button" class="btn w-sm btn-light" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn w-sm btn-danger" id="delete-notification">Yes, Delete It!</button>
    </div>
  </b-modal>
</template>