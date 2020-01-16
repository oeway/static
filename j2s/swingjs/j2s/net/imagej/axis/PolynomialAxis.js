(function(){var P$=Clazz.newPackage("net.imagej.axis"),I$=[[0,'net.imagej.axis.Axes','StringBuilder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PolynomialAxis", null, 'net.imagej.axis.VariableAxis');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.VARS=Clazz.array(String, -1, ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "z"]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['VARS','String[]']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$net_imagej_axis_AxisType$S$DA.apply(this, [$I$(1).unknown$(), null, [0, 0, 1]]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imagej_axis_AxisType$S$DA', function (type, unit, coeffs) {
;C$.superclazz.c$$net_imagej_axis_AxisType.apply(this,[type]);C$.$init$.apply(this);
this.setUnit$S(unit);
for (var i=0; i < coeffs.length; i++) {
this.setCoeff$I$D(i, coeffs[i]);
}
if (coeffs.length > C$.VARS.length) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["polynomial axis limited to " + C$.VARS.length + " coefficients" ]);
}}, 1);

Clazz.newMeth(C$, 'degree$', function () {
var degree=-1;
for (var i=0; i < C$.VARS.length; i++) {
if (this.coeff$I(i) != 0 ) degree=i;
}
return degree;
});

Clazz.newMeth(C$, 'coeff$I', function (i) {
var value=i < C$.VARS.length ? this.get$S(C$.VARS[i]) : null;
return value == null  ? 0 : (value).valueOf();
});

Clazz.newMeth(C$, 'setCoeff$I$D', function (i, v) {
if (i >= C$.VARS.length) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["polynomial axis limited to " + C$.VARS.length + " coefficients" ]);
}this.set$S$Double(C$.VARS[i], new Double(v));
});

Clazz.newMeth(C$, 'calibratedValue$D', function (rawValue) {
var term=rawValue;
var result=this.coeff$I(0);
for (var i=1; i <= this.degree$(); i++) {
result += this.coeff$I(i) * term;
term *= rawValue;
}
return result;
});

Clazz.newMeth(C$, 'rawValue$D', function (calibratedValue) {
return NaN;
});

Clazz.newMeth(C$, 'generalEquation$', function () {
var v=0;
var builder=Clazz.new_($I$(2,1));
builder.append$S("y = ");
for (var i=0; i <= this.degree$(); i++) {
if (this.coeff$I(i) == 0 ) continue;
if (i != 0) builder.append$S(" + ");
builder.append$S(C$.VARS[v++]);
if (i != 0) {
builder.append$S("*x");
if (i > 1) {
builder.append$S("^");
builder.append$I(i);
}}}
return builder.toString();
});

Clazz.newMeth(C$, 'copy$', function () {
var axis=Clazz.new_(C$.c$$net_imagej_axis_AxisType$S$DA,[this.type$(), this.unit$(), []]);
for (var i=0; i <= this.degree$(); i++) {
axis.setCoeff$I$D(i, this.coeff$I(i));
}
return axis;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:57 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
