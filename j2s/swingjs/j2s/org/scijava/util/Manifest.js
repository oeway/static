(function(){var P$=Clazz.newPackage("org.scijava.util"),p$1={},I$=[[0,'java.util.Collections','java.io.File','java.net.URL']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Manifest", null, null, 'org.scijava.Versioned');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['manifest','java.util.jar.Manifest']]]

Clazz.newMeth(C$, 'c$$java_util_jar_Manifest', function (manifest) {
;C$.$init$.apply(this);
this.manifest=manifest;
}, 1);

Clazz.newMeth(C$, 'getArchiverVersion$', function () {
return this.get$S("Archiver-Version");
});

Clazz.newMeth(C$, 'getBuildJdk$', function () {
return this.get$S("Build-Jdk");
});

Clazz.newMeth(C$, 'getBuiltBy$', function () {
return this.get$S("Built-By");
});

Clazz.newMeth(C$, 'getCreatedBy$', function () {
return this.get$S("Created-By");
});

Clazz.newMeth(C$, 'getImplementationBuild$', function () {
return this.get$S("Implementation-Build");
});

Clazz.newMeth(C$, 'getImplementationDate$', function () {
return this.get$S("Implementation-Date");
});

Clazz.newMeth(C$, 'getImplementationTitle$', function () {
return this.get$S("Implementation-Title");
});

Clazz.newMeth(C$, 'getImplementationVendor$', function () {
return this.get$S("Implementation-Vendor");
});

Clazz.newMeth(C$, 'getImplementationVendorId$', function () {
return this.get$S("Implementation-Vendor-Id");
});

Clazz.newMeth(C$, 'getImplementationVersion$', function () {
return this.get$S("Implementation-Version");
});

Clazz.newMeth(C$, 'getManifestVersion$', function () {
return this.get$S("Manifest-Version");
});

Clazz.newMeth(C$, 'getPackage$', function () {
return this.get$S("Package");
});

Clazz.newMeth(C$, 'getSpecificationTitle$', function () {
return this.get$S("Specification-Title");
});

Clazz.newMeth(C$, 'getSpecificationVendor$', function () {
return this.get$S("Specification-Vendor");
});

Clazz.newMeth(C$, 'getSpecificationVersion$', function () {
return this.get$S("Specification-Version");
});

Clazz.newMeth(C$, 'get$S', function (key) {
if (this.manifest == null ) return null;
var mainAttrs=this.manifest.getMainAttributes$();
if (mainAttrs == null ) return null;
return mainAttrs.getValue$S(key);
});

Clazz.newMeth(C$, 'getAll$', function () {
if (this.manifest == null ) return null;
var mainAttrs=this.manifest.getMainAttributes$();
if (mainAttrs == null ) return null;
return $I$(1).unmodifiableMap$java_util_Map(mainAttrs);
});

Clazz.newMeth(C$, 'getManifest$Class', function (c) {
{

}
return null;
}, 1);

Clazz.newMeth(C$, 'getManifest$org_scijava_util_XML', function (xml) {
var path=xml.getPath$();
if (path == null  || !path.startsWith$S("file:") ) return null;
var dotJAR=path.indexOf$S(".jar!/");
return C$.getManifest$java_io_File(Clazz.new_($I$(2,1).c$$S,[path.substring$I$I(5, dotJAR + 4)]));
}, 1);

Clazz.newMeth(C$, 'getManifest$java_io_File', function (jarFile) {
if (!jarFile.exists$()) throw Clazz.new_(Clazz.load('java.io.FileNotFoundException'));
return C$.getManifest$java_net_URL(Clazz.new_($I$(3,1).c$$S,["jar:file:" + jarFile.getAbsolutePath$() + "!/" ]));
}, 1);

Clazz.newMeth(C$, 'getManifest$java_net_URL', function (jarURL) {
var conn=jarURL.openConnection$();
return Clazz.new_(C$.c$$java_util_jar_Manifest,[conn.getManifest$()]);
}, 1);

Clazz.newMeth(C$, 'getVersion$', function () {
var v=p$1.getBaseVersion.apply(this, []);
if (v == null  || !v.endsWith$S("-SNAPSHOT") ) return v;
var buildNumber=this.getImplementationBuild$();
return buildNumber == null  ? v : v + "-" + buildNumber ;
});

Clazz.newMeth(C$, 'getBaseVersion', function () {
var manifestVersion=this.getImplementationVersion$();
if (manifestVersion != null ) return manifestVersion;
return this.getSpecificationVersion$();
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
