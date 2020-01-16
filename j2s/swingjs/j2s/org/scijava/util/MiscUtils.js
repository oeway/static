(function(){var P$=Clazz.newPackage("org.scijava.util"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "MiscUtils");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'compare$TT$TT', function (o1, o2) {
return C$.compare$TT$TT$Z(o1, o2, false);
}, 1);

Clazz.newMeth(C$, 'compare$TT$TT$Z', function (o1, o2, heavyNulls) {
if (o1 == null  && o2 == null  ) return 0;
if (o1 == null ) return heavyNulls ? 1 : -1;
if (o2 == null ) return heavyNulls ? -1 : 1;
return o1.compareTo$(o2);
}, 1);

Clazz.newMeth(C$, 'equal$O$O', function (o1, o2) {
return o1 == null  ? o2 == null  : o1.equals$O(o2);
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
