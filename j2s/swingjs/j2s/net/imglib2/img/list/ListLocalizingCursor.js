(function(){var P$=Clazz.newPackage("net.imglib2.img.list"),I$=[[0,'net.imglib2.util.IntervalIndexer']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ListLocalizingCursor", null, 'net.imglib2.AbstractLocalizingCursorInt');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['i','maxNumPixels'],'O',['max','long[]','img','net.imglib2.img.list.AbstractListImg']]]

Clazz.newMeth(C$, 'c$$net_imglib2_img_list_ListLocalizingCursor', function (cursor) {
;C$.superclazz.c$$I.apply(this,[cursor.numDimensions$()]);C$.$init$.apply(this);
this.img=cursor.img;
this.maxNumPixels=cursor.maxNumPixels;
this.max=Clazz.array(Long.TYPE, [this.n]);
for (var d=0; d < this.n; ++d) {
this.max[d]=cursor.max[d];
this.position[d]=cursor.position[d];
}
this.i=cursor.i;
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_list_AbstractListImg', function (img) {
;C$.superclazz.c$$I.apply(this,[img.numDimensions$()]);C$.$init$.apply(this);
this.img=img;
this.maxNumPixels=(img.size$()|0) - 1;
this.max=Clazz.array(Long.TYPE, [this.n]);
img.max$JA(this.max);
this.reset$();
}, 1);

Clazz.newMeth(C$, 'fwd$', function () {
++this.i;
for (var d=0; d < this.n; d++) if (++this.position[d] > this.max[d]) this.position[d]=0;
 else break;

});

Clazz.newMeth(C$, 'jumpFwd$J', function (steps) {
this.i+=steps;
$I$(1).indexToPosition$I$IA$IA(this.i, this.img.dim, this.position);
});

Clazz.newMeth(C$, 'hasNext$', function () {
return this.i < this.maxNumPixels;
});

Clazz.newMeth(C$, 'reset$', function () {
this.i=-1;
this.position[0]=-1;
for (var d=1; d < this.n; d++) this.position[d]=0;

});

Clazz.newMeth(C$, 'get$', function () {
return this.img.get$I(this.i);
});

Clazz.newMeth(C$, ['set$TT'], function (t) {
this.img.set$I$TT(this.i, t);
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_img_list_ListLocalizingCursor,[this]);
});

Clazz.newMeth(C$, 'copyCursor$', function () {
return this.copy$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:08 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
