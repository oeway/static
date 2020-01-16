(function(){var P$=Clazz.newPackage("org.scijava.script.run"),p$1={},I$=[[0,'java.io.File']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ScriptCodeRunner", null, 'org.scijava.run.AbstractCodeRunner');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['scriptService','org.scijava.script.ScriptService']]]

Clazz.newMeth(C$, 'run$O$OA', function (code, args) {
try {
this.waitFor$java_util_concurrent_Future(this.scriptService.run$java_io_File$Z$OA(p$1.getScript$O.apply(this, [code]), true, args));
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.FileNotFoundException")){
var exc = e$$;
{
throw Clazz.new_(Clazz.load('java.lang.reflect.InvocationTargetException').c$$Throwable,[exc]);
}
} else if (Clazz.exceptionOf(e$$,"javax.script.ScriptException")){
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
try {
this.waitFor$java_util_concurrent_Future(this.scriptService.run$java_io_File$Z$java_util_Map(p$1.getScript$O.apply(this, [code]), true, inputMap));
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.FileNotFoundException")){
var exc = e$$;
{
throw Clazz.new_(Clazz.load('java.lang.reflect.InvocationTargetException').c$$Throwable,[exc]);
}
} else if (Clazz.exceptionOf(e$$,"javax.script.ScriptException")){
var exc = e$$;
{
throw Clazz.new_(Clazz.load('java.lang.reflect.InvocationTargetException').c$$Throwable,[exc]);
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, ['supports$O','supports$TT','supports$TD'], function (code) {
return p$1.getScript$O.apply(this, [code]) != null ;
});

Clazz.newMeth(C$, 'getScript$O', function (code) {
var scriptFile;
if (Clazz.instanceOf(code, "java.io.File")) scriptFile=code;
 else if (Clazz.instanceOf(code, "java.lang.String")) scriptFile=Clazz.new_($I$(1,1).c$$S,[code]);
 else return null;
if (!scriptFile.exists$()) return null;
if (!this.scriptService.canHandleFile$java_io_File(scriptFile)) return null;
return scriptFile;
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.script.run.ScriptCodeRunner',null,['org.scijava.plugin.Plugin']],['type="org.scijava.run.CodeRunner.class" ']],
  [['scriptService','org.scijava.script.ScriptService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
