(function(){var P$=Clazz.newPackage("net.imglib2.img.array"),I$=[[0,'net.imglib2.util.IntervalIndexer']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractArrayLocalizingCursor", null, 'net.imglib2.AbstractLocalizingCursorInt');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['size','offset','lastIndex'],'O',['type','<T extends NativeType<T>>','img','net.imglib2.img.array.ArrayImg','max','int[]']]]

Clazz.newMeth(C$, 'c$$net_imglib2_img_array_AbstractArrayLocalizingCursor', function (cursor) {
;C$.superclazz.c$$I.apply(this,[cursor.numDimensions$()]);C$.$init$.apply(this);
this.img=cursor.img;
this.type=this.img.createLinkedType$();
this.offset=cursor.offset;
this.size=cursor.size;
this.lastIndex=this.offset + this.size - 1;
this.max=Clazz.array(Integer.TYPE, [this.n]);
for (var d=0; d < this.n; ++d) {
this.position[d]=cursor.position[d];
this.max[d]=cursor.max[d];
}
this.type.updateIndex$I(cursor.type.getIndex$());
this.type.updateContainer$O(this);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_array_ArrayImg$I$I', function (img, offset, size) {
;C$.superclazz.c$$I.apply(this,[img.numDimensions$()]);C$.$init$.apply(this);
this.img=img;
this.offset=offset;
this.size=size;
this.type=img.createLinkedType$();
this.lastIndex=offset + size - 1;
this.max=Clazz.array(Integer.TYPE, [this.n]);
for (var d=0; d < this.n; ++d) this.max[d]=(img.max$I(d)|0);

this.reset$();
}, 1);

Clazz.newMeth(C$, 'get$', function () {
return this.type;
});

Clazz.newMeth(C$, 'hasNext$', function () {
return this.type.getIndex$() < this.lastIndex;
});

Clazz.newMeth(C$, 'fwd$', function () {
this.type.incIndex$();
if (++this.position[0] <= this.max[0]) {
return;
} else {
this.position[0]=0;
for (var d=1; d < this.n; ++d) {
if (++this.position[d] <= this.max[d]) break;
 else this.position[d]=0;
}
return;
}});

Clazz.newMeth(C$, 'jumpFwd$J', function (steps) {
this.type.incIndex$I((steps|0));
$I$(1).indexToPosition$I$IA$IA(this.type.getIndex$(), this.img.dim, this.position);
});

Clazz.newMeth(C$, 'reset$', function () {
this.type.updateIndex$I(this.offset - 1);
$I$(1).indexToPosition$I$IA$IA(this.offset, this.img.dim, this.position);
this.position[0]--;
this.type.updateContainer$O(this);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:07 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
