(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.jpeg2000"),I$=[[0,'io.scif.media.imageioimpl.plugins.jpeg2000.Box']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DataEntryURLBox", null, 'io.scif.media.imageioimpl.plugins.jpeg2000.Box');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.elementNames=Clazz.array(String, -1, ["Version", "Flags", "URL"]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['B',['version'],'S',['url'],'O',['flags','byte[]']]
,['O',['elementNames','String[]']]]

Clazz.newMeth(C$, 'getElementNames$', function () {
return C$.elementNames;
}, 1);

Clazz.newMeth(C$, 'c$$BA', function (data) {
;C$.superclazz.c$$I$I$BA.apply(this,[8 + data.length, 1970433056, data]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$B$BA$S', function (version, flags, url) {
;C$.superclazz.c$$I$I$BA.apply(this,[12 + url.length$(), 1970433056, null]);C$.$init$.apply(this);
this.version=($b$[0] = version, $b$[0]);
this.flags=flags;
this.url=url;
}, 1);

Clazz.newMeth(C$, 'c$$org_w3c_dom_Node', function (node) {
;C$.superclazz.c$$org_w3c_dom_Node.apply(this,[node]);C$.$init$.apply(this);
var children=node.getChildNodes$();
for (var i=0; i < children.getLength$(); i++) {
var child=children.item$I(i);
var name=child.getNodeName$();
if ("Version".equals$O(name)) {
this.version=($b$[0] = $I$(1).getByteElementValue$org_w3c_dom_Node(child), $b$[0]);
}if ("Flags".equals$O(name)) {
this.flags=$I$(1).getByteArrayElementValue$org_w3c_dom_Node(child);
}if ("URL".equals$O(name)) {
this.url=$I$(1).getStringElementValue$org_w3c_dom_Node(child);
}}
}, 1);

Clazz.newMeth(C$, 'parse$BA', function (data) {
this.version=($b$[0] = data[0], $b$[0]);
this.flags=Clazz.array(Byte.TYPE, [3]);
this.flags[0]=(data[1]|0);
this.flags[1]=(data[2]|0);
this.flags[2]=(data[3]|0);
this.url= String.instantialize(data, 4, data.length - 4);
});

Clazz.newMeth(C$, 'getNativeNode$', function () {
return this.getNativeNodeForSimpleBox$();
});

Clazz.newMeth(C$, 'getVersion$', function () {
return $b$[0] = this.version, $b$[0];
});

Clazz.newMeth(C$, 'getFlags$', function () {
return this.flags;
});

Clazz.newMeth(C$, 'getURL$', function () {
return this.url;
});

Clazz.newMeth(C$, 'compose$', function () {
if (this.data != null ) return;
this.data=Clazz.array(Byte.TYPE, [4 + this.url.length$()]);
this.data[0]=(this.version|0);
this.data[1]=(this.flags[0]|0);
this.data[2]=(this.flags[1]|0);
this.data[3]=(this.flags[2]|0);
System.arraycopy$O$I$O$I$I(this.url.getBytes$(), 0, this.data, 4, this.url.length$());
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:18 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
