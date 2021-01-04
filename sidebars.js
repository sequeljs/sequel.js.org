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
          items: ['ast/api/README', 'ast/api/modules'],
        },
        {
          type: 'category',
          label: '@sequeljs/omi',
          items: ['omi/api/README', 'omi/api/modules'],
        },
        {
          type: 'category',
          label: '@sequeljs/orm',
          items: ['orm/api/README', 'orm/api/modules'],
        },
      ],
    },
  ],
}
