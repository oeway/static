(function(){var P$=Clazz.newPackage("net.imagej.space"),p$1={},I$=[[0,'java.util.ArrayList']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "CombinedSpace", null, 'java.util.ArrayList', 'net.imagej.space.TypedSpace');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.axisTypes=Clazz.new_(1,{E:"net.imagej.axis.AxisType"},$I$(1,1));
}, 1);

C$.$fields$=[['O',['axisTypes','java.util.ArrayList']]]

Clazz.newMeth(C$, 'update$', function () {
{
this.axisTypes.clear$();
for (var space, $space = this.iterator$(); $space.hasNext$()&&((space=($space.next$())),1);) {
for (var d=0; d < space.numDimensions$(); d++) {
var axisType=space.axis$I(d).type$();
if (!this.axisTypes.contains$O(axisType)) {
this.axisTypes.add$TE(axisType);
}}
}
}});

Clazz.newMeth(C$, 'dimensionIndex$net_imagej_axis_AxisType', function (axis) {
return p$1.axisTypes.apply(this, []).indexOf$O(axis);
});

Clazz.newMeth(C$, 'axis$I', function (d) {
var type=p$1.axisTypes.apply(this, []).get$I(d);
for (var space, $space = this.iterator$(); $space.hasNext$()&&((space=($space.next$())),1);) {
var id=space.dimensionIndex$net_imagej_axis_AxisType(type);
if (id < 0) continue;
return space.axis$I(id);
}
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["No compatible constituent space"]);
});

Clazz.newMeth(C$, ['axes$TAA'], function (axes) {
for (var i=0; i < axes.length; i++) {
axes[i]=this.axis$I(i);
}
});

Clazz.newMeth(C$, ['setAxis$TA$I'], function (axis, d) {
var type=p$1.axisTypes.apply(this, []).get$I(d);
for (var space, $space = this.iterator$(); $space.hasNext$()&&((space=($space.next$())),1);) {
var id=space.dimensionIndex$net_imagej_axis_AxisType(type);
if (id < 0) continue;
space.setAxis$TA$I(axis, id);
}
});

Clazz.newMeth(C$, 'numDimensions$', function () {
return p$1.axisTypes.apply(this, []).size$();
});

Clazz.newMeth(C$, 'axisTypes', function () {
{
return this.axisTypes;
}}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:03 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
