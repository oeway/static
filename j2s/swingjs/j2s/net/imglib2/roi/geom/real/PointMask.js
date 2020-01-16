(function(){var P$=Clazz.newPackage("net.imglib2.roi.geom.real"),I$=[[0,'net.imglib2.roi.BoundaryType','net.imglib2.roi.Masks','net.imglib2.util.Util']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "PointMask", null, null, ['net.imglib2.roi.RealMaskRealInterval', 'net.imglib2.RealLocalizable']);

C$.$clinit$=2;

Clazz.newMeth(C$, 'hashCode$net_imglib2_roi_geom_real_PointMask', function (point) {
var result=301;
for (var i=0; i < point.numDimensions$(); i++) result=(result+(43 * point.getDoublePosition$I(i))|0);

return result;
}, 1);

Clazz.newMeth(C$, 'equals$net_imglib2_roi_geom_real_PointMask$net_imglib2_roi_geom_real_PointMask', function (pointMask1, pointMask2) {
if (pointMask1 == null  && pointMask2 == null  ) return true;
if (pointMask1 == null  || pointMask2 == null   || !$I$(2).sameTypesAndDimensions$TM$TM(pointMask1, pointMask2) ) return false;
return $I$(3).locationsEqual$net_imglib2_RealLocalizable$net_imglib2_RealLocalizable(pointMask1, pointMask2);
}, 1);
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'maskType$', function () {
return Clazz.getClass(C$,['boundaryType$','equals$O','equals$net_imglib2_roi_geom_real_PointMask$net_imglib2_roi_geom_real_PointMask','hashCode$net_imglib2_roi_geom_real_PointMask','maskType$','realMax$I','realMin$I']);
});

Clazz.newMeth(C$, 'boundaryType$', function () {
return $I$(1).CLOSED;
});

Clazz.newMeth(C$, 'realMin$I', function (d) {
return this.getDoublePosition$I(d);
});

Clazz.newMeth(C$, 'realMax$I', function (d) {
return this.getDoublePosition$I(d);
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:54 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
