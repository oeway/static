(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.util"),I$=[[0,'java.io.File']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ProcessIdUtil");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['S',['DEFAULT_PROCESSID']]]

Clazz.newMeth(C$, 'getProcessId$', function () {
try {
var managementFactoryClass=Clazz.forName("java.lang.management.ManagementFactory");
var getRuntimeMXBean=managementFactoryClass.getDeclaredMethod$S$ClassA("getRuntimeMXBean", []);
var runtimeMXBeanClass=Clazz.forName("java.lang.management.RuntimeMXBean");
var getName=runtimeMXBeanClass.getDeclaredMethod$S$ClassA("getName", []);
var runtimeMXBean=getRuntimeMXBean.invoke$O$OA(null, []);
var name=getName.invoke$O$OA(runtimeMXBean, []);
return name.split$S("@")[0];
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
try {
return Clazz.new_($I$(1,1).c$$S,["/proc/self"]).getCanonicalFile$().getName$();
} catch (ignoredUseDefault) {
if (Clazz.exceptionOf(ignoredUseDefault,"java.io.IOException")){
} else {
throw ignoredUseDefault;
}
}
} else {
throw ex;
}
}
return "-";
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:56 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
