[@sequeljs/ast](../README.md) / [Exports](../modules.md) / Visitors

# Namespace: Visitors

## Table of contents

### Classes

- [MySQL](../classes/visitors.mysql.md)
- [PostgreSQL](../classes/visitors.postgresql.md)
- [ToSQL](../classes/visitors.tosql.md)
- [Visitor](../classes/visitors.visitor.md)
- [WhereSQL](../classes/visitors.wheresql.md)

### Type aliases

- [VisitFunction](visitors.md#visitfunction)
- [Visitable](visitors.md#visitable)

## Type aliases

### VisitFunction

Ƭ **VisitFunction**<T\>: (`thing`: [_Visitable_](visitors.md#visitable) \|
[_Visitable_](visitors.md#visitable)[] \| _null_, `col`: T) => T

#### Type parameters:

| Name |
| ---- |
| `T`  |

Defined in:
[src/visitors/VisitFunction.ts:5](https://github.com/sequeljs/ast/blob/8de61b1/src/visitors/VisitFunction.ts#L5)

---

### Visitable

Ƭ **Visitable**: _bigint_ \| _boolean_ \| _number_ \| _string_ \| _symbol_ \|
[_Attribute_](../classes/attributes.attribute.md) \| Date \|
[_Node_](../classes/nodes.node.md) \| [_Relation_](interfaces.md#relation) \|
[_SQLLiteral_](../classes/nodes.sqlliteral.md) \|
[_SelectManager_](../classes/managers.selectmanager.md)

Defined in:
[src/visitors/Visitable.ts:10](https://github.com/sequeljs/ast/blob/8de61b1/src/visitors/Visitable.ts#L10)
