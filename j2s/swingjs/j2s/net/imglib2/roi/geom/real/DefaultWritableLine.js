(function(){var P$=Clazz.newPackage("net.imglib2.roi.geom.real"),I$=[[0,'java.util.Arrays','net.imglib2.util.Intervals','net.imglib2.roi.geom.GeomMaths',['net.imglib2.roi.geom.real.DefaultWritableLine','.LineEndPoint'],'net.imglib2.roi.geom.real.Line']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultWritableLine", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'net.imglib2.AbstractRealInterval', 'net.imglib2.roi.geom.real.WritableLine');
C$.$classes$=[['LineEndPoint',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['pointOne','double[]','+pointTwo']]]

Clazz.newMeth(C$, 'c$$net_imglib2_RealLocalizable$net_imglib2_RealLocalizable', function (pointOne, pointTwo) {
C$.c$$DA$DA$Z.apply(this, [C$.createArray$net_imglib2_RealLocalizable(pointOne), C$.createArray$net_imglib2_RealLocalizable(pointTwo), false]);
}, 1);

Clazz.newMeth(C$, 'c$$DA$DA$Z', function (pointOne, pointTwo, copy) {
;C$.superclazz.c$$I.apply(this,[Math.min(pointOne.length, pointTwo.length)]);C$.$init$.apply(this);
if (copy || pointOne.length != pointTwo.length ) {
this.pointOne=$I$(1).copyOf$DA$I(pointOne, this.n);
this.pointTwo=$I$(1).copyOf$DA$I(pointTwo, this.n);
} else {
this.pointOne=pointOne;
this.pointTwo=pointTwo;
}for (var d=0; d < this.n; d++) {
this.min[d]=Math.min(this.pointOne[d], this.pointTwo[d]);
this.max[d]=Math.max(this.pointOne[d], this.pointTwo[d]);
}
}, 1);

Clazz.newMeth(C$, ['test$net_imglib2_RealLocalizable','test$','test$TT'], function (l) {
if ($I$(2).contains$net_imglib2_RealInterval$net_imglib2_RealLocalizable(this, l)) {
return $I$(3).lineContains$DA$DA$net_imglib2_RealLocalizable$I(this.pointOne, this.pointTwo, l, this.n);
}return false;
});

Clazz.newMeth(C$, 'endpointOne$', function () {
return Clazz.new_($I$(4,1).c$$DA, [this, null, this.pointOne]);
});

Clazz.newMeth(C$, 'endpointTwo$', function () {
return Clazz.new_($I$(4,1).c$$DA, [this, null, this.pointTwo]);
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
return Clazz.instanceOf(obj, "net.imglib2.roi.geom.real.Line") && $I$(5).equals$net_imglib2_roi_geom_real_Line$net_imglib2_roi_geom_real_Line(this, obj) ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return $I$(5).hashCode$net_imglib2_roi_geom_real_Line(this);
});

Clazz.newMeth(C$, 'createArray$net_imglib2_RealLocalizable', function (l) {
var pt=Clazz.array(Double.TYPE, [l.numDimensions$()]);
l.localize$DA(pt);
return pt;
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultWritableLine, "LineEndPoint", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'net.imglib2.roi.util.AbstractRealMaskPoint');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$DA', function (pos) {
;C$.superclazz.c$$DA.apply(this,[pos]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'updateBounds$', function () {
for (var d=0; d < this.n; d++) {
this.this$0.min[d]=Math.min(this.this$0.pointOne[d], this.this$0.pointTwo[d]);
this.this$0.max[d]=Math.max(this.this$0.pointOne[d], this.this$0.pointTwo[d]);
}
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:53 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
