<template>
  <md-app md-mode="fixed" :class="{ 'md-app_is_initialized': isInitializedApp }">
    <!-- Toolbar -->
    <md-app-toolbar class="md-primary">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start show-on-small">
          <md-button class="md-icon-button" @click="isActiveDrawer = !isActiveDrawer">
            <md-icon>menu</md-icon>
          </md-button>
        </div>
        <span class="md-title">The Ultimate Guide to <strong>Running a Restaurant</strong></span>
        <div class="md-toolbar-section-end">
          <md-button 
            @click="toggleDialog()"
            v-if="isLargeScreen" 
            class="md-raised md-default md-button__get-the-full-guide">
            <span>Get the full guide</span>
          </md-button>
          <md-button 
            @click="toggleDialog()"
            class="md-icon-button" 
            v-if="!isLargeScreen">
            <md-icon>save_alt</md-icon>
          </md-button>
          <md-button v-if="supportPrint()" @click="printPage()" class="md-icon-button">
            <md-icon>print</md-icon>
          </md-button>
          <md-button to="/about" class="md-icon-button">
            <md-icon>help_outline</md-icon>
          </md-button>
        </div>
      </div>
    </md-app-toolbar>
    <!-- /Toolbar -->

    <!-- Drawer -->
    <md-app-drawer md-permanent="full" :md-active.sync="isActiveDrawer">
      <a target="_blank" href="https://www.chefhero.com/" class="app-logo">
        <img :src="require('./assets/logo.svg')" alt="ChefHero" class="app-logo__image">
      </a>
      <md-divider></md-divider>
      <md-steppers :md-active-step="$route.name" md-vertical id="app-navigation">
        <md-step :id="route.name"
                 :md-label="route.meta.title" 
                 :md-description="route.meta.metaTags[0].content"
                 :to="route.path"
                 :md-done="doneRoutes[route.name]"
                 v-for="route in $router.options.routes"
                 v-if="route.meta.needToShowInNavigation"
                 :key="route.id"></md-step>
      </md-steppers>
      <md-divider></md-divider>
      <div align="center">
        <md-button target="_blank" href="https://www.chefhero.com/" class="md-primary">Go to Website</md-button>
      </div>
    </md-app-drawer>
    <!-- /Drawer --> 

    <md-app-content>
      <md-content id="app-content">
        <router-view></router-view>
      </md-content>
      
      <div id="app-content-actions" v-if="$route.meta.needToShowInNavigation">
        <md-button class="md-raised md-default button__go-back" 
                    @click="goBack()" 
                    v-if="$route.name != 'starter'">Back</md-button>
        <md-button class="md-raised md-primary button__go-next" 
                   @click="goNext()" 
                   v-if="$route.name != 'about'">Next</md-button>
      </div>
      <!-- Dialog -->
      <get-the-full-guide-dialog></get-the-full-guide-dialog>
      <!-- Dialog -->
    </md-app-content>
  </md-app>
</template>

<script>
export default {
  data() {
    return {
      isLargeScreen: true,
      isInitializedApp: false,
      isActiveDrawer: false,
      doneRoutes: {}
    } 
  },
  created() {
    setTimeout(() => this.isInitializedApp = true, 1);
    this._isLargeScreen();
    setTimeout(this.adaptDataTables, 1);
    window.addEventListener('resize', this._isLargeScreen);
    window.toggleDialog = this.toggleDialog;
  },
  watch: {
    $route () {
      this.isActiveDrawer = false;
      setTimeout(this.adaptDataTables, 1);
    }
  },
  methods: {
    getRouteIndex() {
      return this.$router.options.routes.findIndex(route => route.name == this.$route.name);
    },
    _isLargeScreen() {
      this.isLargeScreen = window.outerWidth > 992;
    },
    adaptDataTables(contentElementSelector) {
      const contentElement = contentElementSelector ? document.querySelector(contentElementSelector) : document;
      const tableElements = contentElement.querySelectorAll('table');
      tableElements.forEach(tableElement => {
          const headerElements = tableElement.querySelectorAll('thead > tr > *');
          const rowElements = tableElement.querySelectorAll('tbody > tr');
          rowElements.forEach(rowElement => {
              const cellElements = rowElement.querySelectorAll('td');
              cellElements.forEach((cellElement, index) => {
                const textContent = headerElements[index].textContent;
                if (textContent) cellElement.setAttribute('data-title', textContent)
              });
          });
      });
    },
    supportPrint() {
      return !!window.print;
    },
    printPage() {
      window.print();
    },
    goNext() {
      const routes = this.$router.options.routes;
      let routeIndex = this.getRouteIndex();
      if (routeIndex < routes.length) {
        const doneRoute = routes[routeIndex];
        this.doneRoutes[doneRoute.name] = true;
        routeIndex++;
        const navigateToRoute = routes[routeIndex];
        this.$router.push(navigateToRoute);
      }
    },
    goBack() {
      const routes = this.$router.options.routes;
      let routeIndex = this.getRouteIndex();
      if (routeIndex > 0) {
        routeIndex--;
        this.$router.push(routes[routeIndex]);
      }
    },
    toggleDialog() {
      window.toggleDialog();
    }
  }
}
</script>


<style lang="scss">
@import "assets/scss/main.scss";
</style>
