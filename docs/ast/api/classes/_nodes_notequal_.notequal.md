---
id: '_nodes_notequal_.notequal'
title: 'NotEqual'
sidebar_label: 'NotEqual'
---

[@sequeljs/ast](../index.md) › [Globals](../globals.md) ›
["nodes/NotEqual"](../modules/_nodes_notequal_.md) ›
[NotEqual](_nodes_notequal_.notequal.md)

## Type parameters

▪ **L**

▪ **R**

## Hierarchy

↳ [Binary](_nodes_binary_.binary.md)

↳ **NotEqual**

## Index

### Constructors

- [constructor](_nodes_notequal_.notequal.md#constructor)

### Properties

- [left](_nodes_notequal_.notequal.md#left)
- [right](_nodes_notequal_.notequal.md#right)

### Methods

- [as](_nodes_notequal_.notequal.md#as)
- [toSQL](_nodes_notequal_.notequal.md#tosql)

## Constructors

### constructor

\+ **new NotEqual**(`left`: L, `right`: R):
_[NotEqual](_nodes_notequal_.notequal.md)_

_Inherited from
[As](_nodes_as_.as.md).[constructor](_nodes_as_.as.md#constructor)_

_Defined in
[src/nodes/Binary.ts:8](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Binary.ts#L8)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `left`  | L    |
| `right` | R    |

**Returns:** _[NotEqual](_nodes_notequal_.notequal.md)_

## Properties

### left

• **left**: _L_

_Inherited from [As](_nodes_as_.as.md).[left](_nodes_as_.as.md#left)_

_Defined in
[src/nodes/Binary.ts:6](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Binary.ts#L6)_

---

### right

• **right**: _R_

_Inherited from [As](_nodes_as_.as.md).[right](_nodes_as_.as.md#right)_

_Defined in
[src/nodes/Binary.ts:8](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Binary.ts#L8)_

## Methods

### as

▸ **as**(`other`: string | [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md)):
_[As](_nodes_as_.as.md)_

_Inherited from [As](_nodes_as_.as.md).[as](_nodes_as_.as.md#as)_

_Defined in
[src/mixins/AliasPredication.ts:5](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/AliasPredication.ts#L5)_

**Parameters:**

| Name    | Type                                                         |
| ------- | ------------------------------------------------------------ |
| `other` | string &#124; [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) |

**Returns:** _[As](_nodes_as_.as.md)_

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
