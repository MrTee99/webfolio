import SectionHeaderBlock from '@/components/blocks/section-header-block';
import { Button } from '@/components/ui/button';
import { SubmitContact } from '@/firebase/contact';
import { Check } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'sonner';

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      setIsSubmitting(true);
      e.preventDefault();
      const response = await SubmitContact(formData);
      if (response.isSuccess === false) throw new Error();
      setFormData({ name: '', email: '', subject: '', message: '' });
      toast(
        <div className="flex flex-row items-center gap-2">
          <div className="bg-foreground text-background flex size-3.5 items-center justify-center rounded-full">
            <Check strokeWidth={4} size={9} />
          </div>
          <span>Message sent successfully!</span>
        </div>,
        { description: "Thank you for reaching out. Your message has been received, and I'll get back to you shortly.", duration: 5000, dismissible: true },
      );
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      toast.error('Something went wrong!');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="my-20 flex flex-col items-center justify-center gap-10 md:my-32">
      <SectionHeaderBlock subtitle="Connect" title="What's on Your Mind?" description="Have a project, idea, or just want to say hi? Drop me a message." />
      <form onSubmit={handleSubmit} className="grid w-full max-w-[40rem] grid-cols-1 gap-4 md:grid-cols-2">
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="bg-card focus:outline-foreground rounded-sm p-3 text-sm font-medium" placeholder="Name" required />
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="bg-card focus:outline-foreground rounded-sm p-3 text-sm font-medium" placeholder="Email" required />
        <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="bg-card focus:outline-foreground rounded-sm p-3 text-sm font-medium md:col-span-2" placeholder="Subject" required />
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="bg-card focus:outline-foreground rounded-sm p-3 text-sm font-medium md:col-span-2" rows={8} placeholder="Tell me about your project..." />
        <Button type="submit" className="cursor-pointer rounded-sm md:col-span-2" size="lg" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
