---
id: 'managers.selectmanager'
title: 'Class: SelectManager'
sidebar_label: 'SelectManager'
hide_title: true
---

# Class: SelectManager

[Managers](../modules/managers.md).SelectManager

## Hierarchy

- [_TreeManager_](managers.treemanager.md)<[_SelectManager_](managers.selectmanager.md),
  [_SelectStatement_](nodes.selectstatement.md)\>

- _CRUD_

  ↳ **SelectManager**

## Constructors

### constructor

\+ **new SelectManager**(`table?`: _any_):
[_SelectManager_](managers.selectmanager.md)

#### Parameters:

| Name    | Type  | Default value |
| ------- | ----- | ------------- |
| `table` | _any_ | null          |

**Returns:** [_SelectManager_](managers.selectmanager.md)

Inherited from: [TreeManager](managers.treemanager.md)

Defined in: @sequeljs/ast/src/managers/SelectManager.ts:99

## Properties

### ast

• `Readonly` **ast**: [_SelectStatement_](nodes.selectstatement.md)

Inherited from:
[TreeManager](managers.treemanager.md).[ast](managers.treemanager.md#ast)

Defined in: @sequeljs/ast/src/managers/TreeManager.ts:15

---

### ctx

• `Protected` **ctx**: [_SelectCore_](nodes.selectcore.md)

Overrides:
[TreeManager](managers.treemanager.md).[ctx](managers.treemanager.md#ctx)

Defined in: @sequeljs/ast/src/managers/SelectManager.ts:47

## Accessors

### constraints

• **constraints**(): _any_[]

**Returns:** _any_[]

Defined in: @sequeljs/ast/src/managers/SelectManager.ts:49

---

### froms

• **froms**(): [_SelectCore_](nodes.selectcore.md)[]

**Returns:** [_SelectCore_](nodes.selectcore.md)[]

Defined in: @sequeljs/ast/src/managers/SelectManager.ts:53

---

### joinSources

• **joinSources**(): _any_

**Returns:** _any_

Defined in: @sequeljs/ast/src/managers/SelectManager.ts:57

---

### limit

• **limit**(): _any_

**Returns:** _any_

Defined in: @sequeljs/ast/src/managers/SelectManager.ts:61

• **limit**(`limit`: _any_): _void_

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `limit` | _any_ |

**Returns:** _void_

Defined in: @sequeljs/ast/src/managers/SelectManager.ts:65

---

### locked

• **locked**(): _any_

**Returns:** _any_

Defined in: @sequeljs/ast/src/managers/SelectManager.ts:69

---

### offset

• **offset**(): _any_

**Returns:** _any_

Defined in: @sequeljs/ast/src/managers/SelectManager.ts:73

• **offset**(`amount`: _any_): _void_

#### Parameters:

| Name     | Type  |
| -------- | ----- |
| `amount` | _any_ |

**Returns:** _void_

Defined in: @sequeljs/ast/src/managers/SelectManager.ts:77

---

### orders

• **orders**(): _any_[]

**Returns:** _any_[]

Defined in: @sequeljs/ast/src/managers/SelectManager.ts:81

---

### projections

• **projections**(): _any_[]

**Returns:** _any_[]

Defined in: @sequeljs/ast/src/managers/SelectManager.ts:85

• **projections**(`projections`: _any_[]): _void_

#### Parameters:

| Name          | Type    |
| ------------- | ------- |
| `projections` | _any_[] |

**Returns:** _void_

Defined in: @sequeljs/ast/src/managers/SelectManager.ts:89

---

### source

• **source**(): [_JoinSource_](nodes.joinsource.md)

**Returns:** [_JoinSource_](nodes.joinsource.md)

Defined in: @sequeljs/ast/src/managers/SelectManager.ts:93

---

### taken

• **taken**(): _any_

**Returns:** _any_

Defined in: @sequeljs/ast/src/managers/SelectManager.ts:97

## Methods

### as

▸ **as**(`other`: _any_): [_TableAlias_](nodes.tablealias.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_TableAlias_](nodes.tablealias.md)

Defined in: @sequeljs/ast/src/managers/SelectManager.ts:127

---

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

### collapse

▸ `Private`**collapse**(`exprs`: _any_[]): _any_

#### Parameters:

| Name    | Type    |
| ------- | ------- |
| `exprs` | _any_[] |

**Returns:** _any_

Defined in: @sequeljs/ast/src/managers/SelectManager.ts:109

---

### comment

▸ **comment**(...`values`: _any_): [_SelectManager_](managers.selectmanager.md)

#### Parameters:

| Name        | Type  |
| ----------- | ----- |
| `...values` | _any_ |

**Returns:** [_SelectManager_](managers.selectmanager.md)

Defined in: @sequeljs/ast/src/managers/SelectManager.ts:131

---

### compileDelete

▸ **compileDelete**(): [_DeleteManager_](managers.deletemanager.md)

**Returns:** [_DeleteManager_](managers.deletemanager.md)

Defined in: @sequeljs/ast/src/mixins/CRUD.ts:49

---

### compileInsert

▸ **compileInsert**(`values`: _any_):
[_InsertManager_](managers.insertmanager.md)

#### Parameters:

| Name     | Type  |
| -------- | ----- |
| `values` | _any_ |

**Returns:** [_InsertManager_](managers.insertmanager.md)

Defined in: @sequeljs/ast/src/mixins/CRUD.ts:37

---

### compileUpdate

▸ **compileUpdate**(`values`: _any_, `pk`: _any_):
[_UpdateManager_](managers.updatemanager.md)

#### Parameters:

| Name     | Type  |
| -------- | ----- |
| `values` | _any_ |
| `pk`     | _any_ |

**Returns:** [_UpdateManager_](managers.updatemanager.md)

Defined in: @sequeljs/ast/src/mixins/CRUD.ts:15

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

### createInsert

▸ **createInsert**(): [_InsertManager_](managers.insertmanager.md)

**Returns:** [_InsertManager_](managers.insertmanager.md)

Defined in: @sequeljs/ast/src/mixins/CRUD.ts:45

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

### distinct

▸ **distinct**(`value?`: _boolean_):
[_SelectManager_](managers.selectmanager.md)

#### Parameters:

| Name    | Type      | Default value |
| ------- | --------- | ------------- |
| `value` | _boolean_ | true          |

**Returns:** [_SelectManager_](managers.selectmanager.md)

Defined in: @sequeljs/ast/src/managers/SelectManager.ts:137

---

### distinctOn

▸ **distinctOn**(`value`: _any_): [_SelectManager_](managers.selectmanager.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `value` | _any_ |

**Returns:** [_SelectManager_](managers.selectmanager.md)

Defined in: @sequeljs/ast/src/managers/SelectManager.ts:143

---

### except

▸ **except**(`other`:
[_TreeManager_](managers.treemanager.md)<[_SelectManager_](managers.selectmanager.md),
[_SelectStatement_](nodes.selectstatement.md)\>): [_Except_](nodes.except.md)

#### Parameters:

| Name    | Type                                                                                                                                   |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `other` | [_TreeManager_](managers.treemanager.md)<[_SelectManager_](managers.selectmanager.md), [_SelectStatement_](nodes.selectstatement.md)\> |

**Returns:** [_Except_](nodes.except.md)

Defined in: @sequeljs/ast/src/managers/SelectManager.ts:149

---

### exists

▸ **exists**(): [_Exists_](nodes.exists.md)

**Returns:** [_Exists_](nodes.exists.md)

Defined in: @sequeljs/ast/src/managers/SelectManager.ts:153

---

### from

▸ **from**(`table`: _any_): [_SelectManager_](managers.selectmanager.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `table` | _any_ |

**Returns:** [_SelectManager_](managers.selectmanager.md)

Defined in: @sequeljs/ast/src/managers/SelectManager.ts:157

---

### group

▸ **group**(...`columns`: _any_[]): [_SelectManager_](managers.selectmanager.md)

#### Parameters:

| Name         | Type    |
| ------------ | ------- |
| `...columns` | _any_[] |

**Returns:** [_SelectManager_](managers.selectmanager.md)

Defined in: @sequeljs/ast/src/managers/SelectManager.ts:169

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

### having

▸ **having**(`expr`: _any_): [_SelectManager_](managers.selectmanager.md)

#### Parameters:

| Name   | Type  |
| ------ | ----- |
| `expr` | _any_ |

**Returns:** [_SelectManager_](managers.selectmanager.md)

Defined in: @sequeljs/ast/src/managers/SelectManager.ts:183

---

### intersect

▸ **intersect**(`other`:
[_TreeManager_](managers.treemanager.md)<[_SelectManager_](managers.selectmanager.md),
[_SelectStatement_](nodes.selectstatement.md)\>):
[_Intersect_](nodes.intersect.md)

#### Parameters:

| Name    | Type                                                                                                                                   |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `other` | [_TreeManager_](managers.treemanager.md)<[_SelectManager_](managers.selectmanager.md), [_SelectStatement_](nodes.selectstatement.md)\> |

**Returns:** [_Intersect_](nodes.intersect.md)

Defined in: @sequeljs/ast/src/managers/SelectManager.ts:189

---

### join

▸ **join**(`relation`: _null_ \| _string_ \| [_Table_](table.md) \|
[_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md),
`klass?`: _typeof_ [_Join_](nodes.join.md)):
[_SelectManager_](managers.selectmanager.md)

#### Parameters:

| Name       | Type                                                                                                                    | Default value |
| ---------- | ----------------------------------------------------------------------------------------------------------------------- | ------------- |
| `relation` | _null_ \| _string_ \| [_Table_](table.md) \| [_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md) | -             |
| `klass`    | _typeof_ [_Join_](nodes.join.md)                                                                                        | ...           |

**Returns:** [_SelectManager_](managers.selectmanager.md)

Defined in: @sequeljs/ast/src/managers/SelectManager.ts:193

---

### lateral

▸ **lateral**(`tableName?`: _null_ \| _string_): [_Lateral_](nodes.lateral.md)

#### Parameters:

| Name        | Type               | Default value |
| ----------- | ------------------ | ------------- |
| `tableName` | _null_ \| _string_ | null          |

**Returns:** [_Lateral_](nodes.lateral.md)

Defined in: @sequeljs/ast/src/managers/SelectManager.ts:218

---

### lock

▸ **lock**(`locking?`: _any_): [_SelectManager_](managers.selectmanager.md)

#### Parameters:

| Name      | Type  | Default value |
| --------- | ----- | ------------- |
| `locking` | _any_ | ...           |

**Returns:** [_SelectManager_](managers.selectmanager.md)

Defined in: @sequeljs/ast/src/managers/SelectManager.ts:224

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

### minus

▸ **minus**(`other`:
[_TreeManager_](managers.treemanager.md)<[_SelectManager_](managers.selectmanager.md),
[_SelectStatement_](nodes.selectstatement.md)\>): [_Except_](nodes.except.md)

#### Parameters:

| Name    | Type                                                                                                                                   |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `other` | [_TreeManager_](managers.treemanager.md)<[_SelectManager_](managers.selectmanager.md), [_SelectStatement_](nodes.selectstatement.md)\> |

**Returns:** [_Except_](nodes.except.md)

Defined in: @sequeljs/ast/src/managers/SelectManager.ts:237

---

### on

▸ **on**(...`exprs`: _any_[]): [_SelectManager_](managers.selectmanager.md)

#### Parameters:

| Name       | Type    |
| ---------- | ------- |
| `...exprs` | _any_[] |

**Returns:** [_SelectManager_](managers.selectmanager.md)

Defined in: @sequeljs/ast/src/managers/SelectManager.ts:241

---

### optimizerHints

▸ **optimizerHints**(...`hints`: _any_[]):
[_SelectManager_](managers.selectmanager.md)

#### Parameters:

| Name       | Type    |
| ---------- | ------- |
| `...hints` | _any_[] |

**Returns:** [_SelectManager_](managers.selectmanager.md)

Defined in: @sequeljs/ast/src/managers/SelectManager.ts:249

---

### order

▸ **order**(...`expr`: _any_[]): [_SelectManager_](managers.selectmanager.md)

#### Parameters:

| Name      | Type    |
| --------- | ------- |
| `...expr` | _any_[] |

**Returns:** [_SelectManager_](managers.selectmanager.md)

Defined in: @sequeljs/ast/src/managers/SelectManager.ts:257

---

### outerJoin

▸ **outerJoin**(`relation`: _null_ \| [_Table_](table.md) \|
[_TableAlias_](nodes.tablealias.md)):
[_SelectManager_](managers.selectmanager.md)

#### Parameters:

| Name       | Type                                                                 |
| ---------- | -------------------------------------------------------------------- |
| `relation` | _null_ \| [_Table_](table.md) \| [_TableAlias_](nodes.tablealias.md) |

**Returns:** [_SelectManager_](managers.selectmanager.md)

Defined in: @sequeljs/ast/src/managers/SelectManager.ts:265

---

### project

▸ **project**(...`projections`: _any_[]):
[_SelectManager_](managers.selectmanager.md)

#### Parameters:

| Name             | Type    |
| ---------------- | ------- |
| `...projections` | _any_[] |

**Returns:** [_SelectManager_](managers.selectmanager.md)

Defined in: @sequeljs/ast/src/managers/SelectManager.ts:269

---

### skip

▸ **skip**(`amount`: _any_): [_SelectManager_](managers.selectmanager.md)

#### Parameters:

| Name     | Type  |
| -------- | ----- |
| `amount` | _any_ |

**Returns:** [_SelectManager_](managers.selectmanager.md)

Defined in: @sequeljs/ast/src/managers/SelectManager.ts:279

---

### take

▸ **take**(`limit`: _any_): [_SelectManager_](managers.selectmanager.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `limit` | _any_ |

**Returns:** [_SelectManager_](managers.selectmanager.md)

Defined in: @sequeljs/ast/src/managers/SelectManager.ts:285

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

### union

▸ **union**(`other`:
[_TreeManager_](managers.treemanager.md)<[_SelectManager_](managers.selectmanager.md),
[_SelectStatement_](nodes.selectstatement.md)\>): [_Union_](nodes.union.md)

#### Parameters:

| Name    | Type                                                                                                                                   |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `other` | [_TreeManager_](managers.treemanager.md)<[_SelectManager_](managers.selectmanager.md), [_SelectStatement_](nodes.selectstatement.md)\> |

**Returns:** [_Union_](nodes.union.md)

Defined in: @sequeljs/ast/src/managers/SelectManager.ts:295

---

### unionAll

▸ **unionAll**(`other`:
[_TreeManager_](managers.treemanager.md)<[_SelectManager_](managers.selectmanager.md),
[_SelectStatement_](nodes.selectstatement.md)\>):
[_UnionAll_](nodes.unionall.md)

#### Parameters:

| Name    | Type                                                                                                                                   |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `other` | [_TreeManager_](managers.treemanager.md)<[_SelectManager_](managers.selectmanager.md), [_SelectStatement_](nodes.selectstatement.md)\> |

**Returns:** [_UnionAll_](nodes.unionall.md)

Defined in: @sequeljs/ast/src/managers/SelectManager.ts:299

---

### where

▸ **where**(`expr`: _any_): [_SelectManager_](managers.selectmanager.md)

#### Parameters:

| Name   | Type  |
| ------ | ----- |
| `expr` | _any_ |

**Returns:** [_SelectManager_](managers.selectmanager.md)

Inherited from: [TreeManager](managers.treemanager.md)

Defined in: @sequeljs/ast/src/managers/TreeManager.ts:44

---

### whereSQL

▸ **whereSQL**(`engine?`: _null_ \|
[_Engine_](../interfaces/interfaces.engine.md)): _null_ \|
[_SQLLiteral_](nodes.sqlliteral.md)

#### Parameters:

| Name     | Type                                                     | Default value |
| -------- | -------------------------------------------------------- | ------------- |
| `engine` | _null_ \| [_Engine_](../interfaces/interfaces.engine.md) | ...           |

**Returns:** _null_ \| [_SQLLiteral_](nodes.sqlliteral.md)

Defined in: @sequeljs/ast/src/managers/SelectManager.ts:303

---

### window

▸ **window**(`name`: _any_): [_NamedWindow_](nodes.namedwindow.md)

#### Parameters:

| Name   | Type  |
| ------ | ----- |
| `name` | _any_ |

**Returns:** [_NamedWindow_](nodes.namedwindow.md)

Defined in: @sequeljs/ast/src/managers/SelectManager.ts:321

---

### with

▸ **with**(...`subqueries`: _any_[]):
[_SelectManager_](managers.selectmanager.md)

#### Parameters:

| Name            | Type    |
| --------------- | ------- |
| `...subqueries` | _any_[] |

**Returns:** [_SelectManager_](managers.selectmanager.md)

Defined in: @sequeljs/ast/src/managers/SelectManager.ts:329

---

### withRecursive

▸ **withRecursive**(...`subqueries`: _any_[]):
[_SelectManager_](managers.selectmanager.md)

#### Parameters:

| Name            | Type    |
| --------------- | ------- |
| `...subqueries` | _any_[] |

**Returns:** [_SelectManager_](managers.selectmanager.md)

Defined in: @sequeljs/ast/src/managers/SelectManager.ts:337
