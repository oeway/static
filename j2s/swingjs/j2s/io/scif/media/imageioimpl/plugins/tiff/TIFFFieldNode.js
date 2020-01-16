(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.tiff"),p$1={},I$=[[0,'Boolean','java.util.Arrays','io.scif.media.imageioimpl.plugins.tiff.TIFFIFD','javax.imageio.metadata.IIOMetadataNode','StringBuffer','io.scif.media.imageio.plugins.tiff.TIFFField']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TIFFFieldNode", null, 'javax.imageio.metadata.IIOMetadataNode');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.isInitialized=$I$(1).FALSE;
}, 1);

C$.$fields$=[['Z',['isIFD'],'O',['isInitialized','Boolean','field','io.scif.media.imageio.plugins.tiff.TIFFField']]]

Clazz.newMeth(C$, 'getNodeName$io_scif_media_imageio_plugins_tiff_TIFFField', function (f) {
return Clazz.instanceOf(f.getData$(), "io.scif.media.imageio.plugins.tiff.TIFFDirectory") ? "TIFFIFD" : "TIFFField";
}, 1);

Clazz.newMeth(C$, 'c$$io_scif_media_imageio_plugins_tiff_TIFFField', function (field) {
;C$.superclazz.c$$S.apply(this,[C$.getNodeName$io_scif_media_imageio_plugins_tiff_TIFFField(field)]);C$.$init$.apply(this);
this.isIFD=Clazz.instanceOf(field.getData$(), "io.scif.media.imageio.plugins.tiff.TIFFDirectory");
this.field=field;
var tag=field.getTag$();
var tagNumber=tag.getNumber$();
var tagName=tag.getName$();
if (this.isIFD) {
if (tagNumber != 0) {
this.setAttribute$S$S("parentTagNumber", Integer.toString$I(tagNumber));
}if (tagName != null ) {
this.setAttribute$S$S("parentTagName", tagName);
}var dir=field.getData$();
var tagSets=dir.getTagSets$();
if (tagSets != null ) {
var tagSetNames="";
for (var i=0; i < tagSets.length; i++) {
tagSetNames += tagSets[i].getClass$().getName$();
if (i != tagSets.length - 1) {
tagSetNames += ",";
}}
this.setAttribute$S$S("tagSets", tagSetNames);
}} else {
this.setAttribute$S$S("number", Integer.toString$I(tagNumber));
this.setAttribute$S$S("name", tagName);
}}, 1);

Clazz.newMeth(C$, 'initialize', function () {
if (this.isInitialized === $I$(1).TRUE ) return;
if (this.isIFD) {
var dir=this.field.getData$();
var fields=dir.getTIFFFields$();
if (fields != null ) {
var tagSets=dir.getTagSets$();
var tagSetList=$I$(2).asList$TTA(tagSets);
var numFields=fields.length;
for (var i=0; i < numFields; i++) {
var f=fields[i];
var tagNumber=f.getTagNumber$();
var tag=$I$(3).getTag$I$java_util_List(tagNumber, tagSetList);
var node=f.getAsNativeNode$();
if (node != null ) {
this.appendChild$org_w3c_dom_Node(node);
}}
}} else {
var child;
var count=this.field.getCount$();
if (this.field.getType$() == 7) {
child=Clazz.new_($I$(4,1).c$$S,["TIFFUndefined"]);
var data=this.field.getAsBytes$();
var sb=Clazz.new_($I$(5,1));
for (var i=0; i < count; i++) {
sb.append$S(Integer.toString$I(data[i] & 255));
if (i < count - 1) {
sb.append$S(",");
}}
child.setAttribute$S$S("value", sb.toString());
} else {
child=Clazz.new_($I$(4,1).c$$S,["TIFF" + $I$(6).getTypeName$I(this.field.getType$()) + "s" ]);
var tag=this.field.getTag$();
for (var i=0; i < count; i++) {
var cchild=Clazz.new_($I$(4,1).c$$S,["TIFF" + $I$(6).getTypeName$I(this.field.getType$())]);
cchild.setAttribute$S$S("value", this.field.getValueAsString$I(i));
if (tag.hasValueNames$() && this.field.isIntegral$() ) {
var value=this.field.getAsInt$I(i);
var name=tag.getValueName$I(value);
if (name != null ) {
cchild.setAttribute$S$S("description", name);
}}child.appendChild$org_w3c_dom_Node(cchild);
}
}this.appendChild$org_w3c_dom_Node(child);
}this.isInitialized=$I$(1).TRUE;
}, p$1);

Clazz.newMeth(C$, 'appendChild$org_w3c_dom_Node', function (newChild) {
if (newChild == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["newChild == null!"]);
}return C$.superclazz.prototype.insertBefore$org_w3c_dom_Node$org_w3c_dom_Node.apply(this, [newChild, null]);
});

Clazz.newMeth(C$, 'hasChildNodes$', function () {
p$1.initialize.apply(this, []);
return C$.superclazz.prototype.hasChildNodes$.apply(this, []);
});

Clazz.newMeth(C$, 'getLength$', function () {
p$1.initialize.apply(this, []);
return C$.superclazz.prototype.getLength$.apply(this, []);
});

Clazz.newMeth(C$, 'getFirstChild$', function () {
p$1.initialize.apply(this, []);
return C$.superclazz.prototype.getFirstChild$.apply(this, []);
});

Clazz.newMeth(C$, 'getLastChild$', function () {
p$1.initialize.apply(this, []);
return C$.superclazz.prototype.getLastChild$.apply(this, []);
});

Clazz.newMeth(C$, 'getPreviousSibling$', function () {
p$1.initialize.apply(this, []);
return C$.superclazz.prototype.getPreviousSibling$.apply(this, []);
});

Clazz.newMeth(C$, 'getNextSibling$', function () {
p$1.initialize.apply(this, []);
return C$.superclazz.prototype.getNextSibling$.apply(this, []);
});

Clazz.newMeth(C$, 'insertBefore$org_w3c_dom_Node$org_w3c_dom_Node', function (newChild, refChild) {
p$1.initialize.apply(this, []);
return C$.superclazz.prototype.insertBefore$org_w3c_dom_Node$org_w3c_dom_Node.apply(this, [newChild, refChild]);
});

Clazz.newMeth(C$, 'replaceChild$org_w3c_dom_Node$org_w3c_dom_Node', function (newChild, oldChild) {
p$1.initialize.apply(this, []);
return C$.superclazz.prototype.replaceChild$org_w3c_dom_Node$org_w3c_dom_Node.apply(this, [newChild, oldChild]);
});

Clazz.newMeth(C$, 'removeChild$org_w3c_dom_Node', function (oldChild) {
p$1.initialize.apply(this, []);
return C$.superclazz.prototype.removeChild$org_w3c_dom_Node.apply(this, [oldChild]);
});

Clazz.newMeth(C$, 'cloneNode$Z', function (deep) {
p$1.initialize.apply(this, []);
return C$.superclazz.prototype.cloneNode$Z.apply(this, [deep]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:20 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
