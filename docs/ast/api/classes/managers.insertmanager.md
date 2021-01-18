---
id: 'managers.insertmanager'
title: 'Class: InsertManager'
sidebar_label: 'InsertManager'
hide_title: true
---

# Class: InsertManager

[Managers](../modules/managers.md).InsertManager

## Hierarchy

- [_TreeManager_](managers.treemanager.md)<[_InsertManager_](managers.insertmanager.md),
  [_InsertStatement_](nodes.insertstatement.md)\>

  ↳ **InsertManager**

## Constructors

### constructor

\+ **new InsertManager**(): [_InsertManager_](managers.insertmanager.md)

**Returns:** [_InsertManager_](managers.insertmanager.md)

Inherited from: [TreeManager](managers.treemanager.md)

Defined in: @sequeljs/ast/src/managers/InsertManager.ts:21

## Properties

### ast

• `Readonly` **ast**: [_InsertStatement_](nodes.insertstatement.md)

Inherited from:
[TreeManager](managers.treemanager.md).[ast](managers.treemanager.md#ast)

Defined in: @sequeljs/ast/src/managers/TreeManager.ts:15

---

### ctx

• `Protected` **ctx**: [_InsertStatement_](nodes.insertstatement.md)

Overrides:
[TreeManager](managers.treemanager.md).[ctx](managers.treemanager.md#ctx)

Defined in: @sequeljs/ast/src/managers/InsertManager.ts:13

## Accessors

### columns

• **columns**(): [_Attribute_](attributes.attribute.md)[]

**Returns:** [_Attribute_](attributes.attribute.md)[]

Defined in: @sequeljs/ast/src/managers/InsertManager.ts:15

---

### values

• **values**(`val`: _any_): _void_

#### Parameters:

| Name  | Type  |
| ----- | ----- |
| `val` | _any_ |

**Returns:** _void_

Defined in: @sequeljs/ast/src/managers/InsertManager.ts:19

## Methods

### coalesce

▸ **coalesce**(...`exprs`: _any_[]):
[_NamedSQLFunction_](nodes.namedsqlfunction.md)

#### Parameters:

| Name       | Type    |
| ---------- | ------- |
| `...exprs` | _any_[] |

**Returns:** [_NamedSQLFunction_](nodes.namedsqlfunction.md)

Inherited from: [TreeManager](managers.treemanager.md)

Defined in: @sequeljs/ast/src/mixins/FactoryMethods.ts:22

---

### createAnd

▸ **createAnd**(`clauses`: _any_[]): [_And_](nodes.and.md)

#### Parameters:

| Name      | Type    |
| --------- | ------- |
| `clauses` | _any_[] |

**Returns:** [_And_](nodes.and.md)

Inherited from: [TreeManager](managers.treemanager.md)

Defined in: @sequeljs/ast/src/mixins/FactoryMethods.ts:26

---

### createFalse

▸ **createFalse**(): [_False_](nodes.false.md)

**Returns:** [_False_](nodes.false.md)

Inherited from: [TreeManager](managers.treemanager.md)

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

Inherited from: [TreeManager](managers.treemanager.md)

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

Inherited from: [TreeManager](managers.treemanager.md)

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

Inherited from: [TreeManager](managers.treemanager.md)

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

Inherited from: [TreeManager](managers.treemanager.md)

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

Inherited from: [TreeManager](managers.treemanager.md)

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

Inherited from: [TreeManager](managers.treemanager.md)

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

Inherited from: [TreeManager](managers.treemanager.md)

Defined in: @sequeljs/ast/src/mixins/FactoryMethods.ts:59

---

### createOn

▸ **createOn**(`expr`: _any_): [_On_](nodes.on.md)

#### Parameters:

| Name   | Type  |
| ------ | ----- |
| `expr` | _any_ |

**Returns:** [_On_](nodes.on.md)

Inherited from: [TreeManager](managers.treemanager.md)

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

Inherited from: [TreeManager](managers.treemanager.md)

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

Inherited from: [TreeManager](managers.treemanager.md)

Defined in: @sequeljs/ast/src/mixins/FactoryMethods.ts:80

---

### createTrue

▸ **createTrue**(): [_True_](nodes.true.md)

**Returns:** [_True_](nodes.true.md)

Inherited from: [TreeManager](managers.treemanager.md)

Defined in: @sequeljs/ast/src/mixins/FactoryMethods.ts:87

---

### createValues

▸ **createValues**(`values`: _any_): [_ValuesList_](nodes.valueslist.md)

#### Parameters:

| Name     | Type  |
| -------- | ----- |
| `values` | _any_ |

**Returns:** [_ValuesList_](nodes.valueslist.md)

Defined in: @sequeljs/ast/src/managers/InsertManager.ts:29

---

### createValuesList

▸ **createValuesList**(`rows`: _any_[]): [_ValuesList_](nodes.valueslist.md)

#### Parameters:

| Name   | Type    |
| ------ | ------- |
| `rows` | _any_[] |

**Returns:** [_ValuesList_](nodes.valueslist.md)

Defined in: @sequeljs/ast/src/managers/InsertManager.ts:33

---

### grouping

▸ **grouping**(`expr`: _any_): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name   | Type  |
| ------ | ----- |
| `expr` | _any_ |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [TreeManager](managers.treemanager.md)

Defined in: @sequeljs/ast/src/mixins/FactoryMethods.ts:91

---

### insert

▸ **insert**(`fields`: _any_): [_InsertManager_](managers.insertmanager.md)

#### Parameters:

| Name     | Type  |
| -------- | ----- |
| `fields` | _any_ |

**Returns:** [_InsertManager_](managers.insertmanager.md)

Defined in: @sequeljs/ast/src/managers/InsertManager.ts:37

---

### into

▸ **into**(`table`: [_Table_](table.md)):
[_InsertManager_](managers.insertmanager.md)

#### Parameters:

| Name    | Type                |
| ------- | ------------------- |
| `table` | [_Table_](table.md) |

**Returns:** [_InsertManager_](managers.insertmanager.md)

Defined in: @sequeljs/ast/src/managers/InsertManager.ts:61

---

### lower

▸ **lower**(`column`: _any_): [_NamedSQLFunction_](nodes.namedsqlfunction.md)

#### Parameters:

| Name     | Type  |
| -------- | ----- |
| `column` | _any_ |

**Returns:** [_NamedSQLFunction_](nodes.namedsqlfunction.md)

Inherited from: [TreeManager](managers.treemanager.md)

Defined in: @sequeljs/ast/src/mixins/FactoryMethods.ts:95

---

### select

▸ **select**(`select`: _any_): _void_

#### Parameters:

| Name     | Type  |
| -------- | ----- |
| `select` | _any_ |

**Returns:** _void_

Defined in: @sequeljs/ast/src/managers/InsertManager.ts:67

---

### toSQL

▸ **toSQL**(`engine?`: _null_ \|
[_Engine_](../interfaces/interfaces.engine.md)): _null_ \| _string_

#### Parameters:

| Name     | Type                                                     | Default value |
| -------- | -------------------------------------------------------- | ------------- |
| `engine` | _null_ \| [_Engine_](../interfaces/interfaces.engine.md) | ...           |

**Returns:** _null_ \| _string_

Inherited from: [TreeManager](managers.treemanager.md)

Defined in: @sequeljs/ast/src/managers/TreeManager.ts:23

---

### where

▸ **where**(`expr`: _any_): [_InsertManager_](managers.insertmanager.md)

#### Parameters:

| Name   | Type  |
| ------ | ----- |
| `expr` | _any_ |

**Returns:** [_InsertManager_](managers.insertmanager.md)

Inherited from: [TreeManager](managers.treemanager.md)

Defined in: @sequeljs/ast/src/managers/TreeManager.ts:44
