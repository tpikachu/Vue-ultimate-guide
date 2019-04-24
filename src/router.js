import Vue from 'vue'
import Router from 'vue-router'

import Title from './views/Title.vue';
import Introduction from './views/Introduction.vue';
import Chapter1 from './views/Chapter-1.vue';
import Chapter2 from './views/Chapter-2.vue';
import Chapter3 from './views/Chapter-3.vue';
import Chapter4 from './views/Chapter-4.vue';
import Chapter5 from './views/Chapter-5.vue';
import Chapter6 from './views/Chapter-6.vue';
import Chapter7 from './views/Chapter-7.vue';
import Chapter8 from './views/Chapter-8.vue';
import Chapter9 from './views/Chapter-9.vue';
import Chapter10 from './views/Chapter-10.vue';
//import Chapter11 from './views/Chapter-11.vue';
import Conclusion from './views/Conclusion.vue';
import About from './views/About.vue';
import NotFound from './views/NotFound.vue';

const pathPrefix = '';

Vue.use(Router)
export default new Router({
  mode: process.env.NODE_ENV === 'production' ? 'hash' : 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'title',
      meta: {
        title: 'Start',
        metaTags: [
          {
            name: 'description',
            content: ''
          },
          {
            name: 'keywords',
            content: ''
          }
        ],
        needToShowInNavigation: true
      },
      component: Title
    },
    {
      path: pathPrefix + '/introduction',
      name: 'introduction',
      meta: {
        title: 'Introduction',
        metaTags: [
          {
            name: 'description',
            content: ''
          },
          {
            name: 'keywords',
            content: ''
          }
        ],
        needToShowInNavigation: true
      },
      component: Introduction
    },
    {
      path: pathPrefix + '/chapter/1',
      name: 'chapter-1',
      meta: {
        title: 'Restaurant Budgeting:',
        metaTags: [
          {
            name: 'description',
            content: 'Getting your Numbers Right'
          },
          {
            name: 'keywords',
            content: ''
          },
          {
            name: 'author',
            content: 'Chris Arnett'
          }
        ],
        needToShowInNavigation: true
      },
      component: Chapter1
    },
    {
      path: pathPrefix + '/chapter/2',
      name: 'chapter-2',
      meta: {
        title: 'Location, Space, & Personality:',
        metaTags: [
          {
            name: 'description',
            content: 'Setting the Scene for a Winning Restaurant'
          },
          {
            name: 'keywords',
            content: ''
          },
          {
            name: 'author',
            content: 'Sean Hurley'
          }
        ],
        needToShowInNavigation: true
      },
      component: Chapter2
    },
    {
      path: pathPrefix + '/chapter/3',
      name: 'chapter-3',
      meta: {
        title: 'Restaurant Branding:',
        metaTags: [
          {
            name: 'description',
            content: 'Concept, Brand Identity, Naming, and Logos'
          },
          {
            name: 'keywords',
            content: ''
          },
          {
            name: 'author',
            content: 'Chris Arnett'
          }
        ],
        needToShowInNavigation: true
      },
      component: Chapter3
    },
    {
      path: pathPrefix + '/chapter/4',
      name: 'chapter-4',
      meta: {
        title: '5 Steps to Kickstart',
        metaTags: [
          {
            name: 'description',
            content: 'Your New Restaurant Business'
          },
          {
            name: 'keywords',
            content: ''
          },
          {
            name: 'author',
            content: 'Sean Hurley'
          }
        ],
        needToShowInNavigation: true
      },
      component: Chapter4
    },
    {
      path: pathPrefix + '/chapter/5',
      name: 'chapter-5',
      meta: {
        title: 'Build the Best Team:',
        metaTags: [
          {
            name: 'description',
            content: 'Finding and Managing Your Restaurant’s A-Team'
          },
          {
            name: 'keywords',
            content: 'Sean Hurley'
          },
          {
            name: 'author',
            content: ''
          }
        ],
        needToShowInNavigation: true
      },
      component: Chapter5
    },
    {
      path: pathPrefix + '/chapter/6',
      name: 'chapter-6',
      meta: {
        title: 'Taking Restaurant Customer Service to the Next Level:',
        metaTags: [
          {
            name: 'description',
            content: 'Strategies and Results'
          },
          {
            name: 'keywords',
            content: ''
          },
          {
            name: 'author',
            content: 'Ben Lucier'
          }
        ],
        needToShowInNavigation: true
      },
      component: Chapter6
    },
    {
      path: pathPrefix + '/chapter/7',
      name: 'chapter-7',
      meta: {
        title: 'Menu Hacking:',
        metaTags: [
          {
            name: 'description',
            content: 'Cost Per Meal & Smart Design to Maximize Profits'
          },
          {
            name: 'keywords',
            content: ''
          },
          {
            name: 'author',
            content: 'Chris Arnett'
          }
        ],
        needToShowInNavigation: true
      },
      component: Chapter7
    },
    {
      path: pathPrefix + '/chapter/8',
      name: 'chapter-8',
      meta: {
        title: 'The 19 Tech Tools You Need to Run',
        metaTags: [
          {
            name: 'description',
            content: 'a Successful Restaurant'
          },
          {
            name: 'keywords',
            content: ''
          },
          {
            name: 'author',
            content: 'Sean Hurley'
          }
        ],
        needToShowInNavigation: true
      },
      component: Chapter8
    },
    {
      path: pathPrefix + '/chapter/9',
      name: 'chapter-9',
      meta: {
        title: 'Greener Tomorrow:',
        metaTags: [
          {
            name: 'description',
            content: 'A Step-By-Step Guide to Running an Eco-Conscious Restaurant'
          },
          {
            name: 'keywords',
            content: ''
          },
          {
            name: 'author',
            content: 'Hiba Amin'
          }
        ],
        needToShowInNavigation: true
      },
      component: Chapter9
    },
    {
      path: pathPrefix + '/chapter/10',
      name: 'chapter-10',
      meta: {
        title: 'A Starter Guide to Instagram',
        metaTags: [
          {
            name: 'description',
            content: 'Marketing for Restaurateurs'
          },
          {
            name: 'keywords',
            content: ''
          },
          {
            name: 'author',
            content: 'Hiba Amin'
          }
        ],
        needToShowInNavigation: true
      },
      component: Chapter10
    },
    // {
    //   path: pathPrefix + '/chapter/11',
    //   name: 'chapter-11',
    //   meta: {
    //     title: '14 Essential Restaurant Metrics Every Owner',
    //     metaTags: [
    //       {
    //         name: 'description',
    //         content: 'Should Measure and Track'
    //       },
    //       {
    //         name: 'keywords',
    //         content: ''
    //       },
    //       {
    //         name: 'author',
    //         content: 'Chris Arnett'
    //       }
    //     ],
    //     needToShowInNavigation: true
    //   },
    //   component: Chapter11
    // },
    {
      path: pathPrefix + '/conclusion',
      name: 'conclusion',
      meta: {
        title: 'Conclusion',
        metaTags: [
          {
            name: 'description',
            content: ''
          },
          {
            name: 'keywords',
            content: ''
          }
        ],
        needToShowInNavigation: true
      },
      component: Conclusion
    },
    {
      path: pathPrefix + '/about',
      name: 'about',
      meta: {
        title: 'About ChefHero',
        metaTags: [
          {
            name: 'description',
            content: ''
          },
          {
            name: 'keywords',
            content: ''
          }
        ],
        needToShowInNavigation: true
      },
      component: About
    },
    { 
      path: pathPrefix + '/404',
      name: 'not-found',
      meta: {
        title: 'Not Found',
        metaTags: [
          {
            name: 'description',
            content: ''
          },
          {
            name: 'keywords',
            content: ''
          }
        ],
      },
      component: NotFound
    },  
    { 
      path: '*',
      meta: {
        title: 'Not Found'
      },
      redirect: '/404' 
    },  
  ],
  scrollBehavior() {
    document.querySelector('.md-app-scroller').scrollTop = 0;
  }
})