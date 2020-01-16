(function(){var P$=Clazz.newPackage("org.scijava.util"),p$1={},I$=[[0,'javax.sound.sampled.AudioFormat','javax.sound.sampled.AudioSystem','java.util.Arrays']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TunePlayer");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.buf=Clazz.array(Byte.TYPE, [0]);
this.noteLength=1;
this.tempo=60;
this.octave=4;
}, 1);

C$.$fields$=[['I',['sampleRate','noteLength','tempo','octave'],'O',['buf','byte[]']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$I.apply(this, [16000]);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (sampleRate) {
;C$.$init$.apply(this);
this.sampleRate=sampleRate;
}, 1);

Clazz.newMeth(C$, 'getSampleRate$', function () {
return this.sampleRate;
});

Clazz.newMeth(C$, 'getNoteLength$', function () {
return this.noteLength;
});

Clazz.newMeth(C$, 'getTempo$', function () {
return this.tempo;
});

Clazz.newMeth(C$, 'getOctave$', function () {
return this.octave;
});

Clazz.newMeth(C$, 'getTone$I$C', function (step, mod) {
var tone=12 * (this.getOctave$() - 4) + step;
if (mod == "#" || mod == "+" ) tone++;
if (mod == "-") tone--;
return tone;
});

Clazz.newMeth(C$, 'getMillis$', function () {
return this.toMillis$I(this.getNoteLength$());
});

Clazz.newMeth(C$, 'toMillis$I', function (noteLen) {
return (240000/(noteLen * this.getTempo$())|0);
});

Clazz.newMeth(C$, 'setNoteLength$I', function (noteLength) {
this.noteLength=noteLength;
});

Clazz.newMeth(C$, 'setTempo$I', function (tempo) {
this.tempo=tempo;
});

Clazz.newMeth(C$, 'setOctave$I', function (octave) {
this.octave=octave;
});

Clazz.newMeth(C$, 'downOctave$', function () {
this.octave--;
});

Clazz.newMeth(C$, 'upOctave$', function () {
this.octave++;
});

Clazz.newMeth(C$, 'openLine$', function () {
var af=Clazz.new_($I$(1,1).c$$F$I$I$Z$Z,[this.sampleRate, 8, 1, true, true]);
var line=$I$(2).getSourceDataLine$javax_sound_sampled_AudioFormat(af);
line.open$javax_sound_sampled_AudioFormat$I(af, this.sampleRate);
line.start$();
return line;
});

Clazz.newMeth(C$, 'closeLine$javax_sound_sampled_SourceDataLine', function (line) {
line.drain$();
line.close$();
});

Clazz.newMeth(C$, 'play$S', function (commandString) {
var line;
try {
line=this.openLine$();
} catch (e) {
if (Clazz.exceptionOf(e,"javax.sound.sampled.LineUnavailableException")){
return false;
} else {
throw e;
}
}
var tokens=commandString.toUpperCase$().split$S(" ");
for (var token, $token = 0, $$token = tokens; $token<$$token.length&&((token=($$token[$token])),1);$token++) {
var command=token.charAt$I(0);
var arg=token.substring$I(1);
var mod=token.length$() > 1 ? token.charAt$I(1) : "\u0000";
switch (command.$c()) {
case 60:
this.downOctave$();
break;
case 62:
this.upOctave$();
break;
case 65:
p$1.play$javax_sound_sampled_SourceDataLine$Integer.apply(this, [line, new Integer(this.getTone$I$C(9, mod))]);
break;
case 66:
p$1.play$javax_sound_sampled_SourceDataLine$Integer.apply(this, [line, new Integer(this.getTone$I$C(11, mod))]);
break;
case 67:
p$1.play$javax_sound_sampled_SourceDataLine$Integer.apply(this, [line, new Integer(this.getTone$I$C(0, mod))]);
break;
case 68:
p$1.play$javax_sound_sampled_SourceDataLine$Integer.apply(this, [line, new Integer(this.getTone$I$C(2, mod))]);
break;
case 69:
p$1.play$javax_sound_sampled_SourceDataLine$Integer.apply(this, [line, new Integer(this.getTone$I$C(4, mod))]);
break;
case 70:
p$1.play$javax_sound_sampled_SourceDataLine$Integer.apply(this, [line, new Integer(this.getTone$I$C(5, mod))]);
break;
case 71:
p$1.play$javax_sound_sampled_SourceDataLine$Integer.apply(this, [line, new Integer(this.getTone$I$C(7, mod))]);
break;
case 76:
this.setNoteLength$I(Integer.parseInt$S(arg));
break;
case 77:
break;
case 78:
var note=Integer.parseInt$S(arg);
if (note == 0) p$1.play$javax_sound_sampled_SourceDataLine$Integer.apply(this, [line, null]);
 else p$1.play$javax_sound_sampled_SourceDataLine$Integer.apply(this, [line, new Integer(note - 48)]);
break;
case 79:
this.setOctave$I(Integer.parseInt$S(arg));
break;
case 80:
var len;
try {
len=Integer.parseInt$S(arg);
} catch (exc) {
if (Clazz.exceptionOf(exc,"NumberFormatException")){
len=this.noteLength;
} else {
throw exc;
}
}
p$1.play$javax_sound_sampled_SourceDataLine$Integer$I.apply(this, [line, null, this.toMillis$I(len)]);
break;
case 84:
this.setTempo$I(Integer.parseInt$S(arg));
break;
default:
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Unknown command: " + command]);
}
}
this.closeLine$javax_sound_sampled_SourceDataLine(line);
return true;
});

Clazz.newMeth(C$, 'play$javax_sound_sampled_SourceDataLine$Integer', function (line, tone) {
p$1.play$javax_sound_sampled_SourceDataLine$Integer$I.apply(this, [line, tone, this.getMillis$()]);
}, p$1);

Clazz.newMeth(C$, 'play$javax_sound_sampled_SourceDataLine$Integer$I', function (line, tone, ms) {
var length=p$1.fill$Integer$I.apply(this, [tone, ms]);
var count=0;
while (count < length){
var r=line.write$BA$I$I(this.buf, count, length - count);
if (r <= 0) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Could not write to line"]);
count+=r;
}
}, p$1);

Clazz.newMeth(C$, 'fill$Integer$I', function (tone, ms) {
var length=(this.sampleRate * ms/1000|0);
if (length > this.buf.length) {
this.buf=Clazz.array(Byte.TYPE, [length]);
}if (tone == null ) {
$I$(3).fill$BA$I$I$B(this.buf, 0, length, ($b$[0] = 0, $b$[0]));
} else {
var exp=((tone).valueOf() - 1) / 12.0;
var f=440.0 * Math.pow(2.0, exp);
for (var i=0; i < length; i++) {
var period=this.sampleRate / f;
var angle=2 * 3.141592653589793 * i  / period;
this.buf[i]=(((127 * Math.sin(angle))|0)|0);
}
}return length;
}, p$1);
var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
