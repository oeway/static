(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.status"),p$1={},I$=[[0,'org.apache.logging.log4j.Level']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "StatusConsoleListener", null, null, 'org.apache.logging.log4j.status.StatusListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.level=$I$(1).FATAL;
}, 1);

C$.$fields$=[['O',['level','org.apache.logging.log4j.Level','filters','String[]','stream','java.io.PrintStream']]]

Clazz.newMeth(C$, 'c$$org_apache_logging_log4j_Level', function (level) {
C$.c$$org_apache_logging_log4j_Level$java_io_PrintStream.apply(this, [level, System.out]);
}, 1);

Clazz.newMeth(C$, 'c$$org_apache_logging_log4j_Level$java_io_PrintStream', function (level, stream) {
;C$.$init$.apply(this);
if (stream == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["You must provide a stream to use for this listener."]);
}this.level=level;
this.stream=stream;
}, 1);

Clazz.newMeth(C$, 'setLevel$org_apache_logging_log4j_Level', function (level) {
this.level=level;
});

Clazz.newMeth(C$, 'getStatusLevel$', function () {
return this.level;
});

Clazz.newMeth(C$, 'log$org_apache_logging_log4j_status_StatusData', function (data) {
if (!p$1.filtered$org_apache_logging_log4j_status_StatusData.apply(this, [data])) {
this.stream.println$S(data.getFormattedStatus$());
}});

Clazz.newMeth(C$, 'setFilters$SA', function (filters) {
this.filters=filters;
});

Clazz.newMeth(C$, 'filtered$org_apache_logging_log4j_status_StatusData', function (data) {
if (this.filters == null ) {
return false;
}var $caller=data.getStackTraceElement$().getClassName$();
for (var filter, $filter = 0, $$filter = this.filters; $filter<$$filter.length&&((filter=($$filter[$filter])),1);$filter++) {
if ($caller.startsWith$S(filter)) {
return true;
}}
return false;
}, p$1);

Clazz.newMeth(C$, 'close$', function () {
if (this.stream !== System.out  && this.stream !== System.err  ) {
this.stream.close$();
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:57 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
