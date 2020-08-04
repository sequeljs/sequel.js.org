---
id: '_managers_selectmanager_.selectmanager'
title: 'SelectManager'
sidebar_label: 'SelectManager'
---

[@sequeljs/ast](../index.md) › [Globals](../globals.md) ›
["managers/SelectManager"](../modules/_managers_selectmanager_.md) ›
[SelectManager](_managers_selectmanager_.selectmanager.md)

## Hierarchy

↳
[TreeManager](_managers_treemanager_.treemanager.md)‹[SelectManager](_managers_selectmanager_.selectmanager.md),
[SelectStatement](_nodes_selectstatement_.selectstatement.md)›

- [CRUD](_mixins_crud_.crud.md)

  ↳ **SelectManager**

## Index

### Constructors

- [constructor](_managers_selectmanager_.selectmanager.md#constructor)

### Properties

- [ast](_managers_selectmanager_.selectmanager.md#readonly-ast)
- [ctx](_managers_selectmanager_.selectmanager.md#protected-ctx)

### Accessors

- [constraints](_managers_selectmanager_.selectmanager.md#constraints)
- [froms](_managers_selectmanager_.selectmanager.md#froms)
- [joinSources](_managers_selectmanager_.selectmanager.md#joinsources)
- [limit](_managers_selectmanager_.selectmanager.md#limit)
- [locked](_managers_selectmanager_.selectmanager.md#locked)
- [offset](_managers_selectmanager_.selectmanager.md#offset)
- [orders](_managers_selectmanager_.selectmanager.md#orders)
- [projections](_managers_selectmanager_.selectmanager.md#projections)
- [source](_managers_selectmanager_.selectmanager.md#source)
- [taken](_managers_selectmanager_.selectmanager.md#taken)

### Methods

- [as](_managers_selectmanager_.selectmanager.md#as)
- [coalesce](_managers_selectmanager_.selectmanager.md#coalesce)
- [collapse](_managers_selectmanager_.selectmanager.md#private-collapse)
- [comment](_managers_selectmanager_.selectmanager.md#comment)
- [compileDelete](_managers_selectmanager_.selectmanager.md#compiledelete)
- [compileInsert](_managers_selectmanager_.selectmanager.md#compileinsert)
- [compileUpdate](_managers_selectmanager_.selectmanager.md#compileupdate)
- [createAnd](_managers_selectmanager_.selectmanager.md#createand)
- [createFalse](_managers_selectmanager_.selectmanager.md#createfalse)
- [createInsert](_managers_selectmanager_.selectmanager.md#createinsert)
- [createJoin](_managers_selectmanager_.selectmanager.md#createjoin)
- [createOn](_managers_selectmanager_.selectmanager.md#createon)
- [createStringJoin](_managers_selectmanager_.selectmanager.md#createstringjoin)
- [createTableAlias](_managers_selectmanager_.selectmanager.md#createtablealias)
- [createTrue](_managers_selectmanager_.selectmanager.md#createtrue)
- [distinct](_managers_selectmanager_.selectmanager.md#distinct)
- [distinctOn](_managers_selectmanager_.selectmanager.md#distincton)
- [except](_managers_selectmanager_.selectmanager.md#except)
- [exists](_managers_selectmanager_.selectmanager.md#exists)
- [from](_managers_selectmanager_.selectmanager.md#from)
- [group](_managers_selectmanager_.selectmanager.md#group)
- [grouping](_managers_selectmanager_.selectmanager.md#grouping)
- [having](_managers_selectmanager_.selectmanager.md#having)
- [intersect](_managers_selectmanager_.selectmanager.md#intersect)
- [join](_managers_selectmanager_.selectmanager.md#join)
- [lateral](_managers_selectmanager_.selectmanager.md#lateral)
- [lock](_managers_selectmanager_.selectmanager.md#lock)
- [lower](_managers_selectmanager_.selectmanager.md#lower)
- [minus](_managers_selectmanager_.selectmanager.md#minus)
- [on](_managers_selectmanager_.selectmanager.md#on)
- [optimizerHints](_managers_selectmanager_.selectmanager.md#optimizerhints)
- [order](_managers_selectmanager_.selectmanager.md#order)
- [outerJoin](_managers_selectmanager_.selectmanager.md#outerjoin)
- [project](_managers_selectmanager_.selectmanager.md#project)
- [skip](_managers_selectmanager_.selectmanager.md#skip)
- [take](_managers_selectmanager_.selectmanager.md#take)
- [toSQL](_managers_selectmanager_.selectmanager.md#tosql)
- [union](_managers_selectmanager_.selectmanager.md#union)
- [unionAll](_managers_selectmanager_.selectmanager.md#unionall)
- [where](_managers_selectmanager_.selectmanager.md#where)
- [whereSQL](_managers_selectmanager_.selectmanager.md#wheresql)
- [window](_managers_selectmanager_.selectmanager.md#window)
- [with](_managers_selectmanager_.selectmanager.md#with)
- [withRecursive](_managers_selectmanager_.selectmanager.md#withrecursive)

## Constructors

### constructor

\+ **new SelectManager**(`table`: any):
_[SelectManager](_managers_selectmanager_.selectmanager.md)_

_Overrides
[TreeManager](_managers_treemanager_.treemanager.md).[constructor](_managers_treemanager_.treemanager.md#constructor)_

_Defined in
[src/managers/SelectManager.ts:99](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/SelectManager.ts#L99)_

**Parameters:**

| Name    | Type | Default |
| ------- | ---- | ------- |
| `table` | any  | null    |

**Returns:** _[SelectManager](_managers_selectmanager_.selectmanager.md)_

## Properties

### `Readonly` ast

• **ast**: _[SelectStatement](_nodes_selectstatement_.selectstatement.md)_

_Inherited from
[TreeManager](_managers_treemanager_.treemanager.md).[ast](_managers_treemanager_.treemanager.md#readonly-ast)_

_Overrides
[CRUD](_mixins_crud_.crud.md).[ast](_mixins_crud_.crud.md#readonly-abstract-ast)_

_Defined in
[src/managers/TreeManager.ts:15](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/TreeManager.ts#L15)_

---

### `Protected` ctx

• **ctx**: _[SelectCore](_nodes_selectcore_.selectcore.md)_

_Overrides
[TreeManager](_managers_treemanager_.treemanager.md).[ctx](_managers_treemanager_.treemanager.md#protected-ctx)_

_Defined in
[src/managers/SelectManager.ts:47](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/SelectManager.ts#L47)_

## Accessors

### constraints

• **get constraints**(): _SelectCore["wheres"]_

_Defined in
[src/managers/SelectManager.ts:49](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/SelectManager.ts#L49)_

**Returns:** _SelectCore["wheres"]_

---

### froms

• **get froms**(): _SelectStatement["cores"]_

_Defined in
[src/managers/SelectManager.ts:53](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/SelectManager.ts#L53)_

**Returns:** _SelectStatement["cores"]_

---

### joinSources

• **get joinSources**(): _SelectCore["source"]["right"]_

_Defined in
[src/managers/SelectManager.ts:57](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/SelectManager.ts#L57)_

**Returns:** _SelectCore["source"]["right"]_

---

### limit

• **get limit**(): _SelectStatement["limit"]["expr"]_

_Defined in
[src/managers/SelectManager.ts:61](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/SelectManager.ts#L61)_

**Returns:** _SelectStatement["limit"]["expr"]_

• **set limit**(`limit`: SelectStatement["limit"]["expr"]): _void_

_Defined in
[src/managers/SelectManager.ts:65](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/SelectManager.ts#L65)_

**Parameters:**

| Name    | Type                             |
| ------- | -------------------------------- |
| `limit` | SelectStatement["limit"]["expr"] |

**Returns:** _void_

---

### locked

• **get locked**(): _SelectStatement["lock"]_

_Defined in
[src/managers/SelectManager.ts:69](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/SelectManager.ts#L69)_

**Returns:** _SelectStatement["lock"]_

---

### offset

• **get offset**(): _SelectStatement["offset"]["expr"]_

_Defined in
[src/managers/SelectManager.ts:73](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/SelectManager.ts#L73)_

**Returns:** _SelectStatement["offset"]["expr"]_

• **set offset**(`amount`: SelectStatement["offset"]["expr"]): _void_

_Defined in
[src/managers/SelectManager.ts:77](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/SelectManager.ts#L77)_

**Parameters:**

| Name     | Type                              |
| -------- | --------------------------------- |
| `amount` | SelectStatement["offset"]["expr"] |

**Returns:** _void_

---

### orders

• **get orders**(): _SelectStatement["orders"]_

_Defined in
[src/managers/SelectManager.ts:81](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/SelectManager.ts#L81)_

**Returns:** _SelectStatement["orders"]_

---

### projections

• **get projections**(): _SelectCore["projections"]_

_Defined in
[src/managers/SelectManager.ts:85](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/SelectManager.ts#L85)_

**Returns:** _SelectCore["projections"]_

• **set projections**(`projections`: SelectCore["projections"]): _void_

_Defined in
[src/managers/SelectManager.ts:89](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/SelectManager.ts#L89)_

**Parameters:**

| Name          | Type                      |
| ------------- | ------------------------- |
| `projections` | SelectCore["projections"] |

**Returns:** _void_

---

### source

• **get source**(): _SelectCore["source"]_

_Defined in
[src/managers/SelectManager.ts:93](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/SelectManager.ts#L93)_

**Returns:** _SelectCore["source"]_

---

### taken

• **get taken**(): _SelectManager["limit"]_

_Defined in
[src/managers/SelectManager.ts:97](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/SelectManager.ts#L97)_

**Returns:** _SelectManager["limit"]_

## Methods

### as

▸ **as**(`other`: any): _[TableAlias](_nodes_tablealias_.tablealias.md)_

_Defined in
[src/managers/SelectManager.ts:127](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/SelectManager.ts#L127)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `other` | any  |

**Returns:** _[TableAlias](_nodes_tablealias_.tablealias.md)_

---

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

### `Private` collapse

▸ **collapse**(`exprs`: any[]): _any_

_Defined in
[src/managers/SelectManager.ts:109](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/SelectManager.ts#L109)_

**Parameters:**

| Name    | Type  |
| ------- | ----- |
| `exprs` | any[] |

**Returns:** _any_

---

### comment

▸ **comment**(...`values`: any):
_[SelectManager](_managers_selectmanager_.selectmanager.md)_

_Defined in
[src/managers/SelectManager.ts:131](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/SelectManager.ts#L131)_

**Parameters:**

| Name        | Type |
| ----------- | ---- |
| `...values` | any  |

**Returns:** _[SelectManager](_managers_selectmanager_.selectmanager.md)_

---

### compileDelete

▸ **compileDelete**():
_[DeleteManager](_managers_deletemanager_.deletemanager.md)_

_Inherited from
[CRUD](_mixins_crud_.crud.md).[compileDelete](_mixins_crud_.crud.md#compiledelete)_

_Defined in
[src/mixins/CRUD.ts:49](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/CRUD.ts#L49)_

**Returns:** _[DeleteManager](_managers_deletemanager_.deletemanager.md)_

---

### compileInsert

▸ **compileInsert**(`values`: any):
_[InsertManager](_managers_insertmanager_.insertmanager.md)_

_Inherited from
[CRUD](_mixins_crud_.crud.md).[compileInsert](_mixins_crud_.crud.md#compileinsert)_

_Defined in
[src/mixins/CRUD.ts:37](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/CRUD.ts#L37)_

**Parameters:**

| Name     | Type |
| -------- | ---- |
| `values` | any  |

**Returns:** _[InsertManager](_managers_insertmanager_.insertmanager.md)_

---

### compileUpdate

▸ **compileUpdate**(`values`: any, `pk`: any):
_[UpdateManager](_managers_updatemanager_.updatemanager.md)_

_Inherited from
[CRUD](_mixins_crud_.crud.md).[compileUpdate](_mixins_crud_.crud.md#compileupdate)_

_Defined in
[src/mixins/CRUD.ts:15](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/CRUD.ts#L15)_

**Parameters:**

| Name     | Type |
| -------- | ---- |
| `values` | any  |
| `pk`     | any  |

**Returns:** _[UpdateManager](_managers_updatemanager_.updatemanager.md)_

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

### createInsert

▸ **createInsert**():
_[InsertManager](_managers_insertmanager_.insertmanager.md)_

_Inherited from
[CRUD](_mixins_crud_.crud.md).[createInsert](_mixins_crud_.crud.md#createinsert)_

_Defined in
[src/mixins/CRUD.ts:45](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/CRUD.ts#L45)_

**Returns:** _[InsertManager](_managers_insertmanager_.insertmanager.md)_

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

### distinct

▸ **distinct**(`value`: boolean):
_[SelectManager](_managers_selectmanager_.selectmanager.md)_

_Defined in
[src/managers/SelectManager.ts:137](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/SelectManager.ts#L137)_

**Parameters:**

| Name    | Type    | Default |
| ------- | ------- | ------- |
| `value` | boolean | true    |

**Returns:** _[SelectManager](_managers_selectmanager_.selectmanager.md)_

---

### distinctOn

▸ **distinctOn**(`value`: any):
_[SelectManager](_managers_selectmanager_.selectmanager.md)_

_Defined in
[src/managers/SelectManager.ts:143](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/SelectManager.ts#L143)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `value` | any  |

**Returns:** _[SelectManager](_managers_selectmanager_.selectmanager.md)_

---

### except

▸ **except**(`other`:
[TreeManager](_managers_treemanager_.treemanager.md)‹[SelectManager](_managers_selectmanager_.selectmanager.md),
[SelectStatement](_nodes_selectstatement_.selectstatement.md)›):
_[Except](_nodes_except_.except.md)_

_Defined in
[src/managers/SelectManager.ts:149](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/SelectManager.ts#L149)_

**Parameters:**

| Name    | Type                                                                                                                                                                            |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `other` | [TreeManager](_managers_treemanager_.treemanager.md)‹[SelectManager](_managers_selectmanager_.selectmanager.md), [SelectStatement](_nodes_selectstatement_.selectstatement.md)› |

**Returns:** _[Except](_nodes_except_.except.md)_

---

### exists

▸ **exists**(): _[Exists](_nodes_exists_.exists.md)_

_Defined in
[src/managers/SelectManager.ts:153](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/SelectManager.ts#L153)_

**Returns:** _[Exists](_nodes_exists_.exists.md)_

---

### from

▸ **from**(`table`: any):
_[SelectManager](_managers_selectmanager_.selectmanager.md)_

_Defined in
[src/managers/SelectManager.ts:157](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/SelectManager.ts#L157)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `table` | any  |

**Returns:** _[SelectManager](_managers_selectmanager_.selectmanager.md)_

---

### group

▸ **group**(...`columns`: any[]): _this_

_Defined in
[src/managers/SelectManager.ts:169](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/SelectManager.ts#L169)_

**Parameters:**

| Name         | Type  |
| ------------ | ----- |
| `...columns` | any[] |

**Returns:** _this_

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

### having

▸ **having**(`expr`: any):
_[SelectManager](_managers_selectmanager_.selectmanager.md)_

_Defined in
[src/managers/SelectManager.ts:183](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/SelectManager.ts#L183)_

**Parameters:**

| Name   | Type |
| ------ | ---- |
| `expr` | any  |

**Returns:** _[SelectManager](_managers_selectmanager_.selectmanager.md)_

---

### intersect

▸ **intersect**(`other`:
[TreeManager](_managers_treemanager_.treemanager.md)‹[SelectManager](_managers_selectmanager_.selectmanager.md),
[SelectStatement](_nodes_selectstatement_.selectstatement.md)›):
_[Intersect](_nodes_intersect_.intersect.md)_

_Defined in
[src/managers/SelectManager.ts:189](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/SelectManager.ts#L189)_

**Parameters:**

| Name    | Type                                                                                                                                                                            |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `other` | [TreeManager](_managers_treemanager_.treemanager.md)‹[SelectManager](_managers_selectmanager_.selectmanager.md), [SelectStatement](_nodes_selectstatement_.selectstatement.md)› |

**Returns:** _[Intersect](_nodes_intersect_.intersect.md)_

---

### join

▸ **join**(`relation`: string |
[Relation](../modules/_interfaces_relation_.md#relation) |
[SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) | null, `klass`: typeof Join):
_[SelectManager](_managers_selectmanager_.selectmanager.md)_

_Defined in
[src/managers/SelectManager.ts:193](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/SelectManager.ts#L193)_

**Parameters:**

| Name       | Type                                                                                                                                     | Default   |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| `relation` | string &#124; [Relation](../modules/_interfaces_relation_.md#relation) &#124; [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) &#124; null | -         |
| `klass`    | typeof Join                                                                                                                              | InnerJoin |

**Returns:** _[SelectManager](_managers_selectmanager_.selectmanager.md)_

---

### lateral

▸ **lateral**(`tableName`: string | null):
_[Lateral](_nodes_lateral_.lateral.md)_

_Defined in
[src/managers/SelectManager.ts:218](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/SelectManager.ts#L218)_

**Parameters:**

| Name        | Type               | Default |
| ----------- | ------------------ | ------- |
| `tableName` | string &#124; null | null    |

**Returns:** _[Lateral](_nodes_lateral_.lateral.md)_

---

### lock

▸ **lock**(`locking`: any):
_[SelectManager](_managers_selectmanager_.selectmanager.md)_

_Defined in
[src/managers/SelectManager.ts:224](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/SelectManager.ts#L224)_

**Parameters:**

| Name      | Type | Default                      |
| --------- | ---- | ---------------------------- |
| `locking` | any  | new SQLLiteral('FOR UPDATE') |

**Returns:** _[SelectManager](_managers_selectmanager_.selectmanager.md)_

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

### minus

▸ **minus**(`other`:
[TreeManager](_managers_treemanager_.treemanager.md)‹[SelectManager](_managers_selectmanager_.selectmanager.md),
[SelectStatement](_nodes_selectstatement_.selectstatement.md)›):
_[Except](_nodes_except_.except.md)_

_Defined in
[src/managers/SelectManager.ts:237](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/SelectManager.ts#L237)_

**Parameters:**

| Name    | Type                                                                                                                                                                            |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `other` | [TreeManager](_managers_treemanager_.treemanager.md)‹[SelectManager](_managers_selectmanager_.selectmanager.md), [SelectStatement](_nodes_selectstatement_.selectstatement.md)› |

**Returns:** _[Except](_nodes_except_.except.md)_

---

### on

▸ **on**(...`exprs`: any[]):
_[SelectManager](_managers_selectmanager_.selectmanager.md)_

_Defined in
[src/managers/SelectManager.ts:241](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/SelectManager.ts#L241)_

**Parameters:**

| Name       | Type  |
| ---------- | ----- |
| `...exprs` | any[] |

**Returns:** _[SelectManager](_managers_selectmanager_.selectmanager.md)_

---

### optimizerHints

▸ **optimizerHints**(...`hints`: any[]):
_[SelectManager](_managers_selectmanager_.selectmanager.md)_

_Defined in
[src/managers/SelectManager.ts:249](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/SelectManager.ts#L249)_

**Parameters:**

| Name       | Type  |
| ---------- | ----- |
| `...hints` | any[] |

**Returns:** _[SelectManager](_managers_selectmanager_.selectmanager.md)_

---

### order

▸ **order**(...`expr`: any[]):
_[SelectManager](_managers_selectmanager_.selectmanager.md)_

_Defined in
[src/managers/SelectManager.ts:257](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/SelectManager.ts#L257)_

**Parameters:**

| Name      | Type  |
| --------- | ----- |
| `...expr` | any[] |

**Returns:** _[SelectManager](_managers_selectmanager_.selectmanager.md)_

---

### outerJoin

▸ **outerJoin**(`relation`:
[Relation](../modules/_interfaces_relation_.md#relation) | null):
_[SelectManager](_managers_selectmanager_.selectmanager.md)_

_Defined in
[src/managers/SelectManager.ts:267](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/SelectManager.ts#L267)_

**Parameters:**

| Name       | Type                                                                 |
| ---------- | -------------------------------------------------------------------- |
| `relation` | [Relation](../modules/_interfaces_relation_.md#relation) &#124; null |

**Returns:** _[SelectManager](_managers_selectmanager_.selectmanager.md)_

---

### project

▸ **project**(...`projections`: any[]):
_[SelectManager](_managers_selectmanager_.selectmanager.md)_

_Defined in
[src/managers/SelectManager.ts:271](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/SelectManager.ts#L271)_

**Parameters:**

| Name             | Type  |
| ---------------- | ----- |
| `...projections` | any[] |

**Returns:** _[SelectManager](_managers_selectmanager_.selectmanager.md)_

---

### skip

▸ **skip**(`amount`: any):
_[SelectManager](_managers_selectmanager_.selectmanager.md)_

_Defined in
[src/managers/SelectManager.ts:281](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/SelectManager.ts#L281)_

**Parameters:**

| Name     | Type |
| -------- | ---- |
| `amount` | any  |

**Returns:** _[SelectManager](_managers_selectmanager_.selectmanager.md)_

---

### take

▸ **take**(`limit`: any):
_[SelectManager](_managers_selectmanager_.selectmanager.md)_

_Defined in
[src/managers/SelectManager.ts:287](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/SelectManager.ts#L287)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `limit` | any  |

**Returns:** _[SelectManager](_managers_selectmanager_.selectmanager.md)_

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

### union

▸ **union**(`other`:
[TreeManager](_managers_treemanager_.treemanager.md)‹[SelectManager](_managers_selectmanager_.selectmanager.md),
[SelectStatement](_nodes_selectstatement_.selectstatement.md)›):
_[Union](_nodes_union_.union.md)_

_Defined in
[src/managers/SelectManager.ts:297](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/SelectManager.ts#L297)_

**Parameters:**

| Name    | Type                                                                                                                                                                            |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `other` | [TreeManager](_managers_treemanager_.treemanager.md)‹[SelectManager](_managers_selectmanager_.selectmanager.md), [SelectStatement](_nodes_selectstatement_.selectstatement.md)› |

**Returns:** _[Union](_nodes_union_.union.md)_

---

### unionAll

▸ **unionAll**(`other`:
[TreeManager](_managers_treemanager_.treemanager.md)‹[SelectManager](_managers_selectmanager_.selectmanager.md),
[SelectStatement](_nodes_selectstatement_.selectstatement.md)›):
_[UnionAll](_nodes_unionall_.unionall.md)_

_Defined in
[src/managers/SelectManager.ts:301](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/SelectManager.ts#L301)_

**Parameters:**

| Name    | Type                                                                                                                                                                            |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `other` | [TreeManager](_managers_treemanager_.treemanager.md)‹[SelectManager](_managers_selectmanager_.selectmanager.md), [SelectStatement](_nodes_selectstatement_.selectstatement.md)› |

**Returns:** _[UnionAll](_nodes_unionall_.unionall.md)_

---

### where

▸ **where**(`this`: [SelectManager](_managers_selectmanager_.selectmanager.md),
`expr`: any): _[SelectManager](_managers_selectmanager_.selectmanager.md)_

_Inherited from
[TreeManager](_managers_treemanager_.treemanager.md).[where](_managers_treemanager_.treemanager.md#where)_

_Defined in
[src/managers/TreeManager.ts:44](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/TreeManager.ts#L44)_

**Parameters:**

| Name   | Type                                                       |
| ------ | ---------------------------------------------------------- |
| `this` | [SelectManager](_managers_selectmanager_.selectmanager.md) |
| `expr` | any                                                        |

**Returns:** _[SelectManager](_managers_selectmanager_.selectmanager.md)_

---

### whereSQL

▸ **whereSQL**(`engine`: [Engine](../interfaces/_interfaces_engine_.engine.md) |
null): _[SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) | null_

_Defined in
[src/managers/SelectManager.ts:305](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/SelectManager.ts#L305)_

**Parameters:**

| Name     | Type                                                              | Default          |
| -------- | ----------------------------------------------------------------- | ---------------- |
| `engine` | [Engine](../interfaces/_interfaces_engine_.engine.md) &#124; null | SequelAST.engine |

**Returns:** _[SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) | null_

---

### window

▸ **window**(`name`: any): _[NamedWindow](_nodes_namedwindow_.namedwindow.md)_

_Defined in
[src/managers/SelectManager.ts:323](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/SelectManager.ts#L323)_

**Parameters:**

| Name   | Type |
| ------ | ---- |
| `name` | any  |

**Returns:** _[NamedWindow](_nodes_namedwindow_.namedwindow.md)_

---

### with

▸ **with**(...`subqueries`: any[]):
_[SelectManager](_managers_selectmanager_.selectmanager.md)_

_Defined in
[src/managers/SelectManager.ts:331](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/SelectManager.ts#L331)_

**Parameters:**

| Name            | Type  |
| --------------- | ----- |
| `...subqueries` | any[] |

**Returns:** _[SelectManager](_managers_selectmanager_.selectmanager.md)_

---

### withRecursive

▸ **withRecursive**(...`subqueries`: any[]):
_[SelectManager](_managers_selectmanager_.selectmanager.md)_

_Defined in
[src/managers/SelectManager.ts:339](https://github.com/sequeljs/ast/blob/aa0ef0f/src/managers/SelectManager.ts#L339)_

**Parameters:**

| Name            | Type  |
| --------------- | ----- |
| `...subqueries` | any[] |

**Returns:** _[SelectManager](_managers_selectmanager_.selectmanager.md)_
