---
id: '_nodes_sum_.sum'
title: 'Sum'
sidebar_label: 'Sum'
---

[@sequeljs/ast](../index.md) › [Globals](../globals.md) ›
["nodes/Sum"](../modules/_nodes_sum_.md) › [Sum](_nodes_sum_.sum.md)

## Hierarchy

↳ [SQLFunction](_nodes_sqlfunction_.sqlfunction.md)

↳ **Sum**

## Index

### Constructors

- [constructor](_nodes_sum_.sum.md#constructor)

### Properties

- [alias](_nodes_sum_.sum.md#alias)
- [distinct](_nodes_sum_.sum.md#distinct)
- [expressions](_nodes_sum_.sum.md#expressions)

### Methods

- [as](_nodes_sum_.sum.md#as)
- [over](_nodes_sum_.sum.md#over)
- [toSQL](_nodes_sum_.sum.md#tosql)

## Constructors

### constructor

\+ **new Sum**(`expr`: any, `aliaz`: string |
[SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) | null):
_[Sum](_nodes_sum_.sum.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[constructor](_nodes_sqlfunction_.sqlfunction.md#constructor)_

_Defined in
[src/nodes/SQLFunction.ts:11](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/SQLFunction.ts#L11)_

**Parameters:**

| Name    | Type                                                                     | Default |
| ------- | ------------------------------------------------------------------------ | ------- |
| `expr`  | any                                                                      | -       |
| `aliaz` | string &#124; [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) &#124; null | null    |

**Returns:** _[Sum](_nodes_sum_.sum.md)_

## Properties

### alias

• **alias**: _[SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) | null_ = null

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[alias](_nodes_sqlfunction_.sqlfunction.md#alias)_

_Defined in
[src/nodes/SQLFunction.ts:7](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/SQLFunction.ts#L7)_

---

### distinct

• **distinct**: _boolean | null_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[distinct](_nodes_sqlfunction_.sqlfunction.md#distinct)_

_Defined in
[src/nodes/SQLFunction.ts:9](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/SQLFunction.ts#L9)_

---

### expressions

• **expressions**: _any_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[expressions](_nodes_sqlfunction_.sqlfunction.md#expressions)_

_Defined in
[src/nodes/SQLFunction.ts:11](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/SQLFunction.ts#L11)_

## Methods

### as

▸ **as**(`aliaz`: any): _[SQLFunction](_nodes_sqlfunction_.sqlfunction.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[as](_nodes_sqlfunction_.sqlfunction.md#as)_

_Defined in
[src/nodes/SQLFunction.ts:23](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/SQLFunction.ts#L23)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `aliaz` | any  |

**Returns:** _[SQLFunction](_nodes_sqlfunction_.sqlfunction.md)_

---

### over

▸ **over**(`expr`: string | [Node](_nodes_node_.node.md) |
[SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) | null):
_[Over](_nodes_over_.over.md)_

_Inherited from
[WindowPredications](_mixins_windowpredication_.windowpredications.md).[over](_mixins_windowpredication_.windowpredications.md#over)_

_Defined in
[src/mixins/WindowPredication.ts:6](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/WindowPredication.ts#L6)_

**Parameters:**

| Name   | Type                                                                                                         | Default |
| ------ | ------------------------------------------------------------------------------------------------------------ | ------- |
| `expr` | string &#124; [Node](_nodes_node_.node.md) &#124; [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) &#124; null | null    |

**Returns:** _[Over](_nodes_over_.over.md)_

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
