---
id: '_mixins_predications_.predications'
title: 'Predications'
sidebar_label: 'Predications'
---

[@sequeljs/ast](../index.md) › [Globals](../globals.md) ›
["mixins/Predications"](../modules/_mixins_predications_.md) ›
[Predications](_mixins_predications_.predications.md)

## Hierarchy

- **Predications**

  ↳ [InfixOperation](_nodes_infixoperation_.infixoperation.md)

  ↳ [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md)

  ↳ [NodeExpression](_nodes_nodeexpression_.nodeexpression.md)

  ↳ [Attribute](_attributes_attribute_.attribute.md)

## Index

### Methods

- [between](_mixins_predications_.predications.md#between)
- [doesNotMatch](_mixins_predications_.predications.md#doesnotmatch)
- [doesNotMatchAll](_mixins_predications_.predications.md#doesnotmatchall)
- [doesNotMatchAny](_mixins_predications_.predications.md#doesnotmatchany)
- [doesNotMatchRegexp](_mixins_predications_.predications.md#doesnotmatchregexp)
- [eq](_mixins_predications_.predications.md#eq)
- [eqAll](_mixins_predications_.predications.md#eqall)
- [eqAny](_mixins_predications_.predications.md#eqany)
- [groupingAll](_mixins_predications_.predications.md#protected-groupingall)
- [groupingAny](_mixins_predications_.predications.md#protected-groupingany)
- [gt](_mixins_predications_.predications.md#gt)
- [gtAll](_mixins_predications_.predications.md#gtall)
- [gtAny](_mixins_predications_.predications.md#gtany)
- [gteq](_mixins_predications_.predications.md#gteq)
- [gteqAll](_mixins_predications_.predications.md#gteqall)
- [gteqAny](_mixins_predications_.predications.md#gteqany)
- [inAll](_mixins_predications_.predications.md#inall)
- [inAny](_mixins_predications_.predications.md#inany)
- [inVal](_mixins_predications_.predications.md#inval)
- [isDistinctFrom](_mixins_predications_.predications.md#isdistinctfrom)
- [isInfinity](_mixins_predications_.predications.md#protected-isinfinity)
- [isNotDistinctFrom](_mixins_predications_.predications.md#isnotdistinctfrom)
- [isOpenEnded](_mixins_predications_.predications.md#protected-isopenended)
- [isUnboundable](_mixins_predications_.predications.md#protected-isunboundable)
- [lt](_mixins_predications_.predications.md#lt)
- [ltAll](_mixins_predications_.predications.md#ltall)
- [ltAny](_mixins_predications_.predications.md#ltany)
- [lteq](_mixins_predications_.predications.md#lteq)
- [lteqAll](_mixins_predications_.predications.md#lteqall)
- [lteqAny](_mixins_predications_.predications.md#lteqany)
- [matches](_mixins_predications_.predications.md#matches)
- [matchesAll](_mixins_predications_.predications.md#matchesall)
- [matchesAny](_mixins_predications_.predications.md#matchesany)
- [matchesRegexp](_mixins_predications_.predications.md#matchesregexp)
- [notBetween](_mixins_predications_.predications.md#notbetween)
- [notEq](_mixins_predications_.predications.md#noteq)
- [notEqAll](_mixins_predications_.predications.md#noteqall)
- [notEqAny](_mixins_predications_.predications.md#noteqany)
- [notInAll](_mixins_predications_.predications.md#notinall)
- [notInAny](_mixins_predications_.predications.md#notinany)
- [notInVal](_mixins_predications_.predications.md#notinval)
- [quotedArray](_mixins_predications_.predications.md#quotedarray)
- [quotedNode](_mixins_predications_.predications.md#quotednode)

## Methods

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

### doesNotMatch

▸ **doesNotMatch**(`other`: any, `escape`: any, `caseSensitive`: boolean):
_[DoesNotMatch](_nodes_doesnotmatch_.doesnotmatch.md)_

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

_Defined in
[src/mixins/Predications.ts:103](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Predications.ts#L103)_

**Parameters:**

| Name     | Type  |
| -------- | ----- |
| `others` | any[] |

**Returns:** _[Grouping](_nodes_grouping_.grouping.md)_

---

### `Protected` groupingAll

▸ **groupingAll**(`method`: function, `others`: any[], ...`extras`: any[]):
_[Grouping](_nodes_grouping_.grouping.md)_

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

_Defined in
[src/mixins/Predications.ts:213](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Predications.ts#L213)_

**Parameters:**

| Name            | Type    | Default |
| --------------- | ------- | ------- |
| `other`         | any     | -       |
| `caseSensitive` | boolean | true    |

**Returns:** _[Regexp](_nodes_regexp_.regexp.md)_

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

_Defined in
[src/mixins/Predications.ts:249](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/Predications.ts#L249)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `other` | any  |

**Returns:** _any_
