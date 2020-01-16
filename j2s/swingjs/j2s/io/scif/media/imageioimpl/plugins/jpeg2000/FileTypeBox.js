(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.jpeg2000"),I$=[[0,'io.scif.media.imageioimpl.plugins.jpeg2000.Box']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "FileTypeBox", null, 'io.scif.media.imageioimpl.plugins.jpeg2000.Box');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.elementNames=Clazz.array(String, -1, ["Brand", "MinorVersion", "CompatibilityList"]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['brand','minorVersion'],'O',['compatibility','int[]']]
,['O',['elementNames','String[]']]]

Clazz.newMeth(C$, 'getElementNames$', function () {
return C$.elementNames;
}, 1);

Clazz.newMeth(C$, 'c$$I$I$IA', function (br, minorVersion, comp) {
;C$.superclazz.c$$I$I$BA.apply(this,[16 + (comp == null  ? 0 : (comp.length << 2)), 1718909296, null]);C$.$init$.apply(this);
this.brand=br;
this.minorVersion=minorVersion;
this.compatibility=comp;
}, 1);

Clazz.newMeth(C$, 'c$$BA', function (data) {
;C$.superclazz.c$$I$I$BA.apply(this,[8 + data.length, 1718909296, data]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$org_w3c_dom_Node', function (node) {
;C$.superclazz.c$$org_w3c_dom_Node.apply(this,[node]);C$.$init$.apply(this);
var children=node.getChildNodes$();
for (var i=0; i < children.getLength$(); i++) {
var child=children.item$I(i);
var name=child.getNodeName$();
if ("Brand".equals$O(name)) {
this.brand=$I$(1).getIntElementValue$org_w3c_dom_Node(child);
}if ("MinorVersion".equals$O(name)) {
this.minorVersion=$I$(1).getIntElementValue$org_w3c_dom_Node(child);
}if ("CompatibilityList".equals$O(name)) {
this.compatibility=$I$(1).getIntArrayElementValue$org_w3c_dom_Node(child);
}}
}, 1);

Clazz.newMeth(C$, 'getBrand$', function () {
return this.brand;
});

Clazz.newMeth(C$, 'getMinorVersion$', function () {
return this.minorVersion;
});

Clazz.newMeth(C$, 'getCompatibilityList$', function () {
return this.compatibility;
});

Clazz.newMeth(C$, 'getNativeNode$', function () {
return this.getNativeNodeForSimpleBox$();
});

Clazz.newMeth(C$, 'parse$BA', function (data) {
if (data == null ) return;
this.brand=((data[0] & 255) << 24) | ((data[1] & 255) << 16) | ((data[2] & 255) << 8) | (data[3] & 255) ;
this.minorVersion=((data[4] & 255) << 24) | ((data[5] & 255) << 16) | ((data[6] & 255) << 8) | (data[7] & 255) ;
var len=((data.length - 8)/4|0);
if (len > 0) {
this.compatibility=Clazz.array(Integer.TYPE, [len]);
for (var i=0, j=8; i < len; i++, j+=4) this.compatibility[i]=((data[j] & 255) << 24) | ((data[j + 1] & 255) << 16) | ((data[j + 2] & 255) << 8) | (data[j + 3] & 255) ;

}});

Clazz.newMeth(C$, 'compose$', function () {
if (this.data != null ) return;
this.data=Clazz.array(Byte.TYPE, [8 + (this.compatibility != null  ? (this.compatibility.length << 2) : 0)]);
P$.Box.copyInt$BA$I$I(this.data, 0, this.brand);
P$.Box.copyInt$BA$I$I(this.data, 4, this.minorVersion);
if (this.compatibility != null ) for (var i=0, j=8; i < this.compatibility.length; i++, j+=4) P$.Box.copyInt$BA$I$I(this.data, j, this.compatibility[i]);

});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:18 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
