(function(){var P$=Clazz.newPackage("net.imglib2.transform.integer"),I$=[[0,'net.imglib2.FinalInterval']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BoundingBox");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['n'],'O',['corner1','long[]','+corner2']]]

Clazz.newMeth(C$, 'c$$I', function (n) {
;C$.$init$.apply(this);
this.n=n;
this.corner1=Clazz.array(Long.TYPE, [n]);
this.corner2=Clazz.array(Long.TYPE, [n]);
}, 1);

Clazz.newMeth(C$, 'c$$JA$JA', function (corner1, corner2) {
;C$.$init$.apply(this);
Clazz.assert(C$, this, function(){return corner1.length == corner2.length});
this.n=corner1.length;
this.corner1=corner1.clone$();
this.corner2=corner2.clone$();
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_Interval', function (interval) {
;C$.$init$.apply(this);
this.n=interval.numDimensions$();
this.corner1=Clazz.array(Long.TYPE, [this.n]);
this.corner2=Clazz.array(Long.TYPE, [this.n]);
interval.min$JA(this.corner1);
interval.max$JA(this.corner2);
}, 1);

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.n;
});

Clazz.newMeth(C$, 'corner1$JA', function (c) {
Clazz.assert(C$, this, function(){return c.length >= this.n});
for (var d=0; d < this.n; ++d) c[d]=this.corner1[d];

});

Clazz.newMeth(C$, 'corner2$JA', function (c) {
Clazz.assert(C$, this, function(){return c.length >= this.n});
for (var d=0; d < this.n; ++d) c[d]=this.corner2[d];

});

Clazz.newMeth(C$, 'orderMinMax$', function () {
for (var d=0; d < this.n; ++d) {
if (this.corner1[d] > this.corner2[d]) {
var tmp=this.corner1[d];
this.corner1[d]=this.corner2[d];
this.corner2[d]=tmp;
}}
});

Clazz.newMeth(C$, 'getInterval$', function () {
this.orderMinMax$();
return Clazz.new_($I$(1,1).c$$JA$JA,[this.corner1, this.corner2]);
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:11 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
