[@sequeljs/ast](../README.md) / [Exports](../modules.md) /
[Collectors](../modules/collectors.md) / Composite

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

## Table of contents

### Constructors

- [constructor](collectors.composite.md#constructor)

### Properties

- [left](collectors.composite.md#left)
- [right](collectors.composite.md#right)

### Accessors

- [value](collectors.composite.md#value)

### Methods

- [addBind](collectors.composite.md#addbind)
- [append](collectors.composite.md#append)

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

Defined in:
[src/collectors/Composite.ts:14](https://github.com/sequeljs/ast/blob/8de61b1/src/collectors/Composite.ts#L14)

## Properties

### left

• `Protected` `Readonly` **left**: L

Defined in:
[src/collectors/Composite.ts:8](https://github.com/sequeljs/ast/blob/8de61b1/src/collectors/Composite.ts#L8)

---

### right

• `Protected` `Readonly` **right**: R

Defined in:
[src/collectors/Composite.ts:10](https://github.com/sequeljs/ast/blob/8de61b1/src/collectors/Composite.ts#L10)

## Accessors

### value

• **value**(): [L[*value*], L[*value*]]

**Returns:** [L[*value*], L[*value*]]

Defined in:
[src/collectors/Composite.ts:12](https://github.com/sequeljs/ast/blob/8de61b1/src/collectors/Composite.ts#L12)

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

Defined in:
[src/collectors/Composite.ts:21](https://github.com/sequeljs/ast/blob/8de61b1/src/collectors/Composite.ts#L21)

---

### append

▸ **append**(`str`: _string_): [_Composite_](collectors.composite.md)<L, R\>

#### Parameters:

| Name  | Type     |
| ----- | -------- |
| `str` | _string_ |

**Returns:** [_Composite_](collectors.composite.md)<L, R\>

Implementation of: [Collector](../interfaces/collectors.collector.md)

Defined in:
[src/collectors/Composite.ts:28](https://github.com/sequeljs/ast/blob/8de61b1/src/collectors/Composite.ts#L28)
