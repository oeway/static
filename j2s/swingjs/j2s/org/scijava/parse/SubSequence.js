(function(){var P$=Clazz.newPackage("org.scijava.parse"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "SubSequence", null, null, 'CharSequence');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['offset','length'],'O',['seq','CharSequence']]]

Clazz.newMeth(C$, 'c$$CharSequence$I', function (seq, offset) {
C$.c$$CharSequence$I$I.apply(this, [seq, offset, seq.length$() - offset]);
}, 1);

Clazz.newMeth(C$, 'outOfBounds$S', function (message) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,[message]);
}, 1);

Clazz.newMeth(C$, 'c$$CharSequence$I$I', function (seq, offset, length) {
;C$.$init$.apply(this);
if (offset < 0) C$.outOfBounds$S("Offset " + offset + " < 0" );
if (offset > seq.length$()) {
C$.outOfBounds$S("Offset " + offset + " > " + seq.length$() );
}if (length < 0) C$.outOfBounds$S("Length " + length + " < 0" );
if (offset + length > seq.length$()) {
C$.outOfBounds$S("Offset " + offset + " + length " + length + " > " + seq.length$() );
}this.seq=seq;
this.offset=offset;
this.length=length;
}, 1);

Clazz.newMeth(C$, 'length$', function () {
return this.length;
});

Clazz.newMeth(C$, 'charAt$I', function (index) {
return this.seq.charAt$I(this.offset + index);
});

Clazz.newMeth(C$, 'subSequence$I$I', function (start, end) {
return Clazz.new_(C$.c$$CharSequence$I$I,[this.seq, this.offset + start, end - start]);
});

Clazz.newMeth(C$, 'toString', function () {
return this.seq.subSequence$I$I(this.offset, this.offset + this.length).toString();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:21 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
