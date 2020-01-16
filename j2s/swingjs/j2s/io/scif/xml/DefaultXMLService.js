(function(){var P$=Clazz.newPackage("io.scif.xml"),p$1={},I$=[[0,'ThreadLocal','java.util.HashMap','javax.xml.validation.SchemaFactory','java.io.FileInputStream','java.io.ByteArrayInputStream','java.io.BufferedInputStream','javax.xml.parsers.DocumentBuilderFactory','io.scif.xml.ParserErrorHandler','javax.xml.transform.dom.DOMSource','java.io.StringWriter','javax.xml.transform.stream.StreamResult','javax.xml.transform.TransformerFactory',['io.scif.xml.DefaultXMLService','.XMLListener'],'StringBuilder','java.util.StringTokenizer','io.scif.xml.MetadataHandler','javax.xml.parsers.SAXParserFactory','javax.xml.transform.stream.StreamSource','java.util.HashSet','java.util.regex.Pattern','java.io.StringReader','io.scif.xml.ValidationSAXHandler','java.net.URI','org.xml.sax.InputSource','javax.xml.transform.sax.SAXSource','io.scif.xml.ValidationErrorHandler']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultXMLService", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.scijava.service.AbstractService', 'io.scif.xml.XMLService');
C$.$classes$=[['XMLListener',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.schemas=$I$(1).withInitial$java_util_function_Supplier(((P$.DefaultXMLService$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "DefaultXMLService$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]]
/*lambda_C*/
Clazz.newMeth(C$, 'get$', function () { return Clazz.new_($I$(2,1),[])});
})()
), Clazz.new_(1,{T:"? extends java.util.HashMap"},P$.DefaultXMLService$lambda1.$init$, [this, null])));
}, 1);

C$.$fields$=[['O',['log','org.scijava.log.LogService','schemas','ThreadLocal']]
,['O',['FACTORY','javax.xml.validation.SchemaFactory']]]

Clazz.newMeth(C$, 'getFactory$', function () {
return (C$.FACTORY == null  ? C$.FACTORY=$I$(3).newInstance$S("http://www.w3.org/2001/XMLSchema") : C$.FACTORY);
}, 1);

Clazz.newMeth(C$, 'parseDOM$java_io_File', function (file) {
try {
var is=Clazz.new_($I$(4,1).c$$java_io_File,[file]);
/*try*/ {
return this.parseDOM$java_io_InputStream(is);
}
}finally{/*res*/
try{is&&is.close$&&is.close$()}catch(_){}}
});

Clazz.newMeth(C$, 'parseDOM$S', function (xml) {
var bytes=xml.getBytes$S("UTF-8");
try {
var is=Clazz.new_($I$(5,1).c$$BA,[bytes]);
/*try*/ {
return this.parseDOM$java_io_InputStream(is);
}
}finally{/*res*/
try{is&&is.close$&&is.close$()}catch(_){}}
});

Clazz.newMeth(C$, 'parseDOM$java_io_InputStream', function (is) {
var $in=is.markSupported$() ? is : Clazz.new_($I$(6,1).c$$java_io_InputStream,[is]);
p$1.checkUTF8$java_io_InputStream.apply(this, [$in]);
var factory=$I$(7).newInstance$();
var db=factory.newDocumentBuilder$();
db.setErrorHandler$org_xml_sax_ErrorHandler(Clazz.new_($I$(8,1).c$$org_scijava_log_LogService,[this.log]));
return db.parse$java_io_InputStream($in);
});

Clazz.newMeth(C$, 'getXML$org_w3c_dom_Document', function (doc) {
var source=Clazz.new_($I$(9,1).c$$org_w3c_dom_Node,[doc]);
var stringWriter=Clazz.new_($I$(10,1));
var result=Clazz.new_($I$(11,1).c$$java_io_Writer,[stringWriter]);
var factory=$I$(12).newInstance$();
factory.setErrorListener$javax_xml_transform_ErrorListener(Clazz.new_($I$(13,1), [this, null]));
var transformer=factory.newTransformer$();
transformer.transform$javax_xml_transform_Source$javax_xml_transform_Result(source, result);
return stringWriter.getBuffer$().toString();
});

Clazz.newMeth(C$, 'sanitizeXML$S', function (s) {
var c=s.toCharArray$();
for (var i=0; i < s.length$(); i++) {
if ((Character.isISOControl$C(c[i]) && c[i] != "\n" ) || !Character.isDefined$C(c[i]) ) {
c[i]=" ";
}if (i > 0 && c[i - 1] == "&"  && c[i] == "#" ) c[i - 1]=" ";
}
return  String.instantialize(c);
});

Clazz.newMeth(C$, 'escapeXML$S', function (s) {
var sb=Clazz.new_($I$(14,1));
for (var i=0; i < s.length$(); i++) {
var c=s.charAt$I(i);
if (c == "<") {
sb.append$S("&lt;");
} else if (c == ">") {
sb.append$S("&gt;");
} else if (c == "&") {
sb.append$S("&amp;");
} else if (c == "\"") {
sb.append$S("&quot;");
} else if (c == "\'") {
sb.append$S("&apos;");
} else {
sb.append$C(c);
}}
return sb.toString();
});

Clazz.newMeth(C$, 'indentXML$S', function (xml) {
return this.indentXML$S$I$Z(xml, 3, false);
});

Clazz.newMeth(C$, 'indentXML$S$I', function (xml, spacing) {
return this.indentXML$S$I$Z(xml, spacing, false);
});

Clazz.newMeth(C$, 'indentXML$S$Z', function (xml, preserveCData) {
return this.indentXML$S$I$Z(xml, 3, preserveCData);
});

Clazz.newMeth(C$, 'indentXML$S$I$Z', function (xml, spacing, preserveCData) {
if (xml == null ) return null;
var sb=Clazz.new_($I$(14,1));
var st=Clazz.new_($I$(15,1).c$$S$S$Z,[xml, "<>", true]);
var indent=0;
var noSpace=0;
var first=true;
var element=false;
while (st.hasMoreTokens$()){
var token=st.nextToken$().trim$();
if (token.equals$O("")) continue;
if (token.equals$O("<")) {
element=true;
continue;
}if (element && token.equals$O(">") ) {
element=false;
continue;
}if (!element && preserveCData ) noSpace=2;
if (noSpace == 0) {
if (first) first=false;
 else sb.append$S("\n");
}if (element && token.startsWith$S("/") ) indent-=spacing;
if (noSpace == 0) {
for (var j=0; j < indent; j++) sb.append$S(" ");

}if (element) sb.append$S("<");
sb.append$S(token);
if (element) sb.append$S(">");
if (noSpace == 0) {
if (element && !token.startsWith$S("?") && !token.startsWith$S("/") && !token.endsWith$S("/") && !token.startsWith$S("!")  ) {
indent+=spacing;
}}if (noSpace > 0) noSpace--;
}
sb.append$S("\n");
return sb.toString();
});

Clazz.newMeth(C$, 'parseXML$S', function (xml) {
var handler=Clazz.new_($I$(16,1));
this.parseXML$S$org_xml_sax_helpers_DefaultHandler(xml, handler);
return handler.getMetadata$();
});

Clazz.newMeth(C$, 'parseXML$S$org_xml_sax_helpers_DefaultHandler', function (xml, handler) {
this.parseXML$BA$org_xml_sax_helpers_DefaultHandler(xml.getBytes$S("UTF-8"), handler);
});

Clazz.newMeth(C$, 'parseXML$org_scijava_io_handle_DataHandle$org_xml_sax_helpers_DefaultHandler', function (stream, handler) {
this.parseXML$java_io_InputStream$org_xml_sax_helpers_DefaultHandler(stream, handler);
});

Clazz.newMeth(C$, 'parseXML$BA$org_xml_sax_helpers_DefaultHandler', function (xml, handler) {
this.parseXML$java_io_InputStream$org_xml_sax_helpers_DefaultHandler(Clazz.new_($I$(5,1).c$$BA,[xml]), handler);
});

Clazz.newMeth(C$, 'parseXML$java_io_InputStream$org_xml_sax_helpers_DefaultHandler', function (xml, handler) {
try {
var factory=$I$(17).newInstance$();
var parser=factory.newSAXParser$();
parser.parse$java_io_InputStream$org_xml_sax_helpers_DefaultHandler(xml, handler);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"javax.xml.parsers.ParserConfigurationException")){
var exc = e$$;
{
var e=Clazz.new_(Clazz.load('java.io.IOException'));
e.initCause$Throwable(exc);
throw e;
}
} else if (Clazz.exceptionOf(e$$,"org.xml.sax.SAXException")){
var exc = e$$;
{
var e=Clazz.new_(Clazz.load('java.io.IOException'));
e.initCause$Throwable(exc);
throw e;
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, 'getStylesheet$S$Class', function (resourcePath, sourceClass) {
var xsltStream;
if (sourceClass == null ) {
try {
xsltStream=Clazz.new_($I$(4,1).c$$S,[resourcePath]);
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.IOException")){
this.log.debug$O$Throwable("Could not open file", exc);
return null;
} else {
throw exc;
}
}
} else {
xsltStream=sourceClass.getResourceAsStream$S(resourcePath);
}try {
var xsltSource=Clazz.new_($I$(18,1).c$$java_io_InputStream,[xsltStream]);
var transformerFactory=$I$(12).newInstance$();
transformerFactory.setErrorListener$javax_xml_transform_ErrorListener(Clazz.new_($I$(13,1), [this, null]));
return transformerFactory.newTemplates$javax_xml_transform_Source(xsltSource);
} catch (exc) {
if (Clazz.exceptionOf(exc,"javax.xml.transform.TransformerConfigurationException")){
this.log.debug$O$Throwable("Could not construct template", exc);
} else {
throw exc;
}
} finally {
try {
if (xsltStream != null ) xsltStream.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
this.log.debug$O$Throwable("Could not close file", e);
} else {
throw e;
}
}
}
return null;
});

Clazz.newMeth(C$, 'avoidUndeclaredNamespaces$S', function (xml) {
var gt=xml.indexOf$I(">");
if (gt > 0 && xml.startsWith$S("<?xml ") ) gt=xml.indexOf$I$I(">", gt + 1);
if (gt > 0) {
var firstTag=xml.substring$I$I(0, gt + 1).toLowerCase$();
while (firstTag.endsWith$S("-->")){
gt=xml.indexOf$I$I(">", gt + 1);
firstTag=xml.substring$I$I(0, gt + 1).toLowerCase$();
}
var namespaces=Clazz.new_(1,{E:"String"},$I$(19,1));
var pattern=$I$(20).compile$S(" xmlns:(\\w+)");
var matcher=pattern.matcher$CharSequence(firstTag);
while (matcher.find$()){
namespaces.add$TE(matcher.group$I(1));
}
pattern=$I$(20).compile$S("</?(\\w+):");
matcher=pattern.matcher$CharSequence(xml);
while (matcher.find$()){
var namespace=matcher.group$I(1);
if (!namespace.equalsIgnoreCase$S("OME") && !namespace.startsWith$S("ns") && !namespaces.contains$O(namespace.toLowerCase$())  ) {
var end=matcher.end$();
xml=xml.substring$I$I(0, end - 1) + "_" + xml.substring$I(end) ;
}}
var emptyNamespaces=$I$(20).compile$S(" xmlns:(\\w+)=\"\"");
matcher=emptyNamespaces.matcher$CharSequence(firstTag);
while (matcher.find$()){
var start=matcher.start$();
var end=matcher.end$();
xml=xml.substring$I$I(0, start + 1) + xml.substring$I(end);
}
}return xml;
});

Clazz.newMeth(C$, 'transformXML$S$javax_xml_transform_Templates', function (xml, xslt) {
xml=this.avoidUndeclaredNamespaces$S(xml);
return this.transformXML$javax_xml_transform_Source$javax_xml_transform_Templates(Clazz.new_($I$(18,1).c$$java_io_Reader,[Clazz.new_($I$(21,1).c$$S,[xml])]), xslt);
});

Clazz.newMeth(C$, 'transformXML$javax_xml_transform_Source$javax_xml_transform_Templates', function (xmlSource, xslt) {
var trans;
try {
trans=xslt.newTransformer$();
trans.setErrorListener$javax_xml_transform_ErrorListener(Clazz.new_($I$(13,1), [this, null]));
} catch (exc) {
if (Clazz.exceptionOf(exc,"javax.xml.transform.TransformerConfigurationException")){
var e=Clazz.new_(Clazz.load('java.io.IOException'));
e.initCause$Throwable(exc);
throw e;
} else {
throw exc;
}
}
var xmlWriter=Clazz.new_($I$(10,1));
var xmlResult=Clazz.new_($I$(11,1).c$$java_io_Writer,[xmlWriter]);
try {
trans.transform$javax_xml_transform_Source$javax_xml_transform_Result(xmlSource, xmlResult);
} catch (exc) {
if (Clazz.exceptionOf(exc,"javax.xml.transform.TransformerException")){
var e=Clazz.new_(Clazz.load('java.io.IOException'));
e.initCause$Throwable(exc);
throw e;
} else {
throw exc;
}
}
return xmlWriter.toString();
});

Clazz.newMeth(C$, 'validateXML$S', function (xml) {
return this.validateXML$S$S(xml, null);
});

Clazz.newMeth(C$, 'validateXML$S$S', function (xml, label) {
if (label == null ) label="XML";
var exception=null;
this.log.info$O("Parsing schema path");
var saxHandler=Clazz.new_($I$(22,1).c$$org_scijava_log_LogService,[this.log]);
try {
var factory=$I$(17).newInstance$();
var saxParser=factory.newSAXParser$();
var is=Clazz.new_($I$(5,1).c$$BA,[xml.getBytes$S("UTF-8")]);
saxParser.parse$java_io_InputStream$org_xml_sax_helpers_DefaultHandler(is, saxHandler);
} catch (exc) {
if (Clazz.exceptionOf(exc,"javax.xml.parsers.ParserConfigurationException") || Clazz.exceptionOf(exc,"org.xml.sax.SAXException") || Clazz.exceptionOf(exc,"java.io.IOException")){
exception=exc;
} else {
throw exc;
}
}
if (exception != null ) {
this.log.warn$O$Throwable("Error parsing schema path from " + label, exception);
return false;
}var schemaPath=saxHandler.getSchemaPath$();
if (schemaPath == null ) {
this.log.error$O("No schema path found. Validation cannot continue.");
return false;
}this.log.info$O(schemaPath);
this.log.info$O("Validating " + label);
var schemaLocation=null;
try {
schemaLocation=Clazz.new_($I$(23,1).c$$S,[schemaPath]);
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.net.URISyntaxException")){
this.log.info$O$Throwable("Error accessing schema at " + schemaPath, exc);
return false;
} else {
throw exc;
}
}
var schema=this.schemas.get$().get$O(schemaLocation);
if (schema == null ) {
try {
schema=C$.getFactory$().newSchema$java_net_URL(schemaLocation.toURL$());
this.schemas.get$().put$TK$TV(schemaLocation, schema);
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.net.MalformedURLException") || Clazz.exceptionOf(exc,"org.xml.sax.SAXException")){
this.log.info$O$Throwable("Error parsing schema at " + schemaPath, exc);
return false;
} else {
throw exc;
}
}
}var validator=schema.newValidator$();
var reader=Clazz.new_($I$(21,1).c$$S,[xml]);
var is=Clazz.new_($I$(24,1).c$$java_io_Reader,[reader]);
var source=Clazz.new_($I$(25,1).c$$org_xml_sax_InputSource,[is]);
var errorHandler=Clazz.new_($I$(26,1).c$$org_scijava_log_LogService,[this.log]);
validator.setErrorHandler$org_xml_sax_ErrorHandler(errorHandler);
try {
validator.validate$javax_xml_transform_Source(source);
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.IOException") || Clazz.exceptionOf(exc,"org.xml.sax.SAXException")){
this.log.info$O("Error validating document " + exc);
} else {
throw exc;
}
}
var errors=errorHandler.getErrorCount$();
if (errors > 0) {
this.log.info$O("Error validating document: " + errors + " errors found" );
return false;
}this.log.info$O("No validation errors found.");
return errorHandler.ok$();
});

Clazz.newMeth(C$, 'checkUTF8$java_io_InputStream', function (is) {
is.mark$I(3);
if (is.read$() != 239 || is.read$() != 187  || is.read$() != 191 ) {
is.reset$();
}}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'io.scif.xml.DefaultXMLService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']],
  [['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultXMLService, "XMLListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.xml.transform.ErrorListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'error$javax_xml_transform_TransformerException', function (e) {
this.this$0.log.debug$O$Throwable("", e);
});

Clazz.newMeth(C$, 'fatalError$javax_xml_transform_TransformerException', function (e) {
this.this$0.log.debug$O$Throwable("", e);
});

Clazz.newMeth(C$, 'warning$javax_xml_transform_TransformerException', function (e) {
this.this$0.log.debug$O$Throwable("", e);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:46 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
