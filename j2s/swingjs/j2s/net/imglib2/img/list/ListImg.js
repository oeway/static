(function(){var P$=Clazz.newPackage("net.imglib2.img.list"),I$=[[0,'java.util.ArrayList']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ListImg", null, 'net.imglib2.img.list.AbstractListImg');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['pixels','java.util.ArrayList']]]

Clazz.newMeth(C$, ['c$$JA$TT'], function (dim, type) {
;C$.superclazz.c$$JA.apply(this,[dim]);C$.$init$.apply(this);
this.pixels=Clazz.new_(1,{E:"Object"},$I$(1,1).c$$I,[(this.numPixels|0)]);
if (Clazz.instanceOf(type, "net.imglib2.type.Type")) {
var t=type;
var tpixels=this.pixels;
for (var i=0; i < this.numPixels; ++i) tpixels.add$TE(t.createVariable$());

} else {
for (var i=0; i < this.numPixels; ++i) this.pixels.add$TE(null);

}}, 1);

Clazz.newMeth(C$, ['c$$java_util_Collection$JA','c$null'], function (collection, dim) {
;C$.superclazz.c$$JA.apply(this,[dim]);C$.$init$.apply(this);
Clazz.assert(C$, this, function(){return this.numPixels == collection.size$()}, function(){return "Dimensions do not match number of pixels."});
this.pixels=Clazz.new_(1,{E:"Object"},$I$(1,1).c$$I,[(this.numPixels|0)]);
this.pixels.addAll$java_util_Collection(collection);
}, 1);

Clazz.newMeth(C$, 'get$I', function (index) {
return this.pixels.get$I(index);
});

Clazz.newMeth(C$, ['set$I$TT'], function (index, value) {
this.pixels.set$I$TE(index, value);
});

Clazz.newMeth(C$, 'copyWithType$net_imglib2_img_list_ListImg', function (img) {
var copy=Clazz.new_(1,{T:"Object"},C$.c$$JA$TT,[img.dimension, img.firstElement$().createVariable$()]);
var source=img.cursor$();
var target=copy.cursor$();
while (source.hasNext$())target.next$().set$TT(source.next$());

return copy;
}, 1);

Clazz.newMeth(C$, 'copy$', function () {
var type=this.firstElement$();
if (Clazz.instanceOf(type, "net.imglib2.type.Type")) {
var copy=C$.copyWithType$net_imglib2_img_list_ListImg(this);
return copy;
}return Clazz.new_(1,{T:"Object"},C$.c$$java_util_Collection$JA,[this.pixels, this.dimension]);
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:08 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
