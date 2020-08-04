---
id: '_table_.table'
title: 'Table'
sidebar_label: 'Table'
---

[@sequeljs/ast](../index.md) › [Globals](../globals.md) ›
["Table"](../modules/_table_.md) › [Table](_table_.table.md)

## Hierarchy

- [CRUD](_mixins_crud_.crud.md)

- [FactoryMethods](_mixins_factorymethods_.factorymethods.md)

- [SelectPredications](_mixins_selectpredications_.selectpredications.md)

  ↳ **Table**

## Implements

- [TypeCaster](../interfaces/_interfaces_typecaster_.typecaster.md)

## Index

### Constructors

- [constructor](_table_.table.md#constructor)

### Properties

- [ast](_table_.table.md#readonly-abstract-ast)
- [ctx](_table_.table.md#protected-abstract-ctx)
- [name](_table_.table.md#name)
- [tableAlias](_table_.table.md#tablealias)
- [typeCaster](_table_.table.md#protected-typecaster)

### Accessors

- [tableName](_table_.table.md#tablename)

### Methods

- [alias](_table_.table.md#alias)
- [coalesce](_table_.table.md#coalesce)
- [compileDelete](_table_.table.md#compiledelete)
- [compileInsert](_table_.table.md#compileinsert)
- [compileUpdate](_table_.table.md#compileupdate)
- [createAnd](_table_.table.md#createand)
- [createFalse](_table_.table.md#createfalse)
- [createInsert](_table_.table.md#createinsert)
- [createJoin](_table_.table.md#createjoin)
- [createOn](_table_.table.md#createon)
- [createStringJoin](_table_.table.md#createstringjoin)
- [createTableAlias](_table_.table.md#createtablealias)
- [createTrue](_table_.table.md#createtrue)
- [from](_table_.table.md#from)
- [get](_table_.table.md#get)
- [group](_table_.table.md#group)
- [grouping](_table_.table.md#grouping)
- [having](_table_.table.md#having)
- [isAbleToTypeCast](_table_.table.md#isabletotypecast)
- [join](_table_.table.md#join)
- [lower](_table_.table.md#lower)
- [order](_table_.table.md#order)
- [outerJoin](_table_.table.md#outerjoin)
- [project](_table_.table.md#project)
- [skip](_table_.table.md#skip)
- [take](_table_.table.md#take)
- [typeCastForDatabase](_table_.table.md#typecastfordatabase)
- [where](_table_.table.md#where)

## Constructors

### constructor

\+ **new Table**(`name`: string, `as`:
[TableAlias](_nodes_tablealias_.tablealias.md) | string | null, `typeCaster`:
any): _[Table](_table_.table.md)_

_Defined in
[src/Table.ts:23](https://github.com/sequeljs/ast/blob/aa0ef0f/src/Table.ts#L23)_

**Parameters:**

| Name         | Type                                                                     | Default |
| ------------ | ------------------------------------------------------------------------ | ------- |
| `name`       | string                                                                   | -       |
| `as`         | [TableAlias](_nodes_tablealias_.tablealias.md) &#124; string &#124; null | null    |
| `typeCaster` | any                                                                      | null    |

**Returns:** _[Table](_table_.table.md)_

## Properties

### `Readonly` `Abstract` ast

• **ast**: _[SelectStatement](_nodes_selectstatement_.selectstatement.md)_

_Inherited from
[CRUD](_mixins_crud_.crud.md).[ast](_mixins_crud_.crud.md#readonly-abstract-ast)_

_Defined in
[src/mixins/CRUD.ts:11](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/CRUD.ts#L11)_

---

### `Protected` `Abstract` ctx

• **ctx**: _[SelectCore](_nodes_selectcore_.selectcore.md)_

_Inherited from
[CRUD](_mixins_crud_.crud.md).[ctx](_mixins_crud_.crud.md#protected-abstract-ctx)_

_Defined in
[src/mixins/CRUD.ts:13](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/CRUD.ts#L13)_

---

### name

• **name**: _string_

_Defined in
[src/Table.ts:15](https://github.com/sequeljs/ast/blob/aa0ef0f/src/Table.ts#L15)_

---

### tableAlias

• **tableAlias**: _[TableAlias](_nodes_tablealias_.tablealias.md) | string |
null_

_Defined in
[src/Table.ts:17](https://github.com/sequeljs/ast/blob/aa0ef0f/src/Table.ts#L17)_

---

### `Protected` typeCaster

• **typeCaster**:
_[TypeCaster](../interfaces/_interfaces_typecaster_.typecaster.md)_

_Defined in
[src/Table.ts:19](https://github.com/sequeljs/ast/blob/aa0ef0f/src/Table.ts#L19)_

## Accessors

### tableName

• **get tableName**(): _string_

_Defined in
[src/Table.ts:21](https://github.com/sequeljs/ast/blob/aa0ef0f/src/Table.ts#L21)_

**Returns:** _string_

## Methods

### alias

▸ **alias**(`name`: string): _[TableAlias](_nodes_tablealias_.tablealias.md)_

_Defined in
[src/Table.ts:41](https://github.com/sequeljs/ast/blob/aa0ef0f/src/Table.ts#L41)_

**Parameters:**

| Name   | Type   | Default          |
| ------ | ------ | ---------------- |
| `name` | string | `${this.name}_2` |

**Returns:** _[TableAlias](_nodes_tablealias_.tablealias.md)_

---

### coalesce

▸ **coalesce**(...`exprs`: any[]):
_[NamedSQLFunction](_nodes_namedsqlfunction_.namedsqlfunction.md)_

_Inherited from
[Comment](_nodes_comment_.comment.md).[coalesce](_nodes_comment_.comment.md#coalesce)_

_Defined in
[src/mixins/FactoryMethods.ts:22](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/FactoryMethods.ts#L22)_

**Parameters:**

| Name       | Type  |
| ---------- | ----- |
| `...exprs` | any[] |

**Returns:** _[NamedSQLFunction](_nodes_namedsqlfunction_.namedsqlfunction.md)_

---

### compileDelete

▸ **compileDelete**():
_[DeleteManager](_managers_deletemanager_.deletemanager.md)_

_Inherited from
[CRUD](_mixins_crud_.crud.md).[compileDelete](_mixins_crud_.crud.md#compiledelete)_

_Defined in
[src/mixins/CRUD.ts:49](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/CRUD.ts#L49)_

**Returns:** _[DeleteManager](_managers_deletemanager_.deletemanager.md)_

---

### compileInsert

▸ **compileInsert**(`values`: any):
_[InsertManager](_managers_insertmanager_.insertmanager.md)_

_Inherited from
[CRUD](_mixins_crud_.crud.md).[compileInsert](_mixins_crud_.crud.md#compileinsert)_

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

_Inherited from
[CRUD](_mixins_crud_.crud.md).[compileUpdate](_mixins_crud_.crud.md#compileupdate)_

_Defined in
[src/mixins/CRUD.ts:15](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/CRUD.ts#L15)_

**Parameters:**

| Name     | Type |
| -------- | ---- |
| `values` | any  |
| `pk`     | any  |

**Returns:** _[UpdateManager](_managers_updatemanager_.updatemanager.md)_

---

### createAnd

▸ **createAnd**(`clauses`: any[]): _[And](_nodes_and_.and.md)_

_Inherited from
[Comment](_nodes_comment_.comment.md).[createAnd](_nodes_comment_.comment.md#createand)_

_Defined in
[src/mixins/FactoryMethods.ts:26](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/FactoryMethods.ts#L26)_

**Parameters:**

| Name      | Type  |
| --------- | ----- |
| `clauses` | any[] |

**Returns:** _[And](_nodes_and_.and.md)_

---

### createFalse

▸ **createFalse**(): _[False](_nodes_false_.false.md)_

_Inherited from
[Comment](_nodes_comment_.comment.md).[createFalse](_nodes_comment_.comment.md#createfalse)_

_Defined in
[src/mixins/FactoryMethods.ts:30](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/FactoryMethods.ts#L30)_

**Returns:** _[False](_nodes_false_.false.md)_

---

### createInsert

▸ **createInsert**():
_[InsertManager](_managers_insertmanager_.insertmanager.md)_

_Inherited from
[CRUD](_mixins_crud_.crud.md).[createInsert](_mixins_crud_.crud.md#createinsert)_

_Defined in
[src/mixins/CRUD.ts:45](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/CRUD.ts#L45)_

**Returns:** _[InsertManager](_managers_insertmanager_.insertmanager.md)_

---

### createJoin

▸ **createJoin**(`to`: string |
[Relation](../modules/_interfaces_relation_.md#relation) |
[SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) | null):
_[InnerJoin](_nodes_innerjoin_.innerjoin.md)_

_Inherited from
[Comment](_nodes_comment_.comment.md).[createJoin](_nodes_comment_.comment.md#createjoin)_

_Defined in
[src/mixins/FactoryMethods.ts:34](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/FactoryMethods.ts#L34)_

**Parameters:**

| Name | Type                                                                                                                                     |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `to` | string &#124; [Relation](../modules/_interfaces_relation_.md#relation) &#124; [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) &#124; null |

**Returns:** _[InnerJoin](_nodes_innerjoin_.innerjoin.md)_

▸ **createJoin**(`to`: string |
[Relation](../modules/_interfaces_relation_.md#relation) |
[SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) | null, `constraint`: any):
_[InnerJoin](_nodes_innerjoin_.innerjoin.md)_

_Inherited from
[Comment](_nodes_comment_.comment.md).[createJoin](_nodes_comment_.comment.md#createjoin)_

_Defined in
[src/mixins/FactoryMethods.ts:35](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/FactoryMethods.ts#L35)_

**Parameters:**

| Name         | Type                                                                                                                                     |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `to`         | string &#124; [Relation](../modules/_interfaces_relation_.md#relation) &#124; [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) &#124; null |
| `constraint` | any                                                                                                                                      |

**Returns:** _[InnerJoin](_nodes_innerjoin_.innerjoin.md)_

▸ **createJoin**(`to`: string |
[Relation](../modules/_interfaces_relation_.md#relation) |
[SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) | null, `constraint`: any,
`Klass`: typeof FullOuterJoin):
_[FullOuterJoin](_nodes_fullouterjoin_.fullouterjoin.md)_

_Inherited from
[Comment](_nodes_comment_.comment.md).[createJoin](_nodes_comment_.comment.md#createjoin)_

_Defined in
[src/mixins/FactoryMethods.ts:39](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/FactoryMethods.ts#L39)_

**Parameters:**

| Name         | Type                                                                                                                                     |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `to`         | string &#124; [Relation](../modules/_interfaces_relation_.md#relation) &#124; [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) &#124; null |
| `constraint` | any                                                                                                                                      |
| `Klass`      | typeof FullOuterJoin                                                                                                                     |

**Returns:** _[FullOuterJoin](_nodes_fullouterjoin_.fullouterjoin.md)_

▸ **createJoin**(`to`: string |
[Relation](../modules/_interfaces_relation_.md#relation) |
[SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) | null, `constraint`: any,
`Klass`: typeof InnerJoin): _[InnerJoin](_nodes_innerjoin_.innerjoin.md)_

_Inherited from
[Comment](_nodes_comment_.comment.md).[createJoin](_nodes_comment_.comment.md#createjoin)_

_Defined in
[src/mixins/FactoryMethods.ts:44](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/FactoryMethods.ts#L44)_

**Parameters:**

| Name         | Type                                                                                                                                     |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `to`         | string &#124; [Relation](../modules/_interfaces_relation_.md#relation) &#124; [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) &#124; null |
| `constraint` | any                                                                                                                                      |
| `Klass`      | typeof InnerJoin                                                                                                                         |

**Returns:** _[InnerJoin](_nodes_innerjoin_.innerjoin.md)_

▸ **createJoin**(`to`: string |
[Relation](../modules/_interfaces_relation_.md#relation) |
[SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) | null, `constraint`: any,
`Klass`: typeof OuterJoin): _[OuterJoin](_nodes_outerjoin_.outerjoin.md)_

_Inherited from
[Comment](_nodes_comment_.comment.md).[createJoin](_nodes_comment_.comment.md#createjoin)_

_Defined in
[src/mixins/FactoryMethods.ts:49](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/FactoryMethods.ts#L49)_

**Parameters:**

| Name         | Type                                                                                                                                     |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `to`         | string &#124; [Relation](../modules/_interfaces_relation_.md#relation) &#124; [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) &#124; null |
| `constraint` | any                                                                                                                                      |
| `Klass`      | typeof OuterJoin                                                                                                                         |

**Returns:** _[OuterJoin](_nodes_outerjoin_.outerjoin.md)_

▸ **createJoin**(`to`: string |
[Relation](../modules/_interfaces_relation_.md#relation) |
[SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) | null, `constraint`: any,
`Klass`: typeof RightOuterJoin):
_[RightOuterJoin](_nodes_rightouterjoin_.rightouterjoin.md)_

_Inherited from
[Comment](_nodes_comment_.comment.md).[createJoin](_nodes_comment_.comment.md#createjoin)_

_Defined in
[src/mixins/FactoryMethods.ts:54](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/FactoryMethods.ts#L54)_

**Parameters:**

| Name         | Type                                                                                                                                     |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `to`         | string &#124; [Relation](../modules/_interfaces_relation_.md#relation) &#124; [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) &#124; null |
| `constraint` | any                                                                                                                                      |
| `Klass`      | typeof RightOuterJoin                                                                                                                    |

**Returns:** _[RightOuterJoin](_nodes_rightouterjoin_.rightouterjoin.md)_

▸ **createJoin**(`to`: string |
[Relation](../modules/_interfaces_relation_.md#relation) |
[SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) | null, `constraint`: any,
`Klass`: typeof StringJoin): _[StringJoin](_nodes_stringjoin_.stringjoin.md)_

_Inherited from
[Comment](_nodes_comment_.comment.md).[createJoin](_nodes_comment_.comment.md#createjoin)_

_Defined in
[src/mixins/FactoryMethods.ts:59](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/FactoryMethods.ts#L59)_

**Parameters:**

| Name         | Type                                                                                                                                     |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `to`         | string &#124; [Relation](../modules/_interfaces_relation_.md#relation) &#124; [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) &#124; null |
| `constraint` | any                                                                                                                                      |
| `Klass`      | typeof StringJoin                                                                                                                        |

**Returns:** _[StringJoin](_nodes_stringjoin_.stringjoin.md)_

---

### createOn

▸ **createOn**(`expr`: any): _[On](_nodes_on_.on.md)_

_Inherited from
[Comment](_nodes_comment_.comment.md).[createOn](_nodes_comment_.comment.md#createon)_

_Defined in
[src/mixins/FactoryMethods.ts:72](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/FactoryMethods.ts#L72)_

**Parameters:**

| Name   | Type |
| ------ | ---- |
| `expr` | any  |

**Returns:** _[On](_nodes_on_.on.md)_

---

### createStringJoin

▸ **createStringJoin**(`to`: string |
[Relation](../modules/_interfaces_relation_.md#relation) |
[SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) | null):
_[StringJoin](_nodes_stringjoin_.stringjoin.md)_

_Inherited from
[Comment](_nodes_comment_.comment.md).[createStringJoin](_nodes_comment_.comment.md#createstringjoin)_

_Defined in
[src/mixins/FactoryMethods.ts:76](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/FactoryMethods.ts#L76)_

**Parameters:**

| Name | Type                                                                                                                                     |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `to` | string &#124; [Relation](../modules/_interfaces_relation_.md#relation) &#124; [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) &#124; null |

**Returns:** _[StringJoin](_nodes_stringjoin_.stringjoin.md)_

---

### createTableAlias

▸ **createTableAlias**(`relation`: [Grouping](_nodes_grouping_.grouping.md) |
[Relation](../modules/_interfaces_relation_.md#relation), `name`: string |
[SQLLiteral](_nodes_sqlliteral_.sqlliteral.md)):
_[TableAlias](_nodes_tablealias_.tablealias.md)_

_Inherited from
[Comment](_nodes_comment_.comment.md).[createTableAlias](_nodes_comment_.comment.md#createtablealias)_

_Defined in
[src/mixins/FactoryMethods.ts:80](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/FactoryMethods.ts#L80)_

**Parameters:**

| Name       | Type                                                                                                     |
| ---------- | -------------------------------------------------------------------------------------------------------- |
| `relation` | [Grouping](_nodes_grouping_.grouping.md) &#124; [Relation](../modules/_interfaces_relation_.md#relation) |
| `name`     | string &#124; [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md)                                             |

**Returns:** _[TableAlias](_nodes_tablealias_.tablealias.md)_

---

### createTrue

▸ **createTrue**(): _[True](_nodes_true_.true.md)_

_Inherited from
[Comment](_nodes_comment_.comment.md).[createTrue](_nodes_comment_.comment.md#createtrue)_

_Defined in
[src/mixins/FactoryMethods.ts:87](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/FactoryMethods.ts#L87)_

**Returns:** _[True](_nodes_true_.true.md)_

---

### from

▸ **from**(): _[SelectManager](_managers_selectmanager_.selectmanager.md)_

_Inherited from
[SelectPredications](_mixins_selectpredications_.selectpredications.md).[from](_mixins_selectpredications_.selectpredications.md#from)_

_Defined in
[src/mixins/SelectPredications.ts:13](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/SelectPredications.ts#L13)_

**Returns:** _[SelectManager](_managers_selectmanager_.selectmanager.md)_

---

### get

▸ **get**(`name`: string | [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md)):
_[Attribute](_attributes_attribute_.attribute.md)_

_Defined in
[src/Table.ts:45](https://github.com/sequeljs/ast/blob/aa0ef0f/src/Table.ts#L45)_

**Parameters:**

| Name   | Type                                                         |
| ------ | ------------------------------------------------------------ |
| `name` | string &#124; [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) |

**Returns:** _[Attribute](_attributes_attribute_.attribute.md)_

---

### group

▸ **group**(...`columns`: (string |
[Attribute](_attributes_attribute_.attribute.md)‹›)[]):
_[SelectManager](_managers_selectmanager_.selectmanager.md)_

_Inherited from
[SelectPredications](_mixins_selectpredications_.selectpredications.md).[group](_mixins_selectpredications_.selectpredications.md#group)_

_Defined in
[src/mixins/SelectPredications.ts:17](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/SelectPredications.ts#L17)_

**Parameters:**

| Name         | Type                                                                 |
| ------------ | -------------------------------------------------------------------- |
| `...columns` | (string &#124; [Attribute](_attributes_attribute_.attribute.md)‹›)[] |

**Returns:** _[SelectManager](_managers_selectmanager_.selectmanager.md)_

---

### grouping

▸ **grouping**(`expr`: any): _[Grouping](_nodes_grouping_.grouping.md)_

_Inherited from
[Comment](_nodes_comment_.comment.md).[grouping](_nodes_comment_.comment.md#grouping)_

_Defined in
[src/mixins/FactoryMethods.ts:91](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/FactoryMethods.ts#L91)_

**Parameters:**

| Name   | Type |
| ------ | ---- |
| `expr` | any  |

**Returns:** _[Grouping](_nodes_grouping_.grouping.md)_

---

### having

▸ **having**(`expr`: any):
_[SelectManager](_managers_selectmanager_.selectmanager.md)_

_Inherited from
[SelectPredications](_mixins_selectpredications_.selectpredications.md).[having](_mixins_selectpredications_.selectpredications.md#having)_

_Defined in
[src/mixins/SelectPredications.ts:21](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/SelectPredications.ts#L21)_

**Parameters:**

| Name   | Type |
| ------ | ---- |
| `expr` | any  |

**Returns:** _[SelectManager](_managers_selectmanager_.selectmanager.md)_

---

### isAbleToTypeCast

▸ **isAbleToTypeCast**(): _boolean_

_Implementation of
[TypeCaster](../interfaces/_interfaces_typecaster_.typecaster.md)_

_Defined in
[src/Table.ts:50](https://github.com/sequeljs/ast/blob/aa0ef0f/src/Table.ts#L50)_

**Returns:** _boolean_

---

### join

▸ **join**(`relation`: string |
[Relation](../modules/_interfaces_relation_.md#relation) |
[SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) | null, `klass`: typeof Join):
_[SelectManager](_managers_selectmanager_.selectmanager.md)_

_Inherited from
[SelectPredications](_mixins_selectpredications_.selectpredications.md).[join](_mixins_selectpredications_.selectpredications.md#join)_

_Defined in
[src/mixins/SelectPredications.ts:25](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/SelectPredications.ts#L25)_

**Parameters:**

| Name       | Type                                                                                                                                     | Default   |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| `relation` | string &#124; [Relation](../modules/_interfaces_relation_.md#relation) &#124; [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) &#124; null | -         |
| `klass`    | typeof Join                                                                                                                              | InnerJoin |

**Returns:** _[SelectManager](_managers_selectmanager_.selectmanager.md)_

---

### lower

▸ **lower**(`column`: any):
_[NamedSQLFunction](_nodes_namedsqlfunction_.namedsqlfunction.md)_

_Inherited from
[Comment](_nodes_comment_.comment.md).[lower](_nodes_comment_.comment.md#lower)_

_Defined in
[src/mixins/FactoryMethods.ts:95](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/FactoryMethods.ts#L95)_

**Parameters:**

| Name     | Type |
| -------- | ---- |
| `column` | any  |

**Returns:** _[NamedSQLFunction](_nodes_namedsqlfunction_.namedsqlfunction.md)_

---

### order

▸ **order**(...`expr`: any[]):
_[SelectManager](_managers_selectmanager_.selectmanager.md)_

_Inherited from
[SelectPredications](_mixins_selectpredications_.selectpredications.md).[order](_mixins_selectpredications_.selectpredications.md#order)_

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

_Inherited from
[SelectPredications](_mixins_selectpredications_.selectpredications.md).[outerJoin](_mixins_selectpredications_.selectpredications.md#outerjoin)_

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

_Inherited from
[SelectPredications](_mixins_selectpredications_.selectpredications.md).[project](_mixins_selectpredications_.selectpredications.md#project)_

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

_Inherited from
[SelectPredications](_mixins_selectpredications_.selectpredications.md).[skip](_mixins_selectpredications_.selectpredications.md#skip)_

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

_Inherited from
[SelectPredications](_mixins_selectpredications_.selectpredications.md).[take](_mixins_selectpredications_.selectpredications.md#take)_

_Defined in
[src/mixins/SelectPredications.ts:48](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/SelectPredications.ts#L48)_

**Parameters:**

| Name     | Type |
| -------- | ---- |
| `amount` | any  |

**Returns:** _[SelectManager](_managers_selectmanager_.selectmanager.md)_

---

### typeCastForDatabase

▸ **typeCastForDatabase**(`attributeName`: string |
[SQLLiteral](_nodes_sqlliteral_.sqlliteral.md), `value`:
[Visitable](../modules/_visitors_visitable_.md#visitable)): _number | string_

_Implementation of
[TypeCaster](../interfaces/_interfaces_typecaster_.typecaster.md)_

_Defined in
[src/Table.ts:54](https://github.com/sequeljs/ast/blob/aa0ef0f/src/Table.ts#L54)_

**Parameters:**

| Name            | Type                                                         |
| --------------- | ------------------------------------------------------------ |
| `attributeName` | string &#124; [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) |
| `value`         | [Visitable](../modules/_visitors_visitable_.md#visitable)    |

**Returns:** _number | string_

---

### where

▸ **where**(`condition`: any):
_[SelectManager](_managers_selectmanager_.selectmanager.md)_

_Inherited from
[SelectPredications](_mixins_selectpredications_.selectpredications.md).[where](_mixins_selectpredications_.selectpredications.md#where)_

_Defined in
[src/mixins/SelectPredications.ts:52](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/SelectPredications.ts#L52)_

**Parameters:**

| Name        | Type |
| ----------- | ---- |
| `condition` | any  |

**Returns:** _[SelectManager](_managers_selectmanager_.selectmanager.md)_
