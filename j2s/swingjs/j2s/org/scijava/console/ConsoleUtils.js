(function(){var P$=Clazz.newPackage("org.scijava.console"),I$=[[0,'java.util.HashMap']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ConsoleUtils");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'parseParameterString$S', function (parameterString) {
return C$.parseParameterString$S$org_scijava_module_ModuleInfo(parameterString, null);
}, 1);

Clazz.newMeth(C$, 'parseParameterString$S$org_scijava_module_ModuleInfo', function (parameterString, info) {
return C$.parseParameterString$S$org_scijava_module_ModuleInfo$org_scijava_log_LogService(parameterString, info, null);
}, 1);

Clazz.newMeth(C$, 'parseParameterString$S$org_scijava_log_LogService', function (parameterString, log) {
return C$.parseParameterString$S$org_scijava_module_ModuleInfo$org_scijava_log_LogService(parameterString, null, log);
}, 1);

Clazz.newMeth(C$, 'parseParameterString$S$org_scijava_module_ModuleInfo$org_scijava_log_LogService', function (parameterString, info, log) {
var inputMap=Clazz.new_(1,{K:"String",V:"java.lang.Object"},$I$(1,1));
if (!parameterString.isEmpty$()) {
var inputs=null;
if (info != null ) {
inputs=info.inputs$().iterator$();
}var pairs=parameterString.split$S(",");
for (var pair, $pair = 0, $$pair = pairs; $pair<$$pair.length&&((pair=($$pair[$pair])),1);$pair++) {
var split=pair.split$S("=");
if (split.length == 2) inputMap.put$TK$TV(split[0], split[1]);
 else if (inputs != null  && inputs.hasNext$()  && split.length == 1 ) {
inputMap.put$TK$TV(inputs.next$().getName$(), split[0]);
} else if (log != null ) log.error$O("Parameters must be formatted as a comma-separated list of key=value pairs");
}
}return inputMap;
}, 1);

Clazz.newMeth(C$, 'hasParam$java_util_LinkedList', function (args) {
return !(args.isEmpty$() || args.getFirst$().startsWith$S("-") );
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:23 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
