---
id: '_nodes_isnotdistinctfrom_.isnotdistinctfrom'
title: 'IsNotDistinctFrom'
sidebar_label: 'IsNotDistinctFrom'
---

[@sequeljs/ast](../index.md) › [Globals](../globals.md) ›
["nodes/IsNotDistinctFrom"](../modules/_nodes_isnotdistinctfrom_.md) ›
[IsNotDistinctFrom](_nodes_isnotdistinctfrom_.isnotdistinctfrom.md)

## Type parameters

▪ **L**

▪ **R**

## Hierarchy

↳ [Equality](_nodes_equality_.equality.md)

↳ **IsNotDistinctFrom**

## Index

### Constructors

- [constructor](_nodes_isnotdistinctfrom_.isnotdistinctfrom.md#constructor)

### Properties

- [left](_nodes_isnotdistinctfrom_.isnotdistinctfrom.md#left)
- [operator](_nodes_isnotdistinctfrom_.isnotdistinctfrom.md#operator)
- [right](_nodes_isnotdistinctfrom_.isnotdistinctfrom.md#right)

### Accessors

- [operand1](_nodes_isnotdistinctfrom_.isnotdistinctfrom.md#operand1)
- [operand2](_nodes_isnotdistinctfrom_.isnotdistinctfrom.md#operand2)

### Methods

- [toSQL](_nodes_isnotdistinctfrom_.isnotdistinctfrom.md#tosql)

## Constructors

### constructor

\+ **new IsNotDistinctFrom**(`left`: L, `right`: R):
_[IsNotDistinctFrom](_nodes_isnotdistinctfrom_.isnotdistinctfrom.md)_

_Inherited from
[As](_nodes_as_.as.md).[constructor](_nodes_as_.as.md#constructor)_

_Defined in
[src/nodes/Binary.ts:8](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Binary.ts#L8)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `left`  | L    |
| `right` | R    |

**Returns:**
_[IsNotDistinctFrom](_nodes_isnotdistinctfrom_.isnotdistinctfrom.md)_

## Properties

### left

• **left**: _L_

_Inherited from [As](_nodes_as_.as.md).[left](_nodes_as_.as.md#left)_

_Defined in
[src/nodes/Binary.ts:6](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Binary.ts#L6)_

---

### operator

• **operator**: _string_ = "=="

_Inherited from
[Equality](_nodes_equality_.equality.md).[operator](_nodes_equality_.equality.md#operator)_

_Defined in
[src/nodes/Equality.ts:4](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Equality.ts#L4)_

---

### right

• **right**: _R_

_Inherited from [As](_nodes_as_.as.md).[right](_nodes_as_.as.md#right)_

_Defined in
[src/nodes/Binary.ts:8](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Binary.ts#L8)_

## Accessors

### operand1

• **get operand1**(): _L_

_Inherited from
[Equality](_nodes_equality_.equality.md).[operand1](_nodes_equality_.equality.md#operand1)_

_Defined in
[src/nodes/Equality.ts:6](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Equality.ts#L6)_

**Returns:** _L_

---

### operand2

• **get operand2**(): _R_

_Inherited from
[Equality](_nodes_equality_.equality.md).[operand2](_nodes_equality_.equality.md#operand2)_

_Defined in
[src/nodes/Equality.ts:10](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Equality.ts#L10)_

**Returns:** _R_

## Methods

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
