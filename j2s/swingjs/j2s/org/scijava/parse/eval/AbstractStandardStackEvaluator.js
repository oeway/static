(function(){var P$=Clazz.newPackage("org.scijava.parse.eval"),p$1={},I$=[[0,'org.scijava.parse.Operators','org.scijava.parse.Tokens']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractStandardStackEvaluator", null, 'org.scijava.parse.eval.AbstractStackEvaluator', 'org.scijava.parse.eval.StandardEvaluator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_parse_ExpressionParser', function (parser) {
;C$.superclazz.c$$org_scijava_parse_ExpressionParser.apply(this,[parser]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'postInc$O', function (a) {
var v=p$1.var$O.apply(this, [a]);
var value=this.value$O(v);
if (value == null ) return null;
this.set$org_scijava_parse_Variable$O(v, this.add$O$O(a, new Integer(1)));
return value;
});

Clazz.newMeth(C$, 'postDec$O', function (a) {
var v=p$1.var$O.apply(this, [a]);
var value=this.value$O(v);
if (value == null ) return null;
this.set$org_scijava_parse_Variable$O(v, this.sub$O$O(a, new Integer(1)));
return value;
});

Clazz.newMeth(C$, 'preInc$O', function (a) {
var v=p$1.var$O.apply(this, [a]);
var result=this.add$O$O(a, new Integer(1));
this.set$org_scijava_parse_Variable$O(v, result);
return result;
});

Clazz.newMeth(C$, 'preDec$O', function (a) {
var v=p$1.var$O.apply(this, [a]);
var result=this.sub$O$O(a, new Integer(1));
this.set$org_scijava_parse_Variable$O(v, result);
return result;
});

Clazz.newMeth(C$, 'assign$O$O', function (a, b) {
var v=p$1.var$O.apply(this, [a]);
this.set$org_scijava_parse_Variable$O(v, this.value$O(b));
return v;
});

Clazz.newMeth(C$, 'powAssign$O$O', function (a, b) {
return this.assign$O$O(a, this.pow$O$O(a, b));
});

Clazz.newMeth(C$, 'dotPowAssign$O$O', function (a, b) {
return this.assign$O$O(a, this.dotPow$O$O(a, b));
});

Clazz.newMeth(C$, 'mulAssign$O$O', function (a, b) {
return this.assign$O$O(a, this.mul$O$O(a, b));
});

Clazz.newMeth(C$, 'divAssign$O$O', function (a, b) {
return this.assign$O$O(a, this.div$O$O(a, b));
});

Clazz.newMeth(C$, 'modAssign$O$O', function (a, b) {
return this.assign$O$O(a, this.mod$O$O(a, b));
});

Clazz.newMeth(C$, 'rightDivAssign$O$O', function (a, b) {
return this.assign$O$O(a, this.rightDiv$O$O(a, b));
});

Clazz.newMeth(C$, 'dotDivAssign$O$O', function (a, b) {
return this.assign$O$O(a, this.dotDiv$O$O(a, b));
});

Clazz.newMeth(C$, 'dotRightDivAssign$O$O', function (a, b) {
return this.assign$O$O(a, this.dotRightDiv$O$O(a, b));
});

Clazz.newMeth(C$, 'addAssign$O$O', function (a, b) {
return this.assign$O$O(a, this.add$O$O(a, b));
});

Clazz.newMeth(C$, 'subAssign$O$O', function (a, b) {
return this.assign$O$O(a, this.sub$O$O(a, b));
});

Clazz.newMeth(C$, 'andAssign$O$O', function (a, b) {
return this.assign$O$O(a, this.bitwiseAnd$O$O(a, b));
});

Clazz.newMeth(C$, 'orAssign$O$O', function (a, b) {
return this.assign$O$O(a, this.bitwiseOr$O$O(a, b));
});

Clazz.newMeth(C$, 'leftShiftAssign$O$O', function (a, b) {
return this.assign$O$O(a, this.leftShift$O$O(a, b));
});

Clazz.newMeth(C$, 'rightShiftAssign$O$O', function (a, b) {
return this.assign$O$O(a, this.rightShift$O$O(a, b));
});

Clazz.newMeth(C$, 'unsignedRightShiftAssign$O$O', function (a, b) {
return this.assign$O$O(a, this.unsignedRightShift$O$O(a, b));
});

Clazz.newMeth(C$, 'execute$org_scijava_parse_Operator$java_util_Deque', function (op, stack) {
var arity=op.getArity$();
var args=Clazz.array(java.lang.Object, [arity]);
for (var i=args.length - 1; i >= 0; i--) {
args[i]=stack.pop$();
}
var a=args.length > 0 ? args[0] : null;
var b=args.length > 1 ? args[1] : null;
if (Clazz.instanceOf(op, "org.scijava.parse.Function")) return this.function$O$O(a, b);
if (op === $I$(1).DOT ) return this.dot$O$O(a, b);
if ($I$(2).isMatchingGroup$O$org_scijava_parse_Group(op, $I$(1).PARENS)) return this.parens$OA(args);
if ($I$(2).isMatchingGroup$O$org_scijava_parse_Group(op, $I$(1).BRACKETS)) return this.brackets$OA(args);
if ($I$(2).isMatchingGroup$O$org_scijava_parse_Group(op, $I$(1).BRACES)) return this.braces$OA(args);
if (op === $I$(1).TRANSPOSE ) return this.transpose$O(a);
if (op === $I$(1).DOT_TRANSPOSE ) return this.dotTranspose$O(a);
if (op === $I$(1).POW ) return this.pow$O$O(a, b);
if (op === $I$(1).DOT_POW ) return this.dotPow$O$O(a, b);
if (op === $I$(1).POST_INC ) return this.postInc$O(a);
if (op === $I$(1).POST_DEC ) return this.postDec$O(a);
if (op === $I$(1).PRE_INC ) return this.preInc$O(a);
if (op === $I$(1).PRE_DEC ) return this.preDec$O(a);
if (op === $I$(1).POS ) return this.pos$O(a);
if (op === $I$(1).NEG ) return this.neg$O(a);
if (op === $I$(1).COMPLEMENT ) return this.complement$O(a);
if (op === $I$(1).NOT ) return this.not$O(a);
if (op === $I$(1).MUL ) return this.mul$O$O(a, b);
if (op === $I$(1).DIV ) return this.div$O$O(a, b);
if (op === $I$(1).MOD ) return this.mod$O$O(a, b);
if (op === $I$(1).RIGHT_DIV ) return this.rightDiv$O$O(a, b);
if (op === $I$(1).DOT_MUL ) return this.dotMul$O$O(a, b);
if (op === $I$(1).DOT_DIV ) return this.dotDiv$O$O(a, b);
if (op === $I$(1).DOT_RIGHT_DIV ) return this.dotRightDiv$O$O(a, b);
if (op === $I$(1).ADD ) return this.add$O$O(a, b);
if (op === $I$(1).SUB ) return this.sub$O$O(a, b);
if (op === $I$(1).LEFT_SHIFT ) return this.leftShift$O$O(a, b);
if (op === $I$(1).RIGHT_SHIFT ) return this.rightShift$O$O(a, b);
if (op === $I$(1).UNSIGNED_RIGHT_SHIFT ) return this.unsignedRightShift$O$O(a, b);
if (op === $I$(1).COLON ) return this.colon$O$O(a, b);
if (op === $I$(1).LESS_THAN ) return this.lessThan$O$O(a, b);
if (op === $I$(1).GREATER_THAN ) return this.greaterThan$O$O(a, b);
if (op === $I$(1).LESS_THAN_OR_EQUAL ) return this.lessThanOrEqual$O$O(a, b);
if (op === $I$(1).GREATER_THAN_OR_EQUAL ) return this.greaterThanOrEqual$O$O(a, b);
if (op === $I$(1).INSTANCEOF ) return this.instanceOf$O$O(a, b);
if (op === $I$(1).EQUAL ) return this.equal$O$O(a, b);
if (op === $I$(1).NOT_EQUAL ) return this.notEqual$O$O(a, b);
if (op === $I$(1).BITWISE_AND ) return this.bitwiseAnd$O$O(a, b);
if (op === $I$(1).BITWISE_OR ) return this.bitwiseOr$O$O(a, b);
if (op === $I$(1).LOGICAL_AND ) return this.logicalAnd$O$O(a, b);
if (op === $I$(1).LOGICAL_OR ) return this.logicalOr$O$O(a, b);
if (op === $I$(1).ASSIGN ) return this.assign$O$O(a, b);
if (op === $I$(1).POW_ASSIGN ) return this.powAssign$O$O(a, b);
if (op === $I$(1).DOT_POW_ASSIGN ) return this.dotPowAssign$O$O(a, b);
if (op === $I$(1).MUL_ASSIGN ) return this.mulAssign$O$O(a, b);
if (op === $I$(1).DIV_ASSIGN ) return this.divAssign$O$O(a, b);
if (op === $I$(1).MOD_ASSIGN ) return this.modAssign$O$O(a, b);
if (op === $I$(1).RIGHT_DIV_ASSIGN ) return this.rightDivAssign$O$O(a, b);
if (op === $I$(1).DOT_DIV_ASSIGN ) return this.dotDivAssign$O$O(a, b);
if (op === $I$(1).DOT_RIGHT_DIV_ASSIGN ) return this.dotRightDivAssign$O$O(a, b);
if (op === $I$(1).ADD_ASSIGN ) return this.addAssign$O$O(a, b);
if (op === $I$(1).SUB_ASSIGN ) return this.subAssign$O$O(a, b);
if (op === $I$(1).AND_ASSIGN ) return this.andAssign$O$O(a, b);
if (op === $I$(1).OR_ASSIGN ) return this.orAssign$O$O(a, b);
if (op === $I$(1).LEFT_SHIFT_ASSIGN ) return this.leftShiftAssign$O$O(a, b);
if (op === $I$(1).RIGHT_SHIFT_ASSIGN ) return this.rightShiftAssign$O$O(a, b);
if (op === $I$(1).UNSIGNED_RIGHT_SHIFT_ASSIGN ) return this.unsignedRightShiftAssign$O$O(a, b);
return null;
});

Clazz.newMeth(C$, 'var$O', function (token) {
if ($I$(2).isVariable$O(token)) return token;
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Not a variable: " + token]);
}, p$1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:21 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
