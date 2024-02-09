import HomeView from '@/views/HomeView.vue'
import ScheduleView from '@/views/ScheduleView.vue'
import PlaceView from '@/views/PlaceView.vue'
import RulesView from '@/views/RulesView.vue'
import EventsView from '@/views/EventsView.vue'
import FindScoreView from '@/views/FindScoreView.vue'
import RatingView from '@/views/RatingView.vue'
import PayView from '@/views/PayView.vue'

import NotFoundView from '@/views/errors/NotFoundView.vue'

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
      path: '/place',
      name: 'place',
      component: PlaceView
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
      path: '/rating',
      name: 'rating',
      component: RatingView
    },
    {
      path: '/pay',
      name: 'pay',
      component: PayView
    },

    {
      path: '/:notFound(.*)',
      name: 'error.404',
      component: NotFoundView
    }

]
export default routes