import Dashboard from './pages/dashboard';

export default {
  pages: () => [
    {
      label: 'Dashboard',
      path: '',
      component: Dashboard,
    },
    {
      label: 'Home',
      children: [
        { listKey: 'Announcement' },
        { listKey: 'Download' },
        { listKey: 'Event' },
        { listKey: 'Good' },
        { listKey: 'Hero' },
        { listKey: 'Job' },
        { listKey: 'Portal' },
        { listKey: 'QuickLink' },
        { listKey: 'Service' },
        // { label: 'Categories', listKey: 'PostCategory' },
      ],
    },
    {
      label: 'People',
      children: ['User'],
    },
  ],
};
