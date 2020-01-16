(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.image"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DataBlk");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['progressive'],'I',['ulx','uly','w','h','offset','scanw']]]

Clazz.newMeth(C$, 'getSize$I', function (type) {
switch (type) {
case 0:
return 8;
case 1:
return 16;
case 3:
case 4:
return 32;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}
}, 1);

Clazz.newMeth(C$, 'toString', function () {
var typeString="";
switch (this.getDataType$()) {
case 0:
typeString="Unsigned Byte";
break;
case 1:
typeString="Short";
break;
case 3:
typeString="Integer";
break;
case 4:
typeString="Float";
break;
}
return "DataBlk: upper-left(" + this.ulx + "," + this.uly + "), width= " + this.w + ", height= " + this.h + ", progressive= " + this.progressive + ", offset= " + this.offset + ", scanw= " + this.scanw + ", type= " + typeString ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:16 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
