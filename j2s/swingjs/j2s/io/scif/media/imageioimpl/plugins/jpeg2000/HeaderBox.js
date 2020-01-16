(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.jpeg2000"),I$=[[0,'io.scif.media.imageioimpl.plugins.jpeg2000.Box']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "HeaderBox", null, 'io.scif.media.imageioimpl.plugins.jpeg2000.Box');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.elementNames=Clazz.array(String, -1, ["Height", "Width", "NumComponents", "BitDepth", "CompressionType", "UnknownColorspace", "IntellectualProperty"]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['B',['bitDepth','compressionType','unknownColor','intelProp'],'I',['width','height'],'H',['numComp']]
,['O',['elementNames','String[]']]]

Clazz.newMeth(C$, 'getElementNames$', function () {
return C$.elementNames;
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I$I$I$I', function (height, width, numComp, bitDepth, compressionType, unknownColor, intelProp) {
;C$.superclazz.c$$I$I$BA.apply(this,[22, 1768449138, null]);C$.$init$.apply(this);
this.height=height;
this.width=width;
this.numComp=($s$[0] = numComp, $s$[0]);
this.bitDepth=($b$[0] = (bitDepth|0), $b$[0]);
this.compressionType=($b$[0] = (compressionType|0), $b$[0]);
this.unknownColor=($b$[0] = (unknownColor|0), $b$[0]);
this.intelProp=($b$[0] = (intelProp|0), $b$[0]);
}, 1);

Clazz.newMeth(C$, 'c$$BA', function (data) {
;C$.superclazz.c$$I$I$BA.apply(this,[8 + data.length, 1768449138, data]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$org_w3c_dom_Node', function (node) {
;C$.superclazz.c$$org_w3c_dom_Node.apply(this,[node]);C$.$init$.apply(this);
var children=node.getChildNodes$();
for (var i=0; i < children.getLength$(); i++) {
var child=children.item$I(i);
var name=child.getNodeName$();
if ("Height".equals$O(name)) {
this.height=$I$(1).getIntElementValue$org_w3c_dom_Node(child);
}if ("Width".equals$O(name)) {
this.width=$I$(1).getIntElementValue$org_w3c_dom_Node(child);
}if ("NumComponents".equals$O(name)) {
this.numComp=$I$(1).getShortElementValue$org_w3c_dom_Node(child);
}if ("BitDepth".equals$O(name)) {
this.bitDepth=($b$[0] = $I$(1).getByteElementValue$org_w3c_dom_Node(child), $b$[0]);
}if ("CompressionType".equals$O(name)) {
this.compressionType=($b$[0] = $I$(1).getByteElementValue$org_w3c_dom_Node(child), $b$[0]);
}if ("UnknownColorspace".equals$O(name)) {
this.unknownColor=($b$[0] = $I$(1).getByteElementValue$org_w3c_dom_Node(child), $b$[0]);
}if ("IntellectualProperty".equals$O(name)) {
this.intelProp=($b$[0] = $I$(1).getByteElementValue$org_w3c_dom_Node(child), $b$[0]);
}}
}, 1);

Clazz.newMeth(C$, 'parse$BA', function (data) {
this.height=((data[0] & 255) << 24) | ((data[1] & 255) << 16) | ((data[2] & 255) << 8) | (data[3] & 255) ;
this.width=((data[4] & 255) << 24) | ((data[5] & 255) << 16) | ((data[6] & 255) << 8) | (data[7] & 255) ;
this.numComp=($s$[0] = (((data[8] & 255) << 8) | (data[9] & 255)), $s$[0]);
this.bitDepth=($b$[0] = data[10], $b$[0]);
this.compressionType=($b$[0] = data[11], $b$[0]);
this.unknownColor=($b$[0] = data[12], $b$[0]);
this.intelProp=($b$[0] = data[13], $b$[0]);
});

Clazz.newMeth(C$, 'getHeight$', function () {
return this.height;
});

Clazz.newMeth(C$, 'getWidth$', function () {
return this.width;
});

Clazz.newMeth(C$, 'getNumComponents$', function () {
return this.numComp;
});

Clazz.newMeth(C$, 'getCompressionType$', function () {
return $b$[0] = this.compressionType, $b$[0];
});

Clazz.newMeth(C$, 'getBitDepth$', function () {
return $b$[0] = this.bitDepth, $b$[0];
});

Clazz.newMeth(C$, 'getUnknownColorspace$', function () {
return $b$[0] = this.unknownColor, $b$[0];
});

Clazz.newMeth(C$, 'getIntellectualProperty$', function () {
return $b$[0] = this.intelProp, $b$[0];
});

Clazz.newMeth(C$, 'getNativeNode$', function () {
return this.getNativeNodeForSimpleBox$();
});

Clazz.newMeth(C$, 'compose$', function () {
if (this.data != null ) return;
this.data=Clazz.array(Byte.TYPE, [14]);
P$.Box.copyInt$BA$I$I(this.data, 0, this.height);
P$.Box.copyInt$BA$I$I(this.data, 4, this.width);
this.data[8]=(((this.numComp >> 8)|0)|0);
this.data[9]=(((this.numComp & 255)|0)|0);
this.data[10]=(this.bitDepth|0);
this.data[11]=(this.compressionType|0);
this.data[12]=(this.unknownColor|0);
this.data[13]=(this.intelProp|0);
});
var $s$ = new Int16Array(1);
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:18 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
