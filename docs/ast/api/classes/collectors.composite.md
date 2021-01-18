---
id: 'collectors.composite'
title: 'Class: Composite<L, R>'
sidebar_label: 'Composite'
hide_title: true
---

# Class: Composite<L, R\>

[Collectors](../modules/collectors.md).Composite

## Type parameters

| Name | Type                                                              |
| ---- | ----------------------------------------------------------------- |
| `L`  | [_Collector_](../interfaces/collectors.collector.md)<L[*value*]\> |
| `R`  | [_Collector_](../interfaces/collectors.collector.md)<R[*value*]\> |

## Hierarchy

- **Composite**

## Implements

- [_Collector_](../interfaces/collectors.collector.md)<[L[*value*],
  R[*value*]]\>

## Constructors

### constructor

\+ **new Composite**<L, R\>(`left`: L, `right`: R):
[_Composite_](collectors.composite.md)<L, R\>

#### Type parameters:

| Name | Type                                                                 |
| ---- | -------------------------------------------------------------------- |
| `L`  | [_Collector_](../interfaces/collectors.collector.md)<L[*value*], L\> |
| `R`  | [_Collector_](../interfaces/collectors.collector.md)<R[*value*], R\> |

#### Parameters:

| Name    | Type |
| ------- | ---- |
| `left`  | L    |
| `right` | R    |

**Returns:** [_Composite_](collectors.composite.md)<L, R\>

Defined in: @sequeljs/ast/src/collectors/Composite.ts:14

## Properties

### left

• `Protected` `Readonly` **left**: L

Defined in: @sequeljs/ast/src/collectors/Composite.ts:8

---

### right

• `Protected` `Readonly` **right**: R

Defined in: @sequeljs/ast/src/collectors/Composite.ts:10

## Accessors

### value

• **value**(): [L[*value*], L[*value*]]

**Returns:** [L[*value*], L[*value*]]

Defined in: @sequeljs/ast/src/collectors/Composite.ts:12

## Methods

### addBind

▸ **addBind**(`bind`: _string_, `binder`: _null_ \|
[_Binder_](../modules/collectors.md#binder)):
[_Composite_](collectors.composite.md)<L, R\>

#### Parameters:

| Name     | Type                                                  |
| -------- | ----------------------------------------------------- |
| `bind`   | _string_                                              |
| `binder` | _null_ \| [_Binder_](../modules/collectors.md#binder) |

**Returns:** [_Composite_](collectors.composite.md)<L, R\>

Implementation of: [Collector](../interfaces/collectors.collector.md)

Defined in: @sequeljs/ast/src/collectors/Composite.ts:21

---

### append

▸ **append**(`str`: _string_): [_Composite_](collectors.composite.md)<L, R\>

#### Parameters:

| Name  | Type     |
| ----- | -------- |
| `str` | _string_ |

**Returns:** [_Composite_](collectors.composite.md)<L, R\>

Implementation of: [Collector](../interfaces/collectors.collector.md)

Defined in: @sequeljs/ast/src/collectors/Composite.ts:28
