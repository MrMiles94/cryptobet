import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children:[
      {
        path: '/',
        name: 'home',
        component: import(/*webpackChunkName:"Home" */ '../views/MainHomeView.vue'),
      },
      {
        path:'/how_to_play/:page',
        name:'how_to_play',
        component:() => import(/*webpackChunkName: "HowToPlay"*/ '../views/HowToPlay.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/mypredictions',
    name: 'mypredictions',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MyPredictions.vue'),
    children:[
      {
        path:'/confirm_slip',
        name:'Confirm_slip',
        component:()=>import(/*webpackChunkName:'confirmSlip' */ '../components/ModalOverlay.vue')
      }
    ]
  },
  {
    path: '/predictionmarket',
    name: 'predictionmarket',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PredictionMarket.vue'),
    children:[
      {
        path:'/slip',
        name: 'betslip',
        component: import(/*webpackChunckName: BetSlip */ '../components/ModalOverlay.vue')
      },
      {
        path:'/predictionmarket:id',
        name: 'betview',
        component: import(/*webpackChunckName: BetSlip */ '../components/ModalOverlay.vue')
      }
    ]
  },
  {
    path: '/wallet',
    name: 'wallet',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ConnectWallet.vue')
  },
  {
    path: '/betslip',
    name: 'betslip',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BetView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
