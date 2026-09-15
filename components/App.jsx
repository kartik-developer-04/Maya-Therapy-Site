'use client';
import React,{useState} from 'react';
import {Menu,X,ArrowUpRight,ChevronDown} from 'lucide-react';


const IMG={
 therapist:'https://drive.google.com/uc?export=view&id=1koVGhvD8mkiRXRukqrklo0HbB48p9PIa',
 hero:'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=85',
 calm:'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=85',
 nature:'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85',
};

function Img({src,alt,className=''}){
    return<img src={src} alt={alt} className={className} onError={e=>{e.currentTarget.src=IMG.calm}}/>
    }

function Header(){
    const [open,setOpen]=useState(false);
    return <header className="sticky top-0 z-50 bg-[rgba(255,253,250,.95)] backdrop-blur border-b border-[var(--line)]">
        <div className="container h-[82px] flex items-center justify-between">
            <a href="#top" className="leading-tight">
                <div className="serif text-[25px]">Dr. Maya Reynolds</div>
                <div className="text-[11px] tracking-[.18em] uppercase text-[var(--muted)]">Licensed Clinical Psychologist</div>
                </a>
                <nav className="hidden md:flex items-center gap-9 text-sm">
                    <a href="#about">About</a><a href="#services">Services</a>
                    <a href="#approach">Approach</a><a href="#office">Our Office</a>
                    <a href="#faq">FAQs</a><a className="btn !py-3 !px-5" href="#contact">Schedule a Consultation</a>
                    </nav>
                    <button className="md:hidden" onClick={()=>setOpen(!open)} aria-label="Toggle menu">
                        {open?<X/>:<Menu/>}
                        </button>
                        </div>
                        {open&&<nav className="md:hidden border-t border-[var(--line)] bg-[var(--white)] px-6 py-5 flex flex-col gap-5 text-sm">
                            <a onClick={()=>setOpen(false)} href="#about">About</a>
                            <a onClick={()=>setOpen(false)} href="#services">Services</a>
                            <a onClick={()=>setOpen(false)} href="#approach">Approach</a>
                            <a onClick={()=>setOpen(false)} href="#office">Our Office</a>
                            <a onClick={()=>setOpen(false)} href="#faq">FAQs</a>
                            <a onClick={()=>setOpen(false)} className="btn" href="#contact">Schedule a Consultation</a></nav>}</header>
                            }

function Hero(){
    return <section id="top" className="bg-[var(--cream)]">
        <div className="container grid lg:grid-cols-[.92fr_1.08fr] min-h-[700px] items-center gap-12 py-16">
            <div className="image-frame h-[560px] lg:h-[650px] relative">
                            <Img src={IMG.hero} alt="Calm natural setting representing a grounded therapy space"/>
                            <div className="absolute bottom-5 left-5 bg-[rgba(255,253,250,.92)] px-5 py-4 max-w-[290px]">
                                <div className="serif text-xl">A calm place to slow down, reflect, and reconnect.
                                    </div>
                                    </div>
                                    </div>
            <div className="max-w-[590px] fade-up">
                <div className="eyebrow mb-7">
                    In-person therapy in Santa Monica & secure telehealth across California
                    </div>
                    <h1 className="text-[clamp(48px,6vw,78px)] mb-7">Anxiety & Trauma Therapist in Santa Monica, CA</h1>
                    <p className="text-lg leading-8 text-[var(--muted)] max-w-[530px] mb-9">
                        When you’re used to holding everything together, it can be hard to admit you’re struggling. Dr. Maya Reynolds offers warm, collaborative therapy for adults navigating anxiety, trauma, burnout, and high internal pressure.
                        </p>
                        <a href="#contact" className="btn">Schedule a Consultation <ArrowUpRight size={18} className="ml-2"/></a>
                        </div>
                        
                                    </div>
                                    </section>
                                    }

function Intro(){
    return <section id="about" className="section">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
            <div className="image-frame h-[520px] lg:order-2">
                <Img src={IMG.nature} alt="Quiet coastal landscape"/>
                </div>
                <div className="lg:order-1">
                    <div className="eyebrow mb-5">
                        A supportive place to begin
                        </div>
                        <h2 className="text-[clamp(40px,5vw,62px)] mb-7">You don’t have to keep carrying everything on your own.</h2>
                        <p className="text-[17px] leading-8 text-[var(--muted)] mb-5">Many of the adults Dr. Reynolds works with are thoughtful, self-aware, and high-achieving—but privately feel exhausted, stuck in overthinking, or emotionally on edge.</p>
                        <p className="text-[17px] leading-8 text-[var(--muted)]">Therapy can offer space to understand what’s happening beneath the surface, build practical tools, and develop a stronger relationship with yourself over time.</p>
                        </div>
                        </div>
                        </section>
                        }

const people=[
    ['Adults','Feeling functional on the outside while struggling with anxiety, tension, sleep, emotional overwhelm, or the effects of past experiences.'],['Professionals, entrepreneurs & creatives','High internal pressure, perfectionism, and burnout after years of pushing through stress and expectations.'],
    ['Adults healing from trauma','People working through single-incident trauma or more complex, long-standing patterns from childhood, relationships, or chronic stress.']
];

function Who(){
    return <section className="section bg-[var(--deep)] text-white">
        <div className="container">
            <div className="max-w-[700px] mb-16">
                <div className="eyebrow !text-[var(--sage)] mb-5">Who I work with
                    </div>
                    <h2 className="text-[clamp(42px,5vw,64px)]">Support for the parts of life that feel hardest to hold.</h2>
                    </div>
                    <div className="grid md:grid-cols-3 border-t border-white/20">
                    {people.map(([t,d],i)=>
                    <div key={t} className="py-9 md:px-8 md:first:pl-0 md:border-r md:border-white/20 last:border-0">
                        <div className="text-sm opacity-60 mb-12">0{i+1}</div>
                        <h3 className="text-3xl mb-5">{t}</h3>
                        <p className="leading-7 text-white/75">{d}</p>
                        </div>)}
                        </div>
                        </div>
                        </section>
                        }

const expertise=['Anxiety & panic','Trauma & past experiences','Burnout & chronic stress','Perfectionism & high internal pressure','Relationships & confidence','Emotional regulation & body-based awareness'];

function Expertise(){
    return <section className="section bg-[var(--cream)]">
        <div className="container grid lg:grid-cols-[.75fr_1.25fr] gap-16">
            <div>
                <div className="eyebrow mb-5">Areas of focus
                    </div>
                    <h2 className="text-[clamp(42px,5vw,62px)]">You deserve support that sees the whole picture.</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-x-12">
                        {expertise.map((x,i)=>
                        <div className="py-6 border-b border-[var(--line)] flex items-start justify-between gap-5" key={x}>
                            <span className="text-lg">{x}</span>
                                <span className="text-[var(--terra)] text-sm">0{i+1}</span>
                                </div>)}
                                </div>
                                </div>
                                </section>
                                }

function Approach(){
    return <section id="approach" className="section">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
            <div>
                <div className="eyebrow mb-5">
                    How I work
                    </div>
                    <h2 className="text-[clamp(42px,5vw,64px)] mb-7">Warm, grounded, and collaborative.</h2>
                    <p className="text-[17px] leading-8 text-[var(--muted)] mb-5">Dr. Reynolds integrates evidence-based methods including cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques.</p>
                    <p className="text-[17px] leading-8 text-[var(--muted)] mb-8">Trauma work is paced carefully, with an emphasis on safety, stabilization, and helping you feel more regulated in daily life—not just during sessions. Therapy is structured enough to feel supportive while leaving room for reflection and depth.</p>
                    <a href="#contact" className="btn">Start a conversation <ArrowUpRight size={18} className="ml-2"/></a>
                    </div>
                    <div className="image-frame h-[560px]">
                        <Img src={IMG.calm} alt="Calm, uncluttered interior"/>
                        </div>
                        </div>
                        </section>
                        }

const services=[
    ['Anxiety Therapy in Santa Monica','If anxiety, overthinking, panic, or constant tension is making it hard to feel at ease, therapy can help you understand what’s happening and develop practical tools for feeling more grounded.'],
    ['Trauma Therapy in Santa Monica','If past experiences continue to affect your sense of safety, relationships, or daily life, trauma therapy offers a supportive space to process them at a pace that feels right for you.'],
    ['Burnout Therapy in Santa Monica','If you’re constantly pushing through work, pressure, and high expectations but feeling exhausted or disconnected, therapy can help you slow down, reconnect, and find more sustainable ways of living and working.']
];

function Services(){
    return <section id="services" className="section bg-[var(--sand)]">
        <div className="container"><div className="max-w-[720px] mb-16">
            <div className="eyebrow mb-5">
                Services
                </div>
                <h2 className="text-[clamp(42px,5vw,64px)]">Practical support, with room for depth.</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-5">
                    {services.map(([t,d],i)=><article key={t} className="bg-[var(--white)] p-8 min-h-[360px] flex flex-col">
                        <div className="text-sm text-[var(--terra)] mb-auto">0{i+1}
                            </div>
                            <h3 className="text-3xl mb-5">{t}</h3>
                            <p className="leading-7 text-[var(--muted)]">{d}</p></article>)}
                            </div>
                            </div>
                            </section>
                            }

function Office(){
    return <section id="office" className="section">
        <div className="container">
            <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-12 items-end mb-12">
                <div>
                    <div className="eyebrow mb-5">Our office</div>
                    <h2 className="text-[clamp(42px,5vw,64px)]">A quiet space designed to feel grounding.</h2>
                    </div>
                    <p className="text-[17px] leading-8 text-[var(--muted)] max-w-[520px]">Dr. Reynolds’ Santa Monica office is a private, comfortable space with natural light and an uncluttered environment. In-person sessions are available alongside secure telehealth for clients located throughout California.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                        <div className="image-frame h-[480px]">
                            <Img src="/images/office-1.png" alt="Dr. Maya Reynolds therapy office"/>
                            </div>
                            <div className="image-frame h-[480px] mt-0 md:mt-16"><Img src="/images/office-2.png" alt="Dr. Maya Reynolds counseling space"/>
                            </div>
                            </div>
                            </div>
                            </section>
                            }

const faqs=[
    ['Who does Dr. Reynolds work with?','She works with adults, including high-achieving professionals, entrepreneurs, creatives, and adults navigating anxiety, trauma, burnout, perfectionism, or high internal pressure.'],
    ['Do you offer in-person therapy?','Yes. Dr. Reynolds offers in-person therapy from her Santa Monica office as well as secure telehealth sessions for clients located in California.'],
    ['What therapy approaches do you use?','Her work integrates CBT, EMDR, mindfulness-based practices, and body-oriented techniques, tailored to each client’s needs and goals.'],
    ['What is trauma therapy like?','Trauma work is paced carefully, with an emphasis on safety, stabilization, and regulation. The goal is to create enough support for you to process difficult experiences at a pace that feels manageable.']
];

function FAQ(){
    const [open,setOpen]=useState(null);
    return  <section id="faq" className="section bg-[var(--cream)]">
        <div className="container grid lg:grid-cols-[.7fr_1.3fr] gap-16">
            <div>
                <div className="eyebrow mb-5">
                    FAQs
                    </div>
                    <h2 className="text-[clamp(42px,5vw,62px)]">A few things you may be wondering.</h2>
                    </div>
                    <div>
                        {faqs.map(([q,a],i)=>
                        <div className="border-t border-[var(--line)] last:border-b" key={q}>
                            <button onClick={()=>setOpen(open===i?null:i)} className="w-full py-6 flex items-center justify-between text-left text-lg font-semibold">{q}<ChevronDown className={open===i?'rotate-180':''} size={20}/>
                            </button>
                            {open===i&&<p className="pb-7 pr-10 leading-7 text-[var(--muted)]">{a}</p>}
                            </div>)}
                            </div>
                            </div>
                            </section>
                            }

function CTA(){
    return <section id="contact" className="bg-[var(--deep)] text-white">
        <div className="container py-28 text-center">
            <div className="eyebrow !text-[var(--sage)] mb-5">
                Schedule a consultation
                </div>
                <h2 className="text-[clamp(46px,6vw,76px)] max-w-[850px] mx-auto mb-7">Finding the right therapist can be the first step toward feeling more like yourself.</h2>
                <p className="max-w-[650px] mx-auto text-white/75 text-lg leading-8 mb-9">If Dr. Reynolds’ approach feels like it may be a good fit, you’re welcome to reach out and begin the conversation.</p>
                <a href="#top" className="btn btn-light">Schedule a Consultation <ArrowUpRight size={18} className="ml-2"/></a>
                </div>
                </section>
                }

function Footer(){
    return <footer className="bg-[var(--ink)] text-white/75">
        <div className="container py-16 grid md:grid-cols-3 gap-12">
            <div>
                <div className="serif text-[25px] text-white">
                    Dr. Maya Reynolds
                    </div>
                    <div className="text-[11px] tracking-[.18em] uppercase mt-2">
                        Licensed Clinical Psychologist
                        </div>
                        </div>
                        <div>
                            <div className="text-white font-semibold mb-4">
                                Explore
                                </div>
                                <div className="grid gap-3 text-sm">
                                    <a href="#about">About</a>
                                    <a href="#services">Services</a><a href="#approach">Approach</a>
                                    <a href="#office">Our Office</a><a href="#faq">FAQs</a>
                                    </div>
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold mb-4">
                                            Santa Monica Office
                                            </div>
                                            <p className="text-sm leading-7">123th Street 45 W<br/>Santa Monica, CA 90401<br/><br/>In-person therapy in Santa Monica<br/>Secure telehealth throughout California</p>
                                            </div>
                                            </div>
                                            <div className="container border-t border-white/15 py-6 text-xs">
                                            © 2026 Dr. Maya Reynolds, PsyD · Privacy · Disclaimer
                                            </div>
                                            </footer>
                                            }

function App(){return <><Header/><main><Hero/><Intro/><Who/><Expertise/><Approach/><Services/><Office/><FAQ/><CTA/></main><Footer/></>}

export default App;
