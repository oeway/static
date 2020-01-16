(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.jpeg2000"),I$=[[0,'io.scif.media.imageioimpl.plugins.jpeg2000.Box','java.awt.color.ICC_Profile']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ColorSpecificationBox", null, 'io.scif.media.imageioimpl.plugins.jpeg2000.Box');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.elementNames=Clazz.array(String, -1, ["Method", "Precedence", "ApproximationAccuracy", "EnumeratedColorSpace", "ICCProfile"]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['B',['method','precedence','approximation'],'I',['ecs'],'O',['profile','java.awt.color.ICC_Profile']]
,['O',['elementNames','String[]']]]

Clazz.newMeth(C$, 'getElementNames$', function () {
return C$.elementNames;
}, 1);

Clazz.newMeth(C$, 'computeLength$B$java_awt_color_ICC_Profile', function (m, profile) {
var ret=15;
if (m == 2 && profile != null  ) {
ret+=profile.getData$().length;
}return ret;
}, 1);

Clazz.newMeth(C$, 'c$$B$B$B$I$java_awt_color_ICC_Profile', function (m, p, a, ecs, profile) {
;C$.superclazz.c$$I$I$BA.apply(this,[C$.computeLength$B$java_awt_color_ICC_Profile(($b$[0] = m, $b$[0]), profile), 1668246642, null]);C$.$init$.apply(this);
this.method=($b$[0] = m, $b$[0]);
this.precedence=($b$[0] = p, $b$[0]);
this.approximation=($b$[0] = a, $b$[0]);
this.ecs=ecs;
this.profile=profile;
}, 1);

Clazz.newMeth(C$, 'c$$BA', function (data) {
;C$.superclazz.c$$I$I$BA.apply(this,[8 + data.length, 1668246642, data]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$org_w3c_dom_Node', function (node) {
;C$.superclazz.c$$org_w3c_dom_Node.apply(this,[node]);C$.$init$.apply(this);
var children=node.getChildNodes$();
for (var i=0; i < children.getLength$(); i++) {
var child=children.item$I(i);
var name=child.getNodeName$();
if ("Method".equals$O(name)) {
this.method=($b$[0] = $I$(1).getByteElementValue$org_w3c_dom_Node(child), $b$[0]);
}if ("Precedence".equals$O(name)) {
this.precedence=($b$[0] = $I$(1).getByteElementValue$org_w3c_dom_Node(child), $b$[0]);
}if ("ApproximationAccuracy".equals$O(name)) {
this.approximation=($b$[0] = $I$(1).getByteElementValue$org_w3c_dom_Node(child), $b$[0]);
}if ("EnumeratedColorSpace".equals$O(name)) {
this.ecs=$I$(1).getIntElementValue$org_w3c_dom_Node(child);
}if ("ICCProfile".equals$O(name)) {
if (Clazz.instanceOf(child, "javax.imageio.metadata.IIOMetadataNode")) this.profile=(child).getUserObject$();
 else {
var value=node.getNodeValue$();
if (value != null ) this.profile=$I$(2).getInstance$BA($I$(1).parseByteArray$S(value));
}}}
}, 1);

Clazz.newMeth(C$, 'getMethod$', function () {
return $b$[0] = this.method, $b$[0];
});

Clazz.newMeth(C$, 'getPrecedence$', function () {
return $b$[0] = this.precedence, $b$[0];
});

Clazz.newMeth(C$, 'getApproximationAccuracy$', function () {
return $b$[0] = this.approximation, $b$[0];
});

Clazz.newMeth(C$, 'getEnumeratedColorSpace$', function () {
return this.ecs;
});

Clazz.newMeth(C$, 'getICCProfile$', function () {
return this.profile;
});

Clazz.newMeth(C$, 'getNativeNode$', function () {
return this.getNativeNodeForSimpleBox$();
});

Clazz.newMeth(C$, 'parse$BA', function (data) {
this.method=($b$[0] = data[0], $b$[0]);
this.precedence=($b$[0] = data[1], $b$[0]);
this.approximation=($b$[0] = data[2], $b$[0]);
if (this.method == 2) {
var proData=Clazz.array(Byte.TYPE, [data.length - 3]);
System.arraycopy$O$I$O$I$I(data, 3, proData, 0, data.length - 3);
this.profile=$I$(2).getInstance$BA(proData);
} else this.ecs=((data[3] & 255) << 24) | ((data[4] & 255) << 16) | ((data[5] & 255) << 8) | (data[6] & 255) ;
});

Clazz.newMeth(C$, 'compose$', function () {
if (this.data != null ) return;
var len=7;
var profileData=null;
if (this.profile != null ) {
profileData=this.profile.getData$();
len+=profileData.length;
}this.data=Clazz.array(Byte.TYPE, [len]);
this.data[0]=(this.method|0);
this.data[1]=(this.precedence|0);
this.data[2]=(this.approximation|0);
P$.Box.copyInt$BA$I$I(this.data, 3, this.ecs);
if (this.profile != null ) System.arraycopy$O$I$O$I$I(profileData, 0, this.data, 7, len - 7);
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:18 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
