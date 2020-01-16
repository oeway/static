(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.jpeg2000"),I$=[[0,'io.scif.media.imageioimpl.plugins.jpeg2000.Box','javax.imageio.metadata.IIOMetadataNode']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ComponentMappingBox", null, 'io.scif.media.imageioimpl.plugins.jpeg2000.Box');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['components','short[]','$type','byte[]','+map']]]

Clazz.newMeth(C$, 'c$$BA', function (data) {
;C$.superclazz.c$$I$I$BA.apply(this,[8 + data.length, 1668112752, data]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$HA$BA$BA', function (comp, t, m) {
;C$.superclazz.c$$I$I$BA.apply(this,[8 + (comp.length << 2), 1668112752, null]);C$.$init$.apply(this);
this.components=comp;
this.$type=t;
this.map=m;
}, 1);

Clazz.newMeth(C$, 'c$$org_w3c_dom_Node', function (node) {
;C$.superclazz.c$$org_w3c_dom_Node.apply(this,[node]);C$.$init$.apply(this);
var children=node.getChildNodes$();
var len=(children.getLength$()/3|0);
this.components=Clazz.array(Short.TYPE, [len]);
this.$type=Clazz.array(Byte.TYPE, [len]);
this.map=Clazz.array(Byte.TYPE, [len]);
len*=3;
var index=0;
for (var i=0; i < len; i++) {
var child=children.item$I(i);
var name=child.getNodeName$();
if ("Component".equals$O(name)) {
this.components[index]=$I$(1).getShortElementValue$org_w3c_dom_Node(child);
}if ("ComponentType".equals$O(name)) {
this.$type[index]=($I$(1).getByteElementValue$org_w3c_dom_Node(child)|0);
}if ("ComponentAssociation".equals$O(name)) {
this.map[index++]=($I$(1).getByteElementValue$org_w3c_dom_Node(child)|0);
}}
}, 1);

Clazz.newMeth(C$, 'parse$BA', function (data) {
var len=(data.length/4|0);
this.components=Clazz.array(Short.TYPE, [len]);
this.$type=Clazz.array(Byte.TYPE, [len]);
this.map=Clazz.array(Byte.TYPE, [len]);
for (var i=0, j=0; i < len; i++) {
this.components[i]=((((data[j++] & 255) << 8) | (data[j++] & 255))|0);
this.$type[i]=(data[j++]|0);
this.map[i]=(data[j++]|0);
}
});

Clazz.newMeth(C$, 'getNativeNode$', function () {
var node=Clazz.new_($I$(2,1).c$$S,[$I$(1).getName$I(this.getType$())]);
this.setDefaultAttributes$javax_imageio_metadata_IIOMetadataNode(node);
for (var i=0; i < this.components.length; i++) {
var child=Clazz.new_($I$(2,1).c$$S,["Component"]);
var obj= new Short(this.components[i]);
child.setUserObject$O( new Short(this.components[i]));
child.setNodeValue$S("" + this.components[i]);
node.appendChild$org_w3c_dom_Node(child);
child=Clazz.new_($I$(2,1).c$$S,["ComponentType"]);
child.setUserObject$O( new Byte(($b$[0] = this.$type[i], $b$[0])));
child.setNodeValue$S("" + this.$type[i]);
node.appendChild$org_w3c_dom_Node(child);
child=Clazz.new_($I$(2,1).c$$S,["ComponentAssociation"]);
child.setUserObject$O( new Byte(($b$[0] = this.map[i], $b$[0])));
child.setNodeValue$S("" + this.map[i]);
node.appendChild$org_w3c_dom_Node(child);
}
return node;
});

Clazz.newMeth(C$, 'getComponent$', function () {
return this.components;
});

Clazz.newMeth(C$, 'getComponentType$', function () {
return this.$type;
});

Clazz.newMeth(C$, 'getComponentAssociation$', function () {
return this.map;
});

Clazz.newMeth(C$, 'compose$', function () {
if (this.data != null ) return;
this.data=Clazz.array(Byte.TYPE, [this.$type.length << 2]);
for (var i=0, j=0; i < this.$type.length; i++) {
this.data[j++]=(((this.components[i] >> 8)|0)|0);
this.data[j++]=(((this.components[i] & 255)|0)|0);
this.data[j++]=(this.$type[i]|0);
this.data[j++]=(this.map[i]|0);
}
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:18 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
