(function(){var P$=Clazz.newPackage("net.imagej.space"),I$=[[0,'net.imagej.axis.AxisType']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SpaceUtils");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getAxisTypes$net_imagej_space_TypedSpace', function (space) {
var typeList=Clazz.array($I$(1), [space.numDimensions$()]);
for (var i=0; i < typeList.length; i++) {
typeList[i]=space.axis$I(i).type$();
}
return typeList;
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:03 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
