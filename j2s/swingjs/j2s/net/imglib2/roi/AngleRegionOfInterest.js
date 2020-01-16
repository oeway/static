(function(){var P$=Clazz.newPackage("net.imglib2.roi"),I$=[[0,'net.imglib2.roi.LineRegionOfInterest']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AngleRegionOfInterest", null, 'net.imglib2.roi.AbstractRegionOfInterest');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['ctr','double[]','+end1','+end2','line1','net.imglib2.roi.LineRegionOfInterest','+line2']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$I.apply(this,[2]);C$.$init$.apply(this);
this.ctr=Clazz.array(Double.TYPE, [2]);
this.end1=Clazz.array(Double.TYPE, [2]);
this.end2=Clazz.array(Double.TYPE, [2]);
this.line1=Clazz.new_($I$(1,1).c$$DA$DA,[this.ctr, this.end1]);
this.line2=Clazz.new_($I$(1,1).c$$DA$DA,[this.ctr, this.end2]);
this.invalidateCachedState$();
}, 1);

Clazz.newMeth(C$, 'c$$DA$DA$DA', function (ctr, e1, e2) {
;C$.superclazz.c$$I.apply(this,[ctr.length]);C$.$init$.apply(this);
Clazz.assert(C$, this, function(){return ctr.length == e1.length});
Clazz.assert(C$, this, function(){return ctr.length == e2.length});
this.ctr=ctr;
this.end1=e1;
this.end2=e2;
this.line1=Clazz.new_($I$(1,1).c$$DA$DA,[ctr, this.end1]);
this.line2=Clazz.new_($I$(1,1).c$$DA$DA,[ctr, this.end2]);
this.invalidateCachedState$();
}, 1);

Clazz.newMeth(C$, 'getPoint1$DA', function (pt) {
System.arraycopy$O$I$O$I$I(this.end1, 0, pt, 0, this.end1.length);
});

Clazz.newMeth(C$, 'getPoint2$DA', function (pt) {
System.arraycopy$O$I$O$I$I(this.end2, 0, pt, 0, this.end2.length);
});

Clazz.newMeth(C$, 'getCenter$DA', function (pt) {
System.arraycopy$O$I$O$I$I(this.ctr, 0, pt, 0, this.ctr.length);
});

Clazz.newMeth(C$, 'setPoint1$DA', function (pt) {
System.arraycopy$O$I$O$I$I(pt, 0, this.end1, 0, this.end1.length);
this.invalidateCachedState$();
});

Clazz.newMeth(C$, 'setPoint2$DA', function (pt) {
System.arraycopy$O$I$O$I$I(pt, 0, this.end2, 0, this.end2.length);
this.invalidateCachedState$();
});

Clazz.newMeth(C$, 'setCenter$DA', function (pt) {
System.arraycopy$O$I$O$I$I(pt, 0, this.ctr, 0, this.ctr.length);
this.invalidateCachedState$();
});

Clazz.newMeth(C$, 'getPoint1$I', function (dim) {
return this.end1[dim];
});

Clazz.newMeth(C$, 'getPoint2$I', function (dim) {
return this.end2[dim];
});

Clazz.newMeth(C$, 'getCenter$I', function (dim) {
return this.ctr[dim];
});

Clazz.newMeth(C$, 'setPoint1$D$I', function (val, dim) {
this.end1[dim]=val;
this.invalidateCachedState$();
});

Clazz.newMeth(C$, 'setPoint2$D$I', function (val, dim) {
this.end2[dim]=val;
this.invalidateCachedState$();
});

Clazz.newMeth(C$, 'setCenter$D$I', function (val, dim) {
this.ctr[dim]=val;
this.invalidateCachedState$();
});

Clazz.newMeth(C$, 'move$D$I', function (displacement, d) {
this.ctr[d] += displacement;
this.end1[d] += displacement;
this.end2[d] += displacement;
this.line1.move$D$I(displacement, d);
this.line2.move$D$I(displacement, d);
this.invalidateCachedState$();
});

Clazz.newMeth(C$, 'contains$DA', function (position) {
return this.line1.contains$DA(position) || this.line2.contains$DA(position) ;
});

Clazz.newMeth(C$, 'getRealExtrema$DA$DA', function (minima, maxima) {
for (var i=0; i < this.ctr.length; i++) {
minima[i]=Math.min(Math.min(this.end1[i], this.end2[i]), this.ctr[i]);
maxima[i]=Math.max(Math.max(this.end1[i], this.end2[i]), this.ctr[i]);
}
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:52 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
