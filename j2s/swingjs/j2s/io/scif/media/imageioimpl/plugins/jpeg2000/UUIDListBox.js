(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.jpeg2000"),I$=[[0,'io.scif.media.imageioimpl.plugins.jpeg2000.Box','javax.imageio.metadata.IIOMetadataNode','io.scif.media.imageioimpl.common.ImageUtil']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "UUIDListBox", null, 'io.scif.media.imageioimpl.plugins.jpeg2000.Box');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['H',['num'],'O',['uuids','byte[][]']]]

Clazz.newMeth(C$, 'c$$H$BAA', function (num, uuids) {
;C$.superclazz.c$$I$I$BA.apply(this,[10 + (uuids.length << 4), 1970041716, null]);C$.$init$.apply(this);
this.num=num;
this.uuids=uuids;
}, 1);

Clazz.newMeth(C$, 'c$$BA', function (data) {
;C$.superclazz.c$$I$I$BA.apply(this,[8 + data.length, 1970041716, data]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$org_w3c_dom_Node', function (node) {
;C$.superclazz.c$$org_w3c_dom_Node.apply(this,[node]);C$.$init$.apply(this);
var children=node.getChildNodes$();
var index=0;
for (var i=0; i < children.getLength$(); i++) {
var child=children.item$I(i);
if ("NumberUUID".equals$O(child.getNodeName$())) {
this.num=$I$(1).getShortElementValue$org_w3c_dom_Node(child);
this.uuids=Clazz.array(Byte.TYPE, [this.num, null]);
}}
for (var i=0; i < children.getLength$(); i++) {
var child=children.item$I(i);
if ("UUID".equals$O(child.getNodeName$()) && index < this.num ) {
this.uuids[index++]=$I$(1).getByteArrayElementValue$org_w3c_dom_Node(child);
}}
}, 1);

Clazz.newMeth(C$, 'parse$BA', function (data) {
this.num=($s$[0] = (((data[0] & 255) << 8) | (data[1] & 255)), $s$[0]);
this.uuids=Clazz.array(Byte.TYPE, [this.num, null]);
var pos=2;
for (var i=0; i < this.num; i++) {
this.uuids[i]=Clazz.array(Byte.TYPE, [16]);
System.arraycopy$O$I$O$I$I(data, pos, this.uuids[i], 0, 16);
pos+=16;
}
});

Clazz.newMeth(C$, 'getNativeNode$', function () {
var node=Clazz.new_($I$(2,1).c$$S,[$I$(1).getName$I(this.getType$())]);
this.setDefaultAttributes$javax_imageio_metadata_IIOMetadataNode(node);
var child=Clazz.new_($I$(2,1).c$$S,["NumberUUID"]);
child.setUserObject$O( new Short(this.num));
child.setNodeValue$S("" + this.num);
node.appendChild$org_w3c_dom_Node(child);
for (var i=0; i < this.num; i++) {
child=Clazz.new_($I$(2,1).c$$S,["UUID"]);
child.setUserObject$O(this.uuids[i]);
child.setNodeValue$S($I$(3).convertObjectToString$O(this.uuids[i]));
node.appendChild$org_w3c_dom_Node(child);
}
return node;
});

Clazz.newMeth(C$, 'compose$', function () {
if (this.data != null ) return;
this.data=Clazz.array(Byte.TYPE, [2 + this.num * 16]);
this.data[0]=(((this.num >> 8)|0)|0);
this.data[1]=(((this.num & 255)|0)|0);
for (var i=0, pos=2; i < this.num; i++) {
System.arraycopy$O$I$O$I$I(this.uuids[i], 0, this.data, pos, 16);
pos+=16;
}
});
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:19 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
