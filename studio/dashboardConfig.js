export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f83a2269f396cd137dbf3a7',
                  title: 'Sanity Studio',
                  name: 'folio-studio',
                  apiId: '7600702e-62fb-478e-8615-9b700b214d43'
                },
                {
                  buildHookId: '5f83a2261433d5269cf8075d',
                  title: 'Blog Website',
                  name: 'folio-web',
                  apiId: '976c914d-fccd-413e-b4c1-aadb052f8450'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/llev/folio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://folio-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
