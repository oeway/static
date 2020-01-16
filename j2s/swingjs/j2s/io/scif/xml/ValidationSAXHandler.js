(function(){var P$=Clazz.newPackage("io.scif.xml"),I$=[[0,'java.util.StringTokenizer']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ValidationSAXHandler", null, 'io.scif.xml.BaseHandler');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['first'],'S',['schemaPath']]]

Clazz.newMeth(C$, 'c$$org_scijava_log_LogService', function (log) {
;C$.superclazz.c$$org_scijava_log_LogService.apply(this,[log]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getSchemaPath$', function () {
return this.schemaPath;
});

Clazz.newMeth(C$, 'startDocument$', function () {
this.schemaPath=null;
this.first=true;
});

Clazz.newMeth(C$, 'startElement$S$S$S$org_xml_sax_Attributes', function (uri, localName, qName, attributes) {
if (!this.first) return;
this.first=false;
var len=attributes.getLength$();
var xmlns=null;
var xsiSchemaLocation=null;
for (var i=0; i < len; i++) {
var name=attributes.getQName$I(i);
if (name.equals$O("xmlns")) xmlns=attributes.getValue$I(i);
 else if (name.equals$O("schemaLocation") || name.endsWith$S(":schemaLocation") ) {
xsiSchemaLocation=attributes.getValue$I(i);
}}
if (xmlns == null  || xsiSchemaLocation == null  ) return;
var st=Clazz.new_($I$(1,1).c$$S,[xsiSchemaLocation]);
while (st.hasMoreTokens$()){
var token=st.nextToken$();
if (xmlns.equals$O(token)) {
if (st.hasMoreTokens$()) this.schemaPath=st.nextToken$();
break;
}}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:46 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
