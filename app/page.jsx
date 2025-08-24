"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Brain, Palette, Lock, Baby, Moon, Sun, BookOpen, Megaphone, Store } from "lucide-react";
import PuppyMascot from "../components/PuppyMascot";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const vibes = {
  Calm: { gradient: "from-blue-200 via-fuchsia-200 to-rose-200 dark:from-blue-900 dark:via-fuchsia-900 dark:to-rose-900",
          headline: "Gentle stories for winding down",
          blurb: "Soothing, low-stimulus adventures designed for bedtime and focus.",
          chips: ["Bedtime","Mindful","Story-first"] },
  Playful: { gradient: "from-amber-200 via-rose-200 to-fuchsia-200 dark:from-amber-900 dark:via-rose-900 dark:to-fuchsia-900",
          headline: "High‑giggle, low‑chaos fun",
          blurb: "Silly quests, characters that pop, and just‑right challenges.",
          chips: ["Weekends","Energy","Co-play"] },
  Learn: { gradient: "from-emerald-200 via-lime-200 to-teal-200 dark:from-emerald-900 dark:via-lime-900 dark:to-teal-900",
          headline: "Learning that feels like play",
          blurb: "Math quests, reading journeys, and problem‑solving puzzles.",
          chips: ["Math","Reading","STEM"] },
};

function Feature({ icon: Icon, title, desc }){
  return (
    <Card className="h-full border-0 bg-white/70 backdrop-blur dark:bg-zinc-900/60 shadow-sm">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-zinc-900/10 dark:bg-white/10"><Icon className="w-5 h-5"/></div>
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent><p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{desc}</p></CardContent>
    </Card>
  );
}

function Step({ step, title, desc }){
  return (
    <div className="relative pl-10">
      <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 grid place-items-center text-xs font-bold">{step}</div>
      <h4 className="font-semibold mb-1">{title}</h4>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{desc}</p>
    </div>
  );
}

export default function Page(){
  const [vibe, setVibe] = React.useState("Calm");

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900">
      {/* Top glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] rounded-full blur-3xl opacity-30 bg-gradient-to-tr from-fuchsia-400 via-purple-400 to-rose-300 dark:from-fuchsia-700 dark:via-purple-700 dark:to-rose-600" />
      </div>

      {/* Nav */}
      <header className="container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-lg">
          <PuppyMascot className="w-7 h-7" />
          GamePuppy <span className="opacity-70 text-sm font-medium">/ VibeGaming</span>
          <Badge variant="secondary" className="ml-2">alpha</Badge>
          <Badge variant="secondary" className="ml-2">√ of AI: Safe</Badge>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="opacity-80 hover:opacity-100">Features</a>
          <a href="#how" className="opacity-80 hover:opacity-100">How it works</a>
          <a href="#vibes" className="opacity-80 hover:opacity-100">Vibes</a>
          <a href="#pricing" className="opacity-80 hover:opacity-100">Pricing</a>
          <a href="#partners" className="opacity-80 hover:opacity-100">Partners</a>
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="ghost" className="hidden sm:inline-flex">Log in</Button>
          <Button>Get Started</Button>
        </div>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-6 pt-6 pb-16 md:pb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.5}}
              className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Play that fits the vibe — with paws 🐶
            </motion.h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 max-w-xl">
              Parent‑powered play tuned to your kid’s mood, age, and interests. No ads. No strangers.
              √ of AI = smart help, safe by design.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button size="lg">Create your first game</Button>
              <Button size="lg" variant="secondary">Watch demo</Button>
              <div className="text-xs text-zinc-500 dark:text-zinc-400">Free while in alpha</div>
            </div>
            <div className="mt-6 flex items-center gap-4 text-xs text-zinc-600 dark:text-zinc-400">
              <div className="flex items-center gap-1"><ShieldCheck className="w-4 h-4"/> √ of AI — Safety‑first</div>
              <div className="flex items-center gap-1"><Lock className="w-4 h-4"/> Offline option</div>
              <div className="flex items-center gap-1"><Sparkles className="w-4 h-4"/> AI co‑designer</div>
            </div>
          </div>

          {/* Vibe preview card */}
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>
            <Card className="overflow-hidden border-0 shadow-xl bg-white/70 backdrop-blur dark:bg-zinc-900/60">
              <CardHeader className={`bg-gradient-to-tr ${vibes[vibe].gradient} p-8`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Baby className="w-5 h-5"/>
                    <CardTitle className="text-xl">Vibe Preview — GamePuppy</CardTitle>
                  </div>
                  <div className="flex items-center gap-2">
                    <Moon className="w-4 h-4"/><Sun className="w-4 h-4"/>
                  </div>
                </div>
                <p className="mt-2 text-sm opacity-80 max-w-md">{vibes[vibe].headline}</p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {Object.keys(vibes).map((name) => (
                    <Button key={name} variant={vibe===name? "default":"outline"} size="sm" onClick={() => setVibe(name)}>
                      {name}
                    </Button>
                  ))}
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">{vibes[vibe].blurb}</p>
                <div className="flex flex-wrap gap-2">
                  {vibes[vibe].chips.map((c) => (<Badge key={c} variant="secondary">{c}</Badge>))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container mx-auto px-6 py-12 md:py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">Why parents choose GamePuppy</h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">Cute UI, serious privacy. Nerdy‑and‑sqirty fun that grows with your child.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Feature icon={ShieldCheck} title="Safety by design (√ of AI)" desc="No ads, no strangers, no dark patterns. Private by default with offline mode and human‑in‑the‑loop controls." />
          <Feature icon={Brain} title="Psychology‑aware (kid‑calibrated)" desc="Age‑appropriate stories, puzzles, and difficulty tuned to development." />
          <Feature icon={Palette} title="No‑code creativity" desc="Drag‑and‑drop that feels like Canva, sprinkled with AI suggestions your inner nerd will high‑five." />
        </div>
      </section>

      {/* How */}
      <section id="how" className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">How it works (the puppy path)</h3>
            <div className="space-y-6">
              <Step step="1" title="Set the vibe (woof!)" desc="Pick Calm, Playful, or Learn — or let AI detect from a quick prompt." />
              <Step step="2" title="Add your child’s world" desc="Age, interests, sensitivities. We tailor the tone, pace, and visuals." />
              <Step step="3" title="Build or auto‑build" desc="Drag blocks like characters and rules — or ask AI to draft a game for you." />
              <Step step="4" title="Play private" desc="Runs locally with optional offline mode. Share only with your pack." />
            </div>
            <div className="mt-8 flex gap-3">
              <Button size="lg">Start free</Button>
              <Button size="lg" variant="outline">View templates</Button>
            </div>
          </div>

          <Card className="border-0 bg-white/60 backdrop-blur dark:bg-zinc-900/60">
            <CardHeader>
              <div className="flex items-center gap-2"><BookOpen className="w-5 h-5"/><CardTitle>Sample template packs</CardTitle></div>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-4">
              <Card className="border bg-gradient-to-tr from-blue-50 to-rose-50 dark:from-blue-950 dark:to-rose-950">
                <CardHeader><CardTitle className="text-base">Bedtime Stories</CardTitle></CardHeader>
                <CardContent className="text-sm text-zinc-600 dark:text-zinc-400">Short, cozy adventures with soft music and gentle goals.</CardContent>
              </Card>
              <Card className="border bg-gradient-to-tr from-amber-50 to-fuchsia-50 dark:from-amber-950 dark:to-fuchsia-950">
                <CardHeader><CardTitle className="text-base">Weekend Quests</CardTitle></CardHeader>
                <CardContent className="text-sm text-zinc-600 dark:text-zinc-400">Energetic collect‑and‑solve missions with co‑play options.</CardContent>
              </Card>
              <Card className="border bg-gradient-to-tr from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950">
                <CardHeader><CardTitle className="text-base">Math Treasures</CardTitle></CardHeader>
                <CardContent className="text-sm text-zinc-600 dark:text-zinc-400">Number puzzles hidden in pirate adventures and space trips.</CardContent>
              </Card>
              <Card className="border bg-gradient-to-tr from-fuchsia-50 to-purple-50 dark:from-fuchsia-950 dark:to-purple-950">
                <CardHeader><CardTitle className="text-base">Reading Journeys</CardTitle></CardHeader>
                <CardContent className="text-sm text-zinc-600 dark:text-zinc-400">Phonics quests & narrative choices to build comprehension.</CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Vibes */}
      <section id="vibes" className="container mx-auto px-6 py-12 md:py-16">
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold">Pick a vibe. We tune the play.</h3>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">Like a playlist for screen time — Calm, Playful, or Learn.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {Object.entries(vibes).map(([name, v]) => (
            <Card key={name} className="border-0 overflow-hidden shadow-sm">
              <CardHeader className={`bg-gradient-to-tr ${v.gradient}`}>
                <CardTitle className="text-lg">{name}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">{v.headline}</p>
                <div className="flex flex-wrap gap-2">
                  {v.chips.map((c) => (<Badge key={c} variant="secondary">{c}</Badge>))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Partners (CTA) */}
      <section id="partners" className="container mx-auto px-6 py-12 md:py-16">
        <Card className="border-0 bg-white/70 backdrop-blur dark:bg-zinc-900/60">
          <CardContent className="p-8 flex flex-col lg:flex-row items-center gap-6 justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Partner with GamePuppy</h3>
              <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl">Schools, clinics, and parent communities — co-create safer, smarter play with us.</p>
            </div>
            <div className="flex gap-3">
              <a href="mailto:info@gamepuppy.co"><Button size="lg"><Megaphone className="w-4 h-4 mr-2"/>Become a partner</Button></a>
              <a href="https://calendly.com/your-handle/gamepuppy-partner-intro" target="_blank" rel="noreferrer"><Button size="lg" variant="outline"><Store className="w-4 h-4 mr-2"/>Book a call</Button></a>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Pricing */}
      <section id="pricing" className="container mx-auto px-6 pb-20">
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold">Simple, family‑friendly pricing (no tricks, just treats)</h3>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">Start free. Upgrade when you’re ready.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="border-0">
            <CardHeader><CardTitle>Free</CardTitle></CardHeader>
            <CardContent className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <ul className="list-disc pl-5 space-y-1">
                <li>Create up to 2 games</li>
                <li>Core templates</li>
                <li>Private play</li>
              </ul>
              <Button className="w-full mt-4">Get started</Button>
            </CardContent>
          </Card>
          <Card className="border-2 border-zinc-900 dark:border-white">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Family</CardTitle>
                <Badge>Most popular</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <div className="text-3xl font-extrabold">$9<span className="text-base font-medium">/mo</span></div>
              <ul className="list-disc pl-5 space-y-1">
                <li>Unlimited games</li>
                <li>AI sidekick</li>
                <li>Offline mode</li>
                <li>Basic marketplace access</li>
              </ul>
              <Button className="w-full mt-4">Choose Family</Button>
            </CardContent>
          </Card>
          <Card className="border-0">
            <CardHeader><CardTitle>Schools & Clinics</CardTitle></CardHeader>
            <CardContent className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <ul className="list-disc pl-5 space-y-1">
                <li>Multi-seat license</li>
                <li>Admin / classroom controls</li>
                <li>Priority support</li>
                <li>Custom privacy agreements</li>
              </ul>
              <Button variant="outline" className="w-full mt-4">Contact sales</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200/60 dark:border-zinc-800/60">
        <div className="container mx-auto px-6 py-10 grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <div className="flex items-center gap-2 font-semibold">
              <PuppyMascot className="w-6 h-6" />
              GamePuppy
            </div>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400 max-w-sm">
              GamePuppy is a parent‑first, psychology‑aware game studio: safe by design,
              creative by default, and proudly √ of AI.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="font-semibold mb-2">Product</div>
              <ul className="space-y-1 text-zinc-600 dark:text-zinc-400">
                <li><a href="#features">Features</a></li>
                <li><a href="#how">How it works</a></li>
                <li><a href="#pricing">Pricing</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-2">Company</div>
              <ul className="space-y-1 text-zinc-600 dark:text-zinc-400">
                <li><a href="#partners">Partners</a></li>
                <li>Press</li>
                <li>Privacy</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="font-semibold mb-2">Stay in the loop</div>
            <div className="flex gap-2">
              <input placeholder="Email address" className="flex-1 rounded-xl px-3 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"/>
              <Button>Subscribe</Button>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2">We’ll only email about major updates. Zero spam.</p>
          </div>
        </div>
        <div className="text-xs text-center text-zinc-500 dark:text-zinc-400 pb-8">© {new Date().getFullYear()} GamePuppy. All rights reserved.</div>
      </footer>
    </div>
  );
}
