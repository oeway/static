(function(){var P$=Clazz.newPackage("org.scijava.log"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "StderrLogService", null, 'org.scijava.log.AbstractLogService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.levelToStream=(P$.StderrLogService$lambda1$||(P$.StderrLogService$lambda1$=(((P$.StderrLogService$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "StderrLogService$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$'], function (level) { return (((level).valueOf() <= 2 ) ? System.err : System.out);});
})()
), Clazz.new_(1,{T:"Integer",R:"java.io.PrintStream"},P$.StderrLogService$lambda1.$init$, [this, null])))));
}, 1);

C$.$fields$=[['O',['levelToStream','java.util.function.Function']]]

Clazz.newMeth(C$, 'setPrintStreams$java_util_function_Function', function (levelToStream) {
this.levelToStream=levelToStream;
});

Clazz.newMeth(C$, 'messageLogged$org_scijava_log_LogMessage', function (message) {
var out=this.levelToStream.apply$(new Integer(message.level$()));
out.print$O(message);
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.log.StderrLogService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" priority="-100.0" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:26 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
