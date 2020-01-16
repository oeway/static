(function(){var P$=Clazz.newPackage("net.imglib2.roi.geom.real"),I$=[[0,'net.imglib2.util.Util','net.imglib2.roi.geom.real.PointMask']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultWritablePointMask", null, 'net.imglib2.RealPoint', 'net.imglib2.roi.geom.real.WritablePointMask');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_RealLocalizable', function (pt) {
;C$.superclazz.c$$net_imglib2_RealLocalizable.apply(this,[pt]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$DA', function (pt) {
;C$.superclazz.c$$DA.apply(this,[pt]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['test$net_imglib2_RealLocalizable','test$','test$TT'], function (l) {
return $I$(1).locationsEqual$net_imglib2_RealLocalizable$net_imglib2_RealLocalizable(this, l);
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
return Clazz.instanceOf(obj, "net.imglib2.roi.geom.real.PointMask") && $I$(2).equals$net_imglib2_roi_geom_real_PointMask$net_imglib2_roi_geom_real_PointMask(this, obj) ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return $I$(2).hashCode$net_imglib2_roi_geom_real_PointMask(this);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:53 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
