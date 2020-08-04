---
id: '_nodes_extract_.extract'
title: 'Extract'
sidebar_label: 'Extract'
---

[@sequeljs/ast](../index.md) › [Globals](../globals.md) ›
["nodes/Extract"](../modules/_nodes_extract_.md) ›
[Extract](_nodes_extract_.extract.md)

## Type parameters

▪ **T**

## Hierarchy

↳ [Unary](_nodes_unary_.unary.md)

↳ **Extract**

## Index

### Constructors

- [constructor](_nodes_extract_.extract.md#constructor)

### Properties

- [expr](_nodes_extract_.extract.md#expr)
- [field](_nodes_extract_.extract.md#field)

### Accessors

- [value](_nodes_extract_.extract.md#value)

### Methods

- [as](_nodes_extract_.extract.md#as)
- [toSQL](_nodes_extract_.extract.md#tosql)

## Constructors

### constructor

\+ **new Extract**(`expr`: any, `field`: any):
_[Extract](_nodes_extract_.extract.md)_

_Overrides
[DistinctOn](_nodes_distincton_.distincton.md).[constructor](_nodes_distincton_.distincton.md#constructor)_

_Defined in
[src/nodes/Extract.ts:4](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Extract.ts#L4)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `expr`  | any  |
| `field` | any  |

**Returns:** _[Extract](_nodes_extract_.extract.md)_

## Properties

### expr

• **expr**: _T_

_Inherited from
[DistinctOn](_nodes_distincton_.distincton.md).[expr](_nodes_distincton_.distincton.md#expr)_

_Defined in
[src/nodes/Unary.ts:8](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Unary.ts#L8)_

---

### field

• **field**: _any_

_Defined in
[src/nodes/Extract.ts:4](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Extract.ts#L4)_

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