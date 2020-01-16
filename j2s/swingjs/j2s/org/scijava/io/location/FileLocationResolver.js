(function(){var P$=Clazz.newPackage("org.scijava.io.location"),I$=[[0,'org.scijava.io.location.FileLocation']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "FileLocationResolver", null, 'org.scijava.io.location.AbstractLocationResolver');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$SA.apply(this,[["file"]]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'resolve$java_net_URI', function (uri) {
return Clazz.new_($I$(1,1).c$$java_net_URI,[uri]);
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.io.location.FileLocationResolver',null,['org.scijava.plugin.Plugin']],['type="org.scijava.io.location.LocationResolver.class" ']]]}
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:26 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
