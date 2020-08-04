---
id: '_mixins_selectpredications_.selectpredications'
title: 'SelectPredications'
sidebar_label: 'SelectPredications'
---

[@sequeljs/ast](../index.md) › [Globals](../globals.md) ›
["mixins/SelectPredications"](../modules/_mixins_selectpredications_.md) ›
[SelectPredications](_mixins_selectpredications_.selectpredications.md)

## Hierarchy

- **SelectPredications**

  ↳ [Table](_table_.table.md)

## Index

### Methods

- [from](_mixins_selectpredications_.selectpredications.md#from)
- [group](_mixins_selectpredications_.selectpredications.md#group)
- [having](_mixins_selectpredications_.selectpredications.md#having)
- [join](_mixins_selectpredications_.selectpredications.md#join)
- [order](_mixins_selectpredications_.selectpredications.md#order)
- [outerJoin](_mixins_selectpredications_.selectpredications.md#outerjoin)
- [project](_mixins_selectpredications_.selectpredications.md#project)
- [skip](_mixins_selectpredications_.selectpredications.md#skip)
- [take](_mixins_selectpredications_.selectpredications.md#take)
- [where](_mixins_selectpredications_.selectpredications.md#where)

## Methods

### from

▸ **from**(): _[SelectManager](_managers_selectmanager_.selectmanager.md)_

_Defined in
[src/mixins/SelectPredications.ts:13](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/SelectPredications.ts#L13)_

**Returns:** _[SelectManager](_managers_selectmanager_.selectmanager.md)_

---

### group

▸ **group**(...`columns`: (string |
[Attribute](_attributes_attribute_.attribute.md)‹›)[]):
_[SelectManager](_managers_selectmanager_.selectmanager.md)_

_Defined in
[src/mixins/SelectPredications.ts:17](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/SelectPredications.ts#L17)_

**Parameters:**

| Name         | Type                                                                 |
| ------------ | -------------------------------------------------------------------- |
| `...columns` | (string &#124; [Attribute](_attributes_attribute_.attribute.md)‹›)[] |

**Returns:** _[SelectManager](_managers_selectmanager_.selectmanager.md)_

---

### having

▸ **having**(`expr`: any):
_[SelectManager](_managers_selectmanager_.selectmanager.md)_

_Defined in
[src/mixins/SelectPredications.ts:21](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/SelectPredications.ts#L21)_

**Parameters:**

| Name   | Type |
| ------ | ---- |
| `expr` | any  |

**Returns:** _[SelectManager](_managers_selectmanager_.selectmanager.md)_

---

### join

▸ **join**(`relation`: string |
[Relation](../modules/_interfaces_relation_.md#relation) |
[SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) | null, `klass`: typeof Join):
_[SelectManager](_managers_selectmanager_.selectmanager.md)_

_Defined in
[src/mixins/SelectPredications.ts:25](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/SelectPredications.ts#L25)_

**Parameters:**

| Name       | Type                                                                                                                                     | Default   |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| `relation` | string &#124; [Relation](../modules/_interfaces_relation_.md#relation) &#124; [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) &#124; null | -         |
| `klass`    | typeof Join                                                                                                                              | InnerJoin |

**Returns:** _[SelectManager](_managers_selectmanager_.selectmanager.md)_

---

### order

▸ **order**(...`expr`: any[]):
_[SelectManager](_managers_selectmanager_.selectmanager.md)_

_Defined in
[src/mixins/SelectPredications.ts:32](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/SelectPredications.ts#L32)_

**Parameters:**

| Name      | Type  |
| --------- | ----- |
| `...expr` | any[] |

**Returns:** _[SelectManager](_managers_selectmanager_.selectmanager.md)_

---

### outerJoin

▸ **outerJoin**(`relation`: string |
[Relation](../modules/_interfaces_relation_.md#relation) |
[SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) | null):
_[SelectManager](_managers_selectmanager_.selectmanager.md)_

_Defined in
[src/mixins/SelectPredications.ts:36](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/SelectPredications.ts#L36)_

**Parameters:**

| Name       | Type                                                                                                                                     |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `relation` | string &#124; [Relation](../modules/_interfaces_relation_.md#relation) &#124; [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) &#124; null |

**Returns:** _[SelectManager](_managers_selectmanager_.selectmanager.md)_

---

### project

▸ **project**(...`things`: any[]):
_[SelectManager](_managers_selectmanager_.selectmanager.md)_

_Defined in
[src/mixins/SelectPredications.ts:40](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/SelectPredications.ts#L40)_

**Parameters:**

| Name        | Type  |
| ----------- | ----- |
| `...things` | any[] |

**Returns:** _[SelectManager](_managers_selectmanager_.selectmanager.md)_

---

### skip

▸ **skip**(`amount`: any):
_[SelectManager](_managers_selectmanager_.selectmanager.md)_

_Defined in
[src/mixins/SelectPredications.ts:44](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/SelectPredications.ts#L44)_

**Parameters:**

| Name     | Type |
| -------- | ---- |
| `amount` | any  |

**Returns:** _[SelectManager](_managers_selectmanager_.selectmanager.md)_

---

### take

▸ **take**(`amount`: any):
_[SelectManager](_managers_selectmanager_.selectmanager.md)_

_Defined in
[src/mixins/SelectPredications.ts:48](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/SelectPredications.ts#L48)_

**Parameters:**

| Name     | Type |
| -------- | ---- |
| `amount` | any  |

**Returns:** _[SelectManager](_managers_selectmanager_.selectmanager.md)_

---

### where

▸ **where**(`condition`: any):
_[SelectManager](_managers_selectmanager_.selectmanager.md)_

_Defined in
[src/mixins/SelectPredications.ts:52](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/SelectPredications.ts#L52)_

**Parameters:**

| Name        | Type |
| ----------- | ---- |
| `condition` | any  |

**Returns:** _[SelectManager](_managers_selectmanager_.selectmanager.md)_
