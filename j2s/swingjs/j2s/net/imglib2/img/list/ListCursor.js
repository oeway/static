(function(){var P$=Clazz.newPackage("net.imglib2.img.list"),I$=[[0,'net.imglib2.util.IntervalIndexer']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ListCursor", null, 'net.imglib2.AbstractCursorInt');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['i','maxNumPixels'],'O',['img','net.imglib2.img.list.AbstractListImg']]]

Clazz.newMeth(C$, 'c$$net_imglib2_img_list_ListCursor', function (cursor) {
;C$.superclazz.c$$I.apply(this,[cursor.numDimensions$()]);C$.$init$.apply(this);
this.img=cursor.img;
this.maxNumPixels=cursor.maxNumPixels;
this.i=cursor.i;
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_list_AbstractListImg', function (img) {
;C$.superclazz.c$$I.apply(this,[img.numDimensions$()]);C$.$init$.apply(this);
this.img=img;
this.maxNumPixels=(img.size$()|0) - 1;
this.reset$();
}, 1);

Clazz.newMeth(C$, 'get$', function () {
return this.img.get$I(this.i);
});

Clazz.newMeth(C$, ['set$TT'], function (t) {
this.img.set$I$TT(this.i, t);
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_img_list_ListCursor,[this]);
});

Clazz.newMeth(C$, 'copyCursor$', function () {
return this.copy$();
});

Clazz.newMeth(C$, 'hasNext$', function () {
return this.i < this.maxNumPixels;
});

Clazz.newMeth(C$, 'jumpFwd$J', function (steps) {
this.i+=steps;
});

Clazz.newMeth(C$, 'fwd$', function () {
++this.i;
});

Clazz.newMeth(C$, 'reset$', function () {
this.i=-1;
});

Clazz.newMeth(C$, 'localize$IA', function (position) {
$I$(1).indexToPosition$I$IA$IA(this.i, this.img.dim, position);
});

Clazz.newMeth(C$, 'getIntPosition$I', function (d) {
return $I$(1).indexToPosition$I$IA$IA$I(this.i, this.img.dim, this.img.step, d);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:08 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
