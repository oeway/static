(function(){var P$=Clazz.newPackage("org.ejml.data"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Complex64F", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['D',['real','imaginary']]]

Clazz.newMeth(C$, 'c$$D$D', function (real, imaginary) {
;C$.$init$.apply(this);
this.real=real;
this.imaginary=imaginary;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getReal$', function () {
return this.real;
});

Clazz.newMeth(C$, 'getMagnitude$', function () {
return Math.sqrt(this.real * this.real + this.imaginary * this.imaginary);
});

Clazz.newMeth(C$, 'getMagnitude2$', function () {
return this.real * this.real + this.imaginary * this.imaginary;
});

Clazz.newMeth(C$, 'setReal$D', function (real) {
this.real=real;
});

Clazz.newMeth(C$, 'getImaginary$', function () {
return this.imaginary;
});

Clazz.newMeth(C$, 'setImaginary$D', function (imaginary) {
this.imaginary=imaginary;
});

Clazz.newMeth(C$, 'set$D$D', function (real, imaginary) {
this.real=real;
this.imaginary=imaginary;
});

Clazz.newMeth(C$, 'isReal$', function () {
return this.imaginary == 0.0 ;
});

Clazz.newMeth(C$, 'toString', function () {
if (this.imaginary == 0 ) {
return "" + new Double(this.real).toString();
} else {
return new Double(this.real).toString() + " " + new Double(this.imaginary).toString() + "i" ;
}});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:31 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
