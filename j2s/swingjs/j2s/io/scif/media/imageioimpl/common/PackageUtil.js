(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.common"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "PackageUtil");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.version="1.0";
C$.vendor="Sun Microsystems, Inc.";
C$.specTitle="Java Advanced Imaging Image I/O Tools";
{
try {
var thisClass=Clazz.forName("io.scif.media.imageioimpl.common.PackageUtil");
var thisPackage=thisClass.getPackage$();
C$.version=thisPackage.getImplementationVersion$();
C$.vendor=thisPackage.getImplementationVendor$();
C$.specTitle=thisPackage.getSpecificationTitle$();
} catch (e) {
if (Clazz.exceptionOf(e,"ClassNotFoundException")){
} else {
throw e;
}
}
if (C$.vendor == null ) C$.vendor="";
if (C$.version == null ) C$.version="";
};
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['S',['version','vendor','specTitle']]]

Clazz.newMeth(C$, 'getVersion$', function () {
return C$.version;
}, 1);

Clazz.newMeth(C$, 'getVendor$', function () {
return C$.vendor;
}, 1);

Clazz.newMeth(C$, 'getSpecificationTitle$', function () {
return C$.specTitle;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:18 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
