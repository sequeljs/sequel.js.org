[@sequeljs/ast](../README.md) / [Exports](../modules.md) /
[Visitors](../modules/visitors.md) / Visitor

# Class: Visitor

## Hierarchy

- **Visitor**

  ↳ [_ToSQL_](visitors.tosql.md)

## Index

### Constructors

- [constructor](visitors.visitor.md#constructor)

### Methods

- [accept](visitors.visitor.md#accept)
- [visit](visitors.visitor.md#visit)

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

Defined in:
[src/visitors/Visitor.ts:11](https://github.com/sequeljs/ast/blob/6632050/src/visitors/Visitor.ts#L11)

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

Defined in:
[src/visitors/Visitor.ts:18](https://github.com/sequeljs/ast/blob/6632050/src/visitors/Visitor.ts#L18)
