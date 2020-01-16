(function(){var P$=Clazz.newPackage("io.scif.media.imageio.stream"),I$=[[0,'java.util.StringTokenizer','java.awt.color.ColorSpace','java.net.URL','java.awt.color.ICC_ColorSpace','java.awt.color.ICC_Profile','io.scif.media.imageio.stream.I18N','io.scif.media.imageioimpl.common.ImageUtil','javax.imageio.ImageTypeSpecifier','javax.xml.parsers.DocumentBuilderFactory','java.nio.ByteOrder','java.awt.Dimension','java.awt.image.ComponentSampleModel','java.awt.image.MultiPixelPackedSampleModel','java.awt.image.SinglePixelPackedSampleModel','java.awt.image.ComponentColorModel','java.awt.image.DirectColorModel','java.awt.image.IndexColorModel']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "RawImageInputStream", null, null, 'javax.imageio.stream.ImageInputStream');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.preDefinedColorSpaces=Clazz.array(String, -1, ["GRAY", "sRGB", "LINEAR_RGB", "PYCC", "CIEXYZ"]);
C$.preDefinedTypes=Clazz.array(Integer.TYPE, -1, [1003, 1000, 1004, 1002, 1001]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['source','javax.imageio.stream.ImageInputStream','type','javax.imageio.ImageTypeSpecifier','imageOffsets','long[]','imageDimensions','java.awt.Dimension[]']]
,['O',['preDefinedColorSpaces','String[]','preDefinedTypes','int[]']]]

Clazz.newMeth(C$, 'getAttribute$org_w3c_dom_Node$S', function (node, name) {
var map=node.getAttributes$();
node=map.getNamedItem$S(name);
return (node != null ) ? node.getNodeValue$() : null;
}, 1);

Clazz.newMeth(C$, 'getBoolean$org_w3c_dom_Node$S', function (node, name) {
var s=C$.getAttribute$org_w3c_dom_Node$S(node, name);
return (s == null ) ? false : ( Boolean.from(s)).booleanValue$();
}, 1);

Clazz.newMeth(C$, 'getInt$org_w3c_dom_Node$S', function (node, name) {
var s=C$.getAttribute$org_w3c_dom_Node$S(node, name);
return (s == null ) ? 0 : ( new Integer(s)).intValue$();
}, 1);

Clazz.newMeth(C$, 'getByteArray$org_w3c_dom_Node$S', function (node, name) {
var s=C$.getAttribute$org_w3c_dom_Node$S(node, name);
if (s == null ) return null;
var token=Clazz.new_($I$(1,1).c$$S,[s]);
var count=token.countTokens$();
if (count == 0) return null;
var buf=Clazz.array(Byte.TYPE, [count]);
var i=0;
while (token.hasMoreElements$()){
buf[i++]=( new Byte(token.nextToken$()).byteValue$()|0);
}
return buf;
}, 1);

Clazz.newMeth(C$, 'getIntArray$org_w3c_dom_Node$S', function (node, name) {
var s=C$.getAttribute$org_w3c_dom_Node$S(node, name);
if (s == null ) return null;
var token=Clazz.new_($I$(1,1).c$$S,[s]);
var count=token.countTokens$();
if (count == 0) return null;
var buf=Clazz.array(Integer.TYPE, [count]);
var i=0;
while (token.hasMoreElements$()){
buf[i++]= new Integer(token.nextToken$()).intValue$();
}
return buf;
}, 1);

Clazz.newMeth(C$, 'getTransparency$S', function (s) {
if ("BITMASK".equals$O(s)) return 2;
 else if ("OPAQUE".equals$O(s)) return 1;
 else if ("TRANSLUCENT".equals$O(s)) return 3;
 else return 0;
}, 1);

Clazz.newMeth(C$, 'getColorSpace$org_w3c_dom_Node', function (node) {
var nodes=node.getChildNodes$();
for (var i=0; i < nodes.getLength$(); i++) {
var child=nodes.item$I(i);
if ("colorSpace".equals$O(child.getNodeName$())) {
var s=child.getNodeValue$();
for (var j=0; j < C$.preDefinedColorSpaces.length; j++) {
if (C$.preDefinedColorSpaces[j].equals$O(s)) return $I$(2).getInstance$I(C$.preDefinedTypes[j]);
}
var stm=Clazz.new_($I$(3,1).c$$S,[s]).openStream$();
var cp=Clazz.new_($I$(4,1).c$$java_awt_color_ICC_Profile,[$I$(5).getInstance$java_io_InputStream(stm)]);
stm.close$();
return cp;
}}
return null;
}, 1);

Clazz.newMeth(C$, 'c$$javax_imageio_stream_ImageInputStream$javax_imageio_ImageTypeSpecifier$JA$java_awt_DimensionA', function (source, type, imageOffsets, imageDimensions) {
;C$.$init$.apply(this);
if (imageOffsets == null  || imageDimensions == null   || imageOffsets.length != imageDimensions.length ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(6).getString$S("RawImageInputStream0")]);
}this.source=source;
this.type=type;
this.imageOffsets=imageOffsets;
this.imageDimensions=imageDimensions;
}, 1);

Clazz.newMeth(C$, 'c$$javax_imageio_stream_ImageInputStream$java_awt_image_SampleModel$JA$java_awt_DimensionA', function (source, sampleModel, imageOffsets, imageDimensions) {
;C$.$init$.apply(this);
if (imageOffsets == null  || imageDimensions == null   || imageOffsets.length != imageDimensions.length ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(6).getString$S("RawImageInputStream0")]);
}this.source=source;
var colorModel=$I$(7).createColorModel$java_awt_image_SampleModel(sampleModel);
if (colorModel == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(6).getString$S("RawImageInputStream4")]);
}this.type=Clazz.new_($I$(8,1).c$$java_awt_image_ColorModel$java_awt_image_SampleModel,[colorModel, sampleModel]);
this.imageOffsets=imageOffsets;
this.imageDimensions=imageDimensions;
}, 1);

Clazz.newMeth(C$, 'c$$javax_imageio_stream_ImageInputStream$org_xml_sax_InputSource', function (source, xmlSource) {
;C$.$init$.apply(this);
this.source=source;
var dbf=$I$(9).newInstance$();
dbf.setValidating$Z(true);
dbf.setNamespaceAware$Z(true);
dbf.setAttribute$S$O("http://java.sun.com/xml/jaxp/properties/schemaLanguage", "http://www.w3.org/2001/XMLSchema");
var db=null;
try {
db=dbf.newDocumentBuilder$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"javax.xml.parsers.ParserConfigurationException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$S$Throwable,[$I$(6).getString$S("RawImageInputStream1"), ex]);
} else {
throw ex;
}
}
var doc=db.parse$org_xml_sax_InputSource(xmlSource);
var nodes=doc.getElementsByTagName$S("byteOrder");
var byteOrder=nodes.item$I(0).getNodeValue$();
if ("NETWORK".equals$O(byteOrder)) {
this.setByteOrder$java_nio_ByteOrder($I$(10).BIG_ENDIAN);
this.source.setByteOrder$java_nio_ByteOrder($I$(10).BIG_ENDIAN);
} else if ("REVERSE".equals$O(byteOrder)) {
this.setByteOrder$java_nio_ByteOrder($I$(10).LITTLE_ENDIAN);
this.setByteOrder$java_nio_ByteOrder($I$(10).LITTLE_ENDIAN);
}nodes=doc.getElementsByTagName$S("offset");
var length=nodes.getLength$();
this.imageOffsets=Clazz.array(Long.TYPE, [length]);
for (var i=0; i < length; i++) {
this.imageOffsets[i]= new Long(nodes.item$I(i).getNodeValue$()).longValue$();
}
nodes=doc.getElementsByTagName$S("width");
var nodes1=doc.getElementsByTagName$S("height");
length=nodes.getLength$();
if (length != nodes1.getLength$()) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(6).getString$S("RawImageInputStream2")]);
this.imageDimensions=Clazz.array($I$(11), [length]);
for (var i=0; i < length; i++) {
var w=nodes.item$I(i).getNodeValue$();
var h=nodes1.item$I(i).getNodeValue$();
this.imageDimensions[i]=Clazz.new_($I$(11,1).c$$I$I,[( new Integer(w)).intValue$(), ( new Integer(h)).intValue$()]);
}
var sampleModel=null;
nodes=doc.getElementsByTagName$S("ComponentSampleModel");
if (nodes.getLength$() > 0) {
var node=nodes.item$I(0);
var bankIndices=C$.getIntArray$org_w3c_dom_Node$S(node, "bankIndices");
if (bankIndices == null ) sampleModel=Clazz.new_($I$(12,1).c$$I$I$I$I$I$IA,[C$.getInt$org_w3c_dom_Node$S(node, "dataType"), C$.getInt$org_w3c_dom_Node$S(node, "w"), C$.getInt$org_w3c_dom_Node$S(node, "h"), C$.getInt$org_w3c_dom_Node$S(node, "pixelStride"), C$.getInt$org_w3c_dom_Node$S(node, "scanlineStride"), C$.getIntArray$org_w3c_dom_Node$S(node, "bandOffsets")]);
 else sampleModel=Clazz.new_($I$(12,1).c$$I$I$I$I$I$IA$IA,[C$.getInt$org_w3c_dom_Node$S(node, "dataType"), C$.getInt$org_w3c_dom_Node$S(node, "w"), C$.getInt$org_w3c_dom_Node$S(node, "h"), C$.getInt$org_w3c_dom_Node$S(node, "pixelStride"), C$.getInt$org_w3c_dom_Node$S(node, "scanlineStride"), bankIndices, C$.getIntArray$org_w3c_dom_Node$S(node, "bandOffsets")]);
}nodes=doc.getElementsByTagName$S("MultiPixelPackedSampleModel");
if (nodes.getLength$() > 0) {
var node=nodes.item$I(0);
sampleModel=Clazz.new_($I$(13,1).c$$I$I$I$I$I$I,[C$.getInt$org_w3c_dom_Node$S(node, "dataType"), C$.getInt$org_w3c_dom_Node$S(node, "w"), C$.getInt$org_w3c_dom_Node$S(node, "h"), C$.getInt$org_w3c_dom_Node$S(node, "numberOfBits"), C$.getInt$org_w3c_dom_Node$S(node, "scanlineStride"), C$.getInt$org_w3c_dom_Node$S(node, "dataBitOffset")]);
}nodes=doc.getElementsByTagName$S("SinglePixelPackedSampleModel");
if (nodes.getLength$() > 0) {
var node=nodes.item$I(0);
sampleModel=Clazz.new_($I$(14,1).c$$I$I$I$I$IA,[C$.getInt$org_w3c_dom_Node$S(node, "dataType"), C$.getInt$org_w3c_dom_Node$S(node, "w"), C$.getInt$org_w3c_dom_Node$S(node, "h"), C$.getInt$org_w3c_dom_Node$S(node, "scanlineStride"), C$.getIntArray$org_w3c_dom_Node$S(node, "bitMasks")]);
}var colorModel=null;
nodes=doc.getElementsByTagName$S("ComponentColorModel");
if (nodes.getLength$() > 0) {
var node=nodes.item$I(0);
colorModel=Clazz.new_($I$(15,1).c$$java_awt_color_ColorSpace$IA$Z$Z$I$I,[C$.getColorSpace$org_w3c_dom_Node(node), C$.getIntArray$org_w3c_dom_Node$S(node, "bits"), C$.getBoolean$org_w3c_dom_Node$S(node, "hasAlpha"), C$.getBoolean$org_w3c_dom_Node$S(node, "isAlphaPremultiplied"), C$.getTransparency$S(C$.getAttribute$org_w3c_dom_Node$S(node, "transparency")), C$.getInt$org_w3c_dom_Node$S(node, "transferType")]);
}nodes=doc.getElementsByTagName$S("DirectColorModel");
if (nodes.getLength$() > 0) {
var node=nodes.item$I(0);
colorModel=Clazz.new_($I$(16,1).c$$java_awt_color_ColorSpace$I$I$I$I$I$Z$I,[C$.getColorSpace$org_w3c_dom_Node(node), C$.getInt$org_w3c_dom_Node$S(node, "bits"), C$.getInt$org_w3c_dom_Node$S(node, "rmask"), C$.getInt$org_w3c_dom_Node$S(node, "gmask"), C$.getInt$org_w3c_dom_Node$S(node, "bmask"), C$.getInt$org_w3c_dom_Node$S(node, "amask"), false, 1]);
}nodes=doc.getElementsByTagName$S("IndexColorModel");
if (nodes.getLength$() > 0) {
var node=nodes.item$I(0);
var alpha=C$.getByteArray$org_w3c_dom_Node$S(node, "a");
if (alpha == null ) colorModel=Clazz.new_($I$(17,1).c$$I$I$BA$BA$BA,[C$.getInt$org_w3c_dom_Node$S(node, "bits"), C$.getInt$org_w3c_dom_Node$S(node, "size"), C$.getByteArray$org_w3c_dom_Node$S(node, "r"), C$.getByteArray$org_w3c_dom_Node$S(node, "g"), C$.getByteArray$org_w3c_dom_Node$S(node, "b")]);
 else colorModel=Clazz.new_($I$(17,1).c$$I$I$BA$BA$BA$BA,[C$.getInt$org_w3c_dom_Node$S(node, "bits"), C$.getInt$org_w3c_dom_Node$S(node, "size"), C$.getByteArray$org_w3c_dom_Node$S(node, "r"), C$.getByteArray$org_w3c_dom_Node$S(node, "g"), C$.getByteArray$org_w3c_dom_Node$S(node, "b"), alpha]);
}this.type=Clazz.new_($I$(8,1).c$$java_awt_image_ColorModel$java_awt_image_SampleModel,[colorModel, sampleModel]);
if (this.imageDimensions.length == 0) {
this.imageDimensions=Clazz.array($I$(11), [this.imageOffsets.length]);
this.imageDimensions[0]=Clazz.new_($I$(11,1).c$$I$I,[sampleModel.getWidth$(), sampleModel.getHeight$()]);
for (var i=1; i < this.imageDimensions.length; i++) this.imageDimensions[i]=this.imageDimensions[0];

}}, 1);

Clazz.newMeth(C$, 'getImageType$', function () {
return this.type;
});

Clazz.newMeth(C$, 'getImageOffset$I', function (imageIndex) {
if (imageIndex < 0 || imageIndex >= this.imageOffsets.length ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(6).getString$S("RawImageInputStream3")]);
return this.imageOffsets[imageIndex];
});

Clazz.newMeth(C$, 'getImageDimension$I', function (imageIndex) {
if (imageIndex < 0 || imageIndex >= this.imageOffsets.length ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(6).getString$S("RawImageInputStream3")]);
return this.imageDimensions[imageIndex];
});

Clazz.newMeth(C$, 'getNumImages$', function () {
return this.imageOffsets.length;
});

Clazz.newMeth(C$, 'setByteOrder$java_nio_ByteOrder', function (byteOrder) {
this.source.setByteOrder$java_nio_ByteOrder(byteOrder);
});

Clazz.newMeth(C$, 'getByteOrder$', function () {
return this.source.getByteOrder$();
});

Clazz.newMeth(C$, 'read$', function () {
return this.source.read$();
});

Clazz.newMeth(C$, 'read$BA', function (b) {
return this.source.read$BA(b);
});

Clazz.newMeth(C$, 'read$BA$I$I', function (b, off, len) {
return this.source.read$BA$I$I(b, off, len);
});

Clazz.newMeth(C$, 'readBytes$javax_imageio_stream_IIOByteBuffer$I', function (buf, len) {
this.source.readBytes$javax_imageio_stream_IIOByteBuffer$I(buf, len);
});

Clazz.newMeth(C$, 'readBoolean$', function () {
return this.source.readBoolean$();
});

Clazz.newMeth(C$, 'readByte$', function () {
return $b$[0] = this.source.readByte$(), $b$[0];
});

Clazz.newMeth(C$, 'readUnsignedByte$', function () {
return this.source.readUnsignedByte$();
});

Clazz.newMeth(C$, 'readShort$', function () {
return this.source.readShort$();
});

Clazz.newMeth(C$, 'readUnsignedShort$', function () {
return this.source.readUnsignedShort$();
});

Clazz.newMeth(C$, 'readChar$', function () {
return this.source.readChar$();
});

Clazz.newMeth(C$, 'readInt$', function () {
return this.source.readInt$();
});

Clazz.newMeth(C$, 'readUnsignedInt$', function () {
return this.source.readUnsignedInt$();
});

Clazz.newMeth(C$, 'readLong$', function () {
return this.source.readLong$();
});

Clazz.newMeth(C$, 'readFloat$', function () {
return this.source.readFloat$();
});

Clazz.newMeth(C$, 'readDouble$', function () {
return this.source.readDouble$();
});

Clazz.newMeth(C$, 'readLine$', function () {
return this.source.readLine$();
});

Clazz.newMeth(C$, 'readUTF$', function () {
return this.source.readUTF$();
});

Clazz.newMeth(C$, 'readFully$BA$I$I', function (b, off, len) {
this.source.readFully$BA$I$I(b, off, len);
});

Clazz.newMeth(C$, 'readFully$BA', function (b) {
this.source.readFully$BA(b);
});

Clazz.newMeth(C$, 'readFully$HA$I$I', function (s, off, len) {
this.source.readFully$HA$I$I(s, off, len);
});

Clazz.newMeth(C$, 'readFully$CA$I$I', function (c, off, len) {
this.source.readFully$CA$I$I(c, off, len);
});

Clazz.newMeth(C$, 'readFully$IA$I$I', function (i, off, len) {
this.source.readFully$IA$I$I(i, off, len);
});

Clazz.newMeth(C$, 'readFully$JA$I$I', function (l, off, len) {
this.source.readFully$JA$I$I(l, off, len);
});

Clazz.newMeth(C$, 'readFully$FA$I$I', function (f, off, len) {
this.source.readFully$FA$I$I(f, off, len);
});

Clazz.newMeth(C$, 'readFully$DA$I$I', function (d, off, len) {
this.source.readFully$DA$I$I(d, off, len);
});

Clazz.newMeth(C$, 'getStreamPosition$', function () {
return this.source.getStreamPosition$();
});

Clazz.newMeth(C$, 'getBitOffset$', function () {
return this.source.getBitOffset$();
});

Clazz.newMeth(C$, 'setBitOffset$I', function (bitOffset) {
this.source.setBitOffset$I(bitOffset);
});

Clazz.newMeth(C$, 'readBit$', function () {
return this.source.readBit$();
});

Clazz.newMeth(C$, 'readBits$I', function (numBits) {
return this.source.readBits$I(numBits);
});

Clazz.newMeth(C$, 'length$', function () {
return this.source.length$();
});

Clazz.newMeth(C$, 'skipBytes$I', function (n) {
return this.source.skipBytes$I(n);
});

Clazz.newMeth(C$, 'skipBytes$J', function (n) {
return this.source.skipBytes$J(n);
});

Clazz.newMeth(C$, 'seek$J', function (pos) {
this.source.seek$J(pos);
});

Clazz.newMeth(C$, 'mark$', function () {
this.source.mark$();
});

Clazz.newMeth(C$, 'reset$', function () {
this.source.reset$();
});

Clazz.newMeth(C$, 'flushBefore$J', function (pos) {
this.source.flushBefore$J(pos);
});

Clazz.newMeth(C$, 'flush$', function () {
this.source.flush$();
});

Clazz.newMeth(C$, 'getFlushedPosition$', function () {
return this.source.getFlushedPosition$();
});

Clazz.newMeth(C$, 'isCached$', function () {
return this.source.isCached$();
});

Clazz.newMeth(C$, 'isCachedMemory$', function () {
return this.source.isCachedMemory$();
});

Clazz.newMeth(C$, 'isCachedFile$', function () {
return this.source.isCachedFile$();
});

Clazz.newMeth(C$, 'close$', function () {
this.source.close$();
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:18 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
