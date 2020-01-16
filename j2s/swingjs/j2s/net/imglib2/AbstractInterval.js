(function(){var P$=Clazz.newPackage("net.imglib2"),I$=[[0,'StringBuilder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractInterval", null, 'net.imglib2.AbstractEuclideanSpace', 'net.imglib2.Interval');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['min','long[]','+max']]]

Clazz.newMeth(C$, 'c$$I', function (n) {
;C$.superclazz.c$$I.apply(this,[n]);C$.$init$.apply(this);
this.min=Clazz.array(Long.TYPE, [n]);
this.max=Clazz.array(Long.TYPE, [n]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_Interval', function (interval) {
C$.c$$I.apply(this, [interval.numDimensions$()]);
interval.min$JA(this.min);
interval.max$JA(this.max);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_Dimensions', function (dimensions) {
C$.c$$I.apply(this, [dimensions.numDimensions$()]);
for (var d=0; d < this.n; ++d) this.max[d]=dimensions.dimension$I(d) - 1;

}, 1);

Clazz.newMeth(C$, 'c$$JA$JA', function (min, max) {
C$.c$$I.apply(this, [min.length]);
Clazz.assert(C$, this, function(){return min.length == max.length});
for (var d=0; d < this.n; ++d) {
this.min[d]=min[d];
this.max[d]=max[d];
}
}, 1);

Clazz.newMeth(C$, 'c$$JA', function (dimensions) {
C$.c$$I.apply(this, [dimensions.length]);
for (var d=0; d < this.n; ++d) this.max[d]=dimensions[d] - 1;

}, 1);

Clazz.newMeth(C$, 'realMin$I', function (d) {
Clazz.assert(C$, this, function(){return d >= 0});
Clazz.assert(C$, this, function(){return d < this.n});
return this.min[d];
});

Clazz.newMeth(C$, 'realMin$DA', function (minimum) {
Clazz.assert(C$, this, function(){return minimum.length == this.n});
for (var d=0; d < this.n; ++d) minimum[d]=this.min[d];

});

Clazz.newMeth(C$, 'realMin$net_imglib2_RealPositionable', function (minimum) {
Clazz.assert(C$, this, function(){return minimum.numDimensions$() == this.n});
minimum.setPosition$JA(this.min);
});

Clazz.newMeth(C$, 'realMax$I', function (d) {
Clazz.assert(C$, this, function(){return d >= 0});
Clazz.assert(C$, this, function(){return d < this.n});
return this.max[d];
});

Clazz.newMeth(C$, 'realMax$DA', function (maximum) {
Clazz.assert(C$, this, function(){return maximum.length == this.n});
for (var d=0; d < this.n; ++d) maximum[d]=this.max[d];

});

Clazz.newMeth(C$, 'realMax$net_imglib2_RealPositionable', function (m) {
Clazz.assert(C$, this, function(){return m.numDimensions$() == this.n});
m.setPosition$JA(this.max);
});

Clazz.newMeth(C$, 'min$I', function (d) {
Clazz.assert(C$, this, function(){return d >= 0});
Clazz.assert(C$, this, function(){return d < this.n});
return this.min[d];
});

Clazz.newMeth(C$, 'min$JA', function (minimum) {
Clazz.assert(C$, this, function(){return minimum.length == this.n});
for (var d=0; d < this.n; ++d) minimum[d]=this.min[d];

});

Clazz.newMeth(C$, 'min$net_imglib2_Positionable', function (m) {
Clazz.assert(C$, this, function(){return m.numDimensions$() == this.n});
m.setPosition$JA(this.min);
});

Clazz.newMeth(C$, 'max$I', function (d) {
Clazz.assert(C$, this, function(){return d >= 0});
Clazz.assert(C$, this, function(){return d < this.n});
return this.max[d];
});

Clazz.newMeth(C$, 'max$JA', function (maximum) {
Clazz.assert(C$, this, function(){return maximum.length == this.n});
for (var d=0; d < this.n; ++d) maximum[d]=this.max[d];

});

Clazz.newMeth(C$, 'max$net_imglib2_Positionable', function (m) {
Clazz.assert(C$, this, function(){return m.numDimensions$() == this.n});
m.setPosition$JA(this.max);
});

Clazz.newMeth(C$, 'dimensions$JA', function (dimensions) {
Clazz.assert(C$, this, function(){return dimensions.length == this.n});
for (var d=0; d < this.n; ++d) dimensions[d]=this.max[d] - this.min[d] + 1;

});

Clazz.newMeth(C$, 'dimension$I', function (d) {
Clazz.assert(C$, this, function(){return d >= 0});
Clazz.assert(C$, this, function(){return d < this.n});
return this.max[d] - this.min[d] + 1;
});

Clazz.newMeth(C$, 'toString', function () {
var sb=Clazz.new_($I$(1,1));
var className=this.getClass$().getSimpleName$();
sb.append$S(className);
sb.append$S(" [(");
for (var d=0; d < this.n; d++) {
sb.append$J(this.min[d]);
if (d < this.n - 1) sb.append$S(", ");
}
sb.append$S(") -- (");
for (var d=0; d < this.n; d++) {
sb.append$J(this.max[d]);
if (d < this.n - 1) sb.append$S(", ");
}
sb.append$S(") = ");
for (var d=0; d < this.n; d++) {
sb.append$J(this.dimension$I(d));
if (d < this.n - 1) sb.append$S("x");
}
sb.append$S("]");
return sb.toString();
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:04 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
