---
id: '_nodes_rollup_.rollup'
title: 'RollUp'
sidebar_label: 'RollUp'
---

[@sequeljs/ast](../index.md) › [Globals](../globals.md) ›
["nodes/RollUp"](../modules/_nodes_rollup_.md) ›
[RollUp](_nodes_rollup_.rollup.md)

## Hierarchy

↳
[Unary](_nodes_unary_.unary.md)‹[GroupingElement](_nodes_groupingelement_.groupingelement.md)
| [Visitable](../modules/_visitors_visitable_.md#visitable)[]›

↳ **RollUp**

## Index

### Constructors

- [constructor](_nodes_rollup_.rollup.md#constructor)

### Properties

- [expr](_nodes_rollup_.rollup.md#expr)

### Accessors

- [value](_nodes_rollup_.rollup.md#value)

### Methods

- [as](_nodes_rollup_.rollup.md#as)
- [toSQL](_nodes_rollup_.rollup.md#tosql)

## Constructors

### constructor

\+ **new RollUp**(`expr`:
[GroupingElement](_nodes_groupingelement_.groupingelement.md) |
[Visitable](../modules/_visitors_visitable_.md#visitable)[]):
_[RollUp](_nodes_rollup_.rollup.md)_

_Inherited from
[DistinctOn](_nodes_distincton_.distincton.md).[constructor](_nodes_distincton_.distincton.md#constructor)_

_Defined in
[src/nodes/Unary.ts:12](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Unary.ts#L12)_

**Parameters:**

| Name   | Type                                                                                                                             |
| ------ | -------------------------------------------------------------------------------------------------------------------------------- |
| `expr` | [GroupingElement](_nodes_groupingelement_.groupingelement.md) &#124; [Visitable](../modules/_visitors_visitable_.md#visitable)[] |

**Returns:** _[RollUp](_nodes_rollup_.rollup.md)_

## Properties

### expr

• **expr**: _[GroupingElement](_nodes_groupingelement_.groupingelement.md) |
[Visitable](../modules/_visitors_visitable_.md#visitable)[]_

_Inherited from
[DistinctOn](_nodes_distincton_.distincton.md).[expr](_nodes_distincton_.distincton.md#expr)_

_Defined in
[src/nodes/Unary.ts:8](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Unary.ts#L8)_

## Accessors

### value

• **get value**():
_[GroupingElement](_nodes_groupingelement_.groupingelement.md) |
[Visitable](../modules/_visitors_visitable_.md#visitable)[]_

_Inherited from
[DistinctOn](_nodes_distincton_.distincton.md).[value](_nodes_distincton_.distincton.md#value)_

_Defined in
[src/nodes/Unary.ts:10](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Unary.ts#L10)_

**Returns:** _[GroupingElement](_nodes_groupingelement_.groupingelement.md) |
[Visitable](../modules/_visitors_visitable_.md#visitable)[]_

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
