(function(){var P$=Clazz.newPackage("io.scif.formats.tiff"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "TiffIFDEntry", null, null, 'Comparable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['tag','valueCount'],'L',['valueOffset'],'O',['type','io.scif.formats.tiff.IFDType']]]

Clazz.newMeth(C$, 'c$$I$io_scif_formats_tiff_IFDType$I$J', function (tag, type, valueCount, valueOffset) {
;C$.$init$.apply(this);
this.tag=tag;
this.type=type;
this.valueCount=valueCount;
this.valueOffset=valueOffset;
}, 1);

Clazz.newMeth(C$, 'getTag$', function () {
return this.tag;
});

Clazz.newMeth(C$, 'getType$', function () {
return this.type;
});

Clazz.newMeth(C$, 'getValueCount$', function () {
return this.valueCount;
});

Clazz.newMeth(C$, 'getValueOffset$', function () {
return this.valueOffset;
});

Clazz.newMeth(C$, 'toString', function () {
return "tag = " + this.tag + ", type = " + this.type + ", count = " + this.valueCount + ", offset = " + this.valueOffset ;
});

Clazz.newMeth(C$, ['compareTo$O','compareTo$','compareTo$TT'], function (o) {
if (!(Clazz.instanceOf(o, "io.scif.formats.tiff.TiffIFDEntry"))) return 1;
var offset=(o).getValueOffset$();
if (offset == this.getValueOffset$()) return 0;
return offset < this.getValueOffset$() ? 1 : -1;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:42 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
