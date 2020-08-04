---
id: '_nodes_deletestatement_.deletestatement'
title: 'DeleteStatement'
sidebar_label: 'DeleteStatement'
---

[@sequeljs/ast](../index.md) › [Globals](../globals.md) ›
["nodes/DeleteStatement"](../modules/_nodes_deletestatement_.md) ›
[DeleteStatement](_nodes_deletestatement_.deletestatement.md)

## Hierarchy

↳ [Node](_nodes_node_.node.md)

↳ **DeleteStatement**

## Index

### Constructors

- [constructor](_nodes_deletestatement_.deletestatement.md#constructor)

### Properties

- [key](_nodes_deletestatement_.deletestatement.md#key)
- [left](_nodes_deletestatement_.deletestatement.md#left)
- [limit](_nodes_deletestatement_.deletestatement.md#limit)
- [offset](_nodes_deletestatement_.deletestatement.md#offset)
- [orders](_nodes_deletestatement_.deletestatement.md#orders)
- [right](_nodes_deletestatement_.deletestatement.md#right)

### Accessors

- [relation](_nodes_deletestatement_.deletestatement.md#relation)
- [wheres](_nodes_deletestatement_.deletestatement.md#wheres)

### Methods

- [and](_nodes_deletestatement_.deletestatement.md#and)
- [coalesce](_nodes_deletestatement_.deletestatement.md#coalesce)
- [createAnd](_nodes_deletestatement_.deletestatement.md#createand)
- [createFalse](_nodes_deletestatement_.deletestatement.md#createfalse)
- [createJoin](_nodes_deletestatement_.deletestatement.md#createjoin)
- [createOn](_nodes_deletestatement_.deletestatement.md#createon)
- [createStringJoin](_nodes_deletestatement_.deletestatement.md#createstringjoin)
- [createTableAlias](_nodes_deletestatement_.deletestatement.md#createtablealias)
- [createTrue](_nodes_deletestatement_.deletestatement.md#createtrue)
- [grouping](_nodes_deletestatement_.deletestatement.md#grouping)
- [lower](_nodes_deletestatement_.deletestatement.md#lower)
- [not](_nodes_deletestatement_.deletestatement.md#not)
- [or](_nodes_deletestatement_.deletestatement.md#or)
- [toSQL](_nodes_deletestatement_.deletestatement.md#tosql)

## Constructors

### constructor

\+ **new DeleteStatement**(`relation`:
[JoinSource](_nodes_joinsource_.joinsource.md) |
[Relation](../modules/_interfaces_relation_.md#relation) |
[SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) | null, `wheres`: any[]):
_[DeleteStatement](_nodes_deletestatement_.deletestatement.md)_

_Defined in
[src/nodes/DeleteStatement.ts:35](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/DeleteStatement.ts#L35)_

**Parameters:**

| Name       | Type                                                                                                                                                                             | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `relation` | [JoinSource](_nodes_joinsource_.joinsource.md) &#124; [Relation](../modules/_interfaces_relation_.md#relation) &#124; [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) &#124; null | null    |
| `wheres`   | any[]                                                                                                                                                                            | []      |

**Returns:** _[DeleteStatement](_nodes_deletestatement_.deletestatement.md)_

## Properties

### key

• **key**: _any_ = null

_Defined in
[src/nodes/DeleteStatement.ts:9](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/DeleteStatement.ts#L9)_

---

### left

• **left**: _[JoinSource](_nodes_joinsource_.joinsource.md) |
[Relation](../modules/_interfaces_relation_.md#relation) |
[SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) | null_ = null

_Defined in
[src/nodes/DeleteStatement.ts:17](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/DeleteStatement.ts#L17)_

---

### limit

• **limit**: _any_ = null

_Defined in
[src/nodes/DeleteStatement.ts:11](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/DeleteStatement.ts#L11)_

---

### offset

• **offset**: _any_ = null

_Defined in
[src/nodes/DeleteStatement.ts:13](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/DeleteStatement.ts#L13)_

---

### orders

• **orders**: _any[]_ = []

_Defined in
[src/nodes/DeleteStatement.ts:15](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/DeleteStatement.ts#L15)_

---

### right

• **right**: _any[]_ = []

_Defined in
[src/nodes/DeleteStatement.ts:19](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/DeleteStatement.ts#L19)_

## Accessors

### relation

• **get relation**(): _[JoinSource](_nodes_joinsource_.joinsource.md) |
[Relation](../modules/_interfaces_relation_.md#relation) |
[SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) | null_

_Defined in
[src/nodes/DeleteStatement.ts:21](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/DeleteStatement.ts#L21)_

**Returns:** _[JoinSource](_nodes_joinsource_.joinsource.md) |
[Relation](../modules/_interfaces_relation_.md#relation) |
[SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) | null_

• **set relation**(`val`: [JoinSource](_nodes_joinsource_.joinsource.md) |
[Relation](../modules/_interfaces_relation_.md#relation) |
[SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) | null): _void_

_Defined in
[src/nodes/DeleteStatement.ts:25](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/DeleteStatement.ts#L25)_

**Parameters:**

| Name  | Type                                                                                                                                                                             |
| ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `val` | [JoinSource](_nodes_joinsource_.joinsource.md) &#124; [Relation](../modules/_interfaces_relation_.md#relation) &#124; [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) &#124; null |

**Returns:** _void_

---

### wheres

• **get wheres**(): _any[]_

_Defined in
[src/nodes/DeleteStatement.ts:29](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/DeleteStatement.ts#L29)_

**Returns:** _any[]_

• **set wheres**(`val`: any[]): _void_

_Defined in
[src/nodes/DeleteStatement.ts:33](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/DeleteStatement.ts#L33)_

**Parameters:**

| Name  | Type  |
| ----- | ----- |
| `val` | any[] |

**Returns:** _void_

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
