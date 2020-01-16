(function(){var P$=Clazz.newPackage("org.scijava.run"),I$=[[0,'org.scijava.run.CodeRunner']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "RunService", null, null, ['org.scijava.plugin.HandlerService', 'org.scijava.service.SciJavaService']);

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'run$O$OA', function (code, args) {
for (var runner, $runner = this.getInstances$().iterator$(); $runner.hasNext$()&&((runner=($runner.next$())),1);) {
if (runner.supports$TT(code)) {
runner.run$O$OA(code, args);
return;
}}
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unknown code type: " + code]);
});

Clazz.newMeth(C$, 'run$O$java_util_Map', function (code, inputMap) {
for (var runner, $runner = this.getInstances$().iterator$(); $runner.hasNext$()&&((runner=($runner.next$())),1);) {
if (runner.supports$TT(code)) {
runner.run$O$java_util_Map(code, inputMap);
return;
}}
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unknown code type: " + code]);
});

Clazz.newMeth(C$, 'getPluginType$', function () {
return Clazz.getClass($I$(1),['getType$','run$O$OA','run$O$java_util_Map']);
});

Clazz.newMeth(C$, 'getType$', function () {
return Clazz.getClass(java.lang.Object);
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:29 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
