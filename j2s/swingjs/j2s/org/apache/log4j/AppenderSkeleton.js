(function(){var P$=Clazz.newPackage("org.apache.log4j"),I$=[[0,['org.apache.log4j.AppenderSkeleton','.NoOpErrorHandler']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AppenderSkeleton", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['org.apache.log4j.Appender', 'org.apache.log4j.spi.OptionHandler']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.errorHandler=Clazz.new_($I$(1,1));
this.closed=false;
}, 1);

C$.$fields$=[['Z',['closed'],'S',['name'],'O',['layout','org.apache.log4j.Layout','threshold','org.apache.log4j.Priority','errorHandler','org.apache.log4j.spi.ErrorHandler','headFilter','org.apache.log4j.spi.Filter','+tailFilter']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$Z', function (isActive) {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'activateOptions$', function () {
});

Clazz.newMeth(C$, 'addFilter$org_apache_log4j_spi_Filter', function (newFilter) {
if (this.headFilter == null ) {
this.headFilter=this.tailFilter=newFilter;
} else {
this.tailFilter.setNext$org_apache_log4j_spi_Filter(newFilter);
this.tailFilter=newFilter;
}});

Clazz.newMeth(C$, 'clearFilters$', function () {
this.headFilter=this.tailFilter=null;
});

Clazz.newMeth(C$, 'finalize$', function () {
});

Clazz.newMeth(C$, 'getErrorHandler$', function () {
return this.errorHandler;
});

Clazz.newMeth(C$, 'getFilter$', function () {
return this.headFilter;
});

Clazz.newMeth(C$, 'getFirstFilter$', function () {
return this.headFilter;
});

Clazz.newMeth(C$, 'getLayout$', function () {
return this.layout;
});

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'getThreshold$', function () {
return this.threshold;
});

Clazz.newMeth(C$, 'isAsSevereAsThreshold$org_apache_log4j_Priority', function (priority) {
return ((this.threshold == null ) || priority.isGreaterOrEqual$org_apache_log4j_Priority(this.threshold) );
});

Clazz.newMeth(C$, 'doAppend$org_apache_log4j_spi_LoggingEvent', function (event) {
});

Clazz.newMeth(C$, 'setErrorHandler$org_apache_log4j_spi_ErrorHandler', function (eh) {
if (eh != null ) {
this.errorHandler=eh;
}});

Clazz.newMeth(C$, 'setLayout$org_apache_log4j_Layout', function (layout) {
this.layout=layout;
});

Clazz.newMeth(C$, 'setName$S', function (name) {
this.name=name;
});

Clazz.newMeth(C$, 'setThreshold$org_apache_log4j_Priority', function (threshold) {
this.threshold=threshold;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.AppenderSkeleton, "NoOpErrorHandler", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'org.apache.log4j.spi.ErrorHandler');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'setLogger$org_apache_log4j_Logger', function (logger) {
});

Clazz.newMeth(C$, 'error$S$Exception$I', function (message, e, errorCode) {
});

Clazz.newMeth(C$, 'error$S', function (message) {
});

Clazz.newMeth(C$, 'error$S$Exception$I$org_apache_log4j_spi_LoggingEvent', function (message, e, errorCode, event) {
});

Clazz.newMeth(C$, 'setAppender$org_apache_log4j_Appender', function (appender) {
});

Clazz.newMeth(C$, 'setBackupAppender$org_apache_log4j_Appender', function (appender) {
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:24:47 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
