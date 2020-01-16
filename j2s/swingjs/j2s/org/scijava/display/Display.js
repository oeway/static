(function(){var P$=Clazz.newPackage("org.scijava.display"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "Display", null, null, ['java.util.List', 'org.scijava.plugin.RichPlugin', 'org.scijava.Named']);

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'canDisplay$O', function (o) {
if (o == null ) return false;
return this.canDisplay$Class(o.getClass$());
});

Clazz.newMeth(C$, 'isDisplaying$O', function (o) {
return this.contains$O(o);
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:24 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
