(function(){var P$=Clazz.newPackage("org.scijava.platform"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "Platform", null, null, ['org.scijava.plugin.SingletonPlugin', 'org.scijava.Disposable']);

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'javaVendor$', function () {
return null;
});

Clazz.newMeth(C$, 'javaVersion$', function () {
return null;
});

Clazz.newMeth(C$, 'osArch$', function () {
return null;
});

Clazz.newMeth(C$, 'osName$', function () {
return null;
});

Clazz.newMeth(C$, 'osVersion$', function () {
return null;
});

Clazz.newMeth(C$, 'isTarget$', function () {
if (this.javaVendor$() != null ) {
var javaVendor=System.getProperty$S("java.vendor");
if (!javaVendor.matches$S(".*" + this.javaVendor$() + ".*" )) return false;
}if (this.javaVersion$() != null ) {
var javaVersion=System.getProperty$S("java.version");
if (javaVersion.compareTo$S(this.javaVersion$()) < 0) return false;
}if (this.osName$() != null ) {
var osName=System.getProperty$S("os.name");
if (!osName.matches$S(".*" + this.osName$() + ".*" )) return false;
}if (this.osArch$() != null ) {
var osArch=System.getProperty$S("os.arch");
if (!osArch.matches$S(".*" + this.osArch$() + ".*" )) return false;
}if (this.osVersion$() != null ) {
var osVersion=System.getProperty$S("os.version");
if (osVersion.compareTo$S(this.osVersion$()) < 0) return false;
}return true;
});

Clazz.newMeth(C$, 'registerAppMenus$O', function (menus) {
return false;
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:28 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
