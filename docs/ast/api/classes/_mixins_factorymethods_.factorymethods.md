---
id: '_mixins_factorymethods_.factorymethods'
title: 'FactoryMethods'
sidebar_label: 'FactoryMethods'
---

[@sequeljs/ast](../index.md) › [Globals](../globals.md) ›
["mixins/FactoryMethods"](../modules/_mixins_factorymethods_.md) ›
[FactoryMethods](_mixins_factorymethods_.factorymethods.md)

## Hierarchy

- **FactoryMethods**

  ↳ [TreeManager](_managers_treemanager_.treemanager.md)

  ↳ [Table](_table_.table.md)

  ↳ [Node](_nodes_node_.node.md)

## Index

### Methods

- [coalesce](_mixins_factorymethods_.factorymethods.md#coalesce)
- [createAnd](_mixins_factorymethods_.factorymethods.md#createand)
- [createFalse](_mixins_factorymethods_.factorymethods.md#createfalse)
- [createJoin](_mixins_factorymethods_.factorymethods.md#createjoin)
- [createOn](_mixins_factorymethods_.factorymethods.md#createon)
- [createStringJoin](_mixins_factorymethods_.factorymethods.md#createstringjoin)
- [createTableAlias](_mixins_factorymethods_.factorymethods.md#createtablealias)
- [createTrue](_mixins_factorymethods_.factorymethods.md#createtrue)
- [grouping](_mixins_factorymethods_.factorymethods.md#grouping)
- [lower](_mixins_factorymethods_.factorymethods.md#lower)

## Methods

### coalesce

▸ **coalesce**(...`exprs`: any[]):
_[NamedSQLFunction](_nodes_namedsqlfunction_.namedsqlfunction.md)_

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

_Defined in
[src/mixins/FactoryMethods.ts:30](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/FactoryMethods.ts#L30)_

**Returns:** _[False](_nodes_false_.false.md)_

---

### createJoin

▸ **createJoin**(`to`: string |
[Relation](../modules/_interfaces_relation_.md#relation) |
[SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) | null):
_[InnerJoin](_nodes_innerjoin_.innerjoin.md)_

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

_Defined in
[src/mixins/FactoryMethods.ts:87](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/FactoryMethods.ts#L87)_

**Returns:** _[True](_nodes_true_.true.md)_

---

### grouping

▸ **grouping**(`expr`: any): _[Grouping](_nodes_grouping_.grouping.md)_

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

_Defined in
[src/mixins/FactoryMethods.ts:95](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/FactoryMethods.ts#L95)_

**Parameters:**

| Name     | Type |
| -------- | ---- |
| `column` | any  |

**Returns:** _[NamedSQLFunction](_nodes_namedsqlfunction_.namedsqlfunction.md)_
