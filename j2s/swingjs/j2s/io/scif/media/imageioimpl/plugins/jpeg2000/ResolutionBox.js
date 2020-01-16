(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.jpeg2000"),I$=[[0,'io.scif.media.imageioimpl.plugins.jpeg2000.Box','javax.imageio.metadata.IIOMetadataNode']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ResolutionBox", null, 'io.scif.media.imageioimpl.plugins.jpeg2000.Box');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['B',['expV','expH'],'F',['hRes','vRes'],'H',['numV','numH','denomV','denomH']]]

Clazz.newMeth(C$, 'c$$I$BA', function (type, data) {
;C$.superclazz.c$$I$I$BA.apply(this,[18, type, data]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I$F$F', function (type, hRes, vRes) {
;C$.superclazz.c$$I$I$BA.apply(this,[18, type, null]);C$.$init$.apply(this);
this.hRes=hRes;
this.vRes=vRes;
this.denomH=this.denomV=($s$[0] = 1, $s$[0]);
this.expV=($b$[0] = 0, $b$[0]);
if (vRes >= 32768 ) {
var temp=(vRes|0);
while (temp >= 32768){
($b$[0]=this.expV,this.expV=(++$b$[0],$b$[0]));
temp=(temp/(10)|0);
}
this.numV=($s$[0] = (temp & 65535), $s$[0]);
} else {
this.numV=($s$[0] = vRes, $s$[0]);
}this.expH=($b$[0] = 0, $b$[0]);
if (hRes >= 32768 ) {
var temp=(hRes|0);
while (temp >= 32768){
($b$[0]=this.expH,this.expH=(++$b$[0],$b$[0]));
temp=(temp/(10)|0);
}
this.numH=($s$[0] = (temp & 65535), $s$[0]);
} else {
this.numH=($s$[0] = hRes, $s$[0]);
}}, 1);

Clazz.newMeth(C$, 'c$$org_w3c_dom_Node', function (node) {
;C$.superclazz.c$$org_w3c_dom_Node.apply(this,[node]);C$.$init$.apply(this);
var children=node.getChildNodes$();
for (var i=0; i < children.getLength$(); i++) {
var child=children.item$I(i);
var name=child.getNodeName$();
if ("VerticalResolutionNumerator".equals$O(name)) {
this.numV=$I$(1).getShortElementValue$org_w3c_dom_Node(child);
}if ("VerticalResolutionDenominator".equals$O(name)) {
this.denomV=$I$(1).getShortElementValue$org_w3c_dom_Node(child);
}if ("HorizontalResolutionNumerator".equals$O(name)) {
this.numH=$I$(1).getShortElementValue$org_w3c_dom_Node(child);
}if ("HorizontalResolutionDenominator".equals$O(name)) {
this.denomH=$I$(1).getShortElementValue$org_w3c_dom_Node(child);
}if ("VerticalResolutionExponent".equals$O(name)) {
this.expV=($b$[0] = $I$(1).getByteElementValue$org_w3c_dom_Node(child), $b$[0]);
}if ("HorizontalResolutionExponent".equals$O(name)) {
this.expH=($b$[0] = $I$(1).getByteElementValue$org_w3c_dom_Node(child), $b$[0]);
}}
}, 1);

Clazz.newMeth(C$, 'getHorizontalResolution$', function () {
return this.hRes;
});

Clazz.newMeth(C$, 'getVerticalResolution$', function () {
return this.vRes;
});

Clazz.newMeth(C$, 'parse$BA', function (data) {
this.numV=($s$[0] = (((data[0] & 255) << 8) | (data[1] & 255)), $s$[0]);
this.denomV=($s$[0] = (((data[2] & 255) << 8) | (data[3] & 255)), $s$[0]);
this.numH=($s$[0] = (((data[4] & 255) << 8) | (data[5] & 255)), $s$[0]);
this.denomH=($s$[0] = (((data[6] & 255) << 8) | (data[7] & 255)), $s$[0]);
this.expV=($b$[0] = data[8], $b$[0]);
this.expH=($b$[0] = data[9], $b$[0]);
this.vRes=((this.numV & 65535) * Math.pow(10, this.expV) / (this.denomV & 65535));
this.hRes=((this.numH & 65535) * Math.pow(10, this.expH) / (this.denomH & 65535));
});

Clazz.newMeth(C$, 'getNativeNode$', function () {
var node=Clazz.new_($I$(2,1).c$$S,[$I$(1).getName$I(this.getType$())]);
this.setDefaultAttributes$javax_imageio_metadata_IIOMetadataNode(node);
var child=Clazz.new_($I$(2,1).c$$S,["VerticalResolutionNumerator"]);
child.setUserObject$O( new Short(this.numV));
child.setNodeValue$S("" + this.numV);
node.appendChild$org_w3c_dom_Node(child);
child=Clazz.new_($I$(2,1).c$$S,["VerticalResolutionDenominator"]);
child.setUserObject$O( new Short(this.denomV));
child.setNodeValue$S("" + this.denomV);
node.appendChild$org_w3c_dom_Node(child);
child=Clazz.new_($I$(2,1).c$$S,["HorizontalResolutionNumerator"]);
child.setUserObject$O( new Short(this.numH));
child.setNodeValue$S("" + this.numH);
node.appendChild$org_w3c_dom_Node(child);
child=Clazz.new_($I$(2,1).c$$S,["HorizontalResolutionDenominator"]);
child.setUserObject$O( new Short(this.denomH));
child.setNodeValue$S("" + this.denomH);
node.appendChild$org_w3c_dom_Node(child);
child=Clazz.new_($I$(2,1).c$$S,["VerticalResolutionExponent"]);
child.setUserObject$O( new Byte(($b$[0] = this.expV, $b$[0])));
child.setNodeValue$S("" + this.expV);
node.appendChild$org_w3c_dom_Node(child);
child=Clazz.new_($I$(2,1).c$$S,["HorizontalResolutionExponent"]);
child.setUserObject$O( new Byte(($b$[0] = this.expH, $b$[0])));
child.setNodeValue$S("" + this.expH);
node.appendChild$org_w3c_dom_Node(child);
return node;
});

Clazz.newMeth(C$, 'compose$', function () {
if (this.data != null ) return;
this.data=Clazz.array(Byte.TYPE, [10]);
this.data[0]=(((this.numV >> 8)|0)|0);
this.data[1]=(((this.numV & 255)|0)|0);
this.data[2]=(((this.denomV >> 8)|0)|0);
this.data[3]=(((this.denomV & 255)|0)|0);
this.data[4]=(((this.numH >> 8)|0)|0);
this.data[5]=(((this.numH & 255)|0)|0);
this.data[6]=(((this.denomH >> 8)|0)|0);
this.data[7]=(((this.denomH & 255)|0)|0);
this.data[8]=(this.expV|0);
this.data[9]=(this.expH|0);
});
var $s$ = new Int16Array(1);
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:19 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
