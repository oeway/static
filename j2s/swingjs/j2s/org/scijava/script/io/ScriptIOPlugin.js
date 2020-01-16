(function(){var P$=Clazz.newPackage("org.scijava.script.io"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ScriptIOPlugin", null, 'org.scijava.io.AbstractIOPlugin');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['scriptService','org.scijava.script.ScriptService']]]

Clazz.newMeth(C$, 'getDataType$', function () {
return Clazz.getClass(String);
});

Clazz.newMeth(C$, 'supportsOpen$S', function (source) {
if (this.scriptService == null ) return false;
return this.scriptService.canHandleFile$S(source);
});

Clazz.newMeth(C$, 'open$S', function (source) {
if (this.scriptService == null ) return null;
return null;
});
C$.$getAnn$ = function(){ return [
[['scriptService','org.scijava.script.ScriptService',null,['org.scijava.plugin.Parameter']],['required="false" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
