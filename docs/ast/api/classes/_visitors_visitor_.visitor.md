---
id: '_visitors_visitor_.visitor'
title: 'Visitor'
sidebar_label: 'Visitor'
---

[@sequeljs/ast](../index.md) › [Globals](../globals.md) ›
["visitors/Visitor"](../modules/_visitors_visitor_.md) ›
[Visitor](_visitors_visitor_.visitor.md)

## Hierarchy

- **Visitor**

  ↳ [ToSQL](_visitors_tosql_.tosql.md)

## Index

### Methods

- [accept](_visitors_visitor_.visitor.md#accept)
- [visit](_visitors_visitor_.visitor.md#visit)

## Methods

### accept

▸ **accept**‹**T**›(`object`:
[Visitable](../modules/_visitors_visitable_.md#visitable) |
[Visitable](../modules/_visitors_visitable_.md#visitable)[] | null, `collector`:
T): _T_

_Defined in
[src/visitors/Visitor.ts:11](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/Visitor.ts#L11)_

**Type parameters:**

▪ **T**:
_[Collector](../interfaces/_collectors_collector_.collector.md)‹T["value"]›_

**Parameters:**

| Name        | Type                                                                                                                                     |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `object`    | [Visitable](../modules/_visitors_visitable_.md#visitable) &#124; [Visitable](../modules/_visitors_visitable_.md#visitable)[] &#124; null |
| `collector` | T                                                                                                                                        |

**Returns:** _T_

---

### visit

▸ **visit**‹**T**›(`object`:
[Visitable](../modules/_visitors_visitable_.md#visitable) |
[Visitable](../modules/_visitors_visitable_.md#visitable)[] | null, `collector`:
T): _T_

_Defined in
[src/visitors/Visitor.ts:18](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/Visitor.ts#L18)_

**Type parameters:**

▪ **T**:
_[Collector](../interfaces/_collectors_collector_.collector.md)‹T["value"]›_

**Parameters:**

| Name        | Type                                                                                                                                     |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `object`    | [Visitable](../modules/_visitors_visitable_.md#visitable) &#124; [Visitable](../modules/_visitors_visitable_.md#visitable)[] &#124; null |
| `collector` | T                                                                                                                                        |

**Returns:** _T_
