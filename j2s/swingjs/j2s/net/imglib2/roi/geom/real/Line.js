(function(){var P$=Clazz.newPackage("net.imglib2.roi.geom.real"),I$=[[0,'net.imglib2.roi.BoundaryType','net.imglib2.roi.Masks','net.imglib2.util.Util']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "Line", null, null, 'net.imglib2.roi.RealMaskRealInterval');

C$.$clinit$=2;

Clazz.newMeth(C$, 'hashCode$net_imglib2_roi_geom_real_Line', function (line) {
var result=119;
for (var i=0; i < line.numDimensions$(); i++) result=(result+(53 * line.endpointOne$().getDoublePosition$I(i) + 91 * line.endpointTwo$().getDoublePosition$I(i))|0);

return result + 5;
}, 1);

Clazz.newMeth(C$, 'equals$net_imglib2_roi_geom_real_Line$net_imglib2_roi_geom_real_Line', function (line1, line2) {
if (line1 == null  && line2 == null  ) return true;
return line1 != null  && line2 != null   && $I$(2).sameTypesAndDimensions$TM$TM(line1, line2)  && $I$(3).locationsEqual$net_imglib2_RealLocalizable$net_imglib2_RealLocalizable(line1.endpointOne$(), line2.endpointOne$())  && $I$(3).locationsEqual$net_imglib2_RealLocalizable$net_imglib2_RealLocalizable(line1.endpointTwo$(), line2.endpointTwo$()) ;
}, 1);
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'maskType$', function () {
return Clazz.getClass(C$,['boundaryType$','endpointOne$','endpointTwo$','equals$O','equals$net_imglib2_roi_geom_real_Line$net_imglib2_roi_geom_real_Line','hashCode$net_imglib2_roi_geom_real_Line','maskType$']);
});

Clazz.newMeth(C$, 'boundaryType$', function () {
return $I$(1).CLOSED;
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:54 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
