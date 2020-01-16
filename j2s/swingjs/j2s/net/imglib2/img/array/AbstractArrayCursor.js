(function(){var P$=Clazz.newPackage("net.imglib2.img.array"),I$=[[0,'net.imglib2.util.IntervalIndexer']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractArrayCursor", null, 'net.imglib2.AbstractCursorInt');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['offset','size','lastIndex'],'O',['type','<T extends NativeType<T>>','img','net.imglib2.img.array.ArrayImg']]]

Clazz.newMeth(C$, 'c$$net_imglib2_img_array_AbstractArrayCursor', function (cursor) {
;C$.superclazz.c$$I.apply(this,[cursor.numDimensions$()]);C$.$init$.apply(this);
this.img=cursor.img;
this.type=this.img.createLinkedType$();
this.offset=cursor.offset;
this.size=cursor.size;
this.lastIndex=cursor.lastIndex;
this.type.updateIndex$I(cursor.type.getIndex$());
this.type.updateContainer$O(this);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_array_ArrayImg$I$I', function (img, offset, size) {
;C$.superclazz.c$$I.apply(this,[img.numDimensions$()]);C$.$init$.apply(this);
this.type=img.createLinkedType$();
this.img=img;
this.lastIndex=offset + size - 1;
this.offset=offset;
this.size=size;
this.reset$();
}, 1);

Clazz.newMeth(C$, 'get$', function () {
return this.type;
});

Clazz.newMeth(C$, 'hasNext$', function () {
return this.type.getIndex$() < this.lastIndex;
});

Clazz.newMeth(C$, 'jumpFwd$J', function (steps) {
this.type.incIndex$I((steps|0));
});

Clazz.newMeth(C$, 'fwd$', function () {
this.type.incIndex$();
});

Clazz.newMeth(C$, 'reset$', function () {
this.type.updateIndex$I(this.offset - 1);
this.type.updateContainer$O(this);
});

Clazz.newMeth(C$, 'toString', function () {
return this.type.toString();
});

Clazz.newMeth(C$, 'getIntPosition$I', function (dim) {
return $I$(1).indexToPosition$I$IA$I(this.type.getIndex$(), this.img.dim, dim);
});

Clazz.newMeth(C$, 'localize$IA', function (position) {
$I$(1).indexToPosition$I$IA$IA(this.type.getIndex$(), this.img.dim, position);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:07 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
