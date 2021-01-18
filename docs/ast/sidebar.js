module.exports = [
  'ast/api/index',
  'ast/api/modules',
  {
    type: 'category',
    label: 'Namespaces',
    items: [
      'ast/api/modules/attributes',
      'ast/api/modules/collectors',
      'ast/api/modules/errors',
      'ast/api/modules/interfaces',
      'ast/api/modules/managers',
      'ast/api/modules/nodes',
      'ast/api/modules/visitors',
    ],
  },
  {
    type: 'category',
    label: 'Classes',
    items: [
      'ast/api/classes/attributes.attribute',
      'ast/api/classes/attributes.boolean',
      'ast/api/classes/attributes.decimal',
      'ast/api/classes/attributes.float',
      'ast/api/classes/attributes.integer',
      'ast/api/classes/attributes.string',
      'ast/api/classes/attributes.time',
      'ast/api/classes/attributes.undefined',
      'ast/api/classes/collectors.bind',
      'ast/api/classes/collectors.composite',
      'ast/api/classes/collectors.sqlstring',
      'ast/api/classes/collectors.substitutebinds',
      'ast/api/classes/errors.emptyjoinerror',
      'ast/api/classes/errors.enginenotseterror',
      'ast/api/classes/errors.sequelasterror',
      'ast/api/classes/errors.visitorerror',
      'ast/api/classes/errors.visitornotimplementederror',
      'ast/api/classes/errors.visitornotseterror',
      'ast/api/classes/errors.visitornotsupportederror',
      'ast/api/classes/managers.deletemanager',
      'ast/api/classes/managers.insertmanager',
      'ast/api/classes/managers.selectmanager',
      'ast/api/classes/managers.treemanager',
      'ast/api/classes/managers.updatemanager',
      'ast/api/classes/nodes.addition',
      'ast/api/classes/nodes.and',
      'ast/api/classes/nodes.as',
      'ast/api/classes/nodes.ascending',
      'ast/api/classes/nodes.assignment',
      'ast/api/classes/nodes.avg',
      'ast/api/classes/nodes.between',
      'ast/api/classes/nodes.bin',
      'ast/api/classes/nodes.binary',
      'ast/api/classes/nodes.bindparam',
      'ast/api/classes/nodes.bitwiseand',
      'ast/api/classes/nodes.bitwisenot',
      'ast/api/classes/nodes.bitwiseor',
      'ast/api/classes/nodes.bitwiseshiftleft',
      'ast/api/classes/nodes.bitwiseshiftright',
      'ast/api/classes/nodes.bitwisexor',
      'ast/api/classes/nodes.case',
      'ast/api/classes/nodes.casted',
      'ast/api/classes/nodes.comment',
      'ast/api/classes/nodes.concat',
      'ast/api/classes/nodes.count',
      'ast/api/classes/nodes.cube',
      'ast/api/classes/nodes.currentrow',
      'ast/api/classes/nodes.deletestatement',
      'ast/api/classes/nodes.descending',
      'ast/api/classes/nodes.distinct',
      'ast/api/classes/nodes.distincton',
      'ast/api/classes/nodes.division',
      'ast/api/classes/nodes.doesnotmatch',
      'ast/api/classes/nodes.else',
      'ast/api/classes/nodes.equality',
      'ast/api/classes/nodes.except',
      'ast/api/classes/nodes.exists',
      'ast/api/classes/nodes.extract',
      'ast/api/classes/nodes.false',
      'ast/api/classes/nodes.following',
      'ast/api/classes/nodes.fullouterjoin',
      'ast/api/classes/nodes.greaterthan',
      'ast/api/classes/nodes.greaterthanorequal',
      'ast/api/classes/nodes.group',
      'ast/api/classes/nodes.grouping',
      'ast/api/classes/nodes.groupingelement',
      'ast/api/classes/nodes.groupingset',
      'ast/api/classes/nodes.in',
      'ast/api/classes/nodes.infixoperation',
      'ast/api/classes/nodes.innerjoin',
      'ast/api/classes/nodes.insertstatement',
      'ast/api/classes/nodes.intersect',
      'ast/api/classes/nodes.isdistinctfrom',
      'ast/api/classes/nodes.isnotdistinctfrom',
      'ast/api/classes/nodes.join',
      'ast/api/classes/nodes.joinsource',
      'ast/api/classes/nodes.lateral',
      'ast/api/classes/nodes.lessthan',
      'ast/api/classes/nodes.lessthanorequal',
      'ast/api/classes/nodes.limit',
      'ast/api/classes/nodes.lock',
      'ast/api/classes/nodes.matches',
      'ast/api/classes/nodes.max',
      'ast/api/classes/nodes.min',
      'ast/api/classes/nodes.multiplication',
      'ast/api/classes/nodes.namedsqlfunction',
      'ast/api/classes/nodes.namedwindow',
      'ast/api/classes/nodes.node',
      'ast/api/classes/nodes.nodeexpression',
      'ast/api/classes/nodes.not',
      'ast/api/classes/nodes.notequal',
      'ast/api/classes/nodes.notin',
      'ast/api/classes/nodes.notregexp',
      'ast/api/classes/nodes.offset',
      'ast/api/classes/nodes.on',
      'ast/api/classes/nodes.optimizerhints',
      'ast/api/classes/nodes.or',
      'ast/api/classes/nodes.ordering',
      'ast/api/classes/nodes.outerjoin',
      'ast/api/classes/nodes.over',
      'ast/api/classes/nodes.preceding',
      'ast/api/classes/nodes.quoted',
      'ast/api/classes/nodes.range',
      'ast/api/classes/nodes.regexp',
      'ast/api/classes/nodes.rightouterjoin',
      'ast/api/classes/nodes.rollup',
      'ast/api/classes/nodes.rows',
      'ast/api/classes/nodes.sqlfunction',
      'ast/api/classes/nodes.sqlliteral',
      'ast/api/classes/nodes.selectcore',
      'ast/api/classes/nodes.selectstatement',
      'ast/api/classes/nodes.stringjoin',
      'ast/api/classes/nodes.subtraction',
      'ast/api/classes/nodes.sum',
      'ast/api/classes/nodes.tablealias',
      'ast/api/classes/nodes.true',
      'ast/api/classes/nodes.unary',
      'ast/api/classes/nodes.unaryoperation',
      'ast/api/classes/nodes.union',
      'ast/api/classes/nodes.unionall',
      'ast/api/classes/nodes.unqualifiedcolumn',
      'ast/api/classes/nodes.updatestatement',
      'ast/api/classes/nodes.valueslist',
      'ast/api/classes/nodes.when',
      'ast/api/classes/nodes.window',
      'ast/api/classes/nodes.with',
      'ast/api/classes/nodes.withrecursive',
      'ast/api/classes/visitors.mysql',
      'ast/api/classes/visitors.postgresql',
      'ast/api/classes/visitors.tosql',
      'ast/api/classes/visitors.visitor',
      'ast/api/classes/visitors.wheresql',
      'ast/api/classes/table',
    ],
  },
  {
    type: 'category',
    label: 'Interfaces',
    items: [
      'ast/api/interfaces/collectors.collector',
      'ast/api/interfaces/interfaces.connection',
      'ast/api/interfaces/interfaces.engine',
      'ast/api/interfaces/interfaces.quoter',
      'ast/api/interfaces/interfaces.typecaster',
    ],
  },
]
