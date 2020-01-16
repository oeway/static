(function(){var P$=Clazz.newPackage("org.scijava.input"),I$=[[0,'java.util.regex.Pattern','org.scijava.input.InputModifiers','org.scijava.input.KeyCode','org.scijava.util.PlatformUtils']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Accelerator");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['keyCode','org.scijava.input.KeyCode','modifiers','org.scijava.input.InputModifiers']]]

Clazz.newMeth(C$, 'c$$org_scijava_input_KeyCode$org_scijava_input_InputModifiers', function (keyCode, modifiers) {
;C$.$init$.apply(this);
this.keyCode=keyCode;
this.modifiers=modifiers;
}, 1);

Clazz.newMeth(C$, 'getKeyCode$', function () {
return this.keyCode;
});

Clazz.newMeth(C$, 'getModifiers$', function () {
return this.modifiers;
});

Clazz.newMeth(C$, 'equals$O', function (o) {
if (!(Clazz.instanceOf(o, "org.scijava.input.Accelerator"))) return false;
var acc=o;
if (!this.getModifiers$().equals$O(acc.getModifiers$())) return false;
if (!this.getKeyCode$().equals$O(acc.getKeyCode$())) return false;
return true;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.toString().hashCode$();
});

Clazz.newMeth(C$, 'toString', function () {
var modString=this.modifiers.toString();
var keyString=this.keyCode.name$();
if (modString.length$() == 0) return keyString;
return modString + " " + keyString ;
});

Clazz.newMeth(C$, 'create$S', function (acc) {
if (acc == null  || acc.isEmpty$() ) return null;
var a=acc.replaceAll$S$S($I$(1).quote$S("^"), C$.expandedCaret$());
var components=a.split$S(" ");
var alt=false;
var altGr=false;
var ctrl=false;
var meta=false;
var shift=false;
for (var i=0; i < components.length - 1; i++) {
if (components[i].equalsIgnoreCase$S("alt")) alt=true;
 else if (components[i].equalsIgnoreCase$S("altGr") || components[i].equalsIgnoreCase$S("altGraph") ) {
altGr=true;
} else if (components[i].equalsIgnoreCase$S("control") || components[i].equalsIgnoreCase$S("ctrl") ) {
ctrl=true;
} else if (components[i].equalsIgnoreCase$S("meta")) meta=true;
 else if (components[i].equalsIgnoreCase$S("shift")) shift=true;
}
var modifiers=Clazz.new_($I$(2,1).c$$Z$Z$Z$Z$Z$Z$Z$Z,[alt, altGr, ctrl, meta, shift, false, false, false]);
var code=components[components.length - 1].toUpperCase$();
var keyCode=$I$(3).get$S(code);
return Clazz.new_(C$.c$$org_scijava_input_KeyCode$org_scijava_input_InputModifiers,[keyCode, modifiers]);
}, 1);

Clazz.newMeth(C$, 'isCtrlReplacedWithMeta$', function () {
return $I$(4).isMac$();
}, 1);

Clazz.newMeth(C$, 'expandedCaret$', function () {
return C$.isCtrlReplacedWithMeta$() ? "meta " : "control ";
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:25 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
