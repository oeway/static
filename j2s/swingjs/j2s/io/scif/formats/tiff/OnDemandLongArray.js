(function(){var P$=Clazz.newPackage("io.scif.formats.tiff"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "OnDemandLongArray");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['size'],'L',['start'],'O',['stream','org.scijava.io.handle.DataHandle']]]

Clazz.newMeth(C$, 'c$$org_scijava_io_handle_DataHandle', function ($in) {
;C$.$init$.apply(this);
this.stream=$in;
this.start=this.stream.offset$();
}, 1);

Clazz.newMeth(C$, 'setSize$I', function (size) {
this.size=size;
});

Clazz.newMeth(C$, 'get$I', function (index) {
var fp=this.stream.offset$();
this.stream.seek$J(this.start + index * 8);
var value=this.stream.readLong$();
this.stream.seek$J(fp);
return value;
});

Clazz.newMeth(C$, 'size$', function () {
return this.size;
});

Clazz.newMeth(C$, 'close$', function () {
this.stream.close$();
this.stream=null;
this.size=0;
this.start=0;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:42 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
