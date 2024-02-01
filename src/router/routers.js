import HomeView from '@/views/HomeView.vue'
import ScheduleView from '@/views/ScheduleView.vue'
import RulesView from '@/views/RulesView.vue'
import EventsView from '@/views/EventsView.vue'
import FindScoreView from '@/views/FindScoreView.vue'
import PayView from '@/views/PayView.vue'

const routes = [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/events',
      name: 'events',
      component: EventsView
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: ScheduleView
    },
    {
      path: '/rules',
      name: 'rules',
      component: RulesView
    },
    {
      path: '/score',
      name: 'score',
      component: FindScoreView
    },

    {
      path: '/pay',
      name: 'pay',
      component: PayView
    },

]
export default routes