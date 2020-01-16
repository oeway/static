(function(){var P$=Clazz.newPackage("org.scijava.io.location"),I$=[[0,'java.util.Objects']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractLocation", null, null, 'org.scijava.io.location.Location');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'hashCode$', function () {
var prime=31;
var result=1;
result=31 * result + ((this.getURI$() == null ) ? 0 : this.getURI$().hashCode$());
return result;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (obj === this ) return true;
if (obj == null ) return false;
if (this.getClass$() !== obj.getClass$() ) return false;
var other=obj;
return $I$(1).equals$O$O(this.getURI$(), other.getURI$());
});

Clazz.newMeth(C$, 'toString', function () {
var prefix=this.getClass$().getSimpleName$() + ":";
var uri=this.getURI$();
if (uri != null ) return prefix + uri;
var name=this.getName$();
if (name != null ) return prefix + name;
return prefix + this.defaultName$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:26 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
