(function(){var P$=Clazz.newPackage("org.scijava.util"),I$=[[0,'org.scijava.annotations.EclipseHelper','java.net.URLClassLoader','java.net.URL','javax.xml.transform.dom.DOMSource','javax.xml.transform.stream.StreamResult','javax.xml.transform.TransformerFactory']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "CheckSezpoz");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['Z',['verbose']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'check$Z', function (checkJars) {
$I$(1).main$SA([]);
return false;
}, 1);

Clazz.newMeth(C$, 'check$java_io_File', function (file) {
System.err.println$S("Warning: Deprecated CheckSezpoz class was called!");
$I$(1).updateAnnotationIndex$ClassLoader(Clazz.new_($I$(2,1).c$$java_net_URLA,[Clazz.array($I$(3), -1, [file.toURI$().toURL$()])]));
return false;
}, 1);

Clazz.newMeth(C$, 'checkDirectory$java_io_File', function (classes) {
return C$.check$java_io_File(classes);
}, 1);

Clazz.newMeth(C$, 'checkDirectory$java_io_File$java_io_File$J', function (classes, source, youngerThan) {
return C$.check$java_io_File(classes);
}, 1);

Clazz.newMeth(C$, 'checkJar$java_io_File', function (file) {
C$.check$java_io_File(file);
}, 1);

Clazz.newMeth(C$, 'fix$java_io_File$java_io_File', function (classes, sources) {
try {
return C$.check$java_io_File(classes);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[e]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'writeXMLFile$org_w3c_dom_Document$java_io_File', function (xml, file) {
var source=Clazz.new_($I$(4,1).c$$org_w3c_dom_Node,[xml]);
var result=Clazz.new_($I$(5,1).c$$java_io_File,[file]);
var factory=$I$(6).newInstance$();
var transformer=factory.newTransformer$();
transformer.setOutputProperty$S$S("indent", "yes");
transformer.setOutputProperty$S$S("{http://xml.apache.org/xslt}indent-amount", "4");
transformer.transform$javax_xml_transform_Source$javax_xml_transform_Result(source, result);
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
