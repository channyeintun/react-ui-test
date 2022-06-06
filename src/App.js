import { useRoutes } from 'react-router-dom';
import { Team, Layout } from './views';

function App() {
      const routes = [
            {
                  path: "/",
                  element: <Layout />,
                  children: [
                        {
                              index: true,
                              element: <h1 style={{ margin: 'auto' }}>Content of index page</h1>
                        },
                        {
                              path: "teams",
                              element: <Team />
                        },
                        {
                              path: "*",
                              element: <h1 style={{ margin: 'auto' }}>404 Not Found</h1>
                        }
                  ]
            },
      ];

      const elements = useRoutes(routes);
      return <>
            {elements}
      </>;
}

export default App;