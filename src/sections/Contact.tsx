import { useState, useEffect, useRef } from 'react';
import {  Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formRef.current) return;

    emailjs
      .sendForm(
        'service_01e8az5',
        'template_m39vuir',
        formRef.current,
        'VHhKsEP48oiqFZbUV'
      )
      .then(() => {
        setIsSubmitted(true);
        setIsSubmitting(false);
        formRef.current?.reset();

        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      })
      .catch(() => {
        alert('Error sending message ❌');
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 px-4">
      <div className="max-w-4xl mx-auto">

        <div className="contact-header text-center mb-12 opacity-0">
          <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
          <p>Have a project? Send me a message 🚀</p>
        </div>

        <div className="glass-card rounded-2xl p-8">

          {isSubmitted ? (
            <div className="text-center py-10">
              <CheckCircle className="mx-auto w-12 h-12 text-green-500 mb-4" />
              <h4 className="text-xl font-bold">Message Sent!</h4>
              <p>I’ll reply as soon as possible.</p>
            </div>
          ) : (

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">

              <Input name="name" placeholder="Your name" required />
              <Input name="email" type="email" placeholder="Your email" required />
              <Input name="subject" placeholder="Subject" required />
              <Textarea name="message" placeholder="Your message" required rows={5} />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? 'Sending...' : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </span>
                )}
              </Button>

            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;

