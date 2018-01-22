import NotFound, { path as notFoundPath } from 'pages/NotFound';
import App from 'frames/App';
import Records from 'services/records/pages/Records';


export default () => ({
  component: App,
  childRoutes: [
    {
      path: '/',
      component: Records,
    },
    {
      path: notFoundPath,
      component: NotFound,
      status: 404,
    },
  ],
});
