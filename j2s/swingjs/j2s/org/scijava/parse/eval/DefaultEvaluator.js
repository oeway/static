(function(){var P$=Clazz.newPackage("org.scijava.parse.eval"),p$1={},I$=[[0,'org.scijava.parse.Tokens','java.util.Arrays','Boolean','java.math.BigInteger','java.math.BigDecimal','org.scijava.parse.Literals']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultEvaluator", null, 'org.scijava.parse.eval.AbstractStandardStackEvaluator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_parse_ExpressionParser', function (parser) {
;C$.superclazz.c$$org_scijava_parse_ExpressionParser.apply(this,[parser]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'function$O$O', function (a, b) {
var element=p$1.listElement$O$O.apply(this, [a, b]);
if (element != null ) return element;
if ($I$(1).isVariable$O(a)) {
var name=(a).getToken$();
var result=p$1.callFunction$S$O.apply(this, [name, b]);
if (result != null ) return result;
}return null;
});

Clazz.newMeth(C$, 'dot$O$O', function (a, b) {
return null;
});

Clazz.newMeth(C$, 'parens$OA', function (args) {
if (args.length == 1) return args[0];
return $I$(2).asList$TTA(args);
});

Clazz.newMeth(C$, 'brackets$OA', function (args) {
return $I$(2).asList$TTA(args);
});

Clazz.newMeth(C$, 'braces$OA', function (args) {
return $I$(2).asList$TTA(args);
});

Clazz.newMeth(C$, 'transpose$O', function (a) {
return null;
});

Clazz.newMeth(C$, 'dotTranspose$O', function (a) {
return null;
});

Clazz.newMeth(C$, 'pow$O$O', function (a, b) {
if (p$1.isD$O.apply(this, [a]) && p$1.isD$O.apply(this, [b]) ) return new Double(this.pow$D$D(p$1.d$O.apply(this, [a]), p$1.d$O.apply(this, [b])));
if (p$1.isBI$O.apply(this, [a]) && p$1.isI$O.apply(this, [b]) ) return this.pow$java_math_BigInteger$I(p$1.bi$O.apply(this, [a]), p$1.i$O.apply(this, [b]));
if (p$1.isBD$O.apply(this, [a]) && p$1.isI$O.apply(this, [b]) ) return this.pow$java_math_BigDecimal$I(p$1.bd$O.apply(this, [a]), p$1.i$O.apply(this, [b]));
return null;
});

Clazz.newMeth(C$, 'pow$D$D', function (a, b) {
return Math.pow(a, b);
});

Clazz.newMeth(C$, 'pow$java_math_BigInteger$I', function (a, b) {
return a.pow$I(b);
});

Clazz.newMeth(C$, 'pow$java_math_BigDecimal$I', function (a, b) {
return a.pow$I(b);
});

Clazz.newMeth(C$, 'dotPow$O$O', function (a, b) {
return null;
});

Clazz.newMeth(C$, 'pos$O', function (a) {
if (p$1.isI$O.apply(this, [a])) return new Integer(this.pos$I(p$1.i$O.apply(this, [a])));
if (p$1.isL$O.apply(this, [a])) return new Long(this.pos$J(p$1.l$O.apply(this, [a])));
if (p$1.isF$O.apply(this, [a])) return new Float(this.pos$F(p$1.f$O.apply(this, [a])));
if (p$1.isD$O.apply(this, [a])) return new Double(this.pos$D(p$1.d$O.apply(this, [a])));
return this.value$O(a);
});

Clazz.newMeth(C$, 'pos$I', function (num) {
return +num;
});

Clazz.newMeth(C$, 'pos$J', function (num) {
return +num;
});

Clazz.newMeth(C$, 'pos$F', function (num) {
return +num;
});

Clazz.newMeth(C$, 'pos$D', function (num) {
return +num;
});

Clazz.newMeth(C$, 'neg$O', function (a) {
if (p$1.isI$O.apply(this, [a])) return new Integer(this.neg$I(p$1.i$O.apply(this, [a])));
if (p$1.isL$O.apply(this, [a])) return new Long(this.neg$J(p$1.l$O.apply(this, [a])));
if (p$1.isF$O.apply(this, [a])) return new Float(this.neg$F(p$1.f$O.apply(this, [a])));
if (p$1.isD$O.apply(this, [a])) return new Double(this.neg$D(p$1.d$O.apply(this, [a])));
if (p$1.isBI$O.apply(this, [a])) return this.neg$java_math_BigInteger(p$1.bi$O.apply(this, [a]));
if (p$1.isBD$O.apply(this, [a])) return this.neg$java_math_BigDecimal(p$1.bd$O.apply(this, [a]));
return this.sub$O$O(new Integer(0), a);
});

Clazz.newMeth(C$, 'neg$I', function (num) {
return -num;
});

Clazz.newMeth(C$, 'neg$J', function (num) {
return -num;
});

Clazz.newMeth(C$, 'neg$F', function (num) {
return -num;
});

Clazz.newMeth(C$, 'neg$D', function (num) {
return -num;
});

Clazz.newMeth(C$, 'neg$java_math_BigInteger', function (num) {
return num.negate$();
});

Clazz.newMeth(C$, 'neg$java_math_BigDecimal', function (num) {
return num.negate$();
});

Clazz.newMeth(C$, 'complement$O', function (a) {
if (p$1.isI$O.apply(this, [a])) return new Integer(this.complement$I(p$1.i$O.apply(this, [a])));
if (p$1.isL$O.apply(this, [a])) return new Long(this.complement$J(p$1.l$O.apply(this, [a])));
return null;
});

Clazz.newMeth(C$, 'complement$I', function (a) {
return ~a;
});

Clazz.newMeth(C$, 'complement$J', function (a) {
return ~a;
});

Clazz.newMeth(C$, 'not$O', function (a) {
return new Boolean(this.not$Z(p$1.bool$O.apply(this, [a])));
});

Clazz.newMeth(C$, 'not$Z', function (a) {
return !a;
});

Clazz.newMeth(C$, 'mul$O$O', function (a, b) {
if (p$1.isI$O.apply(this, [a]) && p$1.isI$O.apply(this, [b]) ) return new Integer(this.mul$I$I(p$1.i$O.apply(this, [a]), p$1.i$O.apply(this, [b])));
if (p$1.isL$O.apply(this, [a]) && p$1.isL$O.apply(this, [b]) ) return new Long(this.mul$J$J(p$1.l$O.apply(this, [a]), p$1.l$O.apply(this, [b])));
if (p$1.isF$O.apply(this, [a]) && p$1.isF$O.apply(this, [b]) ) return new Float(this.mul$F$F(p$1.f$O.apply(this, [a]), p$1.f$O.apply(this, [b])));
if (p$1.isD$O.apply(this, [a]) && p$1.isD$O.apply(this, [b]) ) return new Double(this.mul$D$D(p$1.d$O.apply(this, [a]), p$1.d$O.apply(this, [b])));
if (p$1.isBI$O.apply(this, [a]) && p$1.isBI$O.apply(this, [b]) ) return this.mul$java_math_BigInteger$java_math_BigInteger(p$1.bi$O.apply(this, [a]), p$1.bi$O.apply(this, [b]));
if (p$1.isBD$O.apply(this, [a]) && p$1.isBD$O.apply(this, [b]) ) return this.mul$java_math_BigDecimal$java_math_BigDecimal(p$1.bd$O.apply(this, [a]), p$1.bd$O.apply(this, [b]));
return null;
});

Clazz.newMeth(C$, 'mul$I$I', function (a, b) {
return a * b;
});

Clazz.newMeth(C$, 'mul$J$J', function (a, b) {
return a * b;
});

Clazz.newMeth(C$, 'mul$F$F', function (a, b) {
return a * b;
});

Clazz.newMeth(C$, 'mul$D$D', function (a, b) {
return a * b;
});

Clazz.newMeth(C$, 'mul$java_math_BigInteger$java_math_BigInteger', function (a, b) {
return a.multiply$java_math_BigInteger(b);
});

Clazz.newMeth(C$, 'mul$java_math_BigDecimal$java_math_BigDecimal', function (a, b) {
return a.multiply$java_math_BigDecimal(b);
});

Clazz.newMeth(C$, 'div$O$O', function (a, b) {
if (p$1.isI$O.apply(this, [a]) && p$1.isI$O.apply(this, [b]) ) return new Integer(this.div$I$I(p$1.i$O.apply(this, [a]), p$1.i$O.apply(this, [b])));
if (p$1.isL$O.apply(this, [a]) && p$1.isL$O.apply(this, [b]) ) return new Long(this.div$J$J(p$1.l$O.apply(this, [a]), p$1.l$O.apply(this, [b])));
if (p$1.isF$O.apply(this, [a]) && p$1.isF$O.apply(this, [b]) ) return new Float(this.div$F$F(p$1.f$O.apply(this, [a]), p$1.f$O.apply(this, [b])));
if (p$1.isD$O.apply(this, [a]) && p$1.isD$O.apply(this, [b]) ) return new Double(this.div$D$D(p$1.d$O.apply(this, [a]), p$1.d$O.apply(this, [b])));
if (p$1.isBI$O.apply(this, [a]) && p$1.isBI$O.apply(this, [b]) ) return this.div$java_math_BigInteger$java_math_BigInteger(p$1.bi$O.apply(this, [a]), p$1.bi$O.apply(this, [b]));
if (p$1.isBD$O.apply(this, [a]) && p$1.isBD$O.apply(this, [b]) ) return this.div$java_math_BigDecimal$java_math_BigDecimal(p$1.bd$O.apply(this, [a]), p$1.bd$O.apply(this, [b]));
return null;
});

Clazz.newMeth(C$, 'div$I$I', function (a, b) {
return (a/b|0);
});

Clazz.newMeth(C$, 'div$J$J', function (a, b) {
return (a/b|0);
});

Clazz.newMeth(C$, 'div$F$F', function (a, b) {
return a / b;
});

Clazz.newMeth(C$, 'div$D$D', function (a, b) {
return a / b;
});

Clazz.newMeth(C$, 'div$java_math_BigInteger$java_math_BigInteger', function (a, b) {
return a.divide$java_math_BigInteger(b);
});

Clazz.newMeth(C$, 'div$java_math_BigDecimal$java_math_BigDecimal', function (a, b) {
return a.divide$java_math_BigDecimal(b);
});

Clazz.newMeth(C$, 'mod$O$O', function (a, b) {
if (p$1.isI$O.apply(this, [a]) && p$1.isI$O.apply(this, [b]) ) return new Integer(this.mod$I$I(p$1.i$O.apply(this, [a]), p$1.i$O.apply(this, [b])));
if (p$1.isL$O.apply(this, [a]) && p$1.isL$O.apply(this, [b]) ) return new Long(this.mod$J$J(p$1.l$O.apply(this, [a]), p$1.l$O.apply(this, [b])));
if (p$1.isF$O.apply(this, [a]) && p$1.isF$O.apply(this, [b]) ) return new Float(this.mod$F$F(p$1.f$O.apply(this, [a]), p$1.f$O.apply(this, [b])));
if (p$1.isD$O.apply(this, [a]) && p$1.isD$O.apply(this, [b]) ) return new Double(this.mod$D$D(p$1.d$O.apply(this, [a]), p$1.d$O.apply(this, [b])));
if (p$1.isBI$O.apply(this, [a]) && p$1.isBI$O.apply(this, [b]) ) return this.mod$java_math_BigInteger$java_math_BigInteger(p$1.bi$O.apply(this, [a]), p$1.bi$O.apply(this, [b]));
if (p$1.isBD$O.apply(this, [a]) && p$1.isBD$O.apply(this, [b]) ) return this.mod$java_math_BigDecimal$java_math_BigDecimal(p$1.bd$O.apply(this, [a]), p$1.bd$O.apply(this, [b]));
return null;
});

Clazz.newMeth(C$, 'mod$I$I', function (a, b) {
return a % b;
});

Clazz.newMeth(C$, 'mod$J$J', function (a, b) {
return a % b;
});

Clazz.newMeth(C$, 'mod$F$F', function (a, b) {
return a % b;
});

Clazz.newMeth(C$, 'mod$D$D', function (a, b) {
return a % b;
});

Clazz.newMeth(C$, 'mod$java_math_BigInteger$java_math_BigInteger', function (a, b) {
return a.remainder$java_math_BigInteger(b);
});

Clazz.newMeth(C$, 'mod$java_math_BigDecimal$java_math_BigDecimal', function (a, b) {
return a.remainder$java_math_BigDecimal(b);
});

Clazz.newMeth(C$, 'rightDiv$O$O', function (a, b) {
return null;
});

Clazz.newMeth(C$, 'dotMul$O$O', function (a, b) {
return null;
});

Clazz.newMeth(C$, 'dotDiv$O$O', function (a, b) {
return null;
});

Clazz.newMeth(C$, 'dotRightDiv$O$O', function (a, b) {
return null;
});

Clazz.newMeth(C$, 'add$O$O', function (a, b) {
if (p$1.isStr$O.apply(this, [a])) return this.add$S$S(p$1.str$O.apply(this, [a]), p$1.str$O.apply(this, [b]));
if (p$1.isI$O.apply(this, [a]) && p$1.isI$O.apply(this, [b]) ) return new Integer(this.add$I$I(p$1.i$O.apply(this, [a]), p$1.i$O.apply(this, [b])));
if (p$1.isL$O.apply(this, [a]) && p$1.isL$O.apply(this, [b]) ) return new Long(this.add$J$J(p$1.l$O.apply(this, [a]), p$1.l$O.apply(this, [b])));
if (p$1.isF$O.apply(this, [a]) && p$1.isF$O.apply(this, [b]) ) return new Float(this.add$F$F(p$1.f$O.apply(this, [a]), p$1.f$O.apply(this, [b])));
if (p$1.isD$O.apply(this, [a]) && p$1.isD$O.apply(this, [b]) ) return new Double(this.add$D$D(p$1.d$O.apply(this, [a]), p$1.d$O.apply(this, [b])));
if (p$1.isBI$O.apply(this, [a]) && p$1.isBI$O.apply(this, [b]) ) return this.add$java_math_BigInteger$java_math_BigInteger(p$1.bi$O.apply(this, [a]), p$1.bi$O.apply(this, [b]));
if (p$1.isBD$O.apply(this, [a]) && p$1.isBD$O.apply(this, [b]) ) return this.add$java_math_BigDecimal$java_math_BigDecimal(p$1.bd$O.apply(this, [a]), p$1.bd$O.apply(this, [b]));
return null;
});

Clazz.newMeth(C$, 'add$S$S', function (a, b) {
return a + b;
});

Clazz.newMeth(C$, 'add$I$I', function (a, b) {
return a + b;
});

Clazz.newMeth(C$, 'add$J$J', function (a, b) {
return a + b;
});

Clazz.newMeth(C$, 'add$F$F', function (a, b) {
return a + b;
});

Clazz.newMeth(C$, 'add$D$D', function (a, b) {
return a + b;
});

Clazz.newMeth(C$, 'add$java_math_BigInteger$java_math_BigInteger', function (a, b) {
return a.add$java_math_BigInteger(b);
});

Clazz.newMeth(C$, 'add$java_math_BigDecimal$java_math_BigDecimal', function (a, b) {
return a.add$java_math_BigDecimal(b);
});

Clazz.newMeth(C$, 'sub$O$O', function (a, b) {
if (p$1.isI$O.apply(this, [a]) && p$1.isI$O.apply(this, [b]) ) return new Integer(this.sub$I$I(p$1.i$O.apply(this, [a]), p$1.i$O.apply(this, [b])));
if (p$1.isL$O.apply(this, [a]) && p$1.isL$O.apply(this, [b]) ) return new Long(this.sub$J$J(p$1.l$O.apply(this, [a]), p$1.l$O.apply(this, [b])));
if (p$1.isF$O.apply(this, [a]) && p$1.isF$O.apply(this, [b]) ) return new Float(this.sub$F$F(p$1.f$O.apply(this, [a]), p$1.f$O.apply(this, [b])));
if (p$1.isD$O.apply(this, [a]) && p$1.isD$O.apply(this, [b]) ) return new Double(this.sub$D$D(p$1.d$O.apply(this, [a]), p$1.d$O.apply(this, [b])));
if (p$1.isBI$O.apply(this, [a]) && p$1.isBI$O.apply(this, [b]) ) return this.sub$java_math_BigInteger$java_math_BigInteger(p$1.bi$O.apply(this, [a]), p$1.bi$O.apply(this, [b]));
if (p$1.isBD$O.apply(this, [a]) && p$1.isBD$O.apply(this, [b]) ) return this.sub$java_math_BigDecimal$java_math_BigDecimal(p$1.bd$O.apply(this, [a]), p$1.bd$O.apply(this, [b]));
return null;
});

Clazz.newMeth(C$, 'sub$I$I', function (a, b) {
return a - b;
});

Clazz.newMeth(C$, 'sub$J$J', function (a, b) {
return a - b;
});

Clazz.newMeth(C$, 'sub$F$F', function (a, b) {
return a - b;
});

Clazz.newMeth(C$, 'sub$D$D', function (a, b) {
return a - b;
});

Clazz.newMeth(C$, 'sub$java_math_BigInteger$java_math_BigInteger', function (a, b) {
return a.subtract$java_math_BigInteger(b);
});

Clazz.newMeth(C$, 'sub$java_math_BigDecimal$java_math_BigDecimal', function (a, b) {
return a.subtract$java_math_BigDecimal(b);
});

Clazz.newMeth(C$, 'leftShift$O$O', function (a, b) {
if (p$1.isI$O.apply(this, [a]) && p$1.isI$O.apply(this, [b]) ) return new Integer(this.leftShift$I$I(p$1.i$O.apply(this, [a]), p$1.i$O.apply(this, [b])));
if (p$1.isL$O.apply(this, [a]) && p$1.isL$O.apply(this, [b]) ) return new Long(this.leftShift$J$J(p$1.l$O.apply(this, [a]), p$1.l$O.apply(this, [b])));
if (p$1.isBI$O.apply(this, [a]) && p$1.isI$O.apply(this, [b]) ) return this.leftShift$java_math_BigInteger$I(p$1.bi$O.apply(this, [a]), p$1.i$O.apply(this, [b]));
return null;
});

Clazz.newMeth(C$, 'leftShift$I$I', function (a, b) {
return a << b;
});

Clazz.newMeth(C$, 'leftShift$J$J', function (a, b) {
return a << b;
});

Clazz.newMeth(C$, 'leftShift$java_math_BigInteger$I', function (a, b) {
return a.shiftLeft$I(b);
});

Clazz.newMeth(C$, 'rightShift$O$O', function (a, b) {
if (p$1.isI$O.apply(this, [a]) && p$1.isI$O.apply(this, [b]) ) return new Integer(this.rightShift$I$I(p$1.i$O.apply(this, [a]), p$1.i$O.apply(this, [b])));
if (p$1.isL$O.apply(this, [a]) && p$1.isL$O.apply(this, [b]) ) return new Long(this.rightShift$J$J(p$1.l$O.apply(this, [a]), p$1.l$O.apply(this, [b])));
if (p$1.isBI$O.apply(this, [a]) && p$1.isI$O.apply(this, [b]) ) return this.rightShift$java_math_BigInteger$I(p$1.bi$O.apply(this, [a]), p$1.i$O.apply(this, [b]));
return null;
});

Clazz.newMeth(C$, 'rightShift$I$I', function (a, b) {
return a >> b;
});

Clazz.newMeth(C$, 'rightShift$J$J', function (a, b) {
return a >> b;
});

Clazz.newMeth(C$, 'rightShift$java_math_BigInteger$I', function (a, b) {
return a.shiftRight$I(b);
});

Clazz.newMeth(C$, 'unsignedRightShift$O$O', function (a, b) {
if (p$1.isI$O.apply(this, [a]) && p$1.isI$O.apply(this, [b]) ) return new Integer(this.unsignedRightShift$I$I(p$1.i$O.apply(this, [a]), p$1.i$O.apply(this, [b])));
if (p$1.isL$O.apply(this, [a]) && p$1.isL$O.apply(this, [b]) ) return new Long(this.unsignedRightShift$J$J(p$1.l$O.apply(this, [a]), p$1.l$O.apply(this, [b])));
return null;
});

Clazz.newMeth(C$, 'unsignedRightShift$I$I', function (a, b) {
return a >>> b;
});

Clazz.newMeth(C$, 'unsignedRightShift$J$J', function (a, b) {
return a >>> b;
});

Clazz.newMeth(C$, 'colon$O$O', function (a, b) {
return null;
});

Clazz.newMeth(C$, 'lessThan$O$O', function (a, b) {
if (p$1.isBool$O.apply(this, [a]) && p$1.isBool$O.apply(this, [b]) ) return new Boolean(this.lessThan$Comparable$TT(new Boolean(p$1.bool$O.apply(this, [a])), new Boolean(p$1.bool$O.apply(this, [b]))));
if (p$1.isStr$O.apply(this, [a]) && p$1.isStr$O.apply(this, [b]) ) return new Boolean(this.lessThan$Comparable$TT(p$1.str$O.apply(this, [a]), p$1.str$O.apply(this, [b])));
if (p$1.isI$O.apply(this, [a]) && p$1.isI$O.apply(this, [b]) ) return new Boolean(this.lessThan$Comparable$TT(new Integer(p$1.i$O.apply(this, [a])), new Integer(p$1.i$O.apply(this, [b]))));
if (p$1.isL$O.apply(this, [a]) && p$1.isL$O.apply(this, [b]) ) return new Boolean(this.lessThan$Comparable$TT(new Long(p$1.l$O.apply(this, [a])), new Long(p$1.l$O.apply(this, [b]))));
if (p$1.isF$O.apply(this, [a]) && p$1.isF$O.apply(this, [b]) ) return new Boolean(this.lessThan$Comparable$TT(new Float(p$1.f$O.apply(this, [a])), new Float(p$1.f$O.apply(this, [b]))));
if (p$1.isD$O.apply(this, [a]) && p$1.isD$O.apply(this, [b]) ) return new Boolean(this.lessThan$Comparable$TT(new Double(p$1.d$O.apply(this, [a])), new Double(p$1.d$O.apply(this, [b]))));
if (p$1.isBI$O.apply(this, [a]) && p$1.isBI$O.apply(this, [b]) ) return new Boolean(this.lessThan$Comparable$TT(p$1.bi$O.apply(this, [a]), p$1.bi$O.apply(this, [b])));
if (p$1.isBD$O.apply(this, [a]) && p$1.isBD$O.apply(this, [b]) ) return new Boolean(this.lessThan$Comparable$TT(p$1.bd$O.apply(this, [a]), p$1.bd$O.apply(this, [b])));
return null;
});

Clazz.newMeth(C$, 'lessThan$Comparable$TT', function (a, b) {
return a.compareTo$(b) < 0;
});

Clazz.newMeth(C$, 'greaterThan$O$O', function (a, b) {
if (p$1.isBool$O.apply(this, [a]) && p$1.isBool$O.apply(this, [b]) ) return new Boolean(this.greaterThan$Comparable$TT(new Boolean(p$1.bool$O.apply(this, [a])), new Boolean(p$1.bool$O.apply(this, [b]))));
if (p$1.isStr$O.apply(this, [a]) && p$1.isStr$O.apply(this, [b]) ) return new Boolean(this.greaterThan$Comparable$TT(p$1.str$O.apply(this, [a]), p$1.str$O.apply(this, [b])));
if (p$1.isI$O.apply(this, [a]) && p$1.isI$O.apply(this, [b]) ) return new Boolean(this.greaterThan$Comparable$TT(new Integer(p$1.i$O.apply(this, [a])), new Integer(p$1.i$O.apply(this, [b]))));
if (p$1.isL$O.apply(this, [a]) && p$1.isL$O.apply(this, [b]) ) return new Boolean(this.greaterThan$Comparable$TT(new Long(p$1.l$O.apply(this, [a])), new Long(p$1.l$O.apply(this, [b]))));
if (p$1.isF$O.apply(this, [a]) && p$1.isF$O.apply(this, [b]) ) return new Boolean(this.greaterThan$Comparable$TT(new Float(p$1.f$O.apply(this, [a])), new Float(p$1.f$O.apply(this, [b]))));
if (p$1.isD$O.apply(this, [a]) && p$1.isD$O.apply(this, [b]) ) return new Boolean(this.greaterThan$Comparable$TT(new Double(p$1.d$O.apply(this, [a])), new Double(p$1.d$O.apply(this, [b]))));
if (p$1.isBI$O.apply(this, [a]) && p$1.isBI$O.apply(this, [b]) ) return new Boolean(this.greaterThan$Comparable$TT(p$1.bi$O.apply(this, [a]), p$1.bi$O.apply(this, [b])));
if (p$1.isBD$O.apply(this, [a]) && p$1.isBD$O.apply(this, [b]) ) return new Boolean(this.greaterThan$Comparable$TT(p$1.bd$O.apply(this, [a]), p$1.bd$O.apply(this, [b])));
return null;
});

Clazz.newMeth(C$, 'greaterThan$Comparable$TT', function (a, b) {
return a.compareTo$(b) > 0;
});

Clazz.newMeth(C$, 'lessThanOrEqual$O$O', function (a, b) {
if (p$1.isBool$O.apply(this, [a]) && p$1.isBool$O.apply(this, [b]) ) return new Boolean(this.lessThanOrEqual$Comparable$TT(new Boolean(p$1.bool$O.apply(this, [a])), new Boolean(p$1.bool$O.apply(this, [b]))));
if (p$1.isStr$O.apply(this, [a]) && p$1.isStr$O.apply(this, [b]) ) return new Boolean(this.lessThanOrEqual$Comparable$TT(p$1.str$O.apply(this, [a]), p$1.str$O.apply(this, [b])));
if (p$1.isI$O.apply(this, [a]) && p$1.isI$O.apply(this, [b]) ) return new Boolean(this.lessThanOrEqual$Comparable$TT(new Integer(p$1.i$O.apply(this, [a])), new Integer(p$1.i$O.apply(this, [b]))));
if (p$1.isL$O.apply(this, [a]) && p$1.isL$O.apply(this, [b]) ) return new Boolean(this.lessThanOrEqual$Comparable$TT(new Long(p$1.l$O.apply(this, [a])), new Long(p$1.l$O.apply(this, [b]))));
if (p$1.isF$O.apply(this, [a]) && p$1.isF$O.apply(this, [b]) ) return new Boolean(this.lessThanOrEqual$Comparable$TT(new Float(p$1.f$O.apply(this, [a])), new Float(p$1.f$O.apply(this, [b]))));
if (p$1.isD$O.apply(this, [a]) && p$1.isD$O.apply(this, [b]) ) return new Boolean(this.lessThanOrEqual$Comparable$TT(new Double(p$1.d$O.apply(this, [a])), new Double(p$1.d$O.apply(this, [b]))));
if (p$1.isBI$O.apply(this, [a]) && p$1.isBI$O.apply(this, [b]) ) return new Boolean(this.lessThanOrEqual$Comparable$TT(p$1.bi$O.apply(this, [a]), p$1.bi$O.apply(this, [b])));
if (p$1.isBD$O.apply(this, [a]) && p$1.isBD$O.apply(this, [b]) ) return new Boolean(this.lessThanOrEqual$Comparable$TT(p$1.bd$O.apply(this, [a]), p$1.bd$O.apply(this, [b])));
return null;
});

Clazz.newMeth(C$, 'lessThanOrEqual$Comparable$TT', function (a, b) {
return a.compareTo$(b) <= 0;
});

Clazz.newMeth(C$, 'greaterThanOrEqual$O$O', function (a, b) {
if (p$1.isBool$O.apply(this, [a]) && p$1.isBool$O.apply(this, [b]) ) return new Boolean(this.greaterThanOrEqual$Comparable$TT(new Boolean(p$1.bool$O.apply(this, [a])), new Boolean(p$1.bool$O.apply(this, [b]))));
if (p$1.isStr$O.apply(this, [a]) && p$1.isStr$O.apply(this, [b]) ) return new Boolean(this.greaterThanOrEqual$Comparable$TT(p$1.str$O.apply(this, [a]), p$1.str$O.apply(this, [b])));
if (p$1.isI$O.apply(this, [a]) && p$1.isI$O.apply(this, [b]) ) return new Boolean(this.greaterThanOrEqual$Comparable$TT(new Integer(p$1.i$O.apply(this, [a])), new Integer(p$1.i$O.apply(this, [b]))));
if (p$1.isL$O.apply(this, [a]) && p$1.isL$O.apply(this, [b]) ) return new Boolean(this.greaterThanOrEqual$Comparable$TT(new Long(p$1.l$O.apply(this, [a])), new Long(p$1.l$O.apply(this, [b]))));
if (p$1.isF$O.apply(this, [a]) && p$1.isF$O.apply(this, [b]) ) return new Boolean(this.greaterThanOrEqual$Comparable$TT(new Float(p$1.f$O.apply(this, [a])), new Float(p$1.f$O.apply(this, [b]))));
if (p$1.isD$O.apply(this, [a]) && p$1.isD$O.apply(this, [b]) ) return new Boolean(this.greaterThanOrEqual$Comparable$TT(new Double(p$1.d$O.apply(this, [a])), new Double(p$1.d$O.apply(this, [b]))));
if (p$1.isBI$O.apply(this, [a]) && p$1.isBI$O.apply(this, [b]) ) return new Boolean(this.greaterThanOrEqual$Comparable$TT(p$1.bi$O.apply(this, [a]), p$1.bi$O.apply(this, [b])));
if (p$1.isBD$O.apply(this, [a]) && p$1.isBD$O.apply(this, [b]) ) return new Boolean(this.greaterThanOrEqual$Comparable$TT(p$1.bd$O.apply(this, [a]), p$1.bd$O.apply(this, [b])));
return null;
});

Clazz.newMeth(C$, 'greaterThanOrEqual$Comparable$TT', function (a, b) {
return a.compareTo$(b) >= 0;
});

Clazz.newMeth(C$, 'instanceOf$O$O', function (a, b) {
return null;
});

Clazz.newMeth(C$, 'equal$O$O', function (a, b) {
return new Boolean(this.value$O(a).equals$O(this.value$O(b)));
});

Clazz.newMeth(C$, 'notEqual$O$O', function (a, b) {
return new Boolean(!this.value$O(a).equals$O(this.value$O(b)));
});

Clazz.newMeth(C$, 'bitwiseAnd$O$O', function (a, b) {
if (p$1.isI$O.apply(this, [a]) && p$1.isI$O.apply(this, [b]) ) return new Integer(this.bitwiseAnd$I$I(p$1.i$O.apply(this, [a]), p$1.i$O.apply(this, [b])));
if (p$1.isL$O.apply(this, [a]) && p$1.isL$O.apply(this, [b]) ) return new Long(this.bitwiseAnd$J$J(p$1.l$O.apply(this, [a]), p$1.l$O.apply(this, [b])));
if (p$1.isBI$O.apply(this, [a]) && p$1.isBI$O.apply(this, [b]) ) return this.bitwiseAnd$java_math_BigInteger$java_math_BigInteger(p$1.bi$O.apply(this, [a]), p$1.bi$O.apply(this, [b]));
return null;
});

Clazz.newMeth(C$, 'bitwiseAnd$I$I', function (a, b) {
return a & b;
});

Clazz.newMeth(C$, 'bitwiseAnd$J$J', function (a, b) {
return a & b;
});

Clazz.newMeth(C$, 'bitwiseAnd$java_math_BigInteger$java_math_BigInteger', function (a, b) {
return a.and$java_math_BigInteger(b);
});

Clazz.newMeth(C$, 'bitwiseOr$O$O', function (a, b) {
if (p$1.isI$O.apply(this, [a]) && p$1.isI$O.apply(this, [b]) ) return new Integer(this.bitwiseOr$I$I(p$1.i$O.apply(this, [a]), p$1.i$O.apply(this, [b])));
if (p$1.isL$O.apply(this, [a]) && p$1.isL$O.apply(this, [b]) ) return new Long(this.bitwiseOr$J$J(p$1.l$O.apply(this, [a]), p$1.l$O.apply(this, [b])));
if (p$1.isBI$O.apply(this, [a]) && p$1.isBI$O.apply(this, [b]) ) return this.bitwiseOr$java_math_BigInteger$java_math_BigInteger(p$1.bi$O.apply(this, [a]), p$1.bi$O.apply(this, [b]));
return null;
});

Clazz.newMeth(C$, 'bitwiseOr$I$I', function (a, b) {
return a | b;
});

Clazz.newMeth(C$, 'bitwiseOr$J$J', function (a, b) {
return a | b;
});

Clazz.newMeth(C$, 'bitwiseOr$java_math_BigInteger$java_math_BigInteger', function (a, b) {
return a.or$java_math_BigInteger(b);
});

Clazz.newMeth(C$, 'logicalAnd$O$O', function (a, b) {
if (p$1.isBool$O.apply(this, [a]) && p$1.isBool$O.apply(this, [b]) ) return new Boolean(this.logicalAnd$Z$Z(p$1.bool$O.apply(this, [a]), p$1.bool$O.apply(this, [b])));
return null;
});

Clazz.newMeth(C$, 'logicalAnd$Z$Z', function (a, b) {
return a && b ;
});

Clazz.newMeth(C$, 'logicalOr$O$O', function (a, b) {
if (p$1.isBool$O.apply(this, [a]) && p$1.isBool$O.apply(this, [b]) ) return new Boolean(this.logicalOr$Z$Z(p$1.bool$O.apply(this, [a]), p$1.bool$O.apply(this, [b])));
return null;
});

Clazz.newMeth(C$, 'logicalOr$Z$Z', function (a, b) {
return a || b ;
});

Clazz.newMeth(C$, 'is$O$Class', function (o, c) {
return c.isInstance$O(this.value$O(o));
}, p$1);

Clazz.newMeth(C$, 'isBool$O', function (o) {
return p$1.is$O$Class.apply(this, [o, Clazz.getClass($I$(3))]);
}, p$1);

Clazz.newMeth(C$, 'isStr$O', function (o) {
return p$1.is$O$Class.apply(this, [o, Clazz.getClass(String)]);
}, p$1);

Clazz.newMeth(C$, 'isB$O', function (o) {
return p$1.is$O$Class.apply(this, [o, Clazz.getClass(Byte)]);
}, p$1);

Clazz.newMeth(C$, 'isS$O', function (o) {
return p$1.is$O$Class.apply(this, [o, Clazz.getClass(Short)]) || p$1.isB$O.apply(this, [o]) ;
}, p$1);

Clazz.newMeth(C$, 'isI$O', function (o) {
return p$1.is$O$Class.apply(this, [o, Clazz.getClass(Integer)]) || p$1.isS$O.apply(this, [o]) ;
}, p$1);

Clazz.newMeth(C$, 'isL$O', function (o) {
return p$1.is$O$Class.apply(this, [o, Clazz.getClass(Long)]) || p$1.isI$O.apply(this, [o]) ;
}, p$1);

Clazz.newMeth(C$, 'isF$O', function (o) {
return p$1.is$O$Class.apply(this, [o, Clazz.getClass(Float)]) || p$1.isL$O.apply(this, [o]) ;
}, p$1);

Clazz.newMeth(C$, 'isD$O', function (o) {
return p$1.is$O$Class.apply(this, [o, Clazz.getClass(Double)]) || p$1.isF$O.apply(this, [o]) ;
}, p$1);

Clazz.newMeth(C$, 'isBI$O', function (o) {
return p$1.is$O$Class.apply(this, [o, Clazz.getClass($I$(4))]) || p$1.isL$O.apply(this, [o]) ;
}, p$1);

Clazz.newMeth(C$, 'isBD$O', function (o) {
return p$1.is$O$Class.apply(this, [o, Clazz.getClass($I$(5))]) || p$1.isBI$O.apply(this, [o]) || p$1.isD$O.apply(this, [o])  ;
}, p$1);

Clazz.newMeth(C$, 'cast$O$Class', function (token, type) {
if (type.isInstance$O(token)) {
var result=token;
return result;
}return null;
}, p$1);

Clazz.newMeth(C$, 'bool$O', function (token) {
var b=p$1.cast$O$Class.apply(this, [this.value$O(token), Clazz.getClass($I$(3))]);
return (b != null  ? b : $I$(3).valueOf$S(token.toString())).valueOf();
}, p$1);

Clazz.newMeth(C$, 'str$O', function (token) {
var s=p$1.cast$O$Class.apply(this, [this.value$O(token), Clazz.getClass(String)]);
return s != null  ? s : token.toString();
}, p$1);

Clazz.newMeth(C$, 'num$O', function (token) {
var n=p$1.cast$O$Class.apply(this, [this.value$O(token), Clazz.getClass(Number)]);
return n != null  ? n : $I$(6).parseNumber$CharSequence(token.toString());
}, p$1);

Clazz.newMeth(C$, 'i$O', function (o) {
return p$1.num$O.apply(this, [o]).intValue$();
}, p$1);

Clazz.newMeth(C$, 'l$O', function (o) {
return p$1.num$O.apply(this, [o]).longValue$();
}, p$1);

Clazz.newMeth(C$, 'f$O', function (o) {
return p$1.num$O.apply(this, [o]).floatValue$();
}, p$1);

Clazz.newMeth(C$, 'd$O', function (o) {
return p$1.num$O.apply(this, [o]).doubleValue$();
}, p$1);

Clazz.newMeth(C$, 'bi$O', function (o) {
var bi=p$1.cast$O$Class.apply(this, [o, Clazz.getClass($I$(4))]);
return bi != null  ? bi : Clazz.new_($I$(4,1).c$$S,["" + this.value$O(o)]);
}, p$1);

Clazz.newMeth(C$, 'bd$O', function (o) {
var bd=p$1.cast$O$Class.apply(this, [o, Clazz.getClass($I$(5))]);
return bd != null  ? bd : Clazz.new_($I$(5,1).c$$S,["" + this.value$O(o)]);
}, p$1);

Clazz.newMeth(C$, 'listElement$O$O', function (a, b) {
var value;
try {
value=this.value$O(a);
} catch (exc) {
if (Clazz.exceptionOf(exc,"IllegalArgumentException")){
return null;
} else {
throw exc;
}
}
if (!(Clazz.instanceOf(value, "java.util.List"))) return null;
var list=value;
if (!(Clazz.instanceOf(b, "java.util.List"))) return null;
var indices=b;
if (indices.size$() != 1) return null;
return list.get$I(p$1.i$O.apply(this, [indices.get$I(0)]));
}, p$1);

Clazz.newMeth(C$, 'callFunction$S$O', function (name, b) {
if (name.equals$O("postfix") && Clazz.instanceOf(b, "java.lang.String") ) {
return this.getParser$().parsePostfix$S(b);
}if (name.equals$O("tree") && Clazz.instanceOf(b, "java.lang.String") ) {
return this.getParser$().parseTree$S(b);
}return null;
}, p$1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:21 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
