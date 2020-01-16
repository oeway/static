(function(){var P$=Clazz.newPackage("org.scijava.main.run"),p$1={},I$=[[0,'org.scijava.util.Types']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MainCodeRunner", null, 'org.scijava.run.AbstractCodeRunner');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['log','org.scijava.log.LogService']]]

Clazz.newMeth(C$, 'run$O$OA', function (code, args) {
var sArgs=p$1.stringify$OA.apply(this, [args]);
try {
p$1.getMain$O.apply(this, [code]).invoke$O$OA(null, Clazz.array(java.lang.Object, -1, [sArgs]));
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"IllegalArgumentException")){
var exc = e$$;
{
throw Clazz.new_(Clazz.load('java.lang.reflect.InvocationTargetException').c$$Throwable,[exc]);
}
} else if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var exc = e$$;
{
throw Clazz.new_(Clazz.load('java.lang.reflect.InvocationTargetException').c$$Throwable,[exc]);
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, 'run$O$java_util_Map', function (code, inputMap) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Cannot execute main method with a map of inputs"]);
});

Clazz.newMeth(C$, ['supports$O','supports$TT','supports$TD'], function (code) {
return p$1.getMain$O.apply(this, [code]) != null ;
});

Clazz.newMeth(C$, 'getMain$O', function (code) {
var c=p$1.getClass$O.apply(this, [code]);
if (c == null ) return null;
try {
return c.getMethod$S$ClassA("main", [Clazz.array(String, -1)]);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"SecurityException")){
var exc = e$$;
{
if (this.log != null ) this.log.debug$Throwable(exc);
return null;
}
} else if (Clazz.exceptionOf(e$$,"NoSuchMethodException")){
var exc = e$$;
{
if (this.log != null ) this.log.debug$Throwable(exc);
return null;
}
} else {
throw e$$;
}
}
}, p$1);

Clazz.newMeth(C$, 'getClass$O', function (code) {
if (Clazz.instanceOf(code, "java.lang.Class")) return code;
if (Clazz.instanceOf(code, "java.lang.String")) return $I$(1).load$S(code);
return null;
}, p$1);

Clazz.newMeth(C$, 'stringify$OA', function (o) {
var s;
if (o == null ) s=null;
 else {
s=Clazz.array(String, [o.length]);
for (var i=0; i < o.length; i++) {
if (o[i] == null ) s[i]=null;
 else if (Clazz.instanceOf(o[i], "java.lang.String")) s[i]=o[i];
 else s[i]=o[i].toString();
}
}return s;
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.main.run.MainCodeRunner',null,['org.scijava.plugin.Plugin']],['type="org.scijava.run.CodeRunner.class" priority="-100.0" ']],
  [['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['required="false" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:26 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
