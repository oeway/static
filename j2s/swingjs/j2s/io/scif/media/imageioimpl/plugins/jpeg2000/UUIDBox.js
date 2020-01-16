(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.jpeg2000"),I$=[[0,'io.scif.media.imageioimpl.plugins.jpeg2000.Box']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "UUIDBox", null, 'io.scif.media.imageioimpl.plugins.jpeg2000.Box');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.elementNames=Clazz.array(String, -1, ["UUID", "Data"]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['uuid','byte[]','+udata']]
,['O',['elementNames','String[]']]]

Clazz.newMeth(C$, 'getElementNames$', function () {
return C$.elementNames;
}, 1);

Clazz.newMeth(C$, 'c$$BA', function (data) {
;C$.superclazz.c$$I$I$BA.apply(this,[8 + data.length, 1970628964, data]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$org_w3c_dom_Node', function (node) {
;C$.superclazz.c$$org_w3c_dom_Node.apply(this,[node]);C$.$init$.apply(this);
var children=node.getChildNodes$();
for (var i=0; i < children.getLength$(); i++) {
var child=children.item$I(i);
var name=child.getNodeName$();
if ("UUID".equals$O(name)) {
this.uuid=$I$(1).getByteArrayElementValue$org_w3c_dom_Node(child);
}if ("Data".equals$O(name)) {
this.udata=$I$(1).getByteArrayElementValue$org_w3c_dom_Node(child);
}}
}, 1);

Clazz.newMeth(C$, 'parse$BA', function (data) {
this.uuid=Clazz.array(Byte.TYPE, [16]);
System.arraycopy$O$I$O$I$I(data, 0, this.uuid, 0, 16);
this.udata=Clazz.array(Byte.TYPE, [data.length - 16]);
System.arraycopy$O$I$O$I$I(data, 16, this.udata, 0, this.udata.length);
});

Clazz.newMeth(C$, 'getUUID$', function () {
return this.uuid;
});

Clazz.newMeth(C$, 'getData$', function () {
return this.udata;
});

Clazz.newMeth(C$, 'getNativeNode$', function () {
return this.getNativeNodeForSimpleBox$();
});

Clazz.newMeth(C$, 'compose$', function () {
if (this.data != null ) return;
this.data=Clazz.array(Byte.TYPE, [16 + this.udata.length]);
System.arraycopy$O$I$O$I$I(this.uuid, 0, this.data, 0, 16);
System.arraycopy$O$I$O$I$I(this.udata, 0, this.data, 16, this.udata.length);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:19 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
