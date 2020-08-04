---
id: '_nodes_unqualifiedcolumn_.unqualifiedcolumn'
title: 'UnqualifiedColumn'
sidebar_label: 'UnqualifiedColumn'
---

[@sequeljs/ast](../index.md) › [Globals](../globals.md) ›
["nodes/UnqualifiedColumn"](../modules/_nodes_unqualifiedcolumn_.md) ›
[UnqualifiedColumn](_nodes_unqualifiedcolumn_.unqualifiedcolumn.md)

## Hierarchy

↳
[Unary](_nodes_unary_.unary.md)‹[Attribute](_attributes_attribute_.attribute.md)›

↳ **UnqualifiedColumn**

## Index

### Constructors

- [constructor](_nodes_unqualifiedcolumn_.unqualifiedcolumn.md#constructor)

### Properties

- [expr](_nodes_unqualifiedcolumn_.unqualifiedcolumn.md#expr)

### Accessors

- [attribute](_nodes_unqualifiedcolumn_.unqualifiedcolumn.md#attribute)
- [column](_nodes_unqualifiedcolumn_.unqualifiedcolumn.md#column)
- [name](_nodes_unqualifiedcolumn_.unqualifiedcolumn.md#name)
- [relation](_nodes_unqualifiedcolumn_.unqualifiedcolumn.md#relation)
- [value](_nodes_unqualifiedcolumn_.unqualifiedcolumn.md#value)

### Methods

- [as](_nodes_unqualifiedcolumn_.unqualifiedcolumn.md#as)
- [toSQL](_nodes_unqualifiedcolumn_.unqualifiedcolumn.md#tosql)

## Constructors

### constructor

\+ **new UnqualifiedColumn**(`expr`:
[Attribute](_attributes_attribute_.attribute.md)):
_[UnqualifiedColumn](_nodes_unqualifiedcolumn_.unqualifiedcolumn.md)_

_Overrides
[DistinctOn](_nodes_distincton_.distincton.md).[constructor](_nodes_distincton_.distincton.md#constructor)_

_Defined in
[src/nodes/UnqualifiedColumn.ts:24](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/UnqualifiedColumn.ts#L24)_

**Parameters:**

| Name   | Type                                             |
| ------ | ------------------------------------------------ |
| `expr` | [Attribute](_attributes_attribute_.attribute.md) |

**Returns:**
_[UnqualifiedColumn](_nodes_unqualifiedcolumn_.unqualifiedcolumn.md)_

## Properties

### expr

• **expr**: _[Attribute](_attributes_attribute_.attribute.md)_

_Inherited from
[DistinctOn](_nodes_distincton_.distincton.md).[expr](_nodes_distincton_.distincton.md#expr)_

_Defined in
[src/nodes/Unary.ts:8](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Unary.ts#L8)_

## Accessors

### attribute

• **get attribute**(): _this["expr"]_

_Defined in
[src/nodes/UnqualifiedColumn.ts:6](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/UnqualifiedColumn.ts#L6)_

**Returns:** _this["expr"]_

• **set attribute**(`val`: this["expr"]): _void_

_Defined in
[src/nodes/UnqualifiedColumn.ts:10](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/UnqualifiedColumn.ts#L10)_

**Parameters:**

| Name  | Type         |
| ----- | ------------ |
| `val` | this["expr"] |

**Returns:** _void_

---

### column

• **get column**(): _this["name"]_

_Defined in
[src/nodes/UnqualifiedColumn.ts:14](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/UnqualifiedColumn.ts#L14)_

**Returns:** _this["name"]_

---

### name

• **get name**(): _Attribute["name"]_

_Defined in
[src/nodes/UnqualifiedColumn.ts:18](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/UnqualifiedColumn.ts#L18)_

**Returns:** _Attribute["name"]_

---

### relation

• **get relation**(): _Attribute["relation"]_

_Defined in
[src/nodes/UnqualifiedColumn.ts:22](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/UnqualifiedColumn.ts#L22)_

**Returns:** _Attribute["relation"]_

---

### value

• **get value**(): _[Attribute](_attributes_attribute_.attribute.md)_

_Inherited from
[DistinctOn](_nodes_distincton_.distincton.md).[value](_nodes_distincton_.distincton.md#value)_

_Defined in
[src/nodes/Unary.ts:10](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Unary.ts#L10)_

**Returns:** _[Attribute](_attributes_attribute_.attribute.md)_

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
