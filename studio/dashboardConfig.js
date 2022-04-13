export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '625495111a624328b682e11d',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-8ieg27n5',
                  apiId: '183aa567-afe8-4c84-8ec8-f7bcfe03c172'
                },
                {
                  buildHookId: '62549511e5c78625a31bacd5',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-xc89ao39',
                  apiId: '6cfb2df2-9219-40e4-9afc-5caf16402795'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ChewyJetpack/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-xc89ao39.netlify.app', category: 'apps'}
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
