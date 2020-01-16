(function(){var P$=Clazz.newPackage("io.scif"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractSCIFIOPlugin", null, 'org.scijava.plugin.AbstractRichPlugin', 'io.scif.SCIFIOPlugin');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['log','org.scijava.log.LogService','formatService','io.scif.services.FormatService']]]

Clazz.newMeth(C$, 'log$', function () {
return this.log;
});

Clazz.newMeth(C$, 'getVersion$', function () {
return this.formatService.getVersion$();
});
C$.$getAnn$ = function(){ return [
[['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']],
  [['formatService','io.scif.services.FormatService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:35 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
