(function(){var P$=Clazz.newPackage("org.scijava.util"),I$=[[0,'org.scijava.util.Types','javax.xml.xpath.XPathFactory','Thread','Error','javax.xml.xpath.XPathConstants','java.io.ByteArrayOutputStream','java.io.PrintStream','java.util.ArrayList','java.io.ByteArrayInputStream','javax.xml.parsers.DocumentBuilderFactory','javax.xml.transform.dom.DOMSource','java.io.StringWriter','javax.xml.transform.stream.StreamResult','javax.xml.transform.TransformerFactory']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "XML");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.debug="debug".equals$O(System.getProperty$S("scijava.log.level"));
}, 1);

C$.$fields$=[['Z',['debug'],'S',['path'],'O',['doc','org.w3c.dom.Document','xpath','javax.xml.xpath.XPath']]]

Clazz.newMeth(C$, 'c$$java_io_File', function (file) {
C$.c$$S$org_w3c_dom_Document.apply(this, [file.getAbsolutePath$(), C$.loadXML$java_io_File(file)]);
}, 1);

Clazz.newMeth(C$, 'c$$java_net_URL', function (url) {
C$.c$$S$org_w3c_dom_Document.apply(this, [url.getPath$(), C$.loadXML$java_net_URL(url)]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_InputStream', function ($in) {
C$.c$$S$org_w3c_dom_Document.apply(this, [null, C$.loadXML$java_io_InputStream($in)]);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (s) {
C$.c$$S$org_w3c_dom_Document.apply(this, [null, C$.loadXML$S(s)]);
}, 1);

Clazz.newMeth(C$, 'c$$org_w3c_dom_Document', function (doc) {
C$.c$$S$org_w3c_dom_Document.apply(this, [null, doc]);
}, 1);

Clazz.newMeth(C$, 'c$$S$org_w3c_dom_Document', function (path, doc) {
;C$.$init$.apply(this);
this.path=path;
this.doc=doc;
if (this.debug) {
System.err.println$O($I$(1).location$Class(Clazz.getClass($I$(2))));
}var xp=null;
var thread=$I$(3).currentThread$();
var contextClassLoader=thread.getContextClassLoader$();
try {
var loader=contextClassLoader;
while (true){
try {
xp=$I$(2).newInstance$().newXPath$();
try {
xp.evaluate$S$O("//dummy", doc);
} catch (t) {
if (this.debug) {
System.err.println$S("There was a problem with " + xp.getClass$() + " in " + $I$(1).location$Class(xp.getClass$()) + ":" );
t.printStackTrace$();
}throw Clazz.new_($I$(4,1).c$$Throwable,[t]);
}
break;
} catch (e) {
if (Clazz.exceptionOf(e,"Error")){
if (this.debug) e.printStackTrace$();
loader=loader.getParent$();
if (loader == null ) throw e;
thread.setContextClassLoader$ClassLoader(loader);
} else {
throw e;
}
}
}
this.xpath=xp;
} finally {
thread.setContextClassLoader$ClassLoader(contextClassLoader);
}
}, 1);

Clazz.newMeth(C$, 'getPath$', function () {
return this.path;
});

Clazz.newMeth(C$, 'getDocument$', function () {
return this.doc;
});

Clazz.newMeth(C$, 'cdata$S', function (expression) {
var nodes=this.xpath$S(expression);
if (nodes == null  || nodes.getLength$() == 0 ) return null;
return C$.cdata$org_w3c_dom_Node(nodes.item$I(0));
});

Clazz.newMeth(C$, 'elements$S', function (expression) {
return C$.elements$org_w3c_dom_NodeList(this.xpath$S(expression));
});

Clazz.newMeth(C$, 'xpath$S', function (expression) {
var result;
try {
result=this.xpath.evaluate$S$O$javax_xml_namespace_QName(expression, this.doc, $I$(5).NODESET);
} catch (e) {
if (Clazz.exceptionOf(e,"javax.xml.xpath.XPathExpressionException")){
return null;
} else {
throw e;
}
}
return result;
});

Clazz.newMeth(C$, 'toString', function () {
try {
return C$.dumpXML$org_w3c_dom_Document(this.doc);
} catch (exc) {
if (Clazz.exceptionOf(exc,"javax.xml.transform.TransformerException")){
var out=Clazz.new_($I$(6,1));
exc.printStackTrace$java_io_PrintStream(Clazz.new_($I$(7,1).c$$java_io_OutputStream,[out]));
return out.toString();
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'cdata$org_w3c_dom_Node', function (item) {
var children=item.getChildNodes$();
if (children == null  || children.getLength$() == 0 ) return null;
for (var i=0; i < children.getLength$(); i++) {
var child=children.item$I(i);
if (child.getNodeType$() != 3) continue;
return child.getNodeValue$();
}
return null;
}, 1);

Clazz.newMeth(C$, 'cdata$org_w3c_dom_Element$S', function (el, child) {
var children=el.getElementsByTagName$S(child);
if (children == null  || children.getLength$() == 0 ) return null;
return C$.cdata$org_w3c_dom_Node(children.item$I(0));
}, 1);

Clazz.newMeth(C$, 'elements$org_w3c_dom_NodeList', function (nodes) {
var elements=Clazz.new_(1,{E:"org.w3c.dom.Element"},$I$(8,1));
if (nodes != null ) {
for (var i=0; i < nodes.getLength$(); i++) {
var node=nodes.item$I(i);
if (Clazz.instanceOf(node, "org.w3c.dom.Element")) elements.add$TE(node);
}
}return elements;
}, 1);

Clazz.newMeth(C$, 'elements$org_w3c_dom_Element$S', function (el, child) {
return C$.elements$org_w3c_dom_NodeList(el.getElementsByTagName$S(child));
}, 1);

Clazz.newMeth(C$, 'loadXML$java_io_File', function (file) {
return C$.createBuilder$().parse$S(file.getAbsolutePath$());
}, 1);

Clazz.newMeth(C$, 'loadXML$java_net_URL', function (url) {
var $in=url.openStream$();
var document=C$.loadXML$java_io_InputStream($in);
$in.close$();
return document;
}, 1);

Clazz.newMeth(C$, 'loadXML$java_io_InputStream', function ($in) {
return C$.createBuilder$().parse$java_io_InputStream($in);
}, 1);

Clazz.newMeth(C$, 'loadXML$S', function (s) {
return C$.createBuilder$().parse$java_io_InputStream(Clazz.new_($I$(9,1).c$$BA,[s.getBytes$()]));
}, 1);

Clazz.newMeth(C$, 'createBuilder$', function () {
return $I$(10).newInstance$().newDocumentBuilder$();
}, 1);

Clazz.newMeth(C$, 'dumpXML$org_w3c_dom_Document', function (doc) {
var source=Clazz.new_($I$(11,1).c$$org_w3c_dom_Node,[doc]);
var stringWriter=Clazz.new_($I$(12,1));
var result=Clazz.new_($I$(13,1).c$$java_io_Writer,[stringWriter]);
var factory=$I$(14).newInstance$();
var transformer=factory.newTransformer$();
transformer.transform$javax_xml_transform_Source$javax_xml_transform_Result(source, result);
return stringWriter.getBuffer$().toString();
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:34 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
