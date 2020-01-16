(function(){var P$=Clazz.newPackage("net.imglib2.roi.geom.real"),I$=[[0,'net.imglib2.roi.BoundaryType','net.imglib2.roi.Masks','net.imglib2.util.Util']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "SuperEllipsoid", null, null, 'net.imglib2.roi.RealMaskRealInterval');

C$.$clinit$=2;

Clazz.newMeth(C$, 'hashCode$net_imglib2_roi_geom_real_SuperEllipsoid', function (ellipsoid) {
var result=22;
for (var i=0; i < ellipsoid.numDimensions$(); i++) result=(result+(13 * ellipsoid.center$().getDoublePosition$I(i) + 13 * ellipsoid.semiAxisLength$I(i))|0);

result=(result+(ellipsoid.exponent$())|0);
if (ellipsoid.boundaryType$() === $I$(1).CLOSED ) result+=5;
 else if (ellipsoid.boundaryType$() === $I$(1).OPEN ) result+=8;
return result;
}, 1);

Clazz.newMeth(C$, 'equals$net_imglib2_roi_geom_real_SuperEllipsoid$net_imglib2_roi_geom_real_SuperEllipsoid', function (ellipsoid1, ellipsoid2) {
if (ellipsoid1 == null  && ellipsoid2 == null  ) return true;
if (ellipsoid1 == null  || ellipsoid2 == null   || !$I$(2).sameTypesAndDimensions$TM$TM(ellipsoid1, ellipsoid2)  || ellipsoid1.exponent$() != ellipsoid2.exponent$()  ) return false;
for (var d=0; d < ellipsoid1.numDimensions$(); d++) if (ellipsoid1.semiAxisLength$I(d) != ellipsoid2.semiAxisLength$I(d) ) return false;

return $I$(3).locationsEqual$net_imglib2_RealLocalizable$net_imglib2_RealLocalizable(ellipsoid1.center$(), ellipsoid2.center$());
}, 1);
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'maskType$', function () {
return Clazz.getClass(C$,['center$','equals$O','equals$net_imglib2_roi_geom_real_SuperEllipsoid$net_imglib2_roi_geom_real_SuperEllipsoid','exponent$','hashCode$net_imglib2_roi_geom_real_SuperEllipsoid','maskType$','semiAxisLength$I']);
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:54 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
