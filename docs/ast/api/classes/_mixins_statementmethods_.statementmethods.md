---
id: '_mixins_statementmethods_.statementmethods'
title: 'StatementMethods'
sidebar_label: 'StatementMethods'
---

[@sequeljs/ast](../index.md) › [Globals](../globals.md) ›
["mixins/StatementMethods"](../modules/_mixins_statementmethods_.md) ›
[StatementMethods](_mixins_statementmethods_.statementmethods.md)

## Type parameters

▪ **S**: _[DeleteStatement](_nodes_deletestatement_.deletestatement.md) |
[UpdateStatement](_nodes_updatestatement_.updatestatement.md)_

## Hierarchy

- **StatementMethods**

  ↳ [DeleteManager](_managers_deletemanager_.deletemanager.md)

  ↳ [UpdateManager](_managers_updatemanager_.updatemanager.md)

## Index

### Properties

- [ast](_mixins_statementmethods_.statementmethods.md#readonly-abstract-ast)

### Accessors

- [key](_mixins_statementmethods_.statementmethods.md#key)
- [wheres](_mixins_statementmethods_.statementmethods.md#wheres)

### Methods

- [offset](_mixins_statementmethods_.statementmethods.md#offset)
- [order](_mixins_statementmethods_.statementmethods.md#order)
- [take](_mixins_statementmethods_.statementmethods.md#take)

## Properties

### `Readonly` `Abstract` ast

• **ast**: _S_

_Defined in
[src/mixins/StatementMethods.ts:11](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/StatementMethods.ts#L11)_

## Accessors

### key

• **get key**(): _any_

_Defined in
[src/mixins/StatementMethods.ts:13](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/StatementMethods.ts#L13)_

**Returns:** _any_

• **set key**(`val`: any): _void_

_Defined in
[src/mixins/StatementMethods.ts:17](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/StatementMethods.ts#L17)_

**Parameters:**

| Name  | Type |
| ----- | ---- |
| `val` | any  |

**Returns:** _void_

---

### wheres

• **set wheres**(`val`: S["wheres"]): _void_

_Defined in
[src/mixins/StatementMethods.ts:21](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/StatementMethods.ts#L21)_

**Parameters:**

| Name  | Type        |
| ----- | ----------- |
| `val` | S["wheres"] |

**Returns:** _void_

## Methods

### offset

▸ **offset**(`offset`: any):
_[StatementMethods](_mixins_statementmethods_.statementmethods.md)‹S›_

_Defined in
[src/mixins/StatementMethods.ts:25](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/StatementMethods.ts#L25)_

**Parameters:**

| Name     | Type |
| -------- | ---- |
| `offset` | any  |

**Returns:**
_[StatementMethods](_mixins_statementmethods_.statementmethods.md)‹S›_

---

### order

▸ **order**(...`expr`: S["orders"]):
_[StatementMethods](_mixins_statementmethods_.statementmethods.md)‹S›_

_Defined in
[src/mixins/StatementMethods.ts:33](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/StatementMethods.ts#L33)_

**Parameters:**

| Name      | Type        |
| --------- | ----------- |
| `...expr` | S["orders"] |

**Returns:**
_[StatementMethods](_mixins_statementmethods_.statementmethods.md)‹S›_

---

### take

▸ **take**(`limit`: any):
_[StatementMethods](_mixins_statementmethods_.statementmethods.md)‹S›_

_Defined in
[src/mixins/StatementMethods.ts:39](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/StatementMethods.ts#L39)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `limit` | any  |

**Returns:**
_[StatementMethods](_mixins_statementmethods_.statementmethods.md)‹S›_
