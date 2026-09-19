# The Bounded Moment: How Long a Knowing Has to Last

You may be wondering what a question about arithmetic is doing on a site devoted to Yoga, Vedanta and contemplative wellbeing. The answer is the same one that has run through this series from the beginning: the contemplative traditions and the modern sciences often describe the same structures in two different languages, and when the languages are lined up carefully, each one occasionally tells you something the other had not noticed.

This essay is about a question that is easy to ask and, until recently, we had not asked. Everything in the three essays before this one described a moment of experience: what it is made of, how its two halves meet, how it comes to be recorded and recalled. But not one of them asked how long that moment has to last. A moment of experience is not an eternal thing. It begins, it lasts a while, and it passes. It turns out that this single fact, that experience comes in episodes with edges, has a consequence that can be calculated, and the consequence bears directly on something many people have wondered about their own practice.

The short version is this. A moment of knowing has two poles, what is known and the one who knows it, and there is a gap between them. Close that gap and the sense of separation goes quiet. But if the moment is too brief, the gap cannot be seen from inside it at all, whether it has closed or not. There is a floor, and the floor has a number. What follows works out where the number comes from, and then asks, gently, what it means for a brief taste of stillness.

Before reading on, spend a few minutes with the presentation below. Two moments in it are worth touching directly. On the slide called **The Threshold**, drag the single slider slowly to the left and watch the two peaks in the picture move together and merge into one: that merging is the whole argument in a single gesture. On **The Windowed Beat**, the two sliders let you set how long the moment lasts and how wide its inner gap is, independently, and the readout underneath tells you what it costs. The essay below the presentation then gives the history, the mechanism and the caveats that fifteen slides cannot hold.

*[Embed the-bounded-moment.html here]*

## Where the first three essays left us

Three pieces of the picture are already in place, and this essay leans on all three. If you have read them, this section is a reminder. If you have not, it is enough to go on with.

*The Whole Message* introduced Dennis Gabor and the law he proved in 1946. A signal can be described in two complete ways, as something unfolding in time and as a recipe of steady tones, and Gabor showed that you can never have both descriptions perfectly sharp at once. Strike a piano key for a split second and you get a definite *when* but a thud of blurred pitch. Hold the key and the pitch becomes definite while the *when* smears out. The spread in time, written **Δt**, and the spread in frequency, written **Δf**, have a product that can never fall below a fixed floor of 1/4π. He also found the one shape that sits exactly on that floor, wasting nothing: a pure tone inside a smooth bell-shaped envelope, which he called a **logon**.

*The Settling Mind* took the picture into the mind. Every moment of experience, on the model this course works with, arises from two waves meeting: the object-wave, which is what is actually present, and the attention-wave, which is the state you bring to it. The two add together, and their sum has a hidden anatomy. There is a fast **carrier** at the average of the two frequencies, which carries the content of the moment, and a slow **envelope** governed by the gap between them, which carries the felt quality of the engagement. That whole resultant is what the Yoga tradition calls a **vṛtti**, a wave or turning of the mind. When the gap is wide the envelope flutters and experience feels rough and effortful. When the gap closes the envelope goes flat, the flutter stops, and one steady wave remains.

*The Light and the Field* asked how any of this comes to be kept. A photograph records only how bright each point is and throws away **phase**, the timing of the wave's crests, which is where depth lives. Gabor's answer, a year after the limit, was to let the wave from an object interfere with a clean reference wave and record the pattern they make together. That pattern holds the phase, and shining the reference wave back through it brings the original wavefront back to life. Read across, attention plays the part of the reference beam. Nothing is recorded by the object alone; the meeting is what makes a record. That reading is a **structural model**, a bridge this course draws rather than a finding of physics, and it will be marked as such wherever it matters.

So we have the anatomy of a moment, the two poles that make it, and an account of how it gets recorded. What we have not asked is what it costs that moment to be a moment.

## Two objects that look alike

Two objects have been doing the work so far, and there is a confusion between them that this series carried for a while and has now corrected. Correcting it is what makes the rest of this essay possible, so it is worth being plain about.

The first object is Gabor's logon: a tone inside a bell. The second is the beat of two tones: two steady frequencies added together, which as we saw also produces a carrier inside an envelope. They have the same silhouette. It is natural to treat them as the same thing, and earlier material in this series did exactly that.

They are not the same thing, and they differ on precisely the property Gabor's paper was about. The logon is **bounded**: it fades in, it fades out, it occupies a patch of time and a patch of frequency, and it is as compact as anything can be. The two-tone beat, taken strictly as written, is **unbounded**: it is a pattern that has always been sounding and always will, with no beginning and no end. Its spectrum is not a localised bump but two infinitely sharp lines, one at each of the two original frequencies. On localisation in time, the two objects are not similar. They are opposites.

Once they are separated, each turns out to have been doing a different and necessary job. The beat models the **relational** anatomy of a moment: that it has two poles, that there is a gap between them, that there is a phase between them, and that the story of practice is the story of that gap closing. The logon models the **episodic** anatomy: that a moment is bounded, that it has a duration and a bandwidth, and that it pays a price for being bounded at all. The beat shows what a vṛtti is made of. The logon shows that a vṛtti is an event.

That separation is exact mathematics, not interpretation, and it is worth having for its own sake. It also leaves an obvious question hanging, and the question is the hinge of everything that follows.

## The beat that never begins and never ends

Here is the difficulty. If the beat never starts and never stops, and a moment of experience plainly does both, then the beat cannot be the whole story of a vṛtti.

A vṛtti arises, lasts, and passes. That is not a detail to be tidied away; it is one of the first things the tradition says about it. Vivekananda's image is of a lake whose surface carries waves, and a wave is only the water taking a shape for a while before the water settles again. Patañjali's whole enterprise begins from the fact that these waves come and go. Whatever else a moment of knowing is, it is an episode.

So a real vṛtti carries **both** anatomies at once. It has two poles, and it has edges in time. Handing the relation to one object and the boundedness to another was a convenience of teaching, and the convenience hid a question that neither object could pose on its own:

What has to be true of a moment for the gap between knower and known to be present in it at all?

That question has an answer, and the answer is a number.

## What a real moment has to be

The fix is straightforward once you see it. Take the beat and hold it inside a bounded window, where the window is the arising and passing of the episode itself. A convenient shape for that window is the same smooth bell Gabor used, which rises, peaks and fades:

R(t) = w(t) · [ A cos(2πf_s t) + A cos(2πf_m t) ]

Here the bracket is the two waves meeting, exactly as in *The Settling Mind*, and w(t) is the episode's own envelope, fading in and fading out, with a width we will call **T**.

Something quietly satisfying happens here. Because adding and then windowing is the same as windowing and then adding, this object is identically **a pair of logons sharing one window**. The two descriptions this series has been using all along, the beat and the logon, turn out to be one object with two dials rather than two rival pictures. The beat is what you get when you let the window run forever. A single logon is what you get when you close the gap to nothing. Everything in between, which is to say every actual moment of experience, is the general case that has been sitting between them the whole time.

If you have the presentation open, the slide called **The Windowed Beat** is this object. The dashed bell is the episode, when it starts and when it fades. The solid line inside it is the beat. Shorten the window and you can watch how little of the beat is left to happen.

## What bounding does to the spectrum

Now the part that produces the number. It rests on one standard result, and the result is the same fact as the piano key from the first essay, stated slightly more generally.

Confining a signal in time smears its frequency content, and the tighter the confinement the wider the smear. A note held for a long time has a sharp, definite pitch. The same note clipped to a few thousandths of a second has almost no pitch at all; its energy is spread across a wide band. Duration and spectral sharpness trade against each other, always.

Apply that to our windowed beat. Before the window, the spectrum was two infinitely sharp lines, one at each frequency. After the window, each line widens into a lump, and the width of each lump is about **1/T**, set by how long the episode ran. A long moment gives two narrow lumps. A brief moment gives two broad ones.

So the spectrum of a real vṛtti is neither of the pictures we started with. Not two sharp lines, which required eternity. Not a single bump, which required a single tone. Two lumps of finite width, each one blurred by exactly as much as the moment was short.

It is worth saying that this is not a marginal piece of mathematics dusted off for the occasion. Gabor's bounded packet turned out to be the direct ancestor of **wavelet analysis**, the standard modern method for looking at a signal in time and frequency together, which is now used in everything from audio compression to the study of nested brain rhythms. And when neuroscientists went looking for what the early visual system actually computes, the receptive fields they found in the primary visual cortex are well modelled by Gabor functions: bounded packets, oriented and localised, rather than pure endless waves. That is an established finding, not a bridge this course is drawing. The front end of at least one of our senses appears to be built out of the very objects this essay is about, which is a reason to think the constraint on bounded packets is a constraint on something real rather than an artefact of how we choose to do the sums.

This is also where a result from the earlier essays becomes something more than a pleasing coincidence. If a narrow line requires a long unbroken duration, then continuity and purity are not two separate virtues that happen to travel together in contemplative instruction. They are one property seen from two sides. **Dhyāna**, meditation proper, is defined in the tradition by its unbrokenness, the uninterrupted flow of attention on one object. **Samādhi**, the state it opens onto, is described by its purity, the object alone shining without the mind's own form colouring the presentation. The mathematics says those are the same thing: duration is the currency in which clarity is bought, and the exchange rate is fixed. That much is **established**, and needs no contemplative premise to state.

## The threshold: T · Δf greater than 1/π

Two lumps are two only if their separation beats their width. That single sentence, applied to a bounded moment, is the result of this essay.

The separation between the two lumps is the gap, Δf, the distance between the object's rhythm and the mind's. The width of each lump is about 1/T, set by the length of the episode. If the gap is comfortably larger than the width, the spectrum shows two distinct peaks, and the two poles are present in the moment as two. If the gap is smaller than the width, the lumps overlap so thoroughly that the spectrum has only one peak, and nothing inside that moment can distinguish two poles from one.

For the bell-shaped window the crossover point is exact rather than approximate. The spectrum has two peaks precisely when

π · T · Δf > 1, that is, T · Δf > 1/π, about 0.318

In plain terms: the episode has to run for roughly one beat cycle before the gap between knower and known appears in it at all. Less than that, and the difference is there in the signal but not in the moment.

The figures below are computed directly from the signal rather than from any approximation, and were cross-checked in two independent implementations. The last column gives the moment's time-bandwidth product as a multiple of Gabor's floor, so a value of 1.00 means the moment is sitting exactly on the minimum, as economical as a bounded episode can possibly be.

| T · Δf | The two poles | Δt · Δf, as a multiple of 1/4π |
| --- | --- | --- |
| 0 | identical | 1.00 |
| 0.25 | merged | 1.01 |
| 0.31 | merged | 1.06 |
| 0.33 | separable | 1.09 |
| 0.50 | separable | 1.85 |
| 1.00 | separable | 4.55 |
| 2.00 | separable | 8.94 |

Two things in this table are worth pausing on. The crossover falls exactly where 1/π predicts, between 0.31 and 0.33, which is a good sign that the reasoning is sound rather than merely appealing. And the merged region is not a region of *almost no* duality. At T · Δf of 0.25 there is a real gap present in the signal, with two genuinely different frequencies, and the moment is still within one percent of the floor, which is to say indistinguishable from a single pure packet by any measurement made inside it.

Two honest conditions come with the constant. The value 1/π is exact for the bell-shaped window and for the criterion that the spectrum have two peaks rather than one. A different shape of arising and passing moves the constant, though not its order of magnitude. And a stricter criterion, requiring a clearly visible dip rather than any dip at all, raises the threshold to about 0.45. The safe way to say it in conversation is that the episode must last of order one beat, and to give the number with its two conditions attached.

### What that costs in seconds

The threshold can be turned around to say how long a moment must last, and this is where it stops being abstract. Rearranged, it says the episode must satisfy T greater than 1 divided by π times the gap. So the finer the gap you are trying to resolve, the longer the unbroken stretch you need, in strict inverse proportion.

The figures in the table below read the gap in cycles per second purely to make the proportion concrete. The frequencies in this model are in the course's own illustrative units, not in hertz, and nothing here claims that a thought has a measurable pitch. Read the column as a ratio rather than as a clinical measurement.

| If the gap were | The episode must last at least |
| --- | --- |
| 2 cycles per second | 0.16 seconds |
| 1 | 0.32 seconds |
| 0.5 | 0.64 seconds |
| 0.2 | 1.6 seconds |
| 0.1 | 3.2 seconds |
| 0.05 | 6.4 seconds |
| 0.01 | 32 seconds |

The shape of that column is the point. Halve the gap and you double the time required. Take the gap down by a factor of ten and you need ten times as long, unbroken, before the remaining difference is present in the moment at all. Coarse differences are cheap to see and they announce themselves instantly. Fine ones are expensive in a way that no amount of effort can discount, because the only thing that buys them is duration.

Anyone who has sat for any length of time will recognise the shape of that even without the arithmetic. The first coarse layer of restlessness is obvious within seconds. What remains after twenty minutes is subtler, and it takes longer stretches of unbroken sitting even to notice, let alone to settle. That is not a failure of concentration. It is the exchange rate.

## The piano tuner near unison

If that felt abstract, here is the same law in a craft that predates the mathematics by centuries.

A piano tuner strikes a tuning fork and a string together and listens, not to either tone, but to the beat between them. When the string is far from pitch the beat is a rapid flutter, easy to hear in an instant. As she brings the string closer the beat slows to a swell, and here is the crucial part: the closer she gets, the longer she must let the note ring before the remaining error is audible at all. At near unison the beat period grows without limit, and there is nothing to do but wait. A brief staccato note near unison does not make the remaining error hard to hear. It makes in-tune and slightly-out **indistinguishable**. The error is there in the strings, and the note was too short to contain it.

Every tuner already works by the threshold in the previous section, without calling it that. The finer the remaining difference, the longer the unbroken stretch of sound needed to reveal it. No amount of listening harder substitutes for letting the note ring.

The ear itself turns out to have its own version of the same floor, which is a nice piece of corroboration from a different direction. When two pure tones are very close in frequency, the ear does not hear two tones; it hears one tone whose loudness fluctuates, which is the beat. Widen the separation and the fluctuation coarsens into a sensation of roughness. Widen it further and, at a separation known as the [critical bandwidth](https://www.sfu.ca/sonic-studio-webdav/cmns/Handbook5/handbook/Critical_Band.html), the two finally come apart and are heard as two distinct pitches. At a centre frequency around 400 Hz that crossing happens at a separation of roughly 110 Hz, and the audible range divides into about two dozen such bands, each roughly a third of an octave wide. Below the critical bandwidth the two frequencies excite the same patch of the inner ear, and no attention paid to the sound will pull them apart.

The classic study behind that progression is Plomp and Levelt's paper on tonal consonance, which tied the sensations of roughness and dissonance to whether two tones fall inside one critical band (R. Plomp and W. J. M. Levelt, "Tonal Consonance and Critical Bandwidth," *Journal of the Acoustical Society of America*, volume 38, page 548, 1965). It is one of those results that quietly explains a great deal about why music is built the way it is.

So there are two different resolution limits here, set by two different things, and they have the same shape. The ear's limit is set by the width of its filters. The limit in this essay is set by the length of the episode. In both cases, below the threshold, two-ness is simply not available to the system that is looking. That the two limits rhyme is not an argument for anything. It is a reason to take the shape of the constraint seriously.

## Not a limit of measurement

A distinction needs making here, because the result is easy to hear as something weaker than it is.

One might read all of this as a statement about instruments: that a brief moment contains a difference, and we simply lack the means to detect it. That would be an ordinary and rather dull claim about the limits of observation. It is not the claim.

What the mathematics says is that the information is not there to be had. A signal confined to a short window does not possess a sharp frequency that we are failing to read; a frequency is a rate, and a rate that has not had time to repeat is not yet a rate. In the same way, two poles closer together than the width their brevity forces on them do not constitute two resolvable poles that we are too coarse to separate. Within that episode, there is no fact of the matter about their two-ness. The difference exists in the situation, in the two rhythms that were brought together. It does not exist *in that moment* as something the moment contains.

Gabor's original limit has exactly this character, which is why it is sometimes confused with Heisenberg's. Both say that certain pairs of properties cannot be jointly sharp, and in both cases the honest reading is not that the properties are secretly definite behind a veil of clumsy measurement. For a signal, at least, the reason is plain and requires no metaphysics: a wave packet does not have a single frequency, in the way that a chord does not have a single pitch. Asking which one it is misunderstands the object.

This matters for the contemplative application, and it is the reason the result is worth an essay rather than a footnote. If the claim were merely about the limits of introspection, the natural response would be to introspect more carefully. Because the claim is about what the moment contains, the natural response is different: let the moment be longer. There is nothing to look harder at.

## What a glimpse cannot tell you

Now the part that matters for practice, and it needs to be said carefully, because it can be heard as either more or less than it is.

Many people have had a brief moment in which the ordinary sense of separation thins out. It might come in meditation, or in music, or in grief, or on a hillside at dusk. It is usually short, and it usually leaves a question behind it: was that it? Was that the thing the traditions talk about?

The threshold gives an answer that is neither dismissive nor credulous. In a moment too brief to hold the gap, a real gap and a closed gap look exactly the same. So the absence of a felt difference in a brief episode is not evidence that the difference has gone. It may be evidence only that the episode was short. A glimpse, by its nature, cannot certify itself.

It is worth being precise about what this does and does not say. It does not say the experience was worthless, or imagined, or that nothing happened. Something did happen, and it is worth attending to and worth returning to. It does not say that only long experiences are real. What it says is narrower and more useful: a brief moment does not carry enough information to settle the question of its own depth, and the only thing that can tell a small gap from a closed one is a longer stretch of unbroken attention.

It is worth working one case through, because the arithmetic is unexpectedly concrete. Suppose the thinning lasted two seconds of genuinely unbroken attention, which is a fair description of many such moments. Two seconds, by the table above, can resolve a gap down to about 0.16 in our illustrative units, and no finer. So what the episode establishes is that the remaining gap was smaller than 0.16. It establishes nothing whatever about whether the gap was 0.1, or 0.01, or zero, because all three look identical from inside a window that short. The glimpse was real, and it carried real information: the gap had narrowed past a certain point, which is not nothing. What it could not carry, even in principle, is the difference between narrow and closed.

That is worth sitting with, because it reframes the usual anxiety. The person who had the two-second experience and wonders whether it was samādhi is not asking a question about their own sincerity or their capacity for self-deception. They are asking a question that two seconds cannot answer, in the way that a staccato note cannot answer whether a string is in tune.

There is a certain relief in this, I think. The question "was that it?" is one that no amount of introspection about the moment itself can answer, and the mathematics explains why the introspection was never going to work. The question is not answered by scrutinising the glimpse harder. It is answered, if at all, by sitting again tomorrow.

This also throws light on something the traditions do that can look excessively cautious from the outside. They treat reports of attainment with great care, they ask for continuity rather than intensity, and they tend to say that the states which arrive suddenly and depart suddenly are not the ones to build on. That caution is usually explained in terms of self-deception, and no doubt self-deception is real. But there is a structural reason underneath it that has nothing to do with anyone's honesty. A brief episode cannot resolve a fine difference. The instruction to keep going is not a moral test. It is what the resolution floor requires. That reading of the tradition's caution is a **structural model**, offered as a bridge, but the floor underneath it is established mathematics.

## Why the stages are ordered as they are

Read the threshold from the other side and it says something about the architecture of practice.

The classical sequence has three stages. **Dhāraṇā** is holding attention on one object at all, gathering it from its ordinary scatter. **Dhyāna** is sustaining that hold unbroken, in a continuous flow rather than a series of grabs. **Samādhi** is the state in which the gap itself closes and, as Patañjali puts it, the mind becomes as if empty of its own form and the object alone shines.

These are usually presented as three depths of the same activity, which they are. The threshold suggests they are also something more specific: three successive **lengthenings of the window**. Dhāraṇā gives the moment a length at all, rather than a flicker. Dhyāna extends that length and keeps it unbroken. And only a window long enough can register a fine gap as having closed, because a shorter one could not have seen the gap in the first place.

If that reading holds, then the ordering of the stages is not a convention of pedagogy and the sequence cannot be skipped. One cannot bring the gap to zero faster than the window allows the gap to be seen. The finer the remaining difference, the longer the unbroken stretch required for it to be resolvable at all, which is the piano tuner's predicament exactly. This is the strongest claim in this essay and also the one most clearly in the second register: it is a structural model, a reading of what the stages require, not a theorem about consciousness.

The inverse proportion from the table has a consequence here that is worth drawing out, because it matches something the traditions say and modern impatience finds implausible. If each further refinement of the gap needs proportionally more unbroken time, then progress through the stages is not linear in effort. Getting from scattered to reasonably collected is cheap: the gap is wide, and a short episode resolves it. Getting from reasonably collected to genuinely settled costs more. And the closer the gap comes to closing, the longer the stretch needed to see whether it has closed, without limit. The traditions describe the early stages in weeks and the later ones in years, and they are routinely read as either pious exaggeration or a device to keep students humble. The exchange rate offers a plainer explanation. The later stages are not harder because the tradition wants them to be. They are working against an inverse proportion.

None of which says anything about whether the states at the end of the sequence are what the tradition says they are. That is a separate question, and this essay has no purchase on it. What the mathematics constrains is the shape of the road, not the existence of its destination.

There is one more thing the mathematics says, and it is the quietest result here. Drive the gap all the way to zero and the moment lands exactly on Gabor's floor, at 1/4π. Not near it. On it. A perfected meeting, on this model, is a minimum-uncertainty packet: the object alone shining, as economical in time and frequency as a bounded episode can be. And the floor itself does not come off. No further refinement of the meeting removes it, because it is not the price of duality. It is the price of being an episode at all.

## What the floor asks of us

Let me gather the thread.

A moment of knowing is an episode. It begins, lasts and passes, which means it is neither the eternal beat we had been drawing nor a bare packet with no relation inside it. It is both at once: two poles, and edges in time.

Bounding it has a cost. Each of the two poles widens from a sharp line into a lump of width about 1/T, and the shorter the moment the wider each one spreads.

So duality itself has a resolution floor. Below T · Δf of about 1/π the two poles merge, and a real gap becomes indistinguishable from no gap. The episode was too short to hold its own difference.

Which means a glimpse cannot certify itself. That is not a dismissal of glimpses; it is a reason to keep going, and it explains, from the outside, why the traditions ask for continuity rather than for intensity.

And the instruction, in the end, was always duration. Not effort, not force, not a better technique. Unbrokenness is not a stylistic preference of contemplative traditions or a test of anyone's sincerity. It is the one currency that buys resolution, and the mathematics sets its price.

There is something fitting in the fact that this is where the calculation lands. A great deal of modern advice about attention is advice about intensity: focus harder, eliminate distraction, optimise the conditions. The traditions asked for something much less dramatic and much harder, which is continuity: the same thing, unbroken, for longer than is comfortable. It turns out that this was never a matter of taste. A bounded moment can only resolve what its own length permits, and the only way to resolve something finer is to let the moment run longer. The fourteenth-century instruction and the 1946 inequality are saying the same thing in two languages.

*This essay presents the mathematics faithfully. The uncertainty limit, the effect of bounding a signal on its spectrum, the threshold at which two spectral lumps separate, and the fact that a closed gap lands exactly on the floor are all established results. The connections drawn here to contemplative models, including the reading of the two waves as object and attention and of the three stages as successive lengthenings of a window, are offered as structural bridges for insight, not as claims that any of this proves a metaphysics, nor that the tradition anticipated Gabor. What the tradition reports from the inside about the closing of the gap is first-person testimony, offered with respect, and it is not a third-person measurement.*

## Where to Go From Here

If something in this resonated, and you would like to take it further than an essay can, there are four ways in, in roughly increasing depth.

**Start free.** A short, free introduction to meditation and mind-management, including our podcast **[The Mind](https://www.vedanta.nz/the-mind)**, a conversation where modern science meets Yoga and Vedanta to build a practical understanding of the mind, in plain language. No commitment required.

**Build your foundation.** The course this essay draws from, **[The Mind in the Light of Modern and Spiritual Sciences](https://www.vedanta.nz/courses)**, develops the wave model of experience and the stages of attention in full, including the material on vṛtti, the two waves and the closing of the gap that this essay could only summarise. It is the fullest way to engage with the framework rather than a single result from it.

**Practise in community.** The **[Ritam Wellness Forum](https://www.vedanta.nz/ritam-wellness-forum)** and our Ritam Yarning Circles are where this stops being theory: small, facilitated conversations where you bring your own questions and experience.

**Go deeper.** When you are ready, our Vedanta Wellbeing Retreat offers time away from daily life to let the practice settle in more fully.

The mathematics in this essay describes the territory. It does not walk it for you, and it cannot lengthen anyone's attention. A floor that can be calculated is still a floor that has to be met, one sitting at a time, and that part is yours.

Everything in the Ritam Wellbeing Programme, the course, the podcast, the forum, is offered freely. If this essay or the presentation above was worth your time, the centre relies entirely on donations to keep doing this work. **[You can support it here.](https://www.vedanta.nz/donate)**

*A note on care: the Ritam Wellbeing Programme supports general wellbeing and personal growth. It is not a treatment for mental illness and is not a substitute for professional medical or psychological care. If you are struggling, please reach out to your doctor or a qualified professional. In New Zealand you can call or text 1737 any time to speak with a trained counsellor, free and confidential. In an emergency, call 111.*
