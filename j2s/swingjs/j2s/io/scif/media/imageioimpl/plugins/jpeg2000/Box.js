(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.jpeg2000"),I$=[[0,'java.util.Hashtable','io.scif.media.imageioimpl.plugins.jpeg2000.SignatureBox','io.scif.media.imageioimpl.plugins.jpeg2000.FileTypeBox','io.scif.media.imageioimpl.plugins.jpeg2000.XMLBox','io.scif.media.imageioimpl.plugins.jpeg2000.UUIDBox','io.scif.media.imageioimpl.plugins.jpeg2000.HeaderBox','io.scif.media.imageioimpl.plugins.jpeg2000.BitsPerComponentBox','io.scif.media.imageioimpl.plugins.jpeg2000.ColorSpecificationBox','io.scif.media.imageioimpl.plugins.jpeg2000.PaletteBox','io.scif.media.imageioimpl.plugins.jpeg2000.ComponentMappingBox','io.scif.media.imageioimpl.plugins.jpeg2000.ChannelDefinitionBox','io.scif.media.imageioimpl.plugins.jpeg2000.ResolutionBox','io.scif.media.imageioimpl.plugins.jpeg2000.UUIDListBox','io.scif.media.imageioimpl.plugins.jpeg2000.DataEntryURLBox','org.w3c.dom.Node','java.util.StringTokenizer','javax.imageio.metadata.IIOMetadataNode','io.scif.media.imageioimpl.common.ImageUtil','io.scif.media.imageioimpl.plugins.jpeg2000.I18N']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Box");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.names=Clazz.new_($I$(1,1));
{
C$.names.put$TK$TV( new Integer(1783636000), "JPEG2000SignatureBox");
C$.names.put$TK$TV( new Integer(1718909296), "JPEG2000FileTypeBox");
C$.names.put$TK$TV( new Integer(1785737833), "JPEG2000IntellectualPropertyRightsBox");
C$.names.put$TK$TV( new Integer(2020437024), "JPEG2000XMLBox");
C$.names.put$TK$TV( new Integer(1970628964), "JPEG2000UUIDBox");
C$.names.put$TK$TV( new Integer(1969843814), "JPEG2000UUIDInfoBox");
C$.names.put$TK$TV( new Integer(1785737832), "JPEG2000HeaderSuperBox");
C$.names.put$TK$TV( new Integer(1785737827), "JPEG2000CodeStreamBox");
C$.names.put$TK$TV( new Integer(1768449138), "JPEG2000HeaderBox");
C$.names.put$TK$TV( new Integer(1651532643), "JPEG2000BitsPerComponentBox");
C$.names.put$TK$TV( new Integer(1668246642), "JPEG2000ColorSpecificationBox");
C$.names.put$TK$TV( new Integer(1885564018), "JPEG2000PaletteBox");
C$.names.put$TK$TV( new Integer(1668112752), "JPEG2000ComponentMappingBox");
C$.names.put$TK$TV( new Integer(1667523942), "JPEG2000ChannelDefinitionBox");
C$.names.put$TK$TV( new Integer(1919251232), "JPEG2000ResolutionBox");
C$.names.put$TK$TV( new Integer(1919251299), "JPEG2000CaptureResolutionBox");
C$.names.put$TK$TV( new Integer(1919251300), "JPEG2000DefaultDisplayResolutionBox");
C$.names.put$TK$TV( new Integer(1970041716), "JPEG2000UUIDListBox");
C$.names.put$TK$TV( new Integer(1970433056), "JPEG2000DataEntryURLBox");
};
C$.boxClasses=Clazz.new_($I$(1,1));
{
C$.boxClasses.put$TK$TV( new Integer(1783636000), Clazz.getClass($I$(2)));
C$.boxClasses.put$TK$TV( new Integer(1718909296), Clazz.getClass($I$(3)));
C$.boxClasses.put$TK$TV( new Integer(1785737833), Clazz.getClass(C$));
C$.boxClasses.put$TK$TV( new Integer(2020437024), Clazz.getClass($I$(4)));
C$.boxClasses.put$TK$TV( new Integer(1970628964), Clazz.getClass($I$(5)));
C$.boxClasses.put$TK$TV( new Integer(1768449138), Clazz.getClass($I$(6)));
C$.boxClasses.put$TK$TV( new Integer(1651532643), Clazz.getClass($I$(7)));
C$.boxClasses.put$TK$TV( new Integer(1668246642), Clazz.getClass($I$(8)));
C$.boxClasses.put$TK$TV( new Integer(1885564018), Clazz.getClass($I$(9)));
C$.boxClasses.put$TK$TV( new Integer(1668112752), Clazz.getClass($I$(10)));
C$.boxClasses.put$TK$TV( new Integer(1667523942), Clazz.getClass($I$(11)));
C$.boxClasses.put$TK$TV( new Integer(1919251232), Clazz.getClass($I$(12)));
C$.boxClasses.put$TK$TV( new Integer(1919251299), Clazz.getClass($I$(12)));
C$.boxClasses.put$TK$TV( new Integer(1919251300), Clazz.getClass($I$(12)));
C$.boxClasses.put$TK$TV( new Integer(1970041716), Clazz.getClass($I$(13)));
C$.boxClasses.put$TK$TV( new Integer(1970433056), Clazz.getClass($I$(14)));
};
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['length','type'],'L',['extraLength'],'O',['data','byte[]']]
,['O',['names','java.util.Hashtable','+boxClasses']]]

Clazz.newMeth(C$, 'getName$I', function (type) {
var name=C$.names.get$O( new Integer(type));
return name == null  ? "unknown" : name;
}, 1);

Clazz.newMeth(C$, 'getBoxClass$I', function (type) {
if (type == 1785737832 || type == 1919251232 ) return null;
return C$.boxClasses.get$O( new Integer(type));
}, 1);

Clazz.newMeth(C$, 'getTypeByName$S', function (name) {
var keys=C$.names.keys$();
while (keys.hasMoreElements$()){
var i=keys.nextElement$();
if (name.equals$O(C$.names.get$O(i))) return C$.getTypeString$I(i.intValue$());
}
return null;
}, 1);

Clazz.newMeth(C$, 'createBox$I$org_w3c_dom_Node', function (type, node) {
var boxClass=C$.boxClasses.get$O( new Integer(type));
try {
var cons=boxClass.getConstructor$ClassA(Clazz.array(Class, -1, [Clazz.getClass($I$(15),['appendChild$org_w3c_dom_Node','cloneNode$Z','compareDocumentPosition$org_w3c_dom_Node','getAttributes$','getBaseURI$','getChildNodes$','getFeature$S$S','getFirstChild$','getLastChild$','getLocalName$','getNamespaceURI$','getNextSibling$','getNodeName$','getNodeType$','getNodeValue$','getOwnerDocument$','getParentNode$','getPrefix$','getPreviousSibling$','getTextContent$','getUserData$S','hasAttributes$','hasChildNodes$','insertBefore$org_w3c_dom_Node$org_w3c_dom_Node','isDefaultNamespace$S','isEqualNode$org_w3c_dom_Node','isSameNode$org_w3c_dom_Node','isSupported$S$S','lookupNamespaceURI$S','lookupPrefix$S','normalize$','removeChild$org_w3c_dom_Node','replaceChild$org_w3c_dom_Node$org_w3c_dom_Node','setNodeValue$S','setPrefix$S','setTextContent$S','setUserData$S$O$org_w3c_dom_UserDataHandler'])]));
if (cons != null ) {
return cons.newInstance$OA(Clazz.array(java.lang.Object, -1, [node]));
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"NoSuchMethodException")){
var e = e$$;
{
e.printStackTrace$();
return Clazz.new_(C$.c$$org_w3c_dom_Node,[node]);
}
} else if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var e = e$$;
{
e.printStackTrace$();
return Clazz.new_(C$.c$$org_w3c_dom_Node,[node]);
}
} else if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var e = e$$;
{
e.printStackTrace$();
return Clazz.new_(C$.c$$org_w3c_dom_Node,[node]);
}
} else if (Clazz.exceptionOf(e$$,"InstantiationException")){
var e = e$$;
{
e.printStackTrace$();
return Clazz.new_(C$.c$$org_w3c_dom_Node,[node]);
}
} else {
throw e$$;
}
}
return null;
}, 1);

Clazz.newMeth(C$, 'getAttribute$org_w3c_dom_Node$S', function (node, name) {
var map=node.getAttributes$();
node=map.getNamedItem$S(name);
return (node != null ) ? node.getNodeValue$() : null;
}, 1);

Clazz.newMeth(C$, 'parseByteArray$S', function (value) {
if (value == null ) return null;
var token=Clazz.new_($I$(16,1).c$$S,[value]);
var count=token.countTokens$();
var buf=Clazz.array(Byte.TYPE, [count]);
var i=0;
while (token.hasMoreElements$()){
buf[i++]=( new Byte(token.nextToken$()).byteValue$()|0);
}
return buf;
}, 1);

Clazz.newMeth(C$, 'parseIntArray$S', function (value) {
if (value == null ) return null;
var token=Clazz.new_($I$(16,1).c$$S,[value]);
var count=token.countTokens$();
var buf=Clazz.array(Integer.TYPE, [count]);
var i=0;
while (token.hasMoreElements$()){
buf[i++]= new Integer(token.nextToken$()).intValue$();
}
return buf;
}, 1);

Clazz.newMeth(C$, 'getStringElementValue$org_w3c_dom_Node', function (node) {
if (Clazz.instanceOf(node, "javax.imageio.metadata.IIOMetadataNode")) {
var obj=(node).getUserObject$();
if (Clazz.instanceOf(obj, "java.lang.String")) return obj;
}return node.getNodeValue$();
}, 1);

Clazz.newMeth(C$, 'getByteElementValue$org_w3c_dom_Node', function (node) {
if (Clazz.instanceOf(node, "javax.imageio.metadata.IIOMetadataNode")) {
var obj=(node).getUserObject$();
if (Clazz.instanceOf(obj, "java.lang.Byte")) return $b$[0] = (obj).byteValue$(), $b$[0];
}var value=node.getNodeValue$();
if (value != null ) return $b$[0] =  new Byte(value).byteValue$(), $b$[0];
return $b$[0] = 0, $b$[0];
}, 1);

Clazz.newMeth(C$, 'getIntElementValue$org_w3c_dom_Node', function (node) {
if (Clazz.instanceOf(node, "javax.imageio.metadata.IIOMetadataNode")) {
var obj=(node).getUserObject$();
if (Clazz.instanceOf(obj, "java.lang.Integer")) return (obj).intValue$();
}var value=node.getNodeValue$();
if (value != null ) return  new Integer(value).intValue$();
return 0;
}, 1);

Clazz.newMeth(C$, 'getShortElementValue$org_w3c_dom_Node', function (node) {
if (Clazz.instanceOf(node, "javax.imageio.metadata.IIOMetadataNode")) {
var obj=(node).getUserObject$();
if (Clazz.instanceOf(obj, "java.lang.Short")) return (obj).shortValue$();
}var value=node.getNodeValue$();
if (value != null ) return  new Short(value).shortValue$();
return 0;
}, 1);

Clazz.newMeth(C$, 'getByteArrayElementValue$org_w3c_dom_Node', function (node) {
if (Clazz.instanceOf(node, "javax.imageio.metadata.IIOMetadataNode")) {
var obj=(node).getUserObject$();
if (Clazz.instanceOf(obj, Clazz.array(Byte.TYPE, -1))) return obj;
}return C$.parseByteArray$S(node.getNodeValue$());
}, 1);

Clazz.newMeth(C$, 'getIntArrayElementValue$org_w3c_dom_Node', function (node) {
if (Clazz.instanceOf(node, "javax.imageio.metadata.IIOMetadataNode")) {
var obj=(node).getUserObject$();
if (Clazz.instanceOf(obj, Clazz.array(Integer.TYPE, -1))) return obj;
}return C$.parseIntArray$S(node.getNodeValue$());
}, 1);

Clazz.newMeth(C$, 'copyInt$BA$I$I', function (data, pos, value) {
data[pos++]=(((value >> 24)|0)|0);
data[pos++]=(((value >> 16)|0)|0);
data[pos++]=(((value >> 8)|0)|0);
data[pos++]=(((value & 255)|0)|0);
}, 1);

Clazz.newMeth(C$, 'getTypeString$I', function (type) {
var buf=Clazz.array(Byte.TYPE, [4]);
for (var i=3; i >= 0; i--) {
buf[i]=(((type & 255)|0)|0);
type>>>=8;
}
return  String.instantialize(buf);
}, 1);

Clazz.newMeth(C$, 'getTypeInt$S', function (s) {
var buf=s.getBytes$();
var t=buf[0];
for (var i=1; i < 4; i++) {
t=(t << 8) | buf[i];
}
return t;
}, 1);

Clazz.newMeth(C$, 'c$$I$I$BA', function (length, type, data) {
;C$.$init$.apply(this);
this.type=type;
this.setLength$I(length);
this.setContent$BA(data);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$J$BA', function (length, type, extraLength, data) {
;C$.$init$.apply(this);
this.type=type;
this.setLength$I(length);
if (length == 1) this.setExtraLength$J(extraLength);
this.setContent$BA(data);
}, 1);

Clazz.newMeth(C$, 'c$$javax_imageio_stream_ImageInputStream$I', function (iis, pos) {
;C$.$init$.apply(this);
this.read$javax_imageio_stream_ImageInputStream$I(iis, pos);
}, 1);

Clazz.newMeth(C$, 'c$$org_w3c_dom_Node', function (node) {
;C$.$init$.apply(this);
var children=node.getChildNodes$();
var value=C$.getAttribute$org_w3c_dom_Node$S(node, "Type");
this.type=C$.getTypeInt$S(value);
if (value == null  || C$.names.get$O( new Integer(this.type)) == null  ) throw Clazz.new_(Clazz.load('javax.imageio.metadata.IIOInvalidTreeException').c$$S$org_w3c_dom_Node,["Type is not defined", node]);
value=C$.getAttribute$org_w3c_dom_Node$S(node, "Length");
if (value != null ) this.length= new Integer(value).intValue$();
value=C$.getAttribute$org_w3c_dom_Node$S(node, "ExtraLength");
if (value != null ) this.extraLength= new Long(value).longValue$();
for (var i=0; i < children.getLength$(); i++) {
var child=children.item$I(i);
if ("Content".equals$O(child.getNodeName$())) {
if (Clazz.instanceOf(child, "javax.imageio.metadata.IIOMetadataNode")) {
var cnode=child;
try {
this.data=cnode.getUserObject$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
} else {
this.data=C$.getByteArrayElementValue$org_w3c_dom_Node(child);
}if (this.data == null ) {
value=node.getNodeValue$();
if (value != null ) this.data=value.getBytes$();
}}}
}, 1);

Clazz.newMeth(C$, 'getNativeNode$', function () {
var name=C$.getName$I(this.getType$());
if (name == null ) name="unknown";
var node=Clazz.new_($I$(17,1).c$$S,[name]);
this.setDefaultAttributes$javax_imageio_metadata_IIOMetadataNode(node);
var child=Clazz.new_($I$(17,1).c$$S,["Content"]);
child.setUserObject$O(this.data);
child.setNodeValue$S($I$(18).convertObjectToString$O(this.data));
node.appendChild$org_w3c_dom_Node(child);
return node;
});

Clazz.newMeth(C$, 'getNativeNodeForSimpleBox$', function () {
try {
var m=this.getClass$().getMethod$S$ClassA("getElementNames", null);
var elementNames=m.invoke$O$OA(null, null);
var node=Clazz.new_($I$(17,1).c$$S,[C$.getName$I(this.getType$())]);
this.setDefaultAttributes$javax_imageio_metadata_IIOMetadataNode(node);
for (var i=0; i < elementNames.length; i++) {
var child=Clazz.new_($I$(17,1).c$$S,[elementNames[i]]);
m=this.getClass$().getMethod$S$ClassA("get" + elementNames[i], null);
var obj=m.invoke$O$OA(this, null);
child.setUserObject$O(obj);
child.setNodeValue$S($I$(18).convertObjectToString$O(obj));
node.appendChild$org_w3c_dom_Node(child);
}
return node;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(19).getString$S("Box0")]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'setDefaultAttributes$javax_imageio_metadata_IIOMetadataNode', function (node) {
node.setAttribute$S$S("Length", Integer.toString$I(this.length));
node.setAttribute$S$S("Type", C$.getTypeString$I(this.type));
if (this.length == 1) {
node.setAttribute$S$S("ExtraLength", Long.toString$J(this.extraLength));
}});

Clazz.newMeth(C$, 'getLength$', function () {
return this.length;
});

Clazz.newMeth(C$, 'getType$', function () {
return this.type;
});

Clazz.newMeth(C$, 'getExtraLength$', function () {
return this.extraLength;
});

Clazz.newMeth(C$, 'getContent$', function () {
if (this.data == null ) this.compose$();
return this.data;
});

Clazz.newMeth(C$, 'setLength$I', function (length) {
this.length=length;
});

Clazz.newMeth(C$, 'setExtraLength$J', function (extraLength) {
if (this.length != 1) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(19).getString$S("Box1")]);
this.extraLength=extraLength;
});

Clazz.newMeth(C$, 'setContent$BA', function (data) {
if (data != null  && ((this.length == 1 && (this.extraLength - 16 != data.length) ) || (this.length != 1 && this.length - 8 != data.length ) ) ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(19).getString$S("Box2")]);
this.data=data;
if (data != null ) this.parse$BA(data);
});

Clazz.newMeth(C$, 'write$javax_imageio_stream_ImageOutputStream', function (ios) {
ios.writeInt$I(this.length);
ios.writeInt$I(this.type);
if (this.length == 1) {
ios.writeLong$J(this.extraLength);
ios.write$BA$I$I(this.data, 0, (this.extraLength|0));
} else if (this.data != null ) ios.write$BA$I$I(this.data, 0, this.length);
});

Clazz.newMeth(C$, 'read$javax_imageio_stream_ImageInputStream$I', function (iis, pos) {
iis.mark$();
iis.seek$J(pos);
this.length=iis.readInt$();
this.type=iis.readInt$();
var dataLength=0;
if (this.length == 0) {
var streamLength=iis.length$();
if (streamLength != -1) dataLength=((streamLength - iis.getStreamPosition$())|0);
 else {
var dataPos=iis.getStreamPosition$();
var bufLen=1024;
var buf=Clazz.array(Byte.TYPE, [bufLen]);
var savePos=dataPos;
try {
iis.readFully$BA(buf);
dataLength+=bufLen;
savePos=iis.getStreamPosition$();
} catch (eofe) {
if (Clazz.exceptionOf(eofe,"java.io.EOFException")){
iis.seek$J(savePos);
while (iis.read$() != -1)dataLength++;

} else {
throw eofe;
}
}
iis.seek$J(dataPos);
}} else if (this.length == 1) {
this.extraLength=iis.readLong$();
dataLength=((this.extraLength - 16)|0);
} else if (this.length >= 8 && this.length < (1) ) {
dataLength=this.length - 8;
} else {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Illegal value " + this.length + " for box length parameter." ]);
}this.data=Clazz.array(Byte.TYPE, [dataLength]);
iis.readFully$BA(this.data);
iis.reset$();
});

Clazz.newMeth(C$, 'parse$BA', function (data) {
});

Clazz.newMeth(C$, 'compose$', function () {
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:18 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
