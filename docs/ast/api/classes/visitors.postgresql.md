[@sequeljs/ast](../README.md) / [Exports](../modules.md) /
[Visitors](../modules/visitors.md) / PostgreSQL

# Class: PostgreSQL

## Hierarchy

- [_ToSQL_](visitors.tosql.md)

  ↳ **PostgreSQL**

## Index

### Constructors

- [constructor](visitors.postgresql.md#constructor)

### Properties

- [connection](visitors.postgresql.md#connection)

### Methods

- [accept](visitors.postgresql.md#accept)
- [aggregate](visitors.postgresql.md#aggregate)
- [collectInClause](visitors.postgresql.md#collectinclause)
- [collectNodesFor](visitors.postgresql.md#collectnodesfor)
- [collectNotInClause](visitors.postgresql.md#collectnotinclause)
- [collectOptimizerHints](visitors.postgresql.md#collectoptimizerhints)
- [compile](visitors.postgresql.md#compile)
- [groupingArrayOrGroupingElement](visitors.postgresql.md#groupingarrayorgroupingelement)
- [groupingParentheses](visitors.postgresql.md#groupingparentheses)
- [hasJoinSources](visitors.postgresql.md#hasjoinsources)
- [hasLimitOrOffsetOrOrders](visitors.postgresql.md#haslimitoroffsetororders)
- [infixValue](visitors.postgresql.md#infixvalue)
- [infixValueWithParen](visitors.postgresql.md#infixvaluewithparen)
- [injectJoin](visitors.postgresql.md#injectjoin)
- [isDistinctFrom](visitors.postgresql.md#isdistinctfrom)
- [isUnboundable](visitors.postgresql.md#isunboundable)
- [literal](visitors.postgresql.md#literal)
- [maybeVisit](visitors.postgresql.md#maybevisit)
- [prepareDeleteStatement](visitors.postgresql.md#preparedeletestatement)
- [prepareDeleteUpdateStatement](visitors.postgresql.md#preparedeleteupdatestatement)
- [prepareUpdateStatement](visitors.postgresql.md#prepareupdatestatement)
- [quote](visitors.postgresql.md#quote)
- [quoteColumnName](visitors.postgresql.md#quotecolumnname)
- [quoteTableName](visitors.postgresql.md#quotetablename)
- [quoted](visitors.postgresql.md#quoted)
- [sanitizeAsSQLComment](visitors.postgresql.md#sanitizeassqlcomment)
- [unsupported](visitors.postgresql.md#unsupported)
- [visit](visitors.postgresql.md#visit)
- [visitAddition](visitors.postgresql.md#visitaddition)
- [visitAnd](visitors.postgresql.md#visitand)
- [visitArray](visitors.postgresql.md#visitarray)
- [visitAs](visitors.postgresql.md#visitas)
- [visitAscending](visitors.postgresql.md#visitascending)
- [visitAssignment](visitors.postgresql.md#visitassignment)
- [visitAttributesAttribute](visitors.postgresql.md#visitattributesattribute)
- [visitAttributesBoolean](visitors.postgresql.md#visitattributesboolean)
- [visitAttributesDecimal](visitors.postgresql.md#visitattributesdecimal)
- [visitAttributesFloat](visitors.postgresql.md#visitattributesfloat)
- [visitAttributesInteger](visitors.postgresql.md#visitattributesinteger)
- [visitAttributesString](visitors.postgresql.md#visitattributesstring)
- [visitAttributesTime](visitors.postgresql.md#visitattributestime)
- [visitAvg](visitors.postgresql.md#visitavg)
- [visitBetween](visitors.postgresql.md#visitbetween)
- [visitBigInt](visitors.postgresql.md#visitbigint)
- [visitBin](visitors.postgresql.md#visitbin)
- [visitBindParam](visitors.postgresql.md#visitbindparam)
- [visitBoolean](visitors.postgresql.md#visitboolean)
- [visitCase](visitors.postgresql.md#visitcase)
- [visitCasted](visitors.postgresql.md#visitcasted)
- [visitComment](visitors.postgresql.md#visitcomment)
- [visitCount](visitors.postgresql.md#visitcount)
- [visitCube](visitors.postgresql.md#visitcube)
- [visitCurrentRow](visitors.postgresql.md#visitcurrentrow)
- [visitDate](visitors.postgresql.md#visitdate)
- [visitDeleteStatement](visitors.postgresql.md#visitdeletestatement)
- [visitDescending](visitors.postgresql.md#visitdescending)
- [visitDistinct](visitors.postgresql.md#visitdistinct)
- [visitDistinctOn](visitors.postgresql.md#visitdistincton)
- [visitDivision](visitors.postgresql.md#visitdivision)
- [visitDoesNotMatch](visitors.postgresql.md#visitdoesnotmatch)
- [visitElse](visitors.postgresql.md#visitelse)
- [visitEquality](visitors.postgresql.md#visitequality)
- [visitExcept](visitors.postgresql.md#visitexcept)
- [visitExists](visitors.postgresql.md#visitexists)
- [visitExtract](visitors.postgresql.md#visitextract)
- [visitFalse](visitors.postgresql.md#visitfalse)
- [visitFollowing](visitors.postgresql.md#visitfollowing)
- [visitFullOuterJoin](visitors.postgresql.md#visitfullouterjoin)
- [visitGreaterThan](visitors.postgresql.md#visitgreaterthan)
- [visitGreaterThanOrEqual](visitors.postgresql.md#visitgreaterthanorequal)
- [visitGroup](visitors.postgresql.md#visitgroup)
- [visitGrouping](visitors.postgresql.md#visitgrouping)
- [visitGroupingElement](visitors.postgresql.md#visitgroupingelement)
- [visitGroupingSet](visitors.postgresql.md#visitgroupingset)
- [visitIn](visitors.postgresql.md#visitin)
- [visitInfixOperation](visitors.postgresql.md#visitinfixoperation)
- [visitInnerJoin](visitors.postgresql.md#visitinnerjoin)
- [visitInsertStatement](visitors.postgresql.md#visitinsertstatement)
- [visitIntersect](visitors.postgresql.md#visitintersect)
- [visitIsDistinctFrom](visitors.postgresql.md#visitisdistinctfrom)
- [visitIsNotDistinctFrom](visitors.postgresql.md#visitisnotdistinctfrom)
- [visitJoinSource](visitors.postgresql.md#visitjoinsource)
- [visitLateral](visitors.postgresql.md#visitlateral)
- [visitLessThan](visitors.postgresql.md#visitlessthan)
- [visitLessThanOrEqual](visitors.postgresql.md#visitlessthanorequal)
- [visitLimit](visitors.postgresql.md#visitlimit)
- [visitLock](visitors.postgresql.md#visitlock)
- [visitMatches](visitors.postgresql.md#visitmatches)
- [visitMax](visitors.postgresql.md#visitmax)
- [visitMin](visitors.postgresql.md#visitmin)
- [visitMultiplication](visitors.postgresql.md#visitmultiplication)
- [visitNamedSQLFunction](visitors.postgresql.md#visitnamedsqlfunction)
- [visitNamedWindow](visitors.postgresql.md#visitnamedwindow)
- [visitNot](visitors.postgresql.md#visitnot)
- [visitNotEqual](visitors.postgresql.md#visitnotequal)
- [visitNotIn](visitors.postgresql.md#visitnotin)
- [visitNotRegexp](visitors.postgresql.md#visitnotregexp)
- [visitNull](visitors.postgresql.md#visitnull)
- [visitNullsFirst](visitors.postgresql.md#visitnullsfirst)
- [visitNullsLast](visitors.postgresql.md#visitnullslast)
- [visitNumber](visitors.postgresql.md#visitnumber)
- [visitOffset](visitors.postgresql.md#visitoffset)
- [visitOn](visitors.postgresql.md#visiton)
- [visitOptimizerHints](visitors.postgresql.md#visitoptimizerhints)
- [visitOr](visitors.postgresql.md#visitor)
- [visitOuterJoin](visitors.postgresql.md#visitouterjoin)
- [visitOver](visitors.postgresql.md#visitover)
- [visitPreceding](visitors.postgresql.md#visitpreceding)
- [visitQuoted](visitors.postgresql.md#visitquoted)
- [visitRange](visitors.postgresql.md#visitrange)
- [visitRegexp](visitors.postgresql.md#visitregexp)
- [visitRightOuterJoin](visitors.postgresql.md#visitrightouterjoin)
- [visitRollUp](visitors.postgresql.md#visitrollup)
- [visitRows](visitors.postgresql.md#visitrows)
- [visitSQLLiteral](visitors.postgresql.md#visitsqlliteral)
- [visitSelectCore](visitors.postgresql.md#visitselectcore)
- [visitSelectManager](visitors.postgresql.md#visitselectmanager)
- [visitSelectStatement](visitors.postgresql.md#visitselectstatement)
- [visitString](visitors.postgresql.md#visitstring)
- [visitStringJoin](visitors.postgresql.md#visitstringjoin)
- [visitSubtraction](visitors.postgresql.md#visitsubtraction)
- [visitSum](visitors.postgresql.md#visitsum)
- [visitSymbol](visitors.postgresql.md#visitsymbol)
- [visitTable](visitors.postgresql.md#visittable)
- [visitTableAlias](visitors.postgresql.md#visittablealias)
- [visitTrue](visitors.postgresql.md#visittrue)
- [visitUnaryOperation](visitors.postgresql.md#visitunaryoperation)
- [visitUnion](visitors.postgresql.md#visitunion)
- [visitUnionAll](visitors.postgresql.md#visitunionall)
- [visitUnqualifiedColumn](visitors.postgresql.md#visitunqualifiedcolumn)
- [visitUpdateStatement](visitors.postgresql.md#visitupdatestatement)
- [visitValuesList](visitors.postgresql.md#visitvalueslist)
- [visitWhen](visitors.postgresql.md#visitwhen)
- [visitWindow](visitors.postgresql.md#visitwindow)
- [visitWith](visitors.postgresql.md#visitwith)
- [visitWithRecursive](visitors.postgresql.md#visitwithrecursive)

## Constructors

### constructor

\+ **new PostgreSQL**(`connection`:
[_Connection_](../interfaces/interfaces.connection.md)):
[_PostgreSQL_](visitors.postgresql.md)

#### Parameters:

| Name         | Type                                                   |
| ------------ | ------------------------------------------------------ |
| `connection` | [_Connection_](../interfaces/interfaces.connection.md) |

**Returns:** [_PostgreSQL_](visitors.postgresql.md)

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:154](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L154)

## Properties

### connection

• **connection**: [_Connection_](../interfaces/interfaces.connection.md)

Inherited from:
[ToSQL](visitors.tosql.md).[connection](visitors.tosql.md#connection)

Defined in:
[src/visitors/ToSQL.ts:154](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L154)

## Methods

### accept

▸ **accept**<T\>(`object`: _null_ \| _string_ \| _number_ \| _bigint_ \|
_boolean_ \| _symbol_ \| [_Attribute_](attributes.attribute.md) \|
[_Table_](table.md) \| [_TableAlias_](nodes.tablealias.md) \|
[_SQLLiteral_](nodes.sqlliteral.md) \| Date \| [_Node_](nodes.node.md) \|
[_SelectManager_](managers.selectmanager.md) \|
[_Visitable_](../modules/visitors.md#visitable)[], `collector`: T): T

#### Type parameters:

| Name | Type                                                                 |
| ---- | -------------------------------------------------------------------- |
| `T`  | [_Collector_](../interfaces/collectors.collector.md)<T[*value*], T\> |

#### Parameters:

| Name        | Type                                                                                                                                                                                                                                                                                                                                                       |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `object`    | _null_ \| _string_ \| _number_ \| _bigint_ \| _boolean_ \| _symbol_ \| [_Attribute_](attributes.attribute.md) \| [_Table_](table.md) \| [_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md) \| Date \| [_Node_](nodes.node.md) \| [_SelectManager_](managers.selectmanager.md) \| [_Visitable_](../modules/visitors.md#visitable)[] |
| `collector` | T                                                                                                                                                                                                                                                                                                                                                          |

**Returns:** T

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/Visitor.ts:11](https://github.com/sequeljs/ast/blob/6632050/src/visitors/Visitor.ts#L11)

---

### aggregate

▸ `Protected`**aggregate**(`name`: _string_, `thing`:
[_SQLFunction_](nodes.sqlfunction.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `name`  | _string_                                                        |
| `thing` | [_SQLFunction_](nodes.sqlfunction.md)                           |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:169](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L169)

---

### collectInClause

▸ `Protected`**collectInClause**(`left`:
[_Visitable_](../modules/visitors.md#visitable), `right`: _string_ \| _number_
\| _bigint_ \| _boolean_ \| _symbol_ \| [_Attribute_](attributes.attribute.md)
\| [_Table_](table.md) \| [_TableAlias_](nodes.tablealias.md) \|
[_SQLLiteral_](nodes.sqlliteral.md) \| Date \| [_Node_](nodes.node.md) \|
[_SelectManager_](managers.selectmanager.md) \|
[_Visitable_](../modules/visitors.md#visitable)[], `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                                                                                                                                                                                                                                                                                                             |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `left`  | [_Visitable_](../modules/visitors.md#visitable)                                                                                                                                                                                                                                                                                                  |
| `right` | _string_ \| _number_ \| _bigint_ \| _boolean_ \| _symbol_ \| [_Attribute_](attributes.attribute.md) \| [_Table_](table.md) \| [_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md) \| Date \| [_Node_](nodes.node.md) \| [_SelectManager_](managers.selectmanager.md) \| [_Visitable_](../modules/visitors.md#visitable)[] |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\>                                                                                                                                                                                                                                                                                  |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:191](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L191)

---

### collectNodesFor

▸ `Protected`**collectNodesFor**(`nodes`:
[_Visitable_](../modules/visitors.md#visitable)[], `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>, `spacer`:
_string_, `connector?`: _string_):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name        | Type                                                            | Default value |
| ----------- | --------------------------------------------------------------- | ------------- |
| `nodes`     | [_Visitable_](../modules/visitors.md#visitable)[]               | -             |
| `col`       | [_Collector_](../interfaces/collectors.collector.md)<_string_\> | -             |
| `spacer`    | _string_                                                        | -             |
| `connector` | _string_                                                        | ', '          |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:206](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L206)

---

### collectNotInClause

▸ `Protected`**collectNotInClause**(`left`:
[_Visitable_](../modules/visitors.md#visitable), `right`: _string_ \| _number_
\| _bigint_ \| _boolean_ \| _symbol_ \| [_Attribute_](attributes.attribute.md)
\| [_Table_](table.md) \| [_TableAlias_](nodes.tablealias.md) \|
[_SQLLiteral_](nodes.sqlliteral.md) \| Date \| [_Node_](nodes.node.md) \|
[_SelectManager_](managers.selectmanager.md) \|
[_Visitable_](../modules/visitors.md#visitable)[], `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                                                                                                                                                                                                                                                                                                             |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `left`  | [_Visitable_](../modules/visitors.md#visitable)                                                                                                                                                                                                                                                                                                  |
| `right` | _string_ \| _number_ \| _bigint_ \| _boolean_ \| _symbol_ \| [_Attribute_](attributes.attribute.md) \| [_Table_](table.md) \| [_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md) \| Date \| [_Node_](nodes.node.md) \| [_SelectManager_](managers.selectmanager.md) \| [_Visitable_](../modules/visitors.md#visitable)[] |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\>                                                                                                                                                                                                                                                                                  |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:222](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L222)

---

### collectOptimizerHints

▸ `Protected`**collectOptimizerHints**(`thing`:
[_SelectCore_](nodes.selectcore.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_SelectCore_](nodes.selectcore.md)                             |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:237](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L237)

---

### compile

▸ **compile**(`node`: [_Visitable_](../modules/visitors.md#visitable),
`collector?`: [_Collector_](../interfaces/collectors.collector.md)<_string_ \|
_string_[]\>): _string_ \| _string_[]

#### Parameters:

| Name        | Type                                                                          | Default value |
| ----------- | ----------------------------------------------------------------------------- | ------------- |
| `node`      | [_Visitable_](../modules/visitors.md#visitable)                               | -             |
| `collector` | [_Collector_](../interfaces/collectors.collector.md)<_string_ \| _string_[]\> | ...           |

**Returns:** _string_ \| _string_[]

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:162](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L162)

---

### groupingArrayOrGroupingElement

▸ `Private`**groupingArrayOrGroupingElement**(`thing`: [_Cube_](nodes.cube.md)
\| [_GroupingSet_](nodes.groupingset.md) \| [_RollUp_](nodes.rollup.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                                                            |
| ------- | ----------------------------------------------------------------------------------------------- |
| `thing` | [_Cube_](nodes.cube.md) \| [_GroupingSet_](nodes.groupingset.md) \| [_RollUp_](nodes.rollup.md) |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\>                                 |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Defined in:
[src/visitors/PostgreSQL.ts:24](https://github.com/sequeljs/ast/blob/6632050/src/visitors/PostgreSQL.ts#L24)

---

### groupingParentheses

▸ `Private`**groupingParentheses**(`thing`: [_Lateral_](nodes.lateral.md),
`col`: [_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Lateral_](nodes.lateral.md)                                   |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Defined in:
[src/visitors/PostgreSQL.ts:41](https://github.com/sequeljs/ast/blob/6632050/src/visitors/PostgreSQL.ts#L41)

---

### hasJoinSources

▸ `Protected`**hasJoinSources**(`thing`: _any_): _boolean_

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `thing` | _any_ |

**Returns:** _boolean_

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:248](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L248)

---

### hasLimitOrOffsetOrOrders

▸ `Protected`**hasLimitOrOffsetOrOrders**(`thing`:
[_DeleteStatement_](nodes.deletestatement.md) \|
[_UpdateStatement_](nodes.updatestatement.md)): _boolean_

#### Parameters:

| Name    | Type                                                                                           |
| ------- | ---------------------------------------------------------------------------------------------- |
| `thing` | [_DeleteStatement_](nodes.deletestatement.md) \| [_UpdateStatement_](nodes.updatestatement.md) |

**Returns:** _boolean_

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:254](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L254)

---

### infixValue

▸ `Protected`**infixValue**(`thing`: [_Binary_](nodes.binary.md)<_any_, _any_\>,
`col`: [_Collector_](../interfaces/collectors.collector.md)<_string_\>, `value`:
_string_): [_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Binary_](nodes.binary.md)<_any_, _any_\>                      |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |
| `value` | _string_                                                        |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:260](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L260)

---

### infixValueWithParen

▸ `Protected`**infixValueWithParen**(`thing`: [_Binary_](nodes.binary.md)<_any_,
_any_\>, `col`: [_Collector_](../interfaces/collectors.collector.md)<_string_\>,
`value`: _string_, `suppressParens?`: _boolean_):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name             | Type                                                            | Default value |
| ---------------- | --------------------------------------------------------------- | ------------- |
| `thing`          | [_Binary_](nodes.binary.md)<_any_, _any_\>                      | -             |
| `col`            | [_Collector_](../interfaces/collectors.collector.md)<_string_\> | -             |
| `value`          | _string_                                                        | -             |
| `suppressParens` | _boolean_                                                       | false         |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:274](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L274)

---

### injectJoin

▸ `Protected`**injectJoin**(`things`:
[_Visitable_](../modules/visitors.md#visitable)[], `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>, `joinStr`:
_string_): [_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name      | Type                                                            |
| --------- | --------------------------------------------------------------- |
| `things`  | [_Visitable_](../modules/visitors.md#visitable)[]               |
| `col`     | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |
| `joinStr` | _string_                                                        |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:307](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L307)

---

### isDistinctFrom

▸ `Protected`**isDistinctFrom**(`thing`:
[_IsNotDistinctFrom_](nodes.isnotdistinctfrom.md) \|
[_IsDistinctFrom_](nodes.isdistinctfrom.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                                                             |
| ------- | ------------------------------------------------------------------------------------------------ |
| `thing` | [_IsNotDistinctFrom_](nodes.isnotdistinctfrom.md) \| [_IsDistinctFrom_](nodes.isdistinctfrom.md) |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\>                                  |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:324](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L324)

---

### isUnboundable

▸ `Protected`**isUnboundable**(`value`: _any_): _boolean_

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `value` | _any_ |

**Returns:** _boolean_

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:344](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L344)

---

### literal

▸ `Protected`**literal**(`thing`: _number_ \| _bigint_ \|
[_SQLLiteral_](nodes.sqlliteral.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | _number_ \| _bigint_ \| [_SQLLiteral_](nodes.sqlliteral.md)     |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:348](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L348)

---

### maybeVisit

▸ `Protected`**maybeVisit**(`thing`:
[_Visitable_](../modules/visitors.md#visitable), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Visitable_](../modules/visitors.md#visitable)                 |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:352](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L352)

---

### prepareDeleteStatement

▸ `Protected`**prepareDeleteStatement**(`thing`:
[_DeleteStatement_](nodes.deletestatement.md)):
[_DeleteStatement_](nodes.deletestatement.md)

#### Parameters:

| Name    | Type                                          |
| ------- | --------------------------------------------- |
| `thing` | [_DeleteStatement_](nodes.deletestatement.md) |

**Returns:** [_DeleteStatement_](nodes.deletestatement.md)

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:406](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L406)

---

### prepareDeleteUpdateStatement

▸ `Protected`**prepareDeleteUpdateStatement**(`thing`:
[_DeleteStatement_](nodes.deletestatement.md)):
[_DeleteStatement_](nodes.deletestatement.md)

#### Parameters:

| Name    | Type                                          |
| ------- | --------------------------------------------- |
| `thing` | [_DeleteStatement_](nodes.deletestatement.md) |

**Returns:** [_DeleteStatement_](nodes.deletestatement.md)

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:365](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L365)

▸ `Protected`**prepareDeleteUpdateStatement**(`thing`:
[_UpdateStatement_](nodes.updatestatement.md)):
[_UpdateStatement_](nodes.updatestatement.md)

#### Parameters:

| Name    | Type                                          |
| ------- | --------------------------------------------- |
| `thing` | [_UpdateStatement_](nodes.updatestatement.md) |

**Returns:** [_UpdateStatement_](nodes.updatestatement.md)

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:368](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L368)

---

### prepareUpdateStatement

▸ `Protected`**prepareUpdateStatement**(`thing`:
[_UpdateStatement_](nodes.updatestatement.md)):
[_UpdateStatement_](nodes.updatestatement.md)

#### Parameters:

| Name    | Type                                          |
| ------- | --------------------------------------------- |
| `thing` | [_UpdateStatement_](nodes.updatestatement.md) |

**Returns:** [_UpdateStatement_](nodes.updatestatement.md)

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:410](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L410)

---

### quote

▸ `Protected`**quote**(`value`:
[_Visitable_](../modules/visitors.md#visitable)): _string_ \| _number_

#### Parameters:

| Name    | Type                                            |
| ------- | ----------------------------------------------- |
| `value` | [_Visitable_](../modules/visitors.md#visitable) |

**Returns:** _string_ \| _number_

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:414](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L414)

---

### quoteColumnName

▸ `Protected`**quoteColumnName**(`name`: _string_ \| _number_ \|
[_SQLLiteral_](nodes.sqlliteral.md)): _string_

#### Parameters:

| Name   | Type                                                        |
| ------ | ----------------------------------------------------------- |
| `name` | _string_ \| _number_ \| [_SQLLiteral_](nodes.sqlliteral.md) |

**Returns:** _string_

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:422](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L422)

---

### quoteTableName

▸ `Protected`**quoteTableName**(`name`: _string_ \| _number_ \|
[_SQLLiteral_](nodes.sqlliteral.md)): _string_

#### Parameters:

| Name   | Type                                                        |
| ------ | ----------------------------------------------------------- |
| `name` | _string_ \| _number_ \| [_SQLLiteral_](nodes.sqlliteral.md) |

**Returns:** _string_

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:430](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L430)

---

### quoted

▸ `Protected`**quoted**(`val`: [_Visitable_](../modules/visitors.md#visitable),
`attribute`: _null_ \| _string_ \| [_Attribute_](attributes.attribute.md)):
_string_ \| _number_

#### Parameters:

| Name        | Type                                                         |
| ----------- | ------------------------------------------------------------ |
| `val`       | [_Visitable_](../modules/visitors.md#visitable)              |
| `attribute` | _null_ \| _string_ \| [_Attribute_](attributes.attribute.md) |

**Returns:** _string_ \| _number_

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:438](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L438)

---

### sanitizeAsSQLComment

▸ `Protected`**sanitizeAsSQLComment**(`value`: _any_): _string_ \|
[_SQLLiteral_](nodes.sqlliteral.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `value` | _any_ |

**Returns:** _string_ \| [_SQLLiteral_](nodes.sqlliteral.md)

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:453](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L453)

---

### unsupported

▸ `Protected`**unsupported**(`thing`: _unknown_, `_`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | _unknown_                                                       |
| `_`     | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:461](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L461)

---

### visit

▸ **visit**<T\>(`object`: _null_ \| _string_ \| _number_ \| _bigint_ \|
_boolean_ \| _symbol_ \| [_Attribute_](attributes.attribute.md) \|
[_Table_](table.md) \| [_TableAlias_](nodes.tablealias.md) \|
[_SQLLiteral_](nodes.sqlliteral.md) \| Date \| [_Node_](nodes.node.md) \|
[_SelectManager_](managers.selectmanager.md) \|
[_Visitable_](../modules/visitors.md#visitable)[], `collector`: T): T

#### Type parameters:

| Name | Type                                                                 |
| ---- | -------------------------------------------------------------------- |
| `T`  | [_Collector_](../interfaces/collectors.collector.md)<T[*value*], T\> |

#### Parameters:

| Name        | Type                                                                                                                                                                                                                                                                                                                                                       |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `object`    | _null_ \| _string_ \| _number_ \| _bigint_ \| _boolean_ \| _symbol_ \| [_Attribute_](attributes.attribute.md) \| [_Table_](table.md) \| [_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md) \| Date \| [_Node_](nodes.node.md) \| [_SelectManager_](managers.selectmanager.md) \| [_Visitable_](../modules/visitors.md#visitable)[] |
| `collector` | T                                                                                                                                                                                                                                                                                                                                                          |

**Returns:** T

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/Visitor.ts:18](https://github.com/sequeljs/ast/blob/6632050/src/visitors/Visitor.ts#L18)

---

### visitAddition

▸ `Protected`**visitAddition**(`thing`: [_Addition_](nodes.addition.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Addition_](nodes.addition.md)                                 |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:465](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L465)

---

### visitAnd

▸ `Protected`**visitAnd**(`thing`: [_And_](nodes.and.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_And_](nodes.and.md)                                           |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:469](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L469)

---

### visitArray

▸ `Protected`**visitArray**(`things`:
[_Visitable_](../modules/visitors.md#visitable)[], `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name     | Type                                                            |
| -------- | --------------------------------------------------------------- |
| `things` | [_Visitable_](../modules/visitors.md#visitable)[]               |
| `col`    | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:473](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L473)

---

### visitAs

▸ `Protected`**visitAs**(`thing`: [_As_](nodes.as.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_As_](nodes.as.md)                                             |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:477](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L477)

---

### visitAscending

▸ `Protected`**visitAscending**(`thing`: [_Ascending_](nodes.ascending.md),
`col`: [_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Ascending_](nodes.ascending.md)                               |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:487](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L487)

---

### visitAssignment

▸ `Protected`**visitAssignment**(`thing`: [_Assignment_](nodes.assignment.md),
`col`: [_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Assignment_](nodes.assignment.md)                             |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:491](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L491)

---

### visitAttributesAttribute

▸ `Protected`**visitAttributesAttribute**(`thing`:
[_Attribute_](attributes.attribute.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Attribute_](attributes.attribute.md)                          |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:509](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L509)

---

### visitAttributesBoolean

▸ `Protected`**visitAttributesBoolean**(`thing`:
[_Boolean_](attributes.boolean.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Boolean_](attributes.boolean.md)                              |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:533](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L533)

---

### visitAttributesDecimal

▸ `Protected`**visitAttributesDecimal**(`thing`:
[_Decimal_](attributes.decimal.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Decimal_](attributes.decimal.md)                              |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:540](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L540)

---

### visitAttributesFloat

▸ `Protected`**visitAttributesFloat**(`thing`: [_Float_](attributes.float.md),
`col`: [_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Float_](attributes.float.md)                                  |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:547](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L547)

---

### visitAttributesInteger

▸ `Protected`**visitAttributesInteger**(`thing`:
[_Integer_](attributes.integer.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Integer_](attributes.integer.md)                              |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:554](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L554)

---

### visitAttributesString

▸ `Protected`**visitAttributesString**(`thing`:
[_String_](attributes.string.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_String_](attributes.string.md)                                |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:561](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L561)

---

### visitAttributesTime

▸ `Protected`**visitAttributesTime**(`thing`: [_Time_](attributes.time.md),
`col`: [_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Time_](attributes.time.md)                                    |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:568](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L568)

---

### visitAvg

▸ `Protected`**visitAvg**(`thing`: [_Avg_](nodes.avg.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Avg_](nodes.avg.md)                                           |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:575](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L575)

---

### visitBetween

▸ `Protected`**visitBetween**(`thing`: [_Between_](nodes.between.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Between_](nodes.between.md)                                   |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:579](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L579)

---

### visitBigInt

▸ `Protected`**visitBigInt**(`thing`: _bigint_, `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | _bigint_                                                        |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:589](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L589)

---

### visitBin

▸ `Protected`**visitBin**(`thing`: [_Bin_](nodes.bin.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Bin_](nodes.bin.md)                                           |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:593](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L593)

---

### visitBindParam

▸ `Protected`**visitBindParam**(`thing`: [_BindParam_](nodes.bindparam.md),
`col`: [_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_BindParam_](nodes.bindparam.md)                               |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Overrides: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/PostgreSQL.ts:55](https://github.com/sequeljs/ast/blob/6632050/src/visitors/PostgreSQL.ts#L55)

---

### visitBoolean

▸ `Protected`**visitBoolean**(`thing`: _boolean_, `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | _boolean_                                                       |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:601](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L601)

---

### visitCase

▸ `Protected`**visitCase**(`thing`: [_Case_](nodes.case.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Case_](nodes.case.md)                                         |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:605](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L605)

---

### visitCasted

▸ `Protected`**visitCasted**(`thing`: [_Casted_](nodes.casted.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Casted_](nodes.casted.md)                                     |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:630](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L630)

---

### visitComment

▸ `Protected`**visitComment**(`thing`: [_Comment_](nodes.comment.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Comment_](nodes.comment.md)                                   |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:634](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L634)

---

### visitCount

▸ `Protected`**visitCount**(`thing`: [_Count_](nodes.count.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Count_](nodes.count.md)                                       |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:645](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L645)

---

### visitCube

▸ `Protected`**visitCube**(`thing`: [_Cube_](nodes.cube.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Cube_](nodes.cube.md)                                         |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Defined in:
[src/visitors/PostgreSQL.ts:63](https://github.com/sequeljs/ast/blob/6632050/src/visitors/PostgreSQL.ts#L63)

---

### visitCurrentRow

▸ `Protected`**visitCurrentRow**(`_`: [_CurrentRow_](nodes.currentrow.md),
`col`: [_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name  | Type                                                            |
| ----- | --------------------------------------------------------------- |
| `_`   | [_CurrentRow_](nodes.currentrow.md)                             |
| `col` | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:649](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L649)

---

### visitDate

▸ `Protected`**visitDate**(`thing`: Date, `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | Date                                                            |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:653](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L653)

---

### visitDeleteStatement

▸ `Protected`**visitDeleteStatement**(`thing`:
[_DeleteStatement_](nodes.deletestatement.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_DeleteStatement_](nodes.deletestatement.md)                   |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:657](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L657)

---

### visitDescending

▸ `Protected`**visitDescending**(`thing`: [_Descending_](nodes.descending.md),
`col`: [_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Descending_](nodes.descending.md)                             |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:677](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L677)

---

### visitDistinct

▸ `Protected`**visitDistinct**(`thing`: [_Distinct_](nodes.distinct.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Distinct_](nodes.distinct.md)                                 |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:681](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L681)

---

### visitDistinctOn

▸ `Protected`**visitDistinctOn**(`thing`: [_DistinctOn_](nodes.distincton.md),
`col`: [_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_DistinctOn_](nodes.distincton.md)                             |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Overrides: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/PostgreSQL.ts:73](https://github.com/sequeljs/ast/blob/6632050/src/visitors/PostgreSQL.ts#L73)

---

### visitDivision

▸ `Protected`**visitDivision**(`thing`: [_Division_](nodes.division.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Division_](nodes.division.md)                                 |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:691](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L691)

---

### visitDoesNotMatch

▸ `Protected`**visitDoesNotMatch**(`thing`:
[_DoesNotMatch_](nodes.doesnotmatch.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_DoesNotMatch_](nodes.doesnotmatch.md)                         |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Overrides: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/PostgreSQL.ts:83](https://github.com/sequeljs/ast/blob/6632050/src/visitors/PostgreSQL.ts#L83)

---

### visitElse

▸ `Protected`**visitElse**(`thing`: [_Else_](nodes.else.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Else_](nodes.else.md)                                         |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:710](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L710)

---

### visitEquality

▸ `Protected`**visitEquality**(`thing`: [_Equality_](nodes.equality.md)<_any_,
_any_\>, `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Equality_](nodes.equality.md)<_any_, _any_\>                  |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:719](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L719)

---

### visitExcept

▸ `Protected`**visitExcept**(`thing`: [_Except_](nodes.except.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Except_](nodes.except.md)                                     |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:745](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L745)

---

### visitExists

▸ `Protected`**visitExists**(`thing`: [_Exists_](nodes.exists.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Exists_](nodes.exists.md)                                     |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:755](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L755)

---

### visitExtract

▸ `Protected`**visitExtract**(`thing`: [_Extract_](nodes.extract.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Extract_](nodes.extract.md)                                   |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:770](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L770)

---

### visitFalse

▸ `Protected`**visitFalse**(`_`: [_False_](nodes.false.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name  | Type                                                            |
| ----- | --------------------------------------------------------------- |
| `_`   | [_False_](nodes.false.md)                                       |
| `col` | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:782](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L782)

---

### visitFollowing

▸ `Protected`**visitFollowing**(`thing`: [_Following_](nodes.following.md),
`col`: [_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Following_](nodes.following.md)                               |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:786](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L786)

---

### visitFullOuterJoin

▸ `Protected`**visitFullOuterJoin**(`thing`:
[_FullOuterJoin_](nodes.fullouterjoin.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_FullOuterJoin_](nodes.fullouterjoin.md)                       |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:798](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L798)

---

### visitGreaterThan

▸ `Protected`**visitGreaterThan**(`thing`:
[_GreaterThan_](nodes.greaterthan.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_GreaterThan_](nodes.greaterthan.md)                           |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:812](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L812)

---

### visitGreaterThanOrEqual

▸ `Protected`**visitGreaterThanOrEqual**(`thing`:
[_GreaterThanOrEqual_](nodes.greaterthanorequal.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_GreaterThanOrEqual_](nodes.greaterthanorequal.md)             |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:822](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L822)

---

### visitGroup

▸ `Protected`**visitGroup**(`thing`: [_Group_](nodes.group.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Group_](nodes.group.md)                                       |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:835](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L835)

---

### visitGrouping

▸ `Protected`**visitGrouping**(`thing`: [_Grouping_](nodes.grouping.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Grouping_](nodes.grouping.md)                                 |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:839](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L839)

---

### visitGroupingElement

▸ `Protected`**visitGroupingElement**(`thing`:
[_GroupingElement_](nodes.groupingelement.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_GroupingElement_](nodes.groupingelement.md)                   |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Defined in:
[src/visitors/PostgreSQL.ts:99](https://github.com/sequeljs/ast/blob/6632050/src/visitors/PostgreSQL.ts#L99)

---

### visitGroupingSet

▸ `Protected`**visitGroupingSet**(`thing`:
[_GroupingSet_](nodes.groupingset.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_GroupingSet_](nodes.groupingset.md)                           |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Defined in:
[src/visitors/PostgreSQL.ts:112](https://github.com/sequeljs/ast/blob/6632050/src/visitors/PostgreSQL.ts#L112)

---

### visitIn

▸ `Protected`**visitIn**(`thing`: [_In_](nodes.in.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_In_](nodes.in.md)                                             |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:853](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L853)

---

### visitInfixOperation

▸ `Protected`**visitInfixOperation**(`thing`:
[_InfixOperation_](nodes.infixoperation.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_InfixOperation_](nodes.infixoperation.md)                     |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:894](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L894)

---

### visitInnerJoin

▸ `Protected`**visitInnerJoin**(`thing`: [_InnerJoin_](nodes.innerjoin.md),
`col`: [_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_InnerJoin_](nodes.innerjoin.md)                               |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:907](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L907)

---

### visitInsertStatement

▸ `Protected`**visitInsertStatement**(`thing`:
[_InsertStatement_](nodes.insertstatement.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_InsertStatement_](nodes.insertstatement.md)                   |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:921](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L921)

---

### visitIntersect

▸ `Protected`**visitIntersect**(`thing`: [_Intersect_](nodes.intersect.md),
`col`: [_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Intersect_](nodes.intersect.md)                               |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:957](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L957)

---

### visitIsDistinctFrom

▸ `Protected`**visitIsDistinctFrom**(`thing`:
[_IsDistinctFrom_](nodes.isdistinctfrom.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_IsDistinctFrom_](nodes.isdistinctfrom.md)                     |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Overrides: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/PostgreSQL.ts:122](https://github.com/sequeljs/ast/blob/6632050/src/visitors/PostgreSQL.ts#L122)

---

### visitIsNotDistinctFrom

▸ `Protected`**visitIsNotDistinctFrom**(`thing`:
[_IsNotDistinctFrom_](nodes.isnotdistinctfrom.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_IsNotDistinctFrom_](nodes.isnotdistinctfrom.md)               |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Overrides: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/PostgreSQL.ts:135](https://github.com/sequeljs/ast/blob/6632050/src/visitors/PostgreSQL.ts#L135)

---

### visitJoinSource

▸ `Protected`**visitJoinSource**(`thing`: [_JoinSource_](nodes.joinsource.md),
`col`: [_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_JoinSource_](nodes.joinsource.md)                             |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:1013](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L1013)

---

### visitLateral

▸ `Protected`**visitLateral**(`thing`: [_Lateral_](nodes.lateral.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Lateral_](nodes.lateral.md)                                   |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Defined in:
[src/visitors/PostgreSQL.ts:148](https://github.com/sequeljs/ast/blob/6632050/src/visitors/PostgreSQL.ts#L148)

---

### visitLessThan

▸ `Protected`**visitLessThan**(`thing`: [_LessThan_](nodes.lessthan.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_LessThan_](nodes.lessthan.md)                                 |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:1031](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L1031)

---

### visitLessThanOrEqual

▸ `Protected`**visitLessThanOrEqual**(`thing`:
[_LessThanOrEqual_](nodes.lessthanorequal.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_LessThanOrEqual_](nodes.lessthanorequal.md)                   |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:1041](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L1041)

---

### visitLimit

▸ `Protected`**visitLimit**(`thing`: [_Limit_](nodes.limit.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Limit_](nodes.limit.md)                                       |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:1054](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L1054)

---

### visitLock

▸ `Protected`**visitLock**(`thing`: [_Lock_](nodes.lock.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Lock_](nodes.lock.md)                                         |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:1063](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L1063)

---

### visitMatches

▸ `Protected`**visitMatches**(`thing`: [_Matches_](nodes.matches.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Matches_](nodes.matches.md)                                   |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Overrides: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/PostgreSQL.ts:158](https://github.com/sequeljs/ast/blob/6632050/src/visitors/PostgreSQL.ts#L158)

---

### visitMax

▸ `Protected`**visitMax**(`thing`: [_Max_](nodes.max.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Max_](nodes.max.md)                                           |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:1082](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L1082)

---

### visitMin

▸ `Protected`**visitMin**(`thing`: [_Min_](nodes.min.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Min_](nodes.min.md)                                           |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:1086](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L1086)

---

### visitMultiplication

▸ `Protected`**visitMultiplication**(`thing`:
[_Multiplication_](nodes.multiplication.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Multiplication_](nodes.multiplication.md)                     |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:1090](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L1090)

---

### visitNamedSQLFunction

▸ `Protected`**visitNamedSQLFunction**(`thing`:
[_NamedSQLFunction_](nodes.namedsqlfunction.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_NamedSQLFunction_](nodes.namedsqlfunction.md)                 |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:1097](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L1097)

---

### visitNamedWindow

▸ `Protected`**visitNamedWindow**(`thing`:
[_NamedWindow_](nodes.namedwindow.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_NamedWindow_](nodes.namedwindow.md)                           |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:1118](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L1118)

---

### visitNot

▸ `Protected`**visitNot**(`thing`: [_Not_](nodes.not.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Not_](nodes.not.md)                                           |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:1128](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L1128)

---

### visitNotEqual

▸ `Protected`**visitNotEqual**(`thing`: [_NotEqual_](nodes.notequal.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_NotEqual_](nodes.notequal.md)                                 |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:1138](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L1138)

---

### visitNotIn

▸ `Protected`**visitNotIn**(`thing`: [_NotIn_](nodes.notin.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_NotIn_](nodes.notin.md)                                       |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:1164](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L1164)

---

### visitNotRegexp

▸ `Protected`**visitNotRegexp**(`thing`: [_NotRegexp_](nodes.notregexp.md),
`col`: [_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_NotRegexp_](nodes.notregexp.md)                               |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Overrides: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/PostgreSQL.ts:174](https://github.com/sequeljs/ast/blob/6632050/src/visitors/PostgreSQL.ts#L174)

---

### visitNull

▸ `Protected`**visitNull**(`thing`: _null_, `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | _null_                                                          |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:1213](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L1213)

---

### visitNullsFirst

▸ `Protected`**visitNullsFirst**(`thing`: _default_, `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | _default_                                                       |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Defined in:
[src/visitors/PostgreSQL.ts:184](https://github.com/sequeljs/ast/blob/6632050/src/visitors/PostgreSQL.ts#L184)

---

### visitNullsLast

▸ `Protected`**visitNullsLast**(`thing`: _default_, `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | _default_                                                       |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Defined in:
[src/visitors/PostgreSQL.ts:188](https://github.com/sequeljs/ast/blob/6632050/src/visitors/PostgreSQL.ts#L188)

---

### visitNumber

▸ `Protected`**visitNumber**(`thing`: _number_, `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | _number_                                                        |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:1209](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L1209)

---

### visitOffset

▸ `Protected`**visitOffset**(`thing`: [_Offset_](nodes.offset.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Offset_](nodes.offset.md)                                     |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:1217](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L1217)

---

### visitOn

▸ `Protected`**visitOn**(`thing`: [_On_](nodes.on.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_On_](nodes.on.md)                                             |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:1226](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L1226)

---

### visitOptimizerHints

▸ `Protected`**visitOptimizerHints**(`thing`:
[_OptimizerHints_](nodes.optimizerhints.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_OptimizerHints_](nodes.optimizerhints.md)                     |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:1235](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L1235)

---

### visitOr

▸ `Protected`**visitOr**(`thing`: [_Or_](nodes.or.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Or_](nodes.or.md)                                             |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:1249](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L1249)

---

### visitOuterJoin

▸ `Protected`**visitOuterJoin**(`thing`: [_OuterJoin_](nodes.outerjoin.md),
`col`: [_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_OuterJoin_](nodes.outerjoin.md)                               |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:1259](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L1259)

---

### visitOver

▸ `Protected`**visitOver**(`thing`: [_Over_](nodes.over.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Over_](nodes.over.md)                                         |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:1270](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L1270)

---

### visitPreceding

▸ `Protected`**visitPreceding**(`thing`: [_Preceding_](nodes.preceding.md),
`col`: [_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Preceding_](nodes.preceding.md)                               |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:1288](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L1288)

---

### visitQuoted

▸ `Protected`**visitQuoted**(`thing`: [_Quoted_](nodes.quoted.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Quoted_](nodes.quoted.md)                                     |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:1300](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L1300)

---

### visitRange

▸ `Protected`**visitRange**(`thing`: [_Range_](nodes.range.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Range_](nodes.range.md)                                       |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:1304](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L1304)

---

### visitRegexp

▸ `Protected`**visitRegexp**(`thing`: [_Regexp_](nodes.regexp.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Regexp_](nodes.regexp.md)                                     |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Overrides: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/PostgreSQL.ts:192](https://github.com/sequeljs/ast/blob/6632050/src/visitors/PostgreSQL.ts#L192)

---

### visitRightOuterJoin

▸ `Protected`**visitRightOuterJoin**(`thing`:
[_RightOuterJoin_](nodes.rightouterjoin.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_RightOuterJoin_](nodes.rightouterjoin.md)                     |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:1323](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L1323)

---

### visitRollUp

▸ `Protected`**visitRollUp**(`thing`: [_RollUp_](nodes.rollup.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_RollUp_](nodes.rollup.md)                                     |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Defined in:
[src/visitors/PostgreSQL.ts:202](https://github.com/sequeljs/ast/blob/6632050/src/visitors/PostgreSQL.ts#L202)

---

### visitRows

▸ `Protected`**visitRows**(`thing`: [_Rows_](nodes.rows.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Rows_](nodes.rows.md)                                         |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:1337](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L1337)

---

### visitSQLLiteral

▸ `Protected`**visitSQLLiteral**(`thing`: [_SQLLiteral_](nodes.sqlliteral.md),
`col`: [_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_SQLLiteral_](nodes.sqlliteral.md)                             |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:1443](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L1443)

---

### visitSelectCore

▸ `Protected`**visitSelectCore**(`thing`: [_SelectCore_](nodes.selectcore.md),
`col`: [_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_SelectCore_](nodes.selectcore.md)                             |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:1352](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L1352)

---

### visitSelectManager

▸ `Protected`**visitSelectManager**(`thing`:
[_SelectManager_](managers.selectmanager.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_SelectManager_](managers.selectmanager.md)                    |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:1395](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L1395)

---

### visitSelectStatement

▸ `Protected`**visitSelectStatement**(`thing`:
[_SelectStatement_](nodes.selectstatement.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_SelectStatement_](nodes.selectstatement.md)                   |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:1408](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L1408)

---

### visitString

▸ `Protected`**visitString**(`thing`: _string_, `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | _string_                                                        |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:1447](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L1447)

---

### visitStringJoin

▸ `Protected`**visitStringJoin**(`thing`: [_StringJoin_](nodes.stringjoin.md),
`col`: [_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_StringJoin_](nodes.stringjoin.md)                             |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:1451](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L1451)

---

### visitSubtraction

▸ `Protected`**visitSubtraction**(`thing`:
[_Subtraction_](nodes.subtraction.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Subtraction_](nodes.subtraction.md)                           |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:1455](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L1455)

---

### visitSum

▸ `Protected`**visitSum**(`thing`: [_Sum_](nodes.sum.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Sum_](nodes.sum.md)                                           |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:1459](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L1459)

---

### visitSymbol

▸ `Protected`**visitSymbol**(`thing`: _symbol_, `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | _symbol_                                                        |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:1463](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L1463)

---

### visitTable

▸ `Protected`**visitTable**(`thing`: [_Table_](table.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Table_](table.md)                                             |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:1467](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L1467)

---

### visitTableAlias

▸ `Protected`**visitTableAlias**(`thing`: [_TableAlias_](nodes.tablealias.md),
`col`: [_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_TableAlias_](nodes.tablealias.md)                             |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:1479](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L1479)

---

### visitTrue

▸ `Protected`**visitTrue**(`_`: [_True_](nodes.true.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name  | Type                                                            |
| ----- | --------------------------------------------------------------- |
| `_`   | [_True_](nodes.true.md)                                         |
| `col` | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:1489](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L1489)

---

### visitUnaryOperation

▸ `Protected`**visitUnaryOperation**(`thing`:
[_UnaryOperation_](nodes.unaryoperation.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_UnaryOperation_](nodes.unaryoperation.md)                     |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:1493](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L1493)

---

### visitUnion

▸ `Protected`**visitUnion**(`thing`: [_Union_](nodes.union.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Union_](nodes.union.md)                                       |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:1505](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L1505)

---

### visitUnionAll

▸ `Protected`**visitUnionAll**(`thing`: [_UnionAll_](nodes.unionall.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_UnionAll_](nodes.unionall.md)                                 |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:1513](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L1513)

---

### visitUnqualifiedColumn

▸ `Protected`**visitUnqualifiedColumn**(`thing`:
[_UnqualifiedColumn_](nodes.unqualifiedcolumn.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_UnqualifiedColumn_](nodes.unqualifiedcolumn.md)               |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:1521](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L1521)

---

### visitUpdateStatement

▸ `Protected`**visitUpdateStatement**(`thing`:
[_UpdateStatement_](nodes.updatestatement.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_UpdateStatement_](nodes.updatestatement.md)                   |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:1528](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L1528)

---

### visitValuesList

▸ `Protected`**visitValuesList**(`thing`: [_ValuesList_](nodes.valueslist.md),
`col`: [_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_ValuesList_](nodes.valueslist.md)                             |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:1549](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L1549)

---

### visitWhen

▸ `Protected`**visitWhen**(`thing`: [_When_](nodes.when.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_When_](nodes.when.md)                                         |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:1578](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L1578)

---

### visitWindow

▸ `Protected`**visitWindow**(`thing`: [_Window_](nodes.window.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_Window_](nodes.window.md)                                     |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:1589](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L1589)

---

### visitWith

▸ `Protected`**visitWith**(`thing`: [_With_](nodes.with.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_With_](nodes.with.md)                                         |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:1620](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L1620)

---

### visitWithRecursive

▸ `Protected`**visitWithRecursive**(`thing`:
[_WithRecursive_](nodes.withrecursive.md), `col`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `thing` | [_WithRecursive_](nodes.withrecursive.md)                       |
| `col`   | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Inherited from: [ToSQL](visitors.tosql.md)

Defined in:
[src/visitors/ToSQL.ts:1629](https://github.com/sequeljs/ast/blob/6632050/src/visitors/ToSQL.ts#L1629)
