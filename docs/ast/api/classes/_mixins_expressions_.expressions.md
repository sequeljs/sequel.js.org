---
id: '_mixins_expressions_.expressions'
title: 'Expressions'
sidebar_label: 'Expressions'
---

[@sequeljs/ast](../index.md) › [Globals](../globals.md) ›
["mixins/Expressions"](../modules/_mixins_expressions_.md) ›
[Expressions](_mixins_expressions_.expressions.md)

## Hierarchy

- **Expressions**

  ↳ [InfixOperation](_nodes_infixoperation_.infixoperation.md)

  ↳ [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md)

  ↳ [NodeExpression](_nodes_nodeexpression_.nodeexpression.md)

  ↳ [Attribute](_attributes_attribute_.attribute.md)

## Index

### Methods

- [average](_mixins_expressions_.expressions.md#average)
- [count](_mixins_expressions_.expressions.md#count)
- [extract](_mixins_expressions_.expressions.md#extract)
- [maximum](_mixins_expressions_.expressions.md#maximum)
- [minimum](_mixins_expressions_.expressions.md#minimum)
- [sum](_mixins_expressions_.expressions.md#sum)

## Methods

### average

▸ **average**(): _[Avg](_nodes_avg_.avg.md)_

_Defined in
[src/mixins/Expressions.ts:9](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Expressions.ts#L9)_

**Returns:** _[Avg](_nodes_avg_.avg.md)_

---

### count

▸ **count**(`distinct`: boolean): _[Count](_nodes_count_.count.md)_

_Defined in
[src/mixins/Expressions.ts:13](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Expressions.ts#L13)_

**Parameters:**

| Name       | Type    | Default |
| ---------- | ------- | ------- |
| `distinct` | boolean | false   |

**Returns:** _[Count](_nodes_count_.count.md)_

---

### extract

▸ **extract**(`field`: any): _[Extract](_nodes_extract_.extract.md)_

_Defined in
[src/mixins/Expressions.ts:17](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Expressions.ts#L17)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `field` | any  |

**Returns:** _[Extract](_nodes_extract_.extract.md)_

---

### maximum

▸ **maximum**(): _[Max](_nodes_max_.max.md)_

_Defined in
[src/mixins/Expressions.ts:21](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Expressions.ts#L21)_

**Returns:** _[Max](_nodes_max_.max.md)_

---

### minimum

▸ **minimum**(): _[Min](_nodes_min_.min.md)_

_Defined in
[src/mixins/Expressions.ts:25](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Expressions.ts#L25)_

**Returns:** _[Min](_nodes_min_.min.md)_

---

### sum

▸ **sum**(): _[Sum](_nodes_sum_.sum.md)_

_Defined in
[src/mixins/Expressions.ts:29](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Expressions.ts#L29)_

**Returns:** _[Sum](_nodes_sum_.sum.md)_
