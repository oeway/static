(function(){var P$=Clazz.newPackage("org.scijava.util"),I$=[[0,'java.util.ArrayList','java.util.Collections','Thread']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Timing");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.total=0;
this.start=System.nanoTime$();
this.tick=this.start;
this.list=Clazz.new_(1,{E:"java.util.Map.Entry"},$I$(1,1));
}, 1);

C$.$fields$=[['L',['total','start','tick'],'O',['list','java.util.List']]]

Clazz.newMeth(C$, 'reset$', function () {
this.tick=System.nanoTime$();
});

Clazz.newMeth(C$, 'addTiming$O', function (message) {
this.addTiming$J$O(System.nanoTime$() - this.tick, message == null  ? C$.getCaller$() : message);
this.tick=System.nanoTime$();
});

Clazz.newMeth(C$, 'addTiming$J$O', function (duration, message) {
var now=System.nanoTime$();
this.total+=duration;
this.list.add$TE(((P$.Timing$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Timing$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['java.util.Map','java.util.Map.Entry']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getKey$', function () {
return Long.valueOf$J(this.$finals$.duration);
});

Clazz.newMeth(C$, 'getValue$', function () {
return this.$finals$.message.toString() + ": " + new Double(((this.$finals$.now - this.b$['org.scijava.util.Timing'].start - this.$finals$.duration ) / 1000000.0)).toString() + " - " + new Double(((this.$finals$.now - this.b$['org.scijava.util.Timing'].start) / 1000000.0)).toString() ;
});

Clazz.newMeth(C$, ['setValue$S','setValue$TV'], function (value) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});
})()
), Clazz.new_(P$.Timing$1.$init$, [this, {now:now,message:message,duration:duration}])));
});

Clazz.newMeth(C$, 'report$S', function (description) {
System.err.println$S(description == null  ? C$.getCaller$() : description);
$I$(2).sort$java_util_List$java_util_Comparator(this.list, ((P$.Timing$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "Timing$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['compare$java_util_Map_Entry$java_util_Map_Entry','compare$','compare$TT$TT'], function (o1, o2) {
return Double.compare$D$D((o1.getKey$()).valueOf(), (o2.getKey$()).valueOf());
});
})()
), Clazz.new_(P$.Timing$2.$init$, [this, null])));
for (var e, $e = this.list.iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
System.err.printf$S$OA("% 5.3f ms %s\n", [new Double(((e.getKey$()).valueOf()) / 1000000.0), e.getValue$()]);
}
System.err.println$S("Total time: " + this.total + " = " + new Double((this.total / 1.0E9)).toString() + " sec" );
});

Clazz.newMeth(C$, 'getCaller$', function () {
var trace=$I$(3).currentThread$().getStackTrace$();
var i=1;
while (i + 1 < trace.length && Clazz.getClass(C$).getName$().equals$O(trace[i].getClassName$()) ){
i++;
}
return i >= trace.length ? "?" : trace[i].getClassName$() + "." + trace[i].getMethodName$() + "(" + trace[i].getFileName$() + ":" + trace[i].getLineNumber$() + ")" ;
}, 1);

Clazz.newMeth(C$, 'start$Z', function (condition) {
return condition ? Clazz.new_(C$) : null;
}, 1);

Clazz.newMeth(C$, 'tick$org_scijava_util_Timing', function (timing) {
if (timing != null ) timing.addTiming$O(null);
}, 1);

Clazz.newMeth(C$, 'tick$org_scijava_util_Timing$O', function (timing, message) {
if (timing != null ) timing.addTiming$O(message);
}, 1);

Clazz.newMeth(C$, 'stop$org_scijava_util_Timing', function (timing) {
if (timing == null ) return;
timing.addTiming$O(null);
timing.report$S(null);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
