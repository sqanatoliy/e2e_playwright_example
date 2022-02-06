// import { request } from '@playwright/test';
// import { FullConfig  } from '@playwright/test';

// async function globalTeardown(config: FullConfig) {
//     const { baseURL } = config.projects[0].use;
//     const requestContext = await request.newContext({ storageState: 'state.json' });
//     const body_response = await requestContext.get(baseURL + 'api/v1/applications/new');
//     const json_response = await body_response.json();
//     const workspace_names = json_response.data.user.organizationIds;
//     for (let i in workspace_names) {
//         const url_workspace = 'api/v1/organizations/' + workspace_names[i];
//         await requestContext.delete(baseURL + url_workspace);
//         console.log('deleted workspace ' + workspace_names[i]);
//       }
    
//     await requestContext.dispose();
// }

// export default globalTeardown;