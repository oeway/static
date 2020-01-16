(function(){var P$=Clazz.newPackage("net.imglib2.roi"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "LineRegionOfInterest", null, 'net.imglib2.roi.AbstractRegionOfInterest');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['p1','double[]','+p2','+tmpMin','+tmpMax','+lineVector','+tmpVector']]]

Clazz.newMeth(C$, 'c$$DA$DA', function (pt1, pt2) {
;C$.superclazz.c$$I.apply(this,[pt1.length]);C$.$init$.apply(this);
Clazz.assert(C$, this, function(){return pt1.length == pt2.length});
this.p1=pt1.clone$();
this.p2=pt2.clone$();
this.tmpMin=Clazz.array(Double.TYPE, [pt1.length]);
this.tmpMax=Clazz.array(Double.TYPE, [pt1.length]);
this.lineVector=Clazz.array(Double.TYPE, [pt1.length]);
this.tmpVector=Clazz.array(Double.TYPE, [pt1.length]);
this.invalidateCachedState$();
p$1.calcLineVector.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'getPoint1$DA', function (pt) {
System.arraycopy$O$I$O$I$I(this.p1, 0, pt, 0, this.p1.length);
});

Clazz.newMeth(C$, 'getPoint2$DA', function (pt) {
System.arraycopy$O$I$O$I$I(this.p2, 0, pt, 0, this.p2.length);
});

Clazz.newMeth(C$, 'setPoint1$DA', function (pt) {
System.arraycopy$O$I$O$I$I(pt, 0, this.p1, 0, this.p1.length);
this.invalidateCachedState$();
p$1.calcLineVector.apply(this, []);
});

Clazz.newMeth(C$, 'setPoint2$DA', function (pt) {
System.arraycopy$O$I$O$I$I(pt, 0, this.p2, 0, this.p2.length);
this.invalidateCachedState$();
p$1.calcLineVector.apply(this, []);
});

Clazz.newMeth(C$, 'getPoint1$I', function (dim) {
return this.p1[dim];
});

Clazz.newMeth(C$, 'getPoint2$I', function (dim) {
return this.p2[dim];
});

Clazz.newMeth(C$, 'setPoint1$D$I', function (val, dim) {
this.p1[dim]=val;
this.invalidateCachedState$();
p$1.calcLineVector.apply(this, []);
});

Clazz.newMeth(C$, 'setPoint2$D$I', function (val, dim) {
this.p2[dim]=val;
this.invalidateCachedState$();
p$1.calcLineVector.apply(this, []);
});

Clazz.newMeth(C$, 'move$D$I', function (displacement, d) {
this.p1[d] += displacement;
this.p2[d] += displacement;
this.invalidateCachedState$();
p$1.calcLineVector.apply(this, []);
});

Clazz.newMeth(C$, 'contains$DA', function (position) {
if (p$1.dist$DA$DA.apply(this, [this.p1, position]) < 0.5 ) return true;
if (p$1.dist$DA$DA.apply(this, [this.p2, position]) < 0.5 ) return true;
for (var i=0; i < this.p1.length; i++) this.tmpVector[i]=position[i] - this.p1[1];

var dotProduct=p$1.dot$DA$DA.apply(this, [this.lineVector, this.tmpVector]);
var magnitudeProduct=p$1.dist$DA$DA.apply(this, [this.p1, this.p2]);
magnitudeProduct *= p$1.dist$DA$DA.apply(this, [this.p1, position]);
var cosTheta=dotProduct / magnitudeProduct;
var nearCos0=(cosTheta > 0.99 ) && (cosTheta < 1.01 ) ;
var nearCos180=(cosTheta > -1.01 ) && (cosTheta < -0.99 ) ;
if ((!nearCos0 && !nearCos180 )) return false;
this.realMin$DA(this.tmpMin);
this.realMax$DA(this.tmpMax);
if (!p$1.outOfBounds$DA$DA$DA.apply(this, [this.tmpMin, this.tmpMax, position])) return true;
return false;
});

Clazz.newMeth(C$, 'getRealExtrema$DA$DA', function (minima, maxima) {
for (var i=0; i < this.p1.length; i++) {
minima[i]=Math.min(this.p1[i], this.p2[i]);
maxima[i]=Math.max(this.p1[i], this.p2[i]);
}
});

Clazz.newMeth(C$, 'calcLineVector', function () {
for (var i=0; i < this.p1.length; i++) this.lineVector[i]=this.p2[i] - this.p1[i];

}, p$1);

Clazz.newMeth(C$, 'dist$DA$DA', function (pt1, pt2) {
var sum=0;
for (var i=0; i < this.p1.length; i++) {
var term=pt2[i] - pt1[i];
sum += term * term;
}
return Math.sqrt(sum);
}, p$1);

Clazz.newMeth(C$, 'dot$DA$DA', function (vec1, vec2) {
var sum=0;
for (var i=0; i < this.p1.length; i++) sum += vec1[i] * vec2[i];

return sum;
}, p$1);

Clazz.newMeth(C$, 'outOfBounds$DA$DA$DA', function (mn, mx, pt) {
for (var i=0; i < this.p1.length; i++) {
if (pt[i] < mn[i] ) return true;
if (pt[i] > mx[i] ) return true;
}
return false;
}, p$1);
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:52 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
