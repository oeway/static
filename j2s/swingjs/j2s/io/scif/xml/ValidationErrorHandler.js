(function(){var P$=Clazz.newPackage("io.scif.xml"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ValidationErrorHandler", null, null, 'org.xml.sax.ErrorHandler');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.errors=0;
}, 1);

C$.$fields$=[['I',['errors'],'O',['log','org.scijava.log.LogService']]]

Clazz.newMeth(C$, 'c$$org_scijava_log_LogService', function (log) {
;C$.$init$.apply(this);
this.log=log;
}, 1);

Clazz.newMeth(C$, 'ok$', function () {
return this.errors == 0;
});

Clazz.newMeth(C$, 'getErrorCount$', function () {
return this.errors;
});

Clazz.newMeth(C$, 'error$org_xml_sax_SAXParseException', function (e) {
this.log.error$O(e.getMessage$());
this.errors++;
});

Clazz.newMeth(C$, 'fatalError$org_xml_sax_SAXParseException', function (e) {
this.log.error$O(e.getMessage$());
this.errors++;
});

Clazz.newMeth(C$, 'warning$org_xml_sax_SAXParseException', function (e) {
this.log.warn$O(e.getMessage$());
this.errors++;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:46 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
