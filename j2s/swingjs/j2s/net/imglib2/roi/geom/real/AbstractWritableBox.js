(function(){var P$=Clazz.newPackage("net.imglib2.roi.geom.real"),I$=[[0,['net.imglib2.roi.geom.real.AbstractWritableBox','.BoxCenter'],'net.imglib2.roi.geom.real.Box']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractWritableBox", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'net.imglib2.AbstractRealInterval', 'net.imglib2.roi.geom.real.WritableBox');
C$.$classes$=[['BoxCenter',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$DA$DA', function (min, max) {
;C$.superclazz.c$$DA$DA.apply(this,[min, max]);C$.$init$.apply(this);
if (max.length < min.length) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Max array cannot be smaller than the min array"]);
}, 1);

Clazz.newMeth(C$, 'sideLength$I', function (d) {
return Math.abs(this.max[d] - this.min[d]);
});

Clazz.newMeth(C$, 'center$', function () {
var center=Clazz.array(Double.TYPE, [this.n]);
for (var d=0; d < this.n; d++) {
center[d]=(this.max[d] + this.min[d]) / 2.0;
}
return Clazz.new_($I$(1,1).c$$DA, [this, null, center]);
});

Clazz.newMeth(C$, 'setSideLength$I$D', function (d, length) {
if (length < 0 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot have negative edge lengths "]);
var center=(this.max[d] + this.min[d]) / 2.0;
this.max[d]=center + length / 2.0;
this.min[d]=center - length / 2.0;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
return Clazz.instanceOf(obj, "net.imglib2.roi.geom.real.Box") && $I$(2).equals$net_imglib2_roi_geom_real_Box$net_imglib2_roi_geom_real_Box(this, obj) ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return $I$(2).hashCode$net_imglib2_roi_geom_real_Box(this);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.AbstractWritableBox, "BoxCenter", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'net.imglib2.roi.util.AbstractRealMaskPoint');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$DA', function (center) {
;C$.superclazz.c$$DA.apply(this,[center]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'updateBounds$', function () {
for (var d=0; d < this.n; d++) {
var halfSideLength=this.this$0.sideLength$I.apply(this.this$0, [d]) / 2.0;
this.this$0.max[d]=this.position[d] + halfSideLength;
this.this$0.min[d]=this.position[d] - halfSideLength;
}
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:53 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
