---
id: '_nodes_subtraction_.subtraction'
title: 'Subtraction'
sidebar_label: 'Subtraction'
---

[@sequeljs/ast](../index.md) › [Globals](../globals.md) ›
["nodes/Subtraction"](../modules/_nodes_subtraction_.md) ›
[Subtraction](_nodes_subtraction_.subtraction.md)

## Type parameters

▪ **L**

▪ **R**

## Hierarchy

↳ [InfixOperation](_nodes_infixoperation_.infixoperation.md)

↳ **Subtraction**

## Index

### Constructors

- [constructor](_nodes_subtraction_.subtraction.md#constructor)

### Properties

- [left](_nodes_subtraction_.subtraction.md#left)
- [operator](_nodes_subtraction_.subtraction.md#readonly-operator)
- [right](_nodes_subtraction_.subtraction.md#right)

### Methods

- [add](_nodes_subtraction_.subtraction.md#add)
- [as](_nodes_subtraction_.subtraction.md#as)
- [asc](_nodes_subtraction_.subtraction.md#asc)
- [average](_nodes_subtraction_.subtraction.md#average)
- [between](_nodes_subtraction_.subtraction.md#between)
- [bitwiseAnd](_nodes_subtraction_.subtraction.md#bitwiseand)
- [bitwiseNot](_nodes_subtraction_.subtraction.md#bitwisenot)
- [bitwiseOr](_nodes_subtraction_.subtraction.md#bitwiseor)
- [bitwiseShiftLeft](_nodes_subtraction_.subtraction.md#bitwiseshiftleft)
- [bitwiseShiftRight](_nodes_subtraction_.subtraction.md#bitwiseshiftright)
- [bitwiseXor](_nodes_subtraction_.subtraction.md#bitwisexor)
- [concat](_nodes_subtraction_.subtraction.md#concat)
- [count](_nodes_subtraction_.subtraction.md#count)
- [desc](_nodes_subtraction_.subtraction.md#desc)
- [divide](_nodes_subtraction_.subtraction.md#divide)
- [doesNotMatch](_nodes_subtraction_.subtraction.md#doesnotmatch)
- [doesNotMatchAll](_nodes_subtraction_.subtraction.md#doesnotmatchall)
- [doesNotMatchAny](_nodes_subtraction_.subtraction.md#doesnotmatchany)
- [doesNotMatchRegexp](_nodes_subtraction_.subtraction.md#doesnotmatchregexp)
- [eq](_nodes_subtraction_.subtraction.md#eq)
- [eqAll](_nodes_subtraction_.subtraction.md#eqall)
- [eqAny](_nodes_subtraction_.subtraction.md#eqany)
- [extract](_nodes_subtraction_.subtraction.md#extract)
- [groupingAll](_nodes_subtraction_.subtraction.md#protected-groupingall)
- [groupingAny](_nodes_subtraction_.subtraction.md#protected-groupingany)
- [gt](_nodes_subtraction_.subtraction.md#gt)
- [gtAll](_nodes_subtraction_.subtraction.md#gtall)
- [gtAny](_nodes_subtraction_.subtraction.md#gtany)
- [gteq](_nodes_subtraction_.subtraction.md#gteq)
- [gteqAll](_nodes_subtraction_.subtraction.md#gteqall)
- [gteqAny](_nodes_subtraction_.subtraction.md#gteqany)
- [inAll](_nodes_subtraction_.subtraction.md#inall)
- [inAny](_nodes_subtraction_.subtraction.md#inany)
- [inVal](_nodes_subtraction_.subtraction.md#inval)
- [isDistinctFrom](_nodes_subtraction_.subtraction.md#isdistinctfrom)
- [isInfinity](_nodes_subtraction_.subtraction.md#protected-isinfinity)
- [isNotDistinctFrom](_nodes_subtraction_.subtraction.md#isnotdistinctfrom)
- [isOpenEnded](_nodes_subtraction_.subtraction.md#protected-isopenended)
- [isUnboundable](_nodes_subtraction_.subtraction.md#protected-isunboundable)
- [lt](_nodes_subtraction_.subtraction.md#lt)
- [ltAll](_nodes_subtraction_.subtraction.md#ltall)
- [ltAny](_nodes_subtraction_.subtraction.md#ltany)
- [lteq](_nodes_subtraction_.subtraction.md#lteq)
- [lteqAll](_nodes_subtraction_.subtraction.md#lteqall)
- [lteqAny](_nodes_subtraction_.subtraction.md#lteqany)
- [matches](_nodes_subtraction_.subtraction.md#matches)
- [matchesAll](_nodes_subtraction_.subtraction.md#matchesall)
- [matchesAny](_nodes_subtraction_.subtraction.md#matchesany)
- [matchesRegexp](_nodes_subtraction_.subtraction.md#matchesregexp)
- [maximum](_nodes_subtraction_.subtraction.md#maximum)
- [minimum](_nodes_subtraction_.subtraction.md#minimum)
- [multiply](_nodes_subtraction_.subtraction.md#multiply)
- [notBetween](_nodes_subtraction_.subtraction.md#notbetween)
- [notEq](_nodes_subtraction_.subtraction.md#noteq)
- [notEqAll](_nodes_subtraction_.subtraction.md#noteqall)
- [notEqAny](_nodes_subtraction_.subtraction.md#noteqany)
- [notInAll](_nodes_subtraction_.subtraction.md#notinall)
- [notInAny](_nodes_subtraction_.subtraction.md#notinany)
- [notInVal](_nodes_subtraction_.subtraction.md#notinval)
- [quotedArray](_nodes_subtraction_.subtraction.md#quotedarray)
- [quotedNode](_nodes_subtraction_.subtraction.md#quotednode)
- [subtract](_nodes_subtraction_.subtraction.md#subtract)
- [sum](_nodes_subtraction_.subtraction.md#sum)
- [toSQL](_nodes_subtraction_.subtraction.md#tosql)
- [when](_nodes_subtraction_.subtraction.md#when)

## Constructors

### constructor

\+ **new Subtraction**(`left`: any, `right`: any):
_[Subtraction](_nodes_subtraction_.subtraction.md)_

_Overrides
[InfixOperation](_nodes_infixoperation_.infixoperation.md).[constructor](_nodes_infixoperation_.infixoperation.md#constructor)_

_Defined in
[src/nodes/Subtraction.ts:3](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Subtraction.ts#L3)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `left`  | any  |
| `right` | any  |

**Returns:** _[Subtraction](_nodes_subtraction_.subtraction.md)_

## Properties

### left

• **left**: _L_

_Inherited from [As](_nodes_as_.as.md).[left](_nodes_as_.as.md#left)_

_Defined in
[src/nodes/Binary.ts:6](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Binary.ts#L6)_

---

### `Readonly` operator

• **operator**: _string_

_Inherited from
[Concat](_nodes_concat_.concat.md).[operator](_nodes_concat_.concat.md#readonly-operator)_

_Defined in
[src/nodes/InfixOperation.ts:12](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/InfixOperation.ts#L12)_

---

### right

• **right**: _R_

_Inherited from [As](_nodes_as_.as.md).[right](_nodes_as_.as.md#right)_

_Defined in
[src/nodes/Binary.ts:8](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Binary.ts#L8)_

## Methods

### add

▸ **add**(`other`: any): _[Grouping](_nodes_grouping_.grouping.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[add](_nodes_sqlfunction_.sqlfunction.md#add)_

_Defined in
[src/mixins/Math.ts:14](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Math.ts#L14)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `other` | any  |

**Returns:** _[Grouping](_nodes_grouping_.grouping.md)_

---

### as

▸ **as**(`other`: string | [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md)):
_[As](_nodes_as_.as.md)_

_Inherited from [As](_nodes_as_.as.md).[as](_nodes_as_.as.md#as)_

_Defined in
[src/mixins/AliasPredication.ts:5](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/AliasPredication.ts#L5)_

**Parameters:**

| Name    | Type                                                         |
| ------- | ------------------------------------------------------------ |
| `other` | string &#124; [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) |

**Returns:** _[As](_nodes_as_.as.md)_

---

### asc

▸ **asc**(`this`: [Visitable](../modules/_visitors_visitable_.md#visitable)):
_[Ascending](_nodes_ascending_.ascending.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[asc](_nodes_sqlfunction_.sqlfunction.md#asc)_

_Defined in
[src/mixins/OrderPredications.ts:7](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/OrderPredications.ts#L7)_

**Parameters:**

| Name   | Type                                                      |
| ------ | --------------------------------------------------------- |
| `this` | [Visitable](../modules/_visitors_visitable_.md#visitable) |

**Returns:** _[Ascending](_nodes_ascending_.ascending.md)_

---

### average

▸ **average**(): _[Avg](_nodes_avg_.avg.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[average](_nodes_sqlfunction_.sqlfunction.md#average)_

_Defined in
[src/mixins/Expressions.ts:9](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Expressions.ts#L9)_

**Returns:** _[Avg](_nodes_avg_.avg.md)_

---

### between

▸ **between**(`begin`: number | [BindParam](_nodes_bindparam_.bindparam.md) |
[Quoted](_nodes_quoted_.quoted.md), `end`: number |
[BindParam](_nodes_bindparam_.bindparam.md) |
[Quoted](_nodes_quoted_.quoted.md), `inclusive`: boolean):
_[And](_nodes_and_.and.md) | [Between](_nodes_between_.between.md) |
[GreaterThanOrEqual](_nodes_greaterthanorequal_.greaterthanorequal.md) |
[LessThan](_nodes_lessthan_.lessthan.md) |
[LessThanOrEqual](_nodes_lessthanorequal_.lessthanorequal.md) |
[NotIn](_nodes_notin_.notin.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[between](_nodes_sqlfunction_.sqlfunction.md#between)_

_Defined in
[src/mixins/Predications.ts:257](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Predications.ts#L257)_

**Parameters:**

| Name        | Type                                                                                                | Default |
| ----------- | --------------------------------------------------------------------------------------------------- | ------- |
| `begin`     | number &#124; [BindParam](_nodes_bindparam_.bindparam.md) &#124; [Quoted](_nodes_quoted_.quoted.md) | -       |
| `end`       | number &#124; [BindParam](_nodes_bindparam_.bindparam.md) &#124; [Quoted](_nodes_quoted_.quoted.md) | -       |
| `inclusive` | boolean                                                                                             | true    |

**Returns:** _[And](_nodes_and_.and.md) | [Between](_nodes_between_.between.md)
| [GreaterThanOrEqual](_nodes_greaterthanorequal_.greaterthanorequal.md) |
[LessThan](_nodes_lessthan_.lessthan.md) |
[LessThanOrEqual](_nodes_lessthanorequal_.lessthanorequal.md) |
[NotIn](_nodes_notin_.notin.md)_

---

### bitwiseAnd

▸ **bitwiseAnd**(`other`: any): _[Grouping](_nodes_grouping_.grouping.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[bitwiseAnd](_nodes_sqlfunction_.sqlfunction.md#bitwiseand)_

_Defined in
[src/mixins/Math.ts:18](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Math.ts#L18)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `other` | any  |

**Returns:** _[Grouping](_nodes_grouping_.grouping.md)_

---

### bitwiseNot

▸ **bitwiseNot**(): _[BitwiseNot](_nodes_bitwisenot_.bitwisenot.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[bitwiseNot](_nodes_sqlfunction_.sqlfunction.md#bitwisenot)_

_Defined in
[src/mixins/Math.ts:22](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Math.ts#L22)_

**Returns:** _[BitwiseNot](_nodes_bitwisenot_.bitwisenot.md)_

---

### bitwiseOr

▸ **bitwiseOr**(`other`: any): _[Grouping](_nodes_grouping_.grouping.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[bitwiseOr](_nodes_sqlfunction_.sqlfunction.md#bitwiseor)_

_Defined in
[src/mixins/Math.ts:26](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Math.ts#L26)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `other` | any  |

**Returns:** _[Grouping](_nodes_grouping_.grouping.md)_

---

### bitwiseShiftLeft

▸ **bitwiseShiftLeft**(`other`: any): _[Grouping](_nodes_grouping_.grouping.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[bitwiseShiftLeft](_nodes_sqlfunction_.sqlfunction.md#bitwiseshiftleft)_

_Defined in
[src/mixins/Math.ts:30](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Math.ts#L30)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `other` | any  |

**Returns:** _[Grouping](_nodes_grouping_.grouping.md)_

---

### bitwiseShiftRight

▸ **bitwiseShiftRight**(`other`: any):
_[Grouping](_nodes_grouping_.grouping.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[bitwiseShiftRight](_nodes_sqlfunction_.sqlfunction.md#bitwiseshiftright)_

_Defined in
[src/mixins/Math.ts:34](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Math.ts#L34)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `other` | any  |

**Returns:** _[Grouping](_nodes_grouping_.grouping.md)_

---

### bitwiseXor

▸ **bitwiseXor**(`other`: any): _[Grouping](_nodes_grouping_.grouping.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[bitwiseXor](_nodes_sqlfunction_.sqlfunction.md#bitwisexor)_

_Defined in
[src/mixins/Math.ts:38](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Math.ts#L38)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `other` | any  |

**Returns:** _[Grouping](_nodes_grouping_.grouping.md)_

---

### concat

▸ **concat**(`other`: any): _[Concat](_nodes_concat_.concat.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[concat](_nodes_sqlfunction_.sqlfunction.md#concat)_

_Defined in
[src/mixins/ConcatPredication.ts:4](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/ConcatPredication.ts#L4)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `other` | any  |

**Returns:** _[Concat](_nodes_concat_.concat.md)_

---

### count

▸ **count**(`distinct`: boolean): _[Count](_nodes_count_.count.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[count](_nodes_sqlfunction_.sqlfunction.md#count)_

_Defined in
[src/mixins/Expressions.ts:13](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Expressions.ts#L13)_

**Parameters:**

| Name       | Type    | Default |
| ---------- | ------- | ------- |
| `distinct` | boolean | false   |

**Returns:** _[Count](_nodes_count_.count.md)_

---

### desc

▸ **desc**(`this`: [Visitable](../modules/_visitors_visitable_.md#visitable)):
_[Descending](_nodes_descending_.descending.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[desc](_nodes_sqlfunction_.sqlfunction.md#desc)_

_Defined in
[src/mixins/OrderPredications.ts:11](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/OrderPredications.ts#L11)_

**Parameters:**

| Name   | Type                                                      |
| ------ | --------------------------------------------------------- |
| `this` | [Visitable](../modules/_visitors_visitable_.md#visitable) |

**Returns:** _[Descending](_nodes_descending_.descending.md)_

---

### divide

▸ **divide**(`other`: any): _[Division](_nodes_division_.division.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[divide](_nodes_sqlfunction_.sqlfunction.md#divide)_

_Defined in
[src/mixins/Math.ts:42](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Math.ts#L42)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `other` | any  |

**Returns:** _[Division](_nodes_division_.division.md)_

---

### doesNotMatch

▸ **doesNotMatch**(`other`: any, `escape`: any, `caseSensitive`: boolean):
_[DoesNotMatch](_nodes_doesnotmatch_.doesnotmatch.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[doesNotMatch](_nodes_sqlfunction_.sqlfunction.md#doesnotmatch)_

_Defined in
[src/mixins/Predications.ts:57](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Predications.ts#L57)_

**Parameters:**

| Name            | Type    | Default |
| --------------- | ------- | ------- |
| `other`         | any     | -       |
| `escape`        | any     | null    |
| `caseSensitive` | boolean | false   |

**Returns:** _[DoesNotMatch](_nodes_doesnotmatch_.doesnotmatch.md)_

---

### doesNotMatchAll

▸ **doesNotMatchAll**(`others`: any, `escape`: any, `caseSensitive`: boolean):
_[Grouping](_nodes_grouping_.grouping.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[doesNotMatchAll](_nodes_sqlfunction_.sqlfunction.md#doesnotmatchall)_

_Defined in
[src/mixins/Predications.ts:65](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Predications.ts#L65)_

**Parameters:**

| Name            | Type    | Default |
| --------------- | ------- | ------- |
| `others`        | any     | -       |
| `escape`        | any     | null    |
| `caseSensitive` | boolean | false   |

**Returns:** _[Grouping](_nodes_grouping_.grouping.md)_

---

### doesNotMatchAny

▸ **doesNotMatchAny**(`others`: any, `escape`: any, `caseSensitive`: boolean):
_[Grouping](_nodes_grouping_.grouping.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[doesNotMatchAny](_nodes_sqlfunction_.sqlfunction.md#doesnotmatchany)_

_Defined in
[src/mixins/Predications.ts:78](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Predications.ts#L78)_

**Parameters:**

| Name            | Type    | Default |
| --------------- | ------- | ------- |
| `others`        | any     | -       |
| `escape`        | any     | null    |
| `caseSensitive` | boolean | false   |

**Returns:** _[Grouping](_nodes_grouping_.grouping.md)_

---

### doesNotMatchRegexp

▸ **doesNotMatchRegexp**(`other`: any, `caseSensitive`: boolean):
_[NotRegexp](_nodes_notregexp_.notregexp.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[doesNotMatchRegexp](_nodes_sqlfunction_.sqlfunction.md#doesnotmatchregexp)_

_Defined in
[src/mixins/Predications.ts:91](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Predications.ts#L91)_

**Parameters:**

| Name            | Type    | Default |
| --------------- | ------- | ------- |
| `other`         | any     | -       |
| `caseSensitive` | boolean | true    |

**Returns:** _[NotRegexp](_nodes_notregexp_.notregexp.md)_

---

### eq

▸ **eq**(`other`: any): _[Equality](_nodes_equality_.equality.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[eq](_nodes_sqlfunction_.sqlfunction.md#eq)_

_Defined in
[src/mixins/Predications.ts:95](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Predications.ts#L95)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `other` | any  |

**Returns:** _[Equality](_nodes_equality_.equality.md)_

---

### eqAll

▸ **eqAll**(`others`: any[]): _[Grouping](_nodes_grouping_.grouping.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[eqAll](_nodes_sqlfunction_.sqlfunction.md#eqall)_

_Defined in
[src/mixins/Predications.ts:99](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Predications.ts#L99)_

**Parameters:**

| Name     | Type  |
| -------- | ----- |
| `others` | any[] |

**Returns:** _[Grouping](_nodes_grouping_.grouping.md)_

---

### eqAny

▸ **eqAny**(`others`: any[]): _[Grouping](_nodes_grouping_.grouping.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[eqAny](_nodes_sqlfunction_.sqlfunction.md#eqany)_

_Defined in
[src/mixins/Predications.ts:103](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Predications.ts#L103)_

**Parameters:**

| Name     | Type  |
| -------- | ----- |
| `others` | any[] |

**Returns:** _[Grouping](_nodes_grouping_.grouping.md)_

---

### extract

▸ **extract**(`field`: any): _[Extract](_nodes_extract_.extract.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[extract](_nodes_sqlfunction_.sqlfunction.md#extract)_

_Defined in
[src/mixins/Expressions.ts:17](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Expressions.ts#L17)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `field` | any  |

**Returns:** _[Extract](_nodes_extract_.extract.md)_

---

### `Protected` groupingAll

▸ **groupingAll**(`method`: function, `others`: any[], ...`extras`: any[]):
_[Grouping](_nodes_grouping_.grouping.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[groupingAll](_nodes_sqlfunction_.sqlfunction.md#protected-groupingall)_

_Defined in
[src/mixins/Predications.ts:25](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Predications.ts#L25)_

**Parameters:**

▪ **method**: _function_

▸ (`expr`: any, ...`extras`: any[]): _any_

**Parameters:**

| Name        | Type  |
| ----------- | ----- |
| `expr`      | any   |
| `...extras` | any[] |

▪ **others**: _any[]_

▪... **extras**: _any[]_

**Returns:** _[Grouping](_nodes_grouping_.grouping.md)_

---

### `Protected` groupingAny

▸ **groupingAny**(`method`: function, `others`: any[], ...`extras`: any[]):
_[Grouping](_nodes_grouping_.grouping.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[groupingAny](_nodes_sqlfunction_.sqlfunction.md#protected-groupingany)_

_Defined in
[src/mixins/Predications.ts:35](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Predications.ts#L35)_

**Parameters:**

▪ **method**: _function_

▸ (`expr`: any, ...`extras`: any[]): _any_

**Parameters:**

| Name        | Type  |
| ----------- | ----- |
| `expr`      | any   |
| `...extras` | any[] |

▪ **others**: _any[]_

▪... **extras**: _any[]_

**Returns:** _[Grouping](_nodes_grouping_.grouping.md)_

---

### gt

▸ **gt**(`other`: any): _[GreaterThan](_nodes_greaterthan_.greaterthan.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[gt](_nodes_sqlfunction_.sqlfunction.md#gt)_

_Defined in
[src/mixins/Predications.ts:107](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Predications.ts#L107)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `other` | any  |

**Returns:** _[GreaterThan](_nodes_greaterthan_.greaterthan.md)_

---

### gtAll

▸ **gtAll**(`others`: any[]): _[Grouping](_nodes_grouping_.grouping.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[gtAll](_nodes_sqlfunction_.sqlfunction.md#gtall)_

_Defined in
[src/mixins/Predications.ts:111](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Predications.ts#L111)_

**Parameters:**

| Name     | Type  |
| -------- | ----- |
| `others` | any[] |

**Returns:** _[Grouping](_nodes_grouping_.grouping.md)_

---

### gtAny

▸ **gtAny**(`others`: any[]): _[Grouping](_nodes_grouping_.grouping.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[gtAny](_nodes_sqlfunction_.sqlfunction.md#gtany)_

_Defined in
[src/mixins/Predications.ts:115](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Predications.ts#L115)_

**Parameters:**

| Name     | Type  |
| -------- | ----- |
| `others` | any[] |

**Returns:** _[Grouping](_nodes_grouping_.grouping.md)_

---

### gteq

▸ **gteq**(`other`: any):
_[GreaterThanOrEqual](_nodes_greaterthanorequal_.greaterthanorequal.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[gteq](_nodes_sqlfunction_.sqlfunction.md#gteq)_

_Defined in
[src/mixins/Predications.ts:119](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Predications.ts#L119)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `other` | any  |

**Returns:**
_[GreaterThanOrEqual](_nodes_greaterthanorequal_.greaterthanorequal.md)_

---

### gteqAll

▸ **gteqAll**(`others`: any[]): _[Grouping](_nodes_grouping_.grouping.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[gteqAll](_nodes_sqlfunction_.sqlfunction.md#gteqall)_

_Defined in
[src/mixins/Predications.ts:123](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Predications.ts#L123)_

**Parameters:**

| Name     | Type  |
| -------- | ----- |
| `others` | any[] |

**Returns:** _[Grouping](_nodes_grouping_.grouping.md)_

---

### gteqAny

▸ **gteqAny**(`others`: any[]): _[Grouping](_nodes_grouping_.grouping.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[gteqAny](_nodes_sqlfunction_.sqlfunction.md#gteqany)_

_Defined in
[src/mixins/Predications.ts:127](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Predications.ts#L127)_

**Parameters:**

| Name     | Type  |
| -------- | ----- |
| `others` | any[] |

**Returns:** _[Grouping](_nodes_grouping_.grouping.md)_

---

### inAll

▸ **inAll**(`others`: any[]): _[Grouping](_nodes_grouping_.grouping.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[inAll](_nodes_sqlfunction_.sqlfunction.md#inall)_

_Defined in
[src/mixins/Predications.ts:143](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Predications.ts#L143)_

**Parameters:**

| Name     | Type  |
| -------- | ----- |
| `others` | any[] |

**Returns:** _[Grouping](_nodes_grouping_.grouping.md)_

---

### inAny

▸ **inAny**(`others`: any[]): _[Grouping](_nodes_grouping_.grouping.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[inAny](_nodes_sqlfunction_.sqlfunction.md#inany)_

_Defined in
[src/mixins/Predications.ts:147](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Predications.ts#L147)_

**Parameters:**

| Name     | Type  |
| -------- | ----- |
| `others` | any[] |

**Returns:** _[Grouping](_nodes_grouping_.grouping.md)_

---

### inVal

▸ **inVal**(`other`: any): _[In](_nodes_in_.in.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[inVal](_nodes_sqlfunction_.sqlfunction.md#inval)_

_Defined in
[src/mixins/Predications.ts:131](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Predications.ts#L131)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `other` | any  |

**Returns:** _[In](_nodes_in_.in.md)_

---

### isDistinctFrom

▸ **isDistinctFrom**(`other`: any):
_[IsDistinctFrom](_nodes_isdistinctfrom_.isdistinctfrom.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[isDistinctFrom](_nodes_sqlfunction_.sqlfunction.md#isdistinctfrom)_

_Defined in
[src/mixins/Predications.ts:155](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Predications.ts#L155)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `other` | any  |

**Returns:** _[IsDistinctFrom](_nodes_isdistinctfrom_.isdistinctfrom.md)_

---

### `Protected` isInfinity

▸ **isInfinity**(`value`: any): _boolean_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[isInfinity](_nodes_sqlfunction_.sqlfunction.md#protected-isinfinity)_

_Defined in
[src/mixins/Predications.ts:45](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Predications.ts#L45)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `value` | any  |

**Returns:** _boolean_

---

### isNotDistinctFrom

▸ **isNotDistinctFrom**(`other`: any):
_[IsNotDistinctFrom](_nodes_isnotdistinctfrom_.isnotdistinctfrom.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[isNotDistinctFrom](_nodes_sqlfunction_.sqlfunction.md#isnotdistinctfrom)_

_Defined in
[src/mixins/Predications.ts:151](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Predications.ts#L151)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `other` | any  |

**Returns:**
_[IsNotDistinctFrom](_nodes_isnotdistinctfrom_.isnotdistinctfrom.md)_

---

### `Protected` isOpenEnded

▸ **isOpenEnded**(`value`: any): _boolean_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[isOpenEnded](_nodes_sqlfunction_.sqlfunction.md#protected-isopenended)_

_Defined in
[src/mixins/Predications.ts:49](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Predications.ts#L49)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `value` | any  |

**Returns:** _boolean_

---

### `Protected` isUnboundable

▸ **isUnboundable**(`value`: any): _boolean_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[isUnboundable](_nodes_sqlfunction_.sqlfunction.md#protected-isunboundable)_

_Defined in
[src/mixins/Predications.ts:53](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Predications.ts#L53)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `value` | any  |

**Returns:** _boolean_

---

### lt

▸ **lt**(`other`: any): _[LessThan](_nodes_lessthan_.lessthan.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[lt](_nodes_sqlfunction_.sqlfunction.md#lt)_

_Defined in
[src/mixins/Predications.ts:159](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Predications.ts#L159)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `other` | any  |

**Returns:** _[LessThan](_nodes_lessthan_.lessthan.md)_

---

### ltAll

▸ **ltAll**(`others`: any[]): _[Grouping](_nodes_grouping_.grouping.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[ltAll](_nodes_sqlfunction_.sqlfunction.md#ltall)_

_Defined in
[src/mixins/Predications.ts:163](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Predications.ts#L163)_

**Parameters:**

| Name     | Type  |
| -------- | ----- |
| `others` | any[] |

**Returns:** _[Grouping](_nodes_grouping_.grouping.md)_

---

### ltAny

▸ **ltAny**(`others`: any[]): _[Grouping](_nodes_grouping_.grouping.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[ltAny](_nodes_sqlfunction_.sqlfunction.md#ltany)_

_Defined in
[src/mixins/Predications.ts:167](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Predications.ts#L167)_

**Parameters:**

| Name     | Type  |
| -------- | ----- |
| `others` | any[] |

**Returns:** _[Grouping](_nodes_grouping_.grouping.md)_

---

### lteq

▸ **lteq**(`other`: any):
_[LessThanOrEqual](_nodes_lessthanorequal_.lessthanorequal.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[lteq](_nodes_sqlfunction_.sqlfunction.md#lteq)_

_Defined in
[src/mixins/Predications.ts:171](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Predications.ts#L171)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `other` | any  |

**Returns:** _[LessThanOrEqual](_nodes_lessthanorequal_.lessthanorequal.md)_

---

### lteqAll

▸ **lteqAll**(`others`: any[]): _[Grouping](_nodes_grouping_.grouping.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[lteqAll](_nodes_sqlfunction_.sqlfunction.md#lteqall)_

_Defined in
[src/mixins/Predications.ts:175](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Predications.ts#L175)_

**Parameters:**

| Name     | Type  |
| -------- | ----- |
| `others` | any[] |

**Returns:** _[Grouping](_nodes_grouping_.grouping.md)_

---

### lteqAny

▸ **lteqAny**(`others`: any[]): _[Grouping](_nodes_grouping_.grouping.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[lteqAny](_nodes_sqlfunction_.sqlfunction.md#lteqany)_

_Defined in
[src/mixins/Predications.ts:179](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Predications.ts#L179)_

**Parameters:**

| Name     | Type  |
| -------- | ----- |
| `others` | any[] |

**Returns:** _[Grouping](_nodes_grouping_.grouping.md)_

---

### matches

▸ **matches**(`other`: any, `escape`: any, `caseSensitive`: boolean):
_[Matches](_nodes_matches_.matches.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[matches](_nodes_sqlfunction_.sqlfunction.md#matches)_

_Defined in
[src/mixins/Predications.ts:183](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Predications.ts#L183)_

**Parameters:**

| Name            | Type    | Default |
| --------------- | ------- | ------- |
| `other`         | any     | -       |
| `escape`        | any     | null    |
| `caseSensitive` | boolean | false   |

**Returns:** _[Matches](_nodes_matches_.matches.md)_

---

### matchesAll

▸ **matchesAll**(`others`: any[], `escape`: any, `caseSensitive`: boolean):
_[Grouping](_nodes_grouping_.grouping.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[matchesAll](_nodes_sqlfunction_.sqlfunction.md#matchesall)_

_Defined in
[src/mixins/Predications.ts:187](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Predications.ts#L187)_

**Parameters:**

| Name            | Type    | Default |
| --------------- | ------- | ------- |
| `others`        | any[]   | -       |
| `escape`        | any     | null    |
| `caseSensitive` | boolean | false   |

**Returns:** _[Grouping](_nodes_grouping_.grouping.md)_

---

### matchesAny

▸ **matchesAny**(`others`: any[], `escape`: any, `caseSensitive`: boolean):
_[Grouping](_nodes_grouping_.grouping.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[matchesAny](_nodes_sqlfunction_.sqlfunction.md#matchesany)_

_Defined in
[src/mixins/Predications.ts:200](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Predications.ts#L200)_

**Parameters:**

| Name            | Type    | Default |
| --------------- | ------- | ------- |
| `others`        | any[]   | -       |
| `escape`        | any     | null    |
| `caseSensitive` | boolean | false   |

**Returns:** _[Grouping](_nodes_grouping_.grouping.md)_

---

### matchesRegexp

▸ **matchesRegexp**(`other`: any, `caseSensitive`: boolean):
_[Regexp](_nodes_regexp_.regexp.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[matchesRegexp](_nodes_sqlfunction_.sqlfunction.md#matchesregexp)_

_Defined in
[src/mixins/Predications.ts:213](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Predications.ts#L213)_

**Parameters:**

| Name            | Type    | Default |
| --------------- | ------- | ------- |
| `other`         | any     | -       |
| `caseSensitive` | boolean | true    |

**Returns:** _[Regexp](_nodes_regexp_.regexp.md)_

---

### maximum

▸ **maximum**(): _[Max](_nodes_max_.max.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[maximum](_nodes_sqlfunction_.sqlfunction.md#maximum)_

_Defined in
[src/mixins/Expressions.ts:21](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Expressions.ts#L21)_

**Returns:** _[Max](_nodes_max_.max.md)_

---

### minimum

▸ **minimum**(): _[Min](_nodes_min_.min.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[minimum](_nodes_sqlfunction_.sqlfunction.md#minimum)_

_Defined in
[src/mixins/Expressions.ts:25](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Expressions.ts#L25)_

**Returns:** _[Min](_nodes_min_.min.md)_

---

### multiply

▸ **multiply**(`other`: any):
_[Multiplication](_nodes_multiplication_.multiplication.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[multiply](_nodes_sqlfunction_.sqlfunction.md#multiply)_

_Defined in
[src/mixins/Math.ts:46](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Math.ts#L46)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `other` | any  |

**Returns:** _[Multiplication](_nodes_multiplication_.multiplication.md)_

---

### notBetween

▸ **notBetween**(`begin`: number | [BindParam](_nodes_bindparam_.bindparam.md) |
[Quoted](_nodes_quoted_.quoted.md), `end`: number |
[BindParam](_nodes_bindparam_.bindparam.md) |
[Quoted](_nodes_quoted_.quoted.md), `inclusive`: boolean):
_[GreaterThan](_nodes_greaterthan_.greaterthan.md) |
[GreaterThanOrEqual](_nodes_greaterthanorequal_.greaterthanorequal.md) |
[Grouping](_nodes_grouping_.grouping.md) | [In](_nodes_in_.in.md) |
[LessThan](_nodes_lessthan_.lessthan.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[notBetween](_nodes_sqlfunction_.sqlfunction.md#notbetween)_

_Defined in
[src/mixins/Predications.ts:292](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Predications.ts#L292)_

**Parameters:**

| Name        | Type                                                                                                | Default |
| ----------- | --------------------------------------------------------------------------------------------------- | ------- |
| `begin`     | number &#124; [BindParam](_nodes_bindparam_.bindparam.md) &#124; [Quoted](_nodes_quoted_.quoted.md) | -       |
| `end`       | number &#124; [BindParam](_nodes_bindparam_.bindparam.md) &#124; [Quoted](_nodes_quoted_.quoted.md) | -       |
| `inclusive` | boolean                                                                                             | true    |

**Returns:** _[GreaterThan](_nodes_greaterthan_.greaterthan.md) |
[GreaterThanOrEqual](_nodes_greaterthanorequal_.greaterthanorequal.md) |
[Grouping](_nodes_grouping_.grouping.md) | [In](_nodes_in_.in.md) |
[LessThan](_nodes_lessthan_.lessthan.md)_

---

### notEq

▸ **notEq**(`other`: any): _[NotEqual](_nodes_notequal_.notequal.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[notEq](_nodes_sqlfunction_.sqlfunction.md#noteq)_

_Defined in
[src/mixins/Predications.ts:217](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Predications.ts#L217)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `other` | any  |

**Returns:** _[NotEqual](_nodes_notequal_.notequal.md)_

---

### notEqAll

▸ **notEqAll**(`others`: any[]): _[Grouping](_nodes_grouping_.grouping.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[notEqAll](_nodes_sqlfunction_.sqlfunction.md#noteqall)_

_Defined in
[src/mixins/Predications.ts:221](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Predications.ts#L221)_

**Parameters:**

| Name     | Type  |
| -------- | ----- |
| `others` | any[] |

**Returns:** _[Grouping](_nodes_grouping_.grouping.md)_

---

### notEqAny

▸ **notEqAny**(`others`: any[]): _[Grouping](_nodes_grouping_.grouping.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[notEqAny](_nodes_sqlfunction_.sqlfunction.md#noteqany)_

_Defined in
[src/mixins/Predications.ts:225](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Predications.ts#L225)_

**Parameters:**

| Name     | Type  |
| -------- | ----- |
| `others` | any[] |

**Returns:** _[Grouping](_nodes_grouping_.grouping.md)_

---

### notInAll

▸ **notInAll**(`others`: any[]): _[Grouping](_nodes_grouping_.grouping.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[notInAll](_nodes_sqlfunction_.sqlfunction.md#notinall)_

_Defined in
[src/mixins/Predications.ts:241](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Predications.ts#L241)_

**Parameters:**

| Name     | Type  |
| -------- | ----- |
| `others` | any[] |

**Returns:** _[Grouping](_nodes_grouping_.grouping.md)_

---

### notInAny

▸ **notInAny**(`others`: any[]): _[Grouping](_nodes_grouping_.grouping.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[notInAny](_nodes_sqlfunction_.sqlfunction.md#notinany)_

_Defined in
[src/mixins/Predications.ts:245](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Predications.ts#L245)_

**Parameters:**

| Name     | Type  |
| -------- | ----- |
| `others` | any[] |

**Returns:** _[Grouping](_nodes_grouping_.grouping.md)_

---

### notInVal

▸ **notInVal**(`other`: any): _[NotIn](_nodes_notin_.notin.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[notInVal](_nodes_sqlfunction_.sqlfunction.md#notinval)_

_Defined in
[src/mixins/Predications.ts:229](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Predications.ts#L229)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `other` | any  |

**Returns:** _[NotIn](_nodes_notin_.notin.md)_

---

### quotedArray

▸ **quotedArray**(`others`: any[]): _any[]_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[quotedArray](_nodes_sqlfunction_.sqlfunction.md#quotedarray)_

_Defined in
[src/mixins/Predications.ts:253](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Predications.ts#L253)_

**Parameters:**

| Name     | Type  |
| -------- | ----- |
| `others` | any[] |

**Returns:** _any[]_

---

### quotedNode

▸ **quotedNode**(`other`: any): _any_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[quotedNode](_nodes_sqlfunction_.sqlfunction.md#quotednode)_

_Defined in
[src/mixins/Predications.ts:249](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Predications.ts#L249)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `other` | any  |

**Returns:** _any_

---

### subtract

▸ **subtract**(`other`: any): _[Grouping](_nodes_grouping_.grouping.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[subtract](_nodes_sqlfunction_.sqlfunction.md#subtract)_

_Defined in
[src/mixins/Math.ts:50](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Math.ts#L50)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `other` | any  |

**Returns:** _[Grouping](_nodes_grouping_.grouping.md)_

---

### sum

▸ **sum**(): _[Sum](_nodes_sum_.sum.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[sum](_nodes_sqlfunction_.sqlfunction.md#sum)_

_Defined in
[src/mixins/Expressions.ts:29](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Expressions.ts#L29)_

**Returns:** _[Sum](_nodes_sum_.sum.md)_

---

### toSQL

▸ **toSQL**(`engine`: [Engine](../interfaces/_interfaces_engine_.engine.md) |
null): _any_

_Inherited from [As](_nodes_as_.as.md).[toSQL](_nodes_as_.as.md#tosql)_

_Defined in
[src/nodes/Node.ts:16](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Node.ts#L16)_

**Parameters:**

| Name     | Type                                                              | Default          |
| -------- | ----------------------------------------------------------------- | ---------------- |
| `engine` | [Engine](../interfaces/_interfaces_engine_.engine.md) &#124; null | SequelAST.engine |

**Returns:** _any_

---

### when

▸ **when**(`other`: any): _[Case](_nodes_case_.case.md)_

_Inherited from
[SQLFunction](_nodes_sqlfunction_.sqlfunction.md).[when](_nodes_sqlfunction_.sqlfunction.md#when)_

_Defined in
[src/mixins/WhenPredication.ts:5](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/WhenPredication.ts#L5)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `other` | any  |

**Returns:** _[Case](_nodes_case_.case.md)_
