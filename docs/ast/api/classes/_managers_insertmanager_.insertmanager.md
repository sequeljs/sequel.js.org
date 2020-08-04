---
id: '_managers_insertmanager_.insertmanager'
title: 'InsertManager'
sidebar_label: 'InsertManager'
---

[@sequeljs/ast](../index.md) › [Globals](../globals.md) ›
["managers/InsertManager"](../modules/_managers_insertmanager_.md) ›
[InsertManager](_managers_insertmanager_.insertmanager.md)

## Hierarchy

↳
[TreeManager](_managers_treemanager_.treemanager.md)‹[InsertManager](_managers_insertmanager_.insertmanager.md),
[InsertStatement](_nodes_insertstatement_.insertstatement.md)›

↳ **InsertManager**

## Index

### Constructors

- [constructor](_managers_insertmanager_.insertmanager.md#constructor)

### Properties

- [ast](_managers_insertmanager_.insertmanager.md#readonly-ast)
- [ctx](_managers_insertmanager_.insertmanager.md#protected-ctx)

### Accessors

- [columns](_managers_insertmanager_.insertmanager.md#columns)
- [values](_managers_insertmanager_.insertmanager.md#values)

### Methods

- [coalesce](_managers_insertmanager_.insertmanager.md#coalesce)
- [createAnd](_managers_insertmanager_.insertmanager.md#createand)
- [createFalse](_managers_insertmanager_.insertmanager.md#createfalse)
- [createJoin](_managers_insertmanager_.insertmanager.md#createjoin)
- [createOn](_managers_insertmanager_.insertmanager.md#createon)
- [createStringJoin](_managers_insertmanager_.insertmanager.md#createstringjoin)
- [createTableAlias](_managers_insertmanager_.insertmanager.md#createtablealias)
- [createTrue](_managers_insertmanager_.insertmanager.md#createtrue)
- [createValues](_managers_insertmanager_.insertmanager.md#createvalues)
- [createValuesList](_managers_insertmanager_.insertmanager.md#createvalueslist)
- [grouping](_managers_insertmanager_.insertmanager.md#grouping)
- [insert](_managers_insertmanager_.insertmanager.md#insert)
- [into](_managers_insertmanager_.insertmanager.md#into)
- [lower](_managers_insertmanager_.insertmanager.md#lower)
- [select](_managers_insertmanager_.insertmanager.md#select)
- [toSQL](_managers_insertmanager_.insertmanager.md#tosql)
- [where](_managers_insertmanager_.insertmanager.md#where)

## Constructors

### constructor

\+ **new InsertManager**():
_[InsertManager](_managers_insertmanager_.insertmanager.md)_

_Overrides
[TreeManager](_managers_treemanager_.treemanager.md).[constructor](_managers_treemanager_.treemanager.md#constructor)_

_Defined in
[src/managers/InsertManager.ts:21](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/InsertManager.ts#L21)_

**Returns:** _[InsertManager](_managers_insertmanager_.insertmanager.md)_

## Properties

### `Readonly` ast

• **ast**: _[InsertStatement](_nodes_insertstatement_.insertstatement.md)_

_Inherited from
[TreeManager](_managers_treemanager_.treemanager.md).[ast](_managers_treemanager_.treemanager.md#readonly-ast)_

_Defined in
[src/managers/TreeManager.ts:15](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/TreeManager.ts#L15)_

---

### `Protected` ctx

• **ctx**: _[InsertStatement](_nodes_insertstatement_.insertstatement.md)_

_Overrides
[TreeManager](_managers_treemanager_.treemanager.md).[ctx](_managers_treemanager_.treemanager.md#protected-ctx)_

_Defined in
[src/managers/InsertManager.ts:13](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/InsertManager.ts#L13)_

## Accessors

### columns

• **get columns**(): _InsertManager["ctx"]["columns"]_

_Defined in
[src/managers/InsertManager.ts:15](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/InsertManager.ts#L15)_

**Returns:** _InsertManager["ctx"]["columns"]_

---

### values

• **set values**(`val`: InsertManager["ctx"]["values"]): _void_

_Defined in
[src/managers/InsertManager.ts:19](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/InsertManager.ts#L19)_

**Parameters:**

| Name  | Type                           |
| ----- | ------------------------------ |
| `val` | InsertManager["ctx"]["values"] |

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

### createValues

▸ **createValues**(`values`: any):
_[ValuesList](_nodes_valueslist_.valueslist.md)_

_Defined in
[src/managers/InsertManager.ts:29](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/InsertManager.ts#L29)_

**Parameters:**

| Name     | Type |
| -------- | ---- |
| `values` | any  |

**Returns:** _[ValuesList](_nodes_valueslist_.valueslist.md)_

---

### createValuesList

▸ **createValuesList**(`rows`: any[]):
_[ValuesList](_nodes_valueslist_.valueslist.md)_

_Defined in
[src/managers/InsertManager.ts:33](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/InsertManager.ts#L33)_

**Parameters:**

| Name   | Type  |
| ------ | ----- |
| `rows` | any[] |

**Returns:** _[ValuesList](_nodes_valueslist_.valueslist.md)_

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

### insert

▸ **insert**(`fields`: any):
_[InsertManager](_managers_insertmanager_.insertmanager.md)_

_Defined in
[src/managers/InsertManager.ts:37](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/InsertManager.ts#L37)_

**Parameters:**

| Name     | Type |
| -------- | ---- |
| `fields` | any  |

**Returns:** _[InsertManager](_managers_insertmanager_.insertmanager.md)_

---

### into

▸ **into**(`table`: [Table](_table_.table.md)):
_[InsertManager](_managers_insertmanager_.insertmanager.md)_

_Defined in
[src/managers/InsertManager.ts:61](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/InsertManager.ts#L61)_

**Parameters:**

| Name    | Type                      |
| ------- | ------------------------- |
| `table` | [Table](_table_.table.md) |

**Returns:** _[InsertManager](_managers_insertmanager_.insertmanager.md)_

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

### select

▸ **select**(`select`: any): _void_

_Defined in
[src/managers/InsertManager.ts:67](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/InsertManager.ts#L67)_

**Parameters:**

| Name     | Type |
| -------- | ---- |
| `select` | any  |

**Returns:** _void_

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

▸ **where**(`this`: [InsertManager](_managers_insertmanager_.insertmanager.md),
`expr`: any): _[InsertManager](_managers_insertmanager_.insertmanager.md)_

_Inherited from
[TreeManager](_managers_treemanager_.treemanager.md).[where](_managers_treemanager_.treemanager.md#where)_

_Defined in
[src/managers/TreeManager.ts:44](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/TreeManager.ts#L44)_

**Parameters:**

| Name   | Type                                                       |
| ------ | ---------------------------------------------------------- |
| `this` | [InsertManager](_managers_insertmanager_.insertmanager.md) |
| `expr` | any                                                        |

**Returns:** _[InsertManager](_managers_insertmanager_.insertmanager.md)_
