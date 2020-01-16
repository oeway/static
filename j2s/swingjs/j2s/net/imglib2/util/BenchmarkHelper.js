(function(){var P$=Clazz.newPackage("net.imglib2.util"),I$=[[0,'java.util.ArrayList','java.util.Collections']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BenchmarkHelper");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'benchmark$I$Runnable', function (numRuns, benchmark) {
var times=Clazz.new_(1,{E:"Long"},$I$(1,1).c$$I,[numRuns]);
for (var i=0; i < numRuns; ++i) {
var startTime=System.currentTimeMillis$();
benchmark.run$();
var endTime=System.currentTimeMillis$();
times.add$TE(new Long(endTime - startTime));
}
return times;
}, 1);

Clazz.newMeth(C$, 'benchmarkAndPrint$I$Z$Runnable', function (numRuns, printIndividualTimes, b) {
var times=Clazz.new_(1,{E:"Long"},$I$(1,1).c$$I,[100]);
for (var i=0; i < numRuns; ++i) {
var startTime=System.currentTimeMillis$();
b.run$();
var endTime=System.currentTimeMillis$();
times.add$TE(new Long(endTime - startTime));
}
if (printIndividualTimes) {
for (var i=0; i < numRuns; ++i) System.out.println$S("run " + i + ": " + times.get$I(i) + " ms" );

System.out.println$();
}$I$(2).sort$java_util_List(times);
System.out.println$S("median: " + C$.median$java_util_ArrayList(times) + " ms" );
System.out.println$S("best: " + times.get$I(0) + " ms" );
System.out.println$();
}, 1);

Clazz.newMeth(C$, 'median$java_util_ArrayList', function (values) {
if (values.size$() % 2 == 1) return (values.get$I(((values.size$() + 1)/2|0) - 1)).valueOf();
var lower=(values.get$I((values.size$()/2|0) - 1)).valueOf();
var upper=(values.get$I((values.size$()/2|0))).valueOf();
return ((lower + upper)/2|0);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:13 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
