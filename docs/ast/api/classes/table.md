[@sequeljs/ast](../README.md) / [Exports](../modules.md) / Table

# Class: Table

## Hierarchy

- _CRUD_

- _FactoryMethods_

- _SelectPredications_

  ↳ **Table**

## Implements

- [_TypeCaster_](../interfaces/interfaces.typecaster.md)

## Table of contents

### Constructors

- [constructor](table.md#constructor)

### Properties

- [ast](table.md#ast)
- [ctx](table.md#ctx)
- [name](table.md#name)
- [tableAlias](table.md#tablealias)
- [typeCaster](table.md#typecaster)

### Accessors

- [tableName](table.md#tablename)

### Methods

- [alias](table.md#alias)
- [coalesce](table.md#coalesce)
- [compileDelete](table.md#compiledelete)
- [compileInsert](table.md#compileinsert)
- [compileUpdate](table.md#compileupdate)
- [createAnd](table.md#createand)
- [createFalse](table.md#createfalse)
- [createInsert](table.md#createinsert)
- [createJoin](table.md#createjoin)
- [createOn](table.md#createon)
- [createStringJoin](table.md#createstringjoin)
- [createTableAlias](table.md#createtablealias)
- [createTrue](table.md#createtrue)
- [from](table.md#from)
- [get](table.md#get)
- [group](table.md#group)
- [grouping](table.md#grouping)
- [having](table.md#having)
- [isAbleToTypeCast](table.md#isabletotypecast)
- [join](table.md#join)
- [lower](table.md#lower)
- [order](table.md#order)
- [outerJoin](table.md#outerjoin)
- [project](table.md#project)
- [skip](table.md#skip)
- [take](table.md#take)
- [typeCastForDatabase](table.md#typecastfordatabase)
- [where](table.md#where)

## Constructors

### constructor

\+ **new Table**(`name`: _string_, `as?`: _null_ \| _string_ \|
[_TableAlias_](nodes.tablealias.md), `typeCaster?`: _any_): [_Table_](table.md)

#### Parameters:

| Name         | Type                                                      | Default value |
| ------------ | --------------------------------------------------------- | ------------- |
| `name`       | _string_                                                  | -             |
| `as`         | _null_ \| _string_ \| [_TableAlias_](nodes.tablealias.md) | null          |
| `typeCaster` | _any_                                                     | null          |

**Returns:** [_Table_](table.md)

Defined in:
[src/Table.ts:23](https://github.com/sequeljs/ast/blob/8de61b1/src/Table.ts#L23)

## Properties

### ast

• `Readonly` `Abstract` **ast**: [_SelectStatement_](nodes.selectstatement.md)

Defined in:
[src/mixins/CRUD.ts:11](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/CRUD.ts#L11)

---

### ctx

• `Protected` `Abstract` **ctx**: [_SelectCore_](nodes.selectcore.md)

Defined in:
[src/mixins/CRUD.ts:13](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/CRUD.ts#L13)

---

### name

• **name**: _string_

Defined in:
[src/Table.ts:15](https://github.com/sequeljs/ast/blob/8de61b1/src/Table.ts#L15)

---

### tableAlias

• **tableAlias**: _null_ \| _string_ \| [_TableAlias_](nodes.tablealias.md)

Defined in:
[src/Table.ts:17](https://github.com/sequeljs/ast/blob/8de61b1/src/Table.ts#L17)

---

### typeCaster

• `Protected` **typeCaster**:
[_TypeCaster_](../interfaces/interfaces.typecaster.md)

Defined in:
[src/Table.ts:19](https://github.com/sequeljs/ast/blob/8de61b1/src/Table.ts#L19)

## Accessors

### tableName

• **tableName**(): _string_

**Returns:** _string_

Defined in:
[src/Table.ts:21](https://github.com/sequeljs/ast/blob/8de61b1/src/Table.ts#L21)

## Methods

### alias

▸ **alias**(`name?`: _string_): [_TableAlias_](nodes.tablealias.md)

#### Parameters:

| Name   | Type     | Default value |
| ------ | -------- | ------------- |
| `name` | _string_ | ...           |

**Returns:** [_TableAlias_](nodes.tablealias.md)

Defined in:
[src/Table.ts:41](https://github.com/sequeljs/ast/blob/8de61b1/src/Table.ts#L41)

---

### coalesce

▸ **coalesce**(...`exprs`: _any_[]):
[_NamedSQLFunction_](nodes.namedsqlfunction.md)

#### Parameters:

| Name       | Type    |
| ---------- | ------- |
| `...exprs` | _any_[] |

**Returns:** [_NamedSQLFunction_](nodes.namedsqlfunction.md)

Defined in:
[src/mixins/FactoryMethods.ts:22](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/FactoryMethods.ts#L22)

---

### compileDelete

▸ **compileDelete**(): [_DeleteManager_](managers.deletemanager.md)

**Returns:** [_DeleteManager_](managers.deletemanager.md)

Defined in:
[src/mixins/CRUD.ts:49](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/CRUD.ts#L49)

---

### compileInsert

▸ **compileInsert**(`values`: _any_):
[_InsertManager_](managers.insertmanager.md)

#### Parameters:

| Name     | Type  |
| -------- | ----- |
| `values` | _any_ |

**Returns:** [_InsertManager_](managers.insertmanager.md)

Defined in:
[src/mixins/CRUD.ts:37](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/CRUD.ts#L37)

---

### compileUpdate

▸ **compileUpdate**(`values`: _any_, `pk`: _any_):
[_UpdateManager_](managers.updatemanager.md)

#### Parameters:

| Name     | Type  |
| -------- | ----- |
| `values` | _any_ |
| `pk`     | _any_ |

**Returns:** [_UpdateManager_](managers.updatemanager.md)

Defined in:
[src/mixins/CRUD.ts:15](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/CRUD.ts#L15)

---

### createAnd

▸ **createAnd**(`clauses`: _any_[]): [_And_](nodes.and.md)

#### Parameters:

| Name      | Type    |
| --------- | ------- |
| `clauses` | _any_[] |

**Returns:** [_And_](nodes.and.md)

Defined in:
[src/mixins/FactoryMethods.ts:26](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/FactoryMethods.ts#L26)

---

### createFalse

▸ **createFalse**(): [_False_](nodes.false.md)

**Returns:** [_False_](nodes.false.md)

Defined in:
[src/mixins/FactoryMethods.ts:30](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/FactoryMethods.ts#L30)

---

### createInsert

▸ **createInsert**(): [_InsertManager_](managers.insertmanager.md)

**Returns:** [_InsertManager_](managers.insertmanager.md)

Defined in:
[src/mixins/CRUD.ts:45](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/CRUD.ts#L45)

---

### createJoin

▸ **createJoin**(`to`: _null_ \| _string_ \| [_Table_](table.md) \|
[_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md)):
[_InnerJoin_](nodes.innerjoin.md)

#### Parameters:

| Name | Type                                                                                                                    |
| ---- | ----------------------------------------------------------------------------------------------------------------------- |
| `to` | _null_ \| _string_ \| [_Table_](table.md) \| [_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md) |

**Returns:** [_InnerJoin_](nodes.innerjoin.md)

Defined in:
[src/mixins/FactoryMethods.ts:34](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/FactoryMethods.ts#L34)

▸ **createJoin**(`to`: _null_ \| _string_ \| [_Table_](table.md) \|
[_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md),
`constraint`: _any_): [_InnerJoin_](nodes.innerjoin.md)

#### Parameters:

| Name         | Type                                                                                                                    |
| ------------ | ----------------------------------------------------------------------------------------------------------------------- |
| `to`         | _null_ \| _string_ \| [_Table_](table.md) \| [_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md) |
| `constraint` | _any_                                                                                                                   |

**Returns:** [_InnerJoin_](nodes.innerjoin.md)

Defined in:
[src/mixins/FactoryMethods.ts:35](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/FactoryMethods.ts#L35)

▸ **createJoin**(`to`: _null_ \| _string_ \| [_Table_](table.md) \|
[_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md),
`constraint`: _any_, `Klass`: _typeof_
[_FullOuterJoin_](nodes.fullouterjoin.md)):
[_FullOuterJoin_](nodes.fullouterjoin.md)

#### Parameters:

| Name         | Type                                                                                                                    |
| ------------ | ----------------------------------------------------------------------------------------------------------------------- |
| `to`         | _null_ \| _string_ \| [_Table_](table.md) \| [_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md) |
| `constraint` | _any_                                                                                                                   |
| `Klass`      | _typeof_ [_FullOuterJoin_](nodes.fullouterjoin.md)                                                                      |

**Returns:** [_FullOuterJoin_](nodes.fullouterjoin.md)

Defined in:
[src/mixins/FactoryMethods.ts:39](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/FactoryMethods.ts#L39)

▸ **createJoin**(`to`: _null_ \| _string_ \| [_Table_](table.md) \|
[_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md),
`constraint`: _any_, `Klass`: _typeof_ [_InnerJoin_](nodes.innerjoin.md)):
[_InnerJoin_](nodes.innerjoin.md)

#### Parameters:

| Name         | Type                                                                                                                    |
| ------------ | ----------------------------------------------------------------------------------------------------------------------- |
| `to`         | _null_ \| _string_ \| [_Table_](table.md) \| [_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md) |
| `constraint` | _any_                                                                                                                   |
| `Klass`      | _typeof_ [_InnerJoin_](nodes.innerjoin.md)                                                                              |

**Returns:** [_InnerJoin_](nodes.innerjoin.md)

Defined in:
[src/mixins/FactoryMethods.ts:44](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/FactoryMethods.ts#L44)

▸ **createJoin**(`to`: _null_ \| _string_ \| [_Table_](table.md) \|
[_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md),
`constraint`: _any_, `Klass`: _typeof_ [_OuterJoin_](nodes.outerjoin.md)):
[_OuterJoin_](nodes.outerjoin.md)

#### Parameters:

| Name         | Type                                                                                                                    |
| ------------ | ----------------------------------------------------------------------------------------------------------------------- |
| `to`         | _null_ \| _string_ \| [_Table_](table.md) \| [_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md) |
| `constraint` | _any_                                                                                                                   |
| `Klass`      | _typeof_ [_OuterJoin_](nodes.outerjoin.md)                                                                              |

**Returns:** [_OuterJoin_](nodes.outerjoin.md)

Defined in:
[src/mixins/FactoryMethods.ts:49](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/FactoryMethods.ts#L49)

▸ **createJoin**(`to`: _null_ \| _string_ \| [_Table_](table.md) \|
[_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md),
`constraint`: _any_, `Klass`: _typeof_
[_RightOuterJoin_](nodes.rightouterjoin.md)):
[_RightOuterJoin_](nodes.rightouterjoin.md)

#### Parameters:

| Name         | Type                                                                                                                    |
| ------------ | ----------------------------------------------------------------------------------------------------------------------- |
| `to`         | _null_ \| _string_ \| [_Table_](table.md) \| [_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md) |
| `constraint` | _any_                                                                                                                   |
| `Klass`      | _typeof_ [_RightOuterJoin_](nodes.rightouterjoin.md)                                                                    |

**Returns:** [_RightOuterJoin_](nodes.rightouterjoin.md)

Defined in:
[src/mixins/FactoryMethods.ts:54](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/FactoryMethods.ts#L54)

▸ **createJoin**(`to`: _null_ \| _string_ \| [_Table_](table.md) \|
[_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md),
`constraint`: _any_, `Klass`: _typeof_ [_StringJoin_](nodes.stringjoin.md)):
[_StringJoin_](nodes.stringjoin.md)

#### Parameters:

| Name         | Type                                                                                                                    |
| ------------ | ----------------------------------------------------------------------------------------------------------------------- |
| `to`         | _null_ \| _string_ \| [_Table_](table.md) \| [_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md) |
| `constraint` | _any_                                                                                                                   |
| `Klass`      | _typeof_ [_StringJoin_](nodes.stringjoin.md)                                                                            |

**Returns:** [_StringJoin_](nodes.stringjoin.md)

Defined in:
[src/mixins/FactoryMethods.ts:59](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/FactoryMethods.ts#L59)

---

### createOn

▸ **createOn**(`expr`: _any_): [_On_](nodes.on.md)

#### Parameters:

| Name   | Type  |
| ------ | ----- |
| `expr` | _any_ |

**Returns:** [_On_](nodes.on.md)

Defined in:
[src/mixins/FactoryMethods.ts:72](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/FactoryMethods.ts#L72)

---

### createStringJoin

▸ **createStringJoin**(`to`: _null_ \| _string_ \| [_Table_](table.md) \|
[_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md)):
[_StringJoin_](nodes.stringjoin.md)

#### Parameters:

| Name | Type                                                                                                                    |
| ---- | ----------------------------------------------------------------------------------------------------------------------- |
| `to` | _null_ \| _string_ \| [_Table_](table.md) \| [_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md) |

**Returns:** [_StringJoin_](nodes.stringjoin.md)

Defined in:
[src/mixins/FactoryMethods.ts:76](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/FactoryMethods.ts#L76)

---

### createTableAlias

▸ **createTableAlias**(`relation`: [_Table_](table.md) \|
[_TableAlias_](nodes.tablealias.md) \| [_Grouping_](nodes.grouping.md), `name`:
_string_ \| [_SQLLiteral_](nodes.sqlliteral.md)):
[_TableAlias_](nodes.tablealias.md)

#### Parameters:

| Name       | Type                                                                                          |
| ---------- | --------------------------------------------------------------------------------------------- |
| `relation` | [_Table_](table.md) \| [_TableAlias_](nodes.tablealias.md) \| [_Grouping_](nodes.grouping.md) |
| `name`     | _string_ \| [_SQLLiteral_](nodes.sqlliteral.md)                                               |

**Returns:** [_TableAlias_](nodes.tablealias.md)

Defined in:
[src/mixins/FactoryMethods.ts:80](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/FactoryMethods.ts#L80)

---

### createTrue

▸ **createTrue**(): [_True_](nodes.true.md)

**Returns:** [_True_](nodes.true.md)

Defined in:
[src/mixins/FactoryMethods.ts:87](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/FactoryMethods.ts#L87)

---

### from

▸ **from**(): [_SelectManager_](managers.selectmanager.md)

**Returns:** [_SelectManager_](managers.selectmanager.md)

Defined in:
[src/mixins/SelectPredications.ts:13](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/SelectPredications.ts#L13)

---

### get

▸ **get**(`name`: _string_ \| [_SQLLiteral_](nodes.sqlliteral.md)):
[_Attribute_](attributes.attribute.md)

#### Parameters:

| Name   | Type                                            |
| ------ | ----------------------------------------------- |
| `name` | _string_ \| [_SQLLiteral_](nodes.sqlliteral.md) |

**Returns:** [_Attribute_](attributes.attribute.md)

Defined in:
[src/Table.ts:45](https://github.com/sequeljs/ast/blob/8de61b1/src/Table.ts#L45)

---

### group

▸ **group**(...`columns`: (_string_ \|
[_Attribute_](attributes.attribute.md))[]):
[_SelectManager_](managers.selectmanager.md)

#### Parameters:

| Name         | Type                                                   |
| ------------ | ------------------------------------------------------ |
| `...columns` | (_string_ \| [_Attribute_](attributes.attribute.md))[] |

**Returns:** [_SelectManager_](managers.selectmanager.md)

Defined in:
[src/mixins/SelectPredications.ts:17](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/SelectPredications.ts#L17)

---

### grouping

▸ **grouping**(`expr`: _any_): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name   | Type  |
| ------ | ----- |
| `expr` | _any_ |

**Returns:** [_Grouping_](nodes.grouping.md)

Defined in:
[src/mixins/FactoryMethods.ts:91](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/FactoryMethods.ts#L91)

---

### having

▸ **having**(`expr`: _any_): [_SelectManager_](managers.selectmanager.md)

#### Parameters:

| Name   | Type  |
| ------ | ----- |
| `expr` | _any_ |

**Returns:** [_SelectManager_](managers.selectmanager.md)

Defined in:
[src/mixins/SelectPredications.ts:21](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/SelectPredications.ts#L21)

---

### isAbleToTypeCast

▸ **isAbleToTypeCast**(): _boolean_

**Returns:** _boolean_

Implementation of: [TypeCaster](../interfaces/interfaces.typecaster.md)

Defined in:
[src/Table.ts:50](https://github.com/sequeljs/ast/blob/8de61b1/src/Table.ts#L50)

---

### join

▸ **join**(`relation`: _null_ \| _string_ \| [_Table_](table.md) \|
[_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md),
`klass?`: _typeof_ [_Join_](nodes.join.md)):
[_SelectManager_](managers.selectmanager.md)

#### Parameters:

| Name       | Type                                                                                                                    | Default value |
| ---------- | ----------------------------------------------------------------------------------------------------------------------- | ------------- |
| `relation` | _null_ \| _string_ \| [_Table_](table.md) \| [_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md) | -             |
| `klass`    | _typeof_ [_Join_](nodes.join.md)                                                                                        | ...           |

**Returns:** [_SelectManager_](managers.selectmanager.md)

Defined in:
[src/mixins/SelectPredications.ts:25](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/SelectPredications.ts#L25)

---

### lower

▸ **lower**(`column`: _any_): [_NamedSQLFunction_](nodes.namedsqlfunction.md)

#### Parameters:

| Name     | Type  |
| -------- | ----- |
| `column` | _any_ |

**Returns:** [_NamedSQLFunction_](nodes.namedsqlfunction.md)

Defined in:
[src/mixins/FactoryMethods.ts:95](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/FactoryMethods.ts#L95)

---

### order

▸ **order**(...`expr`: _any_[]): [_SelectManager_](managers.selectmanager.md)

#### Parameters:

| Name      | Type    |
| --------- | ------- |
| `...expr` | _any_[] |

**Returns:** [_SelectManager_](managers.selectmanager.md)

Defined in:
[src/mixins/SelectPredications.ts:32](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/SelectPredications.ts#L32)

---

### outerJoin

▸ **outerJoin**(`relation`: _null_ \| _string_ \| [_Table_](table.md) \|
[_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md)):
[_SelectManager_](managers.selectmanager.md)

#### Parameters:

| Name       | Type                                                                                                                    |
| ---------- | ----------------------------------------------------------------------------------------------------------------------- |
| `relation` | _null_ \| _string_ \| [_Table_](table.md) \| [_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md) |

**Returns:** [_SelectManager_](managers.selectmanager.md)

Defined in:
[src/mixins/SelectPredications.ts:36](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/SelectPredications.ts#L36)

---

### project

▸ **project**(...`things`: _any_[]):
[_SelectManager_](managers.selectmanager.md)

#### Parameters:

| Name        | Type    |
| ----------- | ------- |
| `...things` | _any_[] |

**Returns:** [_SelectManager_](managers.selectmanager.md)

Defined in:
[src/mixins/SelectPredications.ts:40](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/SelectPredications.ts#L40)

---

### skip

▸ **skip**(`amount`: _any_): [_SelectManager_](managers.selectmanager.md)

#### Parameters:

| Name     | Type  |
| -------- | ----- |
| `amount` | _any_ |

**Returns:** [_SelectManager_](managers.selectmanager.md)

Defined in:
[src/mixins/SelectPredications.ts:44](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/SelectPredications.ts#L44)

---

### take

▸ **take**(`amount`: _any_): [_SelectManager_](managers.selectmanager.md)

#### Parameters:

| Name     | Type  |
| -------- | ----- |
| `amount` | _any_ |

**Returns:** [_SelectManager_](managers.selectmanager.md)

Defined in:
[src/mixins/SelectPredications.ts:48](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/SelectPredications.ts#L48)

---

### typeCastForDatabase

▸ **typeCastForDatabase**(`attributeName`: _string_ \|
[_SQLLiteral_](nodes.sqlliteral.md), `value`:
[_Visitable_](../modules/visitors.md#visitable)): _string_ \| _number_

#### Parameters:

| Name            | Type                                            |
| --------------- | ----------------------------------------------- |
| `attributeName` | _string_ \| [_SQLLiteral_](nodes.sqlliteral.md) |
| `value`         | [_Visitable_](../modules/visitors.md#visitable) |

**Returns:** _string_ \| _number_

Implementation of: [TypeCaster](../interfaces/interfaces.typecaster.md)

Defined in:
[src/Table.ts:54](https://github.com/sequeljs/ast/blob/8de61b1/src/Table.ts#L54)

---

### where

▸ **where**(`condition`: _any_): [_SelectManager_](managers.selectmanager.md)

#### Parameters:

| Name        | Type  |
| ----------- | ----- |
| `condition` | _any_ |

**Returns:** [_SelectManager_](managers.selectmanager.md)

Defined in:
[src/mixins/SelectPredications.ts:52](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/SelectPredications.ts#L52)
