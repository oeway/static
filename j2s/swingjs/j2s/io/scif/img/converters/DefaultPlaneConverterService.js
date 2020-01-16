(function(){var P$=Clazz.newPackage("io.scif.img.converters"),p$1={},I$=[[0,'java.util.Collections','io.scif.img.converters.PlaneConverter','java.util.concurrent.ConcurrentHashMap','java.util.ArrayList']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultPlaneConverterService", null, 'org.scijava.plugin.AbstractSingletonService', 'io.scif.img.converters.PlaneConverterService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['converters','java.util.concurrent.ConcurrentHashMap','converterNames','java.util.List']]]

Clazz.newMeth(C$, 'getPlaneConverters$', function () {
return $I$(1).unmodifiableMap$java_util_Map(p$1.converters.apply(this, []));
});

Clazz.newMeth(C$, 'getPlaneConverterNames$', function () {
return $I$(1).unmodifiableList$java_util_List(p$1.converterNames.apply(this, []));
});

Clazz.newMeth(C$, 'getPlaneConverter$S', function (name) {
return p$1.converters.apply(this, []).get$O(name);
});

Clazz.newMeth(C$, 'getArrayConverter$', function () {
return this.getPlaneConverter$S("ArrayDataAccess");
});

Clazz.newMeth(C$, 'getPlanarConverter$', function () {
return this.getPlaneConverter$S("PlanarAccess");
});

Clazz.newMeth(C$, 'getDefaultConverter$', function () {
return this.getPlaneConverter$S("Default");
});

Clazz.newMeth(C$, 'getPluginType$', function () {
return Clazz.getClass($I$(2),['populatePlane$io_scif_Reader$I$I$BA$net_imagej_ImgPlus$io_scif_config_SCIFIOConfig']);
});

Clazz.newMeth(C$, 'converters', function () {
if (this.converters == null ) p$1.initConverters.apply(this, []);
return this.converters;
}, p$1);

Clazz.newMeth(C$, 'converterNames', function () {
if (this.converterNames == null ) p$1.initConverterNames.apply(this, []);
return this.converterNames;
}, p$1);

Clazz.newMeth(C$, 'initConverters', function () {
if (this.converters != null ) return;
var map=Clazz.new_(1,{K:"String",V:"io.scif.img.converters.PlaneConverter"},$I$(3,1));
for (var converter, $converter = this.getInstances$().iterator$(); $converter.hasNext$()&&((converter=($converter.next$())),1);) {
var name=converter.getInfo$().getName$();
map.put$TK$TV(name, converter);
}
this.converters=map;
}, p$1);

Clazz.newMeth(C$, 'initConverterNames', function () {
if (this.converterNames != null ) return;
var list=Clazz.new_(1,{E:"String"},$I$(4,1));
for (var converter, $converter = this.getInstances$().iterator$(); $converter.hasNext$()&&((converter=($converter.next$())),1);) {
var name=converter.getInfo$().getName$();
list.add$TE(name);
}
this.converterNames=list;
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'io.scif.img.converters.DefaultPlaneConverterService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:44 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
