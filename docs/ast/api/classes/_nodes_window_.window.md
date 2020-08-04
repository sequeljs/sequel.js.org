---
id: '_nodes_window_.window'
title: 'Window'
sidebar_label: 'Window'
---

[@sequeljs/ast](../index.md) › [Globals](../globals.md) ›
["nodes/Window"](../modules/_nodes_window_.md) ›
[Window](_nodes_window_.window.md)

## Hierarchy

↳ [Node](_nodes_node_.node.md)

↳ **Window**

↳ [NamedWindow](_nodes_namedwindow_.namedwindow.md)

## Index

### Properties

- [framing](_nodes_window_.window.md#framing)
- [orders](_nodes_window_.window.md#orders)
- [partitions](_nodes_window_.window.md#partitions)

### Methods

- [and](_nodes_window_.window.md#and)
- [coalesce](_nodes_window_.window.md#coalesce)
- [createAnd](_nodes_window_.window.md#createand)
- [createFalse](_nodes_window_.window.md#createfalse)
- [createJoin](_nodes_window_.window.md#createjoin)
- [createOn](_nodes_window_.window.md#createon)
- [createStringJoin](_nodes_window_.window.md#createstringjoin)
- [createTableAlias](_nodes_window_.window.md#createtablealias)
- [createTrue](_nodes_window_.window.md#createtrue)
- [frame](_nodes_window_.window.md#frame)
- [grouping](_nodes_window_.window.md#grouping)
- [lower](_nodes_window_.window.md#lower)
- [not](_nodes_window_.window.md#not)
- [or](_nodes_window_.window.md#or)
- [order](_nodes_window_.window.md#order)
- [partition](_nodes_window_.window.md#partition)
- [range](_nodes_window_.window.md#range)
- [rows](_nodes_window_.window.md#rows)
- [toSQL](_nodes_window_.window.md#tosql)

## Properties

### framing

• **framing**: _any_ = null

_Defined in
[src/nodes/Window.ts:7](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Window.ts#L7)_

---

### orders

• **orders**: _any[]_ = []

_Defined in
[src/nodes/Window.ts:9](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Window.ts#L9)_

---

### partitions

• **partitions**: _any[]_ = []

_Defined in
[src/nodes/Window.ts:11](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Window.ts#L11)_

## Methods

### and

▸ **and**(`right`: any): _[And](_nodes_and_.and.md)_

_Inherited from
[Comment](_nodes_comment_.comment.md).[and](_nodes_comment_.comment.md#and)_

_Defined in
[src/mixins/NodeMethods.ts:11](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/NodeMethods.ts#L11)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `right` | any  |

**Returns:** _[And](_nodes_and_.and.md)_

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

### frame

▸ **frame**(`expr`: any): _any_

_Defined in
[src/nodes/Window.ts:13](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Window.ts#L13)_

**Parameters:**

| Name   | Type |
| ------ | ---- |
| `expr` | any  |

**Returns:** _any_

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

### not

▸ **not**(`this`: [Node](_nodes_node_.node.md)): _[Not](_nodes_not_.not.md)_

_Inherited from
[Comment](_nodes_comment_.comment.md).[not](_nodes_comment_.comment.md#not)_

_Defined in
[src/mixins/NodeMethods.ts:15](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/NodeMethods.ts#L15)_

**Parameters:**

| Name   | Type                         |
| ------ | ---------------------------- |
| `this` | [Node](_nodes_node_.node.md) |

**Returns:** _[Not](_nodes_not_.not.md)_

---

### or

▸ **or**‹**T**›(`right`: T): _[Grouping](_nodes_grouping_.grouping.md)_

_Inherited from
[Comment](_nodes_comment_.comment.md).[or](_nodes_comment_.comment.md#or)_

_Defined in
[src/mixins/NodeMethods.ts:19](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/NodeMethods.ts#L19)_

**Type parameters:**

▪ **T**: _[Visitable](../modules/_visitors_visitable_.md#visitable)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `right` | T    |

**Returns:** _[Grouping](_nodes_grouping_.grouping.md)_

---

### order

▸ **order**(...`expr`: any[]): _[Window](_nodes_window_.window.md)_

_Defined in
[src/nodes/Window.ts:19](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Window.ts#L19)_

**Parameters:**

| Name      | Type  |
| --------- | ----- |
| `...expr` | any[] |

**Returns:** _[Window](_nodes_window_.window.md)_

---

### partition

▸ **partition**(...`expr`: any[]): _[Window](_nodes_window_.window.md)_

_Defined in
[src/nodes/Window.ts:27](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Window.ts#L27)_

**Parameters:**

| Name      | Type  |
| --------- | ----- |
| `...expr` | any[] |

**Returns:** _[Window](_nodes_window_.window.md)_

---

### range

▸ **range**(`expr`: any): _[Range](_nodes_range_.range.md)_

_Defined in
[src/nodes/Window.ts:35](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Window.ts#L35)_

**Parameters:**

| Name   | Type | Default |
| ------ | ---- | ------- |
| `expr` | any  | null    |

**Returns:** _[Range](_nodes_range_.range.md)_

---

### rows

▸ **rows**(`expr`: any): _[Rows](_nodes_rows_.rows.md)_

_Defined in
[src/nodes/Window.ts:45](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Window.ts#L45)_

**Parameters:**

| Name   | Type | Default |
| ------ | ---- | ------- |
| `expr` | any  | null    |

**Returns:** _[Rows](_nodes_rows_.rows.md)_

---

### toSQL

▸ **toSQL**(`engine`: [Engine](../interfaces/_interfaces_engine_.engine.md) |
null): _any_

_Inherited from [As](_nodes_as_.as.md).[toSQL](_nodes_as_.as.md#tosql)_

_Defined in
[src/nodes/Node.ts:16](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Node.ts#L16)_

**Parameters:**

| Name     | Type                                                              | Default          |
| -------- | ----------------------------------------------------------------- | ---------------- |
| `engine` | [Engine](../interfaces/_interfaces_engine_.engine.md) &#124; null | SequelAST.engine |

**Returns:** _any_
