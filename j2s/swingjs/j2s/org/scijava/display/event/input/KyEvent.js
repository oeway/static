(function(){var P$=Clazz.newPackage("org.scijava.display.event.input"),I$=[[0,'org.scijava.input.Accelerator']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "KyEvent", null, 'org.scijava.display.event.input.InputEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['C',['character'],'O',['code','org.scijava.input.KeyCode']]]

Clazz.newMeth(C$, 'c$$org_scijava_display_Display$org_scijava_input_InputModifiers$I$I$C$org_scijava_input_KeyCode', function (display, modifiers, x, y, character, code) {
;C$.superclazz.c$$org_scijava_display_Display$org_scijava_input_InputModifiers$I$I.apply(this,[display, modifiers, x, y]);C$.$init$.apply(this);
this.character=character;
this.code=code;
}, 1);

Clazz.newMeth(C$, 'getCharacter$', function () {
return this.character;
});

Clazz.newMeth(C$, 'getCode$', function () {
return this.code;
});

Clazz.newMeth(C$, 'getAccelerator$', function () {
return Clazz.new_($I$(1,1).c$$org_scijava_input_KeyCode$org_scijava_input_InputModifiers,[this.getCode$(), this.getModifiers$()]);
});

Clazz.newMeth(C$, 'toString', function () {
return C$.superclazz.prototype.toString.apply(this, []) + "\n\tcharacter = '" + this.character + "'\n\tcode = " + this.code + "\n\taccelerator = " + this.getAccelerator$() ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:24 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
