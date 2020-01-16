(function(){var P$=Clazz.newPackage("net.imagej.render"),I$=[[0,'net.imagej.render.DummyTextRenderer']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DummyRenderingService", null, 'org.scijava.service.AbstractService', 'net.imagej.render.RenderingService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['textRenderer','net.imagej.render.TextRenderer']]]

Clazz.newMeth(C$, 'getTextRenderer$', function () {
return this.textRenderer;
});

Clazz.newMeth(C$, 'initialize$', function () {
this.textRenderer=Clazz.new_($I$(1,1));
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.render.DummyRenderingService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" priority="-100.0" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:02 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
