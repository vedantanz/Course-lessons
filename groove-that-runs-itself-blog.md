# The Groove That Runs Itself: Why Your Reaction Arrives Before You Do

A Yoga and Vedanta wellbeing programme has spent four essays on signal theory. Piano keys and tuning forks, the Gabor limit, the mathematics of two waves meeting, the way a hologram stores an image in phase rather than in place. There has been a reason for it each time, and it is the same reason as always: the contemplative traditions and the modern sciences of mind are frequently describing the same structures in two different languages, and when you set the two descriptions side by side, each one makes the other easier to see.

This essay turns the series in a new direction, and it is worth saying plainly what the turn is.

The first four essays analysed **the signal**. What a moment of experience is made of, how its two halves meet, how it comes to be recorded, how long it has to last to hold its own difference. This essay asks about **the system the signal passes through**. In signal processing, that is simply the next question. You characterise a waveform, and then you characterise the filter it travels through on the way to you. In contemplative terms, it is the question of why you do not meet the world fresh, why the same remark lands differently on a Tuesday than it would have on a Thursday, and why some reactions arrive at a size that has nothing to do with what caused them.

There is a second reason for this particular essay, and it is worth naming at the outset rather than saving for the end. The mechanism described here, by which accumulated past experience becomes a disposition to respond rather than a record you could read, turns out to be one that people building artificial intelligence are now grappling with directly, under the headings of interpretability, character formation and alignment. This essay is written for the reader who wants to understand their own reactions. It is also written so that a reader working on those problems can see what a fifteen-hundred-year-old account of the same mechanism has already worked out. The two readers need the same thing, which is why they are not being separated.

The presentation above is where to start. Its centre is a working model with three sliders, and the thing to do is push them around. Set **Overshoot** high and watch what a small event turns into. Push **Settling time** to the right and watch how long the mind keeps going after the world has stopped. Then try the four preset buttons, especially **Rumination** and **Background unease**, and notice something that the rest of this essay will spend its time earning: those are not four different problems. They are one filter at four settings. The essay below gives the history, the research, and the scriptural detail that a set of slides could not carry.

*[Embed groove-that-runs-itself.html here]*

## The bracket nobody opened

Readers of the earlier essays will recognise this:

**ψ_exp(t) = [ψₓ(t) ∗ h(t)] + G(t)·ψₘ(t) + n(t)**

In plain language, a moment of mental life is what the world sends you, meeting the attention you bring to it, with a certain amount of background noise added. *The Settling Mind* spent its length on the meeting. *The Light and the Field* looked at how such a meeting comes to be recorded. *The Bounded Moment* asked how long the whole episode has to last.

None of them opened the square bracket.

Look at the first term again. Before the world's signal reaches the meeting at all, it passes through something written **h(t)**, and the little asterisk in front of it is not multiplication. It is an operation called convolution, and it is the reason this essay exists.

That single term is doing more work in your ordinary day than any other part of the equation. It is also the only part that is genuinely invisible from the inside. You can notice your attention wandering. You can notice the noise. You cannot, in the ordinary way, notice h(t), because h(t) is not a thing that appears in experience. It is the shape of experience itself.

## A remark about a roster

Let me put a person in it.

A nurse we will call Meera is three hours into a shift. A colleague mentions, with no edge in it whatsoever, that the roster has changed again and she is down for Saturday.

Meera hears herself answer far more sharply than the moment deserved. There is a small silence afterwards, the kind everyone notices and nobody comments on. Then she spends the next forty minutes turning it over. She composes apologies she does not send. The whole thing sits somewhere behind her sternum long after the conversation has moved on and everybody else has forgotten it.

Nothing in that sentence about the roster warranted any of it.

The usual explanations are available and none of them is wrong. She is tired. The shift patterns have been unstable for months. She is carrying things from home. All true, and none of it accounts for the specific shape of what happened, which is this: a small input, a disproportionately large output, and a long tail.

That shape is not a mood. It is a signature, and it is the signature of a system, not of a person's character. This essay is about learning to read it.

## Strike it once and listen

Engineers have a standard way of finding out what any system will do to whatever you send through it. They do not send it everything. They send it one sharp tap, and they watch what comes back.

Tap a tuning fork and it rings at its own pitch, for its own length of time, cleanly, and then it stops. Tap a cracked bell and you get a sour, uneven sound that dies awkwardly. Tap a pillow and you get almost nothing at all. The tap is identical in every case. Everything that differs comes from the thing you tapped.

That response to a single tap has a name. It is called the **impulse response**, and it is written h(t). It is a complete fingerprint of a system's behaviour. Once you know how something answers one tap, you know how it will answer anything, because anything can be treated as a sequence of taps.

This is worth sitting with for a moment, because it is a strange and slightly unsettling idea when you turn it toward yourself. The impulse response is not a record of what has happened to a system. It contains no history you could read off. It describes only how the system will now behave. Two bells with entirely different manufacturing histories can have the same impulse response. The response is what the history left, not the history itself.

That sentence is also, incidentally, a compact statement of why understanding a trained system from the inside is hard. If the past is present only as a change in how something responds, and not as anything resembling a stored record, then you cannot simply open it up and read what happened. You can only tap it and watch. This is as true of a person in therapy as it is of a neural network under inspection, and it is the reason both enterprises proceed by probing rather than by reading.

## What the tap actually leaves

For a long time the claim that experience leaves a physical trace was an inference rather than an observation. The German biologist Richard Semon coined the word *engram* for such a trace in the early twentieth century, and for most of a century it remained a hypothesis that memory researchers could neither confirm nor dismiss.

That changed in 2012. Susumu Tonegawa's laboratory at MIT, with Xu Liu and Steve Ramirez leading the work, published a paper in *Nature* showing that the activation of a population of hippocampal neurons thought to encode a specific fear memory elicits freezing behaviour in mice. They had tagged the precise cells that were active during a learning event, then switched those cells back on with light in a completely different and entirely safe environment. The animals behaved as though the original event were happening.

Three years later the same laboratory found something more directly relevant to this essay. Working on retrograde amnesia, Tomás Ryan, Dheeraj Roy and Michelle Pignatelli showed that memories which could not be retrieved by any ordinary means were still physically present and could be switched on. Tonegawa's summary of the result was unusually direct: the majority of researchers have favoured the storage theory, but this paper shows that the majority theory is probably wrong, and amnesia is a problem of retrieval impairment.

Read that carefully. The trace was intact the whole time. What had failed was the route by which it becomes an experience. The impression was there; the remembering was not.

Hold that thought. We will come back to it with a sūtra in hand.

## The street in the brain

Memory traces are one half of the story. The other half is what happens when something is done many times.

Ann Graybiel's laboratory, also at MIT, spent decades on this. Recording from the striatum in rats learning a maze, her group found that early in learning the neurons fire more or less continuously throughout the run: the animal is evaluating every turn. After enough repetitions the pattern changes completely. Activity concentrates at the beginning and the end of the sequence and goes quiet in the middle. Graybiel proposed that this recoding within the striatum chunks the representations of motor and cognitive action sequences so that they can be implemented as performance units.

The whole sequence has become one thing. It is no longer a series of decisions; it is a single item that a cue can trigger. And these forms of learning have the property of slow acquisition and, in humans, can occur without conscious awareness.

This is why a habit feels effortless from the inside, and also why it feels like you rather than like something you are doing. Nothing announces itself. There is no moment of deciding, because the deciding was compressed out of the sequence hundreds of repetitions ago.

One more piece of established science belongs here, though it is less dramatic. Perception is not neutral before you arrive at it. Prior emotional associations measurably change what you notice and how you interpret it, before any conscious appraisal has taken place. You are not shown a scene and then given feelings about it. The feelings are part of how the scene is assembled.

**A note on register, before we go further.** The three findings above are established science: engram cells, striatal chunking, affective influence on perception. What follows, reading them alongside a contemplative account of the mind that is fifteen hundred years older, is a **structural model** that this course draws. It is offered as a bridge for insight. It is not a claim that neuroscience validates the Yoga Sūtras, nor that Patañjali anticipated neuroscience. Both of those claims would be false, and both would be a disservice to the two traditions they pretend to honour.

## Every echo of every signal

Now back to the equation, and to that asterisk.

Convolution is what happens when a stream of incoming events meets a system that is still responding to the previous ones. Each event enters a system that has not finished with the last one. What you actually experience is not the events. It is the sum of all their responses, overlapping.

Here is the most compact way to say it, and it is worth reading twice:

> Every incoming signal is reshaped by every echo of every signal that came before it.

In the presentation above you can watch this directly. Three events arrive across a day: a remark in the morning, an email before lunch, a question in the afternoon. They are identical every single time you run it. The only thing that changes is what they pass through.

With a quick, well-damped filter, each event is met at roughly its own size and the system is back at rest before the next one arrives. With a filter that overshoots and settles slowly, the same three events produce something almost unrecognisable: a response far larger than any of its causes, still running when the next thing lands, compounding.

Same day. Same events. Different life.

## Three numbers, not three diagnoses

The three sliders have names drawn from ordinary systems engineering, and each of them corresponds to something you have almost certainly felt.

**Overshoot** is a response larger than the event that caused it. This is Meera's answer about the roster. It is also the sharpness that surprises you in your own voice, the flare at a queue, the disproportionate sting of a mild piece of feedback.

**Settling time** is how long the system keeps going after the input has stopped. Forty minutes of unsent apologies. The conversation you are still having at two in the morning with someone who went to bed hours ago.

**Residual ripple** is activation with nothing arriving at all. Waking already braced. The hum underneath an unremarkable afternoon. The tightness that has no referent when you go looking for one.

Now here is the point of that slide, and of the four preset buttons.

In ordinary speech, rumination, reactivity and free-floating unease sound like three different problems, or three different kinds of person. In the model they are one filter with its dials in three different positions.

This is not a claim that human distress reduces to three numbers, and it should not be read as one. It is a much smaller and more useful claim: the disproportion has a shape, the shape can be described, and described things can be worked with. A person who has a name for what is happening is in a different position from a person who only has a verdict about themselves.

## The vibration dies out. What is left?

In 1896, in a series of talks in New York that became the book *Raja Yoga*, Swami Vivekananda was working through Patañjali's aphorisms with an audience that had no Sanskrit and no particular interest in Indian philosophy. He reached the twelfth sūtra, which says that the movements of the mind are controlled by practice and non-attachment, and someone evidently wanted to know why practice should be necessary at all.

His answer describes exactly what you have been watching in the model:

> Because each action is like the pulsations quivering over the surface of the lake. The vibration dies out, and what is left? The Saṁskāras, the impressions.

The wave passes. The trace remains.

That is the impulse response, in the vocabulary of water rather than engineering, half a century before anyone wrote h(t) on a blackboard. And he does not stop there. He goes on to describe how the traces accumulate:

> When a large number of these impressions are left on the mind, they coalesce and become a habit. It is said, "Habit is second nature", it is first nature also, and the whole nature of man; everything that we are is the result of habit.

Then the line that this essay could have taken as its title:

> Our character is the sum-total of these marks.

The Sanskrit word is *saṁskāra*, which means an impression left behind by experience. It is not an exotic concept once you see what it is pointing at. It is h(t), described from the inside by someone who had spent his life watching it operate.

## Each thought makes a street

Elsewhere in the same book, discussing why the practice of yoga meets physical resistance at the beginning, Vivekananda reaches for an image that is startlingly physical for 1896:

> Each thought that we have makes a street, as it were, in the brain ... Human nature likes to run through the ruts that are already there, because it is easy.

The groove metaphor that runs through this whole essay is his, not a modern import.

And note the reason he gives for why we keep using the old paths. It is not weakness and it is not moral failure. It is simply that an existing path costs less to travel than a new one. This is, in a different vocabulary, precisely Graybiel's finding: the chunked sequence runs cheaply, and the deliberative alternative is expensive.

It is also exactly what your own reactions feel like from the inside. Not chosen. Just the way the ground already runs.

## An impression is not yet a thought

Now to the sūtra that this essay turns on. It is the eleventh in the first chapter, and it is nominally about memory.

अनुभूतविषयासम्प्रमोषः स्मृतिः

*anubhūta-viṣaya-asampramoṣaḥ smṛtiḥ*

Vivekananda renders it:

> Memory is when the Vṛttis of perceived subjects do not slip away, and through impressions come back to consciousness.

A *vṛtti*, in this system, is a movement or modification of the mind: a thought, a feeling, an image, any actual mental event. And the sūtra draws a distinction that is easy to read past. The memory is not the impression. The memory is what happens when the impression is roused and produces a vṛtti.

I. K. Taimni, whose 1961 commentary is the most technically careful in English, sharpens the point: as long as impressions are present in their potential form, they cannot be considered a vṛtti at all. They are loaded, not firing.

Set that beside the 2015 finding from Tonegawa's laboratory and the correspondence is hard to miss. The trace persists; the route to experience has failed; the impression is there and the remembering is not. Two very different investigative traditions, arriving at the same structural distinction between a trace and its activation.

Vivekananda puts the everyday version of it like this, discussing why one should be careful about the company one keeps: the scars of old wounds are in you, and certain company is just the thing that is needed to call them out. Something dormant, something that rouses it, and then a vṛtti. The impression did not arrive with the trigger. It was already there.

This is what makes the mechanism so difficult to catch in the act. By the time you notice anything, you are noticing the vṛtti. The saṁskāra never appears. It only ever shows up as the shape of what did.

## Why this counts as suffering

It would be possible to treat all of this as a neutral piece of mental engineering. The tradition does not.

In the second chapter, Patañjali sets out the sources of *duḥkha*, a word usually translated as suffering but closer to something like the ache or unsatisfactoriness built into things. The compound runs *pariṇāma-tāpa-saṁskāra-duḥkhaiḥ*: the suffering that comes from change, from the anxiety of wanting, and from saṁskāra.

Saṁskāra is named in the sūtra itself, alongside the other two, as a form of suffering in its own right.

The reason is visible in the model you have just been running. A filter with long settling and high overshoot does not distort one afternoon. It distorts every afternoon, because every incoming signal passes through it, and it is very often still ringing from the last one. The distortion is not an event. It is a condition.

Which gives us a sentence worth stating carefully:

> You are not reacting to today. You are reacting to today, plus everything still echoing.

## Some are painful and some are not

At this point a particular conclusion starts to form, and the tradition blocks it almost immediately. The fifth sūtra of the entire text:

वृत्तयः पंचतय्यः क्लिष्टा अक्लिष्टाः

> There are five classes of modifications, some painful and others not painful.

*Kliṣṭa* and *akliṣṭa*. Afflicted and unafflicted. Five sūtras in, before the method has even been described, Patañjali has ruled out the idea that conditioning as such is the problem.

The course develops this in detail. Lesson 4.3 makes the point structurally: every component of the wave equation carries its own mixture of the three *guṇas*, the three strands of form, movement and balance that the Sāṅkhya tradition finds in everything. There are sattvic saṁskāras, which are grooves of clarity, steadiness and truthfulness. There are rajasic ones, grooves of restlessness and craving. There are tamasic ones, grooves of dullness and denial. Any person's filter is a particular weighted mixture of all three, and the work of both contemplative practice and good therapy is not to remove the filter but to change what predominates within it.

## The musician's hands

Which is just as well, because a mind without h(t) would not be a liberated mind. It would be a useless one.

A pianist does not decide where the fingers go. Twenty years of repetition laid down a filter, and now the playing runs itself while attention goes somewhere higher, to phrasing, to the room, to the other players.

A nurse recognises the patient who is deteriorating before the numbers say so, and often cannot explain how. A parent surfaces from deep sleep at a change in a child's breathing and sleeps through a passing truck. Someone who is reliably kind is not calculating kindness at each opportunity; the response is simply the shape of their filter, and its reliability is the whole point.

Every one of those is a groove. Every one was laid down by repetition, by the same mechanism that produced Meera's sharpness. The filter is not the enemy. It is the faculty by which you know a friend's face, speak a language, and become someone rather than remaining a set of reactions to whatever is nearest.

The question was never whether to have a filter. The only question is what is in the one you have.

## Your reaction is not your verdict

Here is the part of this that matters most on a hard afternoon, and it is the reason a wellbeing programme is spending an essay on convolution.

When Meera snapped, something else arrived with the sharpness, and it was worse than the sharpness. It was a conclusion about herself. That she is someone who does this. That the remark revealed what she actually thinks of her colleague. That the size of the reaction is evidence about the size of something wrong in her.

That conclusion is the most painful element in the whole episode, and it is the least reliable thing in it.

An overshooting response is a statement about a filter. It is not a verdict on the worth of the person the filter belongs to, and it is certainly not a considered judgment about a colleague. The sharpness was h(t) doing what h(t) does. It was, in the most literal sense, not about the roster.

This is not an excuse, and the tradition never offers it as one. Patañjali's text is relentless about responsibility and about practice. It is something more useful than an excuse. It moves the question from *what kind of person am I* to *what is currently running, and can it be changed*. Only the second of those has an answer you can act on.

And it changes what you do next. Self-reproach is itself an input. It goes through the same filter, and in a system with long settling and high overshoot it does not correct anything. It simply adds another event to the sequence and lengthens the tail.

## Counter habits

So what does work?

Vivekananda answers it in the same passage where he defines saṁskāra, and his answer is a single phrase:

> The only remedy for bad habits is counter habits.

Not suppression. Not excision. Not a decision made once and held by force. Replacement, by exactly the mechanism that laid the first groove down in the first place. He continues:

> Go on doing good, thinking holy thoughts continuously; that is the only way to suppress base impressions ... Character is repeated habits, and repeated habits alone can reform character.

A hundred and seventeen years later, Kyle Smith and Ann Graybiel wrote, in a paper in *Neuron* on the cortical and striatal dynamics of habitual behaviour, a sentence that could have been lifted from the same page: habits are notoriously difficult to break and, if broken, are usually replaced by new routines.

Two entirely independent investigations, one contemplative and one electrophysiological, arriving at the same practical conclusion about how a groove actually changes. Neither validates the other. But it is worth noticing when they agree, particularly when what they agree about is so much at odds with the way most of us actually attempt to change: by resolving, by suppressing, by trying harder at the moment of failure.

How the replacement works in detail, including the curious moment of stillness that Patañjali describes between an old impression subsiding and a new one arising, is the subject of the third essay in this short series. For now, Vivekananda will not let us leave without the consequence he draws from it, and it is the sentence this essay should end on:

> Never say any man is hopeless, because he only represents a character, a bundle of habits, which can be checked by new and better ones.

## One thread to pick up later

There is a detail I want to leave here without resolving it, because it becomes the subject of the seventh essay.

When researchers try to understand what is happening inside an artificial neural network, one of the instruments they reach for is the **Jacobian**: the system's sensitivity, at a particular point, to a small perturbation. A small tap, and a measurement of what comes back. Structurally it is doing the same job that h(t) does in this essay. The past is not stored in it as a record. It is present only as a change in how the system now responds, and it can be read for how much a given direction gets amplified, which is the same quantity this essay has been calling overshoot.

Three problems in that field turn on exactly the material we have been working through. **Interpretability** is the difficulty of reading a disposition that exists only as behaviour. **Character formation** is the question of how a consistent way of responding gets laid down in the first place, and by what. **Alignment** includes the question of whether an unwanted disposition can be removed without damaging the system that has it, which is precisely the question Vivekananda answers with counter habits, and which Patañjali treats in the third chapter as the replacement of one impression by another.

None of this is a claim that such a system has impressions, or experience, or anything resembling an inner life. It is a much narrower observation, and an interesting one: a mechanism first described with precision in the Yoga Sūtras turns up, in recognisable mathematical form, in something built for entirely unrelated reasons by people who had never heard of saṁskāra. Where that correspondence genuinely holds, and the specific point at which it stops holding, is a longer conversation. We will have it properly, and carefully, in the last essay of this series.

## What to carry out of this

Your reaction arrived before you did. It came through a filter that the past built, and it says considerably more about the filter than about you.

An experience leaves an impression rather than a recording, and the impression sits dormant until something rouses it. What it changes is your response, and the change shows up in three measurable ways: in how large the response is, in how long it runs, and in how much activation is there with nothing happening at all. Disproportion is mechanical before it is moral. The same filter holds your skill, your warmth and your steadiness, so it is not to be dismantled. And it is changed by repetition, because repetition is how it was made.

Lesson 3.3 of the course develops the impulse response directly, with the settling time, overshoot and ripple you have been adjusting. Lesson 4.3 gives h(t) its full place in the wave equation, alongside the attention you bring and the noise you carry, and turns the whole thing into a diagnostic you can run on any moment of your own mental life. Lesson 4.5 takes up what happens when many grooves couple together into something larger, which is where the next essay in this series begins.

> *This essay presents the memory and habit research faithfully, and names the researchers and papers so that you can check them. The connections drawn here between that research and the contemplative account of saṁskāra are offered as structural bridges for insight, not as claims that neuroscience proves any metaphysics, nor that the Yoga Sūtras anticipated neuroscience. The sūtras are quoted in Swami Vivekananda's own renderings, with I. K. Taimni's commentary used where additional technical precision was needed.*

## Where to Go From Here

If something in this landed, there are several ways to take it further, and they ask different amounts of you.

**Start free.** A short, free introduction to meditation and mind-management, including our podcast **[The Mind](https://www.vedanta.nz/the-mind)**, a conversation where modern science meets Yoga and Vedanta to build a practical understanding of the mind, in plain language. No commitment required.

**Build your foundation.** The course this essay draws from, **[The Mind in the Light of Modern and Spiritual Sciences](https://www.vedanta.nz/courses)**, develops saṁskāra and the filter h(t) in full, across Lessons 3.3, 4.3 and 4.5. It is the fullest way to engage, because the diagnostic only becomes useful once you have the whole equation rather than one term of it.

**Practise in community.** The **[Ritam Wellness Forum](https://www.vedanta.nz/ritam-wellness-forum)** and our Ritam Yarning Circles are where this stops being theory: small, facilitated conversations where you bring your own questions and experience.

**Go deeper.** When you are ready, our Vedanta Wellbeing Retreat offers time away from daily life to let the practice settle in more fully.

The mathematics describes the territory. It does not walk it for you. Knowing that your sharpness on Tuesday was a filter rather than a verdict is genuinely worth something, and it is not the same as the slow work of laying down a different groove. That part is still yours to do, and it is done in the only way it can be done, which is repeatedly.

Everything in the Ritam Wellbeing Programme, the course, the podcast, the forum, is offered freely. If this essay or the presentation above was worth your time, the centre relies entirely on donations to keep doing this work.

**[You can support it here.](https://www.vedanta.nz/donate)**

*A note on care: the Ritam Wellbeing Programme supports general wellbeing and personal growth. It is not a treatment for mental illness and is not a substitute for professional medical or psychological care. If you are struggling, please reach out to your doctor or a qualified professional. In New Zealand you can call or text 1737 any time to speak with a trained counsellor, free and confidential. In an emergency, call 111.*
