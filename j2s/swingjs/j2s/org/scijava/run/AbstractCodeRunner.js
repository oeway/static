(function(){var P$=Clazz.newPackage("org.scijava.run"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractCodeRunner", null, 'org.scijava.plugin.AbstractHandlerPlugin', 'org.scijava.run.CodeRunner');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'waitFor$java_util_concurrent_Future', function (future) {
try {
return future.get$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"InterruptedException")){
var exc = e$$;
{
throw Clazz.new_(Clazz.load('java.lang.reflect.InvocationTargetException').c$$Throwable,[exc]);
}
} else if (Clazz.exceptionOf(e$$,"java.util.concurrent.ExecutionException")){
var exc = e$$;
{
throw Clazz.new_(Clazz.load('java.lang.reflect.InvocationTargetException').c$$Throwable,[exc]);
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:29 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
