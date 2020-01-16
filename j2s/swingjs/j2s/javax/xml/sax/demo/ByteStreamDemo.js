(function(){var P$=Clazz.newPackage("javax.xml.sax.demo"),I$=[[0,'javax.xml.sax.helpers.ParserFactory','javax.xml.sax.demo.DemoHandler','java.io.FileInputStream','javax.xml.sax.InputSource']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ByteStreamDemo");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'main$SA', function (args) {
var parser;
var source;
var handler;
var input;
if (args.length != 1) {
System.err.println$S("Usage: java -Djavax.xml.sax.parser=<classname> SystemIdDemo <document>");
System.exit$I(2);
}parser=$I$(1).makeParser$();
handler=Clazz.new_($I$(2,1));
parser.setEntityResolver$javax_xml_sax_EntityResolver(handler);
parser.setDTDHandler$javax_xml_sax_DTDHandler(handler);
parser.setDocumentHandler$javax_xml_sax_DocumentHandler(handler);
parser.setErrorHandler$javax_xml_sax_ErrorHandler(handler);
input=Clazz.new_($I$(3,1).c$$S,[args[0]]);
source=Clazz.new_($I$(4,1).c$$java_io_InputStream,[input]);
source.setSystemId$S(args[0]);
parser.parse$javax_xml_sax_InputSource(source);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:50:45 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
