(function(){var P$=Clazz.newPackage("io.scif.xml"),I$=[[0,'java.util.HashMap','org.scijava.log.StderrLogService']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MetadataHandler", null, 'io.scif.xml.BaseHandler');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.metadata=Clazz.new_(1,{K:"String",V:"String"},$I$(1,1));
}, 1);

C$.$fields$=[['S',['currentQName'],'O',['metadata','java.util.HashMap']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$org_scijava_log_LogService.apply(this, [Clazz.new_($I$(2,1))]);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_log_LogService', function (log) {
;C$.superclazz.c$$org_scijava_log_LogService.apply(this,[log]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getMetadata$', function () {
return this.metadata;
});

Clazz.newMeth(C$, 'characters$CA$I$I', function (data, start, len) {
this.metadata.put$TK$TV(this.currentQName,  String.instantialize(data, start, len));
});

Clazz.newMeth(C$, 'startElement$S$S$S$org_xml_sax_Attributes', function (uri, localName, qName, attributes) {
if (attributes.getLength$() == 0) this.currentQName += " - " + qName;
 else this.currentQName=qName;
for (var i=0; i < attributes.getLength$(); i++) {
this.metadata.put$TK$TV(qName + " - " + attributes.getQName$I(i) , attributes.getValue$I(i));
}
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:46 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
