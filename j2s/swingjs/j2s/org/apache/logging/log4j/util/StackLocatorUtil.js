(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.util"),I$=[[0,'org.apache.logging.log4j.util.StackLocator','org.apache.logging.log4j.status.StatusLogger']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "StackLocatorUtil");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.stackLocator=null;
C$.errorLogged=false;
{
C$.stackLocator=$I$(1).getInstance$();
};
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['Z',['errorLogged'],'O',['stackLocator','org.apache.logging.log4j.util.StackLocator']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getCallerClass$I', function (depth) {
return C$.stackLocator.getCallerClass$I(depth + 1);
}, 1);

Clazz.newMeth(C$, 'getStackTraceElement$I', function (depth) {
return C$.stackLocator.getStackTraceElement$I(depth + 1);
}, 1);

Clazz.newMeth(C$, 'getCallerClass$S', function (fqcn) {
return C$.getCallerClass$S$S(fqcn, "");
}, 1);

Clazz.newMeth(C$, 'getCallerClass$S$S', function (fqcn, pkg) {
return C$.stackLocator.getCallerClass$S$S(fqcn, pkg);
}, 1);

Clazz.newMeth(C$, 'getCallerClass$Class', function (anchor) {
return C$.stackLocator.getCallerClass$Class(anchor);
}, 1);

Clazz.newMeth(C$, 'getCurrentStackTrace$', function () {
return C$.stackLocator.getCurrentStackTrace$();
}, 1);

Clazz.newMeth(C$, 'calcLocation$S', function (fqcnOfLogger) {
try {
return C$.stackLocator.calcLocation$S(fqcnOfLogger);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.util.NoSuchElementException")){
if (!C$.errorLogged) {
C$.errorLogged=true;
$I$(2).getLogger$().warn$S$O$O("Unable to locate stack trace element for {}", fqcnOfLogger, ex);
}return null;
} else {
throw ex;
}
}
}, 1);
C$.$getAnn$ = function(){ return [
[['M:getCallerClass','Class','getCallerClass$I',['org.apache.logging.log4j.util.PerformanceSensitive']],['']],
  [['M:getCallerClass','.','getCallerClass$S',['org.apache.logging.log4j.util.PerformanceSensitive']],['']],
  [['M:getCallerClass','.','getCallerClass$S$S',['org.apache.logging.log4j.util.PerformanceSensitive']],['']],
  [['M:getCallerClass','.','getCallerClass$Class',['org.apache.logging.log4j.util.PerformanceSensitive']],['']],
  [['M:getCurrentStackTrace','java.util.Stack','getCurrentStackTrace$',['org.apache.logging.log4j.util.PerformanceSensitive']],['']]]}
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:56 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
