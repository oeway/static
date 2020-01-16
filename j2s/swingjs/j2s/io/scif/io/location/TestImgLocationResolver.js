(function(){var P$=Clazz.newPackage("io.scif.io.location"),I$=[[0,'io.scif.io.location.TestImgLocation']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TestImgLocationResolver", null, 'org.scijava.io.location.AbstractLocationResolver');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['meta','io.scif.MetadataService']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$SA.apply(this,[["scifioTestImg"]]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['supports$java_net_URI','supports$TT','supports$TD'], function (uri) {
var scheme=uri.getScheme$();
return "scifioTestImg".equals$O(scheme) || "file".equals$O(scheme) && uri.getPath$().endsWith$S(".fake")  ;
});

Clazz.newMeth(C$, 'resolve$java_net_URI', function (uri) {
var data;
switch (uri.getScheme$()) {
case "scifioTestImg":
data=uri.getHost$() + "&" + uri.getQuery$() ;
break;
case "file":
var path=uri.getPath$();
data=path.substring$I$I(0, path.length$() - 5);
break;
default:
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Invalid scheme: " + uri.getScheme$()]);
}
var map=this.meta.parse$S(data);
return $I$(1).fromMap$java_util_Map(map);
});
C$.$getAnn$ = function(){ return [
[[null,'io.scif.io.location.TestImgLocationResolver',null,['org.scijava.plugin.Plugin']],['type="org.scijava.io.location.LocationResolver.class" priority="100.0" ']],
  [['meta','io.scif.MetadataService',null,['org.scijava.plugin.Parameter']],['']]]}
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:45 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
