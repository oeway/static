(function(){var P$=Clazz.newPackage("org.scijava.console"),I$=[[0,'java.util.regex.Pattern']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SystemPropertyArgument", null, 'org.scijava.console.AbstractConsoleArgument');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.SYS_PROP_PAT=$I$(1).compile$S("-D([\\w\\._-]+)(=(.*))?");
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['SYS_PROP_PAT','java.util.regex.Pattern']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$I$SA.apply(this,[1, []]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'handle$java_util_LinkedList', function (args) {
if (!this.supports$java_util_LinkedList(args)) return;
var arg=args.removeFirst$();
var m=C$.SYS_PROP_PAT.matcher$CharSequence(arg);
if (!m.matches$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid argument: " + arg]);
}var key=m.group$I(1);
var value=m.group$I(3);
System.setProperty$S$S(key, value == null  ? "" : value);
});

Clazz.newMeth(C$, ['supports$java_util_LinkedList','supports$TT','supports$TD'], function (args) {
if (!C$.superclazz.prototype.supports$java_util_LinkedList.apply(this, [args])) return false;
var arg=args.getFirst$();
if (!arg.startsWith$S("-D")) return false;
return C$.SYS_PROP_PAT.matcher$CharSequence(arg).matches$();
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.console.SystemPropertyArgument',null,['org.scijava.plugin.Plugin']],['type="org.scijava.console.ConsoleArgument.class" ']]]}
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:23 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
