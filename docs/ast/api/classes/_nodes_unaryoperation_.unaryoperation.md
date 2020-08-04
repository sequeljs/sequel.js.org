---
id: '_nodes_unaryoperation_.unaryoperation'
title: 'UnaryOperation'
sidebar_label: 'UnaryOperation'
---

[@sequeljs/ast](../index.md) › [Globals](../globals.md) ›
["nodes/UnaryOperation"](../modules/_nodes_unaryoperation_.md) ›
[UnaryOperation](_nodes_unaryoperation_.unaryoperation.md)

## Type parameters

▪ **T**

## Hierarchy

↳ [Unary](_nodes_unary_.unary.md)

↳ **UnaryOperation**

↳ [BitwiseNot](_nodes_bitwisenot_.bitwisenot.md)

## Index

### Constructors

- [constructor](_nodes_unaryoperation_.unaryoperation.md#constructor)

### Properties

- [expr](_nodes_unaryoperation_.unaryoperation.md#expr)
- [operator](_nodes_unaryoperation_.unaryoperation.md#readonly-operator)

### Accessors

- [value](_nodes_unaryoperation_.unaryoperation.md#value)

### Methods

- [as](_nodes_unaryoperation_.unaryoperation.md#as)
- [toSQL](_nodes_unaryoperation_.unaryoperation.md#tosql)

## Constructors

### constructor

\+ **new UnaryOperation**(`operator`: string, `operand`: number | string |
[Attribute](_attributes_attribute_.attribute.md)):
_[UnaryOperation](_nodes_unaryoperation_.unaryoperation.md)_

_Overrides
[DistinctOn](_nodes_distincton_.distincton.md).[constructor](_nodes_distincton_.distincton.md#constructor)_

_Defined in
[src/nodes/UnaryOperation.ts:6](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/UnaryOperation.ts#L6)_

**Parameters:**

| Name       | Type                                                                         |
| ---------- | ---------------------------------------------------------------------------- |
| `operator` | string                                                                       |
| `operand`  | number &#124; string &#124; [Attribute](_attributes_attribute_.attribute.md) |

**Returns:** _[UnaryOperation](_nodes_unaryoperation_.unaryoperation.md)_

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
