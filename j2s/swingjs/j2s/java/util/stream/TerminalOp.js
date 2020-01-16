(function(){var P$=Clazz.newPackage("java.util.stream"),I$=[[0,'java.util.stream.StreamShape','java.util.stream.Tripwire']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "TerminalOp");
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'inputShape$', function () {
return $I$(1).REFERENCE;
});

Clazz.newMeth(C$, 'getOpFlags$', function () {
return 0;
});

Clazz.newMeth(C$, 'evaluateParallel$java_util_stream_PipelineHelper$java_util_Spliterator', function (helper, spliterator) {
if (false) $I$(2).trip$Class$S(this.getClass$(), "{0} triggering TerminalOp.evaluateParallel serial default");
return this.evaluateSequential$(helper, spliterator);
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:50:11 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
