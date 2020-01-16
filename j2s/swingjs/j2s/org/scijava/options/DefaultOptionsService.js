(function(){var P$=Clazz.newPackage("org.scijava.options"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DefaultOptionsService", null, 'org.scijava.plugin.AbstractSingletonService', 'org.scijava.options.OptionsService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['$log','org.scijava.log.LogService','$objectService','org.scijava.object.ObjectService','commandService','org.scijava.command.CommandService']]]

Clazz.newMeth(C$, 'getOptions$Class', function (optionsClass) {
var objects=this.$objectService.getObjects$Class(optionsClass);
return objects == null  || objects.isEmpty$()  ? null : objects.get$I(0);
});

Clazz.newMeth(C$, 'getInstances$', function () {
var instances=C$.superclazz.prototype.getInstances$.apply(this, []);
for (var options, $options = instances.iterator$(); $options.hasNext$()&&((options=($options.next$())),1);) {
options.load$();
}
return instances;
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.options.DefaultOptionsService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']],
  [['$log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']],
  [['$objectService','org.scijava.object.ObjectService',null,['org.scijava.plugin.Parameter']],['']],
  [['commandService','org.scijava.command.CommandService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:28 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
