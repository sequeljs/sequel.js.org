---
id: 'visitors.tosql'
title: 'Class: ToSQL'
sidebar_label: 'ToSQL'
hide_title: true
---

# Class: ToSQL

[Visitors](../modules/visitors.md).ToSQL

## Hierarchy

- [_Visitor_](visitors.visitor.md)

  ↳ **ToSQL**

  ↳↳ [_MySQL_](visitors.mysql.md)

  ↳↳ [_PostgreSQL_](visitors.postgresql.md)

  ↳↳ [_WhereSQL_](visitors.wheresql.md)

## Constructors

### constructor

\+ **new ToSQL**(`connection`:
[_Connection_](../interfaces/interfaces.connection.md)):
[_ToSQL_](visitors.tosql.md)

#### Parameters:

| Name         | Type                                                   |
| ------------ | ------------------------------------------------------ |
| `connection` | [_Connection_](../interfaces/interfaces.connection.md) |

**Returns:** [_ToSQL_](visitors.tosql.md)

Inherited from: [Visitor](visitors.visitor.md)

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:154

## Properties

### connection

• **connection**: [_Connection_](../interfaces/interfaces.connection.md)

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:154

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

Inherited from: [Visitor](visitors.visitor.md)

Defined in: @sequeljs/ast/src/visitors/Visitor.ts:11

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:169

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:191

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:206

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:222

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:237

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:162

---

### hasJoinSources

▸ `Protected`**hasJoinSources**(`thing`: _any_): _boolean_

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `thing` | _any_ |

**Returns:** _boolean_

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:248

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:254

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:260

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:274

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:307

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:324

---

### isUnboundable

▸ `Protected`**isUnboundable**(`value`: _any_): _boolean_

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `value` | _any_ |

**Returns:** _boolean_

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:344

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:348

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:352

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:406

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:365

▸ `Protected`**prepareDeleteUpdateStatement**(`thing`:
[_UpdateStatement_](nodes.updatestatement.md)):
[_UpdateStatement_](nodes.updatestatement.md)

#### Parameters:

| Name    | Type                                          |
| ------- | --------------------------------------------- |
| `thing` | [_UpdateStatement_](nodes.updatestatement.md) |

**Returns:** [_UpdateStatement_](nodes.updatestatement.md)

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:368

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:410

---

### quote

▸ `Protected`**quote**(`value`:
[_Visitable_](../modules/visitors.md#visitable)): _string_ \| _number_

#### Parameters:

| Name    | Type                                            |
| ------- | ----------------------------------------------- |
| `value` | [_Visitable_](../modules/visitors.md#visitable) |

**Returns:** _string_ \| _number_

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:414

---

### quoteColumnName

▸ `Protected`**quoteColumnName**(`name`: _string_ \| _number_ \|
[_SQLLiteral_](nodes.sqlliteral.md)): _string_

#### Parameters:

| Name   | Type                                                        |
| ------ | ----------------------------------------------------------- |
| `name` | _string_ \| _number_ \| [_SQLLiteral_](nodes.sqlliteral.md) |

**Returns:** _string_

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:422

---

### quoteTableName

▸ `Protected`**quoteTableName**(`name`: _string_ \| _number_ \|
[_SQLLiteral_](nodes.sqlliteral.md)): _string_

#### Parameters:

| Name   | Type                                                        |
| ------ | ----------------------------------------------------------- |
| `name` | _string_ \| _number_ \| [_SQLLiteral_](nodes.sqlliteral.md) |

**Returns:** _string_

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:430

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:438

---

### sanitizeAsSQLComment

▸ `Protected`**sanitizeAsSQLComment**(`value`: _any_): _string_ \|
[_SQLLiteral_](nodes.sqlliteral.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `value` | _any_ |

**Returns:** _string_ \| [_SQLLiteral_](nodes.sqlliteral.md)

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:453

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:461

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

Inherited from: [Visitor](visitors.visitor.md)

Defined in: @sequeljs/ast/src/visitors/Visitor.ts:18

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:465

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:469

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:473

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:477

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:487

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:491

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:509

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:533

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:540

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:547

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:554

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:561

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:568

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:575

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:579

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:589

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:593

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:597

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:601

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:605

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:630

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:634

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:645

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:649

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:653

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:657

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:677

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:681

---

### visitDistinctOn

▸ `Protected`**visitDistinctOn**(`_1`: [_DistinctOn_](nodes.distincton.md),
`_2`: [_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name | Type                                                            |
| ---- | --------------------------------------------------------------- |
| `_1` | [_DistinctOn_](nodes.distincton.md)                             |
| `_2` | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:685

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:691

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:695

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:710

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:719

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:745

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:755

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:770

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:782

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:786

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:798

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:812

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:822

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:835

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:839

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:853

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:894

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:907

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:921

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:957

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:967

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:990

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:1013

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:1031

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:1041

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:1054

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:1063

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:1067

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:1082

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:1086

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:1090

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:1097

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:1118

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:1128

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:1138

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:1164

---

### visitNotRegexp

▸ `Protected`**visitNotRegexp**(`_1`: [_NotRegexp_](nodes.notregexp.md), `_2`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name | Type                                                            |
| ---- | --------------------------------------------------------------- |
| `_1` | [_NotRegexp_](nodes.notregexp.md)                               |
| `_2` | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:1205

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:1213

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:1209

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:1217

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:1226

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:1235

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:1249

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:1259

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:1270

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:1288

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:1300

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:1304

---

### visitRegexp

▸ `Protected`**visitRegexp**(`_1`: [_Regexp_](nodes.regexp.md), `_2`:
[_Collector_](../interfaces/collectors.collector.md)<_string_\>):
[_Collector_](../interfaces/collectors.collector.md)<_string_\>

#### Parameters:

| Name | Type                                                            |
| ---- | --------------------------------------------------------------- |
| `_1` | [_Regexp_](nodes.regexp.md)                                     |
| `_2` | [_Collector_](../interfaces/collectors.collector.md)<_string_\> |

**Returns:** [_Collector_](../interfaces/collectors.collector.md)<_string_\>

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:1319

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:1323

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:1337

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:1443

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:1352

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:1395

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:1408

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:1447

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:1451

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:1455

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:1459

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:1463

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:1467

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:1479

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:1489

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:1493

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:1505

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:1513

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:1521

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:1528

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:1549

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:1578

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:1589

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:1620

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

Defined in: @sequeljs/ast/src/visitors/ToSQL.ts:1629
