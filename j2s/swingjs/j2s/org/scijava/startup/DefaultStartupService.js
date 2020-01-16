(function(){var P$=Clazz.newPackage("org.scijava.startup"),I$=[[0,'java.util.ArrayDeque']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultStartupService", null, 'org.scijava.service.AbstractService', 'org.scijava.startup.StartupService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.operations=Clazz.new_(1,{E:"Runnable"},$I$(1,1));
}, 1);

C$.$fields$=[['O',['operations','java.util.Deque','log','org.scijava.log.LogService']]]

Clazz.newMeth(C$, 'addOperation$Runnable', function (operation) {
this.operations.add$TE(operation);
});

Clazz.newMeth(C$, 'executeOperations$', function () {
while (!this.operations.isEmpty$()){
var operation=this.operations.pop$();
try {
operation.run$();
} catch (exc) {
if (Clazz.exceptionOf(exc,"RuntimeException")){
if (this.log != null ) this.log.error$Throwable(exc);
} else {
throw exc;
}
}
}
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.startup.DefaultStartupService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']],
  [['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['required="false" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
