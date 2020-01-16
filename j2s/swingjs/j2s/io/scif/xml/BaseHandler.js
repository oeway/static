(function(){var P$=Clazz.newPackage("io.scif.xml"),I$=[[0,'org.xml.sax.InputSource','java.io.StringReader']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BaseHandler", null, 'org.xml.sax.helpers.DefaultHandler');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['log','org.scijava.log.LogService']]]

Clazz.newMeth(C$, 'c$$org_scijava_log_LogService', function (log) {
Clazz.super_(C$, this);
this.log=log;
}, 1);

Clazz.newMeth(C$, ['resolveEntity$S$S','resolveEntity$'], function (publicId, systemId) {
this.log.debug$O("Ignoring: " + publicId + ", " + systemId );
return Clazz.new_($I$(1,1).c$$java_io_Reader,[Clazz.new_($I$(2,1).c$$S,[""])]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:46 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
