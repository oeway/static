(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[[0,'swingjs.plaf.JSComponentUI','javax.swing.UIManager']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "JSToggleButtonUI", null, 'swingjs.plaf.JSButtonUI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getPropertyPrefix$', function () {
return "ToggleButton";
});

Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged$'], function (e) {
if ($I$(1).debugging) System.out.println$S(this.id + " stateChange " + this.dumpEvent$java_util_EventObject(e) );
var model=this.button.getModel$();
this.setBackgroundImpl$java_awt_Color(model.isArmed$() && model.isPressed$()  || model.isSelected$()  ? $I$(2).getColor$O(this.getPropertyPrefix$() + ".highlight") : this.getBackground$());
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:51:20 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
