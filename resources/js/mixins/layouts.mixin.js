export default {
  data() {
    return {
      layout: {
        type: 'vertical',
        layoutWidth: 'fluid',
        sidebarSize: 'lg',
        topbar: 'light',
        mode: 'light',
        position: 'fixed',
        sidebarView: 'default',
        sidebarColor: 'dark',
        sidebarImage: 'none',
        preloader: 'disable',
        visibility: 'show',
        layoutTheme: 'default'
      }
    };
  },
  created() {
    if (!sessionStorage.getItem("layout")) {
      sessionStorage.setItem("layout", JSON.stringify(this.layout));
    }
    const layout = JSON.parse(sessionStorage.getItem("layout")) || {};
    if (layout) {
      this.layout = {
        ...layout,
        sidebar:
          layout?.type === "horizontal"
            ? layout?.topbar || this.layout.topbar
            : layout?.sidebar || this.layout.sidebar
      };
    }
  },
  methods: {
    changeLayout(change) {
      this.layout = {
        ...this.layout,
        ...change
      };
      sessionStorage.setItem("layout", JSON.stringify(this.layout));
    },
    layoutTypes(type) {
      switch (type) {
        case "horizontal":
          document.documentElement.setAttribute("data-layout", "horizontal");
          break;
        case "vertical":
          document.documentElement.setAttribute("data-layout", "vertical");
          break;
        case "twocolumn":
          document.documentElement.setAttribute("data-layout", "twocolumn");
          break;
      }
    },
    layoutThemes(theme) {
      var fontLink = document.getElementById("fontsLink");
      switch (theme) {
        case "default":
          document.documentElement.setAttribute("data-theme", "default");
          document.documentElement.setAttribute("data-sidebar", "dark");
          fontLink.setAttribute("href", "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
          break;
        case "material":
          document.documentElement.setAttribute("data-theme", "material");
          document.documentElement.setAttribute("data-sidebar", "dark");
          fontLink.setAttribute("href", "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap");
          break;
        case "creative":
          document.documentElement.setAttribute("data-theme", "creative");
          document.documentElement.setAttribute("data-sidebar", "dark");
          fontLink.setAttribute("href", "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap");
          break;
        case "minimal":
          document.documentElement.setAttribute("data-theme", "minimal");
          document.documentElement.setAttribute("data-sidebar", "light");
          fontLink.setAttribute("href", "https://fonts.googleapis.com/css2?family=Karla:wght@300;400;500;600;700&display=swap");
          break;
        case "modern":
          document.documentElement.setAttribute("data-theme", "modern");
          document.documentElement.setAttribute("data-sidebar", "dark");
          fontLink.setAttribute("href", "https://fonts.googleapis.com/css2?family=Gantari:wght@300;400;500;600;700&display=swap");
          break;
        case "interaction":
          document.documentElement.setAttribute("data-theme", "interaction");
          document.documentElement.setAttribute("data-sidebar", "dark");
          fontLink.setAttribute("href", "https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700&display=swap");
          break;
      }
    },
    changeMode(mode) {
      switch (mode) {
        case "dark":
          document.documentElement.setAttribute("data-bs-theme", "dark");
          document.documentElement.setAttribute("data-topbar", "dark");
          break;
        default:
          document.documentElement.setAttribute("data-bs-theme", "light");
          document.documentElement.setAttribute("data-topbar", "light");
          break;
      }
    },
    layoutWidth(width) {
      switch (width) {
        case "fluid":
          document.documentElement.setAttribute("data-layout-width", "fluid");
          break;
        case "boxed":
          document.documentElement.setAttribute("data-layout-width", "boxed");
          break;
      }
    },
    layoutPosition(position) {
      switch (position) {
        case "fixed":
          document.documentElement.setAttribute("data-layout-position", "fixed");
          break;
        case "scrollable":
          document.documentElement.setAttribute("data-layout-position", "scrollable");
          break;
      }
    },
    topbarColor(color) {
      switch (color) {
        case "light":
          document.documentElement.setAttribute("data-topbar", "light");
          break;
        case "dark":
          document.documentElement.setAttribute("data-topbar", "dark");
          break;
      }
    },
    sidebarSize(size) {
      switch (size) {
        case "lg":
          document.documentElement.setAttribute("data-sidebar-size", "lg");
          break;
        case "sm":
          document.documentElement.setAttribute("data-sidebar-size", "sm");
          break;
        case "md":
          document.documentElement.setAttribute("data-sidebar-size", "md");
          break;
        case "sm-hover":
          document.documentElement.setAttribute("data-sidebar-size", "sm-hover");
          break;
      }
    },
    sidebarView(view) {
      switch (view) {
        case "detached":
          document.documentElement.setAttribute("data-layout-style", "detached");
          break;
        case "default":
          document.documentElement.setAttribute("data-layout-style", "default");
          break;
      }
    },
    sidebarColor(newVal) {
      switch (newVal) {
        case "dark":
          document.documentElement.setAttribute("data-sidebar", "dark");
          break;
        case "light":
          document.documentElement.setAttribute("data-sidebar", "light");
          break;
        case "gradient":
          document.documentElement.setAttribute("data-sidebar", "gradient");
          break;
        case "gradient-2":
          document.documentElement.setAttribute("data-sidebar", "gradient-2");
          break;
        case "gradient-3":
          document.documentElement.setAttribute("data-sidebar", "gradient-3");
          break;
        case "gradient-4":
          document.documentElement.setAttribute("data-sidebar", "gradient-4");
          break;
      }
    },
    sidebarImage(img) {
      switch (img) {
        case "img-1":
          document.documentElement.setAttribute("data-sidebar-image", "img-1");
          break;
        case "img-2":
          document.documentElement.setAttribute("data-sidebar-image", "img-2");
          break;
        case "img-3":
          document.documentElement.setAttribute("data-sidebar-image", "img-3");
          break;
        case "img-4":
          document.documentElement.setAttribute("data-sidebar-image", "img-4");
          break;
        case "none":
          document.documentElement.setAttribute("data-sidebar-image", "none");
          break;
      }
    },
    preloader(val) {
      sessionStorage.setItem('data-preloader', val);
    }
  },
};
