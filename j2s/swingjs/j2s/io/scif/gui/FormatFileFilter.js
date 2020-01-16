(function(){var P$=Clazz.newPackage("io.scif.gui"),I$=[[0,'StringBuilder','org.scijava.io.location.FileLocation','io.scif.config.SCIFIOConfig']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "FormatFileFilter", null, 'javax.swing.filechooser.FileFilter', ['java.io.FileFilter', 'Comparable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['desc'],'O',['format','io.scif.Format']]]

Clazz.newMeth(C$, 'c$$io_scif_Format', function (format) {
Clazz.super_(C$, this);
this.format=format;
var sb=Clazz.new_($I$(1,1).c$$S,[format.getFormatName$()]);
var first=true;
for (var suffix, $suffix = 0, $$suffix = format.getSuffixes$(); $suffix<$$suffix.length&&((suffix=($$suffix[$suffix])),1);$suffix++) {
if (suffix == null  || suffix.equals$O("") ) continue;
if (first) {
sb.append$S(" (");
first=false;
} else sb.append$S(", ");
sb.append$S("*.");
sb.append$S(suffix);
}
sb.append$S(")");
this.desc=sb.toString();
}, 1);

Clazz.newMeth(C$, 'getFormat$', function () {
return this.format;
});

Clazz.newMeth(C$, ['accept$java_io_File','accept$'], function (f) {
if (f.isDirectory$()) return true;
try {
return this.format.createChecker$().isFormat$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(Clazz.new_($I$(2,1).c$$java_io_File,[f]), Clazz.new_($I$(3,1)).checkerSetOpen$Z(false));
} catch (e) {
if (Clazz.exceptionOf(e,"io.scif.FormatException")){
return false;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getDescription$', function () {
return this.desc;
});

Clazz.newMeth(C$, 'toString', function () {
return "FormatFileFilter: " + this.desc;
});

Clazz.newMeth(C$, ['compareTo$javax_swing_filechooser_FileFilter','compareTo$','compareTo$TT'], function (o) {
return this.desc.compareTo$S(o.getDescription$());
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:42 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
