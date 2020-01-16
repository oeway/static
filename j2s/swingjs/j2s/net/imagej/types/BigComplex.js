(function(){var P$=Clazz.newPackage("net.imagej.types"),p$1={},I$=[[0,'java.math.BigDecimal','java.math.RoundingMode','java.util.Objects']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BigComplex", null, null, 'net.imglib2.type.numeric.ComplexType');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.TWO=Clazz.new_($I$(1,1).c$$I,[2]);
C$.SQRT_PRE=Clazz.new_($I$(1,1).c$$I,[10]).pow$I(50);
C$.PI=Clazz.new_($I$(1,1).c$$S,["3.14159265358979323846264338327950288419716939937510"]);
C$.E=Clazz.new_($I$(1,1).c$$S,["2.71828182845904523536028747135266249775724709369995"]);
{
C$.ANGLES=C$.angles$();
C$.POWERS_OF_TWO=C$.powersOfTwo$I(C$.ANGLES.length);
};
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['r','java.math.BigDecimal','+i']]
,['O',['TWO','java.math.BigDecimal','+SQRT_PRE','+PI','+E','ANGLES','java.math.BigDecimal[]','+POWERS_OF_TWO']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.setZero$();
}, 1);

Clazz.newMeth(C$, 'c$$J$J', function (r, i) {
;C$.$init$.apply(this);
this.setReal$J(r);
this.setImag$J(i);
}, 1);

Clazz.newMeth(C$, 'c$$D$D', function (r, i) {
;C$.$init$.apply(this);
this.setReal$D(r);
this.setImag$D(i);
}, 1);

Clazz.newMeth(C$, 'c$$java_math_BigInteger$java_math_BigInteger', function (r, i) {
;C$.$init$.apply(this);
this.setReal$java_math_BigInteger(r);
this.setImag$java_math_BigInteger(i);
}, 1);

Clazz.newMeth(C$, 'c$$java_math_BigDecimal$java_math_BigDecimal', function (r, i) {
;C$.$init$.apply(this);
this.setReal$java_math_BigDecimal(r);
this.setImag$java_math_BigDecimal(i);
}, 1);

Clazz.newMeth(C$, 'c$$S$S', function (r, i) {
;C$.$init$.apply(this);
this.setReal$S(r);
this.setImag$S(i);
}, 1);

Clazz.newMeth(C$, 'getReal$', function () {
return this.r;
});

Clazz.newMeth(C$, 'getImag$', function () {
return this.i;
});

Clazz.newMeth(C$, ['set$net_imagej_types_BigComplex','set$TT'], function (other) {
this.r=other.r;
this.i=other.i;
});

Clazz.newMeth(C$, 'set$J$J', function (r, i) {
this.setReal$J(r);
this.setImag$J(i);
});

Clazz.newMeth(C$, 'set$D$D', function (r, i) {
this.setReal$D(r);
this.setImag$D(i);
});

Clazz.newMeth(C$, 'set$java_math_BigInteger$java_math_BigInteger', function (r, i) {
this.setReal$java_math_BigInteger(r);
this.setImag$java_math_BigInteger(i);
});

Clazz.newMeth(C$, 'set$java_math_BigDecimal$java_math_BigDecimal', function (r, i) {
this.setReal$java_math_BigDecimal(r);
this.setImag$java_math_BigDecimal(i);
});

Clazz.newMeth(C$, 'set$S$S', function (r, i) {
this.setReal$S(r);
this.setImag$S(i);
});

Clazz.newMeth(C$, 'setReal$J', function (r) {
this.r=$I$(1).valueOf$J(r);
});

Clazz.newMeth(C$, 'setReal$F', function (f) {
this.r=$I$(1).valueOf$D(f);
});

Clazz.newMeth(C$, 'setReal$D', function (r) {
this.r=$I$(1).valueOf$D(r);
});

Clazz.newMeth(C$, 'setReal$java_math_BigInteger', function (r) {
this.r=Clazz.new_($I$(1,1).c$$java_math_BigInteger,[r]);
});

Clazz.newMeth(C$, 'setReal$java_math_BigDecimal', function (r) {
this.r=r;
});

Clazz.newMeth(C$, 'setReal$S', function (r) {
this.r=Clazz.new_($I$(1,1).c$$S,[r]);
});

Clazz.newMeth(C$, 'setImag$J', function (i) {
this.i=$I$(1).valueOf$J(i);
});

Clazz.newMeth(C$, 'setImag$D', function (i) {
this.i=$I$(1).valueOf$D(i);
});

Clazz.newMeth(C$, 'setImag$java_math_BigInteger', function (i) {
this.i=Clazz.new_($I$(1,1).c$$java_math_BigInteger,[i]);
});

Clazz.newMeth(C$, 'setImag$java_math_BigDecimal', function (i) {
this.i=i;
});

Clazz.newMeth(C$, 'setImag$S', function (i) {
this.i=Clazz.new_($I$(1,1).c$$S,[i]);
});

Clazz.newMeth(C$, 'setImaginary$F', function (f) {
this.i=$I$(1).valueOf$D(f);
});

Clazz.newMeth(C$, 'setImaginary$D', function (f) {
this.i=$I$(1).valueOf$D(f);
});

Clazz.newMeth(C$, 'setComplexNumber$F$F', function (r, i) {
this.setReal$F(r);
this.setImag$D(i);
});

Clazz.newMeth(C$, 'setComplexNumber$D$D', function (r, i) {
this.setReal$D(r);
this.setImag$D(i);
});

Clazz.newMeth(C$, 'setComplexNumber$java_math_BigDecimal$java_math_BigDecimal', function (r, i) {
this.setReal$java_math_BigDecimal(r);
this.setImag$java_math_BigDecimal(i);
});

Clazz.newMeth(C$, 'setComplexNumber$S$S', function (r, i) {
this.setReal$S(r);
this.setImag$S(i);
});

Clazz.newMeth(C$, 'setZero$', function () {
this.r=$I$(1).ZERO;
this.i=$I$(1).ZERO;
});

Clazz.newMeth(C$, 'setOne$', function () {
this.r=$I$(1).ONE;
this.i=$I$(1).ZERO;
});

Clazz.newMeth(C$, 'createVariable$', function () {
return Clazz.new_(C$);
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$java_math_BigDecimal$java_math_BigDecimal,[this.r, this.i]);
});

Clazz.newMeth(C$, 'add$net_imagej_types_BigComplex$net_imagej_types_BigComplex', function (a, b) {
this.r=a.r.add$java_math_BigDecimal(b.r);
this.i=a.i.add$java_math_BigDecimal(b.i);
});

Clazz.newMeth(C$, ['add$net_imagej_types_BigComplex','add$','add$TT'], function (other) {
this.add$net_imagej_types_BigComplex$net_imagej_types_BigComplex(this, other);
});

Clazz.newMeth(C$, 'sub$net_imagej_types_BigComplex$net_imagej_types_BigComplex', function (a, b) {
this.r=a.r.subtract$java_math_BigDecimal(b.r);
this.i=a.i.subtract$java_math_BigDecimal(b.i);
});

Clazz.newMeth(C$, ['sub$net_imagej_types_BigComplex','sub$','sub$TT'], function (other) {
this.sub$net_imagej_types_BigComplex$net_imagej_types_BigComplex(this, other);
});

Clazz.newMeth(C$, 'mul$net_imagej_types_BigComplex$net_imagej_types_BigComplex', function (a, b) {
var t1=a.r.multiply$java_math_BigDecimal(b.r);
var t2=a.i.multiply$java_math_BigDecimal(b.i);
var sum1=t1.subtract$java_math_BigDecimal(t2);
t1=a.i.multiply$java_math_BigDecimal(b.r);
t2=a.r.multiply$java_math_BigDecimal(b.i);
var sum2=t1.add$java_math_BigDecimal(t2);
this.r=sum1;
this.i=sum2;
});

Clazz.newMeth(C$, ['mul$net_imagej_types_BigComplex','mul$','mul$TT'], function (other) {
this.mul$net_imagej_types_BigComplex$net_imagej_types_BigComplex(this, other);
});

Clazz.newMeth(C$, 'div$net_imagej_types_BigComplex$net_imagej_types_BigComplex', function (a, b) {
var t1=b.r.multiply$java_math_BigDecimal(b.r);
var t2=b.i.multiply$java_math_BigDecimal(b.i);
var denom=t1.add$java_math_BigDecimal(t2);
t1=a.r.multiply$java_math_BigDecimal(b.r);
t2=a.i.multiply$java_math_BigDecimal(b.i);
var sum1=t1.add$java_math_BigDecimal(t2);
t1=a.i.multiply$java_math_BigDecimal(b.r);
t2=a.r.multiply$java_math_BigDecimal(b.i);
var sum2=t1.subtract$java_math_BigDecimal(t2);
this.r=sum1.divide$java_math_BigDecimal$I$java_math_RoundingMode(denom, 50, $I$(2).HALF_UP);
this.i=sum2.divide$java_math_BigDecimal$I$java_math_RoundingMode(denom, 50, $I$(2).HALF_UP);
});

Clazz.newMeth(C$, ['div$net_imagej_types_BigComplex','div$','div$TT'], function (other) {
this.div$net_imagej_types_BigComplex$net_imagej_types_BigComplex(this, other);
});

Clazz.newMeth(C$, ['mul$F','mulnull'], function (c) {
this.mul$net_imagej_types_BigComplex(Clazz.new_(C$.c$$java_math_BigDecimal$java_math_BigDecimal,[$I$(1).valueOf$D(c), $I$(1).ZERO]));
});

Clazz.newMeth(C$, ['mul$D','mulnull'], function (c) {
this.mul$net_imagej_types_BigComplex(Clazz.new_(C$.c$$java_math_BigDecimal$java_math_BigDecimal,[$I$(1).valueOf$D(c), $I$(1).ZERO]));
});

Clazz.newMeth(C$, 'complexConjugate$', function () {
this.i=this.i.negate$();
});

Clazz.newMeth(C$, 'getRealDouble$', function () {
return this.r.doubleValue$();
});

Clazz.newMeth(C$, 'getRealFloat$', function () {
return this.r.floatValue$();
});

Clazz.newMeth(C$, 'getImaginaryDouble$', function () {
return this.i.doubleValue$();
});

Clazz.newMeth(C$, 'getImaginaryFloat$', function () {
return this.i.floatValue$();
});

Clazz.newMeth(C$, 'getPowerFloat$', function () {
return p$1.modulus.apply(this, []).floatValue$();
});

Clazz.newMeth(C$, 'getPowerDouble$', function () {
return p$1.modulus.apply(this, []).doubleValue$();
});

Clazz.newMeth(C$, 'getPower$', function () {
return p$1.modulus.apply(this, []);
});

Clazz.newMeth(C$, 'getPhaseFloat$', function () {
return p$1.phase.apply(this, []).floatValue$();
});

Clazz.newMeth(C$, 'getPhaseDouble$', function () {
return p$1.phase.apply(this, []).doubleValue$();
});

Clazz.newMeth(C$, 'getPhase$', function () {
return p$1.phase.apply(this, []);
});

Clazz.newMeth(C$, 'PI$', function () {
this.setReal$java_math_BigDecimal(C$.PI);
this.setImag$java_math_BigDecimal($I$(1).ZERO);
});

Clazz.newMeth(C$, 'E$', function () {
this.setReal$java_math_BigDecimal(C$.E);
this.setImag$java_math_BigDecimal($I$(1).ZERO);
});

Clazz.newMeth(C$, ['valueEquals$net_imagej_types_BigComplex','valueEquals$','valueEquals$TT'], function (t) {
return $I$(3).equals$O$O(this.getReal$(), t.getReal$()) && $I$(3).equals$O$O(this.getImag$(), t.getImag$()) ;
});

Clazz.newMeth(C$, 'modulus', function () {
var a=this.r.multiply$java_math_BigDecimal(this.r);
var b=this.i.multiply$java_math_BigDecimal(this.i);
var sum=a.add$java_math_BigDecimal(b);
return C$.bigSqrt$java_math_BigDecimal(sum);
}, p$1);

Clazz.newMeth(C$, 'phase', function () {
return p$1.atan2$java_math_BigDecimal$java_math_BigDecimal.apply(this, [this.i, this.r]);
}, p$1);

Clazz.newMeth(C$, 'bigSqrt$java_math_BigDecimal', function (c) {
var precision=$I$(1).ONE.divide$java_math_BigDecimal$I$java_math_RoundingMode(C$.SQRT_PRE, 50, $I$(2).HALF_UP);
return C$.sqrtNewtonRaphson$java_math_BigDecimal$java_math_BigDecimal$java_math_BigDecimal(c, $I$(1).ONE, precision);
}, 1);

Clazz.newMeth(C$, 'sqrtNewtonRaphson$java_math_BigDecimal$java_math_BigDecimal$java_math_BigDecimal', function (c, xn, precision) {
var fx=xn.pow$I(2).add$java_math_BigDecimal(c.negate$());
var fpx=xn.multiply$java_math_BigDecimal(C$.TWO);
var xn1=fx.divide$java_math_BigDecimal$I$java_math_RoundingMode(fpx, 100, $I$(2).HALF_DOWN);
xn1=xn.add$java_math_BigDecimal(xn1.negate$());
var currentSquare=xn1.pow$I(2);
var currentPrecision=currentSquare.subtract$java_math_BigDecimal(c);
currentPrecision=currentPrecision.abs$();
if (currentPrecision.compareTo$java_math_BigDecimal(precision) <= 0) {
return xn1;
}return C$.sqrtNewtonRaphson$java_math_BigDecimal$java_math_BigDecimal$java_math_BigDecimal(c, xn1, precision);
}, 1);

Clazz.newMeth(C$, 'atan2$java_math_BigDecimal$java_math_BigDecimal', function (y, x) {
var tx=x;
var ty=y;
var angle=$I$(1).ZERO;
if (tx.compareTo$java_math_BigDecimal($I$(1).ZERO) < 0) {
angle=C$.PI;
tx=tx.negate$();
ty=ty.negate$();
} else if (ty.compareTo$java_math_BigDecimal($I$(1).ZERO) < 0) angle=C$.TWO.multiply$java_math_BigDecimal(C$.PI);
var xNew;
var yNew;
for (var j=0; j < C$.ANGLES.length; j++) {
var twoPowJ=C$.POWERS_OF_TWO[j];
var dx=tx.divide$java_math_BigDecimal$I$java_math_RoundingMode(twoPowJ, 50, $I$(2).HALF_UP);
var dy=ty.divide$java_math_BigDecimal$I$java_math_RoundingMode(twoPowJ, 50, $I$(2).HALF_UP);
if (ty.compareTo$java_math_BigDecimal($I$(1).ZERO) < 0) {
xNew=tx.subtract$java_math_BigDecimal(dy);
yNew=ty.add$java_math_BigDecimal(dx);
angle=angle.subtract$java_math_BigDecimal(C$.ANGLES[j]);
} else {
xNew=tx.add$java_math_BigDecimal(dy);
yNew=ty.subtract$java_math_BigDecimal(dx);
angle=angle.add$java_math_BigDecimal(C$.ANGLES[j]);
}tx=xNew;
ty=yNew;
}
return angle;
}, p$1);

Clazz.newMeth(C$, 'angles$', function () {
return Clazz.array($I$(1), -1, [Clazz.new_($I$(1,1).c$$S,["0.7853981633974483096156608458198757210492923498437764"]), Clazz.new_($I$(1,1).c$$S,["0.4636476090008061162142562314612144020285370542861202"]), Clazz.new_($I$(1,1).c$$S,["0.2449786631268641541720824812112758109141440983811840"]), Clazz.new_($I$(1,1).c$$S,["0.1243549945467614350313548491638710255731701917698040"]), Clazz.new_($I$(1,1).c$$S,["0.0624188099959573484739791129855051136062738877974991"]), Clazz.new_($I$(1,1).c$$S,["0.0312398334302682762537117448924909770324956637254000"]), Clazz.new_($I$(1,1).c$$S,["0.0156237286204768308028015212565703189111141398009054"]), Clazz.new_($I$(1,1).c$$S,["0.0078123410601011112964633918421992816212228117250147"]), Clazz.new_($I$(1,1).c$$S,["0.0039062301319669718276286653114243871403574901152028"]), Clazz.new_($I$(1,1).c$$S,["0.0019531225164788186851214826250767139316107467772335"]), Clazz.new_($I$(1,1).c$$S,["0.0009765621895593194304034301997172908516341970158100"]), Clazz.new_($I$(1,1).c$$S,["0.0004882812111948982754692396256448486661923611331350"]), Clazz.new_($I$(1,1).c$$S,["0.0002441406201493617640167229432596599862124177909706"]), Clazz.new_($I$(1,1).c$$S,["0.0001220703118936702042390586461179563009308294090157"]), Clazz.new_($I$(1,1).c$$S,["0.0000610351561742087750216625691738291537851435368333"]), Clazz.new_($I$(1,1).c$$S,["0.0000305175781155260968618259534385360197509496751194"]), Clazz.new_($I$(1,1).c$$S,["0.0000152587890613157621072319358126978851374292381445"]), Clazz.new_($I$(1,1).c$$S,["0.0000076293945311019702633884823401050905863507439184"]), Clazz.new_($I$(1,1).c$$S,["0.0000038146972656064962829230756163729937228052573039"]), Clazz.new_($I$(1,1).c$$S,["0.0000019073486328101870353653693059172441687143421654"]), Clazz.new_($I$(1,1).c$$S,["0.00000095367431640596087942067068992311239001963412449"]), Clazz.new_($I$(1,1).c$$S,["0.00000047683715820308885992758382144924707587049404378"]), Clazz.new_($I$(1,1).c$$S,["0.00000023841857910155798249094797721893269783096898769"]), Clazz.new_($I$(1,1).c$$S,["0.00000011920928955078068531136849713792211264596758766"]), Clazz.new_($I$(1,1).c$$S,["0.000000059604644775390554413921062141788874250030195782"]), Clazz.new_($I$(1,1).c$$S,["0.000000029802322387695303676740132767709503349043907067"]), Clazz.new_($I$(1,1).c$$S,["0.000000014901161193847655147092516595963247108248930025"]), Clazz.new_($I$(1,1).c$$S,["0.0000000074505805969238279871365645744953921132066925545"]), Clazz.new_($I$(1,1).c$$S,["0.0000000037252902984619140452670705718119235836719483287"]), Clazz.new_($I$(1,1).c$$S,["0.0000000018626451492309570290958838214764904345065282835"]), Clazz.new_($I$(1,1).c$$S,["0.0000000009313225746154785153557354776845613038929264961"]), Clazz.new_($I$(1,1).c$$S,["0.0000000004656612873077392577788419347105701629734786389"]), Clazz.new_($I$(1,1).c$$S,["0.0000000002328306436538696289020427418388212703712742932"]), Clazz.new_($I$(1,1).c$$S,["0.0000000001164153218269348144525990927298526587963964573"]), Clazz.new_($I$(1,1).c$$S,["0.00000000005820766091346740722649676159123158234954915625"]), Clazz.new_($I$(1,1).c$$S,["0.00000000002910383045673370361327303269890394779369363200"]), Clazz.new_($I$(1,1).c$$S,["0.00000000001455191522836685180663959783736299347421170360"]), Clazz.new_($I$(1,1).c$$S,["0.000000000007275957614183425903320184104670374184276462938"]), Clazz.new_($I$(1,1).c$$S,["0.000000000003637978807091712951660140200583796773034557866"]), Clazz.new_($I$(1,1).c$$S,["0.000000000001818989403545856475830076118822974596629319733"]), Clazz.new_($I$(1,1).c$$S,["0.0000000000009094947017729282379150388117278718245786649666"]), Clazz.new_($I$(1,1).c$$S,["0.0000000000004547473508864641189575194999034839780723331208"]), Clazz.new_($I$(1,1).c$$S,["0.0000000000002273736754432320594787597617066854972590416401"]), Clazz.new_($I$(1,1).c$$S,["0.0000000000001136868377216160297393798823227106871573802050"]), Clazz.new_($I$(1,1).c$$S,["0.00000000000005684341886080801486968994134502633589467252562"]), Clazz.new_($I$(1,1).c$$S,["0.00000000000002842170943040400743484497069547204198683406570"]), Clazz.new_($I$(1,1).c$$S,["0.00000000000001421085471520200371742248535060588024835425821"]), Clazz.new_($I$(1,1).c$$S,["0.000000000000007105427357601001858711242675661672531044282276"]), Clazz.new_($I$(1,1).c$$S,["0.000000000000003552713678800500929355621337875677816380535284"]), Clazz.new_($I$(1,1).c$$S,["0.000000000000001776356839400250464677810668943444102047566910"]), Clazz.new_($I$(1,1).c$$S,["0.0000000000000008881784197001252323389053344724227002559458638"]), Clazz.new_($I$(1,1).c$$S,["0.0000000000000004440892098500626161694526672362989312819932329"]), Clazz.new_($I$(1,1).c$$S,["0.0000000000000002220446049250313080847263336181604132852491541"]), Clazz.new_($I$(1,1).c$$S,["0.0000000000000001110223024625156540423631668090815750981561442"]), Clazz.new_($I$(1,1).c$$S,["0.00000000000000005551115123125782702118158340454095860601951803"]), Clazz.new_($I$(1,1).c$$S,["0.00000000000000002775557561562891351059079170227050068512743975"]), Clazz.new_($I$(1,1).c$$S,["0.00000000000000001387778780781445675529539585113525301532842996"]), Clazz.new_($I$(1,1).c$$S,["0.000000000000000006938893903907228377647697925567626841759803746"])]);
}, 1);

Clazz.newMeth(C$, 'powersOfTwo$I', function (length) {
var powers=Clazz.array($I$(1), [length]);
var power=$I$(1).ONE;
for (var i=0; i < length; i++) {
powers[i]=power;
power=power.multiply$java_math_BigDecimal(C$.TWO);
}
return powers;
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:03 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
