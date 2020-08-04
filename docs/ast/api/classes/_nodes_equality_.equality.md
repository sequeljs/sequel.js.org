---
id: '_nodes_equality_.equality'
title: 'Equality'
sidebar_label: 'Equality'
---

[@sequeljs/ast](../index.md) › [Globals](../globals.md) ›
["nodes/Equality"](../modules/_nodes_equality_.md) ›
[Equality](_nodes_equality_.equality.md)

## Type parameters

▪ **L**

▪ **R**

## Hierarchy

↳ [Binary](_nodes_binary_.binary.md)‹L, R›

↳ **Equality**

↳ [In](_nodes_in_.in.md)

↳ [IsDistinctFrom](_nodes_isdistinctfrom_.isdistinctfrom.md)

↳ [IsNotDistinctFrom](_nodes_isnotdistinctfrom_.isnotdistinctfrom.md)

## Index

### Constructors

- [constructor](_nodes_equality_.equality.md#constructor)

### Properties

- [left](_nodes_equality_.equality.md#left)
- [operator](_nodes_equality_.equality.md#operator)
- [right](_nodes_equality_.equality.md#right)

### Accessors

- [operand1](_nodes_equality_.equality.md#operand1)
- [operand2](_nodes_equality_.equality.md#operand2)

### Methods

- [as](_nodes_equality_.equality.md#as)
- [toSQL](_nodes_equality_.equality.md#tosql)

## Constructors

### constructor

\+ **new Equality**(`left`: L, `right`: R):
_[Equality](_nodes_equality_.equality.md)_

_Inherited from
[As](_nodes_as_.as.md).[constructor](_nodes_as_.as.md#constructor)_

_Defined in
[src/nodes/Binary.ts:8](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Binary.ts#L8)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `left`  | L    |
| `right` | R    |

**Returns:** _[Equality](_nodes_equality_.equality.md)_

## Properties

### left

• **left**: _L_

_Inherited from [As](_nodes_as_.as.md).[left](_nodes_as_.as.md#left)_

_Defined in
[src/nodes/Binary.ts:6](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Binary.ts#L6)_

---

### operator

• **operator**: _string_ = "=="

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

_Defined in
[src/nodes/Equality.ts:6](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Equality.ts#L6)_

**Returns:** _L_

---

### operand2

• **get operand2**(): _R_

_Defined in
[src/nodes/Equality.ts:10](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Equality.ts#L10)_

**Returns:** _R_

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
