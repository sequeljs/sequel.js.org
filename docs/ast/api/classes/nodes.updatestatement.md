---
id: 'nodes.updatestatement'
title: 'Class: UpdateStatement'
sidebar_label: 'UpdateStatement'
hide_title: true
---

# Class: UpdateStatement

[Nodes](../modules/nodes.md).UpdateStatement

## Hierarchy

- [_Node_](nodes.node.md)

  ↳ **UpdateStatement**

## Constructors

### constructor

\+ **new UpdateStatement**(): [_UpdateStatement_](nodes.updatestatement.md)

**Returns:** [_UpdateStatement_](nodes.updatestatement.md)

Inherited from: [Node](nodes.node.md)

## Properties

### key

• **key**: _any_= null

Defined in: @sequeljs/ast/src/nodes/UpdateStatement.ts:9

---

### limit

• **limit**: _any_= null

Defined in: @sequeljs/ast/src/nodes/UpdateStatement.ts:11

---

### offset

• **offset**: _any_= null

Defined in: @sequeljs/ast/src/nodes/UpdateStatement.ts:13

---

### orders

• **orders**: _any_[]

Defined in: @sequeljs/ast/src/nodes/UpdateStatement.ts:15

---

### relation

• **relation**: _null_ \| [_Table_](table.md) \|
[_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md) \|
[_JoinSource_](nodes.joinsource.md)= null

Defined in: @sequeljs/ast/src/nodes/UpdateStatement.ts:17

---

### values

• **values**: _any_[]

Defined in: @sequeljs/ast/src/nodes/UpdateStatement.ts:19

---

### wheres

• **wheres**: _any_[]

Defined in: @sequeljs/ast/src/nodes/UpdateStatement.ts:21

## Accessors

### value

• **value**(`expr`: _any_): _void_

#### Parameters:

| Name   | Type  |
| ------ | ----- |
| `expr` | _any_ |

**Returns:** _void_

Defined in: @sequeljs/ast/src/nodes/UpdateStatement.ts:23

---

### where

• **where**(`expr`: _any_): _void_

#### Parameters:

| Name   | Type  |
| ------ | ----- |
| `expr` | _any_ |

**Returns:** _void_

Defined in: @sequeljs/ast/src/nodes/UpdateStatement.ts:27

## Methods

### and

▸ **and**(`right`: _any_): [_And_](nodes.and.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `right` | _any_ |

**Returns:** [_And_](nodes.and.md)

Inherited from: [Node](nodes.node.md)

Defined in: @sequeljs/ast/src/mixins/NodeMethods.ts:11

---

### coalesce

▸ **coalesce**(...`exprs`: _any_[]):
[_NamedSQLFunction_](nodes.namedsqlfunction.md)

#### Parameters:

| Name       | Type    |
| ---------- | ------- |
| `...exprs` | _any_[] |

**Returns:** [_NamedSQLFunction_](nodes.namedsqlfunction.md)

Inherited from: [Node](nodes.node.md)

Defined in: @sequeljs/ast/src/mixins/FactoryMethods.ts:22

---

### createAnd

▸ **createAnd**(`clauses`: _any_[]): [_And_](nodes.and.md)

#### Parameters:

| Name      | Type    |
| --------- | ------- |
| `clauses` | _any_[] |

**Returns:** [_And_](nodes.and.md)

Inherited from: [Node](nodes.node.md)

Defined in: @sequeljs/ast/src/mixins/FactoryMethods.ts:26

---

### createFalse

▸ **createFalse**(): [_False_](nodes.false.md)

**Returns:** [_False_](nodes.false.md)

Inherited from: [Node](nodes.node.md)

Defined in: @sequeljs/ast/src/mixins/FactoryMethods.ts:30

---

### createJoin

▸ **createJoin**(`to`: _null_ \| _string_ \| [_Table_](table.md) \|
[_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md)):
[_InnerJoin_](nodes.innerjoin.md)

#### Parameters:

| Name | Type                                                                                                                    |
| ---- | ----------------------------------------------------------------------------------------------------------------------- |
| `to` | _null_ \| _string_ \| [_Table_](table.md) \| [_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md) |

**Returns:** [_InnerJoin_](nodes.innerjoin.md)

Inherited from: [Node](nodes.node.md)

Defined in: @sequeljs/ast/src/mixins/FactoryMethods.ts:34

▸ **createJoin**(`to`: _null_ \| _string_ \| [_Table_](table.md) \|
[_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md),
`constraint`: _any_): [_InnerJoin_](nodes.innerjoin.md)

#### Parameters:

| Name         | Type                                                                                                                    |
| ------------ | ----------------------------------------------------------------------------------------------------------------------- |
| `to`         | _null_ \| _string_ \| [_Table_](table.md) \| [_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md) |
| `constraint` | _any_                                                                                                                   |

**Returns:** [_InnerJoin_](nodes.innerjoin.md)

Inherited from: [Node](nodes.node.md)

Defined in: @sequeljs/ast/src/mixins/FactoryMethods.ts:35

▸ **createJoin**(`to`: _null_ \| _string_ \| [_Table_](table.md) \|
[_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md),
`constraint`: _any_, `Klass`: _typeof_
[_FullOuterJoin_](nodes.fullouterjoin.md)):
[_FullOuterJoin_](nodes.fullouterjoin.md)

#### Parameters:

| Name         | Type                                                                                                                    |
| ------------ | ----------------------------------------------------------------------------------------------------------------------- |
| `to`         | _null_ \| _string_ \| [_Table_](table.md) \| [_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md) |
| `constraint` | _any_                                                                                                                   |
| `Klass`      | _typeof_ [_FullOuterJoin_](nodes.fullouterjoin.md)                                                                      |

**Returns:** [_FullOuterJoin_](nodes.fullouterjoin.md)

Inherited from: [Node](nodes.node.md)

Defined in: @sequeljs/ast/src/mixins/FactoryMethods.ts:39

▸ **createJoin**(`to`: _null_ \| _string_ \| [_Table_](table.md) \|
[_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md),
`constraint`: _any_, `Klass`: _typeof_ [_InnerJoin_](nodes.innerjoin.md)):
[_InnerJoin_](nodes.innerjoin.md)

#### Parameters:

| Name         | Type                                                                                                                    |
| ------------ | ----------------------------------------------------------------------------------------------------------------------- |
| `to`         | _null_ \| _string_ \| [_Table_](table.md) \| [_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md) |
| `constraint` | _any_                                                                                                                   |
| `Klass`      | _typeof_ [_InnerJoin_](nodes.innerjoin.md)                                                                              |

**Returns:** [_InnerJoin_](nodes.innerjoin.md)

Inherited from: [Node](nodes.node.md)

Defined in: @sequeljs/ast/src/mixins/FactoryMethods.ts:44

▸ **createJoin**(`to`: _null_ \| _string_ \| [_Table_](table.md) \|
[_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md),
`constraint`: _any_, `Klass`: _typeof_ [_OuterJoin_](nodes.outerjoin.md)):
[_OuterJoin_](nodes.outerjoin.md)

#### Parameters:

| Name         | Type                                                                                                                    |
| ------------ | ----------------------------------------------------------------------------------------------------------------------- |
| `to`         | _null_ \| _string_ \| [_Table_](table.md) \| [_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md) |
| `constraint` | _any_                                                                                                                   |
| `Klass`      | _typeof_ [_OuterJoin_](nodes.outerjoin.md)                                                                              |

**Returns:** [_OuterJoin_](nodes.outerjoin.md)

Inherited from: [Node](nodes.node.md)

Defined in: @sequeljs/ast/src/mixins/FactoryMethods.ts:49

▸ **createJoin**(`to`: _null_ \| _string_ \| [_Table_](table.md) \|
[_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md),
`constraint`: _any_, `Klass`: _typeof_
[_RightOuterJoin_](nodes.rightouterjoin.md)):
[_RightOuterJoin_](nodes.rightouterjoin.md)

#### Parameters:

| Name         | Type                                                                                                                    |
| ------------ | ----------------------------------------------------------------------------------------------------------------------- |
| `to`         | _null_ \| _string_ \| [_Table_](table.md) \| [_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md) |
| `constraint` | _any_                                                                                                                   |
| `Klass`      | _typeof_ [_RightOuterJoin_](nodes.rightouterjoin.md)                                                                    |

**Returns:** [_RightOuterJoin_](nodes.rightouterjoin.md)

Inherited from: [Node](nodes.node.md)

Defined in: @sequeljs/ast/src/mixins/FactoryMethods.ts:54

▸ **createJoin**(`to`: _null_ \| _string_ \| [_Table_](table.md) \|
[_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md),
`constraint`: _any_, `Klass`: _typeof_ [_StringJoin_](nodes.stringjoin.md)):
[_StringJoin_](nodes.stringjoin.md)

#### Parameters:

| Name         | Type                                                                                                                    |
| ------------ | ----------------------------------------------------------------------------------------------------------------------- |
| `to`         | _null_ \| _string_ \| [_Table_](table.md) \| [_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md) |
| `constraint` | _any_                                                                                                                   |
| `Klass`      | _typeof_ [_StringJoin_](nodes.stringjoin.md)                                                                            |

**Returns:** [_StringJoin_](nodes.stringjoin.md)

Inherited from: [Node](nodes.node.md)

Defined in: @sequeljs/ast/src/mixins/FactoryMethods.ts:59

---

### createOn

▸ **createOn**(`expr`: _any_): [_On_](nodes.on.md)

#### Parameters:

| Name   | Type  |
| ------ | ----- |
| `expr` | _any_ |

**Returns:** [_On_](nodes.on.md)

Inherited from: [Node](nodes.node.md)

Defined in: @sequeljs/ast/src/mixins/FactoryMethods.ts:72

---

### createStringJoin

▸ **createStringJoin**(`to`: _null_ \| _string_ \| [_Table_](table.md) \|
[_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md)):
[_StringJoin_](nodes.stringjoin.md)

#### Parameters:

| Name | Type                                                                                                                    |
| ---- | ----------------------------------------------------------------------------------------------------------------------- |
| `to` | _null_ \| _string_ \| [_Table_](table.md) \| [_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md) |

**Returns:** [_StringJoin_](nodes.stringjoin.md)

Inherited from: [Node](nodes.node.md)

Defined in: @sequeljs/ast/src/mixins/FactoryMethods.ts:76

---

### createTableAlias

▸ **createTableAlias**(`relation`: [_Table_](table.md) \|
[_TableAlias_](nodes.tablealias.md) \| [_Grouping_](nodes.grouping.md), `name`:
_string_ \| [_SQLLiteral_](nodes.sqlliteral.md)):
[_TableAlias_](nodes.tablealias.md)

#### Parameters:

| Name       | Type                                                                                          |
| ---------- | --------------------------------------------------------------------------------------------- |
| `relation` | [_Table_](table.md) \| [_TableAlias_](nodes.tablealias.md) \| [_Grouping_](nodes.grouping.md) |
| `name`     | _string_ \| [_SQLLiteral_](nodes.sqlliteral.md)                                               |

**Returns:** [_TableAlias_](nodes.tablealias.md)

Inherited from: [Node](nodes.node.md)

Defined in: @sequeljs/ast/src/mixins/FactoryMethods.ts:80

---

### createTrue

▸ **createTrue**(): [_True_](nodes.true.md)

**Returns:** [_True_](nodes.true.md)

Inherited from: [Node](nodes.node.md)

Defined in: @sequeljs/ast/src/mixins/FactoryMethods.ts:87

---

### grouping

▸ **grouping**(`expr`: _any_): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name   | Type  |
| ------ | ----- |
| `expr` | _any_ |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Node](nodes.node.md)

Defined in: @sequeljs/ast/src/mixins/FactoryMethods.ts:91

---

### lower

▸ **lower**(`column`: _any_): [_NamedSQLFunction_](nodes.namedsqlfunction.md)

#### Parameters:

| Name     | Type  |
| -------- | ----- |
| `column` | _any_ |

**Returns:** [_NamedSQLFunction_](nodes.namedsqlfunction.md)

Inherited from: [Node](nodes.node.md)

Defined in: @sequeljs/ast/src/mixins/FactoryMethods.ts:95

---

### not

▸ **not**(): [_Not_](nodes.not.md)

**Returns:** [_Not_](nodes.not.md)

Inherited from: [Node](nodes.node.md)

Defined in: @sequeljs/ast/src/mixins/NodeMethods.ts:15

---

### or

▸ **or**<T\>(`right`: T): [_Grouping_](nodes.grouping.md)

#### Type parameters:

| Name | Type                                            |
| ---- | ----------------------------------------------- |
| `T`  | [_Visitable_](../modules/visitors.md#visitable) |

#### Parameters:

| Name    | Type |
| ------- | ---- |
| `right` | T    |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Node](nodes.node.md)

Defined in: @sequeljs/ast/src/mixins/NodeMethods.ts:19

---

### toSQL

▸ **toSQL**(`engine?`: _null_ \|
[_Engine_](../interfaces/interfaces.engine.md)): _any_

#### Parameters:

| Name     | Type                                                     | Default value |
| -------- | -------------------------------------------------------- | ------------- |
| `engine` | _null_ \| [_Engine_](../interfaces/interfaces.engine.md) | ...           |

**Returns:** _any_

Inherited from: [Node](nodes.node.md)

Defined in: @sequeljs/ast/src/nodes/Node.ts:16