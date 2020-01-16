(function(){var P$=Clazz.newPackage("org.scijava.util"),I$=[[0,'java.io.ByteArrayOutputStream','java.io.PrintStream','StringBuilder','Thread','java.util.ArrayList','java.util.Collections','java.lang.reflect.Modifier']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DebugUtils");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.NL=System.getProperty$S("line.separator");
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['S',['NL']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getStackTrace$Throwable', function (t) {
try {
var out=Clazz.new_($I$(1,1));
t.printStackTrace$java_io_PrintStream(Clazz.new_($I$(2,1).c$$java_io_OutputStream$Z$S,[out, false, "UTF-8"]));
return  String.instantialize(out.toByteArray$(), "UTF-8");
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.IOException")){
return null;
} else {
throw exc;
}
}
}, 1);

Clazz.newMeth(C$, 'getStackDump$Thread', function (thread) {
return C$.getStackDump$Thread$StackTraceElementA(thread, thread.getStackTrace$());
}, 1);

Clazz.newMeth(C$, 'getStackDump$Thread$StackTraceElementA', function (thread, stackTrace) {
var sb=Clazz.new_($I$(3,1));
C$.dumpThread$Thread$StackTraceElementA$StringBuilder(thread, stackTrace, sb);
return sb.toString();
}, 1);

Clazz.newMeth(C$, 'getStackDump$', function () {
var sb=Clazz.new_($I$(3,1));
var stackTraces=$I$(4).getAllStackTraces$();
var threads=Clazz.new_(1,{E:"Thread"},$I$(5,1).c$$java_util_Collection,[stackTraces.keySet$()]);
$I$(6).sort$java_util_List$java_util_Comparator(threads, ((P$.DebugUtils$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DebugUtils$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['compare$Thread$Thread','compare$','compare$TT$TT'], function (t1, t2) {
return t1.getName$().compareTo$S(t2.getName$());
});
})()
), Clazz.new_(P$.DebugUtils$1.$init$, [this, null])));
for (var t, $t = threads.iterator$(); $t.hasNext$()&&((t=($t.next$())),1);) {
C$.dumpThread$Thread$StackTraceElementA$StringBuilder(t, stackTraces.get$O(t), sb);
}
return sb.toString();
}, 1);

Clazz.newMeth(C$, 'getFieldName$Class$I', function (c, value) {
var fields=c.getDeclaredFields$();
for (var i=0; i < fields.length; i++) {
if (!$I$(7).isStatic$I(fields[i].getModifiers$())) continue;
fields[i].setAccessible$Z(true);
try {
if (fields[i].getInt$O(null) == value) return fields[i].getName$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var exc = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"IllegalArgumentException")){
var exc = e$$;
{
}
} else {
throw e$$;
}
}
}
return "" + value;
}, 1);

Clazz.newMeth(C$, 'getMainClassName$', function () {
var traceMap=$I$(4).getAllStackTraces$();
for (var thread, $thread = traceMap.keySet$().iterator$(); $thread.hasNext$()&&((thread=($thread.next$())),1);) {
if (!"main".equals$O(thread.getName$())) continue;
var trace=traceMap.get$O(thread);
if (trace == null  || trace.length == 0 ) continue;
var element=trace[trace.length - 1];
return element.getClassName$();
}
return null;
}, 1);

Clazz.newMeth(C$, 'dumpThread$Thread$StackTraceElementA$StringBuilder', function (t, trace, sb) {
C$.threadInfo$Thread$StringBuilder(t, sb);
for (var element, $element = 0, $$element = trace; $element<$$element.length&&((element=($$element[$element])),1);$element++) {
sb.append$S("\tat ");
sb.append$O(element);
sb.append$S(C$.NL);
}
sb.append$S(C$.NL);
}, 1);

Clazz.newMeth(C$, 'threadInfo$Thread$StringBuilder', function (t, sb) {
sb.append$S("\"");
sb.append$S(t.getName$());
sb.append$S("\"");
if (!t.isAlive$()) sb.append$S(" DEAD");
if (t.isInterrupted$()) sb.append$S(" INTERRUPTED");
if (t.isDaemon$()) sb.append$S(" daemon");
sb.append$S(" prio=");
sb.append$I(t.getPriority$());
sb.append$S(" id=");
sb.append$J(t.getId$());
sb.append$S(" group=");
sb.append$S(t.getThreadGroup$().getName$());
sb.append$S(C$.NL);
sb.append$S("   java.lang.Thread.State: ");
sb.append$O(t.getState$());
sb.append$S(C$.NL);
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
