---
id: '_nodes_withrecursive_.withrecursive'
title: 'WithRecursive'
sidebar_label: 'WithRecursive'
---

[@sequeljs/ast](../index.md) › [Globals](../globals.md) ›
["nodes/WithRecursive"](../modules/_nodes_withrecursive_.md) ›
[WithRecursive](_nodes_withrecursive_.withrecursive.md)

## Type parameters

▪ **T**

## Hierarchy

↳ [With](_nodes_with_.with.md)

↳ **WithRecursive**

## Index

### Constructors

- [constructor](_nodes_withrecursive_.withrecursive.md#constructor)

### Properties

- [expr](_nodes_withrecursive_.withrecursive.md#expr)

### Accessors

- [children](_nodes_withrecursive_.withrecursive.md#children)
- [value](_nodes_withrecursive_.withrecursive.md#value)

### Methods

- [toSQL](_nodes_withrecursive_.withrecursive.md#tosql)

## Constructors

### constructor

\+ **new WithRecursive**(`expr`: T):
_[WithRecursive](_nodes_withrecursive_.withrecursive.md)_

_Inherited from
[DistinctOn](_nodes_distincton_.distincton.md).[constructor](_nodes_distincton_.distincton.md#constructor)_

_Defined in
[src/nodes/Unary.ts:12](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Unary.ts#L12)_

**Parameters:**

| Name   | Type |
| ------ | ---- |
| `expr` | T    |

**Returns:** _[WithRecursive](_nodes_withrecursive_.withrecursive.md)_

## Properties

### expr

• **expr**: _T_

_Inherited from
[DistinctOn](_nodes_distincton_.distincton.md).[expr](_nodes_distincton_.distincton.md#expr)_

_Defined in
[src/nodes/Unary.ts:8](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Unary.ts#L8)_

## Accessors

### children

• **get children**(): _any_

_Inherited from
[With](_nodes_with_.with.md).[children](_nodes_with_.with.md#children)_

_Defined in
[src/nodes/With.ts:4](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/With.ts#L4)_

**Returns:** _any_

---

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
