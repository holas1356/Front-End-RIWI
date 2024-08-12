import profileLayout from '@/components/profile/profileLayout.vue';
import { createRouter, createWebHistory } from 'vue-router'; 
import TeamLayout from './components/team/teamLayout.vue';
import connectionsLayout from './components/connections/connectionsLayout.vue';

const routes = [
  { path: '/profile', name: 'Profile', component: profileLayout} ,
  { path: '/team', name: 'Team', component:  TeamLayout  },
  { path: '/connections', name: 'Connections', component:  connectionsLayout  } /*
  { path: '/projects', name: 'Projects',  component:  ProjectsLayout   },
  { path: '/connections', name: 'Connections', component:  ConnectionsLayout  } */
];

 const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;  
