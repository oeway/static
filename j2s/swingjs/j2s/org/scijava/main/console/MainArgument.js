(function(){var P$=Clazz.newPackage("org.scijava.main.console"),p$1={},I$=[[0,'java.util.ArrayList']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MainArgument", null, 'org.scijava.console.AbstractConsoleArgument');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['mainService','org.scijava.main.MainService','log','org.scijava.log.LogService']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$I$SA.apply(this,[2, ["--main", "--main-class"]]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'handle$java_util_LinkedList', function (args) {
if (!this.supports$java_util_LinkedList(args)) return;
args.removeFirst$();
var className=args.removeFirst$();
var argList=Clazz.new_(1,{E:"String"},$I$(1,1));
while (!args.isEmpty$() && !this.isFlag$java_util_LinkedList(args) && !p$1.isSeparator$java_util_LinkedList.apply(this, [args])  ){
argList.add$TE(args.removeFirst$());
}
if (p$1.isSeparator$java_util_LinkedList.apply(this, [args])) args.removeFirst$();
var mainArgs=argList.toArray$TTA(Clazz.array(String, [argList.size$()]));
this.mainService.addMain$S$SA(className, mainArgs);
});

Clazz.newMeth(C$, ['supports$java_util_LinkedList','supports$TT','supports$TD'], function (args) {
return this.mainService != null  && C$.superclazz.prototype.supports$java_util_LinkedList.apply(this, [args]) ;
});

Clazz.newMeth(C$, 'isSeparator$java_util_LinkedList', function (args) {
if (args == null  || args.isEmpty$() ) return false;
return args.getFirst$().equals$O("--");
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.main.console.MainArgument',null,['org.scijava.plugin.Plugin']],['type="org.scijava.console.ConsoleArgument.class" ']],
  [['mainService','org.scijava.main.MainService',null,['org.scijava.plugin.Parameter']],['required="false" ']],
  [['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['required="false" ']]]}
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:26 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
