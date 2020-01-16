(function(){var P$=Clazz.newPackage("net.imglib2.roi.geom.real"),I$=[[0,'java.util.AbstractList','net.imglib2.roi.Masks','net.imglib2.util.IterablePair','net.imglib2.util.Util']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "Polyshape", null, null, 'net.imglib2.roi.RealMaskRealInterval');

C$.$clinit$=2;

Clazz.newMeth(C$, 'equals$net_imglib2_roi_geom_real_Polyshape$net_imglib2_roi_geom_real_Polyshape', function (polyshape1, polyshape2) {
if (polyshape1 == null  && polyshape2 == null  ) return true;
if (polyshape1 == null  || polyshape2 == null   || !$I$(2).sameTypesAndDimensions$TM$TM(polyshape1, polyshape2) ) return false;
var vertices1=polyshape1.vertices$();
var vertices2=polyshape2.vertices$();
for (var pair, $pair = Clazz.new_(1,{A:"net.imglib2.RealLocalizable",B:"net.imglib2.RealLocalizable"},$I$(3,1).c$$Iterable$Iterable,[vertices1, vertices2]).iterator$(); $pair.hasNext$()&&((pair=($pair.next$())),1);) if (!$I$(4).locationsEqual$net_imglib2_RealLocalizable$net_imglib2_RealLocalizable(pair.getA$(), pair.getB$())) return false;

return true;
}, 1);
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'vertices$', function () {
return ((P$.Polyshape$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Polyshape$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.util.AbstractList'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'get$I', function (index) {
return this.b$['net.imglib2.roi.geom.real.Polyshape'].vertex$I.apply(this.b$['net.imglib2.roi.geom.real.Polyshape'], [index]);
});

Clazz.newMeth(C$, 'size$', function () {
return this.b$['net.imglib2.roi.geom.real.Polyshape'].numVertices$.apply(this.b$['net.imglib2.roi.geom.real.Polyshape'], []);
});
})()
), Clazz.new_(1,{E:"net.imglib2.RealLocalizable"},$I$(1,1), [this, null],P$.Polyshape$1));
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:54 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
