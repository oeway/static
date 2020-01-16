(function(){var P$=Clazz.newPackage("org.scijava.io.console"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "OpenArgument", null, 'org.scijava.console.AbstractConsoleArgument');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['ioService','org.scijava.io.IOService','displayService','org.scijava.display.DisplayService','startupService','org.scijava.startup.StartupService','log','org.scijava.log.LogService']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$I$SA.apply(this,[2, ["--open"]]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'handle$java_util_LinkedList', function (args) {
if (!this.supports$java_util_LinkedList(args)) return;
args.removeFirst$();
var source=args.removeFirst$();
this.startupService.addOperation$Runnable(((P$.OpenArgument$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "OpenArgument$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$', function () {
try {
var o=this.b$['org.scijava.io.console.OpenArgument'].ioService.open$S(this.$finals$.source);
this.b$['org.scijava.io.console.OpenArgument'].displayService.createDisplay$O(o);
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.IOException")){
if (this.b$['org.scijava.io.console.OpenArgument'].log != null ) this.b$['org.scijava.io.console.OpenArgument'].log.error$Throwable(exc);
} else {
throw exc;
}
}
});
})()
), Clazz.new_(P$.OpenArgument$lambda1.$init$, [this, {source:source}])));
});

Clazz.newMeth(C$, ['supports$java_util_LinkedList','supports$TT','supports$TD'], function (args) {
return this.startupService != null  && this.ioService != null   && this.displayService != null   && C$.superclazz.prototype.supports$java_util_LinkedList.apply(this, [args]) ;
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.io.console.OpenArgument',null,['org.scijava.plugin.Plugin']],['type="org.scijava.console.ConsoleArgument.class" ']],
  [['ioService','org.scijava.io.IOService',null,['org.scijava.plugin.Parameter']],['required="false" ']],
  [['displayService','org.scijava.display.DisplayService',null,['org.scijava.plugin.Parameter']],['required="false" ']],
  [['startupService','org.scijava.startup.StartupService',null,['org.scijava.plugin.Parameter']],['required="false" ']],
  [['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['required="false" ']]]}
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:25 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
