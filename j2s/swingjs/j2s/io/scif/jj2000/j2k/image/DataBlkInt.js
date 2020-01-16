(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.image"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DataBlkInt", null, 'io.scif.jj2000.j2k.image.DataBlk');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['data','int[]']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I', function (ulx, uly, w, h) {
Clazz.super_(C$, this);
this.ulx=ulx;
this.uly=uly;
this.w=w;
this.h=h;
this.offset=0;
this.scanw=w;
this.data=Clazz.array(Integer.TYPE, [w * h]);
}, 1);

Clazz.newMeth(C$, 'c$$io_scif_jj2000_j2k_image_DataBlkInt', function (src) {
Clazz.super_(C$, this);
this.ulx=src.ulx;
this.uly=src.uly;
this.w=src.w;
this.h=src.h;
this.offset=0;
this.scanw=this.w;
this.data=Clazz.array(Integer.TYPE, [this.w * this.h]);
for (var i=0; i < this.h; i++) System.arraycopy$O$I$O$I$I(src.data, i * src.scanw, this.data, i * this.scanw, this.w);

}, 1);

Clazz.newMeth(C$, 'getDataType$', function () {
return 3;
});

Clazz.newMeth(C$, 'getData$', function () {
return this.data;
});

Clazz.newMeth(C$, 'getDataInt$', function () {
return this.data;
});

Clazz.newMeth(C$, 'setData$O', function (arr) {
this.data=arr;
});

Clazz.newMeth(C$, 'setDataInt$IA', function (arr) {
this.data=arr;
});

Clazz.newMeth(C$, 'toString', function () {
var str=C$.superclazz.prototype.toString.apply(this, []);
if (this.data != null ) {
str += ",data=" + this.data.length + " bytes" ;
}return str;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:16 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
