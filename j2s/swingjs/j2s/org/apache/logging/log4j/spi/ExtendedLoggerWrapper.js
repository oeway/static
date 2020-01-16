(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.spi"),I$=[[0,'org.apache.logging.log4j.util.StackLocatorUtil']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ExtendedLoggerWrapper", null, 'org.apache.logging.log4j.spi.AbstractLogger');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['logger','org.apache.logging.log4j.spi.ExtendedLogger']]
,['L',['serialVersionUID']]]

Clazz.newMeth(C$, 'c$$org_apache_logging_log4j_spi_ExtendedLogger$S$org_apache_logging_log4j_message_MessageFactory', function (logger, name, messageFactory) {
;C$.superclazz.c$$S$org_apache_logging_log4j_message_MessageFactory.apply(this, [name, messageFactory]);C$.$init$.apply(this);
this.logger=logger;
}, 1);

Clazz.newMeth(C$, 'getLevel$', function () {
return this.logger.getLevel$();
});

Clazz.newMeth(C$, 'isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable', function (level, marker, message, t) {
return this.logger.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable(level, marker, message, t);
});

Clazz.newMeth(C$, 'isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$CharSequence$Throwable', function (level, marker, message, t) {
return this.logger.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$CharSequence$Throwable(level, marker, message, t);
});

Clazz.newMeth(C$, 'isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable', function (level, marker, message, t) {
return this.logger.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable(level, marker, message, t);
});

Clazz.newMeth(C$, 'isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S', function (level, marker, message) {
return this.logger.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S(level, marker, message);
});

Clazz.newMeth(C$, 'isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$OA', function (level, marker, message, params) {
return this.logger.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$OA(level, marker, message, params);
});

Clazz.newMeth(C$, 'isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O', function (level, marker, message, p0) {
return this.logger.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O(level, marker, message, p0);
});

Clazz.newMeth(C$, 'isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O', function (level, marker, message, p0, p1) {
return this.logger.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O(level, marker, message, p0, p1);
});

Clazz.newMeth(C$, 'isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O', function (level, marker, message, p0, p1, p2) {
return this.logger.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O(level, marker, message, p0, p1, p2);
});

Clazz.newMeth(C$, 'isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O', function (level, marker, message, p0, p1, p2, p3) {
return this.logger.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O(level, marker, message, p0, p1, p2, p3);
});

Clazz.newMeth(C$, 'isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O', function (level, marker, message, p0, p1, p2, p3, p4) {
return this.logger.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O(level, marker, message, p0, p1, p2, p3, p4);
});

Clazz.newMeth(C$, 'isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O', function (level, marker, message, p0, p1, p2, p3, p4, p5) {
return this.logger.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O(level, marker, message, p0, p1, p2, p3, p4, p5);
});

Clazz.newMeth(C$, 'isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O', function (level, marker, message, p0, p1, p2, p3, p4, p5, p6) {
return this.logger.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O(level, marker, message, p0, p1, p2, p3, p4, p5, p6);
});

Clazz.newMeth(C$, 'isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O', function (level, marker, message, p0, p1, p2, p3, p4, p5, p6, p7) {
return this.logger.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O(level, marker, message, p0, p1, p2, p3, p4, p5, p6, p7);
});

Clazz.newMeth(C$, 'isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O', function (level, marker, message, p0, p1, p2, p3, p4, p5, p6, p7, p8) {
return this.logger.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O(level, marker, message, p0, p1, p2, p3, p4, p5, p6, p7, p8);
});

Clazz.newMeth(C$, 'isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O$O', function (level, marker, message, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9) {
return this.logger.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O$O(level, marker, message, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9);
});

Clazz.newMeth(C$, 'isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$Throwable', function (level, marker, message, t) {
return this.logger.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$Throwable(level, marker, message, t);
});

Clazz.newMeth(C$, 'logMessage$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable', function (fqcn, level, marker, message, t) {
if (Clazz.instanceOf(this.logger, "org.apache.logging.log4j.spi.LocationAwareLogger") && this.requiresLocation$() ) {
(this.logger).logMessage$(level, marker, fqcn, $I$(1).calcLocation$S(fqcn), message, t);
}this.logger.logMessage$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable(fqcn, level, marker, message, t);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:53 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
