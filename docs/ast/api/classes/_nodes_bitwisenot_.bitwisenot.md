---
id: '_nodes_bitwisenot_.bitwisenot'
title: 'BitwiseNot'
sidebar_label: 'BitwiseNot'
---

[@sequeljs/ast](../index.md) › [Globals](../globals.md) ›
["nodes/BitwiseNot"](../modules/_nodes_bitwisenot_.md) ›
[BitwiseNot](_nodes_bitwisenot_.bitwisenot.md)

## Type parameters

▪ **T**

## Hierarchy

↳ [UnaryOperation](_nodes_unaryoperation_.unaryoperation.md)

↳ **BitwiseNot**

## Index

### Constructors

- [constructor](_nodes_bitwisenot_.bitwisenot.md#constructor)

### Properties

- [expr](_nodes_bitwisenot_.bitwisenot.md#expr)
- [operator](_nodes_bitwisenot_.bitwisenot.md#readonly-operator)

### Accessors

- [value](_nodes_bitwisenot_.bitwisenot.md#value)

### Methods

- [toSQL](_nodes_bitwisenot_.bitwisenot.md#tosql)

## Constructors

### constructor

\+ **new BitwiseNot**(`operand`: any):
_[BitwiseNot](_nodes_bitwisenot_.bitwisenot.md)_

_Overrides
[UnaryOperation](_nodes_unaryoperation_.unaryoperation.md).[constructor](_nodes_unaryoperation_.unaryoperation.md#constructor)_

_Defined in
[src/nodes/BitwiseNot.ts:3](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/BitwiseNot.ts#L3)_

**Parameters:**

| Name      | Type |
| --------- | ---- |
| `operand` | any  |

**Returns:** _[BitwiseNot](_nodes_bitwisenot_.bitwisenot.md)_

## Properties

### expr

• **expr**: _T_

_Inherited from
[DistinctOn](_nodes_distincton_.distincton.md).[expr](_nodes_distincton_.distincton.md#expr)_

_Defined in
[src/nodes/Unary.ts:8](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Unary.ts#L8)_

---

### `Readonly` operator

• **operator**: _string_

_Inherited from
[UnaryOperation](_nodes_unaryoperation_.unaryoperation.md).[operator](_nodes_unaryoperation_.unaryoperation.md#readonly-operator)_

_Defined in
[src/nodes/UnaryOperation.ts:6](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/UnaryOperation.ts#L6)_

## Accessors

### value

• **get value**(): _T_

_Inherited from
[DistinctOn](_nodes_distincton_.distincton.md).[value](_nodes_distincton_.distincton.md#value)_

_Defined in
[src/nodes/Unary.ts:10](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Unary.ts#L10)_

**Returns:** _T_

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
