(function(){var P$=Clazz.newPackage("org.apache.logging.log4j"),I$=[[0,'org.apache.logging.log4j.MarkerManager','org.apache.logging.log4j.LogManager','org.apache.logging.log4j.Level']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "EventLogger");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.EVENT_MARKER=$I$(1).getMarker$S("EVENT");
C$.FQCN=Clazz.getClass(C$).getName$();
C$.LOGGER=$I$(2).getContext$Z(false).getLogger$S("EventLogger");
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['S',['NAME','FQCN'],'O',['EVENT_MARKER','org.apache.logging.log4j.Marker','LOGGER','org.apache.logging.log4j.spi.ExtendedLogger']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'logEvent$org_apache_logging_log4j_message_StructuredDataMessage', function (msg) {
C$.LOGGER.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable(C$.FQCN, $I$(3).OFF, C$.EVENT_MARKER, msg, null);
}, 1);

Clazz.newMeth(C$, 'logEvent$org_apache_logging_log4j_message_StructuredDataMessage$org_apache_logging_log4j_Level', function (msg, level) {
C$.LOGGER.logIfEnabled$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable(C$.FQCN, level, C$.EVENT_MARKER, msg, null);
}, 1);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:55 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
