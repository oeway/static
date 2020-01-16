(function(){var P$=Clazz.newPackage("org.scijava.input"),I$=[[0,'StringBuilder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "InputModifiers");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['altDown','altGrDown','ctrlDown','metaDown','shiftDown','leftButtonDown','middleButtonDown','rightButtonDown']]]

Clazz.newMeth(C$, 'c$$Z$Z$Z$Z$Z$Z$Z$Z', function (altDown, altGrDown, ctrlDown, metaDown, shiftDown, leftButtonDown, middleButtonDown, rightButtonDown) {
;C$.$init$.apply(this);
this.altDown=altDown;
this.altGrDown=altGrDown;
this.ctrlDown=ctrlDown;
this.metaDown=metaDown;
this.shiftDown=shiftDown;
this.leftButtonDown=leftButtonDown;
this.middleButtonDown=middleButtonDown;
this.rightButtonDown=rightButtonDown;
}, 1);

Clazz.newMeth(C$, 'isAltDown$', function () {
return this.altDown;
});

Clazz.newMeth(C$, 'isAltGrDown$', function () {
return this.altGrDown;
});

Clazz.newMeth(C$, 'isCtrlDown$', function () {
return this.ctrlDown;
});

Clazz.newMeth(C$, 'isMetaDown$', function () {
return this.metaDown;
});

Clazz.newMeth(C$, 'isShiftDown$', function () {
return this.shiftDown;
});

Clazz.newMeth(C$, 'isLeftButtonDown$', function () {
return this.leftButtonDown;
});

Clazz.newMeth(C$, 'isMiddleButtonDown$', function () {
return this.middleButtonDown;
});

Clazz.newMeth(C$, 'isRightButtonDown$', function () {
return this.rightButtonDown;
});

Clazz.newMeth(C$, 'equals$O', function (o) {
if (!(Clazz.instanceOf(o, "org.scijava.input.InputModifiers"))) return false;
var modifiers=o;
if (!this.isAltDown$() == modifiers.isAltDown$() ) return false;
if (!this.isAltGrDown$() == modifiers.isAltGrDown$() ) return false;
if (!this.isCtrlDown$() == modifiers.isCtrlDown$() ) return false;
if (!this.isMetaDown$() == modifiers.isMetaDown$() ) return false;
if (!this.isShiftDown$() == modifiers.isShiftDown$() ) return false;
if (!this.isLeftButtonDown$() == modifiers.isLeftButtonDown$() ) return false;
if (!this.isMiddleButtonDown$() == modifiers.isMiddleButtonDown$() ) return false;
if (!this.isRightButtonDown$() == modifiers.isRightButtonDown$() ) return false;
return true;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.toString().hashCode$();
});

Clazz.newMeth(C$, 'toString', function () {
var sb=Clazz.new_($I$(1,1));
if (this.altDown) sb.append$S(" alt");
if (this.altGrDown) sb.append$S(" altGraph");
if (this.ctrlDown) sb.append$S(" control");
if (this.metaDown) sb.append$S(" meta");
if (this.shiftDown) sb.append$S(" shift");
if (this.leftButtonDown) sb.append$S(" leftButton");
if (this.middleButtonDown) sb.append$S(" middleButton");
if (this.rightButtonDown) sb.append$S(" rightButton");
return sb.toString().trim$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:25 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
