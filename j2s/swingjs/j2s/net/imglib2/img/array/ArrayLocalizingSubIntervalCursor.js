(function(){var P$=Clazz.newPackage("net.imglib2.img.array"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ArrayLocalizingSubIntervalCursor", null, 'net.imglib2.img.array.AbstractArrayLocalizingCursor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_array_ArrayImg$I$I', function (img, offset, size) {
;C$.superclazz.c$$net_imglib2_img_array_ArrayImg$I$I.apply(this,[img, offset, size]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_array_ArrayLocalizingSubIntervalCursor', function (cursor) {
;C$.superclazz.c$$net_imglib2_img_array_AbstractArrayLocalizingCursor.apply(this,[cursor]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_img_array_ArrayLocalizingSubIntervalCursor,[this]);
});

Clazz.newMeth(C$, 'copyCursor$', function () {
return this.copy$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:07 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1