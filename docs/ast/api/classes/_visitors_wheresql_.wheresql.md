---
id: '_visitors_wheresql_.wheresql'
title: 'WhereSQL'
sidebar_label: 'WhereSQL'
---

[@sequeljs/ast](../index.md) › [Globals](../globals.md) ›
["visitors/WhereSQL"](../modules/_visitors_wheresql_.md) ›
[WhereSQL](_visitors_wheresql_.wheresql.md)

## Hierarchy

↳ [ToSQL](_visitors_tosql_.tosql.md)

↳ **WhereSQL**

## Index

### Constructors

- [constructor](_visitors_wheresql_.wheresql.md#constructor)

### Properties

- [connection](_visitors_wheresql_.wheresql.md#connection)
- [innerVisitor](_visitors_wheresql_.wheresql.md#private-innervisitor)

### Methods

- [accept](_visitors_wheresql_.wheresql.md#accept)
- [aggregate](_visitors_wheresql_.wheresql.md#protected-aggregate)
- [collectInClause](_visitors_wheresql_.wheresql.md#protected-collectinclause)
- [collectNodesFor](_visitors_wheresql_.wheresql.md#protected-collectnodesfor)
- [collectNotInClause](_visitors_wheresql_.wheresql.md#protected-collectnotinclause)
- [collectOptimizerHints](_visitors_wheresql_.wheresql.md#protected-collectoptimizerhints)
- [compile](_visitors_wheresql_.wheresql.md#compile)
- [hasJoinSources](_visitors_wheresql_.wheresql.md#protected-hasjoinsources)
- [hasLimitOrOffsetOrOrders](_visitors_wheresql_.wheresql.md#protected-haslimitoroffsetororders)
- [infixValue](_visitors_wheresql_.wheresql.md#protected-infixvalue)
- [infixValueWithParen](_visitors_wheresql_.wheresql.md#protected-infixvaluewithparen)
- [injectJoin](_visitors_wheresql_.wheresql.md#protected-injectjoin)
- [isDistinctFrom](_visitors_wheresql_.wheresql.md#protected-isdistinctfrom)
- [isUnboundable](_visitors_wheresql_.wheresql.md#protected-isunboundable)
- [literal](_visitors_wheresql_.wheresql.md#protected-literal)
- [maybeVisit](_visitors_wheresql_.wheresql.md#protected-maybevisit)
- [prepareDeleteStatement](_visitors_wheresql_.wheresql.md#protected-preparedeletestatement)
- [prepareDeleteUpdateStatement](_visitors_wheresql_.wheresql.md#protected-preparedeleteupdatestatement)
- [prepareUpdateStatement](_visitors_wheresql_.wheresql.md#protected-prepareupdatestatement)
- [quote](_visitors_wheresql_.wheresql.md#protected-quote)
- [quoteColumnName](_visitors_wheresql_.wheresql.md#protected-quotecolumnname)
- [quoteTableName](_visitors_wheresql_.wheresql.md#protected-quotetablename)
- [quoted](_visitors_wheresql_.wheresql.md#protected-quoted)
- [sanitizeAsSQLComment](_visitors_wheresql_.wheresql.md#protected-sanitizeassqlcomment)
- [unsupported](_visitors_wheresql_.wheresql.md#protected-unsupported)
- [visit](_visitors_wheresql_.wheresql.md#visit)
- [visitAddition](_visitors_wheresql_.wheresql.md#protected-visitaddition)
- [visitAnd](_visitors_wheresql_.wheresql.md#protected-visitand)
- [visitArray](_visitors_wheresql_.wheresql.md#protected-visitarray)
- [visitAs](_visitors_wheresql_.wheresql.md#protected-visitas)
- [visitAscending](_visitors_wheresql_.wheresql.md#protected-visitascending)
- [visitAssignment](_visitors_wheresql_.wheresql.md#protected-visitassignment)
- [visitAttributesAttribute](_visitors_wheresql_.wheresql.md#protected-visitattributesattribute)
- [visitAttributesBoolean](_visitors_wheresql_.wheresql.md#protected-visitattributesboolean)
- [visitAttributesDecimal](_visitors_wheresql_.wheresql.md#protected-visitattributesdecimal)
- [visitAttributesFloat](_visitors_wheresql_.wheresql.md#protected-visitattributesfloat)
- [visitAttributesInteger](_visitors_wheresql_.wheresql.md#protected-visitattributesinteger)
- [visitAttributesString](_visitors_wheresql_.wheresql.md#protected-visitattributesstring)
- [visitAttributesTime](_visitors_wheresql_.wheresql.md#protected-visitattributestime)
- [visitAvg](_visitors_wheresql_.wheresql.md#protected-visitavg)
- [visitBetween](_visitors_wheresql_.wheresql.md#protected-visitbetween)
- [visitBigInt](_visitors_wheresql_.wheresql.md#protected-visitbigint)
- [visitBin](_visitors_wheresql_.wheresql.md#protected-visitbin)
- [visitBindParam](_visitors_wheresql_.wheresql.md#protected-visitbindparam)
- [visitBoolean](_visitors_wheresql_.wheresql.md#protected-visitboolean)
- [visitCase](_visitors_wheresql_.wheresql.md#protected-visitcase)
- [visitCasted](_visitors_wheresql_.wheresql.md#protected-visitcasted)
- [visitComment](_visitors_wheresql_.wheresql.md#protected-visitcomment)
- [visitCount](_visitors_wheresql_.wheresql.md#protected-visitcount)
- [visitCurrentRow](_visitors_wheresql_.wheresql.md#protected-visitcurrentrow)
- [visitDate](_visitors_wheresql_.wheresql.md#protected-visitdate)
- [visitDeleteStatement](_visitors_wheresql_.wheresql.md#protected-visitdeletestatement)
- [visitDescending](_visitors_wheresql_.wheresql.md#protected-visitdescending)
- [visitDistinct](_visitors_wheresql_.wheresql.md#protected-visitdistinct)
- [visitDistinctOn](_visitors_wheresql_.wheresql.md#protected-visitdistincton)
- [visitDivision](_visitors_wheresql_.wheresql.md#protected-visitdivision)
- [visitDoesNotMatch](_visitors_wheresql_.wheresql.md#protected-visitdoesnotmatch)
- [visitElse](_visitors_wheresql_.wheresql.md#protected-visitelse)
- [visitEquality](_visitors_wheresql_.wheresql.md#protected-visitequality)
- [visitExcept](_visitors_wheresql_.wheresql.md#protected-visitexcept)
- [visitExists](_visitors_wheresql_.wheresql.md#protected-visitexists)
- [visitExtract](_visitors_wheresql_.wheresql.md#protected-visitextract)
- [visitFalse](_visitors_wheresql_.wheresql.md#protected-visitfalse)
- [visitFollowing](_visitors_wheresql_.wheresql.md#protected-visitfollowing)
- [visitFullOuterJoin](_visitors_wheresql_.wheresql.md#protected-visitfullouterjoin)
- [visitGreaterThan](_visitors_wheresql_.wheresql.md#protected-visitgreaterthan)
- [visitGreaterThanOrEqual](_visitors_wheresql_.wheresql.md#protected-visitgreaterthanorequal)
- [visitGroup](_visitors_wheresql_.wheresql.md#protected-visitgroup)
- [visitGrouping](_visitors_wheresql_.wheresql.md#protected-visitgrouping)
- [visitIn](_visitors_wheresql_.wheresql.md#protected-visitin)
- [visitInfixOperation](_visitors_wheresql_.wheresql.md#protected-visitinfixoperation)
- [visitInnerJoin](_visitors_wheresql_.wheresql.md#protected-visitinnerjoin)
- [visitInsertStatement](_visitors_wheresql_.wheresql.md#protected-visitinsertstatement)
- [visitIntersect](_visitors_wheresql_.wheresql.md#protected-visitintersect)
- [visitIsDistinctFrom](_visitors_wheresql_.wheresql.md#protected-visitisdistinctfrom)
- [visitIsNotDistinctFrom](_visitors_wheresql_.wheresql.md#protected-visitisnotdistinctfrom)
- [visitJoinSource](_visitors_wheresql_.wheresql.md#protected-visitjoinsource)
- [visitLessThan](_visitors_wheresql_.wheresql.md#protected-visitlessthan)
- [visitLessThanOrEqual](_visitors_wheresql_.wheresql.md#protected-visitlessthanorequal)
- [visitLimit](_visitors_wheresql_.wheresql.md#protected-visitlimit)
- [visitLock](_visitors_wheresql_.wheresql.md#protected-visitlock)
- [visitMatches](_visitors_wheresql_.wheresql.md#protected-visitmatches)
- [visitMax](_visitors_wheresql_.wheresql.md#protected-visitmax)
- [visitMin](_visitors_wheresql_.wheresql.md#protected-visitmin)
- [visitMultiplication](_visitors_wheresql_.wheresql.md#protected-visitmultiplication)
- [visitNamedSQLFunction](_visitors_wheresql_.wheresql.md#protected-visitnamedsqlfunction)
- [visitNamedWindow](_visitors_wheresql_.wheresql.md#protected-visitnamedwindow)
- [visitNot](_visitors_wheresql_.wheresql.md#protected-visitnot)
- [visitNotEqual](_visitors_wheresql_.wheresql.md#protected-visitnotequal)
- [visitNotIn](_visitors_wheresql_.wheresql.md#protected-visitnotin)
- [visitNotRegexp](_visitors_wheresql_.wheresql.md#protected-visitnotregexp)
- [visitNull](_visitors_wheresql_.wheresql.md#protected-visitnull)
- [visitNumber](_visitors_wheresql_.wheresql.md#protected-visitnumber)
- [visitOffset](_visitors_wheresql_.wheresql.md#protected-visitoffset)
- [visitOn](_visitors_wheresql_.wheresql.md#protected-visiton)
- [visitOptimizerHints](_visitors_wheresql_.wheresql.md#protected-visitoptimizerhints)
- [visitOr](_visitors_wheresql_.wheresql.md#protected-visitor)
- [visitOuterJoin](_visitors_wheresql_.wheresql.md#protected-visitouterjoin)
- [visitOver](_visitors_wheresql_.wheresql.md#protected-visitover)
- [visitPreceding](_visitors_wheresql_.wheresql.md#protected-visitpreceding)
- [visitQuoted](_visitors_wheresql_.wheresql.md#protected-visitquoted)
- [visitRange](_visitors_wheresql_.wheresql.md#protected-visitrange)
- [visitRegexp](_visitors_wheresql_.wheresql.md#protected-visitregexp)
- [visitRightOuterJoin](_visitors_wheresql_.wheresql.md#protected-visitrightouterjoin)
- [visitRows](_visitors_wheresql_.wheresql.md#protected-visitrows)
- [visitSQLLiteral](_visitors_wheresql_.wheresql.md#protected-visitsqlliteral)
- [visitSelectCore](_visitors_wheresql_.wheresql.md#protected-visitselectcore)
- [visitSelectManager](_visitors_wheresql_.wheresql.md#protected-visitselectmanager)
- [visitSelectStatement](_visitors_wheresql_.wheresql.md#protected-visitselectstatement)
- [visitString](_visitors_wheresql_.wheresql.md#protected-visitstring)
- [visitStringJoin](_visitors_wheresql_.wheresql.md#protected-visitstringjoin)
- [visitSubtraction](_visitors_wheresql_.wheresql.md#protected-visitsubtraction)
- [visitSum](_visitors_wheresql_.wheresql.md#protected-visitsum)
- [visitSymbol](_visitors_wheresql_.wheresql.md#protected-visitsymbol)
- [visitTable](_visitors_wheresql_.wheresql.md#protected-visittable)
- [visitTableAlias](_visitors_wheresql_.wheresql.md#protected-visittablealias)
- [visitTrue](_visitors_wheresql_.wheresql.md#protected-visittrue)
- [visitUnaryOperation](_visitors_wheresql_.wheresql.md#protected-visitunaryoperation)
- [visitUnion](_visitors_wheresql_.wheresql.md#protected-visitunion)
- [visitUnionAll](_visitors_wheresql_.wheresql.md#protected-visitunionall)
- [visitUnqualifiedColumn](_visitors_wheresql_.wheresql.md#protected-visitunqualifiedcolumn)
- [visitUpdateStatement](_visitors_wheresql_.wheresql.md#protected-visitupdatestatement)
- [visitValuesList](_visitors_wheresql_.wheresql.md#protected-visitvalueslist)
- [visitWhen](_visitors_wheresql_.wheresql.md#protected-visitwhen)
- [visitWindow](_visitors_wheresql_.wheresql.md#protected-visitwindow)
- [visitWith](_visitors_wheresql_.wheresql.md#protected-visitwith)
- [visitWithRecursive](_visitors_wheresql_.wheresql.md#protected-visitwithrecursive)

## Constructors

### constructor

\+ **new WhereSQL**(`innerVisitor`: [Visitor](_visitors_visitor_.visitor.md),
`connection`:
[Connection](../interfaces/_interfaces_connection_.connection.md)):
_[WhereSQL](_visitors_wheresql_.wheresql.md)_

_Overrides
[ToSQL](_visitors_tosql_.tosql.md).[constructor](_visitors_tosql_.tosql.md#constructor)_

_Defined in
[src/visitors/WhereSQL.ts:22](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/WhereSQL.ts#L22)_

**Parameters:**

| Name           | Type                                                              |
| -------------- | ----------------------------------------------------------------- |
| `innerVisitor` | [Visitor](_visitors_visitor_.visitor.md)                          |
| `connection`   | [Connection](../interfaces/_interfaces_connection_.connection.md) |

**Returns:** _[WhereSQL](_visitors_wheresql_.wheresql.md)_

## Properties

### connection

• **connection**:
_[Connection](../interfaces/_interfaces_connection_.connection.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[connection](_visitors_tosql_.tosql.md#connection)_

_Defined in
[src/visitors/ToSQL.ts:154](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L154)_

---

### `Private` innerVisitor

• **innerVisitor**: _[Visitor](_visitors_visitor_.visitor.md)_

_Defined in
[src/visitors/WhereSQL.ts:22](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/WhereSQL.ts#L22)_

## Methods

### accept

▸ **accept**‹**T**›(`object`:
[Visitable](../modules/_visitors_visitable_.md#visitable) |
[Visitable](../modules/_visitors_visitable_.md#visitable)[] | null, `collector`:
T): _T_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[accept](_visitors_tosql_.tosql.md#accept)_

_Defined in
[src/visitors/Visitor.ts:11](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/Visitor.ts#L11)_

**Type parameters:**

▪ **T**:
_[Collector](../interfaces/_collectors_collector_.collector.md)‹T["value"]›_

**Parameters:**

| Name        | Type                                                                                                                                     |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `object`    | [Visitable](../modules/_visitors_visitable_.md#visitable) &#124; [Visitable](../modules/_visitors_visitable_.md#visitable)[] &#124; null |
| `collector` | T                                                                                                                                        |

**Returns:** _T_

---

### `Protected` aggregate

▸ **aggregate**(`name`: string, `thing`:
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[aggregate](_visitors_tosql_.tosql.md#protected-aggregate)_

_Defined in
[src/visitors/ToSQL.ts:169](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L169)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `name`  | string                                                         |
| `thing` | [SQLFunction](_nodes_sqlfunction_.sqlfunction.md)              |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` collectInClause

▸ **collectInClause**(`left`:
[Visitable](../modules/_visitors_visitable_.md#visitable), `right`:
[Visitable](../modules/_visitors_visitable_.md#visitable) |
[Visitable](../modules/_visitors_visitable_.md#visitable)[], `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[collectInClause](_visitors_tosql_.tosql.md#protected-collectinclause)_

_Defined in
[src/visitors/ToSQL.ts:191](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L191)_

**Parameters:**

| Name    | Type                                                                                                                         |
| ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `left`  | [Visitable](../modules/_visitors_visitable_.md#visitable)                                                                    |
| `right` | [Visitable](../modules/_visitors_visitable_.md#visitable) &#124; [Visitable](../modules/_visitors_visitable_.md#visitable)[] |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md)                                                               |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` collectNodesFor

▸ **collectNodesFor**(`nodes`:
[Visitable](../modules/_visitors_visitable_.md#visitable)[], `col`:
[Collector](../interfaces/_collectors_collector_.collector.md), `spacer`:
string, `connector`: string):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[collectNodesFor](_visitors_tosql_.tosql.md#protected-collectnodesfor)_

_Defined in
[src/visitors/ToSQL.ts:206](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L206)_

**Parameters:**

| Name        | Type                                                           | Default |
| ----------- | -------------------------------------------------------------- | ------- |
| `nodes`     | [Visitable](../modules/_visitors_visitable_.md#visitable)[]    | -       |
| `col`       | [Collector](../interfaces/_collectors_collector_.collector.md) | -       |
| `spacer`    | string                                                         | -       |
| `connector` | string                                                         | ", "    |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` collectNotInClause

▸ **collectNotInClause**(`left`:
[Visitable](../modules/_visitors_visitable_.md#visitable), `right`:
[Visitable](../modules/_visitors_visitable_.md#visitable) |
[Visitable](../modules/_visitors_visitable_.md#visitable)[], `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[collectNotInClause](_visitors_tosql_.tosql.md#protected-collectnotinclause)_

_Defined in
[src/visitors/ToSQL.ts:222](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L222)_

**Parameters:**

| Name    | Type                                                                                                                         |
| ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `left`  | [Visitable](../modules/_visitors_visitable_.md#visitable)                                                                    |
| `right` | [Visitable](../modules/_visitors_visitable_.md#visitable) &#124; [Visitable](../modules/_visitors_visitable_.md#visitable)[] |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md)                                                               |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` collectOptimizerHints

▸ **collectOptimizerHints**(`thing`:
[SelectCore](_nodes_selectcore_.selectcore.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[collectOptimizerHints](_visitors_tosql_.tosql.md#protected-collectoptimizerhints)_

_Defined in
[src/visitors/ToSQL.ts:237](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L237)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [SelectCore](_nodes_selectcore_.selectcore.md)                 |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### compile

▸ **compile**(`node`: [Visitable](../modules/_visitors_visitable_.md#visitable),
`collector`:
[Collector](../interfaces/_collectors_collector_.collector.md)‹string |
string[]›): _string | string[]_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[compile](_visitors_tosql_.tosql.md#compile)_

_Defined in
[src/visitors/ToSQL.ts:162](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L162)_

**Parameters:**

| Name        | Type                                                                                   | Default         |
| ----------- | -------------------------------------------------------------------------------------- | --------------- |
| `node`      | [Visitable](../modules/_visitors_visitable_.md#visitable)                              | -               |
| `collector` | [Collector](../interfaces/_collectors_collector_.collector.md)‹string &#124; string[]› | new SQLString() |

**Returns:** _string | string[]_

---

### `Protected` hasJoinSources

▸ **hasJoinSources**(`thing`: any): _boolean_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[hasJoinSources](_visitors_tosql_.tosql.md#protected-hasjoinsources)_

_Defined in
[src/visitors/ToSQL.ts:248](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L248)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `thing` | any  |

**Returns:** _boolean_

---

### `Protected` hasLimitOrOffsetOrOrders

▸ **hasLimitOrOffsetOrOrders**(`thing`:
[DeleteStatement](_nodes_deletestatement_.deletestatement.md) |
[UpdateStatement](_nodes_updatestatement_.updatestatement.md)): _boolean_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[hasLimitOrOffsetOrOrders](_visitors_tosql_.tosql.md#protected-haslimitoroffsetororders)_

_Defined in
[src/visitors/ToSQL.ts:254](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L254)_

**Parameters:**

| Name    | Type                                                                                                                               |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `thing` | [DeleteStatement](_nodes_deletestatement_.deletestatement.md) &#124; [UpdateStatement](_nodes_updatestatement_.updatestatement.md) |

**Returns:** _boolean_

---

### `Protected` infixValue

▸ **infixValue**(`thing`: [Binary](_nodes_binary_.binary.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md), `value`:
string): _[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[infixValue](_visitors_tosql_.tosql.md#protected-infixvalue)_

_Defined in
[src/visitors/ToSQL.ts:260](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L260)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [Binary](_nodes_binary_.binary.md)                             |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |
| `value` | string                                                         |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` infixValueWithParen

▸ **infixValueWithParen**(`thing`: [Binary](_nodes_binary_.binary.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md), `value`: string,
`suppressParens`: boolean):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[infixValueWithParen](_visitors_tosql_.tosql.md#protected-infixvaluewithparen)_

_Defined in
[src/visitors/ToSQL.ts:274](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L274)_

**Parameters:**

| Name             | Type                                                           | Default |
| ---------------- | -------------------------------------------------------------- | ------- |
| `thing`          | [Binary](_nodes_binary_.binary.md)                             | -       |
| `col`            | [Collector](../interfaces/_collectors_collector_.collector.md) | -       |
| `value`          | string                                                         | -       |
| `suppressParens` | boolean                                                        | false   |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` injectJoin

▸ **injectJoin**(`things`:
[Visitable](../modules/_visitors_visitable_.md#visitable)[], `col`:
[Collector](../interfaces/_collectors_collector_.collector.md), `joinStr`:
string): _[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[injectJoin](_visitors_tosql_.tosql.md#protected-injectjoin)_

_Defined in
[src/visitors/ToSQL.ts:307](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L307)_

**Parameters:**

| Name      | Type                                                           |
| --------- | -------------------------------------------------------------- |
| `things`  | [Visitable](../modules/_visitors_visitable_.md#visitable)[]    |
| `col`     | [Collector](../interfaces/_collectors_collector_.collector.md) |
| `joinStr` | string                                                         |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` isDistinctFrom

▸ **isDistinctFrom**(`thing`:
[IsDistinctFrom](_nodes_isdistinctfrom_.isdistinctfrom.md) |
[IsNotDistinctFrom](_nodes_isnotdistinctfrom_.isnotdistinctfrom.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[isDistinctFrom](_visitors_tosql_.tosql.md#protected-isdistinctfrom)_

_Defined in
[src/visitors/ToSQL.ts:324](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L324)_

**Parameters:**

| Name    | Type                                                                                                                                  |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `thing` | [IsDistinctFrom](_nodes_isdistinctfrom_.isdistinctfrom.md) &#124; [IsNotDistinctFrom](_nodes_isnotdistinctfrom_.isnotdistinctfrom.md) |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md)                                                                        |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` isUnboundable

▸ **isUnboundable**(`value`: any): _boolean_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[isUnboundable](_visitors_tosql_.tosql.md#protected-isunboundable)_

_Defined in
[src/visitors/ToSQL.ts:344](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L344)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `value` | any  |

**Returns:** _boolean_

---

### `Protected` literal

▸ **literal**(`thing`: bigint | number |
[SQLLiteral](_nodes_sqlliteral_.sqlliteral.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[literal](_visitors_tosql_.tosql.md#protected-literal)_

_Defined in
[src/visitors/ToSQL.ts:348](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L348)_

**Parameters:**

| Name    | Type                                                                       |
| ------- | -------------------------------------------------------------------------- |
| `thing` | bigint &#124; number &#124; [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md)             |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` maybeVisit

▸ **maybeVisit**(`thing`:
[Visitable](../modules/_visitors_visitable_.md#visitable), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[maybeVisit](_visitors_tosql_.tosql.md#protected-maybevisit)_

_Defined in
[src/visitors/ToSQL.ts:352](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L352)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [Visitable](../modules/_visitors_visitable_.md#visitable)      |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` prepareDeleteStatement

▸ **prepareDeleteStatement**(`thing`:
[DeleteStatement](_nodes_deletestatement_.deletestatement.md)):
_[DeleteStatement](_nodes_deletestatement_.deletestatement.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[prepareDeleteStatement](_visitors_tosql_.tosql.md#protected-preparedeletestatement)_

_Defined in
[src/visitors/ToSQL.ts:406](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L406)_

**Parameters:**

| Name    | Type                                                          |
| ------- | ------------------------------------------------------------- |
| `thing` | [DeleteStatement](_nodes_deletestatement_.deletestatement.md) |

**Returns:** _[DeleteStatement](_nodes_deletestatement_.deletestatement.md)_

---

### `Protected` prepareDeleteUpdateStatement

▸ **prepareDeleteUpdateStatement**(`thing`:
[DeleteStatement](_nodes_deletestatement_.deletestatement.md)):
_[DeleteStatement](_nodes_deletestatement_.deletestatement.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[prepareDeleteUpdateStatement](_visitors_tosql_.tosql.md#protected-preparedeleteupdatestatement)_

_Defined in
[src/visitors/ToSQL.ts:365](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L365)_

**Parameters:**

| Name    | Type                                                          |
| ------- | ------------------------------------------------------------- |
| `thing` | [DeleteStatement](_nodes_deletestatement_.deletestatement.md) |

**Returns:** _[DeleteStatement](_nodes_deletestatement_.deletestatement.md)_

▸ **prepareDeleteUpdateStatement**(`thing`:
[UpdateStatement](_nodes_updatestatement_.updatestatement.md)):
_[UpdateStatement](_nodes_updatestatement_.updatestatement.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[prepareDeleteUpdateStatement](_visitors_tosql_.tosql.md#protected-preparedeleteupdatestatement)_

_Defined in
[src/visitors/ToSQL.ts:368](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L368)_

**Parameters:**

| Name    | Type                                                          |
| ------- | ------------------------------------------------------------- |
| `thing` | [UpdateStatement](_nodes_updatestatement_.updatestatement.md) |

**Returns:** _[UpdateStatement](_nodes_updatestatement_.updatestatement.md)_

---

### `Protected` prepareUpdateStatement

▸ **prepareUpdateStatement**(`thing`:
[UpdateStatement](_nodes_updatestatement_.updatestatement.md)):
_[UpdateStatement](_nodes_updatestatement_.updatestatement.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[prepareUpdateStatement](_visitors_tosql_.tosql.md#protected-prepareupdatestatement)_

_Defined in
[src/visitors/ToSQL.ts:410](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L410)_

**Parameters:**

| Name    | Type                                                          |
| ------- | ------------------------------------------------------------- |
| `thing` | [UpdateStatement](_nodes_updatestatement_.updatestatement.md) |

**Returns:** _[UpdateStatement](_nodes_updatestatement_.updatestatement.md)_

---

### `Protected` quote

▸ **quote**(`value`: [Visitable](../modules/_visitors_visitable_.md#visitable)):
_number | string_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[quote](_visitors_tosql_.tosql.md#protected-quote)_

_Defined in
[src/visitors/ToSQL.ts:414](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L414)_

**Parameters:**

| Name    | Type                                                      |
| ------- | --------------------------------------------------------- |
| `value` | [Visitable](../modules/_visitors_visitable_.md#visitable) |

**Returns:** _number | string_

---

### `Protected` quoteColumnName

▸ **quoteColumnName**(`name`: number | string |
[SQLLiteral](_nodes_sqlliteral_.sqlliteral.md)): _string_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[quoteColumnName](_visitors_tosql_.tosql.md#protected-quotecolumnname)_

_Defined in
[src/visitors/ToSQL.ts:422](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L422)_

**Parameters:**

| Name   | Type                                                                       |
| ------ | -------------------------------------------------------------------------- |
| `name` | number &#124; string &#124; [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) |

**Returns:** _string_

---

### `Protected` quoteTableName

▸ **quoteTableName**(`name`: number | string |
[SQLLiteral](_nodes_sqlliteral_.sqlliteral.md)): _string_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[quoteTableName](_visitors_tosql_.tosql.md#protected-quotetablename)_

_Defined in
[src/visitors/ToSQL.ts:430](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L430)_

**Parameters:**

| Name   | Type                                                                       |
| ------ | -------------------------------------------------------------------------- |
| `name` | number &#124; string &#124; [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) |

**Returns:** _string_

---

### `Protected` quoted

▸ **quoted**(`val`: [Visitable](../modules/_visitors_visitable_.md#visitable),
`attribute`: [Attribute](_attributes_attribute_.attribute.md) | string | null):
_number | string_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[quoted](_visitors_tosql_.tosql.md#protected-quoted)_

_Defined in
[src/visitors/ToSQL.ts:438](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L438)_

**Parameters:**

| Name        | Type                                                                       |
| ----------- | -------------------------------------------------------------------------- |
| `val`       | [Visitable](../modules/_visitors_visitable_.md#visitable)                  |
| `attribute` | [Attribute](_attributes_attribute_.attribute.md) &#124; string &#124; null |

**Returns:** _number | string_

---

### `Protected` sanitizeAsSQLComment

▸ **sanitizeAsSQLComment**(`value`: any): _string |
[SQLLiteral](_nodes_sqlliteral_.sqlliteral.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[sanitizeAsSQLComment](_visitors_tosql_.tosql.md#protected-sanitizeassqlcomment)_

_Defined in
[src/visitors/ToSQL.ts:453](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L453)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `value` | any  |

**Returns:** _string | [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md)_

---

### `Protected` unsupported

▸ **unsupported**(`thing`: unknown, `_`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[unsupported](_visitors_tosql_.tosql.md#protected-unsupported)_

_Defined in
[src/visitors/ToSQL.ts:461](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L461)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | unknown                                                        |
| `_`     | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### visit

▸ **visit**‹**T**›(`object`:
[Visitable](../modules/_visitors_visitable_.md#visitable) |
[Visitable](../modules/_visitors_visitable_.md#visitable)[] | null, `collector`:
T): _T_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visit](_visitors_tosql_.tosql.md#visit)_

_Defined in
[src/visitors/Visitor.ts:18](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/Visitor.ts#L18)_

**Type parameters:**

▪ **T**:
_[Collector](../interfaces/_collectors_collector_.collector.md)‹T["value"]›_

**Parameters:**

| Name        | Type                                                                                                                                     |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `object`    | [Visitable](../modules/_visitors_visitable_.md#visitable) &#124; [Visitable](../modules/_visitors_visitable_.md#visitable)[] &#124; null |
| `collector` | T                                                                                                                                        |

**Returns:** _T_

---

### `Protected` visitAddition

▸ **visitAddition**(`thing`: [Addition](_nodes_addition_.addition.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitAddition](_visitors_tosql_.tosql.md#protected-visitaddition)_

_Defined in
[src/visitors/ToSQL.ts:465](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L465)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [Addition](_nodes_addition_.addition.md)                       |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitAnd

▸ **visitAnd**(`thing`: [And](_nodes_and_.and.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitAnd](_visitors_tosql_.tosql.md#protected-visitand)_

_Defined in
[src/visitors/ToSQL.ts:469](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L469)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [And](_nodes_and_.and.md)                                      |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitArray

▸ **visitArray**(`things`:
Array‹[Visitable](../modules/_visitors_visitable_.md#visitable)›, `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitArray](_visitors_tosql_.tosql.md#protected-visitarray)_

_Defined in
[src/visitors/ToSQL.ts:473](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L473)_

**Parameters:**

| Name     | Type                                                             |
| -------- | ---------------------------------------------------------------- |
| `things` | Array‹[Visitable](../modules/_visitors_visitable_.md#visitable)› |
| `col`    | [Collector](../interfaces/_collectors_collector_.collector.md)   |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitAs

▸ **visitAs**(`thing`: [As](_nodes_as_.as.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitAs](_visitors_tosql_.tosql.md#protected-visitas)_

_Defined in
[src/visitors/ToSQL.ts:477](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L477)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [As](_nodes_as_.as.md)                                         |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitAscending

▸ **visitAscending**(`thing`: [Ascending](_nodes_ascending_.ascending.md),
`col`: [Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitAscending](_visitors_tosql_.tosql.md#protected-visitascending)_

_Defined in
[src/visitors/ToSQL.ts:487](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L487)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [Ascending](_nodes_ascending_.ascending.md)                    |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitAssignment

▸ **visitAssignment**(`thing`: [Assignment](_nodes_assignment_.assignment.md),
`col`: [Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitAssignment](_visitors_tosql_.tosql.md#protected-visitassignment)_

_Defined in
[src/visitors/ToSQL.ts:491](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L491)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [Assignment](_nodes_assignment_.assignment.md)                 |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitAttributesAttribute

▸ **visitAttributesAttribute**(`thing`:
[Attribute](_attributes_attribute_.attribute.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitAttributesAttribute](_visitors_tosql_.tosql.md#protected-visitattributesattribute)_

_Defined in
[src/visitors/ToSQL.ts:509](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L509)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [Attribute](_attributes_attribute_.attribute.md)               |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitAttributesBoolean

▸ **visitAttributesBoolean**(`thing`: AttributeBoolean, `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitAttributesBoolean](_visitors_tosql_.tosql.md#protected-visitattributesboolean)_

_Defined in
[src/visitors/ToSQL.ts:533](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L533)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | AttributeBoolean                                               |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitAttributesDecimal

▸ **visitAttributesDecimal**(`thing`: AttributeDecimal, `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitAttributesDecimal](_visitors_tosql_.tosql.md#protected-visitattributesdecimal)_

_Defined in
[src/visitors/ToSQL.ts:540](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L540)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | AttributeDecimal                                               |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitAttributesFloat

▸ **visitAttributesFloat**(`thing`: AttributeFloat, `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitAttributesFloat](_visitors_tosql_.tosql.md#protected-visitattributesfloat)_

_Defined in
[src/visitors/ToSQL.ts:547](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L547)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | AttributeFloat                                                 |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitAttributesInteger

▸ **visitAttributesInteger**(`thing`: AttributeInteger, `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitAttributesInteger](_visitors_tosql_.tosql.md#protected-visitattributesinteger)_

_Defined in
[src/visitors/ToSQL.ts:554](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L554)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | AttributeInteger                                               |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitAttributesString

▸ **visitAttributesString**(`thing`: AttributeString, `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitAttributesString](_visitors_tosql_.tosql.md#protected-visitattributesstring)_

_Defined in
[src/visitors/ToSQL.ts:561](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L561)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | AttributeString                                                |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitAttributesTime

▸ **visitAttributesTime**(`thing`: AttributeTime, `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitAttributesTime](_visitors_tosql_.tosql.md#protected-visitattributestime)_

_Defined in
[src/visitors/ToSQL.ts:568](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L568)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | AttributeTime                                                  |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitAvg

▸ **visitAvg**(`thing`: [Avg](_nodes_avg_.avg.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitAvg](_visitors_tosql_.tosql.md#protected-visitavg)_

_Defined in
[src/visitors/ToSQL.ts:575](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L575)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [Avg](_nodes_avg_.avg.md)                                      |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitBetween

▸ **visitBetween**(`thing`: [Between](_nodes_between_.between.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitBetween](_visitors_tosql_.tosql.md#protected-visitbetween)_

_Defined in
[src/visitors/ToSQL.ts:579](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L579)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [Between](_nodes_between_.between.md)                          |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitBigInt

▸ **visitBigInt**(`thing`: bigint, `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitBigInt](_visitors_tosql_.tosql.md#protected-visitbigint)_

_Defined in
[src/visitors/ToSQL.ts:589](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L589)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | bigint                                                         |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitBin

▸ **visitBin**(`thing`: [Bin](_nodes_bin_.bin.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitBin](_visitors_tosql_.tosql.md#protected-visitbin)_

_Defined in
[src/visitors/ToSQL.ts:593](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L593)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [Bin](_nodes_bin_.bin.md)                                      |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitBindParam

▸ **visitBindParam**(`thing`: [BindParam](_nodes_bindparam_.bindparam.md),
`col`: [Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitBindParam](_visitors_tosql_.tosql.md#protected-visitbindparam)_

_Defined in
[src/visitors/ToSQL.ts:597](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L597)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [BindParam](_nodes_bindparam_.bindparam.md)                    |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitBoolean

▸ **visitBoolean**(`thing`: boolean, `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitBoolean](_visitors_tosql_.tosql.md#protected-visitboolean)_

_Defined in
[src/visitors/ToSQL.ts:601](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L601)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | boolean                                                        |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitCase

▸ **visitCase**(`thing`: [Case](_nodes_case_.case.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitCase](_visitors_tosql_.tosql.md#protected-visitcase)_

_Defined in
[src/visitors/ToSQL.ts:605](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L605)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [Case](_nodes_case_.case.md)                                   |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitCasted

▸ **visitCasted**(`thing`: [Casted](_nodes_casted_.casted.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitCasted](_visitors_tosql_.tosql.md#protected-visitcasted)_

_Defined in
[src/visitors/ToSQL.ts:630](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L630)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [Casted](_nodes_casted_.casted.md)                             |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitComment

▸ **visitComment**(`thing`: [Comment](_nodes_comment_.comment.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitComment](_visitors_tosql_.tosql.md#protected-visitcomment)_

_Defined in
[src/visitors/ToSQL.ts:634](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L634)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [Comment](_nodes_comment_.comment.md)                          |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitCount

▸ **visitCount**(`thing`: [Count](_nodes_count_.count.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitCount](_visitors_tosql_.tosql.md#protected-visitcount)_

_Defined in
[src/visitors/ToSQL.ts:645](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L645)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [Count](_nodes_count_.count.md)                                |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitCurrentRow

▸ **visitCurrentRow**(`_`: [CurrentRow](_nodes_currentrow_.currentrow.md),
`col`: [Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitCurrentRow](_visitors_tosql_.tosql.md#protected-visitcurrentrow)_

_Defined in
[src/visitors/ToSQL.ts:649](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L649)_

**Parameters:**

| Name  | Type                                                           |
| ----- | -------------------------------------------------------------- |
| `_`   | [CurrentRow](_nodes_currentrow_.currentrow.md)                 |
| `col` | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitDate

▸ **visitDate**(`thing`: Date, `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitDate](_visitors_tosql_.tosql.md#protected-visitdate)_

_Defined in
[src/visitors/ToSQL.ts:653](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L653)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | Date                                                           |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitDeleteStatement

▸ **visitDeleteStatement**(`thing`:
[DeleteStatement](_nodes_deletestatement_.deletestatement.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitDeleteStatement](_visitors_tosql_.tosql.md#protected-visitdeletestatement)_

_Defined in
[src/visitors/ToSQL.ts:657](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L657)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [DeleteStatement](_nodes_deletestatement_.deletestatement.md)  |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitDescending

▸ **visitDescending**(`thing`: [Descending](_nodes_descending_.descending.md),
`col`: [Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitDescending](_visitors_tosql_.tosql.md#protected-visitdescending)_

_Defined in
[src/visitors/ToSQL.ts:677](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L677)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [Descending](_nodes_descending_.descending.md)                 |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitDistinct

▸ **visitDistinct**(`thing`: [Distinct](_nodes_distinct_.distinct.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitDistinct](_visitors_tosql_.tosql.md#protected-visitdistinct)_

_Defined in
[src/visitors/ToSQL.ts:681](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L681)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [Distinct](_nodes_distinct_.distinct.md)                       |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitDistinctOn

▸ **visitDistinctOn**(`_1`: [DistinctOn](_nodes_distincton_.distincton.md),
`_2`: [Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitDistinctOn](_visitors_tosql_.tosql.md#protected-visitdistincton)_

_Defined in
[src/visitors/ToSQL.ts:685](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L685)_

**Parameters:**

| Name | Type                                                           |
| ---- | -------------------------------------------------------------- |
| `_1` | [DistinctOn](_nodes_distincton_.distincton.md)                 |
| `_2` | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitDivision

▸ **visitDivision**(`thing`: [Division](_nodes_division_.division.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitDivision](_visitors_tosql_.tosql.md#protected-visitdivision)_

_Defined in
[src/visitors/ToSQL.ts:691](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L691)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [Division](_nodes_division_.division.md)                       |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitDoesNotMatch

▸ **visitDoesNotMatch**(`thing`:
[DoesNotMatch](_nodes_doesnotmatch_.doesnotmatch.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitDoesNotMatch](_visitors_tosql_.tosql.md#protected-visitdoesnotmatch)_

_Defined in
[src/visitors/ToSQL.ts:695](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L695)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [DoesNotMatch](_nodes_doesnotmatch_.doesnotmatch.md)           |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitElse

▸ **visitElse**(`thing`: [Else](_nodes_else_.else.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitElse](_visitors_tosql_.tosql.md#protected-visitelse)_

_Defined in
[src/visitors/ToSQL.ts:710](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L710)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [Else](_nodes_else_.else.md)                                   |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitEquality

▸ **visitEquality**(`thing`: [Equality](_nodes_equality_.equality.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitEquality](_visitors_tosql_.tosql.md#protected-visitequality)_

_Defined in
[src/visitors/ToSQL.ts:719](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L719)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [Equality](_nodes_equality_.equality.md)                       |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitExcept

▸ **visitExcept**(`thing`: [Except](_nodes_except_.except.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitExcept](_visitors_tosql_.tosql.md#protected-visitexcept)_

_Defined in
[src/visitors/ToSQL.ts:745](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L745)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [Except](_nodes_except_.except.md)                             |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitExists

▸ **visitExists**(`thing`: [Exists](_nodes_exists_.exists.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitExists](_visitors_tosql_.tosql.md#protected-visitexists)_

_Defined in
[src/visitors/ToSQL.ts:755](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L755)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [Exists](_nodes_exists_.exists.md)                             |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitExtract

▸ **visitExtract**(`thing`: [Extract](_nodes_extract_.extract.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitExtract](_visitors_tosql_.tosql.md#protected-visitextract)_

_Defined in
[src/visitors/ToSQL.ts:770](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L770)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [Extract](_nodes_extract_.extract.md)                          |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitFalse

▸ **visitFalse**(`_`: [False](_nodes_false_.false.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitFalse](_visitors_tosql_.tosql.md#protected-visitfalse)_

_Defined in
[src/visitors/ToSQL.ts:782](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L782)_

**Parameters:**

| Name  | Type                                                           |
| ----- | -------------------------------------------------------------- |
| `_`   | [False](_nodes_false_.false.md)                                |
| `col` | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitFollowing

▸ **visitFollowing**(`thing`: [Following](_nodes_following_.following.md),
`col`: [Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitFollowing](_visitors_tosql_.tosql.md#protected-visitfollowing)_

_Defined in
[src/visitors/ToSQL.ts:786](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L786)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [Following](_nodes_following_.following.md)                    |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitFullOuterJoin

▸ **visitFullOuterJoin**(`thing`:
[FullOuterJoin](_nodes_fullouterjoin_.fullouterjoin.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitFullOuterJoin](_visitors_tosql_.tosql.md#protected-visitfullouterjoin)_

_Defined in
[src/visitors/ToSQL.ts:798](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L798)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [FullOuterJoin](_nodes_fullouterjoin_.fullouterjoin.md)        |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitGreaterThan

▸ **visitGreaterThan**(`thing`:
[GreaterThan](_nodes_greaterthan_.greaterthan.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitGreaterThan](_visitors_tosql_.tosql.md#protected-visitgreaterthan)_

_Defined in
[src/visitors/ToSQL.ts:812](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L812)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [GreaterThan](_nodes_greaterthan_.greaterthan.md)              |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitGreaterThanOrEqual

▸ **visitGreaterThanOrEqual**(`thing`:
[GreaterThanOrEqual](_nodes_greaterthanorequal_.greaterthanorequal.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitGreaterThanOrEqual](_visitors_tosql_.tosql.md#protected-visitgreaterthanorequal)_

_Defined in
[src/visitors/ToSQL.ts:822](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L822)_

**Parameters:**

| Name    | Type                                                                   |
| ------- | ---------------------------------------------------------------------- |
| `thing` | [GreaterThanOrEqual](_nodes_greaterthanorequal_.greaterthanorequal.md) |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md)         |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitGroup

▸ **visitGroup**(`thing`: [Group](_nodes_group_.group.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitGroup](_visitors_tosql_.tosql.md#protected-visitgroup)_

_Defined in
[src/visitors/ToSQL.ts:835](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L835)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [Group](_nodes_group_.group.md)                                |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitGrouping

▸ **visitGrouping**(`thing`: [Grouping](_nodes_grouping_.grouping.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitGrouping](_visitors_tosql_.tosql.md#protected-visitgrouping)_

_Defined in
[src/visitors/ToSQL.ts:839](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L839)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [Grouping](_nodes_grouping_.grouping.md)                       |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitIn

▸ **visitIn**(`thing`: [In](_nodes_in_.in.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitIn](_visitors_tosql_.tosql.md#protected-visitin)_

_Defined in
[src/visitors/ToSQL.ts:853](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L853)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [In](_nodes_in_.in.md)                                         |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitInfixOperation

▸ **visitInfixOperation**(`thing`:
[InfixOperation](_nodes_infixoperation_.infixoperation.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitInfixOperation](_visitors_tosql_.tosql.md#protected-visitinfixoperation)_

_Defined in
[src/visitors/ToSQL.ts:894](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L894)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [InfixOperation](_nodes_infixoperation_.infixoperation.md)     |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitInnerJoin

▸ **visitInnerJoin**(`thing`: [InnerJoin](_nodes_innerjoin_.innerjoin.md),
`col`: [Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitInnerJoin](_visitors_tosql_.tosql.md#protected-visitinnerjoin)_

_Defined in
[src/visitors/ToSQL.ts:907](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L907)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [InnerJoin](_nodes_innerjoin_.innerjoin.md)                    |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitInsertStatement

▸ **visitInsertStatement**(`thing`:
[InsertStatement](_nodes_insertstatement_.insertstatement.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitInsertStatement](_visitors_tosql_.tosql.md#protected-visitinsertstatement)_

_Defined in
[src/visitors/ToSQL.ts:921](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L921)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [InsertStatement](_nodes_insertstatement_.insertstatement.md)  |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitIntersect

▸ **visitIntersect**(`thing`: [Intersect](_nodes_intersect_.intersect.md),
`col`: [Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitIntersect](_visitors_tosql_.tosql.md#protected-visitintersect)_

_Defined in
[src/visitors/ToSQL.ts:957](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L957)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [Intersect](_nodes_intersect_.intersect.md)                    |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitIsDistinctFrom

▸ **visitIsDistinctFrom**(`thing`:
[IsDistinctFrom](_nodes_isdistinctfrom_.isdistinctfrom.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitIsDistinctFrom](_visitors_tosql_.tosql.md#protected-visitisdistinctfrom)_

_Defined in
[src/visitors/ToSQL.ts:967](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L967)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [IsDistinctFrom](_nodes_isdistinctfrom_.isdistinctfrom.md)     |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitIsNotDistinctFrom

▸ **visitIsNotDistinctFrom**(`thing`:
[IsNotDistinctFrom](_nodes_isnotdistinctfrom_.isnotdistinctfrom.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitIsNotDistinctFrom](_visitors_tosql_.tosql.md#protected-visitisnotdistinctfrom)_

_Defined in
[src/visitors/ToSQL.ts:990](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L990)_

**Parameters:**

| Name    | Type                                                                |
| ------- | ------------------------------------------------------------------- |
| `thing` | [IsNotDistinctFrom](_nodes_isnotdistinctfrom_.isnotdistinctfrom.md) |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md)      |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitJoinSource

▸ **visitJoinSource**(`thing`: [JoinSource](_nodes_joinsource_.joinsource.md),
`col`: [Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitJoinSource](_visitors_tosql_.tosql.md#protected-visitjoinsource)_

_Defined in
[src/visitors/ToSQL.ts:1013](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L1013)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [JoinSource](_nodes_joinsource_.joinsource.md)                 |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitLessThan

▸ **visitLessThan**(`thing`: [LessThan](_nodes_lessthan_.lessthan.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitLessThan](_visitors_tosql_.tosql.md#protected-visitlessthan)_

_Defined in
[src/visitors/ToSQL.ts:1031](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L1031)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [LessThan](_nodes_lessthan_.lessthan.md)                       |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitLessThanOrEqual

▸ **visitLessThanOrEqual**(`thing`:
[LessThanOrEqual](_nodes_lessthanorequal_.lessthanorequal.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitLessThanOrEqual](_visitors_tosql_.tosql.md#protected-visitlessthanorequal)_

_Defined in
[src/visitors/ToSQL.ts:1041](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L1041)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [LessThanOrEqual](_nodes_lessthanorequal_.lessthanorequal.md)  |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitLimit

▸ **visitLimit**(`thing`: [Limit](_nodes_limit_.limit.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitLimit](_visitors_tosql_.tosql.md#protected-visitlimit)_

_Defined in
[src/visitors/ToSQL.ts:1054](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L1054)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [Limit](_nodes_limit_.limit.md)                                |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitLock

▸ **visitLock**(`thing`: [Lock](_nodes_lock_.lock.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitLock](_visitors_tosql_.tosql.md#protected-visitlock)_

_Defined in
[src/visitors/ToSQL.ts:1063](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L1063)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [Lock](_nodes_lock_.lock.md)                                   |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitMatches

▸ **visitMatches**(`thing`: [Matches](_nodes_matches_.matches.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitMatches](_visitors_tosql_.tosql.md#protected-visitmatches)_

_Defined in
[src/visitors/ToSQL.ts:1067](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L1067)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [Matches](_nodes_matches_.matches.md)                          |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitMax

▸ **visitMax**(`thing`: [Max](_nodes_max_.max.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitMax](_visitors_tosql_.tosql.md#protected-visitmax)_

_Defined in
[src/visitors/ToSQL.ts:1082](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L1082)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [Max](_nodes_max_.max.md)                                      |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitMin

▸ **visitMin**(`thing`: [Min](_nodes_min_.min.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitMin](_visitors_tosql_.tosql.md#protected-visitmin)_

_Defined in
[src/visitors/ToSQL.ts:1086](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L1086)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [Min](_nodes_min_.min.md)                                      |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitMultiplication

▸ **visitMultiplication**(`thing`:
[Multiplication](_nodes_multiplication_.multiplication.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitMultiplication](_visitors_tosql_.tosql.md#protected-visitmultiplication)_

_Defined in
[src/visitors/ToSQL.ts:1090](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L1090)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [Multiplication](_nodes_multiplication_.multiplication.md)     |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitNamedSQLFunction

▸ **visitNamedSQLFunction**(`thing`:
[NamedSQLFunction](_nodes_namedsqlfunction_.namedsqlfunction.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitNamedSQLFunction](_visitors_tosql_.tosql.md#protected-visitnamedsqlfunction)_

_Defined in
[src/visitors/ToSQL.ts:1097](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L1097)_

**Parameters:**

| Name    | Type                                                             |
| ------- | ---------------------------------------------------------------- |
| `thing` | [NamedSQLFunction](_nodes_namedsqlfunction_.namedsqlfunction.md) |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md)   |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitNamedWindow

▸ **visitNamedWindow**(`thing`:
[NamedWindow](_nodes_namedwindow_.namedwindow.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitNamedWindow](_visitors_tosql_.tosql.md#protected-visitnamedwindow)_

_Defined in
[src/visitors/ToSQL.ts:1118](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L1118)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [NamedWindow](_nodes_namedwindow_.namedwindow.md)              |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitNot

▸ **visitNot**(`thing`: [Not](_nodes_not_.not.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitNot](_visitors_tosql_.tosql.md#protected-visitnot)_

_Defined in
[src/visitors/ToSQL.ts:1128](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L1128)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [Not](_nodes_not_.not.md)                                      |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitNotEqual

▸ **visitNotEqual**(`thing`: [NotEqual](_nodes_notequal_.notequal.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitNotEqual](_visitors_tosql_.tosql.md#protected-visitnotequal)_

_Defined in
[src/visitors/ToSQL.ts:1138](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L1138)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [NotEqual](_nodes_notequal_.notequal.md)                       |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitNotIn

▸ **visitNotIn**(`thing`: [NotIn](_nodes_notin_.notin.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitNotIn](_visitors_tosql_.tosql.md#protected-visitnotin)_

_Defined in
[src/visitors/ToSQL.ts:1164](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L1164)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [NotIn](_nodes_notin_.notin.md)                                |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitNotRegexp

▸ **visitNotRegexp**(`_1`: [NotRegexp](_nodes_notregexp_.notregexp.md), `_2`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitNotRegexp](_visitors_tosql_.tosql.md#protected-visitnotregexp)_

_Defined in
[src/visitors/ToSQL.ts:1205](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L1205)_

**Parameters:**

| Name | Type                                                           |
| ---- | -------------------------------------------------------------- |
| `_1` | [NotRegexp](_nodes_notregexp_.notregexp.md)                    |
| `_2` | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitNull

▸ **visitNull**(`thing`: null, `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitNull](_visitors_tosql_.tosql.md#protected-visitnull)_

_Defined in
[src/visitors/ToSQL.ts:1213](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L1213)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | null                                                           |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitNumber

▸ **visitNumber**(`thing`: number, `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitNumber](_visitors_tosql_.tosql.md#protected-visitnumber)_

_Defined in
[src/visitors/ToSQL.ts:1209](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L1209)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | number                                                         |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitOffset

▸ **visitOffset**(`thing`: [Offset](_nodes_offset_.offset.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitOffset](_visitors_tosql_.tosql.md#protected-visitoffset)_

_Defined in
[src/visitors/ToSQL.ts:1217](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L1217)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [Offset](_nodes_offset_.offset.md)                             |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitOn

▸ **visitOn**(`thing`: [On](_nodes_on_.on.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitOn](_visitors_tosql_.tosql.md#protected-visiton)_

_Defined in
[src/visitors/ToSQL.ts:1226](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L1226)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [On](_nodes_on_.on.md)                                         |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitOptimizerHints

▸ **visitOptimizerHints**(`thing`:
[OptimizerHints](_nodes_optimizerhints_.optimizerhints.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitOptimizerHints](_visitors_tosql_.tosql.md#protected-visitoptimizerhints)_

_Defined in
[src/visitors/ToSQL.ts:1235](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L1235)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [OptimizerHints](_nodes_optimizerhints_.optimizerhints.md)     |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitOr

▸ **visitOr**(`thing`: [Or](_nodes_or_.or.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitOr](_visitors_tosql_.tosql.md#protected-visitor)_

_Defined in
[src/visitors/ToSQL.ts:1249](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L1249)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [Or](_nodes_or_.or.md)                                         |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitOuterJoin

▸ **visitOuterJoin**(`thing`: [OuterJoin](_nodes_outerjoin_.outerjoin.md),
`col`: [Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitOuterJoin](_visitors_tosql_.tosql.md#protected-visitouterjoin)_

_Defined in
[src/visitors/ToSQL.ts:1259](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L1259)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [OuterJoin](_nodes_outerjoin_.outerjoin.md)                    |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitOver

▸ **visitOver**(`thing`: [Over](_nodes_over_.over.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitOver](_visitors_tosql_.tosql.md#protected-visitover)_

_Defined in
[src/visitors/ToSQL.ts:1270](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L1270)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [Over](_nodes_over_.over.md)                                   |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitPreceding

▸ **visitPreceding**(`thing`: [Preceding](_nodes_preceding_.preceding.md),
`col`: [Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitPreceding](_visitors_tosql_.tosql.md#protected-visitpreceding)_

_Defined in
[src/visitors/ToSQL.ts:1288](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L1288)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [Preceding](_nodes_preceding_.preceding.md)                    |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitQuoted

▸ **visitQuoted**(`thing`: [Quoted](_nodes_quoted_.quoted.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitQuoted](_visitors_tosql_.tosql.md#protected-visitquoted)_

_Defined in
[src/visitors/ToSQL.ts:1300](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L1300)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [Quoted](_nodes_quoted_.quoted.md)                             |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitRange

▸ **visitRange**(`thing`: [Range](_nodes_range_.range.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitRange](_visitors_tosql_.tosql.md#protected-visitrange)_

_Defined in
[src/visitors/ToSQL.ts:1304](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L1304)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [Range](_nodes_range_.range.md)                                |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitRegexp

▸ **visitRegexp**(`_1`: [Regexp](_nodes_regexp_.regexp.md), `_2`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitRegexp](_visitors_tosql_.tosql.md#protected-visitregexp)_

_Defined in
[src/visitors/ToSQL.ts:1319](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L1319)_

**Parameters:**

| Name | Type                                                           |
| ---- | -------------------------------------------------------------- |
| `_1` | [Regexp](_nodes_regexp_.regexp.md)                             |
| `_2` | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitRightOuterJoin

▸ **visitRightOuterJoin**(`thing`:
[RightOuterJoin](_nodes_rightouterjoin_.rightouterjoin.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitRightOuterJoin](_visitors_tosql_.tosql.md#protected-visitrightouterjoin)_

_Defined in
[src/visitors/ToSQL.ts:1323](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L1323)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [RightOuterJoin](_nodes_rightouterjoin_.rightouterjoin.md)     |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitRows

▸ **visitRows**(`thing`: [Rows](_nodes_rows_.rows.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitRows](_visitors_tosql_.tosql.md#protected-visitrows)_

_Defined in
[src/visitors/ToSQL.ts:1337](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L1337)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [Rows](_nodes_rows_.rows.md)                                   |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitSQLLiteral

▸ **visitSQLLiteral**(`thing`: [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md),
`col`: [Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitSQLLiteral](_visitors_tosql_.tosql.md#protected-visitsqlliteral)_

_Defined in
[src/visitors/ToSQL.ts:1443](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L1443)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md)                 |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitSelectCore

▸ **visitSelectCore**(`thing`: [SelectCore](_nodes_selectcore_.selectcore.md),
`col`: [Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Overrides
[ToSQL](_visitors_tosql_.tosql.md).[visitSelectCore](_visitors_tosql_.tosql.md#protected-visitselectcore)_

_Defined in
[src/visitors/WhereSQL.ts:30](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/WhereSQL.ts#L30)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [SelectCore](_nodes_selectcore_.selectcore.md)                 |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitSelectManager

▸ **visitSelectManager**(`thing`:
[SelectManager](_managers_selectmanager_.selectmanager.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitSelectManager](_visitors_tosql_.tosql.md#protected-visitselectmanager)_

_Defined in
[src/visitors/ToSQL.ts:1395](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L1395)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [SelectManager](_managers_selectmanager_.selectmanager.md)     |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitSelectStatement

▸ **visitSelectStatement**(`thing`:
[SelectStatement](_nodes_selectstatement_.selectstatement.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitSelectStatement](_visitors_tosql_.tosql.md#protected-visitselectstatement)_

_Defined in
[src/visitors/ToSQL.ts:1408](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L1408)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [SelectStatement](_nodes_selectstatement_.selectstatement.md)  |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitString

▸ **visitString**(`thing`: string, `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitString](_visitors_tosql_.tosql.md#protected-visitstring)_

_Defined in
[src/visitors/ToSQL.ts:1447](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L1447)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | string                                                         |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitStringJoin

▸ **visitStringJoin**(`thing`: [StringJoin](_nodes_stringjoin_.stringjoin.md),
`col`: [Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitStringJoin](_visitors_tosql_.tosql.md#protected-visitstringjoin)_

_Defined in
[src/visitors/ToSQL.ts:1451](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L1451)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [StringJoin](_nodes_stringjoin_.stringjoin.md)                 |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitSubtraction

▸ **visitSubtraction**(`thing`:
[Subtraction](_nodes_subtraction_.subtraction.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitSubtraction](_visitors_tosql_.tosql.md#protected-visitsubtraction)_

_Defined in
[src/visitors/ToSQL.ts:1455](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L1455)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [Subtraction](_nodes_subtraction_.subtraction.md)              |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitSum

▸ **visitSum**(`thing`: [Sum](_nodes_sum_.sum.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitSum](_visitors_tosql_.tosql.md#protected-visitsum)_

_Defined in
[src/visitors/ToSQL.ts:1459](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L1459)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [Sum](_nodes_sum_.sum.md)                                      |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitSymbol

▸ **visitSymbol**(`thing`: symbol, `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitSymbol](_visitors_tosql_.tosql.md#protected-visitsymbol)_

_Defined in
[src/visitors/ToSQL.ts:1463](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L1463)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | symbol                                                         |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitTable

▸ **visitTable**(`thing`: [Table](_table_.table.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitTable](_visitors_tosql_.tosql.md#protected-visittable)_

_Defined in
[src/visitors/ToSQL.ts:1467](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L1467)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [Table](_table_.table.md)                                      |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitTableAlias

▸ **visitTableAlias**(`thing`: [TableAlias](_nodes_tablealias_.tablealias.md),
`col`: [Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitTableAlias](_visitors_tosql_.tosql.md#protected-visittablealias)_

_Defined in
[src/visitors/ToSQL.ts:1479](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L1479)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [TableAlias](_nodes_tablealias_.tablealias.md)                 |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitTrue

▸ **visitTrue**(`_`: [True](_nodes_true_.true.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitTrue](_visitors_tosql_.tosql.md#protected-visittrue)_

_Defined in
[src/visitors/ToSQL.ts:1489](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L1489)_

**Parameters:**

| Name  | Type                                                           |
| ----- | -------------------------------------------------------------- |
| `_`   | [True](_nodes_true_.true.md)                                   |
| `col` | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitUnaryOperation

▸ **visitUnaryOperation**(`thing`:
[UnaryOperation](_nodes_unaryoperation_.unaryoperation.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitUnaryOperation](_visitors_tosql_.tosql.md#protected-visitunaryoperation)_

_Defined in
[src/visitors/ToSQL.ts:1493](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L1493)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [UnaryOperation](_nodes_unaryoperation_.unaryoperation.md)     |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitUnion

▸ **visitUnion**(`thing`: [Union](_nodes_union_.union.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitUnion](_visitors_tosql_.tosql.md#protected-visitunion)_

_Defined in
[src/visitors/ToSQL.ts:1505](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L1505)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [Union](_nodes_union_.union.md)                                |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitUnionAll

▸ **visitUnionAll**(`thing`: [UnionAll](_nodes_unionall_.unionall.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitUnionAll](_visitors_tosql_.tosql.md#protected-visitunionall)_

_Defined in
[src/visitors/ToSQL.ts:1513](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L1513)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [UnionAll](_nodes_unionall_.unionall.md)                       |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitUnqualifiedColumn

▸ **visitUnqualifiedColumn**(`thing`:
[UnqualifiedColumn](_nodes_unqualifiedcolumn_.unqualifiedcolumn.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitUnqualifiedColumn](_visitors_tosql_.tosql.md#protected-visitunqualifiedcolumn)_

_Defined in
[src/visitors/ToSQL.ts:1521](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L1521)_

**Parameters:**

| Name    | Type                                                                |
| ------- | ------------------------------------------------------------------- |
| `thing` | [UnqualifiedColumn](_nodes_unqualifiedcolumn_.unqualifiedcolumn.md) |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md)      |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitUpdateStatement

▸ **visitUpdateStatement**(`thing`:
[UpdateStatement](_nodes_updatestatement_.updatestatement.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitUpdateStatement](_visitors_tosql_.tosql.md#protected-visitupdatestatement)_

_Defined in
[src/visitors/ToSQL.ts:1528](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L1528)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [UpdateStatement](_nodes_updatestatement_.updatestatement.md)  |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitValuesList

▸ **visitValuesList**(`thing`: [ValuesList](_nodes_valueslist_.valueslist.md),
`col`: [Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitValuesList](_visitors_tosql_.tosql.md#protected-visitvalueslist)_

_Defined in
[src/visitors/ToSQL.ts:1549](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L1549)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [ValuesList](_nodes_valueslist_.valueslist.md)                 |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitWhen

▸ **visitWhen**(`thing`: [When](_nodes_when_.when.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitWhen](_visitors_tosql_.tosql.md#protected-visitwhen)_

_Defined in
[src/visitors/ToSQL.ts:1578](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L1578)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [When](_nodes_when_.when.md)                                   |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitWindow

▸ **visitWindow**(`thing`: [Window](_nodes_window_.window.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitWindow](_visitors_tosql_.tosql.md#protected-visitwindow)_

_Defined in
[src/visitors/ToSQL.ts:1589](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L1589)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [Window](_nodes_window_.window.md)                             |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitWith

▸ **visitWith**(`thing`: [With](_nodes_with_.with.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitWith](_visitors_tosql_.tosql.md#protected-visitwith)_

_Defined in
[src/visitors/ToSQL.ts:1620](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L1620)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [With](_nodes_with_.with.md)                                   |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_

---

### `Protected` visitWithRecursive

▸ **visitWithRecursive**(`thing`:
[WithRecursive](_nodes_withrecursive_.withrecursive.md), `col`:
[Collector](../interfaces/_collectors_collector_.collector.md)):
_[Collector](../interfaces/_collectors_collector_.collector.md)_

_Inherited from
[ToSQL](_visitors_tosql_.tosql.md).[visitWithRecursive](_visitors_tosql_.tosql.md#protected-visitwithrecursive)_

_Defined in
[src/visitors/ToSQL.ts:1629](https://github.com/sequeljs/ast/blob/aa0ef0f/src/visitors/ToSQL.ts#L1629)_

**Parameters:**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| `thing` | [WithRecursive](_nodes_withrecursive_.withrecursive.md)        |
| `col`   | [Collector](../interfaces/_collectors_collector_.collector.md) |

**Returns:** _[Collector](../interfaces/_collectors_collector_.collector.md)_
