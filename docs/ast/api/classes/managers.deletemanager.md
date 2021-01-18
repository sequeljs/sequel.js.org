[@sequeljs/ast](../README.md) / [Exports](../modules.md) /
[Managers](../modules/managers.md) / DeleteManager

# Class: DeleteManager

[Managers](../modules/managers.md).DeleteManager

## Hierarchy

- [_TreeManager_](managers.treemanager.md)<[_DeleteManager_](managers.deletemanager.md),
  [_DeleteStatement_](nodes.deletestatement.md)\>

- _StatementMethods_<[_DeleteStatement_](nodes.deletestatement.md)\>

  ↳ **DeleteManager**

## Table of contents

### Constructors

- [constructor](managers.deletemanager.md#constructor)

### Properties

- [ast](managers.deletemanager.md#ast)
- [ctx](managers.deletemanager.md#ctx)

### Accessors

- [key](managers.deletemanager.md#key)
- [wheres](managers.deletemanager.md#wheres)

### Methods

- [coalesce](managers.deletemanager.md#coalesce)
- [createAnd](managers.deletemanager.md#createand)
- [createFalse](managers.deletemanager.md#createfalse)
- [createJoin](managers.deletemanager.md#createjoin)
- [createOn](managers.deletemanager.md#createon)
- [createStringJoin](managers.deletemanager.md#createstringjoin)
- [createTableAlias](managers.deletemanager.md#createtablealias)
- [createTrue](managers.deletemanager.md#createtrue)
- [from](managers.deletemanager.md#from)
- [grouping](managers.deletemanager.md#grouping)
- [lower](managers.deletemanager.md#lower)
- [offset](managers.deletemanager.md#offset)
- [order](managers.deletemanager.md#order)
- [take](managers.deletemanager.md#take)
- [toSQL](managers.deletemanager.md#tosql)
- [where](managers.deletemanager.md#where)

## Constructors

### constructor

\+ **new DeleteManager**(): [_DeleteManager_](managers.deletemanager.md)

**Returns:** [_DeleteManager_](managers.deletemanager.md)

Inherited from: [TreeManager](managers.treemanager.md)

Defined in:
[src/managers/DeleteManager.ts:13](https://github.com/sequeljs/ast/blob/8de61b1/src/managers/DeleteManager.ts#L13)

## Properties

### ast

• `Readonly` **ast**: [_DeleteStatement_](nodes.deletestatement.md)

Inherited from:
[TreeManager](managers.treemanager.md).[ast](managers.treemanager.md#ast)

Defined in:
[src/managers/TreeManager.ts:15](https://github.com/sequeljs/ast/blob/8de61b1/src/managers/TreeManager.ts#L15)

---

### ctx

• **ctx**: [_DeleteStatement_](nodes.deletestatement.md)

Overrides:
[TreeManager](managers.treemanager.md).[ctx](managers.treemanager.md#ctx)

Defined in:
[src/managers/DeleteManager.ts:13](https://github.com/sequeljs/ast/blob/8de61b1/src/managers/DeleteManager.ts#L13)

## Accessors

### key

• **key**(): _any_

**Returns:** _any_

Defined in:
[src/mixins/StatementMethods.ts:13](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/StatementMethods.ts#L13)

• **key**(`val`: _any_): _void_

#### Parameters:

| Name  | Type  |
| ----- | ----- |
| `val` | _any_ |

**Returns:** _void_

Defined in:
[src/mixins/StatementMethods.ts:17](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/StatementMethods.ts#L17)

---

### wheres

• **wheres**(`val`: S[*wheres*]): _void_

#### Parameters:

| Name  | Type        |
| ----- | ----------- |
| `val` | S[*wheres*] |

**Returns:** _void_

Defined in:
[src/mixins/StatementMethods.ts:21](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/StatementMethods.ts#L21)

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

Defined in:
[src/mixins/FactoryMethods.ts:22](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/FactoryMethods.ts#L22)

---

### createAnd

▸ **createAnd**(`clauses`: _any_[]): [_And_](nodes.and.md)

#### Parameters:

| Name      | Type    |
| --------- | ------- |
| `clauses` | _any_[] |

**Returns:** [_And_](nodes.and.md)

Inherited from: [TreeManager](managers.treemanager.md)

Defined in:
[src/mixins/FactoryMethods.ts:26](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/FactoryMethods.ts#L26)

---

### createFalse

▸ **createFalse**(): [_False_](nodes.false.md)

**Returns:** [_False_](nodes.false.md)

Inherited from: [TreeManager](managers.treemanager.md)

Defined in:
[src/mixins/FactoryMethods.ts:30](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/FactoryMethods.ts#L30)

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

Defined in:
[src/mixins/FactoryMethods.ts:34](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/FactoryMethods.ts#L34)

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

Defined in:
[src/mixins/FactoryMethods.ts:35](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/FactoryMethods.ts#L35)

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

Defined in:
[src/mixins/FactoryMethods.ts:39](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/FactoryMethods.ts#L39)

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

Defined in:
[src/mixins/FactoryMethods.ts:44](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/FactoryMethods.ts#L44)

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

Defined in:
[src/mixins/FactoryMethods.ts:49](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/FactoryMethods.ts#L49)

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

Defined in:
[src/mixins/FactoryMethods.ts:54](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/FactoryMethods.ts#L54)

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

Defined in:
[src/mixins/FactoryMethods.ts:59](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/FactoryMethods.ts#L59)

---

### createOn

▸ **createOn**(`expr`: _any_): [_On_](nodes.on.md)

#### Parameters:

| Name   | Type  |
| ------ | ----- |
| `expr` | _any_ |

**Returns:** [_On_](nodes.on.md)

Inherited from: [TreeManager](managers.treemanager.md)

Defined in:
[src/mixins/FactoryMethods.ts:72](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/FactoryMethods.ts#L72)

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

Defined in:
[src/mixins/FactoryMethods.ts:76](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/FactoryMethods.ts#L76)

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

Defined in:
[src/mixins/FactoryMethods.ts:80](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/FactoryMethods.ts#L80)

---

### createTrue

▸ **createTrue**(): [_True_](nodes.true.md)

**Returns:** [_True_](nodes.true.md)

Inherited from: [TreeManager](managers.treemanager.md)

Defined in:
[src/mixins/FactoryMethods.ts:87](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/FactoryMethods.ts#L87)

---

### from

▸ **from**(`relation`: [_Table_](table.md) \|
[_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md) \|
[_JoinSource_](nodes.joinsource.md)):
[_DeleteManager_](managers.deletemanager.md)

#### Parameters:

| Name       | Type                                                                                                                                     |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `relation` | [_Table_](table.md) \| [_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md) \| [_JoinSource_](nodes.joinsource.md) |

**Returns:** [_DeleteManager_](managers.deletemanager.md)

Defined in:
[src/managers/DeleteManager.ts:21](https://github.com/sequeljs/ast/blob/8de61b1/src/managers/DeleteManager.ts#L21)

---

### grouping

▸ **grouping**(`expr`: _any_): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name   | Type  |
| ------ | ----- |
| `expr` | _any_ |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [TreeManager](managers.treemanager.md)

Defined in:
[src/mixins/FactoryMethods.ts:91](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/FactoryMethods.ts#L91)

---

### lower

▸ **lower**(`column`: _any_): [_NamedSQLFunction_](nodes.namedsqlfunction.md)

#### Parameters:

| Name     | Type  |
| -------- | ----- |
| `column` | _any_ |

**Returns:** [_NamedSQLFunction_](nodes.namedsqlfunction.md)

Inherited from: [TreeManager](managers.treemanager.md)

Defined in:
[src/mixins/FactoryMethods.ts:95](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/FactoryMethods.ts#L95)

---

### offset

▸ **offset**(`offset`: _any_):
_default_<[_DeleteStatement_](nodes.deletestatement.md)\>

#### Parameters:

| Name     | Type  |
| -------- | ----- |
| `offset` | _any_ |

**Returns:** _default_<[_DeleteStatement_](nodes.deletestatement.md)\>

Defined in:
[src/mixins/StatementMethods.ts:25](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/StatementMethods.ts#L25)

---

### order

▸ **order**(...`expr`: _any_[]):
_default_<[_DeleteStatement_](nodes.deletestatement.md)\>

#### Parameters:

| Name      | Type    |
| --------- | ------- |
| `...expr` | _any_[] |

**Returns:** _default_<[_DeleteStatement_](nodes.deletestatement.md)\>

Defined in:
[src/mixins/StatementMethods.ts:33](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/StatementMethods.ts#L33)

---

### take

▸ **take**(`limit`: _any_):
_default_<[_DeleteStatement_](nodes.deletestatement.md)\>

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `limit` | _any_ |

**Returns:** _default_<[_DeleteStatement_](nodes.deletestatement.md)\>

Defined in:
[src/mixins/StatementMethods.ts:39](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/StatementMethods.ts#L39)

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

Defined in:
[src/managers/TreeManager.ts:23](https://github.com/sequeljs/ast/blob/8de61b1/src/managers/TreeManager.ts#L23)

---

### where

▸ **where**(`expr`: _any_): [_DeleteManager_](managers.deletemanager.md)

#### Parameters:

| Name   | Type  |
| ------ | ----- |
| `expr` | _any_ |

**Returns:** [_DeleteManager_](managers.deletemanager.md)

Inherited from: [TreeManager](managers.treemanager.md)

Defined in:
[src/managers/TreeManager.ts:44](https://github.com/sequeljs/ast/blob/8de61b1/src/managers/TreeManager.ts#L44)
