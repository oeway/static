(function(){var P$=Clazz.newPackage("org.scijava.run.console");
/*c*/var C$=Clazz.newClass(P$, "RunArgument", null, 'org.scijava.console.AbstractConsoleArgument');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['runService','org.scijava.run.RunService','startupService','org.scijava.startup.StartupService','parser','org.scijava.parse.ParseService','log','org.scijava.log.LogService']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$I$SA.apply(this,[2, ["--run"]]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'handle$java_util_LinkedList', function (args) {
if (!this.supports$java_util_LinkedList(args)) return;
args.removeFirst$();
var code=args.removeFirst$();
var arg=this.getParam$java_util_LinkedList(args);
if (arg != null ) args.removeFirst$();
this.startupService.addOperation$Runnable(((P$.RunArgument$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "RunArgument$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$', function () {
try {
if (this.$finals$.arg == null ) this.b$['org.scijava.run.console.RunArgument'].runService.run$O$OA(this.$finals$.code, []);
 else {
var items=this.b$['org.scijava.run.console.RunArgument'].parser.parse$S(this.$finals$.arg);
if (items.isMap$()) this.b$['org.scijava.run.console.RunArgument'].runService.run$O$java_util_Map(this.$finals$.code, items.asMap$());
 else if (items.isList$()) this.b$['org.scijava.run.console.RunArgument'].runService.run$O$OA(this.$finals$.code, items.toArray$());
 else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Arguments are inconsistent. Please pass either a list of key/value pairs, or a list of values."]);
}}} catch (exc) {
if (Clazz.exceptionOf(exc,"java.lang.reflect.InvocationTargetException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[exc]);
} else {
throw exc;
}
}
});
})()
), Clazz.new_(P$.RunArgument$lambda1.$init$, [this, {code:code,arg:arg}])));
});

Clazz.newMeth(C$, ['supports$java_util_LinkedList','supports$TT','supports$TD'], function (args) {
if (!C$.superclazz.prototype.supports$java_util_LinkedList.apply(this, [args])) return false;
return this.runService.supports$TDT(args.get$I(1));
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.run.console.RunArgument',null,['org.scijava.plugin.Plugin']],['type="org.scijava.console.ConsoleArgument.class" ']],
  [['runService','org.scijava.run.RunService',null,['org.scijava.plugin.Parameter']],['']],
  [['startupService','org.scijava.startup.StartupService',null,['org.scijava.plugin.Parameter']],['']],
  [['parser','org.scijava.parse.ParseService',null,['org.scijava.plugin.Parameter']],['']],
  [['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']]]}
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:29 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
