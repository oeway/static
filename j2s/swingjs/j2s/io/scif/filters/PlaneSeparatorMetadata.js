(function(){var P$=Clazz.newPackage("io.scif.filters"),p$1={},I$=[[0,'java.util.HashSet','io.scif.filters.PlaneSeparator','io.scif.DefaultImageMetadata']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PlaneSeparatorMetadata", null, 'io.scif.filters.AbstractMetadataWrapper');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.splitTypes=Clazz.new_(1,{E:"net.imagej.axis.AxisType"},$I$(1,1));
}, 1);

C$.$fields$=[['O',['splitTypes','java.util.Set']]]

Clazz.newMeth(C$, 'offset$', function () {
return this.splitTypes.size$();
});

Clazz.newMeth(C$, 'separate$net_imagej_axis_AxisTypeA', function (types) {
if (this.unwrap$() != null ) {
p$1.matchTypes$net_imagej_axis_AxisTypeA.apply(this, [types]);
this.populateImageMetadata$();
}});

Clazz.newMeth(C$, 'splitting$net_imagej_axis_AxisType', function (type) {
return this.splitTypes.contains$O(type);
});

Clazz.newMeth(C$, 'wrap$io_scif_Metadata', function (meta) {
this.splitTypes=Clazz.new_(1,{E:"net.imagej.axis.AxisType"},$I$(1,1));
for (var i=0; i < meta.get$I(0).getInterleavedAxisCount$(); i++) {
this.splitTypes.add$TE(meta.get$I(0).getAxis$I(i).type$());
}
C$.superclazz.prototype.wrap$io_scif_Metadata.apply(this, [meta]);
});

Clazz.newMeth(C$, 'filterType$', function () {
return Clazz.getClass($I$(2));
});

Clazz.newMeth(C$, 'populateImageMetadata$', function () {
var m=this.unwrap$();
this.createImageMetadata$I(0);
for (var i=0; i < m.getImageCount$(); i++) {
var iMeta=Clazz.new_($I$(3,1).c$$io_scif_ImageMetadata,[m.get$I(i)]);
var offset=0;
for (var type, $type = this.splitTypes.iterator$(); $type.hasNext$()&&((type=($type.next$())),1);) {
if (iMeta.getAxisIndex$net_imagej_axis_AxisType(type) >= 0 && iMeta.getAxisIndex$net_imagej_axis_AxisType(type) < iMeta.getPlanarAxisCount$() ) {
iMeta.setAxis$I$net_imagej_axis_CalibratedAxis(iMeta.getPlanarAxisCount$() + offset++ - 1, iMeta.getAxis$net_imagej_axis_AxisType(type));
iMeta.setPlanarAxisCount$I(iMeta.getPlanarAxisCount$() - 1);
}}
this.add$io_scif_ImageMetadata$Z(iMeta, false);
}
});

Clazz.newMeth(C$, 'matchTypes$net_imagej_axis_AxisTypeA', function (types) {
this.splitTypes.clear$();
for (var t, $t = 0, $$t = types; $t<$$t.length&&((t=($$t[$t])),1);$t++) {
var axisIndex=this.unwrap$().get$I(0).getAxisIndex$net_imagej_axis_AxisType(t);
if (axisIndex >= 0 && axisIndex < this.unwrap$().get$I(0).getPlanarAxisCount$() ) {
this.splitTypes.add$TE(t);
}}
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'io.scif.filters.PlaneSeparatorMetadata',null,['org.scijava.plugin.Plugin']],['type="io.scif.filters.MetadataWrapper.class" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:39 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
