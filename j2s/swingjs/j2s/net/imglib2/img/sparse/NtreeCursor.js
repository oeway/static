(function(){var P$=Clazz.newPackage("net.imglib2.img.sparse"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "NtreeCursor", null, 'net.imglib2.iterator.LocalizingIntervalIterator', ['net.imglib2.Cursor', ['net.imglib2.img.sparse.NtreeImg','net.imglib2.img.sparse.NtreeImg.PositionProvider']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['img','net.imglib2.img.sparse.NtreeImg','type','<T extends NativeType<T>>']]]

Clazz.newMeth(C$, 'c$$net_imglib2_img_sparse_NtreeImg', function (img) {
;C$.superclazz.c$$net_imglib2_Interval.apply(this,[img]);C$.$init$.apply(this);
this.img=img;
this.type=img.createLinkedType$();
for (var d=0; d < this.n; d++) this.position[d]=0;

this.position[0]--;
this.type.updateContainer$O(this);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_sparse_NtreeCursor', function (cursor) {
;C$.superclazz.c$$net_imglib2_Interval.apply(this,[cursor]);C$.$init$.apply(this);
this.img=cursor.img;
this.type=this.img.createLinkedType$();
for (var d=0; d < this.n; d++) this.position[d]=cursor.position[d];

this.type.updateContainer$O(this);
}, 1);

Clazz.newMeth(C$, 'get$', function () {
return this.type;
});

Clazz.newMeth(C$, 'next$', function () {
this.fwd$();
return this.get$();
});

Clazz.newMeth(C$, 'remove$', function () {
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_img_sparse_NtreeCursor,[this]);
});

Clazz.newMeth(C$, 'copyCursor$', function () {
return this.copy$();
});

Clazz.newMeth(C$, 'getPosition$', function () {
return this.position;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:09 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
