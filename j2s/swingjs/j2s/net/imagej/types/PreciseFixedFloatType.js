(function(){var P$=Clazz.newPackage("net.imagej.types"),I$=[[0,'java.math.BigInteger','java.math.BigDecimal','java.util.Objects']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PreciseFixedFloatType", null, null, 'net.imglib2.type.numeric.RealType');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.ZERO=Clazz.new_(C$);
C$.ONE=Clazz.new_(C$.c$$J,[1]);
C$.TWO=Clazz.new_(C$.c$$J,[2]);
C$.PI=Clazz.new_(C$.c$$S,["3.14159265358979323846264338327950288419716939937510"]);
{
C$.ANGLES=C$.angles$();
C$.POWERS_OF_TWO=C$.powersOfTwo$();
C$.SQRT_PRE=C$.sqrtPrecision$();
};
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['scale','java.math.BigInteger','+amount']]
,['O',['ZERO','net.imagej.types.PreciseFixedFloatType','+ONE','+TWO','+PI','ANGLES','net.imagej.types.PreciseFixedFloatType[]','+POWERS_OF_TWO','SQRT_PRE','net.imagej.types.PreciseFixedFloatType']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.scale=$I$(1).TEN.pow$I(25);
this.amount=$I$(1).ZERO;
}, 1);

Clazz.newMeth(C$, 'c$$J', function (v) {
C$.c$.apply(this, []);
this.set$J(v);
}, 1);

Clazz.newMeth(C$, 'c$$D', function (v) {
C$.c$.apply(this, []);
this.set$D(v);
}, 1);

Clazz.newMeth(C$, 'c$$java_math_BigInteger', function (v) {
C$.c$.apply(this, []);
this.set$java_math_BigInteger(v);
}, 1);

Clazz.newMeth(C$, 'c$$java_math_BigDecimal', function (v) {
C$.c$.apply(this, []);
this.set$java_math_BigDecimal(v);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (numStr) {
C$.c$.apply(this, []);
this.set$java_math_BigDecimal(Clazz.new_($I$(2,1).c$$S,[numStr]));
}, 1);

Clazz.newMeth(C$, 'c$$net_imagej_types_PreciseFixedFloatType', function (other) {
;C$.$init$.apply(this);
this.scale=other.scale;
this.amount=other.amount;
}, 1);

Clazz.newMeth(C$, 'get$', function () {
var numer=Clazz.new_($I$(2,1).c$$java_math_BigInteger,[this.amount]);
var denom=Clazz.new_($I$(2,1).c$$java_math_BigInteger,[this.scale]);
return numer.divide$java_math_BigDecimal(denom);
});

Clazz.newMeth(C$, 'getRealDouble$', function () {
return this.get$().doubleValue$();
});

Clazz.newMeth(C$, 'getRealFloat$', function () {
return this.get$().floatValue$();
});

Clazz.newMeth(C$, 'getImaginaryDouble$', function () {
return 0;
});

Clazz.newMeth(C$, 'getImaginaryFloat$', function () {
return 0;
});

Clazz.newMeth(C$, 'setReal$F', function (v) {
this.set$D(v);
});

Clazz.newMeth(C$, 'setReal$D', function (v) {
this.set$D(v);
});

Clazz.newMeth(C$, 'setImaginary$F', function (v) {
});

Clazz.newMeth(C$, 'setImaginary$D', function (v) {
});

Clazz.newMeth(C$, 'setComplexNumber$F$F', function (r, i) {
this.set$D(r);
});

Clazz.newMeth(C$, 'setComplexNumber$D$D', function (r, i) {
this.set$D(r);
});

Clazz.newMeth(C$, 'getPowerFloat$', function () {
return this.getRealFloat$();
});

Clazz.newMeth(C$, 'getPowerDouble$', function () {
return this.getRealDouble$();
});

Clazz.newMeth(C$, 'getPhaseFloat$', function () {
return 0;
});

Clazz.newMeth(C$, 'getPhaseDouble$', function () {
return 0;
});

Clazz.newMeth(C$, 'complexConjugate$', function () {
});

Clazz.newMeth(C$, 'negate$', function () {
this.amount=this.amount.negate$();
});

Clazz.newMeth(C$, 'abs$', function () {
if (this.amount.compareTo$java_math_BigInteger($I$(1).ZERO) < 0) this.negate$();
});

Clazz.newMeth(C$, 'pow$I', function (power) {
if (power < 0) {
var factor=Clazz.new_(C$.c$$net_imagej_types_PreciseFixedFloatType,[this]);
for (var i=0; i < (-power) + 1; i++) {
this.div$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType(this, factor);
}
} else if (power == 0) {
this.amount=this.scale;
} else {
var factor=Clazz.new_(C$.c$$net_imagej_types_PreciseFixedFloatType,[this]);
for (var p=1; p < power; p++) {
this.mul$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType(this, factor);
}
}});

Clazz.newMeth(C$, ['add$net_imagej_types_PreciseFixedFloatType','add$','add$TT'], function (v) {
this.add$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType(this, v);
});

Clazz.newMeth(C$, 'add$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType', function (a, b) {
this.amount=a.amount.add$java_math_BigInteger(b.amount);
});

Clazz.newMeth(C$, ['sub$net_imagej_types_PreciseFixedFloatType','sub$','sub$TT'], function (v) {
this.sub$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType(this, v);
});

Clazz.newMeth(C$, 'sub$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType', function (a, b) {
this.amount=a.amount.subtract$java_math_BigInteger(b.amount);
});

Clazz.newMeth(C$, ['mul$net_imagej_types_PreciseFixedFloatType','mul$','mul$TT'], function (v) {
this.mul$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType(this, v);
});

Clazz.newMeth(C$, 'mul$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType', function (a, b) {
this.amount=a.amount.multiply$java_math_BigInteger(b.amount).divide$java_math_BigInteger(this.scale);
});

Clazz.newMeth(C$, ['div$net_imagej_types_PreciseFixedFloatType','div$','div$TT'], function (v) {
this.div$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType(this, v);
});

Clazz.newMeth(C$, 'div$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType', function (a, b) {
this.amount=a.amount.multiply$java_math_BigInteger(this.scale).divide$java_math_BigInteger(b.amount);
});

Clazz.newMeth(C$, 'setZero$', function () {
this.amount=$I$(1).ZERO;
});

Clazz.newMeth(C$, 'setOne$', function () {
this.amount=this.scale;
});

Clazz.newMeth(C$, ['mul$F','mulnull'], function (v) {
this.mul$java_math_BigDecimal($I$(2).valueOf$D(v));
});

Clazz.newMeth(C$, ['mul$D','mulnull'], function (v) {
this.mul$java_math_BigDecimal($I$(2).valueOf$D(v));
});

Clazz.newMeth(C$, ['mul$java_math_BigInteger','mulnull'], function (v) {
this.amount=this.amount.multiply$java_math_BigInteger(v);
});

Clazz.newMeth(C$, ['mul$java_math_BigDecimal','mulnull'], function (v) {
var integer=Clazz.new_($I$(2,1).c$$java_math_BigInteger,[this.amount]);
var number=integer.multiply$java_math_BigDecimal(v);
this.amount=number.toBigInteger$();
});

Clazz.newMeth(C$, 'createVariable$', function () {
return Clazz.new_(C$);
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$net_imagej_types_PreciseFixedFloatType,[this]);
});

Clazz.newMeth(C$, ['set$net_imagej_types_PreciseFixedFloatType','set$TT'], function (other) {
this.scale=other.scale;
this.amount=other.amount;
});

Clazz.newMeth(C$, ['set$D','setnull'], function (v) {
this.set$java_math_BigDecimal($I$(2).valueOf$D(v));
});

Clazz.newMeth(C$, ['set$J','setnull'], function (v) {
this.set$java_math_BigInteger($I$(1).valueOf$J(v));
});

Clazz.newMeth(C$, ['set$java_math_BigInteger','setnull'], function (v) {
this.amount=v.multiply$java_math_BigInteger(this.scale);
});

Clazz.newMeth(C$, ['set$java_math_BigDecimal','setnull'], function (v) {
var scaled=v.multiply$java_math_BigDecimal(Clazz.new_($I$(2,1).c$$java_math_BigInteger,[this.scale]));
this.amount=scaled.toBigInteger$();
});

Clazz.newMeth(C$, ['compareTo$net_imagej_types_PreciseFixedFloatType','compareTo$','compareTo$TT'], function (other) {
return this.amount.compareTo$java_math_BigInteger(other.amount);
});

Clazz.newMeth(C$, 'inc$', function () {
this.amount=this.amount.add$java_math_BigInteger(this.scale);
});

Clazz.newMeth(C$, 'dec$', function () {
this.amount=this.amount.subtract$java_math_BigInteger(this.scale);
});

Clazz.newMeth(C$, 'getMaxValue$', function () {
return 1.7976931348623157E308;
});

Clazz.newMeth(C$, 'getMinValue$', function () {
return -1.7976931348623157E308;
});

Clazz.newMeth(C$, 'getMinIncrement$', function () {
return 1.0 / Math.pow(10, 25);
});

Clazz.newMeth(C$, 'getBitsPerPixel$', function () {
return 1024;
});

Clazz.newMeth(C$, ['valueEquals$net_imagej_types_PreciseFixedFloatType','valueEquals$','valueEquals$TT'], function (t) {
return $I$(3).equals$O$O(this.get$(), t.get$());
});

Clazz.newMeth(C$, 'toString', function () {
return this.get$().toString();
});

Clazz.newMeth(C$, 'sqrt$net_imagej_types_PreciseFixedFloatType', function (c) {
var precision=Clazz.new_(C$);
precision.div$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType(C$.ONE, C$.SQRT_PRE);
return C$.sqrtNewtonRaphson$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType(c, C$.ONE, precision);
}, 1);

Clazz.newMeth(C$, 'sqrtNewtonRaphson$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType', function (c, xn, precision) {
var negC=Clazz.new_(C$.c$$net_imagej_types_PreciseFixedFloatType,[c]);
negC.negate$();
var fx=Clazz.new_(C$.c$$net_imagej_types_PreciseFixedFloatType,[xn]);
fx.pow$I(2);
fx.add$net_imagej_types_PreciseFixedFloatType(negC);
var fpx=Clazz.new_(C$);
fpx.mul$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType(xn, C$.TWO);
var xn1=Clazz.new_(C$);
xn1.div$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType(fx, fpx);
var negXn1=Clazz.new_(C$.c$$net_imagej_types_PreciseFixedFloatType,[xn1]);
negXn1.negate$();
xn1.add$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType(xn, negXn1);
var currentSquare=Clazz.new_(C$.c$$net_imagej_types_PreciseFixedFloatType,[xn1]);
currentSquare.pow$I(2);
var currentPrecision=Clazz.new_(C$);
currentPrecision.sub$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType(currentSquare, c);
currentPrecision.abs$();
if (xn.compareTo$net_imagej_types_PreciseFixedFloatType(xn1) == 0) {
return xn;
} else if (currentPrecision.compareTo$net_imagej_types_PreciseFixedFloatType(precision) > 0) {
return C$.sqrtNewtonRaphson$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType(c, xn1, precision);
}return xn1;
}, 1);

Clazz.newMeth(C$, 'atan2$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType', function (y, x) {
var tx=x.copy$();
var ty=y.copy$();
var angle=Clazz.new_(C$.c$$J,[0]);
if (tx.compareTo$net_imagej_types_PreciseFixedFloatType(C$.ZERO) < 0) {
angle.set$net_imagej_types_PreciseFixedFloatType(C$.PI);
tx.negate$();
ty.negate$();
} else if (ty.compareTo$net_imagej_types_PreciseFixedFloatType(C$.ZERO) < 0) angle.mul$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType(C$.TWO, C$.PI);
var xNew=Clazz.new_(C$);
var yNew=Clazz.new_(C$);
var dx=Clazz.new_(C$);
var dy=Clazz.new_(C$);
for (var j=0; j < C$.ANGLES.length; j++) {
var twoPowJ=C$.POWERS_OF_TWO[j];
dy.div$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType(ty, twoPowJ);
dx.div$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType(tx, twoPowJ);
if (ty.compareTo$net_imagej_types_PreciseFixedFloatType(C$.ZERO) < 0) {
xNew.sub$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType(tx, dy);
yNew.add$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType(ty, dx);
angle.sub$net_imagej_types_PreciseFixedFloatType(C$.ANGLES[j]);
} else {
xNew.add$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType(tx, dy);
yNew.sub$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType(ty, dx);
angle.add$net_imagej_types_PreciseFixedFloatType(C$.ANGLES[j]);
}tx.set$net_imagej_types_PreciseFixedFloatType(xNew);
ty.set$net_imagej_types_PreciseFixedFloatType(yNew);
}
return angle;
}, 1);

Clazz.newMeth(C$, 'angles$', function () {
return Clazz.array(C$, -1, [Clazz.new_(C$.c$$S,["0.7853981633974483096156608458198757210492923498437764"]), Clazz.new_(C$.c$$S,["0.4636476090008061162142562314612144020285370542861202"]), Clazz.new_(C$.c$$S,["0.2449786631268641541720824812112758109141440983811840"]), Clazz.new_(C$.c$$S,["0.1243549945467614350313548491638710255731701917698040"]), Clazz.new_(C$.c$$S,["0.0624188099959573484739791129855051136062738877974991"]), Clazz.new_(C$.c$$S,["0.0312398334302682762537117448924909770324956637254000"]), Clazz.new_(C$.c$$S,["0.0156237286204768308028015212565703189111141398009054"]), Clazz.new_(C$.c$$S,["0.0078123410601011112964633918421992816212228117250147"]), Clazz.new_(C$.c$$S,["0.0039062301319669718276286653114243871403574901152028"]), Clazz.new_(C$.c$$S,["0.0019531225164788186851214826250767139316107467772335"]), Clazz.new_(C$.c$$S,["0.0009765621895593194304034301997172908516341970158100"]), Clazz.new_(C$.c$$S,["0.0004882812111948982754692396256448486661923611331350"]), Clazz.new_(C$.c$$S,["0.0002441406201493617640167229432596599862124177909706"]), Clazz.new_(C$.c$$S,["0.0001220703118936702042390586461179563009308294090157"]), Clazz.new_(C$.c$$S,["0.0000610351561742087750216625691738291537851435368333"]), Clazz.new_(C$.c$$S,["0.0000305175781155260968618259534385360197509496751194"]), Clazz.new_(C$.c$$S,["0.0000152587890613157621072319358126978851374292381445"]), Clazz.new_(C$.c$$S,["0.0000076293945311019702633884823401050905863507439184"]), Clazz.new_(C$.c$$S,["0.0000038146972656064962829230756163729937228052573039"]), Clazz.new_(C$.c$$S,["0.0000019073486328101870353653693059172441687143421654"]), Clazz.new_(C$.c$$S,["0.00000095367431640596087942067068992311239001963412449"]), Clazz.new_(C$.c$$S,["0.00000047683715820308885992758382144924707587049404378"]), Clazz.new_(C$.c$$S,["0.00000023841857910155798249094797721893269783096898769"]), Clazz.new_(C$.c$$S,["0.00000011920928955078068531136849713792211264596758766"]), Clazz.new_(C$.c$$S,["0.000000059604644775390554413921062141788874250030195782"]), Clazz.new_(C$.c$$S,["0.000000029802322387695303676740132767709503349043907067"]), Clazz.new_(C$.c$$S,["0.000000014901161193847655147092516595963247108248930025"]), Clazz.new_(C$.c$$S,["0.0000000074505805969238279871365645744953921132066925545"]), Clazz.new_(C$.c$$S,["0.0000000037252902984619140452670705718119235836719483287"]), Clazz.new_(C$.c$$S,["0.0000000018626451492309570290958838214764904345065282835"]), Clazz.new_(C$.c$$S,["0.0000000009313225746154785153557354776845613038929264961"]), Clazz.new_(C$.c$$S,["0.0000000004656612873077392577788419347105701629734786389"]), Clazz.new_(C$.c$$S,["0.0000000002328306436538696289020427418388212703712742932"]), Clazz.new_(C$.c$$S,["0.0000000001164153218269348144525990927298526587963964573"]), Clazz.new_(C$.c$$S,["0.00000000005820766091346740722649676159123158234954915625"]), Clazz.new_(C$.c$$S,["0.00000000002910383045673370361327303269890394779369363200"]), Clazz.new_(C$.c$$S,["0.00000000001455191522836685180663959783736299347421170360"]), Clazz.new_(C$.c$$S,["0.000000000007275957614183425903320184104670374184276462938"]), Clazz.new_(C$.c$$S,["0.000000000003637978807091712951660140200583796773034557866"]), Clazz.new_(C$.c$$S,["0.000000000001818989403545856475830076118822974596629319733"]), Clazz.new_(C$.c$$S,["0.0000000000009094947017729282379150388117278718245786649666"]), Clazz.new_(C$.c$$S,["0.0000000000004547473508864641189575194999034839780723331208"]), Clazz.new_(C$.c$$S,["0.0000000000002273736754432320594787597617066854972590416401"]), Clazz.new_(C$.c$$S,["0.0000000000001136868377216160297393798823227106871573802050"]), Clazz.new_(C$.c$$S,["0.00000000000005684341886080801486968994134502633589467252562"])]);
}, 1);

Clazz.newMeth(C$, 'powersOfTwo$', function () {
var powers=Clazz.array(C$, [C$.ANGLES.length]);
var term=Clazz.new_(C$.c$$J,[1]);
for (var i=0; i < C$.ANGLES.length; i++) {
powers[i]=term.copy$();
term.mul$net_imagej_types_PreciseFixedFloatType(C$.TWO);
}
return powers;
}, 1);

Clazz.newMeth(C$, 'sqrtPrecision$', function () {
var prec=Clazz.new_(C$.c$$J,[10]);
prec.pow$I(24);
return prec;
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:04 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
