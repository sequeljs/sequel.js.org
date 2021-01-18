---
id: 'collectors.substitutebinds'
title: 'Class: SubstituteBinds<T>'
sidebar_label: 'SubstituteBinds'
hide_title: true
---

# Class: SubstituteBinds<T\>

[Collectors](../modules/collectors.md).SubstituteBinds

## Type parameters

| Name | Type                                                              |
| ---- | ----------------------------------------------------------------- |
| `T`  | [_Collector_](../interfaces/collectors.collector.md)<T[*value*]\> |

## Hierarchy

- **SubstituteBinds**

## Implements

- [_Collector_](../interfaces/collectors.collector.md)<T[*value*]\>

## Constructors

### constructor

\+ **new SubstituteBinds**<T\>(`quoter`:
[_Quoter_](../interfaces/interfaces.quoter.md), `delegate`: T):
[_SubstituteBinds_](collectors.substitutebinds.md)<T\>

#### Type parameters:

| Name | Type                                                                 |
| ---- | -------------------------------------------------------------------- |
| `T`  | [_Collector_](../interfaces/collectors.collector.md)<T[*value*], T\> |

#### Parameters:

| Name       | Type                                           |
| ---------- | ---------------------------------------------- |
| `quoter`   | [_Quoter_](../interfaces/interfaces.quoter.md) |
| `delegate` | T                                              |

**Returns:** [_SubstituteBinds_](collectors.substitutebinds.md)<T\>

Defined in: @sequeljs/ast/src/collectors/SubstituteBinds.ts:14

## Properties

### delegate

• `Protected` `Readonly` **delegate**: T

Defined in: @sequeljs/ast/src/collectors/SubstituteBinds.ts:8

---

### quoter

• `Protected` `Readonly` **quoter**:
[_Quoter_](../interfaces/interfaces.quoter.md)

Defined in: @sequeljs/ast/src/collectors/SubstituteBinds.ts:10

## Accessors

### value

• **value**(): T[*value*]

**Returns:** T[*value*]

Defined in: @sequeljs/ast/src/collectors/SubstituteBinds.ts:12

## Methods

### addBind

▸ **addBind**(`bind`: _string_, `_`:
[_Binder_](../modules/collectors.md#binder)):
[_SubstituteBinds_](collectors.substitutebinds.md)<T\>

#### Parameters:

| Name   | Type                                        |
| ------ | ------------------------------------------- |
| `bind` | _string_                                    |
| `_`    | [_Binder_](../modules/collectors.md#binder) |

**Returns:** [_SubstituteBinds_](collectors.substitutebinds.md)<T\>

Defined in: @sequeljs/ast/src/collectors/SubstituteBinds.ts:21

---

### append

▸ **append**(`str`: _string_):
[_SubstituteBinds_](collectors.substitutebinds.md)<T\>

#### Parameters:

| Name  | Type     |
| ----- | -------- |
| `str` | _string_ |

**Returns:** [_SubstituteBinds_](collectors.substitutebinds.md)<T\>

Implementation of: [Collector](../interfaces/collectors.collector.md)

Defined in: @sequeljs/ast/src/collectors/SubstituteBinds.ts:25
