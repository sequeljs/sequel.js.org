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
          items: require('./docs/ast/sidebar.js'),
        },
        {
          type: 'category',
          label: '@sequeljs/omi',
          items: require('./docs/omi/sidebar.js'),
        },
        {
          type: 'category',
          label: '@sequeljs/orm',
          items: require('./docs/orm/sidebar.js'),
        },
      ],
    },
  ],
}
