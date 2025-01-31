import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/lib/firebaseConfig';

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  createdAt?: Date;
}

export async function submitContact(formData: ContactFormData) {
  try {
    const contactsRef = collection(db, 'bytebase_website_contacts');
    const contactData = {
      ...formData,
      createdAt: new Date(),
    };
    
    const docRef = await addDoc(contactsRef, contactData);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error submitting contact:', error);
    throw new Error('Failed to submit contact form');
  }
}