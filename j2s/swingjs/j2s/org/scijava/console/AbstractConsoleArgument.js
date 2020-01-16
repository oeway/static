(function(){var P$=Clazz.newPackage("org.scijava.console"),I$=[[0,'java.util.HashSet']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractConsoleArgument", null, 'org.scijava.plugin.AbstractHandlerPlugin', 'org.scijava.console.ConsoleArgument');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['numArgs'],'O',['flags','java.util.Set']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$I$SA.apply(this, [1, Clazz.array(String, [0])]);
}, 1);

Clazz.newMeth(C$, 'c$$SA', function (flags) {
C$.c$$I$SA.apply(this, [1, flags]);
}, 1);

Clazz.newMeth(C$, 'c$$I$SA', function (requiredArgs, flags) {
Clazz.super_(C$, this);
this.numArgs=requiredArgs;
this.flags=Clazz.new_(1,{E:"String"},$I$(1,1));
for (var s, $s = 0, $$s = flags; $s<$$s.length&&((s=($$s[$s])),1);$s++) this.flags.add$TE(s);

}, 1);

Clazz.newMeth(C$, ['supports$java_util_LinkedList','supports$TT','supports$TD'], function (args) {
if (args == null  || args.size$() < this.numArgs ) return false;
return this.isFlag$java_util_LinkedList(args);
});

Clazz.newMeth(C$, 'isFlag$java_util_LinkedList', function (args) {
return this.flags.isEmpty$() || this.flags.contains$O(args.getFirst$()) ;
});

Clazz.newMeth(C$, 'getParam$java_util_LinkedList', function (args) {
if (args.isEmpty$()) return null;
var arg=args.getFirst$();
return arg.startsWith$S("-") ? null : arg;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:23 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
