(function(){var P$=Clazz.newPackage("net.imglib2.roi.geom.real"),I$=[[0,'net.imglib2.roi.BoundaryType','net.imglib2.roi.Masks','net.imglib2.util.Util']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "Box", null, null, 'net.imglib2.roi.RealMaskRealInterval');

C$.$clinit$=2;

Clazz.newMeth(C$, 'hashCode$net_imglib2_roi_geom_real_Box', function (box) {
var result=17;
for (var d=0; d < box.numDimensions$(); d++) result=(result+(31 * box.realMin$I(d) + 31 * box.realMax$I(d))|0);

if (box.boundaryType$() === $I$(1).CLOSED ) result+=5;
 else if (box.boundaryType$() === $I$(1).OPEN ) result+=8;
return result;
}, 1);

Clazz.newMeth(C$, 'equals$net_imglib2_roi_geom_real_Box$net_imglib2_roi_geom_real_Box', function (box1, box2) {
if (box1 == null  && box2 == null  ) return true;
if (box1 == null  || box2 == null   || !$I$(2).sameTypesAndDimensions$TM$TM(box1, box2) ) return false;
for (var d=0; d < box1.numDimensions$(); d++) if (box1.sideLength$I(d) != box2.sideLength$I(d) ) return false;

return $I$(3).locationsEqual$net_imglib2_RealLocalizable$net_imglib2_RealLocalizable(box1.center$(), box2.center$());
}, 1);
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'maskType$', function () {
return Clazz.getClass(C$,['center$','equals$O','equals$net_imglib2_roi_geom_real_Box$net_imglib2_roi_geom_real_Box','hashCode$net_imglib2_roi_geom_real_Box','maskType$','sideLength$I']);
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:53 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
