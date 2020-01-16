(function(){var P$=Clazz.newPackage("net.imglib2.realtransform"),I$=[[0,'net.imglib2.view.RandomAccessibleOnRealRandomAccessible','net.imglib2.realtransform.Translation2D','net.imglib2.realtransform.Translation3D','net.imglib2.realtransform.Translation','net.imglib2.realtransform.Scale2D','net.imglib2.realtransform.Scale3D','net.imglib2.realtransform.Scale','net.imglib2.realtransform.ScaleAndTranslation','net.imglib2.realtransform.AffineRandomAccessible','net.imglib2.realtransform.RealTransformRandomAccessible','java.util.LinkedList','net.imglib2.util.ValuePair','java.util.Collections','net.imglib2.concatenate.ConcatenateUtils']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "RealViewsSimplifyUtils");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'isExclusiveScaleAndTranslation$net_imglib2_realtransform_AffineGet', function (affineGet) {
if (Clazz.instanceOf(affineGet, "net.imglib2.realtransform.ScaleAndTranslationGet")) {
return true;
}var n=affineGet.numDimensions$();
for (var r=0; r < n; ++r) {
for (var c=0; c < n + 1; ++c) {
if (affineGet.get$I$I(r, c) != 0.0  && r != c  && c != n ) {
return false;
}}
}
return true;
}, 1);

Clazz.newMeth(C$, 'isExclusiveScale$net_imglib2_realtransform_AffineGet', function (affineGet) {
if (Clazz.instanceOf(affineGet, "net.imglib2.realtransform.ScaleGet")) {
return true;
}var n=affineGet.numDimensions$();
for (var r=0; r < n; ++r) {
for (var c=0; c < n + 1; ++c) {
if (affineGet.get$I$I(r, c) != 0.0  && r != c ) {
return false;
}}
}
return true;
}, 1);

Clazz.newMeth(C$, 'isExlusiveTranslation$net_imglib2_realtransform_AffineGet', function (affineGet) {
if (Clazz.instanceOf(affineGet, "net.imglib2.realtransform.TranslationGet")) {
return true;
}var n=affineGet.numDimensions$();
for (var r=0; r < n; ++r) {
for (var c=0; c < n + 1; ++c) {
var val=affineGet.get$I$I(r, c);
if (val != 0.0  && ((r == c && val != 1.0  ) || (c != n && val != 1.0  ) ) ) {
return false;
}}
}
return true;
}, 1);

Clazz.newMeth(C$, 'isIdentity$net_imglib2_realtransform_AffineGet', function (affineGet) {
var n=affineGet.numDimensions$();
for (var r=0; r < n; ++r) {
for (var c=0; c < n + 1; ++c) {
var val=affineGet.get$I$I(r, c);
if ((r == c && val != 1.0  ) || (r != c && val != 0.0  ) ) return false;
}
}
return true;
}, 1);

Clazz.newMeth(C$, 'simplifyReal$net_imglib2_RealRandomAccessible', function (source) {
var tmp=C$.findSourceAndSimplifyTransforms$net_imglib2_RealRandomAccessible(source);
if (tmp.getB$() == null ) {
return tmp.getA$();
}return C$.createRealRandomAccessible$net_imglib2_RealRandomAccessible$net_imglib2_realtransform_RealTransform(tmp.getA$(), tmp.getB$());
}, 1);

Clazz.newMeth(C$, 'simplify$net_imglib2_RealRandomAccessible', function (source) {
var tmp=C$.findSourceAndSimplifyTransforms$net_imglib2_RealRandomAccessible(source);
if (tmp.getB$() == null ) {
if (Clazz.instanceOf(tmp.getA$(), "net.imglib2.RandomAccessible")) {
return tmp.getA$();
}return Clazz.new_(1,{T:"Object"},$I$(1,1).c$$net_imglib2_RealRandomAccessible,[source]);
}return C$.createRandomAccessible$net_imglib2_RealRandomAccessible$net_imglib2_realtransform_RealTransform(tmp.getA$(), tmp.getB$());
}, 1);

Clazz.newMeth(C$, 'simplifyRealTransform$net_imglib2_realtransform_RealTransform', function (transform) {
var tmp;
if (Clazz.instanceOf(transform, "net.imglib2.realtransform.InverseRealTransform")) {
tmp=(transform).inverse$().inverse$();
} else {
tmp=transform;
}if (Clazz.instanceOf(transform, "net.imglib2.realtransform.AffineGet")) {
return C$.simplifyAffineGet$net_imglib2_realtransform_AffineGet(tmp);
}return tmp;
}, 1);

Clazz.newMeth(C$, 'simplifyAffineGet$net_imglib2_realtransform_AffineGet', function (affineGet) {
var n=affineGet.numDimensions$();
if (C$.isExlusiveTranslation$net_imglib2_realtransform_AffineGet(affineGet)) {
var translations=Clazz.array(Double.TYPE, [n]);
for (var d=0; d < n; d++) {
translations[d]=affineGet.get$I$I(d, n);
}
if (n == 2) {
return Clazz.new_($I$(2,1).c$$DA,[translations]);
} else if (n == 3) {
return Clazz.new_($I$(3,1).c$$DA,[translations]);
} else {
return Clazz.new_($I$(4,1).c$$DA,[translations]);
}} else if (C$.isExclusiveScale$net_imglib2_realtransform_AffineGet(affineGet)) {
var scalings=Clazz.array(Double.TYPE, [n]);
for (var d=0; d < n; d++) {
scalings[d]=affineGet.get$I$I(d, d);
}
if (n == 2) {
return Clazz.new_($I$(5,1).c$$DA,[scalings]);
} else if (n == 3) {
return Clazz.new_($I$(6,1).c$$DA,[scalings]);
} else {
return Clazz.new_($I$(7,1).c$$DA,[scalings]);
}} else if (C$.isExclusiveScaleAndTranslation$net_imglib2_realtransform_AffineGet(affineGet)) {
var s=Clazz.array(Double.TYPE, [n]);
var t=Clazz.array(Double.TYPE, [n]);
for (var d=0; d < n; d++) {
t[d]=affineGet.get$I$I(d, n);
s[d]=affineGet.get$I$I(d, d);
}
return Clazz.new_($I$(8,1).c$$DA$DA,[t, s]);
}return affineGet.copy$();
}, 1);

Clazz.newMeth(C$, 'createRandomAccessible$net_imglib2_RealRandomAccessible$net_imglib2_realtransform_RealTransform', function (rra, t) {
if (Clazz.instanceOf(t, "net.imglib2.realtransform.AffineGet")) {
return Clazz.new_(1,{T:"Object",R:"net.imglib2.realtransform.AffineGet"},$I$(9,1).c$$net_imglib2_RealRandomAccessible$TR,[rra, t]);
}return Clazz.new_(1,{T:"Object",R:"net.imglib2.realtransform.RealTransform"},$I$(10,1).c$$net_imglib2_RealRandomAccessible$TR,[rra, t]);
}, 1);

Clazz.newMeth(C$, 'createRealRandomAccessible$net_imglib2_RealRandomAccessible$net_imglib2_realtransform_RealTransform', function (rra, t) {
if (!t.isIdentity$()) {
if (Clazz.instanceOf(t, "net.imglib2.realtransform.AffineGet")) {
return Clazz.new_(1,{T:"Object",R:"net.imglib2.realtransform.AffineGet"},$I$(9,1).c$$net_imglib2_RealRandomAccessible$TR,[rra, t]);
}return Clazz.new_(1,{T:"Object",R:"net.imglib2.realtransform.RealTransform"},$I$(10,1).c$$net_imglib2_RealRandomAccessible$TR,[rra, t]);
}return rra;
}, 1);

Clazz.newMeth(C$, 'findSourceAndSimplifyTransforms$net_imglib2_RealRandomAccessible', function (source) {
var transforms=Clazz.new_(1,{E:"net.imglib2.realtransform.RealTransform"},$I$(11,1));
var tmp=source;
if (Clazz.instanceOf(tmp, "net.imglib2.realtransform.RealTransformRealRandomAccessible")) {
transforms.add$TE((tmp).getTransformToSource$());
tmp=(tmp).getSource$();
while (true){
if (Clazz.instanceOf(tmp, "net.imglib2.realtransform.RealTransformRealRandomAccessible")) {
transforms.add$TE((tmp).getTransformToSource$().copy$());
tmp=(tmp).getSource$();
} else {
break;
}}
C$.simplifyRealTransforms$java_util_List(transforms);
for (var i=0; i < transforms.size$() - 1; i++) {
tmp=C$.createRealRandomAccessible$net_imglib2_RealRandomAccessible$net_imglib2_realtransform_RealTransform(tmp, transforms.get$I(i));
}
if (transforms.size$() > 0) return Clazz.new_(1,{A:"net.imglib2.RealRandomAccessible",B:"net.imglib2.realtransform.RealTransform"},$I$(12,1).c$$TA$TB,[tmp, transforms.get$I(transforms.size$() - 1)]);
}return Clazz.new_(1,{A:"net.imglib2.RealRandomAccessible",B:"net.imglib2.realtransform.RealTransform"},$I$(12,1).c$$TA$TB,[tmp, null]);
}, 1);

Clazz.newMeth(C$, 'simplifyRealTransforms$java_util_List', function (transforms) {
var oldSize=transforms.size$() + 1;
$I$(13).reverse$java_util_List(transforms);
while (transforms.size$() < oldSize && transforms.size$() > 0 ){
oldSize=transforms.size$();
var it=transforms.iterator$();
var i=0;
while (it.hasNext$()){
var simplified=C$.simplifyRealTransform$net_imglib2_realtransform_RealTransform(it.next$());
if (!simplified.isIdentity$()) {
transforms.set$I$TE(i, simplified);
} else {
it.remove$();
--i;
}i++;
}
$I$(14).join$java_util_List(transforms);
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:56 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
