(function(){var P$=Clazz.newPackage("net.imagej.table"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DefaultTableService", null, 'org.scijava.service.AbstractService', 'net.imagej.table.TableService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getTables$net_imagej_Dataset', function (img) {
var tables=img.getProperties$().get$O("tables");
if (tables != null  && Clazz.instanceOf(tables, "java.util.List") ) return tables;
return null;
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.table.DefaultTableService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:03 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
