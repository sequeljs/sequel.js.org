[@sequeljs/ast](../README.md) / [Exports](../modules.md) /
[Collectors](../modules/collectors.md) / SubstituteBinds

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

## Table of contents

### Constructors

- [constructor](collectors.substitutebinds.md#constructor)

### Properties

- [delegate](collectors.substitutebinds.md#delegate)
- [quoter](collectors.substitutebinds.md#quoter)

### Accessors

- [value](collectors.substitutebinds.md#value)

### Methods

- [addBind](collectors.substitutebinds.md#addbind)
- [append](collectors.substitutebinds.md#append)

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

Defined in:
[src/collectors/SubstituteBinds.ts:14](https://github.com/sequeljs/ast/blob/8de61b1/src/collectors/SubstituteBinds.ts#L14)

## Properties

### delegate

• `Protected` `Readonly` **delegate**: T

Defined in:
[src/collectors/SubstituteBinds.ts:8](https://github.com/sequeljs/ast/blob/8de61b1/src/collectors/SubstituteBinds.ts#L8)

---

### quoter

• `Protected` `Readonly` **quoter**:
[_Quoter_](../interfaces/interfaces.quoter.md)

Defined in:
[src/collectors/SubstituteBinds.ts:10](https://github.com/sequeljs/ast/blob/8de61b1/src/collectors/SubstituteBinds.ts#L10)

## Accessors

### value

• **value**(): T[*value*]

**Returns:** T[*value*]

Defined in:
[src/collectors/SubstituteBinds.ts:12](https://github.com/sequeljs/ast/blob/8de61b1/src/collectors/SubstituteBinds.ts#L12)

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

Defined in:
[src/collectors/SubstituteBinds.ts:21](https://github.com/sequeljs/ast/blob/8de61b1/src/collectors/SubstituteBinds.ts#L21)

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

Defined in:
[src/collectors/SubstituteBinds.ts:25](https://github.com/sequeljs/ast/blob/8de61b1/src/collectors/SubstituteBinds.ts#L25)
