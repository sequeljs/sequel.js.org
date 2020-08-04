---
id: '_managers_updatemanager_.updatemanager'
title: 'UpdateManager'
sidebar_label: 'UpdateManager'
---

[@sequeljs/ast](../index.md) › [Globals](../globals.md) ›
["managers/UpdateManager"](../modules/_managers_updatemanager_.md) ›
[UpdateManager](_managers_updatemanager_.updatemanager.md)

## Hierarchy

↳
[TreeManager](_managers_treemanager_.treemanager.md)‹[UpdateManager](_managers_updatemanager_.updatemanager.md),
[UpdateStatement](_nodes_updatestatement_.updatestatement.md)›

- [StatementMethods](_mixins_statementmethods_.statementmethods.md)‹[UpdateStatement](_nodes_updatestatement_.updatestatement.md)›

  ↳ **UpdateManager**

## Index

### Constructors

- [constructor](_managers_updatemanager_.updatemanager.md#constructor)

### Properties

- [ast](_managers_updatemanager_.updatemanager.md#readonly-ast)
- [ctx](_managers_updatemanager_.updatemanager.md#protected-ctx)

### Accessors

- [key](_managers_updatemanager_.updatemanager.md#key)
- [wheres](_managers_updatemanager_.updatemanager.md#wheres)

### Methods

- [coalesce](_managers_updatemanager_.updatemanager.md#coalesce)
- [createAnd](_managers_updatemanager_.updatemanager.md#createand)
- [createFalse](_managers_updatemanager_.updatemanager.md#createfalse)
- [createJoin](_managers_updatemanager_.updatemanager.md#createjoin)
- [createOn](_managers_updatemanager_.updatemanager.md#createon)
- [createStringJoin](_managers_updatemanager_.updatemanager.md#createstringjoin)
- [createTableAlias](_managers_updatemanager_.updatemanager.md#createtablealias)
- [createTrue](_managers_updatemanager_.updatemanager.md#createtrue)
- [grouping](_managers_updatemanager_.updatemanager.md#grouping)
- [lower](_managers_updatemanager_.updatemanager.md#lower)
- [offset](_managers_updatemanager_.updatemanager.md#offset)
- [order](_managers_updatemanager_.updatemanager.md#order)
- [set](_managers_updatemanager_.updatemanager.md#set)
- [table](_managers_updatemanager_.updatemanager.md#table)
- [take](_managers_updatemanager_.updatemanager.md#take)
- [toSQL](_managers_updatemanager_.updatemanager.md#tosql)
- [where](_managers_updatemanager_.updatemanager.md#where)

## Constructors

### constructor

\+ **new UpdateManager**():
_[UpdateManager](_managers_updatemanager_.updatemanager.md)_

_Overrides
[TreeManager](_managers_treemanager_.treemanager.md).[constructor](_managers_treemanager_.treemanager.md#constructor)_

_Defined in
[src/managers/UpdateManager.ts:11](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/UpdateManager.ts#L11)_

**Returns:** _[UpdateManager](_managers_updatemanager_.updatemanager.md)_

## Properties

### `Readonly` ast

• **ast**: _[UpdateStatement](_nodes_updatestatement_.updatestatement.md)_

_Inherited from
[TreeManager](_managers_treemanager_.treemanager.md).[ast](_managers_treemanager_.treemanager.md#readonly-ast)_

_Overrides
[StatementMethods](_mixins_statementmethods_.statementmethods.md).[ast](_mixins_statementmethods_.statementmethods.md#readonly-abstract-ast)_

_Defined in
[src/managers/TreeManager.ts:15](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/TreeManager.ts#L15)_

---

### `Protected` ctx

• **ctx**: _[UpdateStatement](_nodes_updatestatement_.updatestatement.md)_

_Overrides
[TreeManager](_managers_treemanager_.treemanager.md).[ctx](_managers_treemanager_.treemanager.md#protected-ctx)_

_Defined in
[src/managers/UpdateManager.ts:11](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/UpdateManager.ts#L11)_

## Accessors

### key

• **get key**(): _any_

_Inherited from
[StatementMethods](_mixins_statementmethods_.statementmethods.md).[key](_mixins_statementmethods_.statementmethods.md#key)_

_Defined in
[src/mixins/StatementMethods.ts:13](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/StatementMethods.ts#L13)_

**Returns:** _any_

• **set key**(`val`: any): _void_

_Inherited from
[StatementMethods](_mixins_statementmethods_.statementmethods.md).[key](_mixins_statementmethods_.statementmethods.md#key)_

_Defined in
[src/mixins/StatementMethods.ts:17](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/StatementMethods.ts#L17)_

**Parameters:**

| Name  | Type |
| ----- | ---- |
| `val` | any  |

**Returns:** _void_

---

### wheres

• **set wheres**(`val`: UpdateStatement["wheres"]): _void_

_Inherited from
[StatementMethods](_mixins_statementmethods_.statementmethods.md).[wheres](_mixins_statementmethods_.statementmethods.md#wheres)_

_Defined in
[src/mixins/StatementMethods.ts:21](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/StatementMethods.ts#L21)_

**Parameters:**

| Name  | Type                      |
| ----- | ------------------------- |
| `val` | UpdateStatement["wheres"] |

**Returns:** _void_

## Methods

### coalesce

▸ **coalesce**(...`exprs`: any[]):
_[NamedSQLFunction](_nodes_namedsqlfunction_.namedsqlfunction.md)_

_Inherited from
[Comment](_nodes_comment_.comment.md).[coalesce](_nodes_comment_.comment.md#coalesce)_

_Defined in
[src/mixins/FactoryMethods.ts:22](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/FactoryMethods.ts#L22)_

**Parameters:**

| Name       | Type  |
| ---------- | ----- |
| `...exprs` | any[] |

**Returns:** _[NamedSQLFunction](_nodes_namedsqlfunction_.namedsqlfunction.md)_

---

### createAnd

▸ **createAnd**(`clauses`: any[]): _[And](_nodes_and_.and.md)_

_Inherited from
[Comment](_nodes_comment_.comment.md).[createAnd](_nodes_comment_.comment.md#createand)_

_Defined in
[src/mixins/FactoryMethods.ts:26](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/FactoryMethods.ts#L26)_

**Parameters:**

| Name      | Type  |
| --------- | ----- |
| `clauses` | any[] |

**Returns:** _[And](_nodes_and_.and.md)_

---

### createFalse

▸ **createFalse**(): _[False](_nodes_false_.false.md)_

_Inherited from
[Comment](_nodes_comment_.comment.md).[createFalse](_nodes_comment_.comment.md#createfalse)_

_Defined in
[src/mixins/FactoryMethods.ts:30](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/FactoryMethods.ts#L30)_

**Returns:** _[False](_nodes_false_.false.md)_

---

### createJoin

▸ **createJoin**(`to`: string |
[Relation](../modules/_interfaces_relation_.md#relation) |
[SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) | null):
_[InnerJoin](_nodes_innerjoin_.innerjoin.md)_

_Inherited from
[Comment](_nodes_comment_.comment.md).[createJoin](_nodes_comment_.comment.md#createjoin)_

_Defined in
[src/mixins/FactoryMethods.ts:34](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/FactoryMethods.ts#L34)_

**Parameters:**

| Name | Type                                                                                                                                     |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `to` | string &#124; [Relation](../modules/_interfaces_relation_.md#relation) &#124; [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) &#124; null |

**Returns:** _[InnerJoin](_nodes_innerjoin_.innerjoin.md)_

▸ **createJoin**(`to`: string |
[Relation](../modules/_interfaces_relation_.md#relation) |
[SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) | null, `constraint`: any):
_[InnerJoin](_nodes_innerjoin_.innerjoin.md)_

_Inherited from
[Comment](_nodes_comment_.comment.md).[createJoin](_nodes_comment_.comment.md#createjoin)_

_Defined in
[src/mixins/FactoryMethods.ts:35](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/FactoryMethods.ts#L35)_

**Parameters:**

| Name         | Type                                                                                                                                     |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `to`         | string &#124; [Relation](../modules/_interfaces_relation_.md#relation) &#124; [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) &#124; null |
| `constraint` | any                                                                                                                                      |

**Returns:** _[InnerJoin](_nodes_innerjoin_.innerjoin.md)_

▸ **createJoin**(`to`: string |
[Relation](../modules/_interfaces_relation_.md#relation) |
[SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) | null, `constraint`: any,
`Klass`: typeof FullOuterJoin):
_[FullOuterJoin](_nodes_fullouterjoin_.fullouterjoin.md)_

_Inherited from
[Comment](_nodes_comment_.comment.md).[createJoin](_nodes_comment_.comment.md#createjoin)_

_Defined in
[src/mixins/FactoryMethods.ts:39](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/FactoryMethods.ts#L39)_

**Parameters:**

| Name         | Type                                                                                                                                     |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `to`         | string &#124; [Relation](../modules/_interfaces_relation_.md#relation) &#124; [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) &#124; null |
| `constraint` | any                                                                                                                                      |
| `Klass`      | typeof FullOuterJoin                                                                                                                     |

**Returns:** _[FullOuterJoin](_nodes_fullouterjoin_.fullouterjoin.md)_

▸ **createJoin**(`to`: string |
[Relation](../modules/_interfaces_relation_.md#relation) |
[SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) | null, `constraint`: any,
`Klass`: typeof InnerJoin): _[InnerJoin](_nodes_innerjoin_.innerjoin.md)_

_Inherited from
[Comment](_nodes_comment_.comment.md).[createJoin](_nodes_comment_.comment.md#createjoin)_

_Defined in
[src/mixins/FactoryMethods.ts:44](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/FactoryMethods.ts#L44)_

**Parameters:**

| Name         | Type                                                                                                                                     |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `to`         | string &#124; [Relation](../modules/_interfaces_relation_.md#relation) &#124; [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) &#124; null |
| `constraint` | any                                                                                                                                      |
| `Klass`      | typeof InnerJoin                                                                                                                         |

**Returns:** _[InnerJoin](_nodes_innerjoin_.innerjoin.md)_

▸ **createJoin**(`to`: string |
[Relation](../modules/_interfaces_relation_.md#relation) |
[SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) | null, `constraint`: any,
`Klass`: typeof OuterJoin): _[OuterJoin](_nodes_outerjoin_.outerjoin.md)_

_Inherited from
[Comment](_nodes_comment_.comment.md).[createJoin](_nodes_comment_.comment.md#createjoin)_

_Defined in
[src/mixins/FactoryMethods.ts:49](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/FactoryMethods.ts#L49)_

**Parameters:**

| Name         | Type                                                                                                                                     |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `to`         | string &#124; [Relation](../modules/_interfaces_relation_.md#relation) &#124; [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) &#124; null |
| `constraint` | any                                                                                                                                      |
| `Klass`      | typeof OuterJoin                                                                                                                         |

**Returns:** _[OuterJoin](_nodes_outerjoin_.outerjoin.md)_

▸ **createJoin**(`to`: string |
[Relation](../modules/_interfaces_relation_.md#relation) |
[SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) | null, `constraint`: any,
`Klass`: typeof RightOuterJoin):
_[RightOuterJoin](_nodes_rightouterjoin_.rightouterjoin.md)_

_Inherited from
[Comment](_nodes_comment_.comment.md).[createJoin](_nodes_comment_.comment.md#createjoin)_

_Defined in
[src/mixins/FactoryMethods.ts:54](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/FactoryMethods.ts#L54)_

**Parameters:**

| Name         | Type                                                                                                                                     |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `to`         | string &#124; [Relation](../modules/_interfaces_relation_.md#relation) &#124; [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) &#124; null |
| `constraint` | any                                                                                                                                      |
| `Klass`      | typeof RightOuterJoin                                                                                                                    |

**Returns:** _[RightOuterJoin](_nodes_rightouterjoin_.rightouterjoin.md)_

▸ **createJoin**(`to`: string |
[Relation](../modules/_interfaces_relation_.md#relation) |
[SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) | null, `constraint`: any,
`Klass`: typeof StringJoin): _[StringJoin](_nodes_stringjoin_.stringjoin.md)_

_Inherited from
[Comment](_nodes_comment_.comment.md).[createJoin](_nodes_comment_.comment.md#createjoin)_

_Defined in
[src/mixins/FactoryMethods.ts:59](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/FactoryMethods.ts#L59)_

**Parameters:**

| Name         | Type                                                                                                                                     |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `to`         | string &#124; [Relation](../modules/_interfaces_relation_.md#relation) &#124; [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) &#124; null |
| `constraint` | any                                                                                                                                      |
| `Klass`      | typeof StringJoin                                                                                                                        |

**Returns:** _[StringJoin](_nodes_stringjoin_.stringjoin.md)_

---

### createOn

▸ **createOn**(`expr`: any): _[On](_nodes_on_.on.md)_

_Inherited from
[Comment](_nodes_comment_.comment.md).[createOn](_nodes_comment_.comment.md#createon)_

_Defined in
[src/mixins/FactoryMethods.ts:72](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/FactoryMethods.ts#L72)_

**Parameters:**

| Name   | Type |
| ------ | ---- |
| `expr` | any  |

**Returns:** _[On](_nodes_on_.on.md)_

---

### createStringJoin

▸ **createStringJoin**(`to`: string |
[Relation](../modules/_interfaces_relation_.md#relation) |
[SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) | null):
_[StringJoin](_nodes_stringjoin_.stringjoin.md)_

_Inherited from
[Comment](_nodes_comment_.comment.md).[createStringJoin](_nodes_comment_.comment.md#createstringjoin)_

_Defined in
[src/mixins/FactoryMethods.ts:76](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/FactoryMethods.ts#L76)_

**Parameters:**

| Name | Type                                                                                                                                     |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `to` | string &#124; [Relation](../modules/_interfaces_relation_.md#relation) &#124; [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) &#124; null |

**Returns:** _[StringJoin](_nodes_stringjoin_.stringjoin.md)_

---

### createTableAlias

▸ **createTableAlias**(`relation`: [Grouping](_nodes_grouping_.grouping.md) |
[Relation](../modules/_interfaces_relation_.md#relation), `name`: string |
[SQLLiteral](_nodes_sqlliteral_.sqlliteral.md)):
_[TableAlias](_nodes_tablealias_.tablealias.md)_

_Inherited from
[Comment](_nodes_comment_.comment.md).[createTableAlias](_nodes_comment_.comment.md#createtablealias)_

_Defined in
[src/mixins/FactoryMethods.ts:80](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/FactoryMethods.ts#L80)_

**Parameters:**

| Name       | Type                                                                                                     |
| ---------- | -------------------------------------------------------------------------------------------------------- |
| `relation` | [Grouping](_nodes_grouping_.grouping.md) &#124; [Relation](../modules/_interfaces_relation_.md#relation) |
| `name`     | string &#124; [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md)                                             |

**Returns:** _[TableAlias](_nodes_tablealias_.tablealias.md)_

---

### createTrue

▸ **createTrue**(): _[True](_nodes_true_.true.md)_

_Inherited from
[Comment](_nodes_comment_.comment.md).[createTrue](_nodes_comment_.comment.md#createtrue)_

_Defined in
[src/mixins/FactoryMethods.ts:87](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/FactoryMethods.ts#L87)_

**Returns:** _[True](_nodes_true_.true.md)_

---

### grouping

▸ **grouping**(`expr`: any): _[Grouping](_nodes_grouping_.grouping.md)_

_Inherited from
[Comment](_nodes_comment_.comment.md).[grouping](_nodes_comment_.comment.md#grouping)_

_Defined in
[src/mixins/FactoryMethods.ts:91](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/FactoryMethods.ts#L91)_

**Parameters:**

| Name   | Type |
| ------ | ---- |
| `expr` | any  |

**Returns:** _[Grouping](_nodes_grouping_.grouping.md)_

---

### lower

▸ **lower**(`column`: any):
_[NamedSQLFunction](_nodes_namedsqlfunction_.namedsqlfunction.md)_

_Inherited from
[Comment](_nodes_comment_.comment.md).[lower](_nodes_comment_.comment.md#lower)_

_Defined in
[src/mixins/FactoryMethods.ts:95](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/FactoryMethods.ts#L95)_

**Parameters:**

| Name     | Type |
| -------- | ---- |
| `column` | any  |

**Returns:** _[NamedSQLFunction](_nodes_namedsqlfunction_.namedsqlfunction.md)_

---

### offset

▸ **offset**(`offset`: any):
_[StatementMethods](_mixins_statementmethods_.statementmethods.md)‹[UpdateStatement](_nodes_updatestatement_.updatestatement.md)›_

_Inherited from
[StatementMethods](_mixins_statementmethods_.statementmethods.md).[offset](_mixins_statementmethods_.statementmethods.md#offset)_

_Defined in
[src/mixins/StatementMethods.ts:25](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/StatementMethods.ts#L25)_

**Parameters:**

| Name     | Type |
| -------- | ---- |
| `offset` | any  |

**Returns:**
_[StatementMethods](_mixins_statementmethods_.statementmethods.md)‹[UpdateStatement](_nodes_updatestatement_.updatestatement.md)›_

---

### order

▸ **order**(...`expr`: UpdateStatement["orders"]):
_[StatementMethods](_mixins_statementmethods_.statementmethods.md)‹[UpdateStatement](_nodes_updatestatement_.updatestatement.md)›_

_Inherited from
[StatementMethods](_mixins_statementmethods_.statementmethods.md).[order](_mixins_statementmethods_.statementmethods.md#order)_

_Defined in
[src/mixins/StatementMethods.ts:33](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/StatementMethods.ts#L33)_

**Parameters:**

| Name      | Type                      |
| --------- | ------------------------- |
| `...expr` | UpdateStatement["orders"] |

**Returns:**
_[StatementMethods](_mixins_statementmethods_.statementmethods.md)‹[UpdateStatement](_nodes_updatestatement_.updatestatement.md)›_

---

### set

▸ **set**(`values`: any):
_[UpdateManager](_managers_updatemanager_.updatemanager.md)_

_Defined in
[src/managers/UpdateManager.ts:19](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/UpdateManager.ts#L19)_

**Parameters:**

| Name     | Type |
| -------- | ---- |
| `values` | any  |

**Returns:** _[UpdateManager](_managers_updatemanager_.updatemanager.md)_

---

### table

▸ **table**(`table`: UpdateStatement["relation"]):
_[UpdateManager](_managers_updatemanager_.updatemanager.md)_

_Defined in
[src/managers/UpdateManager.ts:34](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/UpdateManager.ts#L34)_

**Parameters:**

| Name    | Type                        |
| ------- | --------------------------- |
| `table` | UpdateStatement["relation"] |

**Returns:** _[UpdateManager](_managers_updatemanager_.updatemanager.md)_

---

### take

▸ **take**(`limit`: any):
_[StatementMethods](_mixins_statementmethods_.statementmethods.md)‹[UpdateStatement](_nodes_updatestatement_.updatestatement.md)›_

_Inherited from
[StatementMethods](_mixins_statementmethods_.statementmethods.md).[take](_mixins_statementmethods_.statementmethods.md#take)_

_Defined in
[src/mixins/StatementMethods.ts:39](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/StatementMethods.ts#L39)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `limit` | any  |

**Returns:**
_[StatementMethods](_mixins_statementmethods_.statementmethods.md)‹[UpdateStatement](_nodes_updatestatement_.updatestatement.md)›_

---

### toSQL

▸ **toSQL**(`engine`: [Engine](../interfaces/_interfaces_engine_.engine.md) |
null): _string | null_

_Inherited from
[TreeManager](_managers_treemanager_.treemanager.md).[toSQL](_managers_treemanager_.treemanager.md#tosql)_

_Defined in
[src/managers/TreeManager.ts:23](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/TreeManager.ts#L23)_

**Parameters:**

| Name     | Type                                                              | Default          |
| -------- | ----------------------------------------------------------------- | ---------------- |
| `engine` | [Engine](../interfaces/_interfaces_engine_.engine.md) &#124; null | SequelAST.engine |

**Returns:** _string | null_

---

### where

▸ **where**(`this`: [UpdateManager](_managers_updatemanager_.updatemanager.md),
`expr`: any): _[UpdateManager](_managers_updatemanager_.updatemanager.md)_

_Inherited from
[TreeManager](_managers_treemanager_.treemanager.md).[where](_managers_treemanager_.treemanager.md#where)_

_Defined in
[src/managers/TreeManager.ts:44](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/TreeManager.ts#L44)_

**Parameters:**

| Name   | Type                                                       |
| ------ | ---------------------------------------------------------- |
| `this` | [UpdateManager](_managers_updatemanager_.updatemanager.md) |
| `expr` | any                                                        |

**Returns:** _[UpdateManager](_managers_updatemanager_.updatemanager.md)_
