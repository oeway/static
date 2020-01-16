(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.jpeg2000"),I$=[[0,'io.scif.media.imageioimpl.plugins.jpeg2000.Box','javax.imageio.metadata.IIOMetadataNode']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ChannelDefinitionBox", null, 'io.scif.media.imageioimpl.plugins.jpeg2000.Box');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['H',['num'],'O',['channels','short[]','+types','+associations']]]

Clazz.newMeth(C$, 'computeLength$java_awt_image_ColorModel', function (colorModel) {
var length=colorModel.getComponentSize$().length - 1;
return 10 + (colorModel.isAlphaPremultiplied$() ? length * 18 : length * 12);
}, 1);

Clazz.newMeth(C$, 'fillBasedOnBands$I$Z$HA$HA$HA', function (numComps, isPremultiplied, c, t, a) {
var num=numComps * (isPremultiplied ? 3 : 2);
if (isPremultiplied) {
for (var i=numComps * 2; i < num; i++) {
c[i]=((i - numComps * 2)|0);
t[i]=(2|0);
a[i]=((i + 1 - numComps * 2)|0);
}
}for (var i=0; i < numComps; i++) {
var j=i + numComps;
c[i]=(i|0);
t[i]=(0|0);
a[j]=a[i]=((i + 1)|0);
c[j]=(numComps|0);
t[j]=(1|0);
}
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_ColorModel', function (colorModel) {
;C$.superclazz.c$$I$I$BA.apply(this,[C$.computeLength$java_awt_image_ColorModel(colorModel), 1667523942, null]);C$.$init$.apply(this);
var length=($s$[0] = (colorModel.getComponentSize$().length - 1), $s$[0]);
this.num=($s$[0] = (length * (colorModel.isAlphaPremultiplied$() ? 3 : 2)), $s$[0]);
this.channels=Clazz.array(Short.TYPE, [this.num]);
this.types=Clazz.array(Short.TYPE, [this.num]);
this.associations=Clazz.array(Short.TYPE, [this.num]);
C$.fillBasedOnBands$I$Z$HA$HA$HA(length, colorModel.isAlphaPremultiplied$(), this.channels, this.types, this.associations);
}, 1);

Clazz.newMeth(C$, 'c$$BA', function (data) {
;C$.superclazz.c$$I$I$BA.apply(this,[8 + data.length, 1667523942, data]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$HA$HA$HA', function (channel, types, associations) {
;C$.superclazz.c$$I$I$BA.apply(this,[10 + channel.length * 6, 1667523942, null]);C$.$init$.apply(this);
this.num=($s$[0] = channel.length, $s$[0]);
this.channels=channel;
this.types=types;
this.associations=associations;
}, 1);

Clazz.newMeth(C$, 'c$$org_w3c_dom_Node', function (node) {
;C$.superclazz.c$$org_w3c_dom_Node.apply(this,[node]);C$.$init$.apply(this);
var children=node.getChildNodes$();
var index=0;
for (var i=0; i < children.getLength$(); i++) {
var child=children.item$I(i);
var name=child.getNodeName$();
if ("NumberOfDefinition".equals$O(name)) {
this.num=$I$(1).getShortElementValue$org_w3c_dom_Node(child);
}if ("Definitions".equals$O(name)) {
this.channels=Clazz.array(Short.TYPE, [this.num]);
this.types=Clazz.array(Short.TYPE, [this.num]);
this.associations=Clazz.array(Short.TYPE, [this.num]);
var children1=child.getChildNodes$();
for (var j=0; j < children1.getLength$(); j++) {
child=children1.item$I(j);
name=child.getNodeName$();
if ("ChannelNumber".equals$O(name)) {
this.channels[index]=$I$(1).getShortElementValue$org_w3c_dom_Node(child);
}if ("ChannelType".equals$O(name)) {
this.types[index]=$I$(1).getShortElementValue$org_w3c_dom_Node(child);
}if ("Association".equals$O(name)) {
this.associations[index++]=$I$(1).getShortElementValue$org_w3c_dom_Node(child);
}}
}}
}, 1);

Clazz.newMeth(C$, 'parse$BA', function (data) {
this.num=($s$[0] = ((data[0] << 8) | data[1]), $s$[0]);
this.channels=Clazz.array(Short.TYPE, [this.num]);
this.types=Clazz.array(Short.TYPE, [this.num]);
this.associations=Clazz.array(Short.TYPE, [this.num]);
for (var i=0, j=2; i < this.num; i++) {
this.channels[i]=((((data[j++] & 255) << 8) + (data[j++] & 255))|0);
this.types[i]=((((data[j++] & 255) << 8) + (data[j++] & 255))|0);
this.associations[i]=((((data[j++] & 255) << 8) + (data[j++] & 255))|0);
}
});

Clazz.newMeth(C$, 'getChannel$', function () {
return this.channels;
});

Clazz.newMeth(C$, 'getTypes$', function () {
return this.types;
});

Clazz.newMeth(C$, 'getAssociation$', function () {
return this.associations;
});

Clazz.newMeth(C$, 'getNativeNode$', function () {
var node=Clazz.new_($I$(2,1).c$$S,[$I$(1).getName$I(this.getType$())]);
this.setDefaultAttributes$javax_imageio_metadata_IIOMetadataNode(node);
var child=Clazz.new_($I$(2,1).c$$S,["NumberOfDefinition"]);
child.setUserObject$O( new Short(this.num));
child.setNodeValue$S("" + this.num);
node.appendChild$org_w3c_dom_Node(child);
child=Clazz.new_($I$(2,1).c$$S,["Definitions"]);
node.appendChild$org_w3c_dom_Node(child);
for (var i=0; i < this.num; i++) {
var child1=Clazz.new_($I$(2,1).c$$S,["ChannelNumber"]);
child1.setUserObject$O( new Short(this.channels[i]));
child1.setNodeValue$S("" + this.channels[i]);
child.appendChild$org_w3c_dom_Node(child1);
child1=Clazz.new_($I$(2,1).c$$S,["ChannelType"]);
child1.setUserObject$O( new Short(this.types[i]));
child1.setNodeValue$S("" + this.types[i]);
child.appendChild$org_w3c_dom_Node(child1);
child1=Clazz.new_($I$(2,1).c$$S,["Association"]);
child1.setUserObject$O( new Short(this.associations[i]));
child1.setNodeValue$S("" + this.associations[i]);
child.appendChild$org_w3c_dom_Node(child1);
}
return node;
});

Clazz.newMeth(C$, 'compose$', function () {
if (this.data != null ) return;
var len=this.num * 6 + 2;
this.data=Clazz.array(Byte.TYPE, [len]);
this.data[0]=(((this.num >> 8)|0)|0);
this.data[1]=(((this.num & 255)|0)|0);
for (var i=0, j=2; i < this.num; i++) {
this.data[j++]=(((this.channels[i] >> 8)|0)|0);
this.data[j++]=(((this.channels[i] & 255)|0)|0);
this.data[j++]=(((this.types[i] >> 8)|0)|0);
this.data[j++]=(((this.types[i] & 255)|0)|0);
this.data[j++]=(((this.associations[i] >> 8)|0)|0);
this.data[j++]=(((this.associations[i] & 255)|0)|0);
}
});
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:18 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
