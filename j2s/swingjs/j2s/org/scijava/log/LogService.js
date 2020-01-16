(function(){var P$=Clazz.newPackage("org.scijava.log"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "LogService", null, null, ['org.scijava.service.SciJavaService', 'org.scijava.log.Logger']);

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.LOG_LEVEL_PROPERTY="scijava.log.level";
C$.LOG_LEVEL_BY_SOURCE_PROPERTY="scijava.log.level.source";
C$.NONE=0;
C$.ERROR=1;
C$.WARN=2;
C$.INFO=3;
C$.DEBUG=4;
C$.TRACE=5;
}

C$.$fields$=[[]
,['I',['NONE','ERROR','WARN','INFO','DEBUG','TRACE'],'S',['LOG_LEVEL_PROPERTY','LOG_LEVEL_BY_SOURCE_PROPERTY']]]
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:26 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
