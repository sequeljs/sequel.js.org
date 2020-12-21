module.exports = {
  docs: [
    'index',
    {
      type: 'category',
      label: 'Packages',
      items: [
        {
          type: 'category',
          label: '@sequeljs/ast',
          items: ['ast/api/index', 'ast/api/globals'],
        },
        {
          type: 'category',
          label: '@sequeljs/omi',
          items: ['omi/api/index', 'omi/api/globals'],
        },
        {
          type: 'category',
          label: '@sequeljs/orm',
          items: ['orm/api/index', 'orm/api/globals'],
        },
      ],
    },
  ],
}
