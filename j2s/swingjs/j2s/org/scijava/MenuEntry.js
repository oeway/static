(function(){var P$=Clazz.newPackage("org.scijava"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "MenuEntry", null, null, 'org.scijava.Named');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.weight=Infinity;
}, 1);

C$.$fields$=[['C',['mnemonic'],'D',['weight'],'S',['name','iconPath'],'O',['accelerator','org.scijava.input.Accelerator']]]

Clazz.newMeth(C$, 'c$$S', function (name) {
;C$.$init$.apply(this);
this.setName$S(name);
}, 1);

Clazz.newMeth(C$, 'c$$S$D', function (name, weight) {
;C$.$init$.apply(this);
this.setName$S(name);
this.setWeight$D(weight);
}, 1);

Clazz.newMeth(C$, 'c$$S$D$C$org_scijava_input_Accelerator$S', function (name, weight, mnemonic, acc, iconPath) {
;C$.$init$.apply(this);
this.setName$S(name);
this.setWeight$D(weight);
this.setMnemonic$C(mnemonic);
this.setAccelerator$org_scijava_input_Accelerator(acc);
this.setIconPath$S(iconPath);
}, 1);

Clazz.newMeth(C$, 'setWeight$D', function (weight) {
this.weight=weight;
});

Clazz.newMeth(C$, 'getWeight$', function () {
return this.weight;
});

Clazz.newMeth(C$, 'setMnemonic$C', function (mnemonic) {
this.mnemonic=mnemonic;
});

Clazz.newMeth(C$, 'getMnemonic$', function () {
return this.mnemonic;
});

Clazz.newMeth(C$, 'setAccelerator$org_scijava_input_Accelerator', function (accelerator) {
this.accelerator=accelerator;
});

Clazz.newMeth(C$, 'getAccelerator$', function () {
return this.accelerator;
});

Clazz.newMeth(C$, 'setIconPath$S', function (iconPath) {
this.iconPath=iconPath;
});

Clazz.newMeth(C$, 'getIconPath$', function () {
return this.iconPath;
});

Clazz.newMeth(C$, 'assignProperties$org_scijava_MenuEntry', function (entry) {
if (this.name == null ) this.name=entry.getName$();
if (this.weight == Infinity ) this.weight=entry.getWeight$();
if (this.mnemonic == "\u0000") this.mnemonic=entry.getMnemonic$();
if (this.accelerator == null ) this.accelerator=entry.getAccelerator$();
if (this.iconPath == null ) this.iconPath=entry.getIconPath$();
});

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'setName$S', function (name) {
this.name=name;
});

Clazz.newMeth(C$, 'toString', function () {
return this.name;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:21 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
