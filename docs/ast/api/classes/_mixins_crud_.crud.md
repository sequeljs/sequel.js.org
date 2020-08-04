---
id: '_mixins_crud_.crud'
title: 'CRUD'
sidebar_label: 'CRUD'
---

[@sequeljs/ast](../index.md) › [Globals](../globals.md) ›
["mixins/CRUD"](../modules/_mixins_crud_.md) › [CRUD](_mixins_crud_.crud.md)

## Hierarchy

- **CRUD**

  ↳ [Table](_table_.table.md)

  ↳ [SelectManager](_managers_selectmanager_.selectmanager.md)

## Index

### Properties

- [ast](_mixins_crud_.crud.md#readonly-abstract-ast)
- [ctx](_mixins_crud_.crud.md#protected-abstract-ctx)

### Methods

- [compileDelete](_mixins_crud_.crud.md#compiledelete)
- [compileInsert](_mixins_crud_.crud.md#compileinsert)
- [compileUpdate](_mixins_crud_.crud.md#compileupdate)
- [createInsert](_mixins_crud_.crud.md#createinsert)

## Properties

### `Readonly` `Abstract` ast

• **ast**: _[SelectStatement](_nodes_selectstatement_.selectstatement.md)_

_Defined in
[src/mixins/CRUD.ts:11](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/CRUD.ts#L11)_

---

### `Protected` `Abstract` ctx

• **ctx**: _[SelectCore](_nodes_selectcore_.selectcore.md)_

_Defined in
[src/mixins/CRUD.ts:13](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/CRUD.ts#L13)_

## Methods

### compileDelete

▸ **compileDelete**():
_[DeleteManager](_managers_deletemanager_.deletemanager.md)_

_Defined in
[src/mixins/CRUD.ts:49](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/CRUD.ts#L49)_

**Returns:** _[DeleteManager](_managers_deletemanager_.deletemanager.md)_

---

### compileInsert

▸ **compileInsert**(`values`: any):
_[InsertManager](_managers_insertmanager_.insertmanager.md)_

_Defined in
[src/mixins/CRUD.ts:37](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/CRUD.ts#L37)_

**Parameters:**

| Name     | Type |
| -------- | ---- |
| `values` | any  |

**Returns:** _[InsertManager](_managers_insertmanager_.insertmanager.md)_

---

### compileUpdate

▸ **compileUpdate**(`values`: any, `pk`: any):
_[UpdateManager](_managers_updatemanager_.updatemanager.md)_

_Defined in
[src/mixins/CRUD.ts:15](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/CRUD.ts#L15)_

**Parameters:**

| Name     | Type |
| -------- | ---- |
| `values` | any  |
| `pk`     | any  |

**Returns:** _[UpdateManager](_managers_updatemanager_.updatemanager.md)_

---

### createInsert

▸ **createInsert**():
_[InsertManager](_managers_insertmanager_.insertmanager.md)_

_Defined in
[src/mixins/CRUD.ts:45](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/CRUD.ts#L45)_

**Returns:** _[InsertManager](_managers_insertmanager_.insertmanager.md)_
