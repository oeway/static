(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.jpeg2000"),I$=[[0,'io.scif.media.imageioimpl.plugins.jpeg2000.Box','javax.imageio.metadata.IIOMetadataNode','io.scif.media.imageioimpl.common.ImageUtil']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PaletteBox", null, 'io.scif.media.imageioimpl.plugins.jpeg2000.Box');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['numEntries','numComps'],'O',['bitDepth','byte[]','lut','byte[][]']]]

Clazz.newMeth(C$, 'computeLength$java_awt_image_IndexColorModel', function (icm) {
var size=icm.getMapSize$();
var comp=icm.getComponentSize$();
return 11 + comp.length + size * comp.length ;
}, 1);

Clazz.newMeth(C$, 'getCompSize$java_awt_image_IndexColorModel', function (icm) {
var comp=icm.getComponentSize$();
var size=comp.length;
var buf=Clazz.array(Byte.TYPE, [size]);
for (var i=0; i < size; i++) buf[i]=(((comp[i] - 1)|0)|0);

return buf;
}, 1);

Clazz.newMeth(C$, 'getLUT$java_awt_image_IndexColorModel', function (icm) {
var comp=icm.getComponentSize$();
var size=icm.getMapSize$();
var lut=Clazz.array(Byte.TYPE, [comp.length, size]);
icm.getReds$BA(lut[0]);
icm.getGreens$BA(lut[1]);
icm.getBlues$BA(lut[2]);
if (comp.length == 4) icm.getAlphas$BA(lut[3]);
return lut;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_IndexColorModel', function (icm) {
C$.c$$I$BA$BAA.apply(this, [C$.computeLength$java_awt_image_IndexColorModel(icm), C$.getCompSize$java_awt_image_IndexColorModel(icm), C$.getLUT$java_awt_image_IndexColorModel(icm)]);
}, 1);

Clazz.newMeth(C$, 'c$$org_w3c_dom_Node', function (node) {
;C$.superclazz.c$$org_w3c_dom_Node.apply(this,[node]);C$.$init$.apply(this);
var tlut=null;
var index=0;
var children=node.getChildNodes$();
for (var i=0; i < children.getLength$(); i++) {
var child=children.item$I(i);
var name=child.getNodeName$();
if ("NumberEntries".equals$O(name)) {
this.numEntries=$I$(1).getIntElementValue$org_w3c_dom_Node(child);
}if ("NumberColors".equals$O(name)) {
this.numComps=$I$(1).getIntElementValue$org_w3c_dom_Node(child);
}if ("BitDepth".equals$O(name)) {
this.bitDepth=$I$(1).getByteArrayElementValue$org_w3c_dom_Node(child);
}if ("LUT".equals$O(name)) {
tlut=Clazz.array(Byte.TYPE, [this.numEntries, null]);
var children1=child.getChildNodes$();
for (var j=0; j < children1.getLength$(); j++) {
var child1=children1.item$I(j);
name=child1.getNodeName$();
if ("LUTRow".equals$O(name)) {
tlut[index++]=$I$(1).getByteArrayElementValue$org_w3c_dom_Node(child1);
}}
}}
this.lut=Clazz.array(Byte.TYPE, [this.numComps, this.numEntries]);
for (var i=0; i < this.numComps; i++) for (var j=0; j < this.numEntries; j++) this.lut[i][j]=(tlut[j][i]|0);


}, 1);

Clazz.newMeth(C$, 'c$$I$BA$BAA', function (length, comp, lut) {
;C$.superclazz.c$$I$I$BA.apply(this,[length, 1885564018, null]);C$.$init$.apply(this);
this.bitDepth=comp;
this.lut=lut;
this.numEntries=lut[0].length;
this.numComps=lut.length;
}, 1);

Clazz.newMeth(C$, 'c$$BA', function (data) {
;C$.superclazz.c$$I$I$BA.apply(this,[8 + data.length, 1885564018, data]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getNumEntries$', function () {
return this.numEntries;
});

Clazz.newMeth(C$, 'getNumComp$', function () {
return this.numComps;
});

Clazz.newMeth(C$, 'getBitDepths$', function () {
return this.bitDepth;
});

Clazz.newMeth(C$, 'getLUT$', function () {
return this.lut;
});

Clazz.newMeth(C$, 'getNativeNode$', function () {
var node=Clazz.new_($I$(2,1).c$$S,[$I$(1).getName$I(this.getType$())]);
this.setDefaultAttributes$javax_imageio_metadata_IIOMetadataNode(node);
var child=Clazz.new_($I$(2,1).c$$S,["NumberEntries"]);
child.setUserObject$O( new Integer(this.numEntries));
child.setNodeValue$S("" + this.numEntries);
node.appendChild$org_w3c_dom_Node(child);
child=Clazz.new_($I$(2,1).c$$S,["NumberColors"]);
child.setUserObject$O( new Integer(this.numComps));
child.setNodeValue$S("" + this.numComps);
node.appendChild$org_w3c_dom_Node(child);
child=Clazz.new_($I$(2,1).c$$S,["BitDepth"]);
child.setUserObject$O(this.bitDepth);
child.setNodeValue$S($I$(3).convertObjectToString$O(this.bitDepth));
node.appendChild$org_w3c_dom_Node(child);
child=Clazz.new_($I$(2,1).c$$S,["LUT"]);
for (var i=0; i < this.numEntries; i++) {
var child1=Clazz.new_($I$(2,1).c$$S,["LUTRow"]);
var row=Clazz.array(Byte.TYPE, [this.numComps]);
for (var j=0; j < this.numComps; j++) row[j]=(this.lut[j][i]|0);

child1.setUserObject$O(row);
child1.setNodeValue$S($I$(3).convertObjectToString$O(row));
child.appendChild$org_w3c_dom_Node(child1);
}
node.appendChild$org_w3c_dom_Node(child);
return node;
});

Clazz.newMeth(C$, 'parse$BA', function (data) {
if (data == null ) return;
this.numEntries=($s$[0] = (((data[0] & 255) << 8) | (data[1] & 255)), $s$[0]);
this.numComps=data[2];
this.bitDepth=Clazz.array(Byte.TYPE, [this.numComps]);
System.arraycopy$O$I$O$I$I(data, 3, this.bitDepth, 0, this.numComps);
this.lut=Clazz.array(Byte.TYPE, [this.numComps, this.numEntries]);
for (var i=0, k=3 + this.numComps; i < this.numEntries; i++) for (var j=0; j < this.numComps; j++) this.lut[j][i]=(data[k++]|0);


});

Clazz.newMeth(C$, 'compose$', function () {
if (this.data != null ) return;
this.data=Clazz.array(Byte.TYPE, [3 + this.numComps + this.numEntries * this.numComps ]);
this.data[0]=(((this.numEntries >> 8)|0)|0);
this.data[1]=(((this.numEntries & 255)|0)|0);
this.data[2]=((this.numComps|0)|0);
System.arraycopy$O$I$O$I$I(this.bitDepth, 0, this.data, 3, this.numComps);
for (var i=0, k=3 + this.numComps; i < this.numEntries; i++) for (var j=0; j < this.numComps; j++) this.data[k++]=(this.lut[j][i]|0);


});
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:19 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
