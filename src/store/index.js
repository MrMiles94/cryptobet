import { createStore } from 'vuex';

export default createStore({
  state: {
    tutorials:{
      videos:[
        {
          id:1,
          title:'Hoodlum on crypto',
          description:'this is a brand new day with a lot of fun to catch',
          url:'temgeporjg'
        },
        {
          id:2,
          title:'Hoodlum on crypto mega deals i the market',
          description:'this is a brand new day with a lot of fun to catch',
          url:'temgeporjg'
        },
        {
          id:3,
          title:'Hoodlum on crypto: robbing hands with the criminals you know',
          description:'this is a brand new day with a lot of fun to catch',
          url:'temgeporjg'
        }
      ],
      articles:[
        {
          id:1,
          title:'Hoodlum on crypto',
          description:'this is a brand new day with a lot of fun to catch',
          url:'temgeporjg'
        },
        {
          id:2,
          title:'Hoodlum on crypto',
          description:'this is a brand new day with a lot of fun to catch',
          url:'temgeporjg'
        },
        {
          id:3,
          title:'Hoodlum on crypto',
          description:'this is a brand new day with a lot of fun to catch',
          url:'temgeporjg'
        }
      ]
    },
    events:[
      {
        id:1,
        category:'sports',
        title:'Man-United will win PSG tonight',
        time:Date.parse("2019-3-24 10:33:30"),
        totalVolume:50000,
        predictionType: "binary",
        choice:''
      },
      {
        id:2,
        category:'natural Event',
        title:'It will rain tomorrow',
        time:Date.parse(2019, 3, 24, 10, 33, 30),
        totalVolume:90000,
        predictionType: "binary",
        choice:''
      },
      {
        id:3,
        category:'Stock',
        title:'Facebook downsizing ticks',
        time:new Date(2019, 3, 24, 10, 33, 30),
        totalVolume:200000,
        predictionType: "multyple choices",
        choice:''
      }
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
});
