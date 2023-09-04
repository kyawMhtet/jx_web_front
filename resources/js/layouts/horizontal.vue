<script>
import NavBar from "../components/nav-bar.vue";
import RightBar from "../components/right-bar.vue";
import FooterComponents from "../components/footer.vue";
import horMenu from "./hor-menu"
import { ref } from 'vue';
import logoSm from "../../images/logo-sm.png";
import logoDark from "../../images/logo-dark.png";
import logoLight from "../../images/logo-light.png";

export default {
  data() {
    return {
      logoSm,
      logoLight,
      logoDark,
      newMenuItems: [],
      splitMenuItems: [],
      menuItems: horMenu
    };
  },
  watch: {
    $route: {
      handler: "onRoutechange",
      immediate: true,
      deep: true,
    },
  },
  methods: {
    onRoutechange(ele) {
      this.initActiveMenu(ele.path);
    },

    setupHorizontalMenu() {
      const navData = horMenu;
      const isMoreMenu = ref(false);

      // Create the "More" menu item and add the hidden items to its subItems
      const navbarNav = document.getElementById('navbar-nav');
      const fullWidthOfMenu = navbarNav?.parentElement?.clientWidth;

      const menuWidth = fullWidthOfMenu || 0;
      let totalItemsWidth = 0;
      let visibleItems = [];
      let hiddenItems = [];

      for (let i = 0; i < navData.length; i++) {
        const itemWidth = navbarNav?.children[i]?.offsetWidth;
        totalItemsWidth += itemWidth;
        if (totalItemsWidth + 150 <= menuWidth) {
          visibleItems.push(navData[i]);
        } else {
          hiddenItems.push(navData[i]);
        }
      }
      const moreMenuItem = {
        id: 'more',
        label: 'More',
        icon: 'ri-briefcase-2-line',
        subItems: hiddenItems,
        link: 'sidebarMore',
        stateVariables: isMoreMenu.value,
        click: (e) => {
          e.preventDefault();
          isMoreMenu.value = !isMoreMenu.value;
        },
      };

      const updatedMenuItems = [...visibleItems, moreMenuItem];
      this.menuItems = updatedMenuItems;

    },

    initActiveMenu(ele) {
      setTimeout(() => {
        if (document.querySelector("#navbar-nav")) {
          let a = document.querySelector("#navbar-nav").querySelector('[href="' + ele + '"]');
          if (a) {
            a.classList.add("active");
            let parentCollapseDiv = a.closest(".collapse.menu-dropdown");
            if (parentCollapseDiv) {
              parentCollapseDiv.classList.add("show");
              parentCollapseDiv.parentElement.children[0].classList.add("active");
              parentCollapseDiv.parentElement.children[0].setAttribute("aria-expanded", "true");
              if (parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown")) {
                parentCollapseDiv.parentElement.closest(".collapse").classList.add("show");
                if (parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling)
                  parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling.classList.add("active");
              }
            }
          }
        }
      }, 1000);
    },

    menuItem(e) {
      // get the dropdown menu element
      let dropdownMenu = e.target;
      const subMenus = (dropdownMenu.nextElementSibling) ? dropdownMenu.nextElementSibling : dropdownMenu.parentElement.nextElementSibling;
      if (dropdownMenu && subMenus) {
        // get the position and dimensions of the dropdown menu
        let dropdownOffset = subMenus.getBoundingClientRect();
        let dropdownWidth = subMenus.offsetWidth;
        let dropdownHeight = subMenus.offsetHeight;

        // get the dimensions of the screen
        let screenWidth = window.innerWidth;
        let screenHeight = window.innerHeight;

        // calculate the maximum x and y coordinates of the dropdown menu
        let maxDropdownX = dropdownOffset.left + dropdownWidth;
        let maxDropdownY = dropdownOffset.top + dropdownHeight;

        // check if the dropdown menu goes outside the screen
        let isDropdownOffScreen = (maxDropdownX > screenWidth) || (maxDropdownY > screenHeight);
        if (isDropdownOffScreen) {
          if (subMenus.classList.contains("menu-dropdown")) {
            subMenus.classList.add("dropdown-custom-right");
          }
        }
      }
    },

    menuPosSetOnClicknHover() {
      const isElement = document.querySelectorAll("#navbar-nav > li.nav-item");
      Array.from(isElement).forEach(item => {
        item.addEventListener("click", this.menuItem, false);
        item.addEventListener("mouseover", this.menuItem, false);
      });
    },
  },
  mounted() {
    window.addEventListener('resize', this.setupHorizontalMenu);
    this.setupHorizontalMenu();
    this.menuPosSetOnClicknHover()
  },
  components: {
    NavBar,
    RightBar,
    FooterComponents,
  },
};
</script>

<template>
  <div>
    <div id="layout-wrapper">
      <NavBar />
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
          <b-button type="button" size="sm" variant="white" class="p-0 fs-3xl header-item float-end btn-vertical-sm-hover"
            id="vertical-hover">
            <i class="ri-record-circle-line"></i>
          </b-button>
        </div>
        <div id="scrollbar">
          <b-container fluid>
            <ul class="navbar-nav h-100" id="navbar-nav">
              <template v-for="(item, index) in menuItems" :key="index">

                <!-- for title tag -->
                <li class="menu-title" v-if="item.isHeader">
                  <span :data-key="item.label">{{ $t(item.label) }}</span>
                </li>

                <!-- for without sub-items -->
                <li class="nav-item" v-if="!item.isHeader && !item.subItems">
                  <router-link :to="item.link" class="nav-link menu-link"> <i :class="item.icon"></i> <span
                      :data-key="item.label">{{ $t(item.label) }}</span>
                  </router-link>
                </li>

                <!-- for subitems -->
                <li class="nav-item" v-if="!item.isHeader && item.subItems">
                  <b-link class="nav-link menu-link collapsed" :href="'#' + item.link" data-bs-toggle="collapse"
                    role="button" aria-expanded="false" :aria-controls="item.link">
                    <i :class="item.icon" v-if="item.icon"></i> <span :data-key="item.label">{{ $t(item.label) }}</span>
                  </b-link>
                  <div class="collapse menu-dropdown" :id="item.link" v-if="item.subItems">
                    <ul class="nav nav-sm flex-column">
                      <li class="nav-item" v-for="(subItem, index) in item.subItems" :key="index">

                        <!-- for without subitems -->
                        <router-link class="nav-link" :to="subItem.link" v-if="!subItem.subItems && !subItem.isHeader">
                          <i v-if="subItem.icon" :class="subItem.icon"></i>
                          <span :data-key="subItem.label">{{ $t(subItem.label) }}</span>
                        </router-link>

                        <!-- for with subitems -->
                        <b-link class="nav-link menu-link collapsed" :href="'#' + subItem.link" data-bs-toggle="collapse"
                          role="button" aria-expanded="false" :aria-controls="subItem.link" v-if="subItem.subItems">
                          <i :class="subItem.icon" v-if="subItem.icon"></i> <span :data-key="subItem.label">{{
                            $t(subItem.label) }}</span>
                        </b-link>
                        <div
                          :class="subItem.id === 'bootstrapui' ? 'collapse menu-dropdown mega-dropdown-menu dropdown-custom-right' : 'collapse menu-dropdown'"
                          :id="subItem.link" v-if="subItem.subItems">

                          <!-- for bootstrap ui -->
                          <b-row v-if="subItem.id === 'bootstrapui'">
                            <b-col lg="4" v-for="(bootItem, index) in subItem.subItems" :key="index">
                              <ul class="nav nav-sm flex-column">
                                <li class="nav-item">
                                  <router-link :to="bootItem.link" class="nav-link" :data-key="bootItem.label"> {{
                                    $t(bootItem.label) }} </router-link>
                                </li>
                              </ul>
                            </b-col>
                          </b-row>

                          <!-- for other all ui -->
                          <ul class="nav nav-sm flex-column" v-if="subItem.id !== 'bootstrapui'">
                            <li class="nav-item" v-for="(childItem, index) in subItem.subItems" :key="index">

                              <!-- for whitout child items -->
                              <router-link class="nav-link" :to="childItem.link" v-if="!childItem.childItems">
                                <span>{{ $t(childItem.label) }}</span>
                              </router-link>

                              <!-- for with childitems -->
                              <b-link :href="'#' + childItem.link" class="nav-link collapsed" data-bs-toggle="collapse"
                                role="button" aria-expanded="false" :aria-controls="childItem.link"
                                :data-key="childItem.label" v-if="childItem.childItems">{{ $t(childItem.label) }}</b-link>
                              <div class="collapse menu-dropdown" :id="childItem.link" v-if="childItem.childItems">
                                <ul class="nav nav-sm flex-column">
                                  <li class="nav-item" v-for="(subItem, index) in childItem.childItems" :key="index">

                                    <!-- for without subitems -->
                                    <router-link class="nav-link" :to="subItem.link" v-if="!subItem.childItems">
                                      <span>{{ $t(subItem.label) }}</span>
                                    </router-link>

                                    <!-- for with subitems -->
                                    <b-link :href="'#' + subItem.link" class="nav-link collapsed"
                                      data-bs-toggle="collapse" role="button" aria-expanded="false"
                                      :aria-controls="subItem.link" :data-key="subItem.label" v-if="subItem.childItems">{{
                                        $t(subItem.label) }}</b-link>
                                    <div class="collapse menu-dropdown" :id="subItem.link" v-if="subItem.childItems">
                                      <ul class="nav nav-sm flex-column">
                                        <li class="nav-item" v-for="(lastMenu, index) in subItem.childItems" :key="index">

                                          <!-- for last menu  -->
                                          <router-link :to="lastMenu.link" class="nav-link">{{ $t(lastMenu.label)
                                          }}</router-link>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
              </template>
            </ul>
          </b-container>
          <!-- Sidebar -->
        </div>
        <!-- Left Sidebar End -->
        <!-- Vertical Overlay-->
        <div class="vertical-overlay"></div>
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
  </div>
</template>