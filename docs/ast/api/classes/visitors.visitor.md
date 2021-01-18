---
id: 'visitors.visitor'
title: 'Class: Visitor'
sidebar_label: 'Visitor'
hide_title: true
---

# Class: Visitor

[Visitors](../modules/visitors.md).Visitor

## Hierarchy

- **Visitor**

  ↳ [_ToSQL_](visitors.tosql.md)

## Constructors

### constructor

\+ **new Visitor**(): [_Visitor_](visitors.visitor.md)

**Returns:** [_Visitor_](visitors.visitor.md)

## Methods

### accept

▸ **accept**<T\>(`object`: _null_ \| _string_ \| _number_ \| _bigint_ \|
_boolean_ \| _symbol_ \| [_Attribute_](attributes.attribute.md) \|
[_Table_](table.md) \| [_TableAlias_](nodes.tablealias.md) \|
[_SQLLiteral_](nodes.sqlliteral.md) \| Date \| [_Node_](nodes.node.md) \|
[_SelectManager_](managers.selectmanager.md) \|
[_Visitable_](../modules/visitors.md#visitable)[], `collector`: T): T

#### Type parameters:

| Name | Type                                                                 |
| ---- | -------------------------------------------------------------------- |
| `T`  | [_Collector_](../interfaces/collectors.collector.md)<T[*value*], T\> |

#### Parameters:

| Name        | Type                                                                                                                                                                                                                                                                                                                                                       |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `object`    | _null_ \| _string_ \| _number_ \| _bigint_ \| _boolean_ \| _symbol_ \| [_Attribute_](attributes.attribute.md) \| [_Table_](table.md) \| [_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md) \| Date \| [_Node_](nodes.node.md) \| [_SelectManager_](managers.selectmanager.md) \| [_Visitable_](../modules/visitors.md#visitable)[] |
| `collector` | T                                                                                                                                                                                                                                                                                                                                                          |

**Returns:** T

Defined in: @sequeljs/ast/src/visitors/Visitor.ts:11

---

### visit

▸ **visit**<T\>(`object`: _null_ \| _string_ \| _number_ \| _bigint_ \|
_boolean_ \| _symbol_ \| [_Attribute_](attributes.attribute.md) \|
[_Table_](table.md) \| [_TableAlias_](nodes.tablealias.md) \|
[_SQLLiteral_](nodes.sqlliteral.md) \| Date \| [_Node_](nodes.node.md) \|
[_SelectManager_](managers.selectmanager.md) \|
[_Visitable_](../modules/visitors.md#visitable)[], `collector`: T): T

#### Type parameters:

| Name | Type                                                                 |
| ---- | -------------------------------------------------------------------- |
| `T`  | [_Collector_](../interfaces/collectors.collector.md)<T[*value*], T\> |

#### Parameters:

| Name        | Type                                                                                                                                                                                                                                                                                                                                                       |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `object`    | _null_ \| _string_ \| _number_ \| _bigint_ \| _boolean_ \| _symbol_ \| [_Attribute_](attributes.attribute.md) \| [_Table_](table.md) \| [_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md) \| Date \| [_Node_](nodes.node.md) \| [_SelectManager_](managers.selectmanager.md) \| [_Visitable_](../modules/visitors.md#visitable)[] |
| `collector` | T                                                                                                                                                                                                                                                                                                                                                          |

**Returns:** T

Defined in: @sequeljs/ast/src/visitors/Visitor.ts:18
