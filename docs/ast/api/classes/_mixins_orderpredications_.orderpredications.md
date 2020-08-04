---
id: '_mixins_orderpredications_.orderpredications'
title: 'OrderPredications'
sidebar_label: 'OrderPredications'
---

[@sequeljs/ast](../index.md) › [Globals](../globals.md) ›
["mixins/OrderPredications"](../modules/_mixins_orderpredications_.md) ›
[OrderPredications](_mixins_orderpredications_.orderpredications.md)

## Hierarchy

- **OrderPredications**

  ↳ [InfixOperation](_nodes_infixoperation_.infixoperation.md)

  ↳ [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md)

  ↳ [NodeExpression](_nodes_nodeexpression_.nodeexpression.md)

  ↳ [Attribute](_attributes_attribute_.attribute.md)

## Index

### Methods

- [asc](_mixins_orderpredications_.orderpredications.md#asc)
- [desc](_mixins_orderpredications_.orderpredications.md#desc)

## Methods

### asc

▸ **asc**(`this`: [Visitable](../modules/_visitors_visitable_.md#visitable)):
_[Ascending](_nodes_ascending_.ascending.md)_

_Defined in
[src/mixins/OrderPredications.ts:7](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/OrderPredications.ts#L7)_

**Parameters:**

| Name   | Type                                                      |
| ------ | --------------------------------------------------------- |
| `this` | [Visitable](../modules/_visitors_visitable_.md#visitable) |

**Returns:** _[Ascending](_nodes_ascending_.ascending.md)_

---

### desc

▸ **desc**(`this`: [Visitable](../modules/_visitors_visitable_.md#visitable)):
_[Descending](_nodes_descending_.descending.md)_

_Defined in
[src/mixins/OrderPredications.ts:11](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/OrderPredications.ts#L11)_

**Parameters:**

| Name   | Type                                                      |
| ------ | --------------------------------------------------------- |
| `this` | [Visitable](../modules/_visitors_visitable_.md#visitable) |

**Returns:** _[Descending](_nodes_descending_.descending.md)_
