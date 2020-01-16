(function(){var P$=Clazz.newPackage("net.imglib2.util"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ImgUtil");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'copy$DA$I$IA$net_imglib2_img_Img', function (src, offset, stride, dest) {
var c=dest.localizingCursor$();
var location=Clazz.array(Integer.TYPE, [dest.numDimensions$()]);
while (c.hasNext$()){
var t=c.next$();
c.localize$IA(location);
var this_offset=offset;
for (var i=0; (i < stride.length) && (i < location.length) ; i++) {
this_offset+=location[i] * stride[i];
}
t.setReal$D(src[this_offset]);
}
}, 1);

Clazz.newMeth(C$, 'copy$FA$I$IA$net_imglib2_img_Img', function (src, offset, stride, dest) {
var c=dest.localizingCursor$();
var location=Clazz.array(Integer.TYPE, [dest.numDimensions$()]);
while (c.hasNext$()){
var t=c.next$();
c.localize$IA(location);
var this_offset=offset;
for (var i=0; (i < stride.length) && (i < location.length) ; i++) {
this_offset+=location[i] * stride[i];
}
t.setReal$F(src[this_offset]);
}
}, 1);

Clazz.newMeth(C$, 'copy$JA$I$IA$net_imglib2_img_Img', function (src, offset, stride, dest) {
var c=dest.localizingCursor$();
var location=Clazz.array(Integer.TYPE, [dest.numDimensions$()]);
while (c.hasNext$()){
var t=c.next$();
c.localize$IA(location);
var this_offset=offset;
for (var i=0; (i < stride.length) && (i < location.length) ; i++) {
this_offset+=location[i] * stride[i];
}
t.setInteger$J(src[this_offset]);
}
}, 1);

Clazz.newMeth(C$, 'copy$IA$I$IA$net_imglib2_img_Img', function (src, offset, stride, dest) {
var c=dest.localizingCursor$();
var location=Clazz.array(Integer.TYPE, [dest.numDimensions$()]);
while (c.hasNext$()){
var t=c.next$();
c.localize$IA(location);
var this_offset=offset;
for (var i=0; (i < stride.length) && (i < location.length) ; i++) {
this_offset+=location[i] * stride[i];
}
t.setInteger$I(src[this_offset]);
}
}, 1);

Clazz.newMeth(C$, 'copy$ZA$I$IA$net_imglib2_img_Img', function (src, offset, stride, dest) {
var c=dest.localizingCursor$();
var location=Clazz.array(Integer.TYPE, [dest.numDimensions$()]);
while (c.hasNext$()){
var t=c.next$();
c.localize$IA(location);
var this_offset=offset;
for (var i=0; (i < stride.length) && (i < location.length) ; i++) {
this_offset+=location[i] * stride[i];
}
t.set$Z(src[this_offset]);
}
}, 1);

Clazz.newMeth(C$, 'copy$net_imglib2_img_Img$DA$I$IA', function (src, dest, offset, stride) {
var c=src.localizingCursor$();
var location=Clazz.array(Integer.TYPE, [src.numDimensions$()]);
while (c.hasNext$()){
var t=c.next$();
c.localize$IA(location);
var this_offset=offset;
for (var i=0; (i < stride.length) && (i < location.length) ; i++) {
this_offset+=location[i] * stride[i];
}
dest[this_offset]=t.getRealDouble$();
}
}, 1);

Clazz.newMeth(C$, 'copy$net_imglib2_img_Img$FA$I$IA', function (src, dest, offset, stride) {
var c=src.localizingCursor$();
var location=Clazz.array(Integer.TYPE, [src.numDimensions$()]);
while (c.hasNext$()){
var t=c.next$();
c.localize$IA(location);
var this_offset=offset;
for (var i=0; (i < stride.length) && (i < location.length) ; i++) {
this_offset+=location[i] * stride[i];
}
dest[this_offset]=t.getRealFloat$();
}
}, 1);

Clazz.newMeth(C$, 'copy$net_imglib2_img_Img$JA$I$IA', function (src, dest, offset, stride) {
var c=src.localizingCursor$();
var location=Clazz.array(Integer.TYPE, [src.numDimensions$()]);
while (c.hasNext$()){
var t=c.next$();
c.localize$IA(location);
var this_offset=offset;
for (var i=0; (i < stride.length) && (i < location.length) ; i++) {
this_offset+=location[i] * stride[i];
}
dest[this_offset]=t.getIntegerLong$();
}
}, 1);

Clazz.newMeth(C$, 'copy$net_imglib2_img_Img$IA$I$IA', function (src, dest, offset, stride) {
var c=src.localizingCursor$();
var location=Clazz.array(Integer.TYPE, [src.numDimensions$()]);
while (c.hasNext$()){
var t=c.next$();
c.localize$IA(location);
var this_offset=offset;
for (var i=0; (i < stride.length) && (i < location.length) ; i++) {
this_offset+=location[i] * stride[i];
}
dest[this_offset]=t.getInteger$();
}
}, 1);

Clazz.newMeth(C$, 'copy$net_imglib2_img_Img$HA$I$IA', function (src, dest, offset, stride) {
var c=src.localizingCursor$();
var location=Clazz.array(Integer.TYPE, [src.numDimensions$()]);
while (c.hasNext$()){
var t=c.next$();
c.localize$IA(location);
var this_offset=offset;
for (var i=0; (i < stride.length) && (i < location.length) ; i++) {
this_offset+=location[i] * stride[i];
}
dest[this_offset]=(t.getInteger$()|0);
}
}, 1);

Clazz.newMeth(C$, 'copy$net_imglib2_img_Img$ZA$I$IA', function (src, dest, offset, stride) {
var c=src.localizingCursor$();
var location=Clazz.array(Integer.TYPE, [src.numDimensions$()]);
while (c.hasNext$()){
var t=c.next$();
c.localize$IA(location);
var this_offset=offset;
for (var i=0; (i < stride.length) && (i < location.length) ; i++) {
this_offset+=location[i] * stride[i];
}
dest[this_offset]=t.get$();
}
}, 1);

Clazz.newMeth(C$, 'copy$net_imglib2_img_Img$net_imglib2_img_Img', function (src, dest) {
if (src.iterationOrder$() === dest.iterationOrder$() ) {
var c1=src.cursor$();
var c2=dest.cursor$();
while (c1.hasNext$())c2.next$().set$TT(c1.next$());

} else {
var c=src.cursor$();
var r=dest.randomAccess$();
while (c.hasNext$()){
c.fwd$();
r.setPosition$net_imglib2_Localizable(c);
r.get$().set$TT(c.get$());
}
}}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:13 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
