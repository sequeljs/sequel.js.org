---
id: '_mixins_nodemethods_.nodemethods'
title: 'NodeMethods'
sidebar_label: 'NodeMethods'
---

[@sequeljs/ast](../index.md) › [Globals](../globals.md) ›
["mixins/NodeMethods"](../modules/_mixins_nodemethods_.md) ›
[NodeMethods](_mixins_nodemethods_.nodemethods.md)

## Hierarchy

- **NodeMethods**

  ↳ [Node](_nodes_node_.node.md)

## Index

### Methods

- [and](_mixins_nodemethods_.nodemethods.md#and)
- [not](_mixins_nodemethods_.nodemethods.md#not)
- [or](_mixins_nodemethods_.nodemethods.md#or)

## Methods

### and

▸ **and**(`right`: any): _[And](_nodes_and_.and.md)_

_Defined in
[src/mixins/NodeMethods.ts:11](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/NodeMethods.ts#L11)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `right` | any  |

**Returns:** _[And](_nodes_and_.and.md)_

---

### not

▸ **not**(`this`: [Node](_nodes_node_.node.md)): _[Not](_nodes_not_.not.md)_

_Defined in
[src/mixins/NodeMethods.ts:15](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/NodeMethods.ts#L15)_

**Parameters:**

| Name   | Type                         |
| ------ | ---------------------------- |
| `this` | [Node](_nodes_node_.node.md) |

**Returns:** _[Not](_nodes_not_.not.md)_

---

### or

▸ **or**‹**T**›(`right`: T): _[Grouping](_nodes_grouping_.grouping.md)_

_Defined in
[src/mixins/NodeMethods.ts:19](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/NodeMethods.ts#L19)_

**Type parameters:**

▪ **T**: _[Visitable](../modules/_visitors_visitable_.md#visitable)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `right` | T    |

**Returns:** _[Grouping](_nodes_grouping_.grouping.md)_
