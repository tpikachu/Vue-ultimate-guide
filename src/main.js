import Vue from 'vue'
import VueMaterial from 'vue-material'
Vue.use(VueMaterial)
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

window.jQuery = require('jquery/dist/jquery.slim');
require('@fancyapps/fancybox/dist/jquery.fancybox');
import '@fancyapps/fancybox/dist/jquery.fancybox.min.css';

import AccessToChapter from './components/Access-to-chapter.vue'
Vue.component('access-to-chapter', AccessToChapter)
import GetTheFullGuideDialog from './components/Get-the-full-guide-dialog.vue'
Vue.component('get-the-full-guide-dialog', GetTheFullGuideDialog);

import BudgetPlanChart from './components/charts/BudgetPlanChart.vue'
Vue.component('budget-plan-chart', BudgetPlanChart)
import TypicalRestaurantExpensesChart from './components/charts/TypicalRestaurantExpensesChart.vue'
Vue.component('typical-restaurant-expenses-chart', TypicalRestaurantExpensesChart)
import AnnualEmployeeTurnoverRatesChart from './components/charts/AnnualEmployeeTurnoverRatesChart.vue'
Vue.component('annual-employee-turnover-rates-chart', AnnualEmployeeTurnoverRatesChart)
import AverageChefSalariesByPositionChart from './components/charts/AverageChefSalariesByPositionChart.vue'
Vue.component('average-chef-salaries-by-position-chart', AverageChefSalariesByPositionChart)
import TopReasonsEmployeesQuitChart from './components/charts/TopReasonsEmployeesQuitChart.vue'
Vue.component('top-reasons-employees-quit-chart', TopReasonsEmployeesQuitChart)
import ReasonsForStoppingVisitingRestaurantsChart from './components/charts/ReasonsForStoppingVisitingRestaurantsChart.vue'
Vue.component('reasons-for-stopping-visiting-restaurants-chart', ReasonsForStoppingVisitingRestaurantsChart)
import TotalRestaurantOperatingCostsChart from './components/charts/TotalRestaurantOperatingCostsChart.vue'
Vue.component('total-restaurant-operating-costs-chart', TotalRestaurantOperatingCostsChart)
import RestaurantPrimeCostChart from './components/charts/RestaurantPrimeCostChart.vue'
Vue.component('restaurant-prime-cost-chart', RestaurantPrimeCostChart)
import AverageRestaurantOperatingCostsChart from './components/charts/AverageRestaurantOperatingCostsChart.vue'
Vue.component('average-restaurant-operating-costs-chart', AverageRestaurantOperatingCostsChart)
import RestaurantEnergyUseChart from './components/charts/RestaurantEnergyUseChart.vue'
Vue.component('restaurant-energy-use-chart', RestaurantEnergyUseChart)
import RestaurantWasteProfileChart from './components/charts/RestaurantWasteProfileChart.vue'
Vue.component('restaurant-waste-profile-chart', RestaurantWasteProfileChart)

import ExtremeAversionFigure from './components/figures/ExtremeAversionFigure.vue'
Vue.component('extreme-aversion-figure', ExtremeAversionFigure)
import HowToOptimizeSeatingCapacityFigure from './components/figures/HowToOptimizeSeatingCapacityFigure.vue'
Vue.component('how-to-optimize-seating-capacity-figure', HowToOptimizeSeatingCapacityFigure)

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;

// router.afterEach((to) => {
//   document.title = to.meta.title + ' ' + to.meta.description;
//   document.querySelector('meta[name="description"]').content = to.meta.description;
//   document.querySelector('meta[name="keywords"]').content = to.meta.keywords;
// })

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  const metaDescription = to.meta.metaTags.filter(item => item.name == 'description')[0].content;

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) document.title = nearestWithTitle.meta.title + ' ' + metaDescription;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create, so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  // Add the meta tags to the document head.
  .forEach(tag => document.head.appendChild(tag));

  next();
  window.onUrlChange();
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
