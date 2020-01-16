(function(){var P$=Clazz.newPackage("io.scif"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "LocationInfo");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['usedToInitialize'],'S',['locationName'],'O',['reader','Class']]]

Clazz.newMeth(C$, 'toString', function () {
return "filename = " + this.locationName + "\nreader = " + this.reader.getName$() + "\nused to initialize = " + this.usedToInitialize ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:36 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
